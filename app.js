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

window.addEventListener('hashchange', router);

// ════════════════════════════════════════════════════════════════
// SPLASH
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
    setTimeout(function() { ov.style.display = 'flex'; }, 3000);
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
function oeffneModal(name) {
  var inhalt = '';
  var titel = '';
  if (name === 'impressum')        { inhalt = window._IMPRESSUM_HTML || ''; titel = 'Impressum'; }
  else if (name === 'datenschutz') { inhalt = window._DATENSCHUTZ_HTML || ''; titel = 'Datenschutzerklärung'; }
  else if (name === 'barrierefreiheit') {
    inhalt = '<h3>Erklärung zur Barrierefreiheit</h3>'
      + '<p>Diese App ist bestrebt, ihre Inhalte für alle Nutzerinnen und Nutzer zugänglich zu gestalten – im Einklang mit den Anforderungen des Behindertengleichstellungsgesetzes (BGG) und der Barrierefreie-Informationstechnik-Verordnung (BITV 2.0).</p>'
      + '<h3>Stand der Vereinbarkeit</h3>'
      + '<p>Diese App wurde fortlaufend für mobile Endgeräte und Bildschirmleser optimiert. Hinweise auf Barrieren werden gerne aufgenommen.</p>'
      + '<h3>Feedback und Kontakt</h3>'
      + '<p>Sind Ihnen Mängel beim barrierefreien Zugang aufgefallen? <a href="mailto:info@wir-westerwaelder.de">info@wir-westerwaelder.de</a></p>';
    titel = 'Erklärung zur Barrierefreiheit';
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
  if (animiert) {
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
      {slug:'wandern',       label:'Wandern',       meta:'5 Wanderregionen', icon:ICONS.wandern},
      {slug:'radfahren',     label:'Radfahren',     meta:'5 Routenarten',     icon:ICONS.fahrrad},
      {slug:'ausflugsziele', label:'Ausflugsziele', meta:'POIs in der Region',icon:ICONS.markierung},
      {slug:'badeseen',      label:'Badeseen',      meta:'Naturbadestellen',  icon:ICONS.welle},
      {slug:'unterkuenfte',  label:'Unterkünfte',   meta:'Hotels & Pensionen',icon:ICONS.haus}
    ]
  },
  'regional': {
    titel:'Regionale Produkte', untertitel:'Direkt vom Erzeuger – aus dem Westerwald.',
    subs:[
      {slug:'hofladen',     label:'Hofläden',     meta:'Direktvermarkter', icon:ICONS.korb},
      {slug:'manufakturen', label:'Manufakturen', meta:'Handwerk & Genuss', icon:ICONS.werkbank},
      {slug:'wochenmarkt',  label:'Wochenmärkte', meta:'Termine & Orte',    icon:ICONS.markt}
    ]
  },
  'kultur': {
    titel:'Kunst & Kultur', untertitel:'Museen, Veranstaltungen und Festivals.',
    subs:[
      {slug:'museen',          label:'Museen',          meta:'Sammlungen & Ausstellungen',  icon:ICONS.krug},
      {slug:'veranstaltungen', label:'Veranstaltungen', meta:'Aktuelle Termine',            icon:ICONS.kalender},
      {slug:'literatur',       label:'Westerwälder Literaturtage', meta:'Programm & Lesungen', icon:ICONS.buch}
    ]
  },
  'mobilitaet': {
    titel:'Mobilität & Verkehr', untertitel:'So bist du in der Region unterwegs.',
    subs:[
      {slug:'bahn-bus',     label:'Bahn & Bus',    meta:'ÖPNV-Verbindungen',       icon:ICONS.bus},
      {slug:'mitfahrbank',  label:'Mitfahrbänke',  meta:'Standorte in der Region', icon:ICONS.markierung},
      {slug:'service',      label:'Service-Infos', meta:'Kontakte & Tipps',        icon:ICONS.info}
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
  var g = filterAnwenden(n);
  var el = document.getElementById('filter-treffer');
  if (el) el.innerHTML = '<strong>' + g.length + '</strong> von <strong>' + n.length + '</strong> Touren angezeigt';
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

  ziel.innerHTML =
    navBar('home', '<strong>' + slug + '</strong>')
    + intro('In Vorbereitung', 'Diese Inhalte werden gerade aufbereitet.')
    + '<div class="hinweis">Diese Seite ist noch in Arbeit.</div>'
    + '<div class="spacer"></div>';
}

// ════════════════════════════════════════════════════════════════
// ETAPPEN-LISTE (mit Sticky-Region + Filter)
// ════════════════════════════════════════════════════════════════
function baueListenInhalt(slug, info, detailTyp) {
  var rohdaten = window[info.name] || [];
  var normiert = rohdaten.map(normalisiere);
  var gefiltert = filterAnwenden(normiert);

  if (!gefiltert.length) {
    return '<div class="hinweis">Keine Touren passen zu deiner Auswahl. Bitte Filter anpassen oder zurücksetzen.</div>';
  }

  return gefiltert.map(function(n) {
    var idx = normiert.indexOf(n);
    var sw = swKlasse(n.schwierigkeit);
    var meta = '';
    if (n.km)      meta += '<span><strong>' + escapeHtml(n.km) + (String(n.km).indexOf('km')<0 ? ' km' : '') + '</strong></span>';
    if (n.dauer)   meta += '<span>⏱ ' + escapeHtml(n.dauer) + '</span>';
    if (n.aufstieg) meta += '<span>↑ ' + escapeHtml(n.aufstieg) + '</span>';
    if (n.schwierigkeit) meta += '<span class="diff-' + sw + '">● ' + escapeHtml(n.schwierigkeit) + '</span>';

    return '<button class="eintrag" onclick="navigateTo(\'detail/' + detailTyp + '/' + slug + '_' + idx + '\')">'
      + '<div class="eintrag-text">'
        + '<div class="eintrag-titel">' + escapeHtml(n.titel) + '</div>'
        + (n.subtitle ? '<div class="eintrag-sub">' + escapeHtml(n.subtitle) + '</div>' : '')
        + (meta ? '<div class="eintrag-meta">' + meta + '</div>' : '')
      + '</div>'
      + '<div class="eintrag-pfeil">&rsaquo;</div>'
    + '</button>';
  }).join('');
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

  // Sticky-Region: navBar + intro + filter-leiste
  // Beim Scrollen bleibt diese gesamte Box oben kleben
  ziel.innerHTML =
    '<div class="sticky-region">'
      + navBar('liste/' + zurueckSlug, info.breadcrumb)
      + intro(info.titel, info.untertitel)
      + '<div id="filter-leiste-wrapper">' + filterUI() + '</div>'
    + '</div>'
    + '<div id="filter-treffer" class="filter-treffer"><strong>' + daten.length + '</strong> Touren angezeigt</div>'
    + '<div class="liste" id="etappen-liste">' + baueListenInhalt(slug, info, detailTyp) + '</div>'
    + '<div class="spacer"></div>';
}

// ════════════════════════════════════════════════════════════════
// DATEN-LISTE (Ausflugsziele etc.)
// ════════════════════════════════════════════════════════════════
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
        + '<div class="eintrag-titel">' + escapeHtml(titel) + '</div>'
        + (meta ? '<div class="eintrag-meta">' + escapeHtml(meta) + '</div>' : '')
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
// DETAIL-SEITE
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

  if (typ === 'wandern' || typ === 'rad')      renderRouteDetail(ziel, item, info, zurueck);
  else if (typ === 'ausfl')                    renderAusflDetail(ziel, item, info, zurueck);
  else if (typ === 'badesee')                  renderBadeseeDetail(ziel, item, info, zurueck);
  else if (typ === 'unterkunft')               renderUnterkunftDetail(ziel, item, info, zurueck);
  else if (typ === 'museum' || typ === 'literatur') renderAusflDetail(ziel, item, info, zurueck);
  else ziel.innerHTML = navBar('home','') + intro('Detail','') + '<pre>' + JSON.stringify(item, null, 2) + '</pre>';
}

// ─── Hilfen ───
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
// ROUTE-DETAIL (einheitlich)
// ════════════════════════════════════════════════════════════════
function renderRouteDetail(ziel, item, info, zurueck) {
  var n = normalisiere(item);
  var sw = swKlasse(n.schwierigkeit);
  var diffBg = sw ? 'diff-' + sw + '-bg' : '';

  var html = navBar(zurueck, info.breadcrumb)
    + intro(info.titel, info.untertitel || '')
    + '<div class="detail-section">'
    + '<h2 class="detail-titel">' + escapeHtml(n.titel) + '</h2>';

  if (n.subtitle) html += '<div class="detail-subtitle">' + escapeHtml(n.subtitle) + '</div>';

  // Schwierigkeit + GPX + Karte
  var topRow = '<div class="diff-gpx-row">';
  if (n.schwierigkeit) topRow += '<span class="diff-pill ' + diffBg + '">' + escapeHtml(n.schwierigkeit) + '</span>';
  if (n.gpxUrl) topRow += '<a class="btn-action btn-gpx" href="' + n.gpxUrl + '" target="_blank" rel="noopener">📥 GPX</a>';
  if (n.tourenplanerUrl) topRow += '<a class="btn-action outline" href="' + n.tourenplanerUrl + '" target="_blank" rel="noopener">🗺️ Karte</a>';
  topRow += '</div>';
  html += topRow;

  // Stats
  var sList = [];
  var addStat = function(label, val) { if (val) sList.push('<div class="stat"><div class="stat-label">' + label + '</div><div class="stat-wert">' + escapeHtml(val) + '</div></div>'); };
  addStat('Distanz', n.km ? (n.km + (String(n.km).indexOf('km')<0 ? ' km' : '')) : '');
  addStat('Dauer', n.dauer);
  addStat('Aufstieg', n.aufstieg);
  addStat('Abstieg', n.abstieg);
  addStat('Höchster Punkt', n.hoechster);
  addStat('Tiefster Punkt', n.tiefster);
  if (sList.length) html += '<div class="stats-grid">' + sList.join('') + '</div>';

  // Wenn SECTIONS-Schema (Druidensteig, Wiedweg)
  if (n.sections && Array.isArray(n.sections)) {
    var firstShown = false;
    n.sections.forEach(function(sec) {
      if (sec.icon === 'profil' || (sec.title || '').toLowerCase().indexOf('profil') >= 0) return;
      html += dropdown(sec.title, sec.html, !firstShown);
      firstShown = true;
    });
  } else {
    // STANDARD-Schema
    if (n.description) {
      var inhalt = '';
      if (typeof n.description === 'object') {
        if (n.description.headline) inhalt += '<p><strong>' + escapeHtml(n.description.headline) + '</strong></p>';
        if (n.description.text)     inhalt += linkifyAndBreak(n.description.text);
      } else inhalt = linkifyAndBreak(n.description);
      html += dropdown('Über die Tour', inhalt, true);
    }
    if (n.routeDescription) {
      var rb = '';
      if (typeof n.routeDescription === 'object') {
        if (n.routeDescription.general) rb += linkifyAndBreak(n.routeDescription.general);
        if (n.routeDescription.accessTrails && n.routeDescription.accessTrails.length) {
          rb += '<p><strong>Zuwege:</strong></p><ul>';
          n.routeDescription.accessTrails.forEach(function(t) { rb += '<li>' + escapeHtml(t) + '</li>'; });
          rb += '</ul>';
        }
        if (n.routeDescription.accessTrailMarking) rb += '<p><strong>Markierung:</strong> ' + escapeHtml(n.routeDescription.accessTrailMarking) + '</p>';
      } else rb = linkifyAndBreak(n.routeDescription);
      html += dropdown('Wegbeschreibung', rb);
    }
    if (n.start || n.destination) {
      var sd = '';
      if (n.start) sd += '<p><strong>Start:</strong> ' + escapeHtml(n.start.name||'')
        + (n.start.address ? '<br>' + escapeHtml(n.start.address) : '') + '</p>';
      if (n.destination) sd += '<p><strong>Ziel:</strong> ' + escapeHtml(n.destination.name||'')
        + (n.destination.address ? '<br>' + escapeHtml(n.destination.address) : '') + '</p>';
      html += dropdown('Start &amp; Ziel', sd);
    }
    var anr = '';
    if (n.directions && n.directions.byCar) anr += '<p><strong>Mit dem Auto:</strong></p>' + linkifyAndBreak(n.directions.byCar);
    if (n.publicTransport) {
      if (typeof n.publicTransport === 'object') {
        if (n.publicTransport.arrival) anr += '<p><strong>Mit Bahn/Bus:</strong></p>' + linkifyAndBreak(n.publicTransport.arrival);
        if (n.publicTransport.returnTrip) anr += '<p><strong>Rückfahrt:</strong></p>' + linkifyAndBreak(n.publicTransport.returnTrip);
      } else anr += '<p><strong>Mit Bahn/Bus:</strong></p>' + linkifyAndBreak(n.publicTransport);
    }
    if (n.parking) {
      if (Array.isArray(n.parking)) {
        anr += '<p><strong>Parken:</strong></p><ul>';
        n.parking.forEach(function(p) {
          anr += '<li><strong>' + escapeHtml(p.location||'') + ':</strong>'
            + (p.free ? ' kostenlos: ' + escapeHtml(p.free) : '')
            + (p.paid ? ' · gebührenpflichtig: ' + escapeHtml(p.paid) : '') + '</li>';
        });
        anr += '</ul>';
      } else anr += '<p><strong>Parken:</strong></p>' + linkifyAndBreak(n.parking);
    }
    if (anr) html += dropdown('Anreise', anr);
    if (n.tips && Array.isArray(n.tips) && n.tips.length) {
      var tInhalt = '<ul>';
      n.tips.forEach(function(t) {
        tInhalt += '<li><strong>' + escapeHtml(t.name||'') + '</strong>'
          + (t.note ? '<br>' + escapeHtml(t.note) : '')
          + (t.url ? '<br><a href="' + t.url + '" target="_blank" rel="noopener">' + t.url + '</a>' : '')
          + '</li>';
      });
      tInhalt += '</ul>';
      html += dropdown('Tipps für unterwegs', tInhalt);
    }
    var sai = '';
    if (n.safetyNotes) sai += '<p><strong>Sicherheit:</strong></p>' + linkifyAndBreak(n.safetyNotes);
    if (n.equipment)   sai += '<p><strong>Ausrüstung:</strong></p>' + linkifyAndBreak(n.equipment);
    if (sai) html += dropdown('Sicherheit &amp; Ausrüstung', sai);
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
  if (item.ort) html += '<div class="diff-gpx-row"><span class="diff-pill diff-leicht-bg">' + escapeHtml(item.ort) + '</span></div>';
  if (item.kurz) html += dropdown('Kurzinfo', txt(item.kurz), true);
  if (item.detail) html += dropdown('Beschreibung', txt(item.detail));
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
