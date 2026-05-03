/* ════════════════════════════════════════════════════════════════
   Westerwald App – Routing + Render-Engine
   ════════════════════════════════════════════════════════════════ */

'use strict';

window.addEventListener('DOMContentLoaded', function() {
  initSplash();
  initCookieGate();

  // Header-Link
  var hdr = document.getElementById('app-header-link');
  if (hdr) hdr.addEventListener('click', function() {
    window.open('https://www.wir-westerwaelder.de', '_blank', 'noopener');
  });

  // Footer-Modals (Impressum, Datenschutz)
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

window.addEventListener('hashchange', router);

// ════════════════════════════════════════════════════════════════
// SPLASH (Eichhörnchen)
// ════════════════════════════════════════════════════════════════
function initSplash() {
  setTimeout(function() {
    var ov = document.getElementById('eichhoernchen-overlay');
    if (ov) ov.style.display = 'none';
  }, 3100);
}

// ════════════════════════════════════════════════════════════════
// COOKIE-GATE
// ════════════════════════════════════════════════════════════════
function initCookieGate() {
  var akz = localStorage.getItem('ww_dsgvo_akzeptiert');
  var ov = document.getElementById('cookie-overlay');
  if (akz === '1') {
    ov.style.display = 'none';
    router();
  } else {
    setTimeout(function() {
      ov.style.display = 'flex';
    }, 3000);  // erst nach Splash
    document.getElementById('cookie-akzeptieren').addEventListener('click', function() {
      localStorage.setItem('ww_dsgvo_akzeptiert', '1');
      ov.style.display = 'none';
      router();
    });
  }
}

// ════════════════════════════════════════════════════════════════
// MODALS
// ════════════════════════════════════════════════════════════════
var MODAL_INHALTE = {
  impressum: '<h3>Impressum</h3>'
    + '<p><strong>Westerwald Touristik-Service</strong><br>'
    + 'Kirchstraße 48a<br>56410 Montabaur</p>'
    + '<p><strong>Telefon:</strong> 02602 / 30 01-0<br>'
    + '<strong>Fax:</strong> 02602 / 94 73 25<br>'
    + '<strong>E-Mail:</strong> <a href="mailto:mail@westerwald.info">mail@westerwald.info</a><br>'
    + '<strong>Web:</strong> <a href="https://www.westerwald.info" target="_blank">www.westerwald.info</a></p>'
    + '<h3>Vertretungsberechtigt</h3>'
    + '<p>Geschäftsführung: Christoph Hoopmann</p>'
    + '<h3>Inhaltlich verantwortlich</h3>'
    + '<p>Westerwald Touristik-Service, Kirchstraße 48a, 56410 Montabaur</p>'
    + '<h3>Haftungshinweis</h3>'
    + '<p>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>',

  datenschutz: '<h3>Datenschutzerklärung</h3>'
    + '<p>Diese App nutzt ausschließlich technisch notwendige Funktionen. Es werden keine Tracking-Cookies oder externe Analysedienste eingesetzt.</p>'
    + '<h3>Lokale Speicherung</h3>'
    + '<p>Im lokalen Speicher (LocalStorage) deines Geräts wird ausschließlich vermerkt, dass du dieser Datenschutzerklärung zugestimmt hast – damit du die Hinweise nicht bei jedem Besuch erneut bestätigen musst.</p>'
    + '<h3>Externe Inhalte</h3>'
    + '<p>Beim Klick auf weiterführende Links (z. B. zum Tourenplaner Rheinland-Pfalz oder zum GPX-Download) wirst du auf externe Seiten geleitet. Für deren Datenverarbeitung sind die jeweiligen Anbieter verantwortlich.</p>'
    + '<h3>Verantwortlich</h3>'
    + '<p>Westerwald Touristik-Service<br>Kirchstraße 48a<br>56410 Montabaur<br><a href="mailto:mail@westerwald.info">mail@westerwald.info</a></p>',

  barrierefreiheit: '<h3>Erklärung zur Barrierefreiheit</h3>'
    + '<p>Diese App ist bestrebt, ihre Inhalte für alle Nutzerinnen und Nutzer zugänglich zu gestalten – im Einklang mit den Anforderungen des Behindertengleichstellungsgesetzes (BGG) und der Barrierefreie-Informationstechnik-Verordnung (BITV 2.0).</p>'
    + '<h3>Stand der Vereinbarkeit</h3>'
    + '<p>Diese App wurde fortlaufend für mobile Endgeräte und Bildschirmleser optimiert. Hinweise auf Barrieren werden gerne aufgenommen.</p>'
    + '<h3>Feedback und Kontakt</h3>'
    + '<p>Sind Ihnen Mängel beim barrierefreien Zugang aufgefallen? <a href="mailto:mail@westerwald.info">mail@westerwald.info</a></p>'
};
function oeffneModal(name) {
  var inhalt = MODAL_INHALTE[name];
  if (!inhalt) return;
  document.getElementById('modal-titel').textContent =
    name === 'impressum' ? 'Impressum'
    : name === 'datenschutz' ? 'Datenschutz'
    : 'Erklärung zur Barrierefreiheit';
  document.getElementById('modal-inhalt').innerHTML = inhalt;
  document.getElementById('modal-overlay').classList.add('aktiv');
  document.body.classList.add('modal-offen');
}
function schliesseModal() {
  document.getElementById('modal-overlay').classList.remove('aktiv');
  document.body.classList.remove('modal-offen');
}

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

  if (teile[0] === 'home' || teile[0] === '') {
    renderHome(ziel);
  } else if (teile[0] === 'kategorie' && teile[1]) {
    renderKategorie(ziel, teile[1]);
  } else if (teile[0] === 'liste' && teile[1]) {
    renderListe(ziel, teile[1]);
  } else if (teile[0] === 'detail' && teile[1] && teile[2]) {
    renderDetail(ziel, teile[1], teile[2]);
  } else {
    renderHome(ziel);
  }
}

function navigateTo(pfad) {
  window.location.hash = pfad;
}

// ════════════════════════════════════════════════════════════════
// LAYOUT-BAUSTEINE
// ════════════════════════════════════════════════════════════════
function intro(gruss, untertitel, animiert) {
  if (animiert) {
    // Untertitel mit gewellter Buchstaben-Animation
    var spans = '';
    for (var i = 0; i < untertitel.length; i++) {
      var c = untertitel.charAt(i);
      spans += '<span style="animation-delay:' + (i * 0.04) + 's">'
        + (c === ' ' ? '&nbsp;' : escapeHtml(c)) + '</span>';
    }
    // <em> Vielfalt </em> erkennen und ersetzen
    var ut = untertitel.replace(/<em>/g, '').replace(/<\/em>/g, '');
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
// KATEGORIE-SEITE
// ════════════════════════════════════════════════════════════════
var KATEGORIEN = {
  'tourismus': {
    titel: 'Tourismus & Freizeit',
    untertitel: 'Wandern, Radfahren, Ausflugsziele und mehr.',
    subs: [
      {slug:'wandern',       label:'Wandern',       meta:'5 Wanderregionen',     icon:ICONS.wandern},
      {slug:'radfahren',     label:'Radfahren',     meta:'5 Routenarten',         icon:ICONS.fahrrad},
      {slug:'ausflugsziele', label:'Ausflugsziele', meta:'POIs in der Region',    icon:ICONS.markierung},
      {slug:'badeseen',      label:'Badeseen',      meta:'Naturbadestellen',      icon:ICONS.welle},
      {slug:'unterkuenfte',  label:'Unterkünfte',   meta:'Hotels & Pensionen',    icon:ICONS.haus}
    ]
  },
  'regional': {
    titel: 'Regionale Produkte',
    untertitel: 'Direkt vom Erzeuger – aus dem Westerwald.',
    subs: [
      {slug:'hofladen',     label:'Hofläden',         meta:'Direktvermarkter',     icon:ICONS.korb},
      {slug:'manufakturen', label:'Manufakturen',     meta:'Handwerk & Genuss',    icon:ICONS.werkbank},
      {slug:'wochenmarkt',  label:'Wochenmärkte',     meta:'Termine & Orte',       icon:ICONS.markt}
    ]
  },
  'kultur': {
    titel: 'Kunst & Kultur',
    untertitel: 'Museen, Veranstaltungen und Festivals.',
    subs: [
      {slug:'museen',          label:'Museen',          meta:'Sammlungen & Ausstellungen',    icon:ICONS.krug},
      {slug:'veranstaltungen', label:'Veranstaltungen', meta:'Aktuelle Termine',              icon:ICONS.kalender},
      {slug:'literatur',       label:'Westerwälder Literaturtage', meta:'Programm & Lesungen', icon:ICONS.buch}
    ]
  },
  'mobilitaet': {
    titel: 'Mobilität & Verkehr',
    untertitel: 'So bist du in der Region unterwegs.',
    subs: [
      {slug:'bahn-bus',     label:'Bahn & Bus',         meta:'ÖPNV-Verbindungen',            icon:ICONS.bus},
      {slug:'mitfahrbank',  label:'Mitfahrbänke',       meta:'Standorte in der Region',      icon:ICONS.markierung},
      {slug:'service',      label:'Service-Infos',      meta:'Kontakte & Tipps',             icon:ICONS.info}
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
    navBar('home', '<strong>' + kat.titel + '</strong>')
    + intro(kat.titel, kat.untertitel)
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
      {label:'Druidensteig',    meta:'Mehrtagestour',           sub:'druidensteig',    icon:ICONS.wandernSimple},
      {label:'Wiedweg',         meta:'Etappentour',             sub:'wiedweg',         icon:ICONS.wandernSimple},
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
      {label:'Rennrad',         meta:'Asphaltierte Strecken', sub:'rennrad',        icon:ICONS.rennrad}
    ]
  },
  'tourismus-ausflugsziele': {datenName:'DATA_AUSFLUGSZIELE', titel:'Ausflugsziele', breadcrumb:'Tourismus &amp; Freizeit › <strong>Ausflugsziele</strong>', zurueck:'kategorie/tourismus', untertitel:'Sehenswertes in der Region.',  detailKey:'ausfl', max:30},
  'tourismus-badeseen':      {datenName:'DATA_BADESEEN_NEU',  titel:'Badeseen',     breadcrumb:'Tourismus &amp; Freizeit › <strong>Badeseen</strong>',     zurueck:'kategorie/tourismus', untertitel:'Erfrischung und Naturerlebnis.', detailKey:'badesee'},
  'tourismus-unterkuenfte':  {datenName:'DATA_UNTERKUENFTE',  titel:'Unterkünfte',  breadcrumb:'Tourismus &amp; Freizeit › <strong>Unterkünfte</strong>',  zurueck:'kategorie/tourismus', untertitel:'Hotels, Pensionen und mehr.',     detailKey:'unterkunft', max:30},
  'kultur-veranstaltungen':  {datenName:'DATA_KULTUR_VERANSTALTUNGEN', titel:'Veranstaltungen', breadcrumb:'Kunst &amp; Kultur › <strong>Veranstaltungen</strong>', zurueck:'kategorie/kultur', untertitel:'Aktuelle Termine.', detailKey:'museum'},
  'kultur-museen':           {datenName:'DATA_KULTUR_MUSEEN', titel:'Museen',       breadcrumb:'Kunst &amp; Kultur › <strong>Museen</strong>',           zurueck:'kategorie/kultur',    untertitel:'Sammlungen und Ausstellungen.',  detailKey:'museum'},
  'kultur-literatur':        {datenName:'DATA_KULTUR_LITERATURTAGE', titel:'Literaturtage', breadcrumb:'Kunst &amp; Kultur › <strong>Literaturtage</strong>', zurueck:'kategorie/kultur', untertitel:'Programm und Lesungen.', detailKey:'literatur'}
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
      navBar(l.zurueck, l.breadcrumb)
      + intro(l.titel, l.untertitel)
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

  // Fallback
  ziel.innerHTML =
    navBar('home', '<strong>' + slug + '</strong>')
    + intro('In Vorbereitung', 'Diese Inhalte werden gerade aufbereitet.')
    + '<div class="hinweis">Diese Seite ist noch in Arbeit.</div>'
    + '<div class="spacer"></div>';
}

function renderEtappenListe(ziel, slug, info, zurueckSlug, detailTyp) {
  var daten = window[info.name];
  if (!daten || !daten.length) {
    ziel.innerHTML =
      navBar('liste/' + zurueckSlug, info.breadcrumb)
      + intro(info.titel, info.untertitel)
      + '<div class="hinweis">Daten noch nicht verfügbar.</div>'
      + '<div class="spacer"></div>';
    return;
  }
  var items = daten.map(function(item, idx) {
    var titel = item.title || item.name || ('Etappe ' + (idx+1));
    var km = item.km || (item.stats && item.stats.distanz) || '';
    var diff = (item.difficulty || (item.stats && item.stats.schwierigkeit) || '').toLowerCase();
    var dauer = (item.stats && (item.stats.duration || item.stats.dauer)) || '';
    var diffClass = diff.indexOf('leicht') >= 0 ? 'diff-leicht'
                  : diff.indexOf('schwer') >= 0 ? 'diff-schwer' : 'diff-mittel';
    var meta = '';
    if (km)    meta += '<span><strong>' + km + (km.indexOf('km')<0 ? ' km' : '') + '</strong></span>';
    if (dauer) meta += '<span>⏱ ' + dauer + '</span>';
    if (diff)  meta += '<span class="' + diffClass + '">● ' + diff.charAt(0).toUpperCase() + diff.slice(1) + '</span>';
    return '<button class="eintrag" onclick="navigateTo(\'detail/' + detailTyp + '/' + slug + '_' + idx + '\')">'
      + '<div class="eintrag-text">'
        + '<div class="eintrag-titel">' + titel + '</div>'
        + (meta ? '<div class="eintrag-meta">' + meta + '</div>' : '')
      + '</div>'
      + '<div class="eintrag-pfeil">&rsaquo;</div>'
    + '</button>';
  }).join('');
  ziel.innerHTML =
    navBar('liste/' + zurueckSlug, info.breadcrumb)
    + intro(info.titel, info.untertitel)
    + '<div class="liste">' + items + '</div>'
    + '<div class="spacer"></div>';
}

function renderDatenListe(ziel, slug, l) {
  var daten = window[l.datenName] || [];
  if (l.max) daten = daten.slice(0, l.max);
  if (!daten.length) {
    ziel.innerHTML =
      navBar(l.zurueck, l.breadcrumb)
      + intro(l.titel, l.untertitel)
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
        + '<div class="eintrag-titel">' + titel + '</div>'
        + (meta ? '<div class="eintrag-meta">' + meta + '</div>' : '')
      + '</div>'
      + '<div class="eintrag-pfeil">&rsaquo;</div>'
    + '</button>';
  }).join('');
  ziel.innerHTML =
    navBar(l.zurueck, l.breadcrumb)
    + intro(l.titel, l.untertitel)
    + (l.max && window[l.datenName] && window[l.datenName].length > l.max ?
       '<div class="hinweis">Es werden ' + l.max + ' von ' + window[l.datenName].length + ' Einträgen angezeigt.</div>' : '')
    + '<div class="liste">' + items + '</div>'
    + '<div class="spacer"></div>';
}

// ════════════════════════════════════════════════════════════════
// DETAIL
// ════════════════════════════════════════════════════════════════
function renderDetail(ziel, typ, schluessel) {
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

  if (typ === 'wandern' || typ === 'rad') {
    renderRouteDetail(ziel, item, info, zurueck, typ);
  } else if (typ === 'ausfl') {
    renderAusflDetail(ziel, item, info, zurueck);
  } else if (typ === 'badesee') {
    renderBadeseeDetail(ziel, item, info, zurueck);
  } else if (typ === 'unterkunft') {
    renderUnterkunftDetail(ziel, item, info, zurueck);
  } else if (typ === 'museum' || typ === 'literatur') {
    renderAusflDetail(ziel, item, info, zurueck);
  } else {
    ziel.innerHTML = navBar('home','') + intro('Detail','') + '<pre>' + JSON.stringify(item, null, 2) + '</pre>';
  }
}

// ── Hilfen ──
function escapeHtml(s) {
  if (s == null) return '';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function linkifyAndBreak(s) {
  if (!s) return '';
  var html = escapeHtml(s);
  html = html.replace(/(https?:\/\/[^\s)]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
  html = html.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>');
  return '<p>' + html + '</p>';
}
function txt(s) { return linkifyAndBreak(s); }

// Dropdown-Block
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

// GPX-URL aus Tourenplaner-URL ableiten (für Radwege)
function gpxAusTourenplaner(url) {
  if (!url) return null;
  var m = url.match(/tour\/(\d+)/);
  if (!m) return null;
  return 'https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=' + m[1] + '&project=oar-rlp';
}

// === Routen-Detail (Wandern + Rad) ===
function renderRouteDetail(ziel, item, info, zurueck, typ) {
  // GPX-URL ermitteln
  var gpxUrl = item.gpxUrl || gpxAusTourenplaner(item.tourenplaner || item.tourenplanerUrl);

  // Schwierigkeit
  var diffRaw = item.difficulty || (item.stats && item.stats.schwierigkeit) || '';
  var diff = diffRaw.toLowerCase();
  var diffBgClass = diff.indexOf('leicht') >= 0 ? 'diff-leicht-bg'
                  : diff.indexOf('schwer') >= 0 ? 'diff-schwer-bg' : 'diff-mittel-bg';

  // HTML-Aufbau
  var html = navBar(zurueck, info.breadcrumb)
    + intro(info.titel, info.untertitel || '')
    + '<div class="detail-section">'
    + '<h2 class="detail-titel">' + escapeHtml(item.title || item.name) + '</h2>';

  // Schwierigkeit + GPX-Button nebeneinander
  var topRow = '<div class="diff-gpx-row">';
  if (diffRaw) topRow += '<span class="diff-pill ' + diffBgClass + '">' + escapeHtml(diffRaw) + '</span>';
  if (gpxUrl) topRow += '<a class="btn-action btn-gpx" href="' + gpxUrl + '" target="_blank" rel="noopener">📥 GPX-Datei</a>';
  if (item.tourenplanerUrl || item.tourenplaner) {
    topRow += '<a class="btn-action outline" href="' + (item.tourenplanerUrl || item.tourenplaner) + '" target="_blank" rel="noopener">🗺️ Karte</a>';
  }
  topRow += '</div>';
  html += topRow;

  // Stats
  var stats = item.stats || {};
  var sList = [];
  var addStat = function(label, val) { if (val) sList.push('<div class="stat"><div class="stat-label">' + label + '</div><div class="stat-wert">' + val + '</div></div>'); };
  addStat('Distanz', item.km ? (item.km + (item.km.indexOf('km')<0 ? ' km' : '')) : (stats.distanz));
  addStat('Dauer', stats.duration || stats.dauer);
  addStat('Aufstieg', stats.ascent || stats.aufstieg);
  addStat('Abstieg', stats.descent || stats.abstieg);
  addStat('Höchster Punkt', stats.highPoint || stats.hoechsterPunkt);
  addStat('Tiefster Punkt', stats.lowPoint || stats.tiefsterPunkt);
  if (sList.length) html += '<div class="stats-grid">' + sList.join('') + '</div>';

  // Dropdowns
  // 1. Über die Tour
  if (item.description) {
    var inhalt = '';
    if (typeof item.description === 'object') {
      if (item.description.headline) inhalt += '<p><strong>' + escapeHtml(item.description.headline) + '</strong></p>';
      if (item.description.text) inhalt += linkifyAndBreak(item.description.text);
    } else {
      inhalt = linkifyAndBreak(item.description);
    }
    html += dropdown('Über die Tour', inhalt, true);  // erste Box offen
  }

  // 2. Wegbeschreibung
  if (item.routeDescription) {
    var rb = '';
    if (typeof item.routeDescription === 'object') {
      if (item.routeDescription.general) rb += linkifyAndBreak(item.routeDescription.general);
      if (item.routeDescription.accessTrails && item.routeDescription.accessTrails.length) {
        rb += '<p><strong>Zuwege:</strong></p><ul>';
        item.routeDescription.accessTrails.forEach(function(t) { rb += '<li>' + escapeHtml(t) + '</li>'; });
        rb += '</ul>';
      }
      if (item.routeDescription.accessTrailMarking) rb += '<p><strong>Markierung:</strong> ' + escapeHtml(item.routeDescription.accessTrailMarking) + '</p>';
    } else {
      rb = linkifyAndBreak(item.routeDescription);
    }
    html += dropdown('Wegbeschreibung', rb);
  }

  // 3. Start & Ziel
  if (item.start || item.destination) {
    var sd = '';
    if (item.start) sd += '<p><strong>Start:</strong> ' + escapeHtml(item.start.name)
      + (item.start.address ? '<br>' + escapeHtml(item.start.address) : '')
      + (item.start.coordinates ? '<br>' + escapeHtml(item.start.coordinates) : '') + '</p>';
    if (item.destination) sd += '<p><strong>Ziel:</strong> ' + escapeHtml(item.destination.name)
      + (item.destination.address ? '<br>' + escapeHtml(item.destination.address) : '')
      + (item.destination.coordinates ? '<br>' + escapeHtml(item.destination.coordinates) : '') + '</p>';
    html += dropdown('Start &amp; Ziel', sd);
  }

  // 4. Anreise
  var anreiseInhalt = '';
  if (item.directions && item.directions.byCar)
    anreiseInhalt += '<p><strong>Mit dem Auto:</strong></p>' + linkifyAndBreak(item.directions.byCar);
  if (item.publicTransport) {
    if (typeof item.publicTransport === 'object') {
      if (item.publicTransport.arrival)
        anreiseInhalt += '<p><strong>Mit Bahn/Bus:</strong></p>' + linkifyAndBreak(item.publicTransport.arrival);
      if (item.publicTransport.returnTrip)
        anreiseInhalt += '<p><strong>Rückfahrt:</strong></p>' + linkifyAndBreak(item.publicTransport.returnTrip);
      if (item.publicTransport.taxis && item.publicTransport.taxis.length) {
        anreiseInhalt += '<p><strong>Taxis:</strong></p><ul>';
        item.publicTransport.taxis.forEach(function(t) { anreiseInhalt += '<li>' + escapeHtml(t) + '</li>'; });
        anreiseInhalt += '</ul>';
      }
    } else {
      anreiseInhalt += '<p><strong>Mit Bahn/Bus:</strong></p>' + linkifyAndBreak(item.publicTransport);
    }
  }
  if (item.parking) {
    if (Array.isArray(item.parking)) {
      anreiseInhalt += '<p><strong>Parken:</strong></p><ul>';
      item.parking.forEach(function(p) {
        anreiseInhalt += '<li><strong>' + escapeHtml(p.location) + ':</strong>'
          + (p.free ? ' kostenlos: ' + escapeHtml(p.free) : '')
          + (p.paid ? ' · gebührenpflichtig: ' + escapeHtml(p.paid) : '') + '</li>';
      });
      anreiseInhalt += '</ul>';
    } else {
      anreiseInhalt += '<p><strong>Parken:</strong></p>' + linkifyAndBreak(item.parking);
    }
  }
  html += dropdown('Anreise', anreiseInhalt);

  // 5. Tipps für unterwegs
  if (item.tips && Array.isArray(item.tips) && item.tips.length) {
    var tInhalt = '<ul>';
    item.tips.forEach(function(t) {
      tInhalt += '<li><strong>' + escapeHtml(t.name) + '</strong>'
        + (t.note ? '<br>' + escapeHtml(t.note) : '')
        + (t.url ? '<br><a href="' + t.url + '" target="_blank" rel="noopener">' + t.url + '</a>' : '')
        + '</li>';
    });
    tInhalt += '</ul>';
    html += dropdown('Tipps für unterwegs', tInhalt);
  }

  // 6. Sicherheit & Ausrüstung
  var saiInhalt = '';
  if (item.safetyNotes) saiInhalt += '<p><strong>Sicherheit:</strong></p>' + linkifyAndBreak(item.safetyNotes);
  if (item.equipment)   saiInhalt += '<p><strong>Ausrüstung:</strong></p>' + linkifyAndBreak(item.equipment);
  if (saiInhalt) html += dropdown('Sicherheit &amp; Ausrüstung', saiInhalt);

  html += '</div><div class="spacer"></div>';
  ziel.innerHTML = html;
}

// === Ausflugsziel ===
function renderAusflDetail(ziel, item, info, zurueck) {
  var html = navBar(zurueck, info.breadcrumb)
    + intro(info.titel || 'Detail', '')
    + '<div class="detail-section">'
    + '<h2 class="detail-titel">' + escapeHtml(item.name) + '</h2>';

  // Top-Tags (Ort + Thema)
  var tagRow = '<div class="diff-gpx-row">';
  if (item.mainTopic || item.topic) tagRow += '<span class="diff-pill">' + escapeHtml(item.mainTopic || item.topic) + '</span>';
  if (item.town) tagRow += '<span class="diff-pill diff-leicht-bg">' + escapeHtml(item.town) + '</span>';
  tagRow += '</div>';
  html += tagRow;

  // Beschreibung als Dropdown
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
  if (item.ort) html += '<div class="diff-gpx-row"><span class="diff-pill diff-leicht-bg">' + escapeHtml(item.ort) + '</span></div>';
  if (item.kurz) html += dropdown('Kurzinfo', txt(item.kurz), true);
  if (item.detail) html += dropdown('Beschreibung', txt(item.detail));

  // Kontakt-Block
  var kontakt = '';
  if (item.strasse) kontakt += escapeHtml(item.strasse) + '<br>';
  if (item.plz)     kontakt += escapeHtml(item.plz) + '<br>';
  if (item.tel)     kontakt += '<strong>Telefon:</strong> ' + escapeHtml(item.tel) + '<br>';
  if (item.mail)    kontakt += '<strong>E-Mail:</strong> <a href="mailto:' + item.mail + '">' + item.mail + '</a><br>';
  if (item.links && item.links.length) {
    item.links.forEach(function(l) {
      kontakt += '<strong>Web:</strong> <a href="' + l + '" target="_blank" rel="noopener">' + l + '</a><br>';
    });
  }
  if (kontakt) html += dropdown('Kontakt', '<p>' + kontakt + '</p>');

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
