/* ════════════════════════════════════════════════════════════════
   Westerwald App – Routing + Render-Engine
   ════════════════════════════════════════════════════════════════ */

'use strict';

// ── Globale Datenregister – wird von den Daten-JS-Dateien gefüllt ──
var DATEN = {};
function _reg(name, value) { DATEN[name] = value; }

// Vor Datendateien: Wrapper, der das DATA_… in DATEN ablegt
window.addEventListener('DOMContentLoaded', function() {
  // Sammle alle DATA_… globalen Variablen ein
  for (var k in window) {
    if (k.indexOf('DATA_') === 0 && Array.isArray(window[k])) {
      DATEN[k] = window[k];
    }
  }
  console.log('Daten geladen:', Object.keys(DATEN));
  router();
});

window.addEventListener('hashchange', router);

// ════════════════════════════════════════════════════════════════
// ROUTER
// ════════════════════════════════════════════════════════════════
function router() {
  var hash = window.location.hash.slice(1) || 'home';
  var teile = hash.split('/');
  var ziel = document.getElementById('content');
  ziel.innerHTML = '';
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
// LAYOUT-BAUSTEINE (überall identisch)
// ════════════════════════════════════════════════════════════════
function intro(gruss, untertitel) {
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
    intro('Hui Wäller? Allemol!', 'Entdecke die <em>Vielfalt</em> des Westerwaldes.')
    + window._WASSERZEICHEN
    + '<nav class="kategorien">'
      + kachel('tourismus', 'Tourismus<br>&amp; Freizeit', ICONS.berge)
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
// KATEGORIE-SEITE (Subkategorien)
// ════════════════════════════════════════════════════════════════
var KATEGORIEN = {
  'tourismus': {
    titel: 'Tourismus & Freizeit',
    gruss: 'Tourismus & Freizeit',
    untertitel: 'Wandern, Radfahren, Ausflugsziele und mehr.',
    subs: [
      {slug: 'wandern',       label: 'Wandern',           meta: '5 Wanderregionen', icon: ICONS.berge},
      {slug: 'radfahren',     label: 'Radfahren',         meta: '5 Routenarten',    icon: ICONS.fahrrad},
      {slug: 'ausflugsziele', label: 'Ausflugsziele',     meta: 'POIs in der Region', icon: ICONS.markierung},
      {slug: 'badeseen',      label: 'Badeseen',          meta: 'Naturbadestellen', icon: ICONS.welle},
      {slug: 'unterkuenfte',  label: 'Unterkünfte',       meta: 'Hotels & Pensionen', icon: ICONS.haus}
    ]
  },
  'regional': {
    titel: 'Regionale Produkte',
    gruss: 'Regionale Produkte',
    untertitel: 'Direkt vom Erzeuger – aus dem Westerwald.',
    subs: [
      {slug: 'hofladen',     label: 'Hofläden',           meta: 'Direktvermarkter', icon: ICONS.korb},
      {slug: 'manufakturen', label: 'Manufakturen',       meta: 'Handwerk & Genuss', icon: ICONS.werkbank},
      {slug: 'wochenmarkt',  label: 'Wochenmärkte',       meta: 'Termine & Orte', icon: ICONS.markt}
    ]
  },
  'kultur': {
    titel: 'Kunst & Kultur',
    gruss: 'Kunst & Kultur',
    untertitel: 'Museen, Veranstaltungen und Festivals.',
    subs: [
      {slug: 'museen',         label: 'Museen',           meta: 'Sammlungen & Ausstellungen', icon: ICONS.krug},
      {slug: 'veranstaltungen',label: 'Veranstaltungen',  meta: 'Aktuelle Termine',           icon: ICONS.kalender},
      {slug: 'literatur',      label: 'Westerwälder Literaturtage', meta: 'Programm & Lesungen', icon: ICONS.buch}
    ]
  },
  'mobilitaet': {
    titel: 'Mobilität & Verkehr',
    gruss: 'Mobilität & Verkehr',
    untertitel: 'So bist du in der Region unterwegs.',
    subs: [
      {slug: 'bahn-bus',     label: 'Bahn & Bus',         meta: 'ÖPNV-Verbindungen', icon: ICONS.bus},
      {slug: 'mitfahrbank',  label: 'Mitfahrbänke',       meta: 'Standorte in der Region', icon: ICONS.markierung},
      {slug: 'service',      label: 'Service-Infos',      meta: 'Kontakte & Tipps', icon: ICONS.info}
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
    + intro(kat.gruss, kat.untertitel)
    + '<nav class="subkategorien">' + subsHTML + '</nav>'
    + '<div class="spacer"></div>';
}

// ════════════════════════════════════════════════════════════════
// LISTEN-SEITE (Routen, Ausflugsziele, etc.)
// ════════════════════════════════════════════════════════════════
var LISTEN = {
  // Wandern
  'tourismus-wandern': {
    titel: 'Wandern',
    breadcrumb: 'Tourismus &amp; Freizeit › <strong>Wandern</strong>',
    zurueck: 'kategorie/tourismus',
    gruss: 'Wandern',
    untertitel: 'Die schönsten Touren des Westerwaldes.',
    typ: 'unterkategorie',
    items: [
      {label:'WesterwaldSteig', meta:'16 Etappen, ca. 235 km', sub:'westerwaldsteig'},
      {label:'Druidensteig',    meta:'Mehrtagestour',           sub:'druidensteig'},
      {label:'Wiedweg',         meta:'Etappentour',             sub:'wiedweg'},
      {label:'Wäller Touren',   meta:'Tageswanderungen',         sub:'waeller-touren'},
      {label:'Kleine Wäller',   meta:'Kurze Rundtouren',         sub:'kleine-waeller'}
    ]
  },
  'tourismus-radfahren': {
    titel: 'Radfahren',
    breadcrumb: 'Tourismus &amp; Freizeit › <strong>Radfahren</strong>',
    zurueck: 'kategorie/tourismus',
    gruss: 'Radfahren',
    untertitel: 'Routen für jeden Anspruch.',
    typ: 'unterkategorie',
    items: [
      {label:'Rundradwege',     meta:'Tagestouren', sub:'rundradwege'},
      {label:'Streckenradwege', meta:'Mehrtagestouren', sub:'streckenradwege'},
      {label:'Gravelbike',      meta:'Schotterstrecken', sub:'gravelbike'},
      {label:'Mountainbike',    meta:'Trails & Singletracks', sub:'mountainbike'},
      {label:'Rennrad',         meta:'Asphaltierte Strecken', sub:'rennrad'}
    ]
  },
  // Direkt-Listen
  'tourismus-ausflugsziele': {datenName:'DATA_AUSFLUGSZIELE', titel:'Ausflugsziele', breadcrumb:'Tourismus &amp; Freizeit › <strong>Ausflugsziele</strong>', zurueck:'kategorie/tourismus', gruss:'Ausflugsziele', untertitel:'Sehenswertes in der Region.', detailKey:'ausfl', max:30},
  'tourismus-badeseen':      {datenName:'DATA_BADESEEN_NEU',  titel:'Badeseen',     breadcrumb:'Tourismus &amp; Freizeit › <strong>Badeseen</strong>',     zurueck:'kategorie/tourismus', gruss:'Badeseen',     untertitel:'Erfrischung und Naturerlebnis.',  detailKey:'badesee'},
  'tourismus-unterkuenfte':  {datenName:'DATA_UNTERKUENFTE',  titel:'Unterkünfte',  breadcrumb:'Tourismus &amp; Freizeit › <strong>Unterkünfte</strong>',  zurueck:'kategorie/tourismus', gruss:'Unterkünfte',  untertitel:'Hotels, Pensionen und mehr.',     detailKey:'unterkunft', max:30},
  'kultur-veranstaltungen':  {datenName:'DATA_KULTUR_VERANSTALTUNGEN', titel:'Veranstaltungen', breadcrumb:'Kunst &amp; Kultur › <strong>Veranstaltungen</strong>', zurueck:'kategorie/kultur', gruss:'Veranstaltungen', untertitel:'Aktuelle Termine.', detailKey:'museum'},
  'kultur-museen':           {datenName:'DATA_KULTUR_MUSEEN',        titel:'Museen',       breadcrumb:'Kunst &amp; Kultur › <strong>Museen</strong>',           zurueck:'kategorie/kultur',    gruss:'Museen',       untertitel:'Sammlungen und Ausstellungen.',   detailKey:'museum'},
  'kultur-literatur':        {datenName:'DATA_KULTUR_LITERATURTAGE', titel:'Literaturtage', breadcrumb:'Kunst &amp; Kultur › <strong>Literaturtage</strong>', zurueck:'kategorie/kultur', gruss:'Westerwälder Literaturtage', untertitel:'Programm und Lesungen.', detailKey:'literatur'}
};

// Mapping Wandern-Sub → Datenname
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
  // 1. Spezialfall: Unterkategorien-Liste (z.B. "tourismus-wandern" → 5 Steige)
  if (LISTEN[slug] && LISTEN[slug].typ === 'unterkategorie') {
    var l = LISTEN[slug];
    var items = l.items.map(function(it) {
      return '<button class="subkat" onclick="navigateTo(\'liste/' + slug.split('-')[0] + '-' + slug.split('-')[1] + '-' + it.sub + '\')">'
        + '<div class="subkat-icon">' + ICONS.berge + '</div>'
        + '<div class="subkat-text">'
          + '<div class="subkat-label">' + it.label + '</div>'
          + '<div class="subkat-meta">' + it.meta + '</div>'
        + '</div>'
        + '<div class="subkat-pfeil">&rsaquo;</div>'
      + '</button>';
    }).join('');

    ziel.innerHTML =
      navBar(l.zurueck, l.breadcrumb)
      + intro(l.gruss, l.untertitel)
      + '<nav class="subkategorien">' + items + '</nav>'
      + '<div class="spacer"></div>';
    return;
  }

  // 2. Spezialfall: Wander-Region (z.B. "tourismus-wandern-westerwaldsteig")
  var teile = slug.split('-');
  if (teile[0] === 'tourismus' && teile[1] === 'wandern' && teile[2]) {
    var subSlug = teile.slice(2).join('-');
    var info = WANDER_DATEN[subSlug];
    if (info) {
      renderEtappenListe(ziel, slug, info, 'tourismus-wandern', 'wandern');
      return;
    }
  }
  if (teile[0] === 'tourismus' && teile[1] === 'radfahren' && teile[2]) {
    var subSlug = teile.slice(2).join('-');
    var info = RAD_DATEN[subSlug];
    if (info) {
      renderEtappenListe(ziel, slug, info, 'tourismus-radfahren', 'rad');
      return;
    }
  }

  // 3. Direkt-Liste (z.B. ausflugsziele, badeseen …)
  if (LISTEN[slug]) {
    var l = LISTEN[slug];
    renderDatenListe(ziel, slug, l);
    return;
  }

  // 4. Fallback: Platzhalter
  ziel.innerHTML =
    navBar('home', '<strong>' + slug + '</strong>')
    + intro('In Vorbereitung', 'Diese Inhalte werden gerade aufbereitet.')
    + '<div class="hinweis">Diese Seite ist noch in Arbeit. Bitte schau später wieder vorbei.</div>'
    + '<div class="spacer"></div>';
}

// Etappen-Liste (Wandern + Rad)
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

// Daten-Liste (Ausflugsziele etc.)
function renderDatenListe(ziel, slug, l) {
  var daten = window[l.datenName] || [];
  if (l.max) daten = daten.slice(0, l.max);
  if (!daten.length) {
    ziel.innerHTML =
      navBar(l.zurueck, l.breadcrumb)
      + intro(l.gruss, l.untertitel)
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
    + intro(l.gruss, l.untertitel)
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
    var subSlug = listeSlug.split('-').slice(2).join('-');
    info = WANDER_DATEN[subSlug];
    daten = info && window[info.name];
    zurueck = 'liste/' + listeSlug;
  } else if (typ === 'rad') {
    var subSlug = listeSlug.split('-').slice(2).join('-');
    info = RAD_DATEN[subSlug];
    daten = info && window[info.name];
    zurueck = 'liste/' + listeSlug;
  } else {
    var ll = LISTEN[listeSlug];
    if (ll) {
      info = {breadcrumb: ll.breadcrumb, titel: ll.titel};
      daten = window[ll.datenName];
      zurueck = 'liste/' + listeSlug;
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
  } else if (typ === 'museum') {
    renderMuseumDetail(ziel, item, info, zurueck);
  } else if (typ === 'literatur') {
    renderLiteraturDetail(ziel, item, info, zurueck);
  } else {
    ziel.innerHTML = navBar('home','') + intro('Detail','') + '<pre>' + JSON.stringify(item, null, 2) + '</pre>';
  }
}

// === Hilfen ===
function block(titel, html) { return '<div class="detail-block"><div class="detail-block-titel">' + titel + '</div>' + html + '</div>'; }
function txt(s) { if (!s) return ''; return '<div class="detail-block-text">' + escapeHtml(s) + '</div>'; }
function escapeHtml(s) {
  if (s == null) return '';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function linkHtml(s) {
  if (!s) return '';
  // einfache URL-Erkennung
  return escapeHtml(s).replace(/(https?:\/\/[^\s)]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
}
function aktion(label, url, outline) {
  return '<a class="btn-action' + (outline ? ' outline' : '') + '" href="' + url + '" target="_blank" rel="noopener">' + label + '</a>';
}

// === Routen-Detail (Wandern + Rad) ===
function renderRouteDetail(ziel, item, info, zurueck, typ) {
  var html = navBar(zurueck, info.breadcrumb)
    + intro(info.titel, info.untertitel || '')
    + '<div class="detail-section">'
    + '<h2 class="detail-titel">' + escapeHtml(item.title || item.name) + '</h2>';

  // Tags
  var tagList = [];
  if (item.difficulty) tagList.push('<span class="tag gruen">' + item.difficulty + '</span>');
  else if (item.stats && item.stats.schwierigkeit) tagList.push('<span class="tag gruen">' + item.stats.schwierigkeit + '</span>');
  if (item.tags) item.tags.split(',').forEach(function(t) { tagList.push('<span class="tag">' + t.trim() + '</span>'); });
  if (item.subtitle) tagList.unshift('<span class="tag">' + item.subtitle + '</span>');
  if (tagList.length) html += '<div class="detail-tags">' + tagList.join('') + '</div>';

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

  // Beschreibung
  if (item.description) {
    var desc = typeof item.description === 'string' ? item.description : item.description.text;
    var head = item.description.headline;
    if (head) html += '<div class="detail-block"><div class="detail-block-titel">Über die Tour</div>'
      + '<p style="font-style:italic;color:var(--dunkelgruen);font-weight:600;margin-bottom:8px">' + escapeHtml(head) + '</p>'
      + '<div class="detail-block-text">' + escapeHtml(desc).replace(/\n\n/g,'</p><p>').replace(/\n/g,'<br>') + '</div></div>';
    else html += block('Über die Tour', '<div class="detail-block-text">' + escapeHtml(desc).replace(/\n\n/g,'</p><p>').replace(/\n/g,'<br>') + '</div>');
  }

  // Wegbeschreibung
  if (item.routeDescription && item.routeDescription.general) {
    html += block('Wegbeschreibung', '<div class="detail-block-text">' + escapeHtml(item.routeDescription.general).replace(/\n\n/g,'</p><p>').replace(/\n/g,'<br>') + '</div>');
  }

  // Start / Ziel
  if (item.start || item.destination) {
    var sd = '';
    if (item.start) sd += '<strong>Start:</strong> ' + escapeHtml(item.start.name) + (item.start.address ? '<br><span style="color:var(--grau-md)">' + escapeHtml(item.start.address) + '</span>' : '') + '<br><br>';
    if (item.destination) sd += '<strong>Ziel:</strong> ' + escapeHtml(item.destination.name) + (item.destination.address ? '<br><span style="color:var(--grau-md)">' + escapeHtml(item.destination.address) + '</span>' : '');
    html += block('Start &amp; Ziel', '<div class="detail-block-text">' + sd + '</div>');
  }

  // Anreise
  if (item.directions || item.publicTransport) {
    var ar = '';
    if (item.directions && item.directions.byCar) ar += '<strong>Mit dem Auto:</strong><br>' + escapeHtml(item.directions.byCar).replace(/\n/g,'<br>') + '<br><br>';
    if (item.publicTransport && item.publicTransport.arrival) ar += '<strong>Mit Bahn/Bus:</strong><br>' + escapeHtml(item.publicTransport.arrival).replace(/\n/g,'<br>');
    if (ar) html += block('Anreise', '<div class="detail-block-text">' + ar + '</div>');
  } else if (typeof item.publicTransport === 'string') {
    html += block('Anreise', '<div class="detail-block-text">' + linkHtml(item.publicTransport).replace(/\n/g,'<br>') + '</div>');
  }

  // Tipps
  if (item.tips && Array.isArray(item.tips) && item.tips.length) {
    var tList = '<ul class="detail-list">';
    item.tips.forEach(function(t) {
      tList += '<li><strong>' + escapeHtml(t.name) + '</strong>'
        + (t.note ? '<br><span style="color:var(--grau-md);font-size:13px">' + escapeHtml(t.note) + '</span>' : '')
        + (t.url ? '<br><a href="' + t.url + '" target="_blank" rel="noopener" style="font-size:12px">Mehr erfahren ↗</a>' : '')
        + '</li>';
    });
    tList += '</ul>';
    html += block('Tipps unterwegs', tList);
  }

  // Aktionen
  var aks = [];
  if (item.gpxUrl) aks.push(aktion('GPX herunterladen', item.gpxUrl));
  if (item.tourenplanerUrl) aks.push(aktion('Tour auf Karte', item.tourenplanerUrl, true));
  if (item.sourceUrl) aks.push(aktion('Auf westerwald.info', item.sourceUrl, true));
  if (aks.length) html += '<div class="detail-aktionen">' + aks.join('') + '</div>';

  html += '</div><div class="spacer"></div>';
  ziel.innerHTML = html;
}

// === Ausflugsziel-Detail ===
function renderAusflDetail(ziel, item, info, zurueck) {
  var html = navBar(zurueck, info.breadcrumb)
    + intro('Ausflugsziel', '<em>' + escapeHtml(item.town || item.region || 'Westerwald') + '</em>')
    + '<div class="detail-section">'
    + '<h2 class="detail-titel">' + escapeHtml(item.name) + '</h2>';
  var tags = [];
  if (item.mainTopic || item.topic) tags.push('<span class="tag gruen">' + escapeHtml(item.mainTopic || item.topic) + '</span>');
  if (item.region) tags.push('<span class="tag">' + escapeHtml(item.region) + '</span>');
  if (item.town) tags.push('<span class="tag">' + escapeHtml(item.town) + '</span>');
  if (tags.length) html += '<div class="detail-tags">' + tags.join('') + '</div>';
  if (item.description || item.desc) html += block('Beschreibung', txt(item.description || item.desc));
  var aks = [];
  if (item.sourceUrl) aks.push(aktion('Auf westerwald.info', item.sourceUrl));
  if (item.url)       aks.push(aktion('Mehr erfahren', item.url, true));
  if (aks.length) html += '<div class="detail-aktionen">' + aks.join('') + '</div>';
  html += '</div><div class="spacer"></div>';
  ziel.innerHTML = html;
}

// === Badesee-Detail ===
function renderBadeseeDetail(ziel, item, info, zurueck) {
  var html = navBar(zurueck, info.breadcrumb)
    + intro('Badesee', '<em>' + escapeHtml(item.ort || 'Westerwald') + '</em>')
    + '<div class="detail-section">'
    + '<h2 class="detail-titel">' + escapeHtml(item.name) + '</h2>';
  if (item.ort)   html += '<div class="detail-tags"><span class="tag gruen">' + escapeHtml(item.ort) + '</span></div>';
  if (item.kurz)  html += block('Kurzinfo', txt(item.kurz));
  if (item.detail) html += block('Beschreibung', txt(item.detail));
  var kontakt = '';
  if (item.strasse) kontakt += escapeHtml(item.strasse) + '<br>';
  if (item.plz)     kontakt += escapeHtml(item.plz) + '<br>';
  if (item.tel)     kontakt += '<strong>Tel.:</strong> ' + escapeHtml(item.tel) + '<br>';
  if (item.mail)    kontakt += '<strong>Mail:</strong> <a href="mailto:' + item.mail + '">' + item.mail + '</a><br>';
  if (kontakt) html += block('Kontakt', '<div class="detail-block-text">' + kontakt + '</div>');
  var aks = [];
  if (item.sourceUrl) aks.push(aktion('Auf westerwald.info', item.sourceUrl));
  if (item.links) item.links.forEach(function(l) { aks.push(aktion('Webseite besuchen', l, true)); });
  if (aks.length) html += '<div class="detail-aktionen">' + aks.join('') + '</div>';
  html += '</div><div class="spacer"></div>';
  ziel.innerHTML = html;
}

// === Unterkunft-Detail ===
function renderUnterkunftDetail(ziel, item, info, zurueck) {
  var html = navBar(zurueck, info.breadcrumb)
    + intro('Unterkunft', '<em>' + escapeHtml(item.town || item.region || 'Westerwald') + '</em>')
    + '<div class="detail-section">'
    + '<h2 class="detail-titel">' + escapeHtml(item.name) + '</h2>';
  if (item.categories && item.categories.length) {
    html += '<div class="detail-tags">' + item.categories.map(function(c) { return '<span class="tag gruen">' + escapeHtml(c) + '</span>'; }).join('') + '</div>';
  }
  if (item.description) html += block('Beschreibung', txt(item.description));
  if (item.features && item.features.length) {
    html += block('Ausstattung', '<ul class="detail-list">' + item.features.map(function(f) { return '<li>' + escapeHtml(f) + '</li>'; }).join('') + '</ul>');
  }
  if (item.contact && (item.contact.phone || item.contact.email || item.contact.url)) {
    var k = '';
    if (item.contact.phone) k += '<strong>Tel.:</strong> ' + escapeHtml(item.contact.phone) + '<br>';
    if (item.contact.email) k += '<strong>Mail:</strong> <a href="mailto:' + item.contact.email + '">' + item.contact.email + '</a><br>';
    if (item.contact.url)   k += '<strong>Web:</strong> <a href="' + item.contact.url + '" target="_blank">' + item.contact.url + '</a>';
    html += block('Kontakt', '<div class="detail-block-text">' + k + '</div>');
  }
  if (!item.description && (!item.features || !item.features.length)) {
    html += '<div class="hinweis">Detail-Daten zu dieser Unterkunft werden noch befüllt.</div>';
  }
  html += '</div><div class="spacer"></div>';
  ziel.innerHTML = html;
}

function renderMuseumDetail(ziel, item, info, zurueck) {
  renderAusflDetail(ziel, item, info, zurueck);
}
function renderLiteraturDetail(ziel, item, info, zurueck) {
  renderAusflDetail(ziel, item, info, zurueck);
}
