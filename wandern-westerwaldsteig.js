/**
 * Guck ma, Westerwald – Datendatei
 * WesterwaldSteig (16 Etappen)
 * 
 * Quelle: westerwald.info / feratel Deskline®
 * Stand: April 2026
 * 
 * _status: "complete" = alle Sektionen befüllt
 * _status: "pending"  = Detaildaten müssen noch von westerwald.info geholt werden
 * 
 * Späterer DSI-Umstieg: Diese Datei wird durch einen fetch()-Aufruf
 * an die feratel DSI-Schnittstelle ersetzt.
 */

var DATA_WANDERN_WESTERWALDSTEIG = [

// ═══════════════════════════════════════════════════════════
// ETAPPE 1 – Herborn – Breitscheid  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 1,
  _status: "complete",
  title: "WesterwaldSteig 01. Etappe Herborn – Breitscheid (Ost-West)",
  km: "16,1",
  difficulty: "schwer",
  tags: "Fachwerk, Kalteiche-Region, Dillblick",
  sourceUrl: "https://www.westerwald.info/d/westerwaldsteig-01-etappe-herborn-breitscheid-ost-west/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=1512441&project=oar-rlp",
  tourenplanerUrl: "http://www.tourenplaner-rheinland-pfalz.de/de/tour/1512441/#dmdtab=oax-tab7",
  stats: {
    ascent: "540 hm",
    descent: "247 hm",
    duration: "4,8 h",
    highPoint: "494 m",
    lowPoint: "200 m"
  },
  description: {
    headline: "Wo Wappentiere leuchten, Papageien schreien und Höhlenbären einst zu Hause waren",
    text: "Im hessischen Herborn ist alles unter Dach und Fach. Du kannst dich an den schönen, alten Fachwerkhäusern gar nicht satt sehen. Das Rathaus und der barocke Löwenbrunnen, aber auch die Hohe Schule und das Schloss sind wie Edelsteine, die Herborn mit seinen Türmen, Pforten und Marktplätzen zu einem historischen Schatzkästlein werden lassen.\n\nDem bunten Treiben zwischen Straßencafés und Ladenzeilen folgt die Ruhe der kommenden Wanderetappe. Dem lauschigen Grün von Berg und Tal gesellt sich später prächtiges Gefieder und schönstes Vogelgezwitscher hinzu. Erstaunt siehst du Flamingos und Papageien, wirkt das feurige Rot des Sichlers wie ein Ausflug in exotische Tierwelten aus fernen Ländern.\n\nWie gut, dass du im Tierpark Herborn dennoch Westerwälder Boden unter deinen Füßen spürst und wenig später in die Geschichten der Erde hinabtauchen kannst. Auch der Erdbach verschwindet eine Zeit lang mit seinem Wasser von der Oberfläche, um dir später wieder hallo zu sagen. Du folgst den Felsen und tauchst ein in eine Welt weit vor unserer Zeit. Wie ein Abenteuer erscheinen dir die Große und Kleine Steinkammer. Du kletterst den Weg hinauf und entdeckst eine Höhle, die Menschen der Steinzeit als Wohnplatz diente.\n\nBald erreichst du die Tropfsteinhöhle Herbstlabyrinth, die märchenhafte Gebilde im Herzen der Erde spinnt und dich an ihrem Zauber teilhaben lässt."
  },
  directions: {
    byCar: "Aus Süden bzw. Norden: über die A45 bis Ausfahrt Herborn-West, weiter über die B255 Richtung Herborn-Zentrum oder über die B277.\nAus Osten bzw. Westen: über die B255 Richtung Herborn."
  },
  publicTransport: {
    arrival: "Bus/Bahn bis Herborn (Hessen) ZOB: vom Bahnhof Herborn ist ein Zuweg von knapp 400 m zum Startpunkt des WesterwaldSteigs auf dem Marktplatz markiert.",
    returnTrip: "Von Breitscheid nach Herborn mit der Buslinie 510 (Montag–Samstag).",
    returnTripUrl: "https://www.rmv.de/c/fileadmin/import/timetable/VLDW_510_ab_14.12.2025.pdf",
    stops: [
      {name: "Breitscheid Rathaus", note: "ca. 170 m vom WesterwaldSteig-Einstieg, Kreuzung Siedlungsstraße/Mühlenstraße"},
      {name: "Herborn Bahnhof/ZOB", note: "ca. 400 m Zuweg zum Startpunkt des WesterwaldSteigs"}
    ],
    links: [
      {label: "www.bahn.de", url: "http://www.bahn.de"},
      {label: "www.vrminfo.de", url: "https://www.vrminfo.de/"}
    ],
    taxis: [
      "Taxi Mehl, Herborn – Tel. 02772/3071",
      "Minicar Dill (9-Sitzer vorhanden) – Tel. 02772/3616",
      "Elas Minicar – Tel. 02772/924007",
      "Minicar on Tour – Tel. 02772/6464780"
    ],
    sustainableTip: "Anreise mit der Bahn bis Herborn und von hier aus eine mehrtägige Wanderung bis nach Rehe (Etappe 2) oder nach Rennerod (Etappe 3). Zurück montags bis freitags mit der Buslinie 520 und samstags sowie an Sonn- und Feiertagen mit der „Blauen Linie” 521. 1 Stunde).",
    sustainableTipUrls: [
      {label: "Buslinie 520", url: "https://www.rmv.de/c/fileadmin/import/timetable/VLDW_520_ab_14.12.2025.pdf"},
      {label: "Blaue Linie 521", url: "https://www.rmv.de/c/fileadmin/import/timetable/VLDW_521_ab_14.12.2025.pdf"}
    ],
    moreInfoUrl: "https://www.westerwald.info/wandertouren-mit-bus-und-bahn/"
  },
  parking: [
    {location: "Herborn", free: "City-Parkplatz (Schießplatz), Pendlerparkplätze am Bahnhof/ZOB", paid: "Kallenbachstraße, Hintersand, Schmaler Weg"},
    {location: "Breitscheid", free: "Oberhalb der Kirche (Kirchstraße)", paid: null}
  ],
  routeDescription: {
    general: "Historisch gesehen gibt es wohl keinen besseren Startpunkt für den WesterwaldSteig als das hessische Fachwerkstädtchen Herborn im Tal der Dill. Für das Waldgebiet westlich des Königshofes Herborn ist in einer Schrift aus dem Jahre 1048 die erste Erwähnung des Westerwaldes verbürgt. Fast könnte man sagen, die Wiege des Westerwaldes steht in Herborn.\n\nAuf dem von über 400 Jahre alten Fachwerkhäusern eingerahmten Marktplatz startet die erste Etappe des WesterwaldSteigs. Besonders sehenswert sind das Wappenfries am Rathaus und der 1732 aufgestellte barocke Löwenbrunnen. Vorbei an vielen kleinen Läden, Cafés und Fachwerkhäusern verlässt der Steig über die Dollenbergstraße die Stadt.\n\nNach dem ersten Stück asphaltierter Straße bekommst du bald einen Waldweg unter die Füße, der um den 296 Meter hohen Dollenberg herumführt. Ein breiter Weg führt durch Mischwald hinunter ins Ambachtal und wieder bergauf zum einstigen gräflichen Jagddomizil Neuhaus. Durch das Donsbachtal strebt der Steig dem Tierpark Herborn zu. Mit etwa 100 Vogelarten zieht er jährlich rund 40.000 Besucher an.\n\nDer WesterwaldSteig führt durch Uckersdorf und verlässt den Ort in Richtung Gonkelrain stetig bergan. Über den Kramberg geht es im Hang des Mühlberges auf Erdbach zu. Auf Höhe des Friedhofs kannst du schon das Rauschen des Erdbachs vernehmen. Der kleine Wasserlauf verschwindet unterhalb von Breitscheid im Kleingrubenloch und fließt etwa einen Kilometer unterirdisch weiter.\n\nBald darauf hast du den ersten Höhepunkt der Tour erreicht: die Große und Kleine Steinkammer. Steil bergauf geht es zu den schon von weitem sichtbaren Felsen. Am oberen Rand des Steinbruchs entlang geht es weiter zur 2009 eröffneten Tropfsteinhöhle „Herbstlabyrinth”, Europas erster LED-beleuchteter Höhle. Weiter durch das Faule Feld hast du nun das Etappenziel Breitscheid bald erreicht.",
    accessTrails: [
      "Vom Marktplatz Herborn, dem Startpunkt des WesterwaldSteigs, zum Bahnhof (ca. 0,4 km)",
      "Von Neuhaus nach Dillenburg (ca. 6,3 km)"
    ],
    accessTrailMarking: "Grünes W auf gelbem Grund"
  },
  safetyNotes: "Solltest du bei bestimmten Wegeabschnitten der Meinung sein, dass diese für dich nicht begehbar sind, dann solltest du diese umgehen. Gerade bei widrigen Wetterverhältnissen kann es bei naturnahen Wegen zu matschigen und rutschigen Passagen kommen.\n\nBesonders im Herbst ist darauf zu achten, dass das am Boden liegende Laub Unebenheiten, Wurzeln, Steine oder Löcher im Weg verdecken kann. Mit Wegebeeinträchtigungen dieser Art musst du rechnen, wenn du eine Wanderung unternimmst.\n\nObwohl der Weg durchgehend sehr gut markiert ist, solltest du aus Sicherheitsgründen immer eine geeignete Wanderkarte dabei haben oder dir die kostenlose App „Rheinland-Pfalz erleben” herunterladen.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Trage festes Schuhwerk sowie witterungsangepasste, zweckmäßige Kleidung, die vor Kälte und Nässe bzw. Hitze und Sonne schützt. Nimm ausreichend Flüssigkeit mit. Es sind keine regelmäßigen Einkehrmöglichkeiten direkt am Weg vorhanden – Rucksackverpflegung wird empfohlen.",
  tips: [
    {name: "Tierpark Herborn-Uckersdorf", note: "ca. 100 Vogelarten, darunter Flamingos, Papageien und gefährdete Arten", url: "https://www.tierpark-herborn.de/"},
    {name: "Tropfsteinhöhle Herbstlabyrinth", note: "Europas erste LED-beleuchtete Höhle. Geöffnet April–Oktober an Wochenenden", url: "https://schauhöhle-breitscheid.de/"},
    {name: "Steinkammern bei Erdbach", note: "Frei zugängliche Höhlen aus der Steinzeit", url: null},
    {name: "Häfner- und Töpfermuseum Breitscheid", note: "Einblick in die historische Tonverarbeitung der Region", url: null},
    {name: "Digitale Wandernadel", note: "App „SummitLynx” – Wegpunkte scannen und Top Trail Wandernadel sammeln", url: null}
  ],
  literature: [
    "Leporello-Wanderkarte WesterwaldSteig im Maßstab 1:25.000",
    "Hikeline-Wanderführer WesterwaldSteig: Wanderkarten im Maßstab 1:35.000, Höhenprofile, Stadtpläne, touristische Anregungen und Übernachtungsverzeichnis"
  ],
  start: {name: "Herborn, Marktplatz", address: "Marktplatz, 35745 Herborn", coordinates: "N 50° 41′ 0.0″ | O 8° 18′ 11.0″"},
  destination: {name: "Breitscheid", address: "Rathausstraße/Westerwaldstraße, 35767 Breitscheid", coordinates: "N 50° 41′ 3.4″ | O 8° 11′ 22.2″"}
},

