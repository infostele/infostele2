/* SVG-Icons für die App – konsistenter Stroke-Stil */
var ICONS = {

  // ── HAUPT-KATEGORIEN ──────────────────────────────────────

  /* Tourismus & Freizeit – zwei Wanderer mit Rucksack + Wanderstock */
  wanderer2: '<svg viewBox="0 0 64 64">'
    /* Person 1 (links, vorne) */
    + '<circle cx="22" cy="14" r="3.5"/>'                                    /* Kopf */
    + '<path d="M22 18 L22 32 L18 44"/>'                                     /* Körper + Bein hinten */
    + '<path d="M22 32 L26 44"/>'                                            /* Bein vorne */
    + '<path d="M22 24 L16 28 L14 26"/>'                                     /* Arm mit Wanderstock */
    + '<path d="M14 28 L13 36"/>'                                            /* Wanderstock */
    + '<path d="M22 24 L28 26"/>'                                            /* Anderer Arm */
    + '<rect x="20" y="20" width="8" height="9" rx="1"/>'                    /* Rucksack */
    /* Person 2 (rechts, etwas hinten) */
    + '<circle cx="42" cy="16" r="3.5"/>'                                    /* Kopf */
    + '<path d="M42 20 L42 34 L38 46"/>'                                     /* Körper */
    + '<path d="M42 34 L46 46"/>'                                            /* Bein vorne */
    + '<path d="M42 26 L48 28 L50 26"/>'                                     /* Arm mit Stock */
    + '<path d="M50 26 L51 36"/>'                                            /* Wanderstock */
    + '<path d="M42 26 L36 28"/>'                                            /* Anderer Arm */
    + '<rect x="40" y="22" width="8" height="9" rx="1"/>'                    /* Rucksack */
    /* Boden */
    + '<path d="M6 52 L58 52"/>'
    + '</svg>',

  // Regionale Produkte (Korb mit Inhalt)
  korb: '<svg viewBox="0 0 64 64"><path d="M12 30 L16 52 Q16 54 18 54 L46 54 Q48 54 48 52 L52 30"/><path d="M10 30 L54 30"/><path d="M18 30 L18 54 M26 30 L26 54 M32 30 L32 54 M38 30 L38 54 M46 30 L46 54" stroke-width="1"/><circle cx="24" cy="22" r="6" fill="none"/><circle cx="36" cy="20" r="6" fill="none"/></svg>',

  // Kultur (Krug)
  krug: '<svg viewBox="0 0 64 64"><path d="M24 12 L40 12 L40 18 L42 20 L42 26"/><path d="M24 12 L24 18 L22 20 L22 26"/><path d="M22 26 Q14 28 14 38 Q14 50 24 54 L40 54 Q50 50 50 38 Q50 28 42 26 Z"/><path d="M14 36 L50 36" stroke-width="1.5"/><path d="M20 44 Q24 42 28 44 Q32 46 36 44 Q40 42 44 44" stroke-width="1" opacity="0.6"/></svg>',

  // Mobilität (Bus)
  bus: '<svg viewBox="0 0 64 64"><rect x="10" y="14" width="44" height="28" rx="3"/><rect x="14" y="18" width="16" height="10"/><rect x="34" y="18" width="16" height="10"/><path d="M14 36 L50 36" stroke-width="1.2"/><circle cx="20" cy="48" r="4" fill="#00663A" stroke="none"/><circle cx="44" cy="48" r="4" fill="#00663A" stroke="none"/></svg>',

  // ── SUBKATEGORIEN-ICONS ──────────────────────────────────

  // Wandern (für die Subkategorie-Liste – einfacher als Hauptkategorie-Icon, aber gleicher Stil)
  berge: '<svg viewBox="0 0 64 64"><path d="M6 50 L18 30 L26 38 L36 22 L46 38 L56 28"/><circle cx="48" cy="20" r="3" fill="#00663A" stroke="none"/><path d="M6 56 L56 56"/></svg>',

  /* Allgemeines Fahrrad – Standardrad (für Hauptkategorie Radfahren UND Rundradwege/Streckenradwege) */
  fahrrad: '<svg viewBox="0 0 64 64">'
    + '<circle cx="16" cy="46" r="10"/>'              /* Hinterrad */
    + '<circle cx="48" cy="46" r="10"/>'              /* Vorderrad */
    + '<path d="M16 46 L26 24 L40 24 L48 46"/>'        /* Rahmen */
    + '<path d="M26 24 L34 14 L40 14"/>'               /* Lenker + Sattelstütze */
    + '<circle cx="34" cy="14" r="2" fill="#00663A" stroke="none"/>' /* Sattel */
    + '</svg>',

  /* Gravelbike – Drop-Bar Lenker, dicke Reifen */
  gravelbike: '<svg viewBox="0 0 64 64">'
    + '<circle cx="16" cy="46" r="10" stroke-width="3.5"/>'
    + '<circle cx="48" cy="46" r="10" stroke-width="3.5"/>'
    + '<path d="M16 46 L26 28 L42 28 L48 46"/>'
    + '<path d="M26 28 L34 20"/>'
    + '<rect x="31" y="17" width="6" height="3" rx="1" fill="#00663A" stroke="none"/>'
    /* Drop-Bar Lenker (typisch Gravel) */
    + '<path d="M42 28 L40 18 L48 18 L52 22 L52 26"/>'
    + '</svg>',

  /* Mountainbike – Federgabel und breite Reifen */
  mountainbike: '<svg viewBox="0 0 64 64">'
    + '<circle cx="16" cy="46" r="10" stroke-width="3.5"/>'
    + '<circle cx="48" cy="46" r="10" stroke-width="3.5"/>'
    /* Stollen */
    + '<circle cx="16" cy="36" r="1.5" fill="#00663A" stroke="none"/>'
    + '<circle cx="6" cy="46" r="1.5" fill="#00663A" stroke="none"/>'
    + '<circle cx="26" cy="46" r="1.5" fill="#00663A" stroke="none"/>'
    + '<circle cx="48" cy="36" r="1.5" fill="#00663A" stroke="none"/>'
    + '<circle cx="38" cy="46" r="1.5" fill="#00663A" stroke="none"/>'
    + '<circle cx="58" cy="46" r="1.5" fill="#00663A" stroke="none"/>'
    /* Rahmen */
    + '<path d="M16 46 L26 28 L42 28 L46 46"/>'
    + '<path d="M26 28 L34 20"/>'
    + '<rect x="31" y="17" width="6" height="3" rx="1" fill="#00663A" stroke="none"/>'
    /* Federgabel */
    + '<path d="M42 28 L40 22 L48 22"/>'
    + '<line x1="48" y1="46" x2="48" y2="32" stroke-width="3.5"/>'
    + '</svg>',

  /* Rennrad – schlank, Drop-Bar, sichtbare Speichen */
  rennrad: '<svg viewBox="0 0 64 64">'
    + '<circle cx="16" cy="46" r="9" stroke-width="2"/>'
    + '<circle cx="48" cy="46" r="9" stroke-width="2"/>'
    /* Speichen */
    + '<line x1="16" y1="37" x2="16" y2="55" stroke-width="0.8"/>'
    + '<line x1="7" y1="46" x2="25" y2="46" stroke-width="0.8"/>'
    + '<line x1="48" y1="37" x2="48" y2="55" stroke-width="0.8"/>'
    + '<line x1="39" y1="46" x2="57" y2="46" stroke-width="0.8"/>'
    /* Schlanker Diamantrahmen */
    + '<path d="M16 46 L26 24 L46 24 L48 46"/>'
    + '<path d="M26 24 L34 18"/>'
    + '<rect x="31" y="15" width="6" height="3" rx="1" fill="#00663A" stroke="none"/>'
    /* Klassischer Drop-Bar Lenker */
    + '<path d="M46 24 L42 16 Q42 13 46 13 L52 13 Q56 13 56 16 L52 24"/>'
    + '</svg>',

  // Wegmarkierung (für Ausflugsziele)
  markierung: '<svg viewBox="0 0 64 64"><path d="M32 8 C 22 8, 16 16, 16 26 C 16 38, 32 56, 32 56 C 32 56, 48 38, 48 26 C 48 16, 42 8, 32 8 Z"/><circle cx="32" cy="26" r="6" fill="#00663A" stroke="none"/></svg>',

  // Welle (Badesee)
  welle: '<svg viewBox="0 0 64 64"><path d="M6 28 Q14 22 22 28 Q30 34 38 28 Q46 22 54 28 Q60 32 60 32"/><path d="M6 38 Q14 32 22 38 Q30 44 38 38 Q46 32 54 38 Q60 42 60 42"/><path d="M6 48 Q14 42 22 48 Q30 54 38 48 Q46 42 54 48 Q60 52 60 52"/></svg>',

  // Haus
  haus: '<svg viewBox="0 0 64 64"><path d="M10 32 L32 12 L54 32"/><path d="M14 30 L14 54 L50 54 L50 30"/><rect x="26" y="36" width="12" height="18"/></svg>',

  // Werkbank (Manufakturen)
  werkbank: '<svg viewBox="0 0 64 64"><path d="M8 28 L56 28"/><path d="M14 28 L14 50 M50 28 L50 50"/><rect x="20" y="12" width="24" height="16" rx="1"/><circle cx="28" cy="20" r="2" fill="#00663A" stroke="none"/><circle cx="36" cy="20" r="2" fill="#00663A" stroke="none"/></svg>',

  /* Markt – Marktstand mit Sonnenschirm/Markise und Theke (besser geeignet für Wochenmärkte) */
  markt: '<svg viewBox="0 0 64 64">'
    /* Markise / Schrägdach */
    + '<path d="M8 18 L56 18 L52 26 L12 26 Z"/>'
    /* Wellen-Streifen auf der Markise */
    + '<path d="M14 22 L20 22 M26 22 L32 22 M38 22 L44 22 M50 22 L52 22" stroke-width="1.5"/>'
    /* Stützpfosten */
    + '<path d="M14 26 L14 50 M50 26 L50 50"/>'
    /* Theke / Verkaufstresen */
    + '<rect x="14" y="36" width="36" height="6"/>'
    /* Waren-Andeutung (Obst-Kreise) */
    + '<circle cx="22" cy="32" r="2.5" fill="#00663A" stroke="none"/>'
    + '<circle cx="28" cy="32" r="2.5" fill="#00663A" stroke="none"/>'
    + '<circle cx="34" cy="32" r="2.5" fill="#00663A" stroke="none"/>'
    + '<circle cx="40" cy="32" r="2.5" fill="#00663A" stroke="none"/>'
    /* Boden */
    + '<path d="M8 50 L56 50"/>'
    + '</svg>',

  // Kalender (Veranstaltungen)
  kalender: '<svg viewBox="0 0 64 64"><rect x="10" y="14" width="44" height="40" rx="2"/><path d="M10 24 L54 24"/><path d="M22 8 L22 18 M42 8 L42 18" stroke-width="3"/><circle cx="22" cy="34" r="2" fill="#00663A" stroke="none"/><circle cx="32" cy="34" r="2" fill="#00663A" stroke="none"/><circle cx="42" cy="34" r="2" fill="#00663A" stroke="none"/></svg>',

  // Buch (Literatur)
  buch: '<svg viewBox="0 0 64 64"><path d="M10 16 L32 12 L54 16 L54 50 L32 46 L10 50 Z"/><path d="M32 12 L32 46" stroke-width="1.5"/><path d="M16 24 L26 22 M16 30 L26 28 M38 22 L48 24 M38 28 L48 30" stroke-width="1" opacity="0.7"/></svg>',

  // Info
  info: '<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="22"/><circle cx="32" cy="20" r="2" fill="#00663A" stroke="none"/><path d="M32 28 L32 46" stroke-width="3"/></svg>'
};

/* Aliase für Konsistenz */
ICONS.wandern = ICONS.wanderer2;  /* Hauptkategorie-Icon Tourismus */
ICONS.wandernSimple = ICONS.berge; /* Subkat-Liste Wandern */
ICONS.rundrad = ICONS.fahrrad;     /* Rundradwege = Standard */
ICONS.streckenrad = ICONS.fahrrad; /* Streckenradwege = Standard */
