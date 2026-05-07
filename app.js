/* ════════════════════════════════════════════════════════════════
   Westerwald App – Routing + Render-Engine v3
   ════════════════════════════════════════════════════════════════ */

'use strict';

window.addEventListener('DOMContentLoaded', function() {
  initSplash();
  initCookieGate();

  // Header → wir-westerwaelder.de
  var hdr = document.getElementById('app-header-link');
  if (hdr) hdr.addEventListener('click', function() {
    window.open('https://www.wir-westerwaelder.de', '_blank', 'noopener');
  });

  // Header-Höhe messen und als CSS-Variable setzen, damit alle sticky-Bereiche
  // sauber DARUNTER andocken (Banner ist sticky, sticky-region/sticky-detail
  // sollen direkt darunter kleben).
  measureHeaderHeight();
  window.addEventListener('resize', measureHeaderHeight);
  // Auch bei Bild-Ladung (Banner-Bild) neu messen
  var hdrImg = document.querySelector('.app-header img');
  if (hdrImg) hdrImg.addEventListener('load', measureHeaderHeight);

  // Pinch-Zoom für Dropdown-Inhalte aktivieren
  initPinchZoom();

  // Footer-Modals
  document.querySelectorAll('[data-modal]').forEach(function(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      oeffneModal(el.getAttribute('data-modal'));
    });
  });
  document.getElementById('modal-schliessen').addEventListener('click', schliesseModal);
  document.getElementById('modal-overlay').addEventListener('click', function(e) {
    if (e.target.id === 'modal-overlay') schliesseModal();
  });
});

function measureHeaderHeight() {
  var h = document.querySelector('.app-header');
  if (!h) return;
  var px = Math.round(h.getBoundingClientRect().height);
  document.documentElement.style.setProperty('--header-h', px + 'px');
}

// ════════════════════════════════════════════════════════════════
// PINCH-ZOOM für Dropdown-Inhalte
// Zwei-Finger-Geste auf .dropdown-inhalt skaliert font-size dieses
// Containers (NICHT das ganze Layout). Zeilenumbrüche bleiben sauber,
// weil nur font-size wächst.
// Bedienung:
//   • Zwei Finger auseinanderziehen → Schrift größer
//   • Zwei Finger zusammenführen   → Schrift kleiner
//   • Bereich: 100% (default) bis 220% / 80%
//   • Doppeltipp setzt zurück
// Pro Dropdown wird der individuelle Skalierungsfaktor merken
// (data-zoom-Attribut). Das Resetten beim Schließen ist nicht nötig –
// es bleibt erhalten, bis der Container neu gerendert wird.
// ════════════════════════════════════════════════════════════════
var PINCH_MIN = 0.8;
var PINCH_MAX = 2.2;
var PINCH_BASE_FONT = 15; // muss zu CSS .dropdown-inhalt passen

function initPinchZoom() {
  // Touch-Listener am gesamten App-Container, dann delegieren
  var app = document.getElementById('app') || document.body;
  if (app.__pinchInit) return;
  app.__pinchInit = true;

  var state = null;
  // Zeitstempel des letzten Pinch-Endes – verhindert, dass das gleichzeitige
  // Hochheben beider Finger als „Doppeltipp“ fehlinterpretiert wird.
  var letztesPinchEnde = 0;

  app.addEventListener('touchstart', function(e) {
    if (e.touches.length !== 2) return;
    var ziel = findPinchTarget(e.target);
    if (!ziel) return;
    e.preventDefault();
    var d = pinchDist(e.touches[0], e.touches[1]);
    var startSkala = parseFloat(ziel.getAttribute('data-zoom') || '1');
    state = { ziel: ziel, startDist: d, startSkala: startSkala, hatGezoomt: false };
  }, { passive: false });

  app.addEventListener('touchmove', function(e) {
    if (!state || e.touches.length !== 2) return;
    e.preventDefault();
    var d = pinchDist(e.touches[0], e.touches[1]);
    var faktor = d / state.startDist;
    var neueSkala = Math.max(PINCH_MIN, Math.min(PINCH_MAX, state.startSkala * faktor));
    // Nur als „echten“ Zoom werten, wenn die Distanz sich messbar geändert hat
    if (Math.abs(faktor - 1) > 0.05) state.hatGezoomt = true;
    setPinchZoom(state.ziel, neueSkala);
  }, { passive: false });

  app.addEventListener('touchend', function(e) {
    if (!state) return;
    // Sobald Finger-Anzahl unter 2 fällt, Pinch-Geste beenden – aber den
    // Zoom-Wert behalten (war ja absichtlich vom User gesetzt).
    if (e.touches.length < 2) {
      if (state.hatGezoomt) {
        // Sperre Doppeltap-Reset für 600 ms nach Pinch-Ende: das gleichzeitige
        // Hochheben beider Finger erzeugt sonst zwei touchend-Events binnen
        // weniger Millisekunden und triggert den Reset fälschlich.
        letztesPinchEnde = Date.now();
      }
      state = null;
    }
  }, { passive: true });

  // Doppel-Tipp zum Zurücksetzen
  var letzterTap = 0;
  app.addEventListener('touchend', function(e) {
    // Während/direkt nach einem Pinch nicht als Tap zählen
    if (state) return;
    if (Date.now() - letztesPinchEnde < 600) return;
    // Nur Single-Finger-Taps werten
    if (e.changedTouches && e.changedTouches.length > 1) return;

    var jetzt = Date.now();
    if (jetzt - letzterTap < 300) {
      var ziel = findPinchTarget(e.target);
      if (ziel && ziel.getAttribute('data-zoom') && ziel.getAttribute('data-zoom') !== '1') {
        setPinchZoom(ziel, 1);
      }
      letzterTap = 0; // Reset, damit kein Triple-Tap
    } else {
      letzterTap = jetzt;
    }
  }, { passive: true });
}

function findPinchTarget(el) {
  while (el && el !== document.body) {
    if (el.classList && el.classList.contains('dropdown-inhalt')) return el;
    el = el.parentNode;
  }
  return null;
}

function pinchDist(t1, t2) {
  var dx = t2.clientX - t1.clientX;
  var dy = t2.clientY - t1.clientY;
  return Math.sqrt(dx*dx + dy*dy);
}

function setPinchZoom(el, skala) {
  el.setAttribute('data-zoom', skala.toFixed(2));
  el.style.fontSize = (PINCH_BASE_FONT * skala).toFixed(1) + 'px';
}

window.addEventListener('hashchange', router);

// ════════════════════════════════════════════════════════════════
// SPLASH
// ════════════════════════════════════════════════════════════════
function initSplash() {
  // Choreographie: links Sprechblase „Hui Wäller?", dann zwinkern,
  // dann rechts Sprechblase „Allemol!", dann ausblenden.
  var bubble1 = document.getElementById('sprechblase-1');
  var bubble2 = document.getElementById('sprechblase-2');
  var lidL    = document.getElementById('lid-links');
  var lidR    = document.getElementById('lid-rechts');
  var overlay = document.getElementById('eichhoernchen-overlay');

  function zwinker() {
    if (!lidL || !lidR) return;
    lidL.classList.remove('zwinkern');
    lidR.classList.remove('zwinkern');
    // Force-Reflow, damit die Animation neu startet
    void lidL.offsetWidth;
    lidL.classList.add('zwinkern');
    lidR.classList.add('zwinkern');
  }

  // 1. Bubble links erscheint nach 400ms
  setTimeout(function() { if (bubble1) bubble1.classList.add('sichtbar'); }, 400);
  // 2. Zwinkern bei 1100ms
  setTimeout(zwinker, 1100);
  // 3. Bubble rechts erscheint nach 1800ms (links bleibt aber sichtbar)
  setTimeout(function() { if (bubble2) bubble2.classList.add('sichtbar'); }, 1800);
  // 4. Zwinkern bei 2400ms
  setTimeout(zwinker, 2400);
  // 5. Splash ausblenden bei 3300ms (übergibt an Cookie-Gate)
  setTimeout(function() {
    if (overlay) overlay.classList.add('weg');
  }, 3300);
  // 6. DOM-Element komplett entfernen nach Fade-out
  setTimeout(function() {
    if (overlay) overlay.style.display = 'none';
  }, 3800);
}

// ════════════════════════════════════════════════════════════════
// COOKIE-GATE / DATENSCHUTZ-AKZEPTANZ
// Strikt: bei JEDEM Öffnen der App muss neu akzeptiert werden.
// Es wird NICHTS gespeichert – kein localStorage, kein Cookie.
// Solange nicht aktiv akzeptiert wurde, läuft KEIN router() und
// wird KEINE App gerendert.
// ════════════════════════════════════════════════════════════════
function initCookieGate() {
  var ov  = document.getElementById('cookie-overlay');
  var btn = document.getElementById('cookie-akzeptieren');
  var app = document.getElementById('app');

  // App initial verstecken bis Akzeptanz
  if (app) app.style.visibility = 'hidden';

  function freischalten() {
    if (app) app.style.visibility = '';
    router();
  }

  // Overlay erscheint nach Splash-Ende
  setTimeout(function() {
    if (ov) ov.style.display = 'flex';
  }, 3400);

  if (btn) {
    btn.addEventListener('click', function() {
      if (ov) ov.style.display = 'none';
      freischalten();
    });
  }
}

// ════════════════════════════════════════════════════════════════
// MODALS
// ════════════════════════════════════════════════════════════════
function oeffneModal(name) {
  var inhalt = '';
  var titel = '';
  if (name === 'impressum')        { inhalt = window._IMPRESSUM_HTML || ''; titel = 'Impressum'; }
  else if (name === 'datenschutz') { inhalt = window._DATENSCHUTZ_HTML || ''; titel = 'Datenschutzerklärung'; }
  else if (name === 'barrierefreiheit') {
    var aktiv = document.body.classList.contains('barrierefrei');
    inhalt =
      '<div class="bf-toggle-box">'
        + '<h3>Barrierefreier Modus</h3>'
        + '<p>Wenn du den barrierefreien Modus einschaltest, werden alle Schriften deutlich vergrößert, Kontraste erhöht, Animationen reduziert und Tasten/Links besser sichtbar. Touch-Ziele werden mindestens 48&times;48 Pixel groß.</p>'
        + '<button class="bf-toggle-btn ' + (aktiv ? 'bf-an' : '') + '" onclick="toggleBarrierefrei()">'
          + '<span class="bf-toggle-status">' + (aktiv ? '✓ AN' : 'AUS') + '</span>'
          + '<span class="bf-toggle-label">Barrierefreier Modus</span>'
        + '</button>'
        + '<p class="bf-toggle-hinweis"><em>Hinweis: Der Modus wird beim nächsten App-Start zurückgesetzt – Dein Datenschutz hat Vorrang.</em></p>'
      + '</div>'
      + '<h3>Erklärung zur Barrierefreiheit</h3>'
      + '<p>Die Wir Westerwälder gAöR ist bestrebt, ihre App im Einklang mit den nationalen Rechtsvorschriften zur Umsetzung der Richtlinie (EU) 2016/2102 des Europäischen Parlaments und des Rates barrierefrei zugänglich zu machen.</p>'
      + '<p>Diese Erklärung zur Barrierefreiheit gilt für die Web-App <strong>„Guck ma, Westerwald"</strong>.</p>'

      + '<h3>Stand der Vereinbarkeit mit den Anforderungen</h3>'
      + '<p>Diese App ist mit der Barrierefreie-Informationstechnik-Verordnung (BITV 2.0) und den Web Content Accessibility Guidelines (WCAG) 2.1 Level AA <strong>weitgehend vereinbar</strong>. Folgende Maßnahmen sind umgesetzt:</p>'
      + '<ul>'
        + '<li>Semantisches HTML mit klarer Überschriften-Hierarchie</li>'
        + '<li>Tastatur-Bedienbarkeit aller interaktiven Elemente</li>'
        + '<li>Mindestkontrast 4,5:1 für alle Texte</li>'
        + '<li>Skalierbare Schriftgrößen (Pinch-to-Zoom in Inhaltsbereichen)</li>'
        + '<li>Optionaler barrierefreier Modus mit erhöhter Lesbarkeit (siehe oben)</li>'
        + '<li>Aussagekräftige Linktexte und ARIA-Labels</li>'
        + '<li>Alternativtexte für Logos und dekorative Bilder</li>'
        + '<li>Fokus-Indikatoren für die Tastatur-Navigation</li>'
      + '</ul>'

      + '<h3>Nicht barrierefreie Inhalte</h3>'
      + '<p>Die folgenden Inhalte sind aus den genannten Gründen nicht oder nur eingeschränkt barrierefrei:</p>'
      + '<ul>'
        + '<li><strong>Eingebettete externe PDF-Dokumente</strong> (z. B. Einkaufsführer, Naturgenuss-Broschüre): Diese werden durch externe Drittanbieter bereitgestellt und können nicht durch die App barrierefrei aufbereitet werden.</li>'
        + '<li><strong>Eingebettete Webseiten Dritter</strong> (z. B. westerwald.info, Westerwaldbus, VRM): Diese Inhalte unterliegen der Verantwortung der jeweiligen Anbieter.</li>'
        + '<li><strong>Logos der Direktvermarkter</strong>: Diese werden direkt vom Anbieter wir-westerwaelder.de geladen und enthalten keine ausführlichen Alt-Texte.</li>'
      + '</ul>'

      + '<h3>Erstellung dieser Erklärung</h3>'
      + '<p>Diese Erklärung wurde am 06. Mai 2026 erstellt. Sie beruht auf einer Selbstbewertung.</p>'

      + '<h3>Feedback und Kontaktangaben</h3>'
      + '<p>Sind Ihnen Mängel beim barrierefreien Zugang zu Inhalten dieser App aufgefallen? Bitte teilen Sie uns dies mit. Wir bemühen uns, festgestellte Barrieren zeitnah zu beheben.</p>'
      + '<p><strong>Kontakt:</strong><br>'
        + 'Wir Westerwälder gAöR<br>'
        + 'Königsberger Str. 40, 56269 Dierdorf<br>'
        + 'E-Mail: <a href="mailto:info@wir-westerwaelder.de">info@wir-westerwaelder.de</a><br>'
        + 'Telefon: <a href="tel:+49268995929-40">02689 95929-40</a></p>'

      + '<h3>Schlichtungsverfahren</h3>'
      + '<p>Beim Beauftragten der Bundesregierung für die Belange von Menschen mit Behinderungen kann ein Schlichtungsverfahren nach § 16 BGG beantragt werden:</p>'
      + '<p>Schlichtungsstelle nach dem Behindertengleichstellungsgesetz<br>'
        + 'bei dem Beauftragten der Bundesregierung für die Belange von Menschen mit Behinderungen<br>'
        + 'Mauerstraße 53<br>'
        + '10117 Berlin<br>'
        + 'Telefon: 030 18 527-2805<br>'
        + 'E-Mail: <a href="mailto:info@schlichtungsstelle-bgg.de">info@schlichtungsstelle-bgg.de</a><br>'
        + 'Internet: <a href="https://www.schlichtungsstelle-bgg.de" target="_blank" rel="noopener">www.schlichtungsstelle-bgg.de</a></p>';
    titel = 'Barrierefreiheit';
  }
  if (!inhalt) return;
  document.getElementById('modal-titel').textContent = titel;
  document.getElementById('modal-inhalt').innerHTML = inhalt;
  document.getElementById('modal-overlay').classList.add('aktiv');
  document.body.classList.add('modal-offen');
  document.getElementById('modal-inhalt').scrollTop = 0;
}
function schliesseModal() {
  document.getElementById('modal-overlay').classList.remove('aktiv');
  document.body.classList.remove('modal-offen');
}

// ════════════════════════════════════════════════════════════════
// BARRIEREFREIER MODUS – Toggle (kein localStorage, gilt nur für Session)
// ════════════════════════════════════════════════════════════════
function toggleBarrierefrei() {
  var aktiv = document.body.classList.toggle('barrierefrei');
  // Modal neu rendern, damit der Knopf-Status aktualisiert wird
  oeffneModal('barrierefreiheit');
}
window.toggleBarrierefrei = toggleBarrierefrei;

// ════════════════════════════════════════════════════════════════
// ROUTER
// ════════════════════════════════════════════════════════════════
function router() {
  var hash = window.location.hash.slice(1) || 'home';
  var teile = hash.split('/');
  var ziel = document.getElementById('content');
  ziel.innerHTML = '';
  document.body.classList.toggle('home-page', teile[0] === 'home' || teile[0] === '');
  window.scrollTo(0, 0);

  if (teile[0] === 'home' || teile[0] === '') renderHome(ziel);
  else if (teile[0] === 'kategorie' && teile[1]) renderKategorie(ziel, teile[1]);
  else if (teile[0] === 'liste' && teile[1])    renderListe(ziel, teile[1]);
  else if (teile[0] === 'detail' && teile[1] && teile[2]) renderDetail(ziel, teile[1], teile[2]);
  else renderHome(ziel);
}
function navigateTo(pfad) { window.location.hash = pfad; }

// ════════════════════════════════════════════════════════════════
// LAYOUT-BAUSTEINE
// ════════════════════════════════════════════════════════════════
function intro(gruss, untertitel, animiert) {
  // Default: animieren wann immer ein Untertitel da ist (Welleneffekt)
  if (animiert === undefined) animiert = !!untertitel;
  if (animiert && untertitel) {
    var spans2 = '';
    var inEm = false; var idxLetter = 0;
    for (var j = 0; j < untertitel.length; j++) {
      if (untertitel.substr(j, 4) === '<em>') { inEm = true; j += 3; continue; }
      if (untertitel.substr(j, 5) === '</em>') { inEm = false; j += 4; continue; }
      var c = untertitel.charAt(j);
      var styleEm = inEm ? 'font-style:italic;font-weight:700;color:var(--hellgruen-s);' : '';
      spans2 += '<span style="animation-delay:' + (idxLetter * 0.04) + 's;' + styleEm + '">'
        + (c === ' ' ? '&nbsp;' : escapeHtml(c)) + '</span>';
      idxLetter++;
    }
    return '<section class="section-intro">'
      + '<h1 class="gruss">' + gruss + '</h1>'
      + '<p class="untertitel"><span class="welle-text">' + spans2 + '</span></p>'
      + '</section>';
  }
  return '<section class="section-intro">'
    + '<h1 class="gruss">' + gruss + '</h1>'
    + (untertitel ? '<p class="untertitel">' + untertitel + '</p>' : '')
    + '</section>';
}