// ═══════════════════════════════════════════════════════════
// ETAPPE 2 – Breitscheid – Rehe  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 2,
  _status: "complete",
  title: "WesterwaldSteig 02. Etappe Breitscheid – Rehe (Ost-West)",
  km: "16,9",
  difficulty: "schwer",
  tags: "Hoher Westerwald, Fuchskaute, Bartenstein",
  sourceUrl: "https://www.westerwald.info/d/westerwaldsteig-02-etappe-breitscheid-fuchskaute-ost-west/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=1522827&project=oar-rlp",
  tourenplanerUrl: "http://www.tourenplaner-rheinland-pfalz.de/de/tour/1522827/#dmdtab=oax-tab7",
  stats: {
    ascent: "274 hm",
    descent: "235 hm",
    duration: "4,3 h",
    highPoint: "656 m",
    lowPoint: "493 m"
  },
  description: {
    headline: "Wo Arnika blüht und der Wind an höchster Stelle flüstert",
    text: "Du schnupperst hinein in die Landschaft, die dich am Heisterberger Weiher zum erfrischenden Baden einlädt, wanderst weiter über wertvolle Naturschutzgebiete wie die Bermershube bis hin zur Fuchskaute – mit 657 m die höchste Erhebung des Westerwaldes. Du entdeckst die goldgelben Blüten der heilsamen Arnikapflanze, riechst die würzigen Fichtenwälder und folgst den Streicheleinheiten des Windes, der sich hier an höchster Stelle in die Gräser der Wildblumenwiesen längst verliebt hat.\n\nHier sind die Jahreszeiten noch ausgeprägt. Der Frühling ist später als anderswo, der Sommer ist hier der Sonne besonders nahe und in manch buntem Blätterherbst mischen sich frühe Schneeflocken, die hier oben wahre Wintermärchen zaubern können. Auf den ersten Schnee willst du nicht warten und so lässt du dich auf den sanften Abstieg nach Rehe ein. Noch einmal geht nicht nur die Landschaft, sondern auch dein Herz auf. Großartige Natur für bleibende Eindrücke."
  },
  directions: {
    byCar: "Über die B255 bis zur Ausfahrt Breitscheid. Im Ort: Kirchstraße."
  },
  publicTransport: {
    arrival: "Bus von Herborn nach Breitscheid Rathaus: Buslinie 510.",
    returnTrip: "Von Rehe zurück nach Breitscheid/Herborn: per Taxi; keine direkte Busverbindung.",
    returnTripUrl: null,
    stops: [
      {name: "Breitscheid Rathaus", note: "ca. 170 m vom WesterwaldSteig-Einstieg"}
    ],
    links: [
      {label: "www.bahn.de", url: "http://www.bahn.de"},
      {label: "www.vld-wetzlar.de", url: "https://www.vld-wetzlar.de/"}
    ],
    taxis: [
      "Taxi Mehl, Herborn – Tel. 02772/3071",
      "Minicar Dill (9-Sitzer) – Tel. 02772/3616"
    ],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: "https://www.westerwald.info/wandertouren-mit-bus-und-bahn/"
  },
  parking: [
    {location: "Breitscheid", free: "Oberhalb der Kirche (Kirchstr. 27-29), 35767 Breitscheid", paid: null},
    {location: "Rehe", free: "Rathausstraße, 56479 Rehe", paid: null}
  ],
  routeDescription: {
    general: "Der WesterwaldSteig führt an der Kirche aus dem 14. Jahrhundert und dem Friedhof mit schmucker Kapelle vorbei hinauf zur katholischen Pfarrkirche aus den 1960er Jahren. Der Weg verlässt Breitscheid in Richtung Fluglandeplatz nebst Gaststätte. Die Lehmböden und die Staunässe in den Mulden machten auf diesem Landstrich eine landwirtschaftliche Nutzung nahezu unmöglich. So sind es kleine Fichtenwälder, Windschutzstreifen und große Wiesen, die das Landschaftsbild des Hohen Westerwaldes bestimmen.\n\nNachdem der WesterwaldSteig im weiteren Verlauf den Waldriegel auf leicht unwegsamem Gelände durchquert hat, blickst du nach rechts übers Feld auf den Ort Rabenscheid. In der Ferne tauchen schon die ersten Windräder in der Nähe der Fuchskaute auf.\n\nAm Ufer des Heisterberger Weihers entlang führt der WesterwaldSteig bis zur Straße nach Heisterberg. Die Landschaft um die Fuchskaute ist von Schutzhecken und blühenden Wiesen geprägt. Noch ein kurzes Stück durch den Wald und kaum merklich ist die mit 657 Metern höchste Erhebung des Westerwaldes im sanften Anstieg erklommen.\n\nWeite Ausblicke über Weideland und Abstiege im Fichtenwald begleiten dich. Der Steig führt fast eben am Ortsrand von Homberg vorbei, um dann doch noch einmal auf schmaler Piste zum Christlichen Gästezentrum hinabzuführen. Kurz davor geht es nach rechts in den Wald hinein und entlang des Rehbachs zum Etappenziel Rehe.",
    accessTrails: [],
    accessTrailMarking: null
  },
  safetyNotes: "Teilweise leicht unwegsames Gelände beim Durchqueren des Waldriegels. Bei Nässe rutschige Stellen möglich. Obwohl der Weg durchgehend sehr gut markiert ist, solltest du aus Sicherheitsgründen immer eine geeignete Wanderkarte dabei haben.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Festes Schuhwerk, witterungsangepasste Kleidung, ausreichend Getränke und Rucksackverpflegung.",
  tips: [
    {name: "Heisterberger Weiher", note: "Bademöglichkeit im Sommer", url: null},
    {name: "Fuchskaute (657 m)", note: "Höchste Erhebung des Westerwaldes mit Panoramablick", url: null},
    {name: "Neue Kugelbahn in Rehe", note: "Bei der Firma ABUS direkt am Steig – Holzkugeln am Automaten ziehen!", url: null},
    {name: "Bermershube bei Heisterberg", note: "Wertvolles Naturschutzgebiet mit Arnika-Beständen", url: null}
  ],
  literature: [
    "Leporello-Wanderkarte WesterwaldSteig im Maßstab 1:25.000",
    "Hikeline-Wanderführer WesterwaldSteig"
  ],
  start: {name: "Breitscheid", address: "Kirchstraße, 35767 Breitscheid", coordinates: null},
  destination: {name: "Rehe", address: "Rathausstraße, 56479 Rehe", coordinates: null}
},

// ═══════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════
// ETAPPE 3 – Rehe – Rennerod  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 3, _status: "complete",
  title: "WesterwaldSteig 03. Etappe Rehe – Rennerod (Ost-West)",
  km: "9,1", difficulty: "mittel", tags: "Krombachtalsperre, Hexenbaum, Kaisereiche",
  sourceUrl: "https://www.westerwald.info/d/westerwaldsteig-03-etappe-fuchskaute-rennerod-ost-west/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=1543858&project=oar-rlp",
  tourenplanerUrl: "http://www.tourenplaner-rheinland-pfalz.de/de/tour/1522828/#dmdtab=oax-tab7",
  stats: {ascent: "60 hm", descent: "100 hm", duration: "2,5 h", highPoint: "574 m", lowPoint: "490 m"},
  description: {
    headline: "Wo ein Schmuckstück lockt und Boote unter guten Sternen segeln",
    text: "Mit dem Ort Rehe startest du in einer Gemeinde, die sich ein echtes Westerwälder Wahrzeichen bewahrt hat. Das einstige Bet- und Schulhaus lässt dich innehalten und lenkt deinen Blick auf die Tür. Ein echtes Schmuckstück wartet auf dich und lässt dich erahnen, wie schön geschnitzt erst die barocke Kanzel im einstigen Betsaal aussehen muss. Volkskunst auf höchstem Niveau eröffnet sich dir und sie wirkt noch lange nach, als du schon längst die Krombachtalsperre erreichst. Das tiefe Blau zieht magisch Wasser- und Zugvögel an, die sich im großen Naturschutzgebiet sicher aufgehoben fühlen. Lege eine Pause ein, entspanne am Wasser und schaue den Wolken und den Haubentauchern zu. Könntest du doch nur die Zeit anhalten! Die Stadt Rennerod ruft am Etappenziel und du kannst gespannt sein auf neue Eindrücke."
  },
  directions: {byCar: "Aus Norden: A45 bis Ausfahrt 24-Haiger-Burbach, auf die B54 Richtung Rennerod bis Rehe (B255). Aus Osten: A45 bis Ausfahrt 26-Herborn-West, auf die B255 bis Rehe. Aus Westen: A3 bis Ausfahrt 40-Montabaur, auf die B255 bis Rehe."},
  publicTransport: {
    arrival: "Bus von Herborn zur Haltestelle Rehe Hauptstraße: Buslinien 520 (Mo–Fr) oder 521 (Sa, So, Feiertage); Fahrzeit ca. 52 Min.",
    returnTrip: "Von Rennerod nach Rehe: Buslinien 480 (täglich), 520 (Mo–Fr) oder 521 (Sa, So, Feiertage); Fahrzeit ca. 5 bzw. 12 Min.",
    stops: [{name: "Rehe Ort", note: "Hauptstraße bis Kreuzung, rechts in Bahnhofstraße"}, {name: "Rennerod ZOB", note: "ca. 700 m Zuweg zum Hauptweg"}],
    taxis: ["Taxi Große, Rennerod – Tel. 02664/992221", "Taxi Kulas, Rennerod – Tel. 02664/1020", "Taxi Reuter, Rennerod – Tel. 02664/8274"],
    moreInfoUrl: "https://www.westerwald.info/wandertouren-mit-bus-und-bahn/"
  },
  parking: [{location: "Rehe", free: "Rathaus, Rathausstraße, 56479 Rehe", paid: null}, {location: "Rennerod", free: "Bahnhofsstraße, Friedhofsweg bzw. Westerwaldhalle, 56477 Rennerod", paid: null}],
  routeDescription: {
    general: "Startpunkt ist direkt am Rathaus in Rehe. Den Fachwerkbau aus dem 18. Jahrhundert schmückt eine bunte mit Ornamenten reich verzierte Holztür. In der Rathausstraße führt der Steig aus dem Ort hinaus. Du verlässt Rehe durch Wiesen und Weiden in Richtung Krombachtalsperre. Der nördliche Teil des Sees ist als 26 Hektar großes Naturschutzgebiet ausgewiesen. Hier brüten Haubentaucher und Blässhuhn. Am nicht unter Naturschutz stehenden Teil gibt es Campingplätze, ein Restaurant und einen Tretbootverleih. Vorbei an Militärgelände und bis zur Alsberg-Kaserne der stillgelegten Querbahn-Trasse folgend strebt der WesterwaldSteig Rennerod zu. Du kannst über die Bahnhofstraße ins Stadtzentrum gehen oder weiter dem WesterwaldSteig zu Hexenbaum, Botterweck und Kaisereiche folgen und erst über den Friedhofsweg die Ortsmitte ansteuern.",
    accessTrails: ["vom ehemaligen Bahndamm kurz vor Rennerod zum Wanderparkplatz nördlich Siedlung Kohlau (ca. 0,9 km)", "vom westlichen Stadtrand Rennerod zur Stadtmitte mit ÖPNV-Anbindung (ca. 0,7 km)"]
  },
  safetyNotes: "Gerade bei widrigen Wetterverhältnissen kann es bei naturnahen Wegen zu matschigen und rutschigen Passagen kommen. Im Herbst kann Laub Unebenheiten verdecken.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Festes Schuhwerk, witterungsangepasste Kleidung, ausreichend Getränke und Rucksackverpflegung.",
  tips: [{name: "Krombachtalsperre", note: "26 ha Naturschutzgebiet, Tretbootverleih, Campingplätze"}, {name: "Hexenbaum", note: "Sagenumwobener Platz der neun mächtigen Linden"}, {name: "Botterweck", note: "Geografisches Zentrum der einstigen BRD vor der Wiedervereinigung"}, {name: "Kaisereichen", note: "Drei im Dreikaiserjahr 1888 gepflanzte Eichen"}],
  literature: ["Leporello-Wanderkarte WesterwaldSteig 1:25.000"],
  start: {name: "Rehe, Rathaus", address: "Rathausstraße, 56479 Rehe"}, destination: {name: "Rennerod", address: "Bahnhofsstraße, 56477 Rennerod"}
},

// ═══════════════════════════════════════════════════════════
// ETAPPE 4 – Rennerod – Westerburg  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 4, _status: "complete",
  title: "WesterwaldSteig 04. Etappe Rennerod – Westerburg (Ost-West)",
  km: "16,1", difficulty: "schwer", tags: "Holzbachschlucht, Secker Weiher, Katzenstein",
  sourceUrl: "https://www.westerwald.info/d/westerwaldsteig-04-etappe-rennerod-westerburg-ost-west/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=1495683&project=oar-rlp",
  tourenplanerUrl: "http://www.tourenplaner-rheinland-pfalz.de/de/tour/1522829/#dmdtab=oax-tab7",
  stats: {ascent: "200 hm", descent: "290 hm", duration: "5,0 h", highPoint: "520 m", lowPoint: "290 m"},
  description: {
    headline: "Wo grüne Schluchten locken, alte Kraftplätze auftauchen und die Macht des Schicksals spürbar ist",
    text: "Schaurig-schön ist der Platz der neun mächtigen Linden, der als Hexenbaum bekannt, von Folter, Tod und Teufel berichtet. Vom geografischen Zentrum der einstigen Bundesrepublik kündet der rundliche Felsen Butterweck. Die drei Kaisereichen wurden 1888 im Dreikaiserjahr gepflanzt. Schicksalhafte Plätze sind sie alle und mit der alten Weisheit, dass der Mensch denkt, doch Gott lenkt, wanderst du weiter durch die erhabene Stille der Wälder. Unweit der hübschen Secker Weiher kannst du die Vorfreude auf das wildromantische Tal spüren, das der Holzbach durchbricht. Im lichten Schattenreich könnten Elfen regieren. Farne und Waldblumen wachsen, Basaltsteine scheinen wie von Riesenhand gestreut. Der Katzenstein soll einst ein vorchristlicher Kultplatz gewesen sein."
  },
  directions: {byCar: "Aus Süden bzw. Norden: über die B54 bis Ausfahrt Rennerod."},
  publicTransport: {
    arrival: "Bahn bis Haltestelle Westerburg, Buslinie 480 nach Rennerod.",
    returnTrip: "Busverbindung Linie 116 oder Bahn ab Westerburg.",
    stops: [{name: "Rennerod", note: "Bahnhofsstraße oder Westerwaldhalle"}, {name: "Westerburg", note: "Bahnhof oder Burgmannenplatz"}],
    taxis: ["Taxi Große, Rennerod – Tel. 02664/992221"],
    moreInfoUrl: "https://www.westerwald.info/wandertouren-mit-bus-und-bahn/"
  },
  parking: [{location: "Rennerod", free: "Bahnhofsstraße, Friedhofsweg, Westerwaldhalle", paid: null}, {location: "Westerburg", free: "Campingplatz Katzenstein, Burgmannenplatz, Ratssaal (Gartenstraße), An der Hofwiese", paid: null}],
  routeDescription: {
    general: "Rennerod liegt windgeschützt im Tal des Holzbachs. Schon nach etwa zwei Kilometern erreichst du den Seitenstein, eine 20 m hohe Basaltformation mitten im Wald. Waldwege führen zu den Secker Weihern, die ab 1672 von Fürst Moritz Heinrich von Nassau-Hadamar angelegt wurden. Am Dappricher Hof bei Seck beginnt die Holzbachschlucht – rund einen Kilometer lang und bis zu 20 Meter tief. Heruntergebrochene Basaltblöcke und umgestürzte Bäume geben dem engen Tal einen wildbachartigen Charakter. Ähnlich ergeht es dir in der Gemündener Stiftskirche. Vorbei am Campingplatz und dem Wirtshaus Zum Katzenstein wanderst du durch den Wald zum Katzenstein, einem Felsen aus Plattenbasalt.",
    accessTrails: ["Rennerod, vom westlichen Stadtrand über den Friedhofsweg in die Stadt"]
  },
  safetyNotes: "In der Holzbachschlucht ist Trittsicherheit gefragt. Bei Nässe können die Basaltfelsen rutschig sein.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Festes Schuhwerk (besonders für die Holzbachschlucht), witterungsangepasste Kleidung, Rucksackverpflegung.",
  tips: [{name: "Seitenstein", note: "20 m hohe Basaltformation mit spannender Sage"}, {name: "Secker Weiher", note: "Historische Weiher aus dem 17. Jahrhundert"}, {name: "Holzbachschlucht", note: "1 km lang, bis 20 m tief – wildromantisch!"}, {name: "Katzenstein", note: "Vorchristlicher Kultplatz, Felsen aus Plattenbasalt"}, {name: "Gemündener Stiftskirche", note: "Barocke Orgel, ruhiger Kraftplatz"}],
  literature: ["Leporello-Wanderkarte WesterwaldSteig 1:25.000"],
  start: {name: "Rennerod", address: "56477 Rennerod"}, destination: {name: "Westerburg", address: "56457 Westerburg"}
},