function navBar(zurueckHash, pfadHTML) {
  return '<div class="nav-bar">'
    + '<button class="nav-zurueck" onclick="navigateTo(\'' + zurueckHash + '\')">&larr; Zurück</button>'
    + '<div class="nav-pfad">' + pfadHTML + '</div>'
    + '</div>';
}

// ════════════════════════════════════════════════════════════════
// HAUPTSEITE
// ════════════════════════════════════════════════════════════════
function renderHome(ziel) {
  ziel.innerHTML =
    intro('Hui Wäller? Allemol!', 'Entdecke die <em>Vielfalt</em> des Westerwaldes.', true)
    + window._WASSERZEICHEN
    + '<nav class="kategorien">'
      + kachel('tourismus', 'Tourismus<br>&amp; Freizeit', ICONS.wandern)
      + kachel('regional',  'Regionale<br>Produkte',     ICONS.korb)
      + kachel('kultur',    'Kunst<br>&amp; Kultur',     ICONS.krug)
      + kachel('mobilitaet','Mobilität<br>&amp; Verkehr',ICONS.bus)
    + '</nav>'
    + '<div class="spacer"></div>';
}
function kachel(slug, label, iconSvg) {
  return '<button class="kat" onclick="navigateTo(\'kategorie/' + slug + '\')">'
    + '<div class="kat-label">' + label + '</div>'
    + '<div class="kat-icon">' + iconSvg + '</div>'
    + '</button>';
}

// ════════════════════════════════════════════════════════════════
// KATEGORIEN
// ════════════════════════════════════════════════════════════════
var KATEGORIEN = {
  'tourismus': {
    titel:'Tourismus & Freizeit', untertitel:'Wandern, Radfahren, Ausflugsziele und mehr.',
    subs:[
      {slug:'wandern',         label:'Wandern',         meta:'5 Wanderregionen', icon:ICONS.wandern},
      {slug:'radfahren',       label:'Radfahren',       meta:'5 Routenarten',     icon:ICONS.fahrrad},
      {slug:'ausflugsziele',   label:'Ausflugsziele',   meta:'POIs in der Region',icon:ICONS.markierung},
      {slug:'badeseen',        label:'Badeseen',        meta:'Naturbadestellen',  icon:ICONS.welle},
      {slug:'unterkuenfte',    label:'Unterkünfte',     meta:'Hotels & Pensionen',icon:ICONS.haus},
      {slug:'veranstaltungen', label:'Veranstaltungen', meta:'Alle Termine in der Region', icon:ICONS.kalender}
    ]
  },
  'regional': {
    titel:'Regionale Produkte', untertitel:'Direkt vom Erzeuger – aus dem Westerwald.',
    subs:[
      {slug:'einkaufsfuehrer', label:'Regionaler Einkaufsführer', meta:'Direktvermarkter & Hofläden', icon:ICONS.korb},
      {slug:'westerwald-box',  label:'Westerwald Box',            meta:'Geschenkbox aus der Region',  icon:ICONS.werkbank},
      {slug:'westerwaelder-ernte', label:'Westerwälder Ernte',    meta:'Saisonkalender & Erzeuger',   icon:ICONS.markt},
      {slug:'naturgenuss',     label:'Naturgenuss Partner',       meta:'Erzeuger & Produkte',         icon:ICONS.korb}
    ]
  },
  'kultur': {
    titel:'Kunst & Kultur', untertitel:'Museen, Veranstaltungen und Festivals.',
    subs:[
      {slug:'museen',          label:'Museen',          meta:'14 Sammlungen & Ausstellungen', icon:ICONS.krug},
      {slug:'veranstaltungen', label:'Kunst & Kultur',  meta:'Übersicht auf wir-westerwaelder.de', icon:ICONS.kalender}
    ]
  },
  'mobilitaet': {
    titel:'Mobilität & Verkehr', untertitel:'So bist du in der Region unterwegs.',
    subs:[
      {slug:'bahn-bus',     label:'Bahn & Bus',    meta:'ÖPNV-Verbindungen',       icon:ICONS.bus},
      {slug:'mitfahrbank',  label:'Mitfahrerbänke', meta:'Standorte in der Region', icon:ICONS.markierung},
      {slug:'fahrgemeinschaften', label:'Fahrgemeinschaften', meta:'ADAC Pendlernetz',    icon:ICONS.info}
    ]
  }
};

function renderKategorie(ziel, slug) {
  var kat = KATEGORIEN[slug];
  if (!kat) { renderHome(ziel); return; }
  var subsHTML = kat.subs.map(function(s) {
    return '<button class="subkat" onclick="navigateTo(\'liste/' + slug + '-' + s.slug + '\')">'
      + '<div class="subkat-icon">' + s.icon + '</div>'
      + '<div class="subkat-text">'
        + '<div class="subkat-label">' + s.label + '</div>'
        + '<div class="subkat-meta">' + s.meta + '</div>'
      + '</div>'
      + '<div class="subkat-pfeil">&rsaquo;</div>'
    + '</button>';
  }).join('');
  ziel.innerHTML =
    '<div class="sticky-region">'
    + navBar('home', '<strong>' + kat.titel + '</strong>')
    + intro(kat.titel, kat.untertitel)
    + '</div>'
    + '<nav class="subkategorien">' + subsHTML + '</nav>'
    + '<div class="spacer"></div>';
}

// ════════════════════════════════════════════════════════════════
// LISTEN
// ════════════════════════════════════════════════════════════════
var LISTEN = {
  'tourismus-wandern': {
    titel:'Wandern', breadcrumb:'Tourismus &amp; Freizeit › <strong>Wandern</strong>',
    zurueck:'kategorie/tourismus', untertitel:'Die schönsten Touren des Westerwaldes.',
    typ:'unterkategorie',
    items:[
      {label:'WesterwaldSteig', meta:'16 Etappen, ca. 235 km', sub:'westerwaldsteig', icon:ICONS.wandernSimple},
      {label:'Druidensteig',    meta:'8 Etappen, ca. 84 km',    sub:'druidensteig',    icon:ICONS.wandernSimple},
      {label:'Wiedweg',         meta:'8 Etappen, ca. 117 km',   sub:'wiedweg',         icon:ICONS.wandernSimple},
      {label:'Wäller Touren',   meta:'Tageswanderungen',         sub:'waeller-touren',  icon:ICONS.wandernSimple},
      {label:'Kleine Wäller',   meta:'Kurze Rundtouren',         sub:'kleine-waeller',  icon:ICONS.wandernSimple}
    ]
  },
  'tourismus-radfahren': {
    titel:'Radfahren', breadcrumb:'Tourismus &amp; Freizeit › <strong>Radfahren</strong>',
    zurueck:'kategorie/tourismus', untertitel:'Routen für jeden Anspruch.',
    typ:'unterkategorie',
    items:[
      {label:'Rundradwege',     meta:'Tagestouren',          sub:'rundradwege',     icon:ICONS.rundrad},
      {label:'Streckenradwege', meta:'Mehrtagestouren',       sub:'streckenradwege', icon:ICONS.streckenrad},
      {label:'Gravelbike',      meta:'Schotterstrecken',     sub:'gravelbike',      icon:ICONS.gravelbike},
      {label:'Mountainbike',    meta:'Trails & Singletracks', sub:'mountainbike',   icon:ICONS.mountainbike},
      {label:'Rennrad',         meta:'Asphaltierte Strecken', sub:'rennrad',        icon:ICONS.rennrad},
      {label:'E-Bike Infrastruktur', meta:'Verleih, Werkstätten, Akku-Wechselstationen', sub:'ebike-infrastruktur', icon:ICONS.fahrrad}
    ]
  },
  'tourismus-radfahren-ebike-infrastruktur': {
    datenName:'DATA_EBIKE_INFRASTRUKTUR',
    titel:'E-Bike Infrastruktur',
    breadcrumb:'Radfahren › <strong>E-Bike Infrastruktur</strong>',
    zurueck:'liste/tourismus-radfahren',
    untertitel:'Verleih, Werkstätten, Akku-Wechselstationen und Shops.',
    detailKey:'ebike',
    renderTyp:'gefiltert',
    filterLabel:'Typ',
    filterTypen:[
      {key:'alle',     label:'Alle'},
      {key:'akku',     label:'Akku-Wechselstation'},
      {key:'verleih',  label:'Verleih'},
      {key:'reparatur',label:'Reparatur'},
      {key:'shop',     label:'Shop'},
      {key:'sonstige', label:'Sonstige'}
    ],
    typErkenner: function(item) {
      var t = (item.type || '').toLowerCase();
      if (t.indexOf('akku') >= 0 || t.indexOf('ladestation') >= 0 || t.indexOf('wechselstation') >= 0 || t.indexOf('pedelec-stationen') >= 0) return 'akku';
      if (t.indexOf('verleih') >= 0) return 'verleih';
      if (t.indexOf('reparatur') >= 0 || t.indexOf('werkstatt') >= 0) return 'reparatur';
      if (t.indexOf('shop') >= 0 || t.indexOf('geschäft') >= 0 || t.indexOf('geschaeft') >= 0) return 'shop';
      return 'sonstige';
    }
  },
  'tourismus-ausflugsziele': {
    titel:'Ausflugsziele',
    breadcrumb:'Tourismus &amp; Freizeit › <strong>Ausflugsziele</strong>',
    zurueck:'kategorie/tourismus',
    untertitel:'Sehenswertes in der Region (Live-Daten von westerwald.info).',
    renderTyp:'iframe',
    iframeUrl:'https://www.westerwald.info/tosc5/infrastruktur?limINFOSYSTEMSUBTOPICS=a1716a20-0da0-4cd6-b473-febf29b39eea,f7fe9672-2fdc-4105-bbc7-40bb170afef3#/pois',
    iframeTyp:'webseite'
  },
  'tourismus-badeseen':      {datenName:'DATA_BADESEEN_NEU',  titel:'Badeseen',     breadcrumb:'Tourismus &amp; Freizeit › <strong>Badeseen</strong>',     zurueck:'kategorie/tourismus', untertitel:'Erfrischung und Naturerlebnis.', detailKey:'badesee'},
  'tourismus-unterkuenfte': {
    titel:'Unterkünfte',
    breadcrumb:'Tourismus &amp; Freizeit › <strong>Unterkünfte</strong>',
    zurueck:'kategorie/tourismus',
    untertitel:'Hotels, Pensionen, Ferienwohnungen, Camping (Live-Daten von westerwald.info).',
    renderTyp:'iframe',
    iframeUrl:'https://www.westerwald.info/tosc5/unterkuenfte/#/unterkuenfte',
    iframeTyp:'webseite'
  },
  'tourismus-veranstaltungen': {datenName:'DATA_VERANSTALTUNGEN_ALLE', titel:'Veranstaltungen', breadcrumb:'Tourismus &amp; Freizeit › <strong>Veranstaltungen</strong>', zurueck:'kategorie/tourismus', untertitel:'Alle Termine in der Region.', detailKey:'event', renderTyp:'termine'},

  // KUNST & KULTUR
  'kultur-museen': {datenName:'DATA_KULTUR_MUSEEN', titel:'Museen', breadcrumb:'Kunst &amp; Kultur › <strong>Museen</strong>', zurueck:'kategorie/kultur', untertitel:'Sammlungen und Ausstellungen.', detailKey:'museum', renderTyp:'museenInline'},
  'kultur-veranstaltungen': {
    titel:'Kunst & Kultur',
    breadcrumb:'Kunst &amp; Kultur › <strong>Übersicht</strong>',
    zurueck:'kategorie/kultur',
    untertitel:'Aktuelle Termine und Übersicht von Wir Westerwälder.',
    renderTyp:'iframe',
    iframeUrl:'https://wir-westerwaelder.de/kunst-kultur/',
    iframeTyp:'webseite'
  },

  // REGIONALE PRODUKTE
  'regional-einkaufsfuehrer': {titel:'Regionaler Einkaufsführer Westerwald', breadcrumb:'Regionale Produkte › <strong>Einkaufsführer</strong>', zurueck:'kategorie/regional', untertitel:'Direktvermarkter & Hofläden im Westerwald.', renderTyp:'iframe', iframeUrl:'https://cdn.jsdelivr.net/gh/infostele/infostele2@main/einkaufsfuehrer.pdf'},
  'regional-westerwald-box':  {titel:'Westerwald Box',  breadcrumb:'Regionale Produkte › <strong>Westerwald Box</strong>',  zurueck:'kategorie/regional', untertitel:'Der Westerwald als Geschenkbox.', renderTyp:'inhaltSeite', inhaltKey:'westerwaldBox'},
  'regional-westerwaelder-ernte': {titel:'Westerwälder Ernte', breadcrumb:'Regionale Produkte › <strong>Westerwälder Ernte</strong>', zurueck:'kategorie/regional', untertitel:'Saisonkalender und regionale Erzeuger.', renderTyp:'inhaltSeite', inhaltKey:'westerwaelderErnte'},
  'regional-naturgenuss':     {linkData:'naturgenuss',     titel:'Naturgenuss Partner', breadcrumb:'Regionale Produkte › <strong>Naturgenuss</strong>', zurueck:'kategorie/regional', untertitel:'Erzeuger & Produkte aus dem Westerwald.', renderTyp:'naturgenussLinks'},
  'regional-naturgenuss-erzeuger': {titel:'Naturgenuss Partner – Erzeuger & Produkte', breadcrumb:'Regionale Produkte › Naturgenuss › <strong>Erzeuger & Produkte</strong>', zurueck:'liste/regional-naturgenuss', untertitel:'PDF-Übersicht 05/2025.', renderTyp:'iframe', iframeUrl:'https://cdn.jsdelivr.net/gh/infostele/infostele2@main/naturgenusspartner.pdf'},
  'regional-naturgenuss-broschuere': {titel:'Naturgenuss Broschüre', breadcrumb:'Regionale Produkte › Naturgenuss › <strong>Broschüre</strong>', zurueck:'liste/regional-naturgenuss', untertitel:'Magazin 2022.', renderTyp:'iframe', iframeUrl:'https://cdn.jsdelivr.net/gh/infostele/infostele2@main/naturgenussmagazin.pdf'},
  'regional-naturgenuss-saisonprodukte': {titel:'Naturgenuss Saisonprodukte', breadcrumb:'Regionale Produkte › Naturgenuss › <strong>Saisonprodukte</strong>', zurueck:'liste/regional-naturgenuss', untertitel:'Saisonale Produkte und Rezepte.', renderTyp:'iframe', iframeUrl:'https://cdn.jsdelivr.net/gh/infostele/infostele2@main/naturgenussrezepte.pdf'},

  // MOBILITÄT & VERKEHR
  'mobilitaet-bahn-bus':      {linkData:'bahn-bus',      titel:'Bahn & Bus', breadcrumb:'Mobilität &amp; Verkehr › <strong>Bahn & Bus</strong>', zurueck:'kategorie/mobilitaet', untertitel:'Fahrpläne und ÖPNV-Verbindungen.', renderTyp:'subLinks'},
  'mobilitaet-mitfahrbank':   {linkData:'mitfahrbank',   titel:'Mitfahrerbänke', breadcrumb:'Mobilität &amp; Verkehr › <strong>Mitfahrerbänke</strong>', zurueck:'kategorie/mobilitaet', untertitel:'Standorte in der Region.', renderTyp:'subLinks'},
  'mobilitaet-fahrgemeinschaften': {linkData:'fahrgemeinschaften', titel:'Fahrgemeinschaften', breadcrumb:'Mobilität &amp; Verkehr › <strong>Fahrgemeinschaften</strong>', zurueck:'kategorie/mobilitaet', untertitel:'ADAC Pendlernetz – App für Mitfahrgelegenheiten.', renderTyp:'subLinks'},

  // Eingebettete Fahrplan-Anbieter (über iframe statt externer Link)
  'mobilitaet-bahn-bus-westerwaldbus': {
    titel:'Westerwaldbus (Kreis AK)',
    breadcrumb:'Mobilität &amp; Verkehr › Bahn & Bus › <strong>Westerwaldbus</strong>',
    zurueck:'liste/mobilitaet-bahn-bus',
    untertitel:'Fahrpläne der Verkehrsbetriebe Westerwaldkreis & Altenkirchen.',
    renderTyp:'iframe',
    iframeUrl:'https://www.westerwaldbus.de/fahrplaene',
    iframeTyp:'webseite'
  },
  'mobilitaet-bahn-bus-oepnv-ww': {
    titel:'ÖPNV Westerwaldkreis',
    breadcrumb:'Mobilität &amp; Verkehr › Bahn & Bus › <strong>ÖPNV Westerwaldkreis</strong>',
    zurueck:'liste/mobilitaet-bahn-bus',
    untertitel:'Aktuelle Linien und Fahrpläne im Westerwaldkreis.',
    renderTyp:'iframe',
    iframeUrl:'https://www.westerwaldkreis.de/oepnv.html',
    iframeTyp:'webseite'
  },
  'mobilitaet-bahn-bus-vrm': {
    titel:'VRM Fahrplanauskunft',
    breadcrumb:'Mobilität &amp; Verkehr › Bahn & Bus › <strong>VRM Fahrplanauskunft</strong>',
    zurueck:'liste/mobilitaet-bahn-bus',
    untertitel:'Verkehrsverbund Rhein-Mosel: Fahrpläne und Verbindungen.',
    renderTyp:'iframe',
    iframeUrl:'https://www.vrminfo.de/fahrplanauskunft/',
    iframeTyp:'webseite'
  }
};