// ═══════════════════════════════════════════════════════════
// ETAPPE 5 – Westerburg – Freilingen  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 5, _status: "complete",
  title: "WesterwaldSteig 05. Etappe Westerburg – Freilingen (Ost-West)",
  km: "20", difficulty: "mittel", tags: "Westerwälder Seenplatte, Wiesensee",
  sourceUrl: "https://www.westerwald.info/d/westerwaldsteig-05-etappe-westerburg-freilingen-ost-west/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=1483380&project=oar-rlp",
  tourenplanerUrl: "http://www.tourenplaner-rheinland-pfalz.de/de/tour/1522830/#dmdtab=oax-tab7",
  stats: {ascent: "350 hm", descent: "310 hm", duration: "7,5 h", highPoint: "480 m", lowPoint: "340 m"},
  description: {
    headline: "Wo stilles Blau zahlreicher Weiher zum Wanderbegleiter wird",
    text: "Du wirst auf dieser Etappe immer wieder von dem stillen Blau zahlreicher Weiher und Seen begleitet. Die Landschaft zeigt den Charme sanfter Bergkuppen, ausgedehnter Wiesentäler und lichter Laubwälder. Eine Natur mit besonderer Ausstrahlung! Himmlisch schön präsentiert sich die Westerwälder Seenplatte. Sieben Stauweiher gaben ihr den Namen. Die Weiher sind untereinander mit Kanälen verbunden. Im Strandbad am Postweiher kannst du baden, Paddel- und Tretboot fahren sowie surfen."
  },
  directions: {byCar: "Bahn ab Westerburg oder über die B255 bis Westerburg."},
  publicTransport: {
    arrival: "Bahn bis Haltestelle Westerburg.",
    returnTrip: "Keine direkte Busverbindung ab Freilingen. Rückfahrt mit Taxi oder über Zuweg zum Bahnhof Rotenhain.",
    taxis: ["Hehn-Touristik, Alpenrod – Tel. 02662/3366"],
    moreInfoUrl: "https://www.westerwald.info/wandertouren-mit-bus-und-bahn/"
  },
  parking: [{location: "Westerburg", free: "Campingplatz Katzenstein, Burgmannenplatz, Park & Ride Bahnhof", paid: null}, {location: "Freilingen", free: "Wanderparkplatz gegenüber Campingplatz Freilingen, Postweiher, 56244 Freilingen (an der B8)", paid: null}],
  routeDescription: {
    general: "Der WesterwaldSteig führt zunächst durch Wiesen und Weiden nach Hergenroth. Hier bietet sich ein Abstecher zum nahen Wiesensee an, der 80 Hektar groß ist. Über den Hergenrother Kopf führt der Steig nach Brandscheid und Rothenbach bis zum Wölferlinger Weiher und zur Westerwälder Seenplatte. Sieben Stauweiher breiten sich als wellige Hochfläche zwischen den Bergköpfen des Hachenburger und Höchstenbacher Waldes aus. Im Strandbad am Postweiher kannst du baden, Paddel- und Tretboot fahren sowie surfen. Das Etappenziel hast du kurz danach am Spielplatz und Wanderparkplatz erreicht.",
    accessTrails: ["Schleife durch Freilingen (ca. 1,6 km)"]
  },
  safetyNotes: "Gerade bei widrigen Wetterverhältnissen kann es bei naturnahen Wegen zu matschigen Passagen kommen.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Festes Schuhwerk, Rucksackverpflegung. Freilingen bietet aktuell keine Einkehrmöglichkeit – daher ausreichend Proviant mitnehmen!",
  tips: [{name: "Wiesensee bei Hergenroth", note: "80 ha großer See mit landschaftlicher Schönheit (Hinweis: führt zeitweise kein Wasser)"}, {name: "Westerwälder Seenplatte", note: "Sieben zusammenhängende Stauweiher"}, {name: "Strandbad Postweiher", note: "Baden, Paddeln, Tretboot, Surfen"}, {name: "WesterwaldSteig-Schutzhütte oberhalb Kölbingens", note: "Ideal für Lunchpause"}],
  literature: ["Leporello-Wanderkarte WesterwaldSteig 1:25.000"],
  start: {name: "Westerburg", address: "56457 Westerburg"}, destination: {name: "Freilingen", address: "56244 Freilingen"}
},

// ═══════════════════════════════════════════════════════════
// ETAPPE 6 – Freilingen – Nistertal  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 6, _status: "complete",
  title: "WesterwaldSteig 06. Etappe Freilingen – Nistertal (Ost-West)",
  km: "20", difficulty: "schwer", tags: "Dreifelder Weiher, Nistertal, Stöffel-Park",
  sourceUrl: "https://www.westerwald.info/d/westerwaldsteig-06-etappe-freilingen-nistertal-ost-west/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=1522831&project=oar-rlp",
  tourenplanerUrl: "http://www.tourenplaner-rheinland-pfalz.de/de/tour/1522831/#dmdtab=oax-tab7",
  stats: {ascent: "249 hm", descent: "300 hm", duration: "5,0 h", highPoint: "450 m", lowPoint: "250 m"},
  description: {
    headline: "Von Weiher zu Weiher entlang der Wied",
    text: "Kurz nach dem Start erreichst du den Dreifelder Weiher, den die Wied, der größte Fluss des Westerwaldes, durchfließt. Der gesamte Bereich der Seenplatte genießt Landschaftsschutz. Hier in Dreifelden stehen die ältesten Steinkirchen des Westerwaldes sowie die gewaltige Friedenseiche. Der Aussichtsturm am Gräbersberg bietet ein Panorama über den Westerwald. Beim Stöffel-Park kannst du die Erdgeschichte der letzten 25 Millionen Jahre in den Ablagerungen eines Maarsees nachverfolgen und die über 100-jährige Geschichte des Basaltabbaus erleben."
  },
  directions: {byCar: "Über die B8 bis Freilingen."},
  publicTransport: {
    arrival: "Über Zuweg vom Bahnhof Rotenhain bis zum Hauptweg (ca. 16 km Gesamtlänge inkl. Wanderung).",
    returnTrip: "Keine direkte Busverbindung. Rückfahrt mit Taxi empfohlen.",
    stops: [{name: "Freilingen", note: "Wanderparkplatz an der B8"}, {name: "Nistertal", note: "Bahnhof Nistertal-Bad Marienberg"}],
    taxis: ["Hehn-Touristik, Alpenrod – Tel. 02662/3366", "Taxi Hetzler, Selters – Tel. 02626/6445"],
    moreInfoUrl: "https://www.westerwald.info/wandertouren-mit-bus-und-bahn/"
  },
  parking: [{location: "Freilingen", free: "Wanderparkplatz gegenüber Campingplatz, Postweiher, 56244 Freilingen (an der B8)", paid: null}, {location: "Nistertal", free: "Bahnhof Nistertal-Bad Marienberg", paid: null}],
  routeDescription: {
    general: "Kurz nach dem Start erreichst du den Dreifelder Weiher. Die Wied durchfließt ihn. Über den sagenumwobenen Welterstein (480 m hoher Basaltfelsen) geht es zum Stöffel-Park. In der Historischen Werkstatt der über 100 Jahre alten Schmiede erhältst du Einblicke in die harte Arbeitswelt vergangener Zeiten. Nach einem Abstecher zur berühmten Stöffelmaus erreichst du das Etappenziel vorbei an einer idyllischen Kapelle hinter der Nister. Über einen Zuweg (ca. 1 km) erreichst du Nistertal mit Bahnhof und Übernachtungsmöglichkeiten.",
    accessTrails: ["Nistertal, Kirche – vom WesterwaldSteig führt ein Zuweg (ca. 1 km) in den Ort"]
  },
  safetyNotes: "Gerade bei widrigen Wetterverhältnissen kann es bei naturnahen Wegen zu matschigen Passagen kommen.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Festes Schuhwerk, Rucksackverpflegung empfohlen.",
  tips: [{name: "Dreifelder Weiher", note: "Größter Weiher der Seenplatte, Landschaftsschutz"}, {name: "Gräbersberg Aussichtsturm", note: "Panorama über den Westerwald"}, {name: "Stöffel-Park", note: "Tertiär- und Industrie-Erlebnispark, 25 Mio. Jahre Erdgeschichte"}, {name: "Birkenhof-Brennerei Nistertal", note: "WesterwaldSteig-Schnaps als Andenken"}],
  literature: ["Leporello-Wanderkarte WesterwaldSteig 1:25.000"],
  start: {name: "Freilingen", address: "56244 Freilingen"}, destination: {name: "Nistertal", address: "Bahnhofstraße, 57647 Nistertal"}
},

// ═══════════════════════════════════════════════════════════
// ETAPPE 7 – Nistertal – Bad Marienberg  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 7, _status: "complete",
  title: "WesterwaldSteig 07. Etappe Nistertal – Bad Marienberg (Ost-West)",
  km: "6", difficulty: "mittel", tags: "Bahntrasse, Barfußpfad Bad Marienberg",
  sourceUrl: "https://www.westerwald.info/d/westerwaldsteig-07-etappe-nistertal-bad-marienberg-ost-west/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=1558427&project=oar-rlp",
  tourenplanerUrl: "http://www.tourenplaner-rheinland-pfalz.de/de/tour/1558427/#dmdtab=oax-tab7",
  stats: {ascent: "160 hm", descent: "45 hm", duration: "2,0 h", highPoint: "480 m", lowPoint: "280 m"},
  description: {
    headline: "Wo alte Bahnschwellen Geschichten erzählen und Barfußlaufen zur Kur wird",
    text: "Hier wirst du zum Spurensucher. Alte Bahnschwellen unter Buchenblättern und ein beeindruckendes Brückenviadukt im Wald erzählen von Zeiten, wo fauchende Dampfrösser im Westerwald unterwegs waren. Wo früher Rauchschwaden zogen, kann heute höchstens Nebel von dem Flüsschen Nister heraufziehen. Jetzt ist der Weg nicht mehr weit nach Bad Marienberg. Ein Platz der Erholung kündigt sich an und du kannst dich auf den Barfußpfad als sinnliche Erfrischung deiner Fußsohlen freuen. Es kitzelt und sticht, wirkt anregend und wohltuend. Seine Lehren um ganzheitliche Gesundheit prägen den Kurort und sind heute mehr denn je aktuell."
  },
  directions: {byCar: "Über die B414 bis Nistertal-Bad Marienberg."},
  publicTransport: {
    arrival: "Bahn aus Richtung Köln bzw. Limburg bis Haltestelle Nistertal-Bad Marienberg. Ca. 1 km Zuweg zum Einstieg.",
    returnTrip: "Am Wochenende Rückfahrt mit Taxi empfohlen. Unter der Woche: Hessische Landesbahn (Fahrzeit ca. 9 Min.).",
    stops: [{name: "Nistertal-Bad Marienberg Bf", note: "ca. 1 km Zuweg zum Hauptweg"}, {name: "Bad Marienberg, Neuer Weg", note: "ca. 150 m vom Hauptweg entfernt"}],
    taxis: ["Hehn-Touristik, Alpenrod – Tel. 02662/3366", "Taxi Hilgers, Bad Marienberg – Tel. 02661/5055", "Taxi Nagel, Bad Marienberg – Tel. 02661/5949"],
    moreInfoUrl: "https://www.westerwald.info/wandertouren-mit-bus-und-bahn/"
  },
  parking: [{location: "Nistertal", free: "Bahnhof, Bahnhofstraße, 57647 Nistertal", paid: null}, {location: "Bad Marienberg", free: "Zentrum (Bismarckstraße, Albrechtstraße, Im Bohnengarten, Tourist-Information/Wilhelmstraße)", paid: null}],
  routeDescription: {
    general: "Der kurze Weg von Nistertal nach Bad Marienberg führt zunächst durch Buchenwald entlang einer ehemaligen Bahnlinie. Alte Bahnschwellen und ein beeindruckendes Brückenviadukt erzählen von vergangenen Zeiten. In Bad Marienberg erwartet dich der Barfußpfad mit Tannenzapfen, Hölzern, spitzen und runden Steinen – wie eine Massage. Der Kneipp-Kurort lädt zur Erholung ein."
  },
  safetyNotes: "Leichte Etappe ohne besondere Gefahrenstellen. Wanderkarte oder GPS empfohlen.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Festes Schuhwerk, Rucksackverpflegung.",
  tips: [{name: "Barfußpfad Bad Marienberg", note: "Sinnliche Erfrischung mit verschiedenen Untergründen"}, {name: "Brückenviadukt im Wald", note: "Historisches Relikt der ehemaligen Bahnstrecke"}, {name: "Kneipp-Kurort Bad Marienberg", note: "Apotheker-Heilpflanzengarten, Kurpark"}],
  literature: ["Leporello-Wanderkarte WesterwaldSteig 1:25.000"],
  start: {name: "Nistertal", address: "Bahnhofstraße, 57647 Nistertal"}, destination: {name: "Bad Marienberg", address: "Bismarckstraße, 56470 Bad Marienberg"}
},

// ═══════════════════════════════════════════════════════════
// ETAPPE 8 – Bad Marienberg – Hachenburg  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 8, _status: "complete",
  title: "WesterwaldSteig 08. Etappe Bad Marienberg – Hachenburg (Ost-West)",
  km: "15,5", difficulty: "schwer", tags: "Wolfsteine, Wild- und Basaltpark, Hedwigsturm",
  sourceUrl: "https://www.westerwald.info/d/westerwaldsteig-08-etappe-bad-marienberg-hachenburg-ost-west/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=1522832&project=oar-rlp",
  tourenplanerUrl: "http://www.tourenplaner-rheinland-pfalz.de/de/tour/1522832/#dmdtab=oax-tab7",
  stats: {ascent: "414 hm", descent: "509 hm", duration: "5,0 h", highPoint: "530 m", lowPoint: "250 m"},
  description: {
    headline: "Wo der Teufel Steine warf und eine Perle des Westerwaldes glänzt",
    text: "Noch bevor deine Wanderung startet, gibt es in Bad Marienberg einiges zu entdecken: Der Basaltpark erzählt vom Abbau des typischen Westerwälder Gesteins, Wildpark und Kletterwald laden zum Freizeitvergnügen und der Hedwigsturm lässt dich einen wunderbaren Fernblick bestaunen – bei klarer Sicht bis zum Siebengebirge, in die Eifel und zum Feldberg. Jetzt zieht es dich zu den kurios anmutenden Wolfsteinen, bei deren Entstehung vor Millionen Jahren der Sage nach der Teufel seine Finger im Spiel gehabt haben soll. Schon von Weitem erkennst du das Barockschloss Hachenburgs. Auf dem Weg zur Perle des Westerwaldes genießt du die Stille beim denkmalgeschützten jüdischen Friedhof."
  },
  directions: {byCar: "Von Süden: über die B255 bis Bad Marienberg. Von Norden: über die B414 bis Bad Marienberg."},
  publicTransport: {
    arrival: "Bahn bis ICE-Bahnhof Montabaur, Bus bis Haltestelle Bad Marienberg Neuer Weg: Buslinie 463 (Mo–Fr).",
    returnTrip: "Bahn ab Hachenburg Bf oder Bus. Hessische Landesbahn (ca. 9 Min.).",
    stops: [{name: "Bad Marienberg, Neuer Weg", note: "ca. 150 m vom Hauptweg"}, {name: "Hachenburg Bf", note: "ca. 300 m Zuweg zum Hauptweg"}, {name: "Hachenburg Markt", note: "direkt am WesterwaldSteig"}],
    taxis: ["Hehn-Touristik, Alpenrod – Tel. 02662/3366", "Taxi Hilgers, Bad Marienberg – Tel. 02661/5055", "Taxi Nagel, Bad Marienberg – Tel. 02661/5949", "Taxi Schmidt GbR, Hachenburg – Tel. 02662/6119", "Taxi Uwe Bischoff, Hachenburg – Tel. 02662/944444"],
    moreInfoUrl: "https://www.westerwald.info/wandertouren-mit-bus-und-bahn/"
  },
  parking: [{location: "Bad Marienberg", free: "Zentrum (Bismarckstraße, Albrechtstraße, Im Bohnengarten, Tourist-Information)", paid: null}, {location: "Hachenburg", free: "Landschaftsmuseum Westerwald (Leipziger Str. 1)", paid: null}],
  routeDescription: {
    general: "Von der Tourist-Information führt der WesterwaldSteig durch den stillgelegten Basaltsteinbruch (Basaltpark) zum ganzjährig geöffneten Wildpark mit Falknerei. Am Hedwigsturm erwartet dich der berühmte Westerwaldblick. Weiter zum Kleinen und Großen Wolfstein, über naturbelassene Wege nach Stangenrod, ins Wäschbachtal und nach Unnau-Korb (Bahnanbindung). Durch den Hachenburger Stadtwald über den Philosophenweg zum jüdischen Friedhof mit beeindruckendem Blick aufs Siebengebirge. Ziel: die Löwenstadt Hachenburg mit dem Landschaftsmuseum."
  },
  safetyNotes: "Bei widrigen Wetterverhältnissen können naturnahe Wege matschig und rutschig werden.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Festes Schuhwerk, Rucksackverpflegung.",
  tips: [{name: "Basaltpark Bad Marienberg", note: "Stillgelegter Steinbruch mit Infos zum Basaltabbau"}, {name: "Wildpark mit Falknerei", note: "Ganzjährig geöffnet, Kletterwald"}, {name: "Hedwigsturm", note: "Fernblick bis Siebengebirge, Eifel und Feldberg"}, {name: "Wolfsteine", note: "Mächtige Basaltformation, der Sage nach vom Teufel geworfen"}, {name: "Barockschloss Hachenburg", note: "Wahrzeichen der Löwenstadt"}, {name: "Landschaftsmuseum Westerwald", note: "Einblick in vergangene Westerwälder Lebenswelten"}, {name: "Tourist-Info Hachenburg", note: "Westerwälder Kräuterbitter-Likör gratis nach Wanderung!"}],
  literature: ["Leporello-Wanderkarte WesterwaldSteig 1:25.000"],
  start: {name: "Bad Marienberg", address: "Bismarckstraße, 56470 Bad Marienberg"}, destination: {name: "Hachenburg", address: "Leipziger Str. 1, 57627 Hachenburg"}
},

// ═══════════════════════════════════════════════════════════
// ETAPPE 9 – Hachenburg – Limbach  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 9, _status: "complete",
  title: "WesterwaldSteig 09. Etappe Hachenburg – Limbach (Ost-West)",
  km: "11,6", difficulty: "mittel", tags: "Kloster Marienstatt, Kroppacher Schweiz, Nister",
  sourceUrl: "https://www.westerwald.info/d/westerwaldsteig-09-etappe-hachenburg-limbach-ost-west/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=1491573&project=oar-rlp",
  tourenplanerUrl: "http://www.tourenplaner-rheinland-pfalz.de/de/tour/1522833/#dmdtab=oax-tab7",
  stats: {ascent: "301 hm", descent: "384 hm", duration: "3,0 h", highPoint: "363 m", lowPoint: "200 m"},
  description: {
    headline: "Wo eine Löwenstadt glänzt und ein Kloster im Nistertal Ruhe schenkt",
    text: "Zu Beginn genießt du die gemütliche Atmosphäre auf dem Alten Markt in der mittelalterlichen Stadt Hachenburg und passierst das Landschaftsmuseum. Zur kleinen Holzbachschlucht wanderst du auf schmalen Wegen hinab – immer das muntere Plätschern des Baches im Ohr. Entlang der Nister erreichst du die Nistermühle, wo Konrad Adenauer im Zweiten Weltkrieg Unterschlupf fand. Schon bald gelangst du zur bekannten Zisterzienser-Abtei Marienstatt. Nach Besichtigung der neugotischen Basilika kannst du die friedliche Ruhe des Klostergartens genießen, bevor du dich zum Etappenziel Limbach aufmachst."
  },
  directions: {byCar: "Von Süden: über die B8 bis Höchstenbach, dann B413 Richtung Hachenburg. Von Norden: über die B414 bis Hachenburg."},
  publicTransport: {
    arrival: "Bahn aus Richtung Köln bzw. Limburg bis Haltestelle Hachenburg. Bahn bis ICE-Bahnhof Montabaur, Bus bis Hachenburg Markt.",
    returnTrip: "Bushaltestelle Limbach (wenige Hundert Meter vom Hauptweg). Alternativ: Rückfahrt mit Taxi.",
    stops: [{name: "Hachenburg Bf", note: "ca. 300 m Zuweg zum Hauptweg"}, {name: "Hachenburg Markt", note: "direkt am WesterwaldSteig"}, {name: "Limbach", note: "wenige Hundert Meter vom Hauptweg"}],
    taxis: ["Hehn-Touristik, Alpenrod – Tel. 02662/3366", "Taxi Schmidt GbR, Hachenburg – Tel. 02662/6119", "Taxi Uwe Bischoff, Hachenburg – Tel. 02662/944444"],
    moreInfoUrl: "https://www.westerwald.info/wandertouren-mit-bus-und-bahn/"
  },
  parking: [{location: "Hachenburg", free: "Landschaftsmuseum Westerwald (Leipziger Str. 1)", paid: null}],
  routeDescription: {
    general: "Durch die Altstadt und den Burggarten verlässt der WesterwaldSteig Hachenburg, überquert die Bahnlinie und wartet mit einer wunderbaren Aussicht auf das Siebengebirge auf. Auf Stufen hinab durch die zweite Holzbachschlucht, über die Nister zum Ort Nister und zur Nistermühle (Konrad-Adenauer-Gedenktafel). Der Nister folgend erreichst du Kloster Marienstatt mit neugotischer Basilika, Brauhaus und Biergarten. Vorbei an Marienbuchen, Marieneiche und der geschichtsträchtigen Meilereiche über Streithausen und entlang der Kleinen Nister nach Limbach."
  },
  safetyNotes: "In der Holzbachschlucht ist Trittsicherheit gefragt. Bei Nässe rutschige Stellen möglich.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Festes Schuhwerk, Rucksackverpflegung.",
  tips: [{name: "Altstadt Hachenburg", note: "Mittelalterlicher Alter Markt mit Fachwerkkulisse"}, {name: "Nistermühle", note: "Hier fand Konrad Adenauer im Krieg Unterschlupf"}, {name: "Kloster Marienstatt", note: "Zisterzienserkloster mit Basilika, Brauhaus und Biergarten", url: "https://www.abtei-marienstatt.de/"}, {name: "Holzbachschlucht (die zweite!)", note: "Naturerlebnis auf dem WesterwaldSteig"}],
  literature: ["Leporello-Wanderkarte WesterwaldSteig 1:25.000"],
  start: {name: "Hachenburg", address: "Leipziger Str. 1, 57627 Hachenburg"}, destination: {name: "Limbach", address: "Limbach"}
},