// Sammlung der Sub-Link-Datensätze für die Linklisten-Render-Funktion
var SUB_LINKS = {
  // Regionale Produkte (aus DATA_REGIONALE_PRODUKTE.subs)
  'einkaufsfuehrer':       { lookup: 'regional', name: 'Regionaler Einkaufsführer' },
  'westerwald-box':        { lookup: 'regional', name: 'Westerwald Box' },
  'westerwaelder-ernte':   { lookup: 'regional', name: 'Westerwälder Ernte' },
  'naturgenuss':           { lookup: 'regional', name: 'Naturgenuss Partner' },
  // Mobilität & Verkehr (aus DATA_MOBILITAET_VERKEHR.subs)
  'bahn-bus':              { lookup: 'mobilitaet', names: ['Westerwaldbus (Kreis AK)', 'ÖPNV Westerwaldkreis', 'VRM Fahrplanauskunft'] },
  'mitfahrbank':           { lookup: 'mobilitaet', name: 'Mitfahrerbänke' },
  'fahrgemeinschaften':    { lookup: 'mobilitaet', name: 'ADAC Pendlernetz App' }
};

// Mapping: Sub-Name → interne App-Route (für iframe-Anzeige statt externen Link)
var SUB_INTERNAL_ROUTES = {
  'Westerwaldbus (Kreis AK)':  'liste/mobilitaet-bahn-bus-westerwaldbus',
  'ÖPNV Westerwaldkreis':      'liste/mobilitaet-bahn-bus-oepnv-ww',
  'VRM Fahrplanauskunft':      'liste/mobilitaet-bahn-bus-vrm'
};

var WANDER_DATEN = {
  'westerwaldsteig': {name:'DATA_WANDERN_WESTERWALDSTEIG', titel:'WesterwaldSteig', breadcrumb:'Wandern › <strong>WesterwaldSteig</strong>', untertitel:'235 km in 16 Etappen durch den Westerwald.'},
  'druidensteig':    {name:'DATA_WANDERN_DRUIDENSTEIG',    titel:'Druidensteig',    breadcrumb:'Wandern › <strong>Druidensteig</strong>',    untertitel:'Auf den Spuren der Kelten.'},
  'wiedweg':         {name:'DATA_WANDERN_WIEDWEG',         titel:'Wiedweg',         breadcrumb:'Wandern › <strong>Wiedweg</strong>',         untertitel:'Entlang der Wied.'},
  'waeller-touren':  {name:'DATA_WANDERN_WAELLER_TOUREN',  titel:'Wäller Touren',   breadcrumb:'Wandern › <strong>Wäller Touren</strong>',   untertitel:'Tageswanderungen mit Charme.'},
  'kleine-waeller':  {name:'DATA_WANDERN_KLEINE_WAELLER',  titel:'Kleine Wäller',   breadcrumb:'Wandern › <strong>Kleine Wäller</strong>',   untertitel:'Kurze Rundtouren für zwischendurch.'}
};
var RAD_DATEN = {
  'rundradwege':     {name:'DATA_RADFAHREN_RUNDRADWEGE',     titel:'Rundradwege',     breadcrumb:'Radfahren › <strong>Rundradwege</strong>',     untertitel:'Tagestouren als Rundkurs.'},
  'streckenradwege': {name:'DATA_RADFAHREN_STRECKENRADWEGE', titel:'Streckenradwege', breadcrumb:'Radfahren › <strong>Streckenradwege</strong>', untertitel:'Strecken durch die Region.'},
  'gravelbike':      {name:'DATA_RADFAHREN_GRAVELBIKE',      titel:'Gravelbike',      breadcrumb:'Radfahren › <strong>Gravelbike</strong>',      untertitel:'Routen abseits der Straße.'},
  'mountainbike':    {name:'DATA_RADFAHREN_MOUNTAINBIKE',    titel:'Mountainbike',    breadcrumb:'Radfahren › <strong>Mountainbike</strong>',    untertitel:'Singletrails und Trails.'},
  'rennrad':         {name:'DATA_RADFAHREN_RENNRAD',         titel:'Rennrad',         breadcrumb:'Radfahren › <strong>Rennrad</strong>',         untertitel:'Anspruchsvolle Asphaltrouten.'}
};

// ════════════════════════════════════════════════════════════════
// DATEN-NORMALISIERUNG
// ════════════════════════════════════════════════════════════════
function normalisiere(item) {
  var s = item.stats || {};
  return {
    titel:        item.title || item.t || item.name || 'Tour',
    subtitle:     item.subtitle || '',
    typ:          item.type || '',
    km:           item.km || s.distanz || '',
    schwierigkeit: item.difficulty || item.sw || s.schwierigkeit || '',
    dauer:        s.duration || s.dauer || item.duration || '',
    aufstieg:     s.ascent || s.aufstieg || '',
    abstieg:      s.descent || s.abstieg || '',
    hoechster:    s.highPoint || s.hoechsterPunkt || '',
    tiefster:     s.lowPoint || s.tiefsterPunkt || '',
    tags:         item.tags || item.d || '',
    gpxUrl:       item.gpxUrl || item.gpx || gpxAusTourenplaner(item.tourenplanerUrl || item.tourenplaner),
    tourenplanerUrl: item.tourenplanerUrl || item.tourenplaner || '',
    sourceUrl:    item.sourceUrl || item.url || '',
    description:  item.description,
    routeDescription: item.routeDescription,
    publicTransport: item.publicTransport,
    parking:      item.parking,
    directions:   item.directions,
    start:        item.start,
    destination:  item.destination,
    tips:         item.tips,
    safetyNotes:  item.safetyNotes,
    equipment:    item.equipment,
    sections:     item.sections
  };
}

function gpxAusTourenplaner(url) {
  if (!url) return null;
  var m = url.match(/tour\/(\d+)/);
  if (!m) return null;
  return 'https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=' + m[1] + '&project=oar-rlp';
}

function swKlasse(s) {
  s = (s||'').toLowerCase();
  if (s.indexOf('leicht') >= 0) return 'leicht';
  if (s.indexOf('schwer') >= 0) return 'schwer';
  if (s) return 'mittel';
  return '';
}
function dauerInMinuten(d) {
  if (!d) return null;
  var m = String(d).match(/(\d+(?:[.,]\d+)?)/);
  if (!m) return null;
  return parseFloat(m[1].replace(',','.')) * 60;
}
function kmZuZahl(k) {
  if (!k) return null;
  var m = String(k).match(/(\d+(?:[.,]\d+)?)/);
  return m ? parseFloat(m[1].replace(',','.')) : null;
}

// ════════════════════════════════════════════════════════════════
// FILTER-STATE (pro Listenseite zurückgesetzt)
// ════════════════════════════════════════════════════════════════
var FILTER_STATE = { sw: 'alle', dauer: 'alle', km: 'alle' };

function filterAnwenden(eintraege) {
  return eintraege.filter(function(n) {
    if (FILTER_STATE.sw !== 'alle') {
      if (swKlasse(n.schwierigkeit) !== FILTER_STATE.sw) return false;
    }
    if (FILTER_STATE.dauer !== 'alle') {
      var dm = dauerInMinuten(n.dauer);
      if (dm == null) return false;
      if (FILTER_STATE.dauer === 'kurz'   && dm > 180) return false;
      if (FILTER_STATE.dauer === 'mittel' && (dm <= 180 || dm > 360)) return false;
      if (FILTER_STATE.dauer === 'lang'   && dm <= 360) return false;
    }
    if (FILTER_STATE.km !== 'alle') {
      var kk = kmZuZahl(n.km);
      if (kk == null) return false;
      if (FILTER_STATE.km === 'kurz'   && kk > 10) return false;
      if (FILTER_STATE.km === 'mittel' && (kk <= 10 || kk > 25)) return false;
      if (FILTER_STATE.km === 'lang'   && kk <= 25) return false;
    }
    return true;
  });
}

function pillRow(name, label, optionen) {
  var pills = optionen.map(function(o) {
    var akt = FILTER_STATE[name] === o.val ? ' aktiv' : '';
    return '<button class="filter-pill' + akt + '" onclick="setzeFilter(\'' + name + '\',\'' + o.val + '\')">' + o.label + '</button>';
  }).join('');
  return '<div class="filter-row">'
    + '<span class="filter-label-mini">' + label + '</span>'
    + pills
    + '</div>';
}

function filterUI() {
  var anyAktiv = FILTER_STATE.sw !== 'alle' || FILTER_STATE.dauer !== 'alle' || FILTER_STATE.km !== 'alle';
  return '<div class="filter-leiste">'
    + '<div class="filter-titel">Filter'
      + (anyAktiv ? '<button class="reset-btn" onclick="resetFilter()">↺ Zurücksetzen</button>' : '')
    + '</div>'
    + pillRow('sw', 'Schwierigkeit', [
        {val:'alle',   label:'Alle'},
        {val:'leicht', label:'Leicht'},
        {val:'mittel', label:'Mittel'},
        {val:'schwer', label:'Schwer'}
      ])
    + pillRow('dauer', 'Dauer', [
        {val:'alle',   label:'Alle'},
        {val:'kurz',   label:'< 3 h'},
        {val:'mittel', label:'3 – 6 h'},
        {val:'lang',   label:'> 6 h'}
      ])
    + pillRow('km', 'Länge', [
        {val:'alle',   label:'Alle'},
        {val:'kurz',   label:'< 10 km'},
        {val:'mittel', label:'10 – 25 km'},
        {val:'lang',   label:'> 25 km'}
      ])
    + '</div>';
}

// Globale Helpers, die der HTML aufruft
window._aktuelleListe = null; // {slug, info, detailTyp}

function setzeFilter(name, wert) {
  FILTER_STATE[name] = wert;
  rerenderListe();
}
function resetFilter() {
  FILTER_STATE = { sw: 'alle', dauer: 'alle', km: 'alle' };
  rerenderListe();
}
function rerenderListe() {
  if (!window._aktuelleListe) return;
  var l = window._aktuelleListe;
  // Nur die Filter-Leiste + Liste neu rendern, Sticky-Region behalten
  var fLeiste = document.getElementById('filter-leiste-wrapper');
  var liste   = document.getElementById('etappen-liste');
  if (fLeiste) fLeiste.innerHTML = filterUI();
  if (liste)   liste.innerHTML = baueListenInhalt(l.slug, l.info, l.detailTyp);
  aktualisiereTreffer(l);
}

function aktualisiereTreffer(l) {
  var rohdaten = window[l.info.name] || [];
  var n = rohdaten.map(normalisiere);
  // Nur Touren mit Filterdaten in den Zähler – sonst stimmt 16 ≠ 17
  var voll = n.filter(istVollstaendig);
  var g = filterAnwenden(voll);
  var unvoll = n.length - voll.length;
  var el = document.getElementById('filter-treffer');
  if (el) {
    var txt = '<strong>' + g.length + '</strong> von <strong>' + voll.length + '</strong> Touren angezeigt';
    if (unvoll > 0) {
      txt += ' · <span class="treffer-extra">+' + unvoll + ' in Vorbereitung</span>';
    }
    el.innerHTML = txt;
  }
}

// ════════════════════════════════════════════════════════════════
// LISTEN-AUSWAHL
// ════════════════════════════════════════════════════════════════
function renderListe(ziel, slug) {
  if (LISTEN[slug] && LISTEN[slug].typ === 'unterkategorie') {
    var l = LISTEN[slug];
    var items = l.items.map(function(it) {
      return '<button class="subkat" onclick="navigateTo(\'liste/' + slug.split('-')[0] + '-' + slug.split('-')[1] + '-' + it.sub + '\')">'
        + '<div class="subkat-icon">' + (it.icon || ICONS.berge) + '</div>'
        + '<div class="subkat-text">'
          + '<div class="subkat-label">' + it.label + '</div>'
          + '<div class="subkat-meta">' + it.meta + '</div>'
        + '</div>'
        + '<div class="subkat-pfeil">&rsaquo;</div>'
      + '</button>';
    }).join('');
    ziel.innerHTML =
      '<div class="sticky-region">'
      + navBar(l.zurueck, l.breadcrumb)
      + intro(l.titel, l.untertitel)
      + '</div>'
      + '<nav class="subkategorien">' + items + '</nav>'
      + '<div class="spacer"></div>';
    return;
  }

  var teile = slug.split('-');
  if (teile[0] === 'tourismus' && teile[1] === 'wandern' && teile[2]) {
    var sub = teile.slice(2).join('-');
    if (WANDER_DATEN[sub]) { renderEtappenListe(ziel, slug, WANDER_DATEN[sub], 'tourismus-wandern', 'wandern'); return; }
  }
  if (teile[0] === 'tourismus' && teile[1] === 'radfahren' && teile[2]) {
    var sub = teile.slice(2).join('-');
    if (RAD_DATEN[sub]) { renderEtappenListe(ziel, slug, RAD_DATEN[sub], 'tourismus-radfahren', 'rad'); return; }
  }
  if (LISTEN[slug]) { renderDatenListe(ziel, slug, LISTEN[slug]); return; }

  ziel.innerHTML =
    navBar('home', '<strong>' + slug + '</strong>')
    + intro('In Vorbereitung', 'Diese Inhalte werden gerade aufbereitet.')
    + '<div class="hinweis">Diese Seite ist noch in Arbeit.</div>'
    + '<div class="spacer"></div>';
}

// ════════════════════════════════════════════════════════════════
// ETAPPEN-LISTE (mit Sticky-Region + Filter)
// ════════════════════════════════════════════════════════════════
// Prüft, ob eine Tour genug Daten hat, um in Filtern aufzutauchen.
// Ohne Schwierigkeit oder Distanz fällt sie sonst in jedem Filter raus
// und der Gesamtcount stimmt nicht mit der Summe der Pillen-Buckets überein.
function istVollstaendig(n) {
  return !!(n.schwierigkeit && n.km);
}

function baueListenInhalt(slug, info, detailTyp) {
  var rohdaten = window[info.name] || [];
  var normiert = rohdaten.map(normalisiere);

  // Trennen in „filterbare" und „in Vorbereitung"
  var voll   = [];
  var unvoll = [];
  normiert.forEach(function(n, i) {
    n.__idx = i; // ursprünglichen Listenindex merken (für Detail-Routing)
    if (istVollstaendig(n)) voll.push(n);
    else unvoll.push(n);
  });

  var gefiltert = filterAnwenden(voll);

  if (!gefiltert.length && !unvoll.length) {
    return '<div class="hinweis">Keine Touren passen zu deiner Auswahl. Bitte Filter anpassen oder zurücksetzen.</div>';
  }

  var html = '';
  if (gefiltert.length) {
    html += gefiltert.map(function(n) {
      return baueListenEintrag(n, slug, detailTyp, false);
    }).join('');
  } else {
    html += '<div class="hinweis">Keine Touren passen zu deiner Auswahl. Bitte Filter anpassen oder zurücksetzen.</div>';
  }

  // Touren in Vorbereitung am Ende, immer sichtbar (nicht von Filtern abhängig)
  if (unvoll.length) {
    html += '<div class="tour-vorbereitung">'
         +  unvoll.length + ' weitere Tour' + (unvoll.length === 1 ? '' : 'en') + ' in Vorbereitung'
         +  '</div>';
    html += unvoll.map(function(n) {
      return baueListenEintrag(n, slug, detailTyp, true);
    }).join('');
  }
  return html;
}

function baueListenEintrag(n, slug, detailTyp, inVorbereitung) {
  var sw = swKlasse(n.schwierigkeit);
  var meta = '';
  if (n.km)      meta += '<span><strong>' + escapeHtml(n.km) + (String(n.km).indexOf('km')<0 ? ' km' : '') + '</strong></span>';
  if (n.dauer)   meta += '<span>⏱ ' + escapeHtml(n.dauer) + '</span>';
  if (n.aufstieg) meta += '<span>↑ ' + escapeHtml(n.aufstieg) + '</span>';
  if (n.schwierigkeit) meta += '<span class="diff-' + sw + '">● ' + escapeHtml(n.schwierigkeit) + '</span>';
  var cls = 'eintrag' + (inVorbereitung ? ' in-vorbereitung' : '');
  return '<button class="' + cls + '" onclick="navigateTo(\'detail/' + detailTyp + '/' + slug + '_' + n.__idx + '\')">'
    + '<div class="eintrag-text">'
      + '<div class="eintrag-titel">' + escapeHtml(n.titel) + '</div>'
      + (n.subtitle ? '<div class="eintrag-sub">' + escapeHtml(n.subtitle) + '</div>' : '')
      + (meta ? '<div class="eintrag-meta">' + meta + '</div>' : '')
    + '</div>'
    + '<div class="eintrag-pfeil">&rsaquo;</div>'
  + '</button>';
}

function renderEtappenListe(ziel, slug, info, zurueckSlug, detailTyp) {
  // Filter-State zurücksetzen bei jedem Aufruf
  FILTER_STATE = { sw: 'alle', dauer: 'alle', km: 'alle' };
  window._aktuelleListe = { slug: slug, info: info, detailTyp: detailTyp };

  var daten = window[info.name];
  if (!daten || !daten.length) {
    ziel.innerHTML =
      navBar('liste/' + zurueckSlug, info.breadcrumb)
      + intro(info.titel, info.untertitel)
      + '<div class="hinweis">Daten noch nicht verfügbar.</div>'
      + '<div class="spacer"></div>';
    return;
  }

  // Anfangs-Treffer-Display: nur vollständige Touren zählen
  var initialNorm = daten.map(normalisiere);
  var initialVoll = initialNorm.filter(istVollstaendig);
  var initialUnvoll = initialNorm.length - initialVoll.length;
  var trefferTxt = '<strong>' + initialVoll.length + '</strong> Touren angezeigt';
  if (initialUnvoll > 0) {
    trefferTxt += ' · <span class="treffer-extra">+' + initialUnvoll + ' in Vorbereitung</span>';
  }

  // Sticky-Region: navBar + intro + filter-leiste
  // Beim Scrollen bleibt diese gesamte Box oben kleben
  ziel.innerHTML =
    '<div class="sticky-region">'
      + navBar('liste/' + zurueckSlug, info.breadcrumb)
      + intro(info.titel, info.untertitel)
      + '<div id="filter-leiste-wrapper">' + filterUI() + '</div>'
    + '</div>'
    + '<div id="filter-treffer" class="filter-treffer">' + trefferTxt + '</div>'
    + '<div class="liste" id="etappen-liste">' + baueListenInhalt(slug, info, detailTyp) + '</div>'
    + '<div class="spacer"></div>';
}