// ═══════════════════════════════════════════════════════════
// ETAPPE 10 – Limbach – Kloster Marienthal  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 10, _status: "complete",
  title: "WesterwaldSteig 10. Etappe Limbach – Kloster Marienthal (Ost-West)",
  km: "20,3", difficulty: "schwer", tags: "Naturpfad Weltende, Deutsches Eck des Westerwaldes, Kroppacher Schweiz",
  sourceUrl: "https://www.westerwald.info/d/westerwaldsteig-10-etappe-limbach-kloster-marienthal-ost-west/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=1550926&project=oar-rlp",
  tourenplanerUrl: "http://www.tourenplaner-rheinland-pfalz.de/de/tour/1550926/#dmdtab=oax-tab7",
  stats: {ascent: "661 hm", descent: "655 hm", duration: "7,0 h", highPoint: "400 m", lowPoint: "180 m"},
  description: {
    headline: "Wo Steinbrücken über die Nister führen und das Ende der Welt wartet",
    text: "Alte Steinbrücken und Holzstege führen dich immer wieder über das Wasser und prägen malerisch die Landschaft. Von Limbach aus führt die Wanderung zur Dachschiefergrube Assberg, wo du tief in die Erde hinabsteigst. Wenig später erlebst du einen sagenhaften Blick über die sanften Hügel der Kroppacher Schweiz am Aussichtspunkt Hohe Ley. Bei Heimborn erreichst du mit dem Deutschen Eck des Westerwaldes ein besonders schönes Fleckchen Erde, wo Kleine und Große Nister zusammenfließen. Nach einem entspannten Verweilen wird es mit dem Naturpfad Weltende anspruchsvoller – alpine Streckenführung über schmalste Wege."
  },
  directions: {byCar: "Von Hachenburg (Südosten): über die B414 bis Auffahrt Betzdorf/Nister, weiter auf der L288 bis Limbach."},
  publicTransport: {
    arrival: "Hessische Landesbahn Au-Limburg bis Haltestelle Ingelbach, von dort Zuweg zum WesterwaldSteig.",
    returnTrip: "Hessische Landesbahn ab Kloster Marienthal. Werktags einmal täglich Direktverbindung (Fahrzeit ca. 19 Min.).",
    taxis: ["Taxi Schmidt GbR, Hachenburg – Tel. 02662/6119", "Taxi Uwe Bischoff, Wissen – Tel. 02742/1055", "Taxi Jung, Hamm/Sieg – Tel. 02682/8555", "Personenbeförderung Schütz, Windeck – Tel. 02682/966588"],
    moreInfoUrl: "https://www.westerwald.info/wandertouren-mit-bus-und-bahn/"
  },
  parking: [{location: "Limbach", free: "Wanderparkplatz Limbach", paid: null}],
  routeDescription: {
    general: "Limbach verlässt der WesterwaldSteig auf einem Wiesenweg entlang der Kleinen Nister zum Bachlehrpfad Heunigs Höhlenweg und zum Aussichtspunkt Hohe Ley. Hier kann ein mittelalterliches Dachschieferbergwerk besichtigt werden. Ein Pfad führt über 200 m steil bergab zur Nister (Trittsicherheit!). Über Astert und Heuzert nach Heimborn zum Zusammenfluss von Großer und Kleiner Nister (Deutsches Eck des Westerwaldes). Über den Wanderparkplatz Heimborn nach Ehrlich (Gaststätte am Nisterstrand). Über die Spitze Ley zum Naturpfad Weltende – der durchquert unberührte Niederwaldflächen mit echter Steigqualität (Alternativstrecke: Marienwanderweg). Über Racksen durch den Staatsforst Altenkirchen nach Kloster Marienthal."
  },
  safetyNotes: "Der Naturpfad Weltende erfordert Trittsicherheit – alpine Streckenführung über schmalste Wege! Für weniger geübte Wanderer gibt es eine Alternativstrecke über den Marienwanderweg. Bei Limbach führt ein steiler Pfad 200 m bergab zur Nister.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Festes Schuhwerk mit gutem Profil (besonders für den Naturpfad Weltende!). Ausreichend Proviant und Getränke für die lange Etappe.",
  tips: [{name: "Dachschiefergrube Assberg", note: "Mittelalterliches Bergwerk, begehbar"}, {name: "Aussichtspunkt Hohe Ley", note: "Panoramablick über die Kroppacher Schweiz"}, {name: "Deutsches Eck des Westerwaldes", note: "Zusammenfluss von Großer und Kleiner Nister – einer der schönsten Plätze"}, {name: "Naturpfad Weltende", note: "Anspruchsvoller Steig durch unberührte Niederwälder"}, {name: "Aussichtspunkt Sonnenberg", note: "Fernblick über die traumhafte Landschaft"}, {name: "Kloster Marienthal", note: "Barocker Hochaltar, Bildungswerk der Erzdiözese Köln"}],
  literature: ["Leporello-Wanderkarte WesterwaldSteig 1:25.000"],
  start: {name: "Limbach", address: "Limbach"}, destination: {name: "Kloster Marienthal", address: "Marienthal"}
},

// ═══════════════════════════════════════════════════════════
// ETAPPE 11 – Kloster Marienthal – Weyerbusch  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 11, _status: "complete",
  title: "WesterwaldSteig 11. Etappe Kloster Marienthal – Weyerbusch (Ost-West)",
  km: "16,1", difficulty: "mittel", tags: "Beulskopf, Raiffeisenturm, Panoramablick",
  sourceUrl: "https://www.westerwald.info/d/westerwaldsteig-11-etappe-kloster-marienthal-weyerbusch-ost-west/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=1543859&project=oar-rlp",
  tourenplanerUrl: "http://www.tourenplaner-rheinland-pfalz.de/de/tour/1522835/#dmdtab=oax-tab7",
  stats: {ascent: "461 hm", descent: "432 hm", duration: "5,5 h", highPoint: "389 m", lowPoint: "200 m"},
  description: {
    headline: "Wo ein Turm den Blick bis zum Siebengebirge freigibt und Raiffeisens Erbe lebt",
    text: "Deine Wanderung startet in Marienthal mit seinem bekannten Kloster. An einigen schönen Fachwerkhäusern vorbei führt dein Weg auf die Höhen, wo der WesterwaldSteig 2007 aus der Taufe gehoben wurde. Der Beulskopf überragt die Landschaft und wie eine Antenne ragt der Raiffeisenturm um weitere 34 Meter in den Himmel. Was für eine Weitsicht! In der Ferne lassen sich das Bergische Land und das Siebengebirge am Rhein erspähen. Viel näher ist das Raiffeisenland, das sich zu deinen Füßen ausbreitet. Friedrich Wilhelm Raiffeisen erkannte hier früh die Not der Menschen und begründete die weltweit bekannte Genossenschaftsidee."
  },
  directions: {byCar: "Von Hachenburg: über die B414 bis Bhf. Ingelbach, weiter über L290 und B256 Richtung Hamm (Sieg) bis Abfahrt K51."},
  publicTransport: {
    arrival: "Hessische Landesbahn bis Kloster Marienthal.",
    returnTrip: "Buslinie 250 plus Bahnverbindung.",
    taxis: ["Taxi Uwe Bischoff, Wissen – Tel. 02742/1055", "Taxi Jung, Hamm/Sieg – Tel. 02682/8555"],
    moreInfoUrl: "https://www.westerwald.info/wandertouren-mit-bus-und-bahn/"
  },
  parking: [{location: "Kloster Marienthal", free: "Wanderparkplatz Marienthal", paid: null}],
  routeDescription: {
    general: "Vom Kloster Marienthal über den Kreuzweg durch Wald und über Wiesen zwischen Hilgenroth und Oberbach nach Westen. Aufwärts über die L267 zum Beulskopf mit dem Raiffeisenturm (34 m, umwerfende Fernsicht). Vom Beulskopf durch den Wald abwärts, vorbei an Oberirsen und in einer Schleife von Norden nach Weyerbusch."
  },
  safetyNotes: "Gerade bei widrigen Wetterverhältnissen kann es bei naturnahen Wegen zu matschigen Passagen kommen.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Festes Schuhwerk, Rucksackverpflegung.",
  tips: [{name: "Raiffeisenturm auf dem Beulskopf", note: "34 m hoch – Fernsicht bis Siebengebirge, Bergisches Land, Rothaargebirge"}, {name: "Kloster Marienthal", note: "Barocker Hochaltar, Bildungswerk der Erzdiözese Köln"}, {name: "Raiffeisenland", note: "Genossenschaftsidee-Heimat des berühmtesten Westerwälders"}],
  literature: ["Leporello-Wanderkarte WesterwaldSteig 1:25.000"],
  start: {name: "Kloster Marienthal", address: "Marienthal"}, destination: {name: "Weyerbusch", address: "Weyerbusch"}
},

// ═══════════════════════════════════════════════════════════
// ETAPPE 12 – Weyerbusch – Flammersfeld  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 12, _status: "complete",
  title: "WesterwaldSteig 12. Etappe Weyerbusch – Flammersfeld (Ost-West)",
  km: "14,6", difficulty: "mittel", tags: "Raiffeisenland, Mehrbachtal, Fachwerkdorf Mehren",
  sourceUrl: "https://www.westerwald.info/d/westerwaldsteig-12-etappe-weyerbusch-flammersfeld-ost-west/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=1533429&project=oar-rlp",
  tourenplanerUrl: "http://www.tourenplaner-rheinland-pfalz.de/de/tour/1522836/#dmdtab=oax-tab7",
  stats: {ascent: "377 hm", descent: "409 hm", duration: "4,0 h", highPoint: "380 m", lowPoint: "250 m"},
  description: {
    headline: "Wo Fachwerk erblüht und ein Genossenschaftler Geschichte schrieb",
    text: "Von Weyerbusch mit seinem Backes-Haus und dem Raiffeisendenkmal geht es ins Mehrbachtal. Der Weg ist wunderbar abwechslungsreich und mündet in einen wahren Traum für Fachwerkliebhaber. In Mehren gibt es 19 Stationen, die dich zu vielen schmucken Fassaden führen. Selbst die hübsche Kirche erstrahlt mit Fachwerk. Der dunkle Gewölbekeller war vor vielen Hundert Jahren Gemeindegefängnis. In Ahlbach erwarten dich weitere schöne Fachwerkhöfe – versteckte Dorfidylle hinter Schwarzdornhecken, wo Kletterrosen in bunten Bauerngärten ranken. Wie ein verwunschener Märchenwald wirkt der letzte Teil der Etappe."
  },
  directions: {byCar: "Von Norden: A3 über AK Bonn/Siegburg über die B8 Richtung Altenkirchen bis Ausfahrt Weyerbusch."},
  publicTransport: {
    arrival: "Buslinie 250 bis Weyerbusch Sonnenhof.",
    returnTrip: "Bushaltestelle Flammersfeld Rathaus (ca. 650 m Zuweg zum Hauptweg). Buslinien 120, 250.",
    stops: [{name: "Weyerbusch Sonnenhof", note: "ca. 100 m vom WesterwaldSteig"}, {name: "Flammersfeld Rathaus", note: "ca. 650 m Zuweg zum Hauptweg"}],
    taxis: ["Personenbeförderung Schütz, Windeck – Tel. 02682/966588", "Taxi Uwe Bischoff, Weyerbusch – Tel. 02686/1799", "Taxi Bischoff, Flammersfeld – Tel. 02685/589"],
    moreInfoUrl: "https://www.vg-altenkirchen-flammersfeld.de/bus-und-bahn-ww-steig"
  },
  parking: [{location: "Weyerbusch", free: "Ehemaliges Hotel Sonnenhof (Kölner Str. 33) oder Raiffeisen-Begegnungs-Zentrum (Raiffeisenstr. 2)", paid: null}, {location: "Flammersfeld", free: "Ortsmitte, Bürgerhaus, Rheinstr. 50", paid: null}],
  routeDescription: {
    general: "Vom ehemaligen Hotel Sonnenhof in Weyerbusch folgt der Steig der Kölner Straße Richtung Forstmehren. Über Wiesen ins Mehrbachtal und ins romantische Fachwerkdorf Mehren (19 Stationen Fachwerkrundweg). Weiter dem mäandernden Mehrbach folgend. Vorbei an Kescheid (Raststation) überrascht Ahlbach mit schönen Fachwerkhäusern und Bauerngärten. Durch einen Märchenwald zum Sportplatz, Flammersfeld im Westen umgehend zum Zielpunkt."
  },
  safetyNotes: "Keine besonderen Gefahrenstellen. Bei Nässe matschige Passagen möglich.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Festes Schuhwerk, Rucksackverpflegung.",
  tips: [{name: "Fachwerkdorf Mehren", note: "19 Stationen Fachwerkrundweg, Kirche mit Fachwerk, historischer Gewölbekeller"}, {name: "Raiffeisen-Begegnungszentrum Weyerbusch", note: "Geschichte des Genossenschaftswesens"}, {name: "Ahlbach", note: "Versteckte Fachwerkhöfe, Bauerngärten mit Kletterrosen"}],
  literature: ["Leporello-Wanderkarte WesterwaldSteig 1:25.000"],
  start: {name: "Weyerbusch", address: "Kölner Str. 33, Weyerbusch"}, destination: {name: "Flammersfeld", address: "Rheinstr. 50, Flammersfeld"}
},

// ═══════════════════════════════════════════════════════════
// ETAPPE 13 – Flammersfeld – Horhausen  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 13, _status: "complete",
  title: "WesterwaldSteig 13. Etappe Flammersfeld – Horhausen (Ost-West)",
  km: "15,3", difficulty: "schwer", tags: "Wiedtal, Hölderstein, Klettersteig, Kanzelblick",
  sourceUrl: "https://www.westerwald.info/d/westerwaldsteig-13-etappe-flammersfeld-horhausen-ost-west/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=1522837&project=oar-rlp",
  tourenplanerUrl: "http://www.tourenplaner-rheinland-pfalz.de/de/tour/1522837/#dmdtab=oax-tab7",
  stats: {ascent: "510 hm", descent: "436 hm", duration: "5,0 h", highPoint: "420 m", lowPoint: "180 m"},
  description: {
    headline: "Wo ein Klettersteig wartet und Heckrind-Auerochsen grasen",
    text: "Von Flammersfeld führt der WesterwaldSteig am Tierpark vorbei talwärts in Richtung Seifen. Weiter geht es an der Wied entlang durch Döttesfeld, um anschließend über das Himmelsleiterchen zum Kanzelblick zu gelangen. Höhepunkt der Tour ist der Aufstieg auf den Hölderstein, einem Ausläufer des mittelrheinischen Schiefergebirges, mit schöner Aussicht auf das renaturierte Grenzbachtal. Wo früher dichte Fichtenwälder den Blick ins Tal erschwerten, grasen heute Heckrinder, eine Nachzüchtung der Auerochsen. Neben dem WesterwaldSteig verläuft ein Klettersteig – der erste seiner Art im Westerwald (ca. 300 m, 80 m Höhenunterschied, ca. 15 Minuten)."
  },
  directions: {byCar: "A3 bis Ausfahrt 36 Neuwied und weiter über die B256 Richtung Flammersfeld."},
  publicTransport: {
    arrival: "Buslinien 120, 250 bis Flammersfeld.",
    returnTrip: "Buslinie 120 (täglich) ab Horhausen Kardinal-Höffner-Platz.",
    taxis: ["Taxi Bischoff, Flammersfeld – Tel. 02685/589"],
    moreInfoUrl: "https://www.vg-altenkirchen-flammersfeld.de/bus-und-bahn-ww-steig"
  },
  parking: [{location: "Flammersfeld", free: "Ortsmitte, Bürgerhaus", paid: null}, {location: "Horhausen", free: "Ortsmitte", paid: null}],
  routeDescription: {
    general: "Von Flammersfeld am Tierpark vorbei auf Wald- und Forstwegen talwärts Richtung Seifen. An der Wied entlang durch Döttesfeld, über das Himmelsleiterchen zum Kanzelblick. Aufstieg zum Hölderstein mit Panorama auf das renaturierte Grenzbachtal. Klettersteig über Krampen, Steigbügel, Stifte, drei Leitern und eine Brücke (ca. 300 m, 80 m Höhenunterschied). Weiter nach Horhausen."
  },
  safetyNotes: "Der Klettersteig am Hölderstein erfordert Trittsicherheit und Schwindelfreiheit! Normale Wanderer können den Hölderstein auch auf dem regulären Weg umgehen.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Festes Schuhwerk mit gutem Profil. Für den Klettersteig: Handschuhe empfohlen.",
  tips: [{name: "Kanzelblick bei Döttesfeld", note: "Aussichtspunkt über das Wiedtal"}, {name: "Hölderstein-Klettersteig", note: "Erster Klettersteig im Westerwald – ca. 300 m, 15 Min."}, {name: "Renaturiertes Grenzbachtal", note: "Heckrind-Auerochsen auf der Weide"}, {name: "Kneipp-Wassertretanlage Döttesfeld", note: "Direkt im Holzbach – erfrischende Pause"}],
  literature: ["Leporello-Wanderkarte WesterwaldSteig 1:25.000"],
  start: {name: "Flammersfeld", address: "Flammersfeld"}, destination: {name: "Horhausen", address: "Horhausen"}
},

// ═══════════════════════════════════════════════════════════
// ETAPPE 14 – Horhausen – Strauscheid  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 14, _status: "complete",
  title: "WesterwaldSteig 14. Etappe Horhausen – Strauscheid (Ost-West)",
  km: "18,1", difficulty: "schwer", tags: "Bildeiche, Lahrer Herrlichkeit, Bertenauer Kopf, Kloster Ehrenstein",
  sourceUrl: "https://www.westerwald.info/d/westerwaldsteig-14-etappe-horhausen-strauscheid-ost-west/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=1522838&project=oar-rlp",
  tourenplanerUrl: "http://www.tourenplaner-rheinland-pfalz.de/de/tour/1522838/#dmdtab=oax-tab7",
  stats: {ascent: "713 hm", descent: "792 hm", duration: "6,0 h", highPoint: "450 m", lowPoint: "180 m"},
  description: {
    headline: "Wo Kirchenmänner wurzeln, alte Bergmannspfade locken und ein Kloster im Wald ruht",
    text: "In Horhausen staunst du über den einstmals zahlreichen kirchlichen Nachwuchs. Gleich drei bedeutsame Kirchenmänner haben hier ihre Wurzeln, darunter ein Kölner Kardinal und ein Bischof in Trondheim. Von der Kirchstraße wanderst du vorbei an Kirche und Kardinal-Höffner-Denkmal. Über Niedersteinebach und das Wildgehege am Hotel Heiderhof geht es durch Stangenwald zur Bildeiche. Der Steig folgt dem alten Bergmannspfad nach Peterslahr. Wiedauenlandschaft begleitet den Weg nach Eulenberg. In Serpentinen auf den Bertenauer Kopf. Ein 1,4 km langer Zuweg führt zum Kloster Ehrenstein aus dem 15. Jahrhundert."
  },
  directions: {byCar: "A3 bis Ausfahrt 36 Neuwied, weiter über die B256 Richtung Flammersfeld bis Horhausen."},
  publicTransport: {
    arrival: "Hessische Landesbahn Au-Limburg bis Altenkirchen, weiter mit Buslinie 120 (täglich, ca. 30 Min.) bis Horhausen Kardinal-Höffner-Platz.",
    returnTrip: "Rückfahrt von Strauscheid nach Horhausen: Buslinie 141 nach Neustadt (Wied) (Mo–Fr, Anruf-Linien-Fahrt, 60 Min. vorher anmelden!), Umstieg Buslinie 125 (täglich, ca. 35 Min.).",
    stops: [{name: "Horhausen Kardinal-Höffner-Platz", note: "Buslinie 120"}, {name: "Strauscheid Friedhof", note: "Einstieg kurzes Stück weiter Richtung Ortsausgang"}],
    taxis: [],
    moreInfoUrl: "https://www.westerwald.info/wandertouren-mit-bus-und-bahn/"
  },
  parking: [{location: "Horhausen", free: "Ortsmitte", paid: null}, {location: "Strauscheid", free: "Friedhof", paid: null}],
  routeDescription: {
    general: "Von Horhausen vorbei an Kirche und Kardinal-Höffner-Denkmal Richtung Huf und Luchert. Über Niedersteinebach und Wildgehege am Hotel Heiderhof durch Stangenwald zur Bildeiche. Auf dem alten Bergmannspfad mit Blick auf Burglahr nach Peterslahr. Wiedauenlandschaft begleitet den Weg nach Eulenberg. In Serpentinen auf den Bertenauer Kopf. Zuvor weist ein 1,4 km langer Zuweg zum Kloster Ehrenstein. Weiter durch Naturschutzgebiet Bertenauer Kopf nach Strauscheid."
  },
  safetyNotes: "Anspruchsvolle Etappe mit über 700 hm Aufstieg und fast 800 hm Abstieg. Gute Kondition erforderlich.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Festes Schuhwerk, ausreichend Verpflegung für die lange Etappe.",
  tips: [{name: "Bildeiche", note: "Sagenumwobener Baum im Stangenwald"}, {name: "Kloster Ehrenstein", note: "Kreuzherrenorden aus dem 15. Jahrhundert (1,4 km Zuweg)"}, {name: "Naturschutzgebiet Bertenauer Kopf", note: "Artenreiche Flora und Fauna"}, {name: "Wildgehege am Hotel Heiderhof", note: "Bei Niedersteinebach"}],
  literature: ["Leporello-Wanderkarte WesterwaldSteig 1:25.000"],
  start: {name: "Horhausen", address: "Horhausen"}, destination: {name: "Strauscheid", address: "Strauscheid"}
},