// ════════════════════════════════════════════════════════════════
// SUB-LINKS RENDERER (Regionale Produkte, Mobilität & Verkehr)
// Zeigt die Links aus DATA_REGIONALE_PRODUKTE / DATA_MOBILITAET_VERKEHR
// ════════════════════════════════════════════════════════════════
function renderSubLinks(ziel, slug, l) {
  var sl = SUB_LINKS[l.linkData];
  var quelle = (sl && sl.lookup === 'regional') ? window.DATA_REGIONALE_PRODUKTE
              : (sl && sl.lookup === 'mobilitaet') ? window.DATA_MOBILITAET_VERKEHR
              : null;

  var html = '<div class="sticky-region">'
    + navBar(l.zurueck, l.breadcrumb)
    + intro(l.titel, l.untertitel)
    + '</div>';

  if (!quelle || !quelle.subs || !quelle.subs.length) {
    html += '<div class="hinweis">Daten noch nicht verfügbar.</div><div class="spacer"></div>';
    ziel.innerHTML = html;
    return;
  }

  // Passende Subs aus dem DATA-Block heraussuchen (entweder einer mit name oder mehrere mit names)
  var passend = [];
  if (sl.names && sl.names.length) {
    quelle.subs.forEach(function(s) {
      if (sl.names.indexOf(s.name) >= 0) passend.push(s);
    });
  } else if (sl.name) {
    quelle.subs.forEach(function(s) {
      if (s.name === sl.name) passend.push(s);
    });
  }

  if (!passend.length) {
    html += '<div class="hinweis">Inhalte werden noch ergänzt.</div><div class="spacer"></div>';
    ziel.innerHTML = html;
    return;
  }

  html += '<div class="liste linklist">';
  passend.forEach(function(sub) {
    var internalRoute = SUB_INTERNAL_ROUTES[sub.name];
    if (sub.url && internalRoute) {
      // Sub hat eine interne iframe-Route → als Button (nicht externer Link)
      html += '<button class="eintrag" onclick="navigateTo(\'' + internalRoute + '\')">'
        + '<div class="eintrag-text">'
        + '<div class="eintrag-titel">' + escapeHtml(sub.name) + '</div>'
        + '<div class="eintrag-meta">' + escapeHtml(sub.url.replace(/^https?:\/\//,'').replace(/\/$/,'')) + '</div>'
        + '</div>'
        + '<div class="eintrag-pfeil">&rsaquo;</div>'
        + '</button>';
    } else if (sub.url) {
      // Einfacher Direktlink (extern)
      html += '<a class="eintrag" href="' + sub.url + '" target="_blank" rel="noopener">'
        + '<div class="eintrag-text">'
        + '<div class="eintrag-titel">' + escapeHtml(sub.name) + '</div>'
        + '<div class="eintrag-meta">' + escapeHtml(sub.url.replace(/^https?:\/\//,'').replace(/\/$/,'')) + '</div>'
        + '</div>'
        + '<div class="eintrag-pfeil">↗</div>'
        + '</a>';
    } else if (sub.links && sub.links.length) {
      // Sub-Liste mit Unter-Links → als Card mit eingebetteten Links
      html += '<div class="link-card">';
      if (passend.length > 1) {
        html += '<div class="link-card-titel">' + escapeHtml(sub.name) + '</div>';
      }
      sub.links.forEach(function(lnk) {
        html += '<a class="link-eintrag" href="' + lnk.u + '" target="_blank" rel="noopener">'
          + '<span class="link-eintrag-titel">' + escapeHtml(lnk.n) + '</span>'
          + '<span class="link-eintrag-pfeil">↗</span>'
          + '</a>';
      });
      html += '</div>';
    }
  });
  html += '</div><div class="spacer"></div>';
  ziel.innerHTML = html;
}

// ════════════════════════════════════════════════════════════════
// EXTERNAL-LINKS RENDERER (Museen, Kunst & Kultur Übersicht)
// Jeder Eintrag hat name + url, öffnet direkt in neuem Tab
// ════════════════════════════════════════════════════════════════
function renderExternalLinks(ziel, slug, l) {
  var daten = window[l.datenName] || [];
  var html = '<div class="sticky-region">'
    + navBar(l.zurueck, l.breadcrumb)
    + intro(l.titel, l.untertitel)
    + '</div>';
  if (!daten.length) {
    html += '<div class="hinweis">Daten noch nicht verfügbar.</div><div class="spacer"></div>';
    ziel.innerHTML = html;
    return;
  }
  html += '<div class="liste linklist">';
  daten.forEach(function(item) {
    var url = item.url || '';
    if (!url) return;
    html += '<a class="eintrag" href="' + url + '" target="_blank" rel="noopener">'
      + '<div class="eintrag-text">'
      + '<div class="eintrag-titel">' + escapeHtml(item.name) + '</div>'
      + '<div class="eintrag-meta">' + escapeHtml(url.replace(/^https?:\/\//,'').replace(/\/$/,'')) + '</div>'
      + '</div>'
      + '<div class="eintrag-pfeil">↗</div>'
      + '</a>';
  });
  html += '</div><div class="spacer"></div>';
  ziel.innerHTML = html;
}

// ════════════════════════════════════════════════════════════════
// WW-LIT RENDERER (Westerwälder Literaturtage 2026)
// 28 Veranstaltungen mit Datum/Zeit/Autor/Ort/Beschreibung
// ════════════════════════════════════════════════════════════════
function renderWwLit(ziel, slug, l) {
  var daten = window[l.datenName] || [];
  var html = '<div class="sticky-region">'
    + navBar(l.zurueck, l.breadcrumb)
    + intro(l.titel, l.untertitel)
    + '</div>';
  if (!daten.length) {
    html += '<div class="hinweis">Programm wird noch eingelesen.</div><div class="spacer"></div>';
    ziel.innerHTML = html;
    return;
  }
  // Liste der Veranstaltungen
  html += '<div class="liste">';
  daten.forEach(function(v, idx) {
    var datum = v.datum || '';
    var zeit = v.zeit || '';
    html += '<button class="eintrag wwlit-eintrag" onclick="navigateTo(\'detail/wwlit/' + slug + '_' + idx + '\')">'
      + '<div class="wwlit-datum">'
        + '<div class="wwlit-tag">' + escapeHtml(datum) + '</div>'
        + (zeit ? '<div class="wwlit-zeit">' + escapeHtml(zeit) + '</div>' : '')
      + '</div>'
      + '<div class="eintrag-text">'
        + '<div class="eintrag-titel">' + escapeHtml(v.autor || '—') + '</div>'
        + (v.werk ? '<div class="wwlit-werk"><em>' + escapeHtml(v.werk) + '</em></div>' : '')
        + (v.ort ? '<div class="eintrag-meta">📍 ' + escapeHtml(v.ort) + '</div>' : '')
      + '</div>'
      + '<div class="eintrag-pfeil">&rsaquo;</div>'
    + '</button>';
  });
  html += '</div><div class="spacer"></div>';
  ziel.innerHTML = html;
}


// ════════════════════════════════════════════════════════════════
// TERMINE RENDERER (konsolidierte Veranstaltungen)
// Quelle: DATA_VERANSTALTUNGEN_ALLE
// Enthält Naturerlebnisse, Veranstaltungen (westerwald.info) und
// Westerwälder Literaturtage in einheitlichem Schema.
// Filter: Datum, Bezirk, Preis, Familienfreundlich
// ════════════════════════════════════════════════════════════════

// Termin-Filter-State (eigener State)
var TERMIN_FILTER = { datum: 'alle', bezirk: 'alle', kosten: 'alle', kids: 'alle' };
window._aktuelleTermine = null;

function termineFilterUI() {
  function pill(group, val, label) {
    var aktiv = TERMIN_FILTER[group] === val;
    return '<button class="filter-pill' + (aktiv ? ' aktiv' : '') + '" '
      + 'onclick="setzeTerminFilter(\'' + group + '\',\'' + val + '\')">' + label + '</button>';
  }
  var html = '<div class="filter-leiste termine-filter">';
  html += '<div class="filter-gruppe"><span class="filter-label">📅 Datum:</span>'
    + pill('datum','alle','Alle')
    + pill('datum','heute','Heute')
    + pill('datum','woche','Diese Woche')
    + pill('datum','monat','Dieser Monat')
    + pill('datum','jahr','Aktuelles Jahr')
    + '</div>';
  // Region: in einer Zeile, kompakte Labels
  html += '<div class="filter-gruppe filter-bezirk"><span class="filter-label">📍 Region:</span>'
    + pill('bezirk','alle','Alle')
    + pill('bezirk','AK','Altenkirchen')
    + pill('bezirk','NR','Neuwied')
    + pill('bezirk','WW','Westerwald')
    + pill('bezirk','Hessen','Hessen')
    + '</div>';
  html += '<div class="filter-gruppe"><span class="filter-label">💶 Preis:</span>'
    + pill('kosten','alle','Alle')
    + pill('kosten','frei','Kostenfrei')
    + pill('kosten','kostenpflichtig','Kostenpflichtig')
    + '</div>';
  html += '<div class="filter-gruppe"><span class="filter-label">👶 Kinder:</span>'
    + pill('kids','alle','Alle')
    + pill('kids','ja','Familienfreundlich')
    + '</div>';
  html += '</div>';
  return html;
}

function setzeTerminFilter(group, val) {
  TERMIN_FILTER[group] = val;
  var l = window._aktuelleTermine;
  if (!l) return;
  var wrap = document.getElementById('filter-leiste-wrapper');
  if (wrap) wrap.innerHTML = termineFilterUI();
  var liste = document.getElementById('termine-liste');
  if (liste) liste.innerHTML = baueTermineListe(l.slug, l.info);
  aktualisiereTermineTreffer(l);
}

function termineFilterAnwenden(items) {
  var heute = new Date();
  heute.setHours(0,0,0,0);
  var pad = function(n) { return String(n).padStart(2,'0'); };
  var heuteStr = heute.getFullYear() + '-' + pad(heute.getMonth()+1) + '-' + pad(heute.getDate());

  var sonntag = new Date(heute);
  // 0 = So, 1 = Mo, …, 6 = Sa → Tage bis Sonntag
  var bisSonntag = (7 - heute.getDay()) % 7;
  if (bisSonntag === 0 && heute.getDay() === 0) bisSonntag = 0;
  sonntag.setDate(heute.getDate() + (heute.getDay() === 0 ? 0 : (7 - heute.getDay())));
  var sonntagStr = sonntag.getFullYear() + '-' + pad(sonntag.getMonth()+1) + '-' + pad(sonntag.getDate());
  var monatsende = new Date(heute.getFullYear(), heute.getMonth()+1, 0);
  var monatsendeStr = monatsende.getFullYear() + '-' + pad(monatsende.getMonth()+1) + '-' + pad(monatsende.getDate());
  var jahresende = heute.getFullYear() + '-12-31';

  return items.filter(function(item) {
    var d = item.datumIso || '';
    if (!d || d < heuteStr) return false;
    if (TERMIN_FILTER.datum === 'heute' && d !== heuteStr) return false;
    if (TERMIN_FILTER.datum === 'woche' && d > sonntagStr) return false;
    if (TERMIN_FILTER.datum === 'monat' && d > monatsendeStr) return false;
    if (TERMIN_FILTER.datum === 'jahr'  && d > jahresende) return false;
    if (TERMIN_FILTER.bezirk !== 'alle' && item.bezirk !== TERMIN_FILTER.bezirk) return false;
    if (TERMIN_FILTER.kosten === 'frei' && !item.kostenfrei) return false;
    if (TERMIN_FILTER.kosten === 'kostenpflichtig' && item.kostenfrei) return false;
    if (TERMIN_FILTER.kids === 'ja' && !item.fuerKids) return false;
    return true;
  });
}

function formatTerminDatum(d) {
  if (!d) return '';
  var teile = d.split('-');
  if (teile.length !== 3) return d;
  var datum = new Date(parseInt(teile[0],10), parseInt(teile[1],10)-1, parseInt(teile[2],10));
  var tage = ['So','Mo','Di','Mi','Do','Fr','Sa'];
  return tage[datum.getDay()] + ' ' + teile[2] + '.' + teile[1] + '.';
}

function baueTermineListe(slug, l) {
  var rohdaten = window[l.datenName] || [];
  var gefiltert = termineFilterAnwenden(rohdaten);
  gefiltert.sort(function(a,b) {
    if (a.datumIso < b.datumIso) return -1;
    if (a.datumIso > b.datumIso) return 1;
    return (a.zeit||'').localeCompare(b.zeit||'');
  });

  if (!gefiltert.length) {
    return '<div class="hinweis">Keine Termine passen zu deiner Auswahl. Bitte Filter anpassen oder zurücksetzen.</div>';
  }

  return gefiltert.map(function(item) {
    var idx = rohdaten.indexOf(item);
    var meta = [];
    if (item.zeit) meta.push('🕐 ' + escapeHtml(item.zeit));
    if (item.ort) meta.push('📍 ' + escapeHtml(item.ort));
    if (item.kostenfrei) meta.push('<span class="termin-frei">kostenfrei</span>');
    if (item.fuerKids) meta.push('<span class="termin-kids">👶 Familie</span>');
    var quelleBadge = '';
    if (item.quelle === 'lit')   quelleBadge = '<span class="termin-quelle quelle-lit">📚 ww-Lit</span>';
    else if (item.quelle === 'natur') quelleBadge = '<span class="termin-quelle quelle-natur">🌿 Natur</span>';
    if (quelleBadge) meta.unshift(quelleBadge);

    return '<button class="eintrag termin-eintrag" onclick="navigateTo(\'detail/' + l.detailKey + '/' + slug + '_' + idx + '\')">'
      + '<div class="termin-datum-badge">'
        + '<div class="termin-datum-text">' + escapeHtml(formatTerminDatum(item.datumIso)) + '</div>'
        + (item.bezirk ? '<div class="termin-bezirk">' + escapeHtml(item.bezirk) + '</div>' : '')
      + '</div>'
      + '<div class="eintrag-text">'
        + '<div class="eintrag-titel">' + escapeHtml(item.titel) + '</div>'
        + (meta.length ? '<div class="eintrag-meta">' + meta.join(' · ') + '</div>' : '')
      + '</div>'
      + '<div class="eintrag-pfeil">&rsaquo;</div>'
    + '</button>';
  }).join('');
}

function aktualisiereTermineTreffer(l) {
  var rohdaten = window[l.info.datenName] || [];
  var heute = new Date(); heute.setHours(0,0,0,0);
  var pad = function(n) { return String(n).padStart(2,'0'); };
  var heuteStr = heute.getFullYear() + '-' + pad(heute.getMonth()+1) + '-' + pad(heute.getDate());
  var zukunft = rohdaten.filter(function(i) { return (i.datumIso||'') >= heuteStr; });
  var g = termineFilterAnwenden(rohdaten);
  var el = document.getElementById('filter-treffer');
  if (el) el.innerHTML = '<strong>' + g.length + '</strong> von <strong>' + zukunft.length + '</strong> kommenden Terminen';
}

function renderTermine(ziel, slug, l) {
  TERMIN_FILTER = { datum: 'alle', bezirk: 'alle', kosten: 'alle', kids: 'alle' };
  window._aktuelleTermine = { slug: slug, info: l };

  var rohdaten = window[l.datenName] || [];

  if (!rohdaten.length) {
    ziel.innerHTML =
      '<div class="sticky-region">'
      + navBar(l.zurueck, l.breadcrumb)
      + intro(l.titel, l.untertitel)
      + '</div>'
      + '<div class="hinweis">Daten noch nicht verfügbar.</div>'
      + '<div class="spacer"></div>';
    return;
  }

  var heute = new Date(); heute.setHours(0,0,0,0);
  var pad = function(n) { return String(n).padStart(2,'0'); };
  var heuteStr = heute.getFullYear() + '-' + pad(heute.getMonth()+1) + '-' + pad(heute.getDate());
  var zukunft = rohdaten.filter(function(i) { return (i.datumIso||'') >= heuteStr; });

  ziel.innerHTML =
    '<div class="sticky-region">'
      + navBar(l.zurueck, l.breadcrumb)
      + intro(l.titel, l.untertitel)
      + '<div id="filter-leiste-wrapper">' + termineFilterUI() + '</div>'
    + '</div>'
    + '<div id="filter-treffer" class="filter-treffer"><strong>' + zukunft.length + '</strong> kommende Termine</div>'
    + '<div class="liste" id="termine-liste">' + baueTermineListe(slug, l) + '</div>'
    + '<div class="spacer"></div>';
}



function renderDatenListe(ziel, slug, l) {
  // NEUE Render-Typen
  if (l.renderTyp === 'subLinks')      { renderSubLinks(ziel, slug, l); return; }
  if (l.renderTyp === 'externalLinks') { renderExternalLinks(ziel, slug, l); return; }
  if (l.renderTyp === 'wwLit')         { renderWwLit(ziel, slug, l); return; }
  if (l.renderTyp === 'termine')       { renderTermine(ziel, slug, l); return; }
  if (l.renderTyp === 'gefiltert')     { renderGefiltertListe(ziel, slug, l); return; }
  if (l.renderTyp === 'inhaltSeite')   { renderInhaltSeite(ziel, slug, l); return; }
  if (l.renderTyp === 'iframe')        { renderIframeSeite(ziel, slug, l); return; }
  if (l.renderTyp === 'museenInline')  { renderMuseenInline(ziel, slug, l); return; }
  if (l.renderTyp === 'naturgenussLinks') { renderNaturgenussLinks(ziel, slug, l); return; }

  // STANDARD: Ausflugsziele, Badeseen, Unterkünfte etc.
  var daten = window[l.datenName] || [];
  if (l.max) daten = daten.slice(0, l.max);
  if (!daten.length) {
    ziel.innerHTML =
      '<div class="sticky-region">'
      + navBar(l.zurueck, l.breadcrumb)
      + intro(l.titel, l.untertitel)
      + '</div>'
      + '<div class="hinweis">Daten noch nicht verfügbar.</div>'
      + '<div class="spacer"></div>';
    return;
  }
  var items = daten.map(function(item, idx) {
    var titel = item.name || item.title || 'Eintrag';
    var ort = item.town || item.ort || (item.contact && item.contact.town) || '';
    var thema = item.topic || item.mainTopic || (item.categories && item.categories[0]) || '';
    var meta = [ort, thema].filter(Boolean).join(' · ');
    return '<button class="eintrag" onclick="navigateTo(\'detail/' + l.detailKey + '/' + slug + '_' + idx + '\')">'
      + '<div class="eintrag-text">'
        + '<div class="eintrag-titel">' + escapeHtml(titel) + '</div>'
        + (meta ? '<div class="eintrag-meta">' + escapeHtml(meta) + '</div>' : '')
      + '</div>'
      + '<div class="eintrag-pfeil">&rsaquo;</div>'
    + '</button>';
  }).join('');
  ziel.innerHTML =
    '<div class="sticky-region">'
    + navBar(l.zurueck, l.breadcrumb)
    + intro(l.titel, l.untertitel)
    + '</div>'
    + (l.max && window[l.datenName] && window[l.datenName].length > l.max ?
       '<div class="hinweis">Es werden ' + l.max + ' von ' + window[l.datenName].length + ' Einträgen angezeigt.</div>' : '')
    + '<div class="liste">' + items + '</div>'
    + '<div class="spacer"></div>';
}

// ════════════════════════════════════════════════════════════════
// DETAIL-SEITE
// ════════════════════════════════════════════════════════════════
function renderDetail(ziel, typ, schluessel) {
  // Spezialfall Westerwald-Box-Betriebe: schluessel ist nur die Zahl
  if (typ === 'wwbox') {
    var bIdx = parseInt(schluessel, 10);
    var bData = window.DATA_WESTERWALDBOX_BETRIEBE || [];
    if (!bData[bIdx]) {
      ziel.innerHTML = navBar('home','') + intro('Nicht gefunden','') + '<div class="hinweis">Betrieb nicht verfügbar.</div>';
      return;
    }
    renderBetriebDetail(ziel, bData[bIdx], bIdx);
    return;
  }

  var teile = schluessel.split('_');
  var listeSlug = teile.slice(0, -1).join('_');
  var idx = parseInt(teile[teile.length - 1], 10);
  var info = null, daten = null, zurueck = 'home';

  if (typ === 'wandern') {
    var sub = listeSlug.split('-').slice(2).join('-');
    info = WANDER_DATEN[sub]; daten = info && window[info.name];
    zurueck = 'liste/' + listeSlug;
  } else if (typ === 'rad') {
    var sub = listeSlug.split('-').slice(2).join('-');
    info = RAD_DATEN[sub]; daten = info && window[info.name];
    zurueck = 'liste/' + listeSlug;
  } else {
    var ll = LISTEN[listeSlug];
    if (ll) {
      info = {breadcrumb: ll.breadcrumb, titel: ll.titel};
      daten = window[ll.datenName]; zurueck = 'liste/' + listeSlug;
    }
  }
  if (!daten || !daten[idx]) {
    ziel.innerHTML = navBar('home','') + intro('Nicht gefunden','') + '<div class="hinweis">Eintrag nicht verfügbar.</div>';
    return;
  }
  var item = daten[idx];

  if (typ === 'wandern' || typ === 'rad')      renderRouteDetail(ziel, item, info, zurueck);
  else if (typ === 'ausfl')                    renderAusflDetail(ziel, item, info, zurueck);
  else if (typ === 'badesee')                  renderBadeseeDetail(ziel, item, info, zurueck);
  else if (typ === 'unterkunft')               renderUnterkunftDetail(ziel, item, info, zurueck);
  else if (typ === 'museum')                   renderMuseumDetail(ziel, item, info, zurueck);
  else if (typ === 'literatur')                renderAusflDetail(ziel, item, info, zurueck);
  else if (typ === 'event')                    renderTerminDetail(ziel, item, info, zurueck);
  else if (typ === 'natur' || typ === 'wwlit') renderTerminDetail(ziel, item, info, zurueck);
  else if (typ === 'ebike')                    renderEbikeDetail(ziel, item, info, zurueck);
  else ziel.innerHTML = navBar('home','') + intro('Detail','') + '<pre>' + JSON.stringify(item, null, 2) + '</pre>';
}


// ════════════════════════════════════════════════════════════════
// TERMIN-DETAIL (konsolidiert: Naturerlebnis, Veranstaltung, Lit)
// ════════════════════════════════════════════════════════════════
function renderTerminDetail(ziel, item, info, zurueck) {
  var pills = '<div class="diff-gpx-row">';
  if (item.datumIso) pills += '<span class="diff-pill diff-mittel-bg">' + escapeHtml(formatTerminDatum(item.datumIso));
  if (item.zeit) pills += ' · ' + escapeHtml(item.zeit);
  if (item.datumIso) pills += '</span>';
  if (item.bezirk) {
    var bezirkLabel = item.bezirk === 'AK' ? 'Altenkirchen' : item.bezirk === 'WW' ? 'Westerwald' : item.bezirk === 'NR' ? 'Neuwied' : item.bezirk;
    pills += '<span class="diff-pill diff-leicht-bg">📍 ' + escapeHtml(bezirkLabel) + '</span>';
  }
  if (item.kostenfrei) pills += '<span class="diff-pill termin-frei-pill">kostenfrei</span>';
  if (item.fuerKids) pills += '<span class="diff-pill termin-kids-pill">👶 Familie</span>';
  if (item.quelle === 'lit') pills += '<span class="diff-pill quelle-lit">📚 ww-Lit</span>';
  if (item.sourceUrl) pills += '<a class="btn-action btn-gpx" href="' + item.sourceUrl + '" target="_blank" rel="noopener">↗ Quelle</a>';
  if (item.quelle === 'natur' && item.website) {
    var url = item.website.indexOf('http') === 0 ? item.website : 'https://' + item.website;
    pills += '<a class="btn-action btn-gpx" href="' + url + '" target="_blank" rel="noopener">🌐 Website</a>';
  }
  pills += '</div>';

  var html = '<div class="sticky-detail">'
    + navBar(zurueck, info.breadcrumb)
    + intro(info.titel, '')
    + '<div class="sticky-detail-titel">' + escapeHtml(item.titel) + '</div>'
    + pills
    + '</div>';

  html += '<div class="detail-section">';
  if (item.untertitel) html += '<div class="detail-subtitle"><em>' + escapeHtml(item.untertitel) + '</em></div>';

  // Stats-Grid
  var stats = [];
  if (item.dauer) stats.push('<div class="stat"><div class="stat-label">Dauer</div><div class="stat-wert">' + escapeHtml(item.dauer) + '</div></div>');
  if (item.kosten && !item.kostenfrei) {
    var k = item.kosten;
    if (/^\d+([,.]\d+)?$/.test(k)) k = k + ' €';
    else if (/^\d+([,.]\d+)?\s*\/\s*\d+([,.]\d+)?$/.test(k)) k = k + ' €';
    stats.push('<div class="stat"><div class="stat-label">Kosten</div><div class="stat-wert">' + escapeHtml(k) + '</div></div>');
  }
  if (item.anmeldung) stats.push('<div class="stat"><div class="stat-label">Anmeldung</div><div class="stat-wert">' + escapeHtml(item.anmeldung) + '</div></div>');
  if (item.kategorie && item.quelle === 'event') stats.push('<div class="stat"><div class="stat-label">Kategorie</div><div class="stat-wert">' + escapeHtml(item.kategorie) + '</div></div>');
  if (item.region) stats.push('<div class="stat"><div class="stat-label">Region</div><div class="stat-wert">' + escapeHtml(item.region) + '</div></div>');
  if (stats.length) html += '<div class="stats-grid">' + stats.join('') + '</div>';

  // Dropdowns – kanonische Reihenfolge
  var first = true;
  if (item.beschreibung) { html += dropdown('Beschreibung', richText(item.beschreibung), first); first = false; }

  // Mitwirkende (nur Lit)
  if (item.mitwirkende) { html += dropdown('Mitwirkende', richText(item.mitwirkende), first); first = false; }

  // Ort & Adresse
  var ortInhalt = '';
  if (item.adresse) ortInhalt += '<p>' + escapeHtml(item.adresse) + '</p>';
  if (item.plzOrt) ortInhalt += '<p><strong>' + escapeHtml(item.plzOrt) + '</strong></p>';
  if (item.ort && !item.plzOrt) ortInhalt += '<p><strong>' + escapeHtml(item.ort) + '</strong></p>';
  if (item.lat && item.lng) {
    ortInhalt += '<p><a href="https://www.openstreetmap.org/?mlat=' + item.lat + '&mlon=' + item.lng + '#map=15/' + item.lat + '/' + item.lng + '" target="_blank" rel="noopener">📍 Auf Karte zeigen</a></p>';
  }
  if (ortInhalt) { html += dropdown('Ort & Adresse', ortInhalt, first); first = false; }

  // Mitbringen / Beachten (Naturerlebnis)
  if (item.mitbringen) { html += dropdown('Mitbringen', richText(item.mitbringen), first); first = false; }
  if (item.beachten)   { html += dropdown('Hinweise',   richText(item.beachten),   first); first = false; }

  // Veranstalter & Kontakt
  var kontakt = '';
  if (item.veranstalter) kontakt += '<p><strong>Veranstalter:</strong> ' + escapeHtml(item.veranstalter) + '</p>';
  if (item.leitung)      kontakt += '<p><strong>Leitung:</strong> ' + escapeHtml(item.leitung) + '</p>';
  if (item.telefon)      kontakt += '<p><strong>Telefon:</strong> <a href="tel:' + item.telefon.replace(/\s+/g,'') + '">' + escapeHtml(item.telefon) + '</a></p>';
  if (item.email)        kontakt += '<p><strong>E-Mail:</strong> <a href="mailto:' + item.email + '">' + escapeHtml(item.email) + '</a></p>';
  if (item.website && item.quelle !== 'lit') {
    var w = item.website.indexOf('http') === 0 ? item.website : 'https://' + item.website;
    kontakt += '<p><strong>Website:</strong> <a href="' + w + '" target="_blank" rel="noopener">' + escapeHtml(item.website) + '</a></p>';
  }
  if (item.anmeldungKontakt) kontakt += '<p><strong>Anmeldung:</strong> ' + escapeHtml(item.anmeldungKontakt) + '</p>';
  if (item.sourceUrl)    kontakt += '<p><a href="' + item.sourceUrl + '" target="_blank" rel="noopener">Diese Veranstaltung an der Quelle ansehen</a></p>';
  if (kontakt) { html += dropdown('Veranstalter & Kontakt', kontakt, first); first = false; }

  if (first) html += '<div class="hinweis">Weitere Details werden ergänzt.</div>';

  html += '</div><div class="spacer"></div>';
  ziel.innerHTML = html;
}

function escapeHtml(s) {
  if (s == null) return '';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// Bereinigt Plain-Text-Eigenheiten aus den importierten Datenquellen:
//  - Zeilenanfangs-">" (Quote-Marker aus dem Quellsystem) entfernen
//  - HTML-Entities wie &nbsp; in Unicode wandeln, BEVOR escapeHtml läuft
//  - \r\n und einzelne \r vereinheitlichen
//  - Mehrfach-Leerzeichen reduzieren
function cleanupPlainText(s) {
  if (s == null) return '';
  var t = String(s);
  // Zeilenenden vereinheitlichen
  t = t.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  // HTML-Entities zu echten Zeichen (vor escapeHtml!)
  t = t.replace(/&nbsp;/gi, '\u00A0')
       .replace(/&amp;/gi, '&')
       .replace(/&lt;/gi, '<')
       .replace(/&gt;/gi, '>')
       .replace(/&quot;/gi, '"')
       .replace(/&#39;/gi, "'")
       .replace(/&ndash;/gi, '–')
       .replace(/&mdash;/gi, '—')
       .replace(/&hellip;/gi, '…');
  // Quote-Marker am Zeilenanfang ENTFERNEN (auch wenn mehrfach hintereinander).
  // Beispiele aus den Daten: ">Im Rahmen…", ">>Eine Tour…", "> > >Hinweise: > > >"
  t = t.replace(/^[\s]*(?:>+\s*)+/gm, '');           // Zeilenanfang: alle > entfernen
  // Inline: nach Whitespace einer/mehrere ">" gefolgt von beliebigem Zeichen → entfernen
  // (Vorsicht: nicht in URLs oder echten HTML-Tags – aber die landen hier nicht her, weil
  //  cleanupPlainText nur für Plain-Text-Felder aufgerufen wird via linkifyAndBreak.)
  t = t.replace(/(\s)(?:>+\s*)+/g, '$1');
  t = t.replace(/(?:\s)(?:>\s*)+$/gm, '');           // Trailing > am Zeilenende
  // &nbsp;-Reste, die eingebettet zwischen Wörtern stehen, sollten ein normales
  // Leerzeichen ersetzen (verhindert "Wort\u00A0\u00A0Wort"):
  t = t.replace(/\u00A0{2,}/g, ' ');
  // Mischung aus NBSP + normalen Leerzeichen → einzelnes normales Leerzeichen
  t = t.replace(/[\u00A0 \t]{2,}/g, ' ');
  // Mehr als 2 aufeinanderfolgende Newlines reduzieren
  t = t.replace(/\n{3,}/g, '\n\n');
  return t.trim();
}

function linkifyAndBreak(s) {
  if (!s) return '';
  var clean = cleanupPlainText(s);
  if (!clean) return '';
  var html = escapeHtml(clean);
  html = html.replace(/(https?:\/\/[^\s)]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
  html = html.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>');
  return '<p>' + html + '</p>';
}
/* richText: erkennt automatisch ob es schon HTML-Markup enthält.
   Wenn ja → unverändert (mit Linkifizierung) ausgeben.
   Wenn nein → wie linkifyAndBreak behandeln (Plain-Text). */
function richText(s) {
  if (!s) return '';
  var t = String(s).trim();
  if (!t) return '';
  // HTML-Erkennung: enthält Tags wie <strong>, <p>, <br>, <ul> etc.
  var hasHtml = /<(?:strong|em|b|i|u|p|br|ul|ol|li|a\s|h[1-6]|div|span|table|tr|td|th)\b[^>]*>|<br\s*\/?>/i.test(t);
  if (hasHtml) {
    // Schon HTML – aber &nbsp; und Co. lassen wir stehen (sind valides HTML)
    var html = t.replace(/(^|[^"'>=])(https?:\/\/[^\s<)"']+)/g,
      '$1<a href="$2" target="_blank" rel="noopener">$2</a>');
    if (!/^\s*<(?:p|div|ul|ol|h[1-6]|table)\b/i.test(html)) {
      html = '<p>' + html + '</p>';
    }
    return html;
  }
  return linkifyAndBreak(s);
}
function txt(s) { return richText(s); }

function dropdown(titel, inhalt, offen) {
  if (!inhalt) return '';
  return '<div class="dropdown' + (offen ? ' offen' : '') + '">'
    + '<div class="dropdown-header" onclick="this.parentNode.classList.toggle(\'offen\')">'
      + '<div class="dropdown-titel">' + titel + '</div>'
      + '<div class="dropdown-pfeil">▾</div>'
    + '</div>'
    + '<div class="dropdown-inhalt">' + inhalt + '</div>'
  + '</div>';
}

// ════════════════════════════════════════════════════════════════
// ROUTE-DETAIL (einheitlich – kanonische Reihenfolge der Dropdowns)
// Funktioniert für ALLE Schemata:
//   • Westerwaldsteig / Wäller Touren / Kleine Wäller   (objektbasiert)
//   • Druidensteig                                       (sections-Schema)
//   • Wiedweg                                            (HTML-Strings, eigene Felder)
//   • Rennrad / Streckenradwege / Rundradwege / Gravel / MTB (Plain-Text-Strings)
//
// Reihenfolge der Dropdowns IMMER:
//   1. Beschreibung (Über die Tour)
//   2. Anfahrt
//   3. Öffentliche Verkehrsmittel
//   4. Parken
//   5. Wegbeschreibung
//   6. Sicherheitshinweise
//   7. Ausrüstung
//   8. Tipps
//   9. Literatur
//   10. Start
//   11. Ziel
// ════════════════════════════════════════════════════════════════

// Kanonische Reihenfolge – KEY:LABEL
var CANON_ORDER = [
  ['beschreibung',  'Beschreibung'],
  ['anfahrt',       'Anfahrt'],
  ['oepnv',         'Öffentliche Verkehrsmittel'],
  ['parken',        'Parken'],
  ['wegbeschreibung', 'Wegbeschreibung'],
  ['sicherheit',    'Sicherheitshinweise'],
  ['ausruestung',   'Ausrüstung'],
  ['tipps',         'Tipps'],
  ['literatur',     'Literatur'],
  ['start',         'Start'],
  ['ziel',          'Ziel']
];

/* Mapping der Druidensteig-Section-Icons auf canonical Keys */
var SECTION_ICON_MAP = {
  'beschreibung': 'beschreibung',
  'anfahrt':      'anfahrt',
  'oepnv':        'oepnv',
  'parken':       'parken',
  'weg':          'wegbeschreibung',
  'wegbeschreibung': 'wegbeschreibung',
  'sicherheit':   'sicherheit',
  'sicherheitshinweise': 'sicherheit',
  'ausruestung':  'ausruestung',
  'tipps':        'tipps',
  'literatur':    'literatur',
  'start':        'start',
  'ziel':         'ziel'
};

function buildCanonicalSections(item) {
  var sections = {}; // key -> html

  // ── Pfad A: SECTIONS-SCHEMA (Druidensteig)
  if (item.sections && Array.isArray(item.sections)) {
    item.sections.forEach(function(sec) {
      var icon = (sec.icon || '').toLowerCase();
      // Profil überspringen (steckt schon in Stats-Grid)
      if (icon === 'profil') return;
      var key = SECTION_ICON_MAP[icon];
      if (!key) {
        // Fallback: anhand des Titels mappen
        var t = (sec.title || '').toLowerCase();
        if (t.indexOf('beschreib') >= 0) key = 'beschreibung';
        else if (t.indexOf('anfahrt') >= 0) key = 'anfahrt';
        else if (t.indexOf('öpnv') >= 0 || t.indexOf('öffentlich') >= 0) key = 'oepnv';
        else if (t.indexOf('park') >= 0) key = 'parken';
        else if (t.indexOf('weg') >= 0) key = 'wegbeschreibung';
        else if (t.indexOf('sicher') >= 0) key = 'sicherheit';
        else if (t.indexOf('ausrüst') >= 0 || t.indexOf('ausruest') >= 0) key = 'ausruestung';
        else if (t.indexOf('tipp') >= 0) key = 'tipps';
        else if (t.indexOf('literatur') >= 0) key = 'literatur';
        else if (t.indexOf('start') >= 0) key = 'start';
        else if (t.indexOf('ziel') >= 0) key = 'ziel';
      }
      if (key) sections[key] = sec.html || '';
    });
    return sections;
  }

  // ── Pfad B: STRUCTURED + RICH-TEXT (alle anderen Schemata)
  // BESCHREIBUNG
  if (item.description) {
    var desc = '';
    if (typeof item.description === 'object') {
      if (item.description.headline) desc += '<p><strong>' + escapeHtml(item.description.headline) + '</strong></p>';
      if (item.description.text)     desc += richText(item.description.text);
    } else desc = richText(item.description);
    if (desc) sections.beschreibung = desc;
  }

  // ANFAHRT
  var anfahrt = '';
  if (item.directions) {
    if (typeof item.directions === 'object') {
      if (item.directions.byCar) {
        anfahrt += '<p><strong>Mit dem Auto:</strong></p>' + richText(item.directions.byCar);
      }
    } else {
      anfahrt = richText(item.directions);
    }
  }
  if (anfahrt) sections.anfahrt = anfahrt;

  // ÖFFENTLICHE VERKEHRSMITTEL
  var oepnv = '';
  // Variante 1: directions.byPublicTransport (Wiedweg)
  if (item.directions && typeof item.directions === 'object' && item.directions.byPublicTransport) {
    oepnv += richText(item.directions.byPublicTransport);
  }
  // Variante 2: publicTransport-Objekt oder -String
  if (item.publicTransport) {
    if (typeof item.publicTransport === 'object') {
      var pt = item.publicTransport;
      if (pt.arrival)    oepnv += '<p><strong>Anfahrt mit Bahn/Bus:</strong></p>' + richText(pt.arrival);
      if (pt.returnTrip) oepnv += '<p><strong>Rückfahrt:</strong></p>' + richText(pt.returnTrip);
      if (pt.returnTripUrl) oepnv += '<p><a href="' + pt.returnTripUrl + '" target="_blank" rel="noopener">Fahrplan-PDF</a></p>';
      if (pt.stops && pt.stops.length) {
        oepnv += '<p><strong>Haltestellen:</strong></p><ul>';
        pt.stops.forEach(function(s) {
          oepnv += '<li><strong>' + escapeHtml(s.name||'') + '</strong>' + (s.note ? '<br>' + escapeHtml(s.note) : '') + '</li>';
        });
        oepnv += '</ul>';
      }
      if (pt.links && pt.links.length) {
        oepnv += '<p><strong>Fahrplaninfos:</strong></p><ul>';
        pt.links.forEach(function(l) {
          oepnv += '<li><a href="' + l.url + '" target="_blank" rel="noopener">' + escapeHtml(l.label || l.url) + '</a></li>';
        });
        oepnv += '</ul>';
      }
      if (pt.taxis && pt.taxis.length) {
        oepnv += '<p><strong>Taxiunternehmen:</strong></p><ul>';
        pt.taxis.forEach(function(t) { oepnv += '<li>' + escapeHtml(t) + '</li>'; });
        oepnv += '</ul>';
      }
      if (pt.sustainableTip) {
        oepnv += '<p><strong>🌱 Nachhaltig anreisen:</strong></p>' + richText(pt.sustainableTip);
        if (pt.sustainableTipUrls && pt.sustainableTipUrls.length) {
          oepnv += '<p>';
          pt.sustainableTipUrls.forEach(function(u, i) {
            if (i > 0) oepnv += ' · ';
            oepnv += '<a href="' + u.url + '" target="_blank" rel="noopener">' + escapeHtml(u.label || u.url) + '</a>';
          });
          oepnv += '</p>';
        }
      }
      if (pt.moreInfoUrl) {
        oepnv += '<p><a href="' + pt.moreInfoUrl + '" target="_blank" rel="noopener">Weitere Infos zur Anreise</a></p>';
      }
    } else {
      oepnv += richText(item.publicTransport);
    }
  }
  if (oepnv) sections.oepnv = oepnv;

  // PARKEN
  var parken = '';
  // Variante 1: directions.parking (Wiedweg)
  if (item.directions && typeof item.directions === 'object' && item.directions.parking) {
    parken += richText(item.directions.parking);
  }
  // Variante 2: parking-Array oder -String
  if (item.parking) {
    if (Array.isArray(item.parking)) {
      if (item.parking.length) {
        parken += '<ul>';
        item.parking.forEach(function(p) {
          parken += '<li><strong>' + escapeHtml(p.location||'') + ':</strong>'
            + (p.free ? '<br>kostenlos: ' + escapeHtml(p.free) : '')
            + (p.paid ? '<br>gebührenpflichtig: ' + escapeHtml(p.paid) : '')
            + '</li>';
        });
        parken += '</ul>';
      }
    } else {
      parken += richText(item.parking);
    }
  }
  if (parken) sections.parken = parken;

  // WEGBESCHREIBUNG
  var weg = '';
  if (item.routeDescription) {
    if (typeof item.routeDescription === 'object') {
      if (item.routeDescription.general) weg += richText(item.routeDescription.general);
      if (item.routeDescription.accessTrails && item.routeDescription.accessTrails.length) {
        weg += '<p><strong>Zuwege:</strong></p><ul>';
        item.routeDescription.accessTrails.forEach(function(t) { weg += '<li>' + escapeHtml(t) + '</li>'; });
        weg += '</ul>';
      }
      if (item.routeDescription.accessTrailMarking) {
        weg += '<p><strong>Markierung:</strong> ' + escapeHtml(item.routeDescription.accessTrailMarking) + '</p>';
      }
    } else {
      weg = richText(item.routeDescription);
    }
  }
  // Wiedweg nutzt wayDescription
  if (!weg && item.wayDescription) weg = richText(item.wayDescription);
  if (weg) sections.wegbeschreibung = weg;

  // SICHERHEITSHINWEISE
  var sicher = '';
  if (item.safetyNotes) sicher += richText(item.safetyNotes);
  if (item.safetyAppUrl) {
    sicher += '<p><strong>App-Empfehlung:</strong> '
      + '<a href="' + item.safetyAppUrl + '" target="_blank" rel="noopener">'
      + 'Rheinland-Pfalz erleben</a></p>';
  }
  if (sicher) sections.sicherheit = sicher;

  // AUSRÜSTUNG
  if (item.equipment) sections.ausruestung = richText(item.equipment);

  // TIPPS
  var tipps = '';
  if (item.tips) {
    if (Array.isArray(item.tips)) {
      if (item.tips.length) {
        tipps += '<ul>';
        item.tips.forEach(function(t) {
          tipps += '<li><strong>' + escapeHtml(t.name||'') + '</strong>'
            + (t.note ? '<br>' + escapeHtml(t.note) : '')
            + (t.url ? '<br><a href="' + t.url + '" target="_blank" rel="noopener">' + t.url + '</a>' : '')
            + '</li>';
        });
        tipps += '</ul>';
      }
    } else {
      tipps = richText(item.tips);
    }
  }
  if (tipps) sections.tipps = tipps;

  // LITERATUR
  var lit = '';
  if (item.literature) {
    if (Array.isArray(item.literature)) {
      if (item.literature.length) {
        lit += '<ul>';
        item.literature.forEach(function(l) { lit += '<li>' + escapeHtml(l) + '</li>'; });
        lit += '</ul>';
      }
    } else {
      lit = richText(item.literature);
    }
  }
  if (lit) sections.literatur = lit;

  // START
  var start = '';
  if (item.start) {
    if (typeof item.start === 'object') {
      start = '<p><strong>' + escapeHtml(item.start.name||'') + '</strong>'
        + (item.start.address ? '<br>' + escapeHtml(item.start.address) : '')
        + (item.start.coordinates ? '<br><em>' + escapeHtml(item.start.coordinates) + '</em>' : '')
        + '</p>';
    } else {
      start = richText(item.start);
    }
  } else if (item.startPoint) {
    start = richText(item.startPoint);
  }
  if (start) sections.start = start;

  // ZIEL
  var ziel = '';
  if (item.destination) {
    if (typeof item.destination === 'object') {
      ziel = '<p><strong>' + escapeHtml(item.destination.name||'') + '</strong>'
        + (item.destination.address ? '<br>' + escapeHtml(item.destination.address) : '')
        + (item.destination.coordinates ? '<br><em>' + escapeHtml(item.destination.coordinates) + '</em>' : '')
        + '</p>';
    } else {
      ziel = richText(item.destination);
    }
  } else if (item.endPoint) {
    ziel = richText(item.endPoint);
  }
  if (ziel) sections.ziel = ziel;

  return sections;
}

function renderRouteDetail(ziel, item, info, zurueck) {
  var n = normalisiere(item);
  var sw = swKlasse(n.schwierigkeit);
  var diffBg = sw ? 'diff-' + sw + '-bg' : '';

  // STICKY HEADER: nav + intro + Etappentitel + Schwierigkeit/GPX/Karte
  var stickyTopRow = '<div class="diff-gpx-row">';
  if (n.schwierigkeit) stickyTopRow += '<span class="diff-pill ' + diffBg + '">' + escapeHtml(n.schwierigkeit) + '</span>';
  if (n.gpxUrl) stickyTopRow += '<a class="btn-action btn-gpx" href="' + n.gpxUrl + '" target="_blank" rel="noopener">📥 GPX</a>';
  if (n.tourenplanerUrl) stickyTopRow += '<a class="btn-action outline" href="' + n.tourenplanerUrl + '" target="_blank" rel="noopener">🗺️ Karte</a>';
  stickyTopRow += '</div>';

  var html = '<div class="sticky-detail">'
    + navBar(zurueck, info.breadcrumb)
    + intro(info.titel, info.untertitel || '')
    + '<div class="sticky-detail-titel">' + escapeHtml(n.titel) + '</div>'
    + stickyTopRow
    + '</div>';

  // STATS-GRID (im scrollenden Bereich)
  html += '<div class="detail-section">';
  if (n.subtitle) html += '<div class="detail-subtitle">' + escapeHtml(n.subtitle) + '</div>';

  var sList = [];
  var addStat = function(label, val) { if (val) sList.push('<div class="stat"><div class="stat-label">' + label + '</div><div class="stat-wert">' + escapeHtml(val) + '</div></div>'); };
  addStat('Distanz', n.km ? (n.km + (String(n.km).indexOf('km')<0 ? ' km' : '')) : '');
  addStat('Dauer', n.dauer);
  addStat('Aufstieg', n.aufstieg);
  addStat('Abstieg', n.abstieg);
  addStat('Höchster Punkt', n.hoechster);
  addStat('Tiefster Punkt', n.tiefster);
  if (sList.length) html += '<div class="stats-grid">' + sList.join('') + '</div>';

  // KANONISCHE DROPDOWNS in fester Reihenfolge
  var sections = buildCanonicalSections(item);
  var firstShown = false;
  for (var i = 0; i < CANON_ORDER.length; i++) {
    var key = CANON_ORDER[i][0];
    var label = CANON_ORDER[i][1];
    if (sections[key]) {
      html += dropdown(label, sections[key], !firstShown);
      firstShown = true;
    }
  }

  // Hinweis falls noch keine Detail-Daten
  if (!firstShown) {
    html += '<div class="hinweis">Detail-Informationen zu dieser Tour werden noch ergänzt.</div>';
  }

  html += '</div><div class="spacer"></div>';
  ziel.innerHTML = html;
}

// === Ausflugsziel / Museum / Literatur ===
function renderAusflDetail(ziel, item, info, zurueck) {
  var html = navBar(zurueck, info.breadcrumb)
    + intro(info.titel || 'Detail', '')
    + '<div class="detail-section">'
    + '<h2 class="detail-titel">' + escapeHtml(item.name) + '</h2>';
  var tagRow = '<div class="diff-gpx-row">';
  if (item.mainTopic || item.topic) tagRow += '<span class="diff-pill">' + escapeHtml(item.mainTopic || item.topic) + '</span>';
  if (item.town) tagRow += '<span class="diff-pill diff-leicht-bg">' + escapeHtml(item.town) + '</span>';
  tagRow += '</div>';
  html += tagRow;
  if (item.description || item.desc) html += dropdown('Beschreibung', txt(item.description || item.desc), true);
  if (item.url) html += dropdown('Mehr Informationen', '<p><a href="' + item.url + '" target="_blank" rel="noopener">' + item.url + '</a></p>');
  html += '</div><div class="spacer"></div>';
  ziel.innerHTML = html;
}

// === Badesee ===
function renderBadeseeDetail(ziel, item, info, zurueck) {
  var html = navBar(zurueck, info.breadcrumb)
    + intro(info.titel, '')
    + '<div class="detail-section">'
    + '<h2 class="detail-titel">' + escapeHtml(item.name) + '</h2>';
  if (item.ort) html += '<div class="diff-gpx-row"><span class="diff-pill diff-leicht-bg">📍 ' + escapeHtml(item.ort) + '</span></div>';
  if (item.kurz) html += dropdown('Kurzinfo', txt(item.kurz), true);
  if (item.detail) html += dropdown('Beschreibung', txt(item.detail));

  // Vollständige Adresse: Straße, PLZ + Ort, Telefon, E-Mail, Web
  var kontakt = '';
  // Adresse als Block
  var adresse = '';
  if (item.strasse) adresse += escapeHtml(item.strasse) + '<br>';
  if (item.plz || item.ort) {
    adresse += (item.plz ? escapeHtml(item.plz) + ' ' : '') + (item.ort ? escapeHtml(item.ort) : '') + '<br>';
  }
  if (adresse) kontakt += '<p><strong>Adresse:</strong><br>' + adresse + '</p>';
  if (item.tel)  kontakt += '<p><strong>Telefon:</strong> <a href="tel:' + escapeHtml(item.tel.replace(/\s+/g,'')) + '">' + escapeHtml(item.tel) + '</a></p>';
  if (item.mail) kontakt += '<p><strong>E-Mail:</strong> <a href="mailto:' + escapeHtml(item.mail) + '">' + escapeHtml(item.mail) + '</a></p>';
  if (item.links && item.links.length) {
    item.links.forEach(function(l) {
      kontakt += '<p><strong>Web:</strong> <a href="' + escapeHtml(l) + '" target="_blank" rel="noopener">' + escapeHtml(l.replace(/^https?:\/\//,'').replace(/\/$/,'')) + '</a></p>';
    });
  }
  if (!kontakt) kontakt = '<p class="hinweis-leer"><em>Kontaktdaten bitte beim örtlichen Tourismusbüro erfragen.</em></p>';
  html += dropdown('Kontakt', kontakt);

  html += '</div><div class="spacer"></div>';
  ziel.innerHTML = html;
}

// === Unterkunft ===
function renderUnterkunftDetail(ziel, item, info, zurueck) {
  var html = navBar(zurueck, info.breadcrumb)
    + intro(info.titel, '')
    + '<div class="detail-section">'
    + '<h2 class="detail-titel">' + escapeHtml(item.name) + '</h2>';
  if (item.categories && item.categories.length) {
    html += '<div class="diff-gpx-row">';
    item.categories.forEach(function(c) { html += '<span class="diff-pill">' + escapeHtml(c) + '</span>'; });
    html += '</div>';
  }
  if (item.description) html += dropdown('Beschreibung', txt(item.description), true);
  if (item.features && item.features.length) {
    var f = '<ul>';
    item.features.forEach(function(x) { f += '<li>' + escapeHtml(x) + '</li>'; });
    f += '</ul>';
    html += dropdown('Ausstattung', f);
  }
  if (item.contact && (item.contact.phone || item.contact.email || item.contact.url)) {
    var k = '';
    if (item.contact.phone) k += '<strong>Telefon:</strong> ' + escapeHtml(item.contact.phone) + '<br>';
    if (item.contact.email) k += '<strong>E-Mail:</strong> <a href="mailto:' + item.contact.email + '">' + item.contact.email + '</a><br>';
    if (item.contact.url)   k += '<strong>Web:</strong> <a href="' + item.contact.url + '" target="_blank">' + item.contact.url + '</a>';
    html += dropdown('Kontakt', '<p>' + k + '</p>');
  }
  if (!item.description && (!item.features || !item.features.length)) {
    html += '<div class="hinweis">Detail-Daten zu dieser Unterkunft werden noch befüllt.</div>';
  }
  html += '</div><div class="spacer"></div>';
  ziel.innerHTML = html;
}


// ════════════════════════════════════════════════════════════════
// AUSFLUGSZIELE / UNTERKÜNFTE: Liste mit Typ-Filter + Suche
// ════════════════════════════════════════════════════════════════

var GEFILTERT_STATE = { typ: 'alle', suche: '' };
window._aktuelleGefiltert = null;

function gefiltertFilterUI(l) {
  var html = '<div class="filter-leiste gefiltert-filter">';
  html += '<div class="filter-gruppe filter-bezirk">';
  html += '<span class="filter-label">' + escapeHtml(l.filterLabel || 'Typ') + ':</span>';
  for (var i = 0; i < l.filterTypen.length; i++) {
    var t = l.filterTypen[i];
    var aktiv = GEFILTERT_STATE.typ === t.key;
    html += '<button class="filter-pill' + (aktiv ? ' aktiv' : '') + '" '
      + 'onclick="setzeGefiltertFilter(\'' + t.key + '\')">' + escapeHtml(t.label) + '</button>';
  }
  html += '</div>';
  html += '<div class="filter-gruppe filter-suche">';
  html += '<input type="text" class="filter-such-input" placeholder="🔍 Suchen…" '
    + 'value="' + escapeHtml(GEFILTERT_STATE.suche) + '" '
    + 'oninput="setzeGefiltertSuche(this.value)">';
  html += '</div>';
  html += '</div>';
  return html;
}

function setzeGefiltertFilter(key) {
  GEFILTERT_STATE.typ = key;
  refreshGefiltertView();
}
function setzeGefiltertSuche(val) {
  GEFILTERT_STATE.suche = val || '';
  refreshGefiltertView();
}
function refreshGefiltertView() {
  var ctx = window._aktuelleGefiltert;
  if (!ctx) return;
  // Nur das Filter-Wrapper und die Liste neu rendern, nicht die ganze Seite
  var filterWrap = document.getElementById('gefiltert-filter-wrap');
  if (filterWrap) filterWrap.innerHTML = gefiltertFilterUI(ctx.info);
  var listenEl = document.getElementById('gefiltert-liste');
  if (listenEl) {
    var html = baueGefiltertListe(ctx.slug, ctx.info);
    listenEl.innerHTML = html.html;
    var trefferEl = document.getElementById('gefiltert-treffer');
    if (trefferEl) trefferEl.innerHTML = '<strong>' + html.gefiltertCount + '</strong> von <strong>' + html.gesamtCount + '</strong> Einträgen';
  }
}

function gefiltertItemTyp(item, l) {
  // l.typErkenner: function(item) → key (passend zu filterTypen[].key)
  if (l.typErkenner) return l.typErkenner(item);
  return 'sonstige';
}

function baueGefiltertListe(slug, l) {
  var rohdaten = window[l.datenName] || [];
  var suche = (GEFILTERT_STATE.suche || '').toLowerCase().trim();

  var gefiltert = rohdaten.filter(function(item) {
    if (GEFILTERT_STATE.typ !== 'alle') {
      if (gefiltertItemTyp(item, l) !== GEFILTERT_STATE.typ) return false;
    }
    if (suche) {
      var blob = ((item.name || '') + ' ' + (item.town || '') + ' ' + (item.region || '') + ' ' + (item.topic || '') + ' ' + (item.mainTopic || '')).toLowerCase();
      if (blob.indexOf(suche) < 0) return false;
    }
    return true;
  });

  if (!gefiltert.length) {
    return { html: '<div class="hinweis">Keine Einträge passen zu deiner Auswahl.</div>',
             gefiltertCount: 0, gesamtCount: rohdaten.length };
  }

  // Sortieren alphabetisch
  gefiltert.sort(function(a,b) {
    return (a.name || '').localeCompare(b.name || '', 'de');
  });

  var html = gefiltert.map(function(item) {
    var idx = rohdaten.indexOf(item);
    var titel = item.name || 'Eintrag';
    var ort = item.town || (item.contact && item.contact.town) || '';
    var thema = item.topic || item.mainTopic || gefiltertItemTyp(item, l) || '';
    var typLabel = '';
    if (l.filterTypen && l.typErkenner) {
      var tk = gefiltertItemTyp(item, l);
      for (var i = 0; i < l.filterTypen.length; i++) {
        if (l.filterTypen[i].key === tk && tk !== 'alle') { typLabel = l.filterTypen[i].label; break; }
      }
    }
    var meta = [];
    if (ort) meta.push('📍 ' + escapeHtml(ort));
    if (thema && thema !== typLabel) meta.push(escapeHtml(thema));
    return '<button class="eintrag" onclick="navigateTo(\'detail/' + l.detailKey + '/' + slug + '_' + idx + '\')">'
      + (typLabel ? '<div class="eintrag-typ-badge">' + escapeHtml(typLabel) + '</div>' : '')
      + '<div class="eintrag-text">'
        + '<div class="eintrag-titel">' + escapeHtml(titel) + '</div>'
        + (meta.length ? '<div class="eintrag-meta">' + meta.join(' · ') + '</div>' : '')
      + '</div>'
      + '<div class="eintrag-pfeil">&rsaquo;</div>'
    + '</button>';
  }).join('');

  return { html: html, gefiltertCount: gefiltert.length, gesamtCount: rohdaten.length };
}

function renderGefiltertListe(ziel, slug, l) {
  GEFILTERT_STATE = { typ: 'alle', suche: '' };
  window._aktuelleGefiltert = { slug: slug, info: l };

  var rohdaten = window[l.datenName] || [];
  if (!rohdaten.length) {
    ziel.innerHTML =
      '<div class="sticky-region">'
      + navBar(l.zurueck, l.breadcrumb)
      + intro(l.titel, l.untertitel)
      + '</div>'
      + '<div class="hinweis">Daten noch nicht verfügbar.</div>'
      + '<div class="spacer"></div>';
    return;
  }
  var liste = baueGefiltertListe(slug, l);

  ziel.innerHTML =
    '<div class="sticky-region">'
      + navBar(l.zurueck, l.breadcrumb)
      + intro(l.titel, l.untertitel)
      + '<div id="gefiltert-filter-wrap">' + gefiltertFilterUI(l) + '</div>'
    + '</div>'
    + '<div id="gefiltert-treffer" class="filter-treffer"><strong>' + liste.gefiltertCount + '</strong> von <strong>' + liste.gesamtCount + '</strong> Einträgen</div>'
    + '<div class="liste" id="gefiltert-liste">' + liste.html + '</div>'
    + '<div class="spacer"></div>';
}


// ════════════════════════════════════════════════════════════════
// INHALTS-SEITE (statischer HTML-Inhalt im App-Stil)
// Für: Westerwald-Box, Westerwälder Ernte
// ════════════════════════════════════════════════════════════════
function renderInhaltSeite(ziel, slug, l) {
  var inhalt = (window._INHALTE && window._INHALTE[l.inhaltKey]) || '';
  ziel.innerHTML =
    '<div class="sticky-region">'
      + navBar(l.zurueck, l.breadcrumb)
      + intro(l.titel, l.untertitel)
    + '</div>'
    + '<div class="detail-section inhalts-seite">' + (inhalt || '<div class="hinweis">Inhalt wird noch ergänzt.</div>') + '</div>'
    + '<div class="spacer"></div>';

  // Bilderslider initialisieren (sofern vorhanden)
  var sliders = ziel.querySelectorAll('.bilder-slider');
  for (var i = 0; i < sliders.length; i++) initSlider(sliders[i]);

  // Betriebs-Liste in Westerwald-Box einhängen
  var betriebeListe = ziel.querySelector('#ww-box-betriebe-liste');
  if (betriebeListe && window.DATA_WESTERWALDBOX_BETRIEBE) {
    betriebeListe.innerHTML = baueBetriebeListe();
  }
}

// ════════════════════════════════════════════════════════════════
// BILDERSLIDER (vanilla JS, swipe-fähig)
// Erwartet: <div class="bilder-slider" data-images='[{url,alt},...]'>
//   <div class="slider-bilder"></div>
//   <button class="slider-prev"></button><button class="slider-next"></button>
//   <div class="slider-punkte"></div><div class="slider-counter"></div>
// </div>
// ════════════════════════════════════════════════════════════════
function initSlider(slider) {
  var dataAttr = slider.getAttribute('data-images');
  if (!dataAttr) return;
  var bilder;
  try { bilder = JSON.parse(dataAttr); } catch (e) { return; }
  if (!bilder || !bilder.length) return;

  var bilderDiv = slider.querySelector('.slider-bilder');
  var punkteDiv = slider.querySelector('.slider-punkte');
  var counterDiv = slider.querySelector('.slider-counter');
  var prevBtn = slider.querySelector('.slider-prev');
  var nextBtn = slider.querySelector('.slider-next');

  // Bilder einsetzen
  var html = '';
  for (var i = 0; i < bilder.length; i++) {
    html += '<img class="slider-bild" data-idx="' + i + '" '
         + 'src="' + escapeHtml(bilder[i].url) + '" '
         + 'alt="' + escapeHtml(bilder[i].alt || '') + '" '
         + 'loading="lazy">';
  }
  if (bilderDiv) bilderDiv.innerHTML = html;

  // Punkte
  if (punkteDiv) {
    var punkteHtml = '';
    for (var j = 0; j < bilder.length; j++) {
      punkteHtml += '<button class="slider-punkt" data-idx="' + j + '" aria-label="Bild ' + (j+1) + '"></button>';
    }
    punkteDiv.innerHTML = punkteHtml;
  }

  var aktiv = 0;
  var anzahl = bilder.length;

  function zeige(idx) {
    if (idx < 0) idx = anzahl - 1;
    if (idx >= anzahl) idx = 0;
    aktiv = idx;
    if (bilderDiv) bilderDiv.style.transform = 'translateX(-' + (idx * 100) + '%)';
    if (counterDiv) counterDiv.textContent = (idx + 1) + ' / ' + anzahl;
    if (punkteDiv) {
      var punkte = punkteDiv.querySelectorAll('.slider-punkt');
      for (var k = 0; k < punkte.length; k++) {
        punkte[k].classList.toggle('aktiv', k === idx);
      }
    }
  }

  if (prevBtn) prevBtn.addEventListener('click', function() { zeige(aktiv - 1); });
  if (nextBtn) nextBtn.addEventListener('click', function() { zeige(aktiv + 1); });
  if (punkteDiv) {
    punkteDiv.addEventListener('click', function(e) {
      var btn = e.target.closest && e.target.closest('.slider-punkt');
      if (btn) zeige(parseInt(btn.getAttribute('data-idx'), 10));
    });
  }

  // Touch-Swipe
  var startX = null, deltaX = 0;
  slider.addEventListener('touchstart', function(e) {
    if (e.touches.length !== 1) return;
    startX = e.touches[0].clientX;
    deltaX = 0;
  }, { passive: true });
  slider.addEventListener('touchmove', function(e) {
    if (startX === null) return;
    deltaX = e.touches[0].clientX - startX;
  }, { passive: true });
  slider.addEventListener('touchend', function() {
    if (startX !== null && Math.abs(deltaX) > 40) {
      zeige(deltaX < 0 ? aktiv + 1 : aktiv - 1);
    }
    startX = null;
    deltaX = 0;
  });

  zeige(0);
}

function baueBetriebeListe() {
  var d = window.DATA_WESTERWALDBOX_BETRIEBE || [];
  var html = '';
  for (var i = 0; i < d.length; i++) {
    var b = d[i];
    var ortText = (b.plz || '') + (b.plz && b.ort ? ' ' : '') + (b.ort || '');
    var meta = [];
    if (ortText) meta.push('📍 ' + escapeHtml(ortText));
    if (b.branche) meta.push(escapeHtml(b.branche));
    var logoHtml = '';
    if (b.logo) {
      logoHtml = '<img class="betrieb-logo" src="' + escapeHtml(b.logo) + '" alt="Logo ' + escapeHtml(b.name) + '" loading="lazy" onerror="this.style.display=\'none\'">';
    }
    html += '<button class="eintrag betrieb-eintrag" onclick="navigateTo(\'detail/wwbox/' + i + '\')">'
      + (logoHtml || '<div class="betrieb-logo-platzhalter">' + escapeHtml(b.name.charAt(0)) + '</div>')
      + '<div class="eintrag-text">'
        + '<div class="eintrag-titel">' + escapeHtml(b.name) + '</div>'
        + (meta.length ? '<div class="eintrag-meta">' + meta.join(' · ') + '</div>' : '')
      + '</div>'
      + '<div class="eintrag-pfeil">&rsaquo;</div>'
    + '</button>';
  }
  return html;
}

// ════════════════════════════════════════════════════════════════
// IFRAME-SEITE (PDF oder externe Seite eingebettet)
// Für: Einkaufsführer-PDF, Naturgenuss Partner/Broschüre
// ════════════════════════════════════════════════════════════════
function renderIframeSeite(ziel, slug, l) {
  var iframeUrl = l.iframeUrl || '';
  var iframeTyp = l.iframeTyp || 'pdf'; // 'pdf' (default) oder 'webseite'
  var ua = (navigator.userAgent || '').toLowerCase();
  var istMobil = /iphone|ipad|ipod|android|mobile/.test(ua);

  // ── WEBSEITE ────────────────────────────────────────────────────
  if (iframeTyp === 'webseite') {
    if (istMobil) {
      // Mobile: schöne Karte mit "In neuem Tab öffnen"-Button.
      // Externe Web-Apps wie westerwald.info sind im iframe auf Mobile
      // schwer zu bedienen (Touch-Konflikte, scrollen, kleine Buttons).
      ziel.innerHTML =
        '<div class="sticky-region">'
          + navBar(l.zurueck, l.breadcrumb)
          + intro(l.titel, l.untertitel)
        + '</div>'
        + '<div class="pdf-mobile-karte">'
          + '<div class="pdf-mobile-icon">🌐</div>'
          + '<div class="pdf-mobile-titel">' + escapeHtml(l.titel) + '</div>'
          + '<p class="pdf-mobile-hinweis">Auf dem Smartphone funktioniert die externe Webseite am besten in einem eigenen Tab.</p>'
          + '<a class="btn-pdf-oeffnen-gross" href="' + iframeUrl + '" target="_blank" rel="noopener">🌐 Seite jetzt öffnen</a>'
          + '<p class="pdf-mobile-meta">Inhalt von <a href="' + iframeUrl + '" target="_blank" rel="noopener">' + escapeHtml(iframeUrl.replace(/^https?:\/\//,'').split('/')[0]) + '</a></p>'
        + '</div>'
        + '<div class="spacer"></div>';
      return;
    }
    // Desktop: Strategie "Karte + optionaler iframe":
    //   - Oben immer sichtbar: Karte mit großem "Seite öffnen"-Button.
    //     Damit hat der User auch dann ein klares Ziel, wenn der iframe
    //     vom Anbieter via X-Frame-Options blockiert wird.
    //   - Darunter: Versuch, die Seite eingebettet zu zeigen. Wenn das
    //     vom Anbieter erlaubt ist, sieht der User zusätzlich die echte
    //     Vorschau. Wenn nicht, bleibt der iframe-Bereich entweder leer
    //     oder er wird per Heuristik nach 3.5s ausgeblendet.
    var iframeId = 'iframe-' + Math.random().toString(36).slice(2);
    var hostname = iframeUrl.replace(/^https?:\/\//,'').split('/')[0];

    ziel.innerHTML =
      '<div class="sticky-region">'
        + navBar(l.zurueck, l.breadcrumb)
        + intro(l.titel, l.untertitel)
      + '</div>'
      // Karte oben — immer sichtbar
      + '<div class="iframe-info-karte">'
        + '<div class="iframe-info-text">'
          + '<strong>Inhalt von ' + escapeHtml(hostname) + '</strong>'
          + '<span class="iframe-info-hinweis">Falls die eingebettete Vorschau unten leer bleibt, kannst du die Seite hier in einem neuen Tab öffnen:</span>'
        + '</div>'
        + '<a class="btn-pdf-oeffnen-gross btn-info-karte" href="' + iframeUrl + '" target="_blank" rel="noopener">🌐 Seite öffnen</a>'
      + '</div>'
      // iframe-Versuch
      + '<div class="iframe-wrap iframe-versuch" id="' + iframeId + '-wrap">'
        + '<div class="iframe-lade-hinweis">Versuche, die Seite einzubetten …</div>'
        + '<iframe id="' + iframeId + '" src="' + iframeUrl + '" class="inhalts-iframe" '
        + 'allowfullscreen referrerpolicy="no-referrer-when-downgrade" '
        + 'sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-popups-to-escape-sandbox"></iframe>'
      + '</div>'
      + '<div class="spacer"></div>';

    // Lade-Hinweis nach 3.5s ausblenden, egal ob iframe geladen ist oder nicht
    setTimeout(function() {
      var wrap = document.getElementById(iframeId + '-wrap');
      if (!wrap) return;
      var hinweis = wrap.querySelector('.iframe-lade-hinweis');
      if (hinweis) hinweis.style.display = 'none';
    }, 3500);
    return;
  }

  // ── PDF (default) ───────────────────────────────────────────────
  if (istMobil) {
    ziel.innerHTML =
      '<div class="sticky-region">'
        + navBar(l.zurueck, l.breadcrumb)
        + intro(l.titel, l.untertitel)
      + '</div>'
      + '<div class="pdf-mobile-karte">'
        + '<div class="pdf-mobile-icon">📄</div>'
        + '<div class="pdf-mobile-titel">' + escapeHtml(l.titel) + '</div>'
        + '<p class="pdf-mobile-hinweis">Auf dem Smartphone öffnet sich das PDF am besten direkt im PDF-Viewer deines Geräts.</p>'
        + '<a class="btn-pdf-oeffnen-gross" href="' + iframeUrl + '" target="_blank" rel="noopener">📄 PDF jetzt öffnen</a>'
        + '<p class="pdf-mobile-meta"><a href="' + iframeUrl + '" target="_blank" rel="noopener">' + escapeHtml(iframeUrl.replace(/^https?:\/\//,'').replace(/\/[^/]*$/, '/…')) + '</a></p>'
      + '</div>'
      + '<div class="spacer"></div>';
    return;
  }

  // Desktop PDF: iframe via Google-Docs-Viewer (Originalserver setzt
  // X-Frame-Options, also kein direktes Einbetten möglich).
  var safe = encodeURIComponent(iframeUrl);
  var viewerUrl = 'https://docs.google.com/viewer?url=' + safe + '&embedded=true';
  ziel.innerHTML =
    '<div class="sticky-region">'
      + navBar(l.zurueck, l.breadcrumb)
      + intro(l.titel, l.untertitel)
      + '<div class="iframe-aktionen">'
        + '<a class="btn-action btn-pdf-oeffnen" href="' + iframeUrl + '" target="_blank" rel="noopener">📄 PDF in neuem Tab öffnen</a>'
      + '</div>'
    + '</div>'
    + '<div class="iframe-wrap">'
      + '<iframe src="' + viewerUrl + '" class="inhalts-iframe" '
      + 'allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>'
    + '</div>'
    + '<div class="iframe-fallback">'
      + 'PDF wird nicht angezeigt? <a href="' + iframeUrl + '" target="_blank" rel="noopener">Direkt öffnen ↗</a>'
    + '</div>'
    + '<div class="spacer"></div>';
}

// ════════════════════════════════════════════════════════════════
// MUSEEN INLINE (alle Einträge mit Inhalt als Liste, kein externer Link)
// ════════════════════════════════════════════════════════════════
function renderMuseenInline(ziel, slug, l) {
  var daten = window[l.datenName] || [];
  if (!daten.length) {
    ziel.innerHTML = '<div class="sticky-region">' + navBar(l.zurueck, l.breadcrumb) + intro(l.titel, l.untertitel) + '</div>'
      + '<div class="hinweis">Museen-Daten werden noch ergänzt.</div><div class="spacer"></div>';
    return;
  }
  var items = daten.map(function(m, idx) {
    var ort = m.ort || m.town || '';
    var meta = [];
    if (ort) meta.push('📍 ' + escapeHtml(ort));
    return '<button class="eintrag" onclick="navigateTo(\'detail/museum/' + slug + '_' + idx + '\')">'
      + '<div class="eintrag-text">'
        + '<div class="eintrag-titel">' + escapeHtml(m.name) + '</div>'
        + (meta.length ? '<div class="eintrag-meta">' + meta.join(' · ') + '</div>' : '')
      + '</div>'
      + '<div class="eintrag-pfeil">&rsaquo;</div>'
    + '</button>';
  }).join('');
  ziel.innerHTML =
    '<div class="sticky-region">'
      + navBar(l.zurueck, l.breadcrumb)
      + intro(l.titel, l.untertitel)
    + '</div>'
    + '<div class="liste">' + items + '</div>'
    + '<div class="spacer"></div>';
}


// ════════════════════════════════════════════════════════════════
// NATURGENUSS LINKS (zwei PDF-Untereinträge)
// ════════════════════════════════════════════════════════════════
function renderNaturgenussLinks(ziel, slug, l) {
  var links = [
    {label:'Erzeuger & Produkte (PDF, 2025)',  url:'#liste/regional-naturgenuss-erzeuger',  meta:'Übersicht aller Naturgenuss-Partner'},
    {label:'Naturgenuss Broschüre (PDF, 2022)', url:'#liste/regional-naturgenuss-broschuere', meta:'Magazin der Naturgenuss-Initiative'},
    {label:'Naturgenuss Saisonprodukte (PDF)',  url:'#liste/regional-naturgenuss-saisonprodukte', meta:'Saisonale Produkte und Rezepte'}
  ];
  var items = links.map(function(lnk) {
    return '<a class="eintrag" href="' + lnk.url + '">'
      + '<div class="eintrag-text">'
        + '<div class="eintrag-titel">' + escapeHtml(lnk.label) + '</div>'
        + '<div class="eintrag-meta">' + escapeHtml(lnk.meta) + '</div>'
      + '</div>'
      + '<div class="eintrag-pfeil">&rsaquo;</div>'
    + '</a>';
  }).join('');
  ziel.innerHTML =
    '<div class="sticky-region">'
      + navBar(l.zurueck, l.breadcrumb)
      + intro(l.titel, l.untertitel)
    + '</div>'
    + '<div class="liste linklist">' + items + '</div>'
    + '<div class="spacer"></div>';
}


// ════════════════════════════════════════════════════════════════
// MUSEUM-DETAIL: Inhalte direkt in der App
// ════════════════════════════════════════════════════════════════
function renderMuseumDetail(ziel, item, info, zurueck) {
  var html = '<div class="sticky-detail">'
    + navBar(zurueck, info.breadcrumb)
    + intro(info.titel, '')
    + '<div class="sticky-detail-titel">' + escapeHtml(item.name) + '</div>'
    + '<div class="diff-gpx-row">';
  if (item.ort) html += '<span class="diff-pill diff-leicht-bg">📍 ' + escapeHtml(item.ort) + '</span>';
  if (item.sourceUrl) html += '<a class="btn-action btn-gpx" href="' + item.sourceUrl + '" target="_blank" rel="noopener">↗ Quelle</a>';
  html += '</div></div>';

  html += '<div class="detail-section">';

  // Stats-Grid
  var stats = [];
  if (item.adresse) stats.push('<div class="stat"><div class="stat-label">Adresse</div><div class="stat-wert">' + escapeHtml(item.adresse) + '</div></div>');
  if (item.telefon) stats.push('<div class="stat"><div class="stat-label">Telefon</div><div class="stat-wert"><a href="tel:' + item.telefon.replace(/\s+/g,'') + '">' + escapeHtml(item.telefon) + '</a></div></div>');
  if (item.eintritt) stats.push('<div class="stat"><div class="stat-label">Eintritt</div><div class="stat-wert">' + escapeHtml(item.eintritt) + '</div></div>');
  if (stats.length) html += '<div class="stats-grid">' + stats.join('') + '</div>';

  // Dropdowns
  var first = true;
  if (item.beschreibung) { html += dropdown('Beschreibung', '<p>' + escapeHtml(item.beschreibung) + '</p>', first); first = false; }

  if (item.schwerpunkte && item.schwerpunkte.length) {
    var s = '<ul>' + item.schwerpunkte.map(function(x) { return '<li>' + escapeHtml(x) + '</li>'; }).join('') + '</ul>';
    html += dropdown('Schwerpunkte', s, first);
    first = false;
  }

  if (item.oeffnungszeiten) {
    html += dropdown('Öffnungszeiten', '<p>' + escapeHtml(item.oeffnungszeiten) + '</p>', first);
    first = false;
  }

  // Kontakt
  var kontakt = '';
  if (item.adresse) kontakt += '<p><strong>Adresse:</strong> ' + escapeHtml(item.adresse) + '</p>';
  if (item.telefon) kontakt += '<p><strong>Telefon:</strong> <a href="tel:' + item.telefon.replace(/\s+/g,'') + '">' + escapeHtml(item.telefon) + '</a></p>';
  if (item.email)   kontakt += '<p><strong>E-Mail:</strong> <a href="mailto:' + item.email + '">' + escapeHtml(item.email) + '</a></p>';
  if (item.website) {
    var w = item.website.indexOf('http') === 0 ? item.website : 'https://' + item.website;
    kontakt += '<p><strong>Website:</strong> <a href="' + w + '" target="_blank" rel="noopener">' + escapeHtml(item.website) + '</a></p>';
  }
  if (kontakt) { html += dropdown('Kontakt & Anfahrt', kontakt, first); first = false; }

  if (item.sourceUrl) {
    html += dropdown('Weitere Informationen',
      '<p>Diese Inhalte basieren auf den Daten der Tourismusplattform <a href="' + item.sourceUrl + '" target="_blank" rel="noopener">westerwald-sieg.de</a>. Bitte prüfen Sie aktuelle Öffnungszeiten und Eintrittspreise dort.</p>',
      first);
    first = false;
  }

  if (first) html += '<div class="hinweis">Inhalt wird ergänzt.</div>';

  html += '</div><div class="spacer"></div>';
  ziel.innerHTML = html;
}


// ════════════════════════════════════════════════════════════════
// BETRIEB-DETAIL: Hofläden, Direktvermarkter (Westerwald-Box-Anbieter)
// Einheitliches Schema: Beschreibung, Öffnungszeiten, Unternehmen,
// Karriere, Standort, Weitere Informationen
// ════════════════════════════════════════════════════════════════
function renderBetriebDetail(ziel, b, idx) {
  var zurueck = 'liste/regional-westerwald-box';
  var info = { breadcrumb: 'Regionale Produkte › Westerwald-Box › <strong>' + escapeHtml(b.name) + '</strong>', titel: 'Westerwald-Box' };

  var html = '<div class="sticky-detail">'
    + navBar(zurueck, info.breadcrumb)
    + intro(info.titel, '')
    + '<div class="sticky-detail-titel">' + escapeHtml(b.name) + '</div>'
    + '<div class="diff-gpx-row">';
  if (b.ort) {
    var ortStr = (b.plz ? b.plz + ' ' : '') + b.ort;
    html += '<span class="diff-pill diff-leicht-bg">📍 ' + escapeHtml(ortStr) + '</span>';
  }
  if (b.branche) html += '<span class="diff-pill diff-mittel-bg">' + escapeHtml(b.branche) + '</span>';
  if (b.website) html += '<a class="btn-action btn-gpx" href="' + escapeHtml(b.website) + '" target="_blank" rel="noopener">🌐 Website</a>';
  html += '</div></div>';

  html += '<div class="detail-section">';

  // Logo (groß) oben
  if (b.logo) {
    html += '<div class="betrieb-logo-gross-wrap">'
      + '<img class="betrieb-logo-gross" src="' + escapeHtml(b.logo) + '" alt="Logo ' + escapeHtml(b.name) + '" loading="lazy" onerror="this.parentNode.style.display=\'none\'">'
      + '</div>';
  }

  // Helper: leeres-Dropdown mit Hinweis-Text
  function leererHinweis(txt) {
    return '<p class="hinweis-leer"><em>' + txt + '</em></p>';
  }

  // 1. BESCHREIBUNG (immer)
  html += dropdown('Beschreibung',
    b.beschreibung ? '<p>' + escapeHtml(b.beschreibung) + '</p>' : leererHinweis('Keine Beschreibung hinterlegt.'),
    true);

  // 2. ÖFFNUNGSZEITEN (immer)
  var ozHtml;
  if (b.oeffnungszeiten && b.oeffnungszeiten.length) {
    ozHtml = '<table class="oeffnungszeiten-tab"><thead><tr><th>Tag</th><th>von</th><th>bis</th></tr></thead><tbody>';
    for (var i = 0; i < b.oeffnungszeiten.length; i++) {
      var oz = b.oeffnungszeiten[i];
      ozHtml += '<tr>';
      ozHtml += '<td>' + escapeHtml(oz.tag) + '</td>';
      if (oz.hinweis) {
        ozHtml += '<td colspan="2"><em>' + escapeHtml(oz.hinweis) + '</em></td>';
      } else {
        ozHtml += '<td>' + escapeHtml(oz.von || '') + (oz.von ? ' Uhr' : '') + '</td>';
        ozHtml += '<td>' + escapeHtml(oz.bis || '') + (oz.bis ? ' Uhr' : '') + '</td>';
      }
      ozHtml += '</tr>';
    }
    ozHtml += '</tbody></table>';
  } else {
    ozHtml = leererHinweis('Öffnungszeiten bitte direkt beim Betrieb erfragen.');
  }
  html += dropdown('Öffnungszeiten', ozHtml, false);

  // 3. DAS UNTERNEHMEN (immer)
  var untHtml = '';
  if (b.inhaber)   untHtml += '<p><strong>Inhaber/Geschäftsführer:</strong><br>' + escapeHtml(b.inhaber) + '</p>';
  if (b.branche)   untHtml += '<p><strong>Branche:</strong><br>' + escapeHtml(b.branche) + '</p>';
  if (b.gruendung) untHtml += '<p><strong>Gründung:</strong><br>' + escapeHtml(b.gruendung) + '</p>';
  if (b.produkte && b.produkte.length) {
    untHtml += '<p><strong>Produkte:</strong></p><ul>';
    for (var p = 0; p < b.produkte.length; p++) untHtml += '<li>' + escapeHtml(b.produkte[p]) + '</li>';
    untHtml += '</ul>';
  }
  if (!untHtml) untHtml = leererHinweis('Keine Angaben zum Unternehmen hinterlegt.');
  html += dropdown('Das Unternehmen', untHtml, false);

  // 4. KARRIERE (nur wenn Ausbildungen vorhanden – sonst weglassen)
  if (b.ausbildungen && b.ausbildungen.length) {
    var karHtml = '<p><strong>Ausbildungen:</strong></p><ul>';
    for (var a = 0; a < b.ausbildungen.length; a++) karHtml += '<li>' + escapeHtml(b.ausbildungen[a]) + '</li>';
    karHtml += '</ul>';
    html += dropdown('Karriere', karHtml, false);
  }

  // 5. STANDORT (immer)
  var stdHtml = '';
  if (b.landkreis) stdHtml += '<p><strong>Landkreis:</strong><br>' + escapeHtml(b.landkreis) + '</p>';
  if (b.vg)        stdHtml += '<p><strong>Verbandsgemeinde:</strong><br>' + escapeHtml(b.vg) + '</p>';
  var ortLine = '';
  if (b.plz)       ortLine = b.plz;
  if (b.ort)       ortLine += (ortLine ? ' ' : '') + b.ort;
  if (b.ortsteil)  ortLine += (ortLine ? ' / ' : '') + b.ortsteil;
  if (ortLine)     stdHtml += '<p><strong>Ort:</strong><br>' + escapeHtml(ortLine) + '</p>';
  if (b.strasse)   stdHtml += '<p><strong>Straße, Hausnummer:</strong><br>' + escapeHtml(b.strasse) + '</p>';
  if (!stdHtml)    stdHtml = leererHinweis('Standort wird derzeit nicht öffentlich angegeben.');
  html += dropdown('Standort', stdHtml, false);

  // 6. WEITERE INFORMATIONEN (immer)
  var weitHtml = '';
  if (b.ansprechpartner) weitHtml += '<p><strong>Ansprechpartner:</strong><br>' + escapeHtml(b.ansprechpartner) + '</p>';
  if (b.email)           weitHtml += '<p><strong>E-Mail-Adresse:</strong><br><a href="mailto:' + escapeHtml(b.email) + '">' + escapeHtml(b.email) + '</a></p>';
  if (b.telefon)         weitHtml += '<p><strong>Telefonnummer:</strong><br><a href="tel:' + escapeHtml(b.telefon.replace(/\s+/g,'')) + '">' + escapeHtml(b.telefon) + '</a></p>';
  if (b.mobil)           weitHtml += '<p><strong>Mobilnummer:</strong><br><a href="tel:' + escapeHtml(b.mobil.replace(/\s+/g,'')) + '">' + escapeHtml(b.mobil) + '</a></p>';
  if (b.fax)             weitHtml += '<p><strong>Fax:</strong><br>' + escapeHtml(b.fax) + '</p>';
  if (b.website)         weitHtml += '<p><strong>Website:</strong><br><a href="' + escapeHtml(b.website) + '" target="_blank" rel="noopener">' + escapeHtml(b.website.replace(/^https?:\/\//,'')) + '</a></p>';
  if (b.sourceUrl)       weitHtml += '<p><a href="' + escapeHtml(b.sourceUrl) + '" target="_blank" rel="noopener">Eintrag bei Wir Westerwälder ↗</a></p>';
  if (!weitHtml)         weitHtml = leererHinweis('Keine zusätzlichen Kontaktdaten hinterlegt.');
  html += dropdown('Weitere Informationen', weitHtml, false);

  html += '</div><div class="spacer"></div>';
  ziel.innerHTML = html;
}


// ════════════════════════════════════════════════════════════════
// E-BIKE INFRASTRUKTUR DETAIL
// ════════════════════════════════════════════════════════════════
function renderEbikeDetail(ziel, item, info, zurueck) {
  var html = '<div class="sticky-detail">'
    + navBar(zurueck, info.breadcrumb)
    + intro(info.titel, '')
    + '<div class="sticky-detail-titel">' + escapeHtml(item.name) + '</div>'
    + '<div class="diff-gpx-row">';
  if (item.ort)  html += '<span class="diff-pill diff-leicht-bg">📍 ' + escapeHtml(item.ort) + '</span>';
  if (item.type) html += '<span class="diff-pill diff-mittel-bg">' + escapeHtml(item.type) + '</span>';
  html += '</div></div>';

  html += '<div class="detail-section">';
  var first = true;

  if (item.address) {
    html += dropdown('Adresse', '<p>' + escapeHtml(item.address) + '</p>', first);
    first = false;
  }
  if (item.type) {
    html += dropdown('Art der Station', '<p>' + escapeHtml(item.type) + '</p>', first);
    first = false;
  }
  if (item.ort && !item.address) {
    html += dropdown('Standort', '<p>' + escapeHtml(item.ort) + '</p>', first);
    first = false;
  }

  if (first) html += '<div class="hinweis">Weitere Details wurden nicht erfasst.</div>';
  html += '</div><div class="spacer"></div>';
  ziel.innerHTML = html;
}