// ═══════════════════════════════════════════════════════════
// ETAPPE 15 – Strauscheid – Waldbreitbach  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 15, _status: "complete",
  title: "WesterwaldSteig 15. Etappe Strauscheid – Waldbreitbach (Ost-West)",
  km: "15,5", difficulty: "schwer", tags: "Weißenfelser Ley, Roßbacher Häubchen, Weihnachtsdorf",
  sourceUrl: "https://www.westerwald.info/d/westerwaldsteig-15-etappe-dierdorf-waldbreitbach-ost-west/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=1522839&project=oar-rlp",
  tourenplanerUrl: "http://www.tourenplaner-rheinland-pfalz.de/de/tour/1522839/#dmdtab=oax-tab7",
  stats: {ascent: "709 hm", descent: "852 hm", duration: "5,5 h", highPoint: "400 m", lowPoint: "100 m"},
  description: {
    headline: "Wo Blicke in die Ferne schweifen, einst Feuer aus der Erde floss und das Christkind sich wohlfühlt",
    text: "Von Strauscheid aus geht es über aussichtsreiche Höhen mit Fernblicken von der Weißenfelser Ley und dem Roßbacher Häubchen über den Rhein-Westerwald Naturpark. Das Wiedtal mit seinen historischen Mühlen und der alten Schmiede begleitet dich nach Waldbreitbach – bekannt als Weihnachtsdorf mit der lebendigen Krippenausstellung. Die beiden Franziskanerklöster als Wahrzeichen des Wiedtals ragen gen Himmel und führen durch blühende Klostergärten."
  },
  directions: {byCar: "Über die B256 bis Strauscheid."},
  publicTransport: {
    arrival: "Buslinie 131 bis Strauscheid.",
    returnTrip: "Buslinie 131 ab Waldbreitbach.",
    taxis: [],
    moreInfoUrl: "https://www.westerwald.info/wandertouren-mit-bus-und-bahn/"
  },
  parking: [{location: "Strauscheid", free: "Friedhof", paid: null}, {location: "Waldbreitbach", free: "Parkplatz Marktstraße, 56588 Waldbreitbach", paid: null}],
  routeDescription: {
    general: "Von Strauscheid über aussichtsreiche Höhen zur Weißenfelser Ley und dem Roßbacher Häubchen. Fernblicke über den Naturpark Rhein-Westerwald. Abstieg ins Wiedtal mit historischen Mühlen und Kreuzkapelle. Am Ufer der Wied entlang nach Waldbreitbach. Dort erwartet dich das Weihnachtsdorf mit lebendiger Krippenausstellung und die beiden Franziskanerklöster."
  },
  safetyNotes: "Anspruchsvolle Etappe mit über 850 hm Abstieg. Knieschonende Wanderstöcke empfohlen.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Festes Schuhwerk, Wanderstöcke empfohlen, Rucksackverpflegung.",
  tips: [{name: "Weißenfelser Ley", note: "Aussichtspunkt mit Fernblick"}, {name: "Roßbacher Häubchen", note: "Aussichtspunkt über den Naturpark"}, {name: "Waldbreitbach – Weihnachtsdorf", note: "Lebendige Krippenausstellung, historische Mühlen"}, {name: "Franziskanerklöster", note: "Wahrzeichen des Wiedtals, Klostergärten"}],
  literature: ["Leporello-Wanderkarte WesterwaldSteig 1:25.000"],
  start: {name: "Strauscheid", address: "Strauscheid"}, destination: {name: "Waldbreitbach", address: "Marktstraße, 56588 Waldbreitbach"}
},

// ═══════════════════════════════════════════════════════════
// ETAPPE 16 – Waldbreitbach – Bad Hönningen/Rheinbrohl  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 16, _status: "complete",
  title: "WesterwaldSteig 16. Etappe Waldbreitbach – Bad Hönningen/Rheinbrohl (Ost-West)",
  km: "12", difficulty: "mittel", tags: "Klosterkirche Hausen, Limes, Rheinsteig, RömerWelt",
  sourceUrl: "https://www.westerwald.info/d/westerwaldsteig-16-etappe-waldbreitbach-bad-hoenningen-rheinbrohl-ost-west/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=1543862&project=oar-rlp",
  tourenplanerUrl: "http://www.tourenplaner-rheinland-pfalz.de/de/tour/1522840/#dmdtab=oax-tab7",
  stats: {ascent: "457 hm", descent: "478 hm", duration: "4,0 h", highPoint: "373 m", lowPoint: "60 m"},
  description: {
    headline: "Wo Klostergärten blühen, Römer Wache hielten und der Rhein wartet",
    text: "Die letzte Etappe des WesterwaldSteigs führt dich ins Rheintal nach Bad Hönningen. Sie ist mit 13 km nicht allzu lang und lässt genügend Zeit, vor dem Start einen Abstecher zum St. Marienhaus oberhalb von Waldbreitbach zu machen – das Kloster mit neogotischer Kirche und Kräutergarten mit biblischen Pflanzen. Am St. Josefshaus vorbei kletterst du auf schmalen Pfaden auf den Malberg mit seiner Skihütte und herrlicher Aussicht. Dann wanderst du entlang des UNESCO-Weltkulturerbes Limes, wo römische Legionäre einst die Grenze bewachten. In Rheinbrohl erwartet dich die RömerWelt, wo der Grenzverkehr zwischen Römern und Germanen anschaulich dargestellt wird."
  },
  directions: {byCar: "Über die B256 bis Waldbreitbach."},
  publicTransport: {
    arrival: "Buslinie 131 bis Waldbreitbach.",
    returnTrip: "Bahn ab Bad Hönningen oder Rheinbrohl (Rheintal-Strecke).",
    stops: [{name: "Waldbreitbach", note: "Parkplatz Marktstraße"}, {name: "Bad Hönningen/Rheinbrohl", note: "Erlebnismuseum RömerWelt"}],
    taxis: [],
    moreInfoUrl: "https://www.westerwald.info/wandertouren-mit-bus-und-bahn/"
  },
  parking: [{location: "Waldbreitbach", free: "Parkplatz Marktstraße, 56588 Waldbreitbach", paid: null}, {location: "Rheinbrohl-Arienheller", free: "Erlebnismuseum RömerWelt, Arienheller 1, 56598 Rheinbrohl", paid: null}],
  routeDescription: {
    general: "Am St. Josefshaus, dem Mutterhaus der Franziskanerbrüder in Hausen, vorbei. Auf schmalen Pfaden auf den Malberg (ganzjährig geöffnete Skihütte mit Aussicht auf das Wiedtal). Der WesterwaldSteig trifft in Arienheller auf den Rheinsteig (320 km von Wiesbaden nach Bonn). Hier bietet sich ein Besuch des Limes-Erlebnis-Zentrums RömerWelt an. Der Limes-Romanus begann in Rheinbrohl – seit 2005 UNESCO-Weltkulturerbe. Im Rheintal wachsen Weinreben, Pfirsiche und Feigenbäume – ein Beweis für das milde Klima."
  },
  safetyNotes: "Keine besonderen Gefahrenstellen. Abstieg über die Rheinhöhen kann bei Nässe rutschig sein.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Festes Schuhwerk, Rucksackverpflegung.",
  tips: [{name: "St. Marienhaus Waldbreitbach", note: "Kloster mit neogotischer Kirche und Kräutergarten (Abstecher vor dem Start)"}, {name: "Malberg-Skihütte", note: "Ganzjährig geöffnet, herrliche Aussicht aufs Wiedtal"}, {name: "RömerWelt Rheinbrohl", note: "Erlebniszentrum am Beginn des Limes (Caput Limitis)", url: "https://www.roemer-welt.de/"}, {name: "Rheinsteig-Kreuzung", note: "Der WesterwaldSteig trifft hier auf den 320 km langen Rheinsteig"}, {name: "Kneippbecken Waldbreitbach", note: "Erfrischung unterhalb des Weges"}],
  literature: ["Leporello-Wanderkarte WesterwaldSteig 1:25.000"],
  start: {name: "Waldbreitbach", address: "Marktstraße, 56588 Waldbreitbach"}, destination: {name: "Bad Hönningen/Rheinbrohl", address: "Arienheller 10, Bad Hönningen", coordinates: "N 50° 30\u2032 39.6\u2033 | O 7° 19\u2032 59.3\u2033"}
}

];