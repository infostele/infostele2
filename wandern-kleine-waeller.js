/**
 * Guck ma, Westerwald – Datendatei
 * Kleine Wäller (Spazierwege & Spazierwanderwege)
 * 
 * Quelle: westerwald.info
 * Stand: April 2026 – alle 14 Einträge aus Originaltexten verbatim
 * 
 * 14 Kleine Wäller, exakt wie auf westerwald.info gelistet.
 * Alle Einträge _status: "complete" und mit verbatim Originaltext aus westerwald.info.
 * 
 * Struktur analog zu DATA_WANDERN_WESTERWALDSTEIG:
 *   id, _status, title, subtitle, type, km, difficulty, tags,
 *   sourceUrl, gpxUrl, tourenplanerUrl,
 *   stats { ascent, descent, duration, highPoint, lowPoint },
 *   description { headline, text },
 *   directions { byCar },
 *   publicTransport { arrival, returnTrip, returnTripUrl, stops[], links[], taxis[], sustainableTip, sustainableTipUrls[], moreInfoUrl },
 *   parking [{ location, free, paid }],
 *   routeDescription { general, accessTrails[], accessTrailMarking },
 *   safetyNotes, safetyAppUrl, equipment,
 *   tips [{ name, note, url }],
 *   literature [],
 *   start { name, address, coordinates },
 *   destination { name, address, coordinates }
 */

var DATA_WANDERN_KLEINE_WAELLER = [

// ═══════════════════════════════════════════════════════════
// 1 – Häubchen-Tour (Breitscheid)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 1,
  _status: "complete",
  title: "Kleiner Wäller Häubchen-Tour",
  subtitle: "Breitscheid",
  type: "Spazierwanderweg",
  km: "5,5",
  difficulty: "Mittel",
  tags: "Roßbacher Häubchen, Vulkankegel, Basaltlehrpfad",
  sourceUrl: "https://www.westerwald.info/d/kleiner-waeller-haeubchen-tour-spazierwanderweg/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=116326927&project=oar-rlp",
  tourenplanerUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/116326927/",
  stats: {
    ascent: "98 hm",
    descent: "98 hm",
    duration: "1,6 h",
    highPoint: "334 m",
    lowPoint: "281 m"
  },
  description: {
    headline: null,
    text: "Der Rundweg hat seinen Namen von dem 350 m hohen Roßbacher Häubchen. Hierbei handelt es sich um einen erodierten Vulkankegel mit spannenden Basaltwänden und einem kleinen Basaltlehrpfad, der den Basaltabbau von 1883 bis 1942 erklärt. Bei der Kirche in der Ortsmitte kommt man an einem Spielplatz vorbei. Gegenüber befindet sich das Ausflugslokal und Restaurant „Zum Dorfkrug“ mit deutschen, italienischen und indischen Spezialitäten. Besonders empfehlenswert ist die Sonnenterrasse."
  },
  directions: {
    byCar: "Von Roßbach/Wied oder A3 Abfahrt Fernthal über die L 256"
  },
  publicTransport: {
    arrival: "VRM Linie 145 zwischen Waldbreitbach und Neustadt",
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [
      {
        name: "VRM Linie 145",
        url: "https://www.vrminfo.de/fileadmin/data/pdf/fahrplanbuecher/2024/145.pdf"
      }
    ],
    taxis: [],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {
      location: "Breitscheid",
      free: "Kostenfreier Parkplatz am Ortseingang, von Roßbach kommend, in der Roßbacher Straße",
      paid: null
    }
  ],
  routeDescription: {
    general: "Wir starten am Ortsrand von Breitscheid - L256 Richtung Roßbach, Ecke Waldstraße (kleiner, kostenloser Wanderparkplatz). Hier folgen wir der Straße „Sauerwiese“, bis der Wanderweg nach links auf einen Fußweg abzweigt. An Waldrändern entlang, über Wiesen und Felder gelangen wir der Beschilderung folgend bis zum Abzweig zum Roßbacher Häubchen, ein 350 m hoher, abgetragener Vulkankegel. Ein ca. 200 m langer Zuweg führt uns von dort zum Aussichtsplateau. Für geübte Wanderer ist der Aufstieg vom Aussichtsplateau bis hinauf auf den Gipfel unbedingt zu empfehlen (ein Stahlseil im Fels bietet mehr Trittsicherheit). Von der dortigen Panoramatafel bietet sich uns ein herrlicher Ausblick ins Wiedtal und bei schönem Wetter bis in die Eifel und das Siebengebirge. Wir gehen zurück zum Abzweig, wenden uns nach links und wandern durch einen kleinen Wald und weiter über Feld- und Wiesenwege bis zum Dorfbrunnen. Hier geht es ein Stück auf der „Brunnenstraße“ entlang, dann rechts entlang der Kirchstraße, vorbei an der Anna-Kapelle mit einem Altaraufsatz von 1480. Hier gibt es auch einen kleinen Spielplatz. Etwas unterhalb der Kapelle an der Hauptstraße befindet sich das Restaurant „Zum Dorfkrug“ mit deutscher, italienischer und indischer Küche. Vom Restaurant kommend macht die Hauptstraße (Roßbacher Straße) nach der Kapelle einen Rechtsknick. Kurz danach biegen wir rechts in die „Neue Straße“ ein und folgen der Beschilderung zurück zum Startpunkt unserer Wanderung.",
    accessTrails: [],
    accessTrailMarking: null
  },
  safetyNotes: "Aufstieg zum Gipfel nur für trittsichere Wanderer.",
  safetyAppUrl: null,
  equipment: "Festes Schuhwerk wird empfohlen.",
  tips: [
    {
      name: "Aussichtsplateau Roßbacher Häubchen",
      note: "Vom Aussichtsplateau auf dem Gipfel bietet sich ein herrlicher Ausblick ins frühlingshafte Wiedtal, bei guter Sicht sogar bis ins Siebengebirge und die Eifel.",
      url: null
    }
  ],
  literature: [
    "Wanderkarte der Verbandsgemeinde Rengsdorf-Waldbreitbach im Maßstab 1 : 16.000"
  ],
  start: {
    name: "Parkplatz Roßbacher Straße",
    address: "Breitscheid",
    coordinates: null
  },
  destination: {
    name: "Parkplatz Roßbacher Straße",
    address: "Breitscheid",
    coordinates: null
  }
},

// ═══════════════════════════════════════════════════════════
// 2 – Wied-Runde (Waldbreitbach)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 2,
  _status: "complete",
  title: "Kleiner Wäller Wied-Runde",
  subtitle: "Waldbreitbach",
  type: "Spazierweg",
  km: "3,0",
  difficulty: "Leicht",
  tags: "Wiedufer, Historische Mühlen, Klosterlandschaft",
  sourceUrl: "https://www.westerwald.info/d/kleiner-waeller-wied-runde-spazierweg/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=113242615&project=oar-rlp",
  tourenplanerUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/113242615/",
  stats: {
    ascent: "13 hm",
    descent: "13 hm",
    duration: "0,7 h",
    highPoint: "119 m",
    lowPoint: "105 m"
  },
  description: {
    headline: "Sehenswürdigkeiten unterwegs",
    text: "**Historische Mühlen & Handwerksmuseum & Bootsverleih**\nDie Ölmühle von 1676, Scheid’s Mühle und das Handwerksmuseum sind ein tolles Fotomotiv. Am Bootsverleih warten Ruder- und Tretboote auf Sie!\n\n**Dorfschmiede & Platz am Alten Kreuz**\nDie Dorfschmiede ist eines der ältesten Häuser im Ort. Das Alte Kreuz wurde 1737 errichtet und markiert noch heute den Dorfmittelpunkt.\n\n**Commende Waldbreitbach**\nSie ist der ehemalige Sitz des Deutschherren-Ritterordens und wird 1239 erstmals erwähnt. Sie wurde 2010 saniert und ist heute in Privatbesitz.\n\n**Evangelische Christuskirche**\nDas große Altarfensterbild greift Motive aus der Offenbarung des Johannes auf. Der separate Glockenturm beherbergt 3 Glocken aus Bronze.\n\n**Kath. Pfarrkirche Maria Himmelfahrt**\nDer Kirchturm ist aus dem 13. Jhd. erhalten. Zur Weihnachtszeit ist in der Kirche die weltgrößte Naturwurzelkrippe zu bewundern.\n\n**Kreuzkapelle**\n1694 erbaut wurde sie später zum Wallfahrtsort. Sie diente den Gründern des Franziskanerordens und der Franziskanerinnen zeitweise als Wohnung.\n\n**St. Josefshaus**\nDies ist das Gründerhaus des Ordens der Franziskanerbrüder vom Heiligen Kreuz in Hausen, in dem heute ein Alten- und Pflegeheim untergebracht ist.\n\n**St. Marienhaus Kloster**\nMutterhaus der Waldbreitbacher Franziskanerinnen mit Antoniuskirche, Kräutergarten, Tagungszentrum und Restaurant Klosterbergterrassen."
  },
  directions: {
    byCar: "Über die L255 im Wiedtal bis zur Ortsmitte von Waldbreitbach, hier ist der Parkplatz Marktstraße ausgeschildert"
  },
  publicTransport: {
    arrival: "VRM Linie 130 zwischen Neuwied und Neustadt / Wied",
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [
      {
        name: "VRM Linie 130",
        url: "https://ekap-download.vrs.de/downloads/linien/mini-fahrplan/2024_3130_VRM130.pdf"
      }
    ],
    taxis: [],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {
      location: "Waldbreitbach",
      free: "kostenfreier Parkplatz in der Marktstraße Waldbreitbach (ausgeschildert)",
      paid: null
    }
  ],
  routeDescription: {
    general: "Vom kostenfreien Parkplatz Marktstraße biegen wir links in die Straße „In der Au“ ein und gehen bis zu deren Ende. Weiter führt uns der Weg an der Schule vorbei Richtung Brücke (hier gibt es einen lohnenden Abstecher links zur Kreuzkapelle). Vor der Brücke gehen wir rechts am lieblichen Wiedufer entlang und überqueren dann die Fußgängerbrücke hin zu den Restaurants „Nassen´s Mühle“ und dem „PRIMA Hotel Vitabalance“. Nach einer kleinen Stärkung folgen wir rechts der Straße „Am Mühlenberg“ weiter am Wiedufer entlang, vorbei am Krippenmuseum mit 2.500 Krippen aus aller Welt, bis zur Brücke. Wir gehen über die Brücke zurück auf die andere Wiedseite und biegen nach der Brücke gleich links ab. Unser Weg führt uns zur Ölmühle (früher Speiseöl-Gewinnung aus Raps, Leinsamen und Bucheckern) und dem Handwerksmuseum (über 300-jähriges Fachwerkhaus). Samstags und sonntags wird das Gebäude als uriges Kaffeehaus genutzt. Wir gehen weiter über den Spielplatz, rechts vorbei am „Camping am Strandbad“ bis zur T-Kreuzung. Hier biegen wir rechts auf die Hauptstraße („Neuwieder Straße“) ab. Vorbei an der „Alten Dorfschmiede“ und einigen Geschäften und Einkehrmöglichkeiten gelangen wir zur Tourist-Information. Wenige Meter weiter biegen wir wieder rechts in die Marktstraße ein und gelangen zurück zum Parkplatz.",
    accessTrails: [],
    accessTrailMarking: null
  },
  safetyNotes: "keine besonderen Sicherheitshinweise",
  safetyAppUrl: null,
  equipment: "keine besondere Ausrüstung erforderlich",
  tips: [
    {
      name: "Wiedufer",
      note: "Viele Bänke am Wiedufer laden zum Verweilen und Genuss der wärmenden Frühlingssonne ein.",
      url: null
    }
  ],
  literature: [
    "Wanderkarte Wiedtal im Maßstab 1: 25.000"
  ],
  start: {
    name: "Parkplatz Marktstraße Waldbreitbach",
    address: null,
    coordinates: null
  },
  destination: {
    name: "Parkplatz Marktstraße Waldbreitbach",
    address: null,
    coordinates: null
  }
},

// ═══════════════════════════════════════════════════════════
// 3 – MalbergSeeBlick (Hausen/Wied)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 3,
  _status: "complete",
  title: "Kleiner Wäller MalbergSeeBlick",
  subtitle: "Hausen/Wied",
  type: "Spazierwanderweg",
  km: "3,0",
  difficulty: "Mittel",
  tags: "Malbergsee, Basaltlehrpfad, Klosterlandschaft Wiedtal",
  sourceUrl: "https://www.westerwald.info/d/kleiner-waeller-malbergseeblick/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=65818530&project=oar-rlp",
  tourenplanerUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/65818530/",
  stats: {
    ascent: "48 hm",
    descent: "48 hm",
    duration: "0,8 h",
    highPoint: "364 m",
    lowPoint: "316 m"
  },
  description: {
    headline: null,
    text: "Wir starten auf breiten Forstwegen am Wanderparkplatz in Hausen (OT Hähnen). Auf beiden Seiten des Weges sehen wir verschiedene Projekte zur Wiederaufforstung und genießen die weiten Aussichten. Auf der Hälfte des Weges können wir die kürzere Runde über den Forstweg zurück zum Parkplatz einschlagen oder dem Wiesenweg Richtung Tal folgen. Hier genießen wir fantastische Ausblicke auf die Klosterlandschaft des Wiedtals und die Höhen des Rengsdorfer Landes. Am Horizont entdecken wir die Grube Georg bei Willroth. Unser Weg führt uns einige Meter parallel zur Kreisstraße, die wir zweimal überqueren (Vorsicht). Ein Abstecher zum Aussichtsplateau am Malbergsee mit Liegeschaukel bietet einen tollen Blick auf die Basaltsteilwände. Auf dem Basaltlehrpfad können wir anhand der Schautafeln viel zum Basaltabbau erfahren. Unser Weg führt uns hoch zur Malberg-Hütte, hier können wir regionale Speisen und herrliche Aussichten auf der Sonnenterrasse genießen bevor es zurück zum Parkplatz geht."
  },
  directions: {
    byCar: null
  },
  publicTransport: {
    arrival: "Linie 146 zwischen Bad Hönningen und Roßbach (Haltestelle \"Reuschenbach Weißfeld\", dann Fußweg)",
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [
      {
        name: "Linie 146",
        url: "https://www.vrminfo.de/fileadmin/data/pdf/fahrplanbuecher/2024/faltplaene/146_FPL.pdf"
      }
    ],
    taxis: [],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {
      location: "Hausen (OT Hähnen)",
      free: "Kostenfreier Wanderparkplatz in 53547 Hausen (Ortsteil Hähnen)",
      paid: null
    }
  ],
  routeDescription: {
    general: "Wir starten auf breiten Forstwegen am Wanderparkplatz in Hausen (OT Hähnen). Auf beiden Seiten des Weges sehen wir verschiedene Projekte zur Wiederaufforstung und genießen die weiten Aussichten. Auf der Hälfte des Weges können wir die kürzere Runde über den Forstweg zurück zum Parkplatz einschlagen oder dem Wiesenweg Richtung Tal folgen. Hier genießen wir fantastische Ausblicke auf die Klosterlandschaft des Wiedtals und die Höhen des Rengsdorfer Landes. Am Horizont entdecken wir die Grube Georg bei Willroth. Unser Weg führt uns einige Meter parallel zur Kreisstraße, die wir zweimal überqueren (Vorsicht). Ein Abstecher zum Aussichtsplateau am Malbergsee mit Liegeschaukel bietet einen tollen Blick auf die Basaltsteilwände. Auf dem Basaltlehrpfad können wir anhand der Schautafeln viel zum Basaltabbau erfahren. Unser Weg führt uns hoch zur Malberg-Hütte, hier können wir regionale Speisen und herrliche Aussichten auf der Sonnenterrasse genießen bevor es zurück zum Parkplatz geht.",
    accessTrails: [],
    accessTrailMarking: null
  },
  safetyNotes: null,
  safetyAppUrl: null,
  equipment: "festes Schuhwerk, wetterangepasste Kleidung",
  tips: [
    {
      name: "Malbergsee und Malberg-Hütte",
      note: "Das Aussichtsplateau am Malbergsee lockt uns mit Liegeschaukel und die Malberg-Hütte mit regionalen Speisen in der wärmenden Frühlingssonne.",
      url: null
    }
  ],
  literature: [],
  start: {
    name: "Kostenfreier Wanderparkplatz",
    address: "53547 Hausen / OT Hähnen",
    coordinates: null
  },
  destination: {
    name: "Kostenfreier Wanderparkplatz",
    address: "53547 Hausen / OT Hähnen",
    coordinates: null
  }
},

// ═══════════════════════════════════════════════════════════
// 4 – Zwergenweg 2 (Rengsdorf)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 4,
  _status: "complete",
  title: "Kleiner Wäller Zwergenweg 2",
  subtitle: "Rengsdorf",
  type: "Spazierweg",
  km: "4,5",
  difficulty: "Mittel",
  tags: "Fledermaushöhle, Laubachtal, Gewässerlehrpfad",
  sourceUrl: "https://www.westerwald.info/d/kleiner-waeller-zwergenweg-2-spazierweg/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=104390062&project=oar-rlp",
  tourenplanerUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/104390062/",
  stats: {
    ascent: "99 hm",
    descent: "100 hm",
    duration: "1,3 h",
    highPoint: "330 m",
    lowPoint: "235 m"
  },
  description: {
    headline: null,
    text: "Der Kleine Wäller Zwergenweg 2 heißt „Fledermaus im Laubachtal“ und startet am Waldfestplatz in Rengsdorf nahe des Römergrabens, wo sich auch ein großer Spielplatz und das Restaurant „Clubhouse“ des Tennisclub Rengsdorf befinden. Im „Clubhouse“ erwarten Sie neben Steaks, Burgern oder Schnitzel auch Salate und Kuchen. Der Rundweg ist mit einer blauen Zwergenmütze markiert und durch seine 4,5 km und 230 Höhenmetern der anspruchsvollste der drei Zwergenwege. Die Strecke besteht hauptsächlich aus Wald- und Feldwegen. Der Zwergenweg ist auch mit dem Kinderwagen gut zu gehen.\n\n**Zwergenweg Rallye:** Nehmt euch am Start den Quizbogen (für die Altersgruppen 5-7 Jahre oder 8-10 Jahre) mit und löst unterwegs die spannende Rallye. Wer das richtige Lösungswort errät, bekommt ein kleines Geschenk in den Tourist-Informationen in Rengsdorf oder Waldbreitbach. Die Rallye gibt es am roten und am blauen Zwergenweg.\n\n**Lust auf mehr Abenteuer?** In Hümmerich beim Landhotel Fernblick ist Start und Ziel der beiden GPS-Rätsel-Touren „Kupfer“ und „Gold“ über knapp 5 km durch Wald und Wiesen, Dauer ca. 2,5 Stunden. Jede Tour setzt sich aus 10 spannenden und kniffligen Rätseln zusammen. Am Ziel findet ihr eine Schatzkiste und müsst einen Zahlencode knacken. Spiel-Voraussetzung sind die Wegpunktkarten und GPS-Geräte, die auch im Hotel ausgeliehen werden können (gerne vorab reservieren, kostenfrei, Personalausweis ist zu hinterlegen)."
  },
  directions: {
    byCar: "B256 bis Rengsdorf und im Ort der Ausschilderung zum Waldfestplatz Rengsdorf (Bayerstraße) folgen"
  },
  publicTransport: {
    arrival: "VRM Linie 120 zwischen Neuwied und Altenkirchen · VRM Linie 160 zwischen Neuwied und Straßenhaus",
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [
      {
        name: "VRM Linie 120",
        url: "https://bischoff-touristik.de/wp-content/uploads/2016/11/120-2.pdf"
      },
      {
        name: "VRM Linie 160",
        url: "https://ekap-download.vrs.de/downloads/linien/mini-fahrplan/2024_3160_VRM160.pdf"
      }
    ],
    taxis: [],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {
      location: "Rengsdorf",
      free: "Kostenfreier Parkplatz am Waldfestplatz in Rengsdorf",
      paid: null
    }
  ],
  routeDescription: {
    general: "Vom Parkplatz Waldfestplatz gehen wir - immer der blauen Zipfelmütze nach und parallel mit dem Klosterweg - in Richtung Grillhütte (falls wir den Weg in der anderen Richtung laufen möchten, verlassen wir den Klosterweg und biegen ab über die B256). Ansonsten folgen wir (wie in der Karte ausgezeichnet) dem Kloster- und dem Zwergenweg weiter bis zur oberen Wanderbrücke über die B256. Nach der Überquerung halten wir uns auf dem Wanderweg links und folgen der Wegführung bis zur Laubachswinkel-Hütte. 100 m weiter kommt der Steg, hier überqueren wir den Laubach. Am anderen Ufer geht es links zurück (hier verlassen wir den Klosterweg) und nach ca. 200 m noch einmal über eine kleine Brücke. Weiter bergab gelangen wir zur Fledermaushöhle. Nach ca. 400 m geht es auf der gegenüberliegenden Bachseite wieder leicht bergauf. 200 m weiter befindet sich eine Infotafel zum „Gewässerlehrpfad“. Kurz vor der Laubachswinkel-Hütte gehen wir rechts Richtung Parkplatz. Auf dem Rückweg überqueren wir nochmals die B256, wir gehen an der Tennishütte und dem Restaurant „Clubhouse“ vorbei und kommen noch zu einem großem Spielplatz.",
    accessTrails: [],
    accessTrailMarking: "blaue Zwergenmütze"
  },
  safetyNotes: "Keine besonderen Hinweise",
  safetyAppUrl: null,
  equipment: "keine besondere Ausrüstung erforderlich",
  tips: [
    {
      name: "Zwergenwege 1 und 3",
      note: "Auch die Zwergenwege 1 „Wasserspaß und Wildgehege“ und 3 „Apfelweg am Kräutergarten“ locken uns im Frühling mit bunten Blumen-Farbtupfern auf den Wiesen.",
      url: null
    }
  ],
  literature: [
    "Wanderkarte der Verbandsgemeinde Rengsdorf-Waldbreitbach im Maßstab 1 : 16.000"
  ],
  start: {
    name: "Waldfestplatz",
    address: "Rengsdorf",
    coordinates: null
  },
  destination: {
    name: "Waldfestplatz",
    address: "Rengsdorf",
    coordinates: null
  }
},

// ═══════════════════════════════════════════════════════════
// 5 – Löwenspur 1 orange (Hachenburg)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 5,
  _status: "complete",
  title: "Kleiner Wäller Löwenspur 1 (orange)",
  subtitle: "Hachenburg",
  type: "Spazierwanderweg",
  km: "6,5",
  difficulty: "Mittel",
  tags: "Nistertal, Nistermühle, Konrad Adenauer, Alter Markt",
  sourceUrl: "https://www.westerwald.info/d/kleiner-waeller-loewenspur-1-orange-hachenburg-spazierwanderweg/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=55681021&project=oar-rlp",
  tourenplanerUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/55681021/",
  stats: {
    ascent: "134 hm",
    descent: "137 hm",
    duration: "1,8 h",
    highPoint: "379 m",
    lowPoint: "245 m"
  },
  description: {
    headline: null,
    text: "Der orangene Weg erfordert eine durchschnittliche Fitness, feste Schuhe und Spaß an steilen Auf- und Abstiegen. Es geht an der Großen Nister entlang durch das tiefgrüne, weitläufige Nistertal. Es gibt im Wegeverlauf steigähnliche Passagen, schmale und kurvige Stellen, die Wanderer mit Höhenangst vor eine Herausforderung stellen könnten.\n\nAn der Nistermühle - der ältesten Hachenburger Mühle - vorbei (hier versteckte sich Konrad Adenauer vor der Verfolgung durch die Nationalsozialisten) wandert man hinauf zu tollen Ausblicken über die Nister. Von dort geht es zurück durch die historische Hachenburger Innenstadt mit ihrem Alten Markt und dem Löwen-Brunnen – der perfekte Ort für eine Rast bevor es durch den Burggarten zum Zielpunkt des Pfades geht."
  },
  directions: {
    byCar: "**Von Bad Marienberg (Osten):** Wir verlassen Bad Marienberg über die L294 und biegen am Ende der Straße nach links auf die B414 ein. Dieser Straße folgen wir durch Kirburg durch und an Norken vorbei. Nach etwa neun Kilometern verlassen wir die B414 nach links auf die L281, der wir bis nach Hachenburg folgen.\n\n**Von Altenkirchen (Westen):** Wir fahren über die B414 bis zum kreisel vor Hachenburg, den wir an der ersten Ausfahrt in Richtung Hachenburg auf die B413 verlassen. An der ersten Abbiegemöglichkeit nach links (hinter dem Bahnübergang) verlassen wir die Straße und fahren auf die L288 ein. Dieser Straße folgen wir bis nach Hachenburg.\n\n**Von Höchstenbach (Südwesten):** Wir folgen der B413, bis wir die Straße nach rechts in die Koblenzer Straße abbiegen. Dieser Straße folgen wir bis nach Hachenburg.\n\n**Von Betzdorf (Norden):** Wir folgen der L288 aus Betzdorf raus. An der Abbiegung in Richtung Marienstatt biegen nach rechts wir auf die K21 ab. Direkt danach biegen wir nach links ab, um auf der K21 zu bleiben. Wir folgen der Straße, bis wir an eine Kreuzung kommen, an der wir nach links auf die B414 in Richtung Hachenburg abbiegen. In dem Kreisverkehr nehmen wir die erste Ausfahrt in Richtung Hachenburg, wobei wir auf die B413 auffahren. Diese Straße verlassen wir nach dem Bahnübergang nach links auf die L288, der wir folgen, bis wir in Hachenburg sind."
  },
  publicTransport: {
    arrival: "Mit der Hessischen Landesbahn bis Bahnhof Hachenburg, ab dort Fußweg von ca. 300 m bis zum Startpunkt, Burggarten Hachenburg.\n\nVon Altenkirchen aus mit der Buslinie 289 in Richtung Helmeroth bis zum Schul-/Sportzentrum fahren. Dort in die Buslinie 408 in Richtung Hachenburg umsteigen. Von der Haltestelle am Markt sind es ca. 5 Minuten Fußweg bis zum Startpunkt am Burggarten, Alexanderring, Hachenburg.\n\nVon Bad Marienberg aus mit der Buslinie 960 in Richtung Hachenburg. Von der Haltestelle am Markt sind es ca. 5 Minuten Fußweg bis zum Startpunkt am Burggarten, Alexanderring, Hachenburg.",
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [],
    taxis: [
      {
        name: "Taxi Schmidt",
        location: "Hachenburg",
        phone: "02662/6119 oder 02662/6688"
      },
      {
        name: "Taxi Uwe Bischoff",
        location: "Hachenburg",
        phone: "02662/944444"
      },
      {
        name: "Taxi Kappi-Tullius",
        location: "Hachenburg",
        phone: "02662/939390"
      },
      {
        name: "Taxi Hilgers",
        location: "Bad Marienberg",
        phone: "02661/5055"
      },
      {
        name: "Taxiunternehmen Kevin Nagel",
        location: "Bad Marienberg",
        phone: "02661/5949"
      },
      {
        name: "Taxi Uwe Bischoff",
        location: "Altenkirchen",
        phone: "02681/2222"
      },
      {
        name: "Taxi Uwe Bischoff",
        location: "Wissen",
        phone: "02742/1055"
      }
    ],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {
      location: "Hachenburg",
      free: "kostenfreier Parkplatz \"Am Burggarten\", Alexanderring, 57627 Hachenburg, Einfahrt zum Parkhotel Hachenburg",
      paid: null
    }
  ],
  routeDescription: {
    general: "An dem Infopunkt den Weg in den Burggarten nehmen. Nach ca 60 m links auf dem Weg abbiegen und der orangen Löwentatzen-Beschilderung folgen. Im Burggarten vor dem Landschaftsmuseum links abbiegen und den Burggarten über die untere Maueröffnung verlassen. Die Straße queren, links halten und bei der ersten Abzweigung rechts abbiegen. Diesen Wiesenweg bis zur Bahnüberquerung (Brücke links) folgen.\n\nHinter der Bahnbrücke sofort rechts abbiegen. Hier hat man einen schönen Blick auf das Tal der Nister. Achtung es geht nach wenigen Metern steil bergab. Der Beschilderung durch das Holzbachtal bis zur Nisterbrücke folgen.\n\nWeiter geradeaus bis hinter den Philipps Sonderpostenmarkt. Hinter dem Markt sofort links dem Gehweg folgen. Am Ende des Gehweges links halten („Dorfwiese“) und nach ca. 150 m links in die „Hachenburger Straße“ einbiegen. Nach etwa 150 Metern rechts in die Straße \"Unterste Bitze\" abbiegen. Nach 100 Meter wieder links die Straße in den Gehweg verlassen. Jetzt führt der Weg durch die ebenen Wiesen des Nistertals. Am Ende dieses Weges links in die Friedhofsstraße abbiegen. Diesem Weg ca. 500 Meter bis hinter der Straßenunterführung (L288) folgen. Geradeaus weiter bis zur Nistermühle. Über die Fußgängerbrücke die Nister queren. In der Mühle hatte sich Konrad Adenauer 1944 vor den Nazis versteckt. Daran erinnert die Konrad Adenauer Gedenkplatte an dem Wohngebäude (Privatgrundstück).\n\nWeiter geht es links bergauf bis über die Straßenbrücke. Die Straße hier in den Pfad über die Wiese verlassen. Den \"Marienstätter Weg\" passieren und \"Zur Tiefenbach\" hochgehen. Am Cadillac-Museum links weiter und hinter dem Bahnübergang links in die Bahnhofstraße abbiegen. Am Bahnhof vorbei der Bahnhofstraße hoch bis zum Neumarkt folgen. Den Neumarkt in südlicher Richtung in die Wilhelmstraße (Fußgängerzone) verlassen. Über die Wilhelmstraße zum Alten Markt gehen. Der \"Alte Markt\" mit Löwenbrunnen ist das barocke, historische Zentrum von Hachenburg. Den Alten Markt nach Osten links oder rechts der Evangelischen Kirche bis zur Kreuzung Borngasse - Leipziger Straße - Alexanderring. Hier beginnt der Burggarten. Links nach ca. 150 m hat man Start- und Zielpunkt wieder erreicht.",
    accessTrails: [],
    accessTrailMarking: "orange Löwentatze"
  },
  safetyNotes: [
    "Der Weg erfordert eine durchschnittliche Fitness, feste Schuhe und Spaß an steilen Auf- und Abstiegen.",
    "Tragen Sie festes Schuhwerk sowie witterungsangepasste, zweckmäßige Kleidung, die Sie vor Kälte und Nässe bzw. Hitze und Sonne schützt.",
    "Nehmen Sie ausreichend Flüssigkeit mit. Es sind nicht überall Einkehrmöglichkeiten vorhanden.",
    "Bitte ziehen Sie auf dem Weg angemessene Wanderschuhe an, welche Ihnen ausreichend Halt auch auf schlüpfrigen und steilen bzw. felsigen und unebenen Wegen geben.",
    "Sollten Sie bei bestimmten Wegabschnitten der Meinung sein, dass diese für Sie nicht begehbar sind, dann sollten Sie diese umgehen. Gerade bei widrigen Wetterverhältnissen kann es bei naturnahen Wegen zu matschigen und rutschigen Passagen kommen.",
    "Besonders im Herbst ist auch darauf zu achten, dass das am Boden liegende Laub Unebenheiten, Wurzeln, Steine oder Löcher im Weg verdecken kann. Mit Wegebeeinträchtigungen dieser Art müssen Sie rechnen, wenn Sie eine Wanderung unternehmen.",
    "Obwohl der Weg durchgehend sehr gut markiert ist, sollten Sie aus Sicherheitsgründen immer eine geeignete Wanderkarte dabei haben."
  ],
  safetyAppUrl: null,
  equipment: "Wanderschuhe werden empfohlen.",
  tips: [
    {
      name: "Burggarten Hachenburg",
      note: "Der Burggarten lädt mit seinen vielen Picknickmöglichkeiten und einem tollen Spielplatz für die Kids zum Verweilen ein.",
      url: null
    }
  ],
  literature: [],
  start: {
    name: "Parkplatz \"Am Burggarten\"",
    address: "Alexanderring, 57627 Hachenburg, Einfahrt zum Parkhotel Hachenburg",
    coordinates: null
  },
  destination: {
    name: "Parkplatz \"Am Burggarten\"",
    address: "Alexanderring, 57627 Hachenburg, Einfahrt zum Parkhotel Hachenburg",
    coordinates: null
  }
},

// ═══════════════════════════════════════════════════════════
// 6 – Löwenspur 2 rot (Hachenburg)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 6,
  _status: "complete",
  title: "Kleiner Wäller Löwenspur 2 (rot)",
  subtitle: "Hachenburg",
  type: "Spazierwanderweg",
  km: "7,9",
  difficulty: "Mittel",
  tags: "Hachenburger Stadtwald, Judenfriedhof, Ziegelhütte, Alter Markt",
  sourceUrl: "https://www.westerwald.info/d/kleiner-waeller-loewenspur-2-rot-hachenburg-spazierwanderweg/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=55680978&project=oar-rlp",
  tourenplanerUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/55680978/",
  stats: {
    ascent: "100 hm",
    descent: "100 hm",
    duration: "2,0 h",
    highPoint: "439 m",
    lowPoint: "346 m"
  },
  description: {
    headline: null,
    text: "Durch den Burggarten und vorbei am Landschaftsmuseum führt dieser Weg auch am alten Judenfriedhof entlang zu den Bodendenkmälern in der Nähe der ehemaligen Ziegelhütte.\n\nDer Hachenburger Stadtwald ist die Heimat unterschiedlichster, faszinierender Baumarten. Ein idealer Weg, um Ruhe und Weite zu genießen. Es gibt traumhafte Aussichten auf Hachenburg und das umliegende Herz des Westerwaldes zu entdecken. Bevor es wieder durch den Burggarten zum Zielpunkt des Weges geht, lädt die historische Hachenburger Innenstadt zu einem kleinen Bummel und einer Pause auf dem Alten Markt mit ihrem goldenen Löwen ein."
  },
  directions: {
    byCar: "**Von Bad Marienberg (Osten):** Wir verlassen Bad Marienberg über die L294 und biegen am Ende der Straße nach links auf die B414 ein. Dieser Straße folgen wir durch Kirburg durch und an Norken vorbei. Nach etwa neun Kilometern verlassen wir die B414 nach links auf die L281, der wir bis nach Hachenburg folgen.\n\n**Von Altenkirchen (Westen):** Wir fahren über die B414 bis zum kreisel vor Hachenburg, den wir an der ersten Ausfahrt in Richtung Hachenburg auf die B413 verlassen. An der ersten Abbiegemöglichkeit nach links (hinter dem Bahnübergang) verlassen wir die Straße und fahren auf die L288 ein. Dieser Straße folgen wir bis nach Hachenburg.\n\n**Von Höchstenbach (Südwesten):** Wir folgen der B413, bis wir die Straße nach rechts in die Koblenzer Straße abbiegen. Dieser Straße folgen wir bis nach Hachenburg.\n\n**Von Betzdorf (Norden):** Wir folgen der L288 aus Betzdorf raus. An der Abbiegung in Richtung Marienstatt biegen nach rechts wir auf die K21 ab. Direkt danach biegen wir nach links ab, um auf der K21 zu bleiben. Wir folgen der Straße, bis wir an eine Kreuzung kommen, an der wir nach links auf die B414 in Richtung Hachenburg abbiegen. In dem Kreisverkehr nehmen wir die erste Ausfahrt in Richtung Hachenburg, wobei wir auf die B413 auffahren. Diese Straße verlassen wir nach dem Bahnübergang nach links auf die L288, der wir folgen, bis wir in Hachenburg sind."
  },
  publicTransport: {
    arrival: "Mit der Hessischen Landesbahn bis Bahnhof Hachenburg, ab dort Fußweg von ca. 300 m bis zum Startpunkt, Burggarten Hachenburg.\n\nVon Altenkirchen aus mit der Buslinie 289 in Richtung Helmeroth bis zum Schul-/Sportzentrum fahren. Dort in die Buslinie 408 in Richtung Hachenburg umsteigen. Von der Haltestelle am Markt sind es ca. 5 Minuten Fußweg bis zum Startpunkt am Burggarten, Alexanderring, Hachenburg.\n\nVon Bad Marienberg aus mit der Buslinie 960 in Richtung Hachenburg. Von der Haltestelle am Markt sind es ca. 5 Minuten Fußweg bis zum Startpunkt am Burggarten, Alexanderring, Hachenburg.",
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [],
    taxis: [
      {
        name: "Taxi Schmidt",
        location: "Hachenburg",
        phone: "02662/6119 oder 02662/6688"
      },
      {
        name: "Taxi Uwe Bischoff",
        location: "Hachenburg",
        phone: "02662/944444"
      },
      {
        name: "Taxi Kappi-Tullius",
        location: "Hachenburg",
        phone: "02662/939390"
      },
      {
        name: "Taxi Hilgers",
        location: "Bad Marienberg",
        phone: "02661/5055"
      },
      {
        name: "Taxiunternehmen Kevin Nagel",
        location: "Bad Marienberg",
        phone: "02661/5949"
      },
      {
        name: "Taxi Uwe Bischoff",
        location: "Altenkirchen",
        phone: "02681/2222"
      },
      {
        name: "Taxi Uwe Bischoff",
        location: "Wissen",
        phone: "02742/1055"
      }
    ],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {
      location: "Hachenburg",
      free: "kostenfreier Parkplatz \"Am Burggarten\", Alexanderring, 57627 Hachenburg, Einfahrt zum Parkhotel Hachenburg",
      paid: null
    }
  ],
  routeDescription: {
    general: "An dem Infopunkt den Weg in den Burggarten nehmen. Nach ca. 60 m links auf dem Weg abbiegen und immer der roten Löwentatzen-Beschilderung folgen. Den Burggarten an der oberen Maueröffnung nach rechts verlassen. Am Landschaftsmuseum vorbei die Leipziger Straße am Zebrastreifen queren und links geradeaus in den Dehlinger Weg einbiegen. An der Gabelung links durch die später beginnende Kastanienallee weitergehen bis auf der linken Seite der Judenfriedhof beginnt. Hier einbiegen und nach ca. 80 m rechts weitergehen. An diesem Wegeteil hat man einen sehr schönen Ausblick auf das Nistertal.\n\nGeradeaus weiter bis auf der linken Seite der Wald beginnt, hier rechts abbiegen bis zur Teerstraße und diese an dem Bogenschießplatz vorbei weiter in den Wald folgen. Hinter dem auf der linken Seite befindlichen Arboretum rechts abbiegen und dem Weg ca. 300 m folgen.\n\nDer Weg endet an der „Ziegelhütte“. Hier stand einst die Ziegelbrennerei. Links weiter, nach ca. 250 Meter sind links und rechts des Weges mittelalterliche Erdwälle mit einem Durchlass noch sichtbar. In diesem Bereich befand sich auch die Wüstung Horhausen.\n\nAn der nächsten Kreuzung rechts in die „Lange Schneise“ einbiegen. Bei der nächsten Kreuzung links in Richtung Andachtswald weitergehen. Am Eingang des Andachtswalds rechts weiter bis über die Alpenroder Straße. (Vorsicht beim Passieren!) Geradeaus weiter bis zur nächsten Kreuzung. Dort rechts abbiegen. Diesem Weg ca. 800 Meter folgen bis der Rastpunkt „Hasenbitze“ am linken Waldrand auftaucht.\n\nDanach geht es links weiter bis zum Kneipp-Tretbecken. Am Tretbecken rechts abbiegen. Geradeaus über den Birkenweg ca. 650 Meter weiter bis zum Bootsweiher im Tal. Am Bootsweiher geradeaus den steilen Fußgängerweg ca. 100 Meter hoch bis zum Haingärtenweg. Links abbiegen und nach ca. 150 Meter rechts abbiegen. Dann immer geradeaus durch die Herrenstraße (hier lebten früher die hohen Beamten des Grafen und im v. Beustchen Haus auch die Hachenburger Literatin Albertine von Grün) bis zum „Alten Markt“.\n\nDer \"Alte Markt\" mit Löwenbrunnen ist das barocke, historische Zentrum von Hachenburg. Den Alten Markt nach Osten links oder rechts an der Evangelischen Kirche vorbei bis zur Kreuzung Borngasse - Leipziger Straße – Alexanderring verlassen. Hier beginnt der Burggarten. Links nach ca. 150 m hat man Start- und Zielpunkt wieder erreicht.",
    accessTrails: [],
    accessTrailMarking: "rote Löwentatze"
  },
  safetyNotes: [
    "Tragen Sie festes Schuhwerk sowie witterungsangepasste, zweckmäßige Kleidung, die Sie vor Kälte und Nässe bzw. Hitze und Sonne schützt.",
    "Nehmen Sie ausreichend Flüssigkeit mit. Es sind nicht überall Einkehrmöglichkeiten vorhanden.",
    "Bitte ziehen Sie auf dem Weg angemessene Wanderschuhe an, welche Ihnen ausreichend Halt auch auf schlüpfrigen und steilen bzw. felsigen und unebenen Wegen geben.",
    "Sollten Sie bei bestimmten Wegabschnitten der Meinung sein, dass diese für Sie nicht begehbar sind, dann sollten Sie diese umgehen. Gerade bei widrigen Wetterverhältnissen kann es bei naturnahen Wegen zu matschigen und rutschigen Passagen kommen.",
    "Besonders im Herbst ist auch darauf zu achten, dass das am Boden liegende Laub Unebenheiten, Wurzeln, Steine oder Löcher im Weg verdecken kann. Mit Wegebeeinträchtigungen dieser Art müssen Sie rechnen, wenn Sie eine Wanderung unternehmen.",
    "Obwohl der Weg durchgehend sehr gut markiert ist, sollten Sie aus Sicherheitsgründen immer eine geeignete Wanderkarte dabei haben."
  ],
  safetyAppUrl: null,
  equipment: "Festes Schuhwerk oder Laufschuhe sind ausreichend.",
  tips: [
    {
      name: "Landschaftsmuseum Westerwald",
      note: "Starte deine Tour mit einem Abstecher ins Landschaftsmuseum Westerwald – hier wird Geschichte lebendig!",
      url: null
    }
  ],
  literature: [],
  start: {
    name: "Parkplatz \"Am Burggarten\"",
    address: "Alexanderring, 57627 Hachenburg, Einfahrt zum Parkhotel Hachenburg",
    coordinates: null
  },
  destination: {
    name: "Parkplatz \"Am Burggarten\"",
    address: "Alexanderring, 57627 Hachenburg, Einfahrt zum Parkhotel Hachenburg",
    coordinates: null
  }
},

// ═══════════════════════════════════════════════════════════
// 7 – Löwenspur 3 blau (Hachenburg)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 7,
  _status: "complete",
  title: "Kleiner Wäller Löwenspur 3 (blau)",
  subtitle: "Hachenburg",
  type: "Spazierwanderweg",
  km: "7,5",
  difficulty: "Mittel",
  tags: "Rothbachgrotte, Gipfelkreuz, Hachenburger Brauerei, Eiskeller",
  sourceUrl: "https://www.westerwald.info/d/kleiner-waeller-loewenspur-3-blau-hachenburg-spazierwanderweg/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=55680928&project=oar-rlp",
  tourenplanerUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/55680928/",
  stats: {
    ascent: "169 hm",
    descent: "169 hm",
    duration: "2,0 h",
    highPoint: "425 m",
    lowPoint: "323 m"
  },
  description: {
    headline: null,
    text: "Der älteste Hachenburger Wasserbehälter liegt am Weg und die Rothbachgrotte lädt zum Innehalten und Durchatmen ein. Im Verlauf der Strecke gibt es am sog. „Gipfelkreuz“ einen wunderbaren Blick auf Hachenburg mit seinem Barockschloss. Durch den Ortsteil Altstadt mit der Hachenburger Brauerei, Hopfengarten und historischem Eiskeller, geht es zurück in die traditionsreiche Innenstadt mit ihrem Alten Markt und goldenem Löwen auf dem Brunnen. Hier lässt man die Seele baumeln, bevor es durch den Burggarten zum Zielpunkt geht."
  },
  directions: {
    byCar: "**Von Bad Marienberg (Osten):** Wir verlassen Bad Marienberg über die L294 und biegen am Ende der Straße nach links auf die B414 ein. Dieser Straße folgen wir durch Kirburg durch und an Norken vorbei. Nach etwa neun Kilometern verlassen wir die B414 nach links auf die L281, der wir bis nach Hachenburg folgen.\n\n**Von Altenkirchen (Westen):** Wir fahren über die B414 bis zum kreisel vor Hachenburg, den wir an der ersten Ausfahrt in Richtung Hachenburg auf die B413 verlassen. An der ersten Abbiegemöglichkeit nach links (hinter dem Bahnübergang) verlassen wir die Straße und fahren auf die L288 ein. Dieser Straße folgen wir bis nach Hachenburg.\n\n**Von Höchstenbach (Südwesten):** Wir folgen der B413, bis wir die Straße nach rechts in die Koblenzer Straße abbiegen. Dieser Straße folgen wir bis nach Hachenburg.\n\n**Von Betzdorf (Norden):** Wir folgen der L288 aus Betzdorf raus. An der Abbiegung in Richtung Marienstatt biegen nach rechts wir auf die K21 ab. Direkt danach biegen wir nach links ab, um auf der K21 zu bleiben. Wir folgen der Straße, bis wir an eine Kreuzung kommen, an der wir nach links auf die B414 in Richtung Hachenburg abbiegen. In dem Kreisverkehr nehmen wir die erste Ausfahrt in Richtung Hachenburg, wobei wir auf die B413 auffahren. Diese Straße verlassen wir nach dem Bahnübergang nach links auf die L288, der wir folgen, bis wir in Hachenburg sind."
  },
  publicTransport: {
    arrival: "Mit der Hessischen Landesbahn bis Bahnhof Hachenburg, ab dort Fußweg von ca. 300 m bis zum Startpunkt, Burggarten Hachenburg.\n\nVon Altenkirchen aus mit der Buslinie 289 in Richtung Helmeroth bis zum Schul-/Sportzentrum fahren. Dort in die Buslinie 408 in Richtung Hachenburg umsteigen. Von der Haltestelle am Markt sind es ca. 5 Minuten Fußweg bis zum Startpunkt am Burggarten, Alexanderring, Hachenburg.\n\nVon Bad Marienberg aus mit der Buslinie 960 in Richtung Hachenburg. Von der Haltestelle am Markt sind es ca. 5 Minuten Fußweg bis zum Startpunkt am Burggarten, Alexanderring, Hachenburg.",
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [],
    taxis: [
      {
        name: "Taxi Schmidt",
        location: "Hachenburg",
        phone: "02662/6119 oder 02662/6688"
      },
      {
        name: "Taxi Uwe Bischoff",
        location: "Hachenburg",
        phone: "02662/944444"
      },
      {
        name: "Taxi Kappi-Tullius",
        location: "Hachenburg",
        phone: "02662/939390"
      },
      {
        name: "Taxi Hilgers",
        location: "Bad Marienberg",
        phone: "02661/5055"
      },
      {
        name: "Taxiunternehmen Kevin Nagel",
        location: "Bad Marienberg",
        phone: "02661/5949"
      },
      {
        name: "Taxi Uwe Bischoff",
        location: "Altenkirchen",
        phone: "02681/2222"
      },
      {
        name: "Taxi Uwe Bischoff",
        location: "Wissen",
        phone: "02742/1055"
      }
    ],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {
      location: "Hachenburg",
      free: "kostenfreier Parkplatz \"Am Burggarten\", Alexanderring, 57627 Hachenburg, Einfahrt zum Parkhotel Hachenburg",
      paid: null
    }
  ],
  routeDescription: {
    general: "An dem Infopunkt den Weg in den Burggarten nehmen. Nach ca. 60 m links auf dem Weg abbiegen und immer der blauen Löwentatze-Beschilderung folgen. Den Burggarten an der oberen Maueröffnung nach rechts verlassen. Am Landschaftsmuseum vorbei die Leipziger Straße am Zebrastreifen queren und links weitergehen und sofort rechts in den Adolphweg einbiegen. Nach 200 Metern kommt ein Steilstück! Nach dem Steilstück die Borngasse am Zebrastreifen queren und nach links abbiegen. Sofort in die Straße „Am Schwimmbad“ rechts einbiegen. Am Ende der Straße, vor dem Bootsweiher, nach links in den Birkenweg einbiegen. Diesen gerade aus bis in den Wald weiterlaufen. Am Kneipp-Tretbecken halbrechts vorbei gehen. Hier hat man einen Ausblick je nach Wetterlage bis zum Siebengebirge bei Bonn.\n\nHinter dem Wasserhochbehälter (der historische ist auf der linken Seite) geht es rechts weiter. An der nächsten Kreuzung links abbiegen und nach ca. 40 Meter wieder rechts abbiegen. Die Gehlerter Straße queren (Vorsicht!) und den Waldweg weiter in das Rothenbachtal. An der ersten Abzweigung rechts abbiegen, an der Brauereiquelle (linke Seite) vorbei um nach ca. 350 Meter links zur „Rothbachgrotte“ abzubiegen. Den Rothenbach queren und dem Weg (Steigcharakter) ca. 300 Meter folgen, bis zum Waldrand.\n\nHier die Steinebacher Straße überqueren. In die Straße „Vor der Heck“ einbiegen und sofort an der linken Seite neben der Garage den Waldweg nehmen. An einem Marienbildnis vorbei der Wegmarkierung bis zu der Teerstraße vor der Altstädter Grillhütte weitergehen. Nach rechts abbiegen und der Straße bis zum Altstädter Bergkreuz folgen. In diesem Bereich hat man sehr gute Panoramaaussichten auf Hachenburg und Umgebung.\n\nAm Altstädter Bergkreuz dem Grasweg entweder links oder rechts des Elektrozauns folgen bis zur Straße „Am Hebeberg“. Rechts halten bis in die „Bergstraße“. Dann links, die Steinebacher Straße queren und nach dem Briefkasten den Fußweg bis zur „Bleichstraße“ weiterlaufen. Auf der Bleichstraße immer links halten bis zu dem Altstädter „Mühlenbrunnen“ auf der rechten Seite. Bis zur nächsten Kreuzung weitergehen und dann rechts abbiegen bis zur Brauerei. Alternativ kann auch ein Abstecher in den „Bierpark“ der Hachenburger Brauerei gemacht werden.\n\nAm Gehlerter Weg beim Zebrastreifen die Seite wechseln und dann links weitergehen, nach ca. 70 Meter rechts den Fußweg weiterlaufen. An dem alten „Eiskeller“ der Brauerei vorbei bis zu dem Parkplatz des Kinderhauses. Den Parkplatz nach rechts passieren und sofort am Ende der Umzäunung den Gehweg auf der linken Seite bis zur „Lohmühle“ beim Löwenbad weiterlaufen.\n\nNach links in den „Bachweg“ einbiegen, diesen ca. 350 Meter immer geradeaus bis zum „Johann-August-Ring“ weiterlaufen, hier links und sofort am Steinweg rechts abbiegen.\n\nDurch die Wilhelmstraße (Fußgängerzone) bis zum „Alten Markt“.\n\nDer \"Alte Markt\" mit Löwenbrunnen ist das barocke, historische Zentrum von Hachenburg. Den Alten Markt nach Osten links oder rechts an der Evangelischen Kirche vorbei bis zur Kreuzung Borngasse - Leipziger Straße – Alexanderring verlassen. Hier beginnt der Burggarten. Links nach ca. 150 m hat man Start- und Zielpunkt wieder erreicht.",
    accessTrails: [],
    accessTrailMarking: "blaue Löwentatze"
  },
  safetyNotes: [
    "Besichtigung des Biergartens der Brauerei Hachenburg erfolgt auf eigene Gefahr. Der Biergarten ist kostenfrei und hat jederzeit geöffnet.",
    "Tragen Sie festes Schuhwerk sowie witterungsangepasste, zweckmäßige Kleidung, die Sie vor Kälte und Nässe bzw. Hitze und Sonne schützt.",
    "Nehmen Sie ausreichend Flüssigkeit mit. Es sind nicht überall Einkehrmöglichkeiten vorhanden.",
    "Bitte ziehen Sie auf dem Weg angemessene Wanderschuhe an, welche Ihnen ausreichend Halt auch auf schlüpfrigen und steilen bzw. felsigen und unebenen Wegen geben.",
    "Sollten Sie bei bestimmten Wegabschnitten der Meinung sein, dass diese für Sie nicht begehbar sind, dann sollten Sie diese umgehen. Gerade bei widrigen Wetterverhältnissen kann es bei naturnahen Wegen zu matschigen und rutschigen Passagen kommen.",
    "Besonders im Herbst ist auch darauf zu achten, dass das am Boden liegende Laub Unebenheiten, Wurzeln, Steine oder Löcher im Weg verdecken kann. Mit Wegebeeinträchtigungen dieser Art müssen Sie rechnen, wenn Sie eine Wanderung unternehmen.",
    "Obwohl der Weg durchgehend sehr gut markiert ist, sollten Sie aus Sicherheitsgründen immer eine geeignete Wanderkarte dabei haben."
  ],
  safetyAppUrl: null,
  equipment: "Leichte Wanderschuhe oder festes Schuhwerk (Laufschuhe) sind ausreichend.",
  tips: [
    {
      name: "Gipfelkreuz",
      note: "Am \"Gipfelkreuz\" genießt man einen tollen Ausblick auf Hachenburg sowie auf das Barockschloss.",
      url: null
    }
  ],
  literature: [],
  start: {
    name: "Parkplatz \"Am Burggarten\"",
    address: "Alexanderring, 57627 Hachenburg, Einfahrt zum Parkhotel Hachenburg",
    coordinates: null
  },
  destination: {
    name: "Parkplatz \"Am Burggarten\"",
    address: "Alexanderring, 57627 Hachenburg, Einfahrt zum Parkhotel Hachenburg",
    coordinates: null
  }
},

// ═══════════════════════════════════════════════════════════
// 8 – Basalt + Wasser (Greifenstein)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 8,
  _status: "complete",
  title: "Kleiner Wäller Basalt + Wasser",
  subtitle: "Greifenstein",
  type: "Spazierwanderweg",
  km: "7,7",
  difficulty: "Leicht",
  tags: "Ulmbachtalsperre, BASALT-PARKours, Burg Beilstein, Ulmtalradweg",
  sourceUrl: "https://www.westerwald.info/d/kleiner-waeller-basalt-wasser-greifenstein-spazierwanderweg/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=42055496&project=oar-rlp",
  tourenplanerUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/42055496/",
  stats: {
    ascent: "101 hm",
    descent: "101 hm",
    duration: "2,0 h",
    highPoint: "381 m",
    lowPoint: "280 m"
  },
  description: {
    headline: null,
    text: "Mein Weg beginnt auf dem Parkplatz der Ulmbachtalsperre. Über den Damm laufe ich am See entlang hinein in den Wald. Bald entdecke ich eine geologische Besonderheit: Eine Kammquarzit-Klippe – entstanden aus den ehemals reinen Sandstränden der Unterkarbonzeit. Ich folge dem Ulmbach über Wiesenwege und erreiche die Dorfmitte von Beilstein mit der schönen Basalt-Schlosskirche aus dem 17. Jahrhundert. Auf der linken Seite grüßt dann Burg Beilstein. Einst ein Grafensitz, befindet sich der restaurierte Basaltbau heute in Privatbesitz. Mein Weg führt mich über den plätschernden Ulmbach zum BASALT-PARKours, der mir die vielen Nutzungsarten des Steins aufzeigt. Über die Trasse der ehemaligen Ulmtalbahn, zum Ulmtalradweg ausgebaut, wandere ich zurück zur Ulmbachtalsperre. Unterwegs laden mich idyllische Rastplätze und Aussichtspunkte ein, die Umgebung zu genießen."
  },
  directions: {
    byCar: "**Aus Richtung Herborn:** auf B 277 bis Ehringshausen-Katzenfurt, dann auf L 3282 und L 3324 bis Ziel\n\n**Aus Richtung Wetzlar/Limburg:** auf B49 bis Leun-Biskirchen, dann auf L 3324 bis Ziel\n\n**Mit dem Fahrrad:** aus Richtung Westerwald über R7 und Ulmtalradweg, aus Richtung Lahntal über Lahntalradweg und Ulmtalradweg"
  },
  publicTransport: {
    arrival: "VLDW Linie 120/125 ab Wetzlar oder Weilburg, Haltestelle: Beilstein, Ulmtalsperre",
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [
      {
        name: "Fahrplan VLDW 120/125",
        url: "https://www.v-l-d.de/fileadmin/Fahrplaene_Lahn-Dill/2020/120-125.pdf"
      }
    ],
    taxis: [],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {
      location: "Ulmbachtalsperre",
      free: null,
      paid: "Parkplatz an der Ulmbachtalsperre, Ulmbachtalsperre 1, 35753 Greifenstein (möglicherweise kostenpflichtig)"
    }
  ],
  routeDescription: {
    general: "Vom kostenpflichtigen Parkplatz der Ulmbachtalsperre gehe ich zum Staudamm und studiere rechterhand die Infotafel zur Tour. Dann passiere ich den 280 Meter langen asphaltierten Damm und lasse meinen Blick über das Wasser schweifen. Am Ende angekommen erfahre ich von einer Tafel Wissenswertes über die Talsperre, wie etwa, dass sie 1963 bis 1966 gebaut wurde, um das Wasser des Ulmbachs zu stauen und die drei Ortschaften des Ulmtals vor Überflutung bei Hochwasser zu schützen. Ich ziehe weiter nach links auf einen befestigten Weg etwa 600 Meter um den halben Stausee herum in ein Waldgebiet. Dieses ist durch ein großes Ufergebiet vom Ulmbach getrennt, das der Renaturierung überlassen wird. Am Geotop Kammquarzitklippe, dem riesigen Überbleibsel aus der Unterkarbon-Zeit vor 340 Millionen Jahren, lege ich eine kleine Rast auf der Bank ein. Dann folge ich dem Bachlauf weiter und erreiche nach etwa 1,5 Kilometern den Ortsteil Beilstein, wo ich den Ulmbach zum ersten Mal überquere. Ich gehe rechts, etwa 100 Meter die Straße bergauf, biege dann links ab und spaziere etwa 800 Meter auf einem Wiesenweg und an Gärten vorbei in den Ort. Links führt der Weg zum Ulmbach, den ich erneut überquere, um dann rechts in die Herborner Straße abzubiegen. Links sehe ich die Schlosskirche aus Basalt, die von 1614 bis 1616 im Stil der Spätrenaissance erbaut wurde. Während ich weiter gehe, erhasche ich linkerhand einen Blick auf die Burg Beilstein, in der einst Grafen von Nassau-Beilstein und Nassau-Dillenburg zuhause waren. 1612 wurde sie zum Schloss ausgebaut und befindet sich heute in Privatbesitz. Ich gehe weiter, überquere den Ulmbach zum dritten Mal und halte mich nach etwa 150 Metern links in Richtung BASALT-PARKours. In dem kleinen, idyllischen Park erfahre ich an mehreren Stationen, auf welche Arten das Gestein, das heute noch im Ort abgebaut wird, genutzt werden kann. Am Ende des BASALT-PARKours werfe ich einen Blick auf den Kunstrasenplatz des TuSpo Beilstein. Er ist von Basalt-Findlingen umrahmt und hat deshalb den Namen „Basalt-Arena“.\n\nAm Ende des Parks überquere ich zum letzten Mal den Ulmbach und dann die Schloßstraße. Ich folge der Straße „Zur Schmalburg“ etwa 100 Meter bergauf, dann biege ich links auf den asphaltierten Ulmtalradweg ab. Die ehemalige Trasse der Ulmtalbahn, auf der zwischen 1921 und 1976 sogar der legendäre BALKAN-EXPRESS verkehrte, wurde in mehreren Abschnitten zu einer Rad-/Gehwegverbindung ausgebaut. Dieser verbindet Westerwald und Lahntal auf einer Strecke von knapp 22 Kilometern. Rechts lädt mich der große Rastplatz „Beilstein“ ein, auszuruhen und den Blick auf einen Nachbau der ehemaligen Ton-Verladeanlage zu werfen. Eine Infotafel erzählt vom Basaltabbau mit historischem Hintergrund. Gut gestärkt gehe ich weiter auf dem Ulmtalradweg, vorbei an einem weiteren, kleineren Rastplatz, die ehemalige Haltestelle „Wallendorf“. Kurze Zeit später erreiche ich einen Aussichtspunkt, wo ich auf einer Liegebank den Blick auf die Ulmbachtalsperre und ins Ulmtal genieße. Kurz bevor ich die Radwegtrasse verlasse, bewundere ich die beiden denkmalgeschützten Brückenbauwerke aus Basalt, die 2019 saniert wurden. Zurück an der Ulmbachtalsperre kommen meine Badesachen zum Einsatz, denn im Sommer wird die Sperre zum Badesee und am Ufer warten einige Angler auf ihre Beute. Gleich daneben liegt ein Campingplatz mit Zelt- und Wohnwagenplätzen sowie vier Minihäusern zum Übernachten für Radfahrer und Wanderer.\n\nNach einem erfrischenden Bad gönne mir eine Einkehr in die dortige Gaststätte mit Biergarten.",
    accessTrails: [],
    accessTrailMarking: null
  },
  safetyNotes: null,
  safetyAppUrl: null,
  equipment: null,
  tips: [
    {
      name: "Grube Rassel",
      note: "Für Romantiker und Naturfreunde lohnt sich ein Abstecher zur \"Grube Rassel\".",
      url: null
    }
  ],
  literature: [],
  start: {
    name: "Ulmbachtalsperre",
    address: "35753 Greifenstein",
    coordinates: null
  },
  destination: {
    name: "Ulmbachtalsperre",
    address: "35753 Greifenstein",
    coordinates: null
  }
},

// ═══════════════════════════════════════════════════════════
// 9 – Sagenweg (Hirz-Maulsbach)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 9,
  _status: "complete",
  title: "Kleiner Wäller Sagenweg",
  subtitle: "Hirz-Maulsbach",
  type: "Spazierweg",
  km: "4,6",
  difficulty: "Mittel",
  tags: "Mehrbachtal, Fachwerkdorf Mehren, Pfeilerbasilika, Bulles'Je",
  sourceUrl: "https://www.westerwald.info/d/kleiner-waeller-sagenweg-hirz-maulsbach-spazierweg/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=46240217&project=oar-rlp",
  tourenplanerUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/46240217/",
  stats: {
    ascent: "68 hm",
    descent: "68 hm",
    duration: "1,2 h",
    highPoint: "277 m",
    lowPoint: "209 m"
  },
  description: {
    headline: null,
    text: "Das Mehrbachtal steckt voller Geschichten. So führt mich die Themenrundtour durch Mehren mit seinen zahlreichen Fachwerkbauten. Später begleitet mich der Mehrbach auf einem sehr idyllischen, schattigen Weg. Ob hier am Wasser noch die weiße Frau spukt? Und wie steht es mit dem Boller Mosch, der mit einem Knüppel an die Bäume schlägt und „Mosch, Mosch“ ruft? Auch die verschwundene Burg Mehren kann eine spannende Sage erzählen. Ich gehe bei dieser Rundtour überwiegend auf breiten Waldwegen, überwinde zu Beginn des Spaziergangs einige Höhenmeter, die ich später Richtung Mehren wieder abwärts laufe. Im Ortskern stoße ich auf die sehenswerte Pfeilerbasilika aus dem 12. Jahrhundert, eine der ältesten ihrer Art im Westerwald. Schließlich werfe ich noch einen Blick in den alten Kerker von 1547, Bulles‘Je genannt, unterhalb der Alten Schule."
  },
  directions: {
    byCar: "von B8 aus Richtung Westen über Fiersbach, Hirz-Maulsbach bzw. aus Richtung Osten über Forstmehren, Mehren nach Niedermaulsbach\n\nvon B 256 aus über Orfgen, Ziegenhain, Mehren nach Niedermaulsbach"
  },
  publicTransport: {
    arrival: "Buslinie 254 Kircheib/Hirz-Maulsbach – Weyerbusch, Haltestelle Mehren Gemeindehaus oder Niedermaulsbach",
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [],
    taxis: [],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {
      location: "Hirz-Maulsbach",
      free: "57635 Hirz-Maulsbach, Mehrener Straße",
      paid: null
    }
  ],
  routeDescription: {
    general: null,
    accessTrails: [],
    accessTrailMarking: null
  },
  safetyNotes: null,
  safetyAppUrl: null,
  equipment: "Es ist keine spezielle Ausrüstung erforderlich.",
  tips: [
    {
      name: "Fachwerkdorf Mehren",
      note: null,
      url: null
    },
    {
      name: "Tolle Buchenwälder",
      note: "insbesondere im Frühjahr",
      url: null
    }
  ],
  literature: [],
  start: {
    name: "Hirz-Maulsbach",
    address: "Mehrener Straße",
    coordinates: "50.678832, 7.491614"
  },
  destination: {
    name: "Hirz-Maulsbach",
    address: "Mehrener Straße",
    coordinates: null
  }
},

// ═══════════════════════════════════════════════════════════
// 10 – Klangpfad (Rott)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 10,
  _status: "complete",
  title: "Kleiner Wäller Klangpfad",
  subtitle: "Rott",
  type: "Spazierwanderweg",
  km: "5,4",
  difficulty: "Mittel",
  tags: "Klangwiege, Grube Silberwiese, Oberlahr, Klanginstrumente",
  sourceUrl: "https://www.westerwald.info/d/kleiner-waeller-klangpfad-rott/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=67038293&project=oar-rlp",
  tourenplanerUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/67038293/",
  stats: {
    ascent: "101 hm",
    descent: "101 hm",
    duration: "1,5 h",
    highPoint: "283 m",
    lowPoint: "182 m"
  },
  description: {
    headline: null,
    text: "Vom Wanderparkplatz aus laufe ich an der alten Eiche und am alten Dorfbackes vorbei und zwischen Wiesen und Ackerflächen hindurch hinab ins Wiedtal. Die Klangwiege bewegt mich zur ersten Pause und ich lasse meinen Körper von den Harfentönen durchdringen. Dann geht es weiter am Stolleneingang der Grube Silberwiese vorbei nach Oberlahr.\nHier mache ich einen Abstecher zum historischen Dorfplatz mit neugotischer Kirche, einem alten Pfarrhaus, dem Dorfbackes und einigen alten Fachwerkhäusern.\nÜber die Langenauer Straße führt mich der Klangpfad vorbei an ehemaligen Fabrikationsgebäude der Erzgrube \"Silberwiese\", wieder über Waldwege nach Rott zurück, vorbei an Fischweihern und weiteren Klanginstrumenten. Ältere Infotafeln eines ehemaligen Naturlehrpfades ergänzen meinen Weg, so dass ich gut informiert und wohlklingend gestimmt schon bald wieder meinen Ausgangspunkt an der alten Eiche Rott erreiche."
  },
  directions: {
    byCar: "Über die B 256 erreicht man die Abfahrt Rott (etwa 1 km südlich von Flammersfeld)"
  },
  publicTransport: {
    arrival: "Regionlinie 120 oder Buslinie 126 (jeweils mit Anschluss an Bahnhof Altenkirchen)\nAusstieg Flammersfeld Rathaus (ca. 900 m Zuweg)\nAusstieg Abzw. Eichen/Rott (ca. 750 m Zuweg)",
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [
      {
        name: "Fahrzeiten unter vrm-info.de",
        url: "https://www.vrminfo.de/fahrplan/"
      }
    ],
    taxis: [],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {
      location: "Rott",
      free: "kostenfreier Wanderparkplatz, Walter Bartels Weg, 57632 Rott",
      paid: null
    }
  ],
  routeDescription: {
    general: null,
    accessTrails: [],
    accessTrailMarking: "violettes Notenzeichen mit Klangwellen"
  },
  safetyNotes: null,
  safetyAppUrl: null,
  equipment: "Festes Schuhwerk und witterungsangepasste Kleidung wird empfohlen",
  tips: [
    {
      name: "Markierung & Familienfreundlichkeit",
      note: "Immer dem violetten Notenzeichen mit den Klangwellen folgen. Mit dem Kinderwagen oder mit dem Laufrad ist der Rundweg ein echtes Ausflugshighlight.",
      url: null
    }
  ],
  literature: [],
  start: {
    name: "Wanderparkplatz",
    address: "Walter Bartels Weg, 57632 Rott",
    coordinates: null
  },
  destination: {
    name: "Walter Bartels Weg",
    address: "57632 Rott",
    coordinates: null
  }
},

// ═══════════════════════════════════════════════════════════
// 11 – Kunst + Natur (Greifenstein)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 11,
  _status: "complete",
  title: "Kleiner Wäller Kunst + Natur",
  subtitle: "Greifenstein",
  type: "Spazierwanderweg",
  km: "5,2",
  difficulty: "Mittel",
  tags: "Outdoor Zentrum Lahntal, Wüstung Schönhausen, Skulpturenpark Siegfried Fietz, Ulmtalradweg",
  sourceUrl: "https://www.westerwald.info/d/kleiner-waeller-kunst-natur-greifenstein-spazierwanderweg/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=42055425&project=oar-rlp",
  tourenplanerUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/42055425/",
  stats: {
    ascent: "96 hm",
    descent: "96 hm",
    duration: "1,4 h",
    highPoint: "271 m",
    lowPoint: "175 m"
  },
  description: {
    headline: null,
    text: "Ich starte vom Parkplatz beim Outdoor Zentrum Lahntal, durchquere das Viadukt der ehemaligen Ulmtalbahn (heute Ulmtalradweg) und erreiche ein sehr schönes Waldgebiet. Um mich herum ist es ruhig und ich kann mich hier erholen und neue Kraft tanken. Die Tour führt zeitweise bergauf, aber die Anstrengung lohnt sich: Auf dem höchsten Punkt habe ich einen freien Blick auf die Wüstung Schönhausen. Dieses Dorf wurde seinerzeit ein Opfer der Pest. Mein Weg führt mich an Feldern und Wiesen vorbei und ich umrunde zunächst den Skulpturenpark Siegfried Fietz. Dabei passiere ich auch den Solarpark und eine hübsche Streuobstwiese. Dann stehe ich vor dem Haupteingang des Parks, der unter schönen alten Bäumen zahlreiche Skulpturen vereint. Der weitere Weg bringt mich über die Trasse der ehemaligen Ulmtalbahn zurück zum Outdoor Zentrum Lahntal mit Spielplatz und vielen Tieren."
  },
  directions: {
    byCar: "**Aus Richtung Herborn:** auf B 277 bis Ehringshausen-Katzenfurt, dann auf L 3282 und L 3324 bis Ziel\n\n**Aus Richtung Wetzlar/Limburg:** auf B49 bis Leun-Biskirchen, dann auf L 3324 bis Ziel\n\n**Mit dem Fahrrad:** aus Richtung Westerwald über R7 und Ulmtalradweg, aus Richtung Lahntal über Lahntalradweg und Ulmtalradweg"
  },
  publicTransport: {
    arrival: "VLDW Linie 120/125 ab Wetzlar oder Weilburg, Haltestelle: Allendorf, Outdoor Zentrum",
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [
      {
        name: "Fahrplan VLDW 120/125",
        url: "https://www.v-l-d.de/fileadmin/Fahrplaene_Lahn-Dill/2020/120-125.pdf"
      }
    ],
    taxis: [],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {
      location: "Outdoor Zentrum Lahntal",
      free: "Auf dem unteren Parkplatz am Outdoor Zentrum Lahntal, Märchenpark 1, 35753 Greifenstein",
      paid: null
    }
  ],
  routeDescription: {
    general: "Ich beginne meine Tour am Parkplatz des Outdoor Zentrum Lahntal, direkt an der Landesstraße L3324. Theoretisch hätte ich auch hier in einem der Indianer-Tipis - mit eingebauten Holzbetten und eigener Feuerstelle – oder sogar in einem Hobbithaus übernachten können. Vom Parkplatz kommend biege ich sofort links ab, gehe durch eine kleine Unterführung und folge der Biegung des Weges zunächst nach rechts, dann nach links in ein Waldgebiet. An den folgenden beiden Gabelungen halte ich mich rechts und wandere gemächlich bergauf. Der Weg führt um eine Biegung nach rechts und ich blicke von oben in einen lichten Zauberwald. Nach etwa 500 Metern erreiche ich eine Wegkreuzung, biege links ab und gehe rund 200 Meter bergauf. Dann halte ich mich zweimal rechts und 700 Meter lang säumen Bäume, Sträucher, gefallene bemooste Baumstämme, Pilze, Farne und Blumen meinen Weg.\n\nMit einer weiteren Rechtsbiegung verlasse ich das Waldgebiet und blicke auf das Tal. Die halbe Strecke ist beinahe geschafft, somit entscheide ich mich für eine Rast auf einer Bank und studiere die Tafel, die mir die historische Bedeutung des Dorfes Schönhausen erläutert, dessen letzte Bewohner im Jahre 1450 vor der Pest flohen. Mein Weg führt weiter bergab, an Wiesen und Weiden entlang, und nach rund 800 Metern erblicke ich auf der rechten Seite die ersten Figuren des Skulpturenparks Siegfried Fietz. Beim oberen Eingang könnte ich die Tour durch den Park fortsetzen. Ich entscheide mich aber dafür, um den Park herum zu laufen und spaziere etwa 100 Meter weiter bis zu einem Rastplatz mit zwei Bänken an einer Wegkreuzung. Nach einem kurzen Stopp biege ich rechts ab und gehe entlang des Solarparks, der auf einem 22.000 Quadratmeter großen Grundstück Sonnenenergie produziert.\n\nNach etwa 100 Metern erreiche ich rechts den Ulmtalradweg – die ehemalige Trasse der Ulmtalbahn, die zu einer Rad-/Gehwegverbindung ausgebaut wurde – und stehe vor dem Haupteingang des Skulpturenparks Siegfried Fietz. Der in Allendorf beheimatete Komponist, Interpret und Produzent hat den Park initiiert. Ich bewundere Skulpturen aus heimischem Material wie Holz, Basalt und Metall und rufe per Handy und QR-Code die Erklärungen der Künstler ab. Nach einer ausgiebigen Runde wandere ich die restlichen etwa 1,2 Kilometer weiter über den Ulmtalradweg. Auf einem Rastplatz informiert mich eine Tafel über den Erzabbau in der Gegend. Kurz vor dem Parkplatz habe ich Möglichkeit, im Outdoor Zentrum mit Gaststätte, Biergarten, Spielplatz und vielen Tieren einzukehren.",
    accessTrails: [],
    accessTrailMarking: null
  },
  safetyNotes: null,
  safetyAppUrl: null,
  equipment: "Festes Schuhwerk",
  tips: [
    {
      name: "Greifensteiner Kinderpfad",
      note: "Auf der halben Strecke ist der Greifensteiner Kinderpfad mit gleichem Start/Ziel als 3 km Rundtour angelegt. Eine Spiel- und Erzähltour für Kinder bis zum Grundschulalter. Für ältere mit Rätselrallye auf www.greifenstein.de.",
      url: null
    }
  ],
  literature: [],
  start: {
    name: "Outdoor Zentrum Lahntal",
    address: "Greifenstein",
    coordinates: null
  },
  destination: {
    name: "Outdoor Zentrum Lahntal",
    address: "Greifenstein",
    coordinates: null
  }
},

// ═══════════════════════════════════════════════════════════
// 12 – Wolfsteine (Bad Marienberg)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 12,
  _status: "complete",
  title: "Kleiner Wäller Wolfsteine",
  subtitle: "Bad Marienberg",
  type: "Spazierwanderweg",
  km: "7,3",
  difficulty: "Mittel",
  tags: "Wildpark, Wolfsteine, Hedwigsturm, Basaltpark, Kurpark",
  sourceUrl: "https://www.westerwald.info/d/kleiner-waeller-wolfsteine-bad-marienberg-spazierwanderweg/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=42055470&project=oar-rlp",
  tourenplanerUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/42055470/",
  stats: {
    ascent: "129 hm",
    descent: "129 hm",
    duration: "2,0 h",
    highPoint: "565 m",
    lowPoint: "437 m"
  },
  description: {
    headline: null,
    text: "Der Kleine Wäller Wolfsteine ist eine tolle Rundwanderung für Familien und alle Wanderer, die Abwechslung lieben.\n\nStart der Tour ist am Wildpark Bad Marienberg, von wo aus es auf Waldwegen zum Kleinen und Großen Wolfstein geht. Hier sollte man sich die Zeit nehmen und die Sage der Wolfsteine auf der Infotafel lesen.\n\nÜber die Marienberger Höhe führt der Weg in die Stadtmitte. Der Kurpark mit Apothekergarten und Barfußweg ist in jedem Fall einen Stopp wert.\n\nIn der Innenstadt bieten sich viele Einkehrmöglichkeiten, so dass man gut gestärkt das letzte Drittel der Wanderung antreten kann.\n\nWeiter geht es in Richtung Basaltpark. Hier informieren Schautafeln über den Basaltabbau in früheren Zeiten. Der Weg führt vorbei am Basaltsee und der imposanten Basaltwand des Parks steil bergauf in Richtung Wildpark.\n\nBevor man den Wildpark erreicht, kommt man am Hedwigsturm vorbei. Hier kann man zum Abschluss der Wanderung den Ausblick über den Westerwald genießen."
  },
  directions: {
    byCar: "**Von Köln:** A3 Ausfahrt Hennef/Sieg über B8 und B414 bis Bad Marienberg\n\n**Von Frankfurt:** A3 Ausfahrt Limburg über B54 und B414 bis Bad Marienberg\n\n**Von Dortmund:** A45 Ausfahrt Haiger/Burbach über B54 und B414 bis Bad Marienberg\n\n**Von Gießen:** A45 Ausfahrt Herborn über B255 und B414 bis Bad Marienberg\n\n**Von Koblenz:** A48 und A3 Ausfahrt Montabaur über B255 bis Bad Marienberg"
  },
  publicTransport: {
    arrival: "Mit der Bahn bis Haltestelle Nistertal oder Westerburg. Weiter mit dem Bus bis Bad Marienberg, Haltestelle Neuerweg.\n\nBuslinie 116 und 483",
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [
      {
        name: "rmv-bus.de",
        url: "https://www.rmv-bus.de"
      }
    ],
    taxis: [],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {
      location: "Bad Marienberg",
      free: "Großer kostenfreier Parkplatz am Wildpark Bad Marienberg",
      paid: null
    }
  ],
  routeDescription: {
    general: "Vom Parkplatz am Wildpark Bad Marienberg wandere ich vorbei am Abenteuerspielplatz des Wildparks und dem Kletterwald geradeaus in den Wald. Nach 500 Meter halte ich mich rechts und gehe ein kurzes Stück bergauf bis zur ersten Basaltformation, dem „Kleinen Wolfstein“. Dort mache ich eine kurze Rast auf einer rustikalen Eichenbank in der Waldkirche, einem Andachtsort unter freiem Himmel, und genieße die Natur. Anschließend folge ich für 100 Meter dem schmalen Pfad bergan, der sich zwischen Basaltsteinen und Bäumen hindurchschlängelt. An der Kreuzung, auf die ich stoße, gehe ich links und folge dem Weg für knapp einen Kilometer weiter durch den Wald zum Naturdenkmal „Großer Wolfstein“. Eine Infotafel informiert mich über die Sage der Wolfsteine, die der Teufel angeblich im Flug verloren hat. Kletterer, zu denen ich nicht gehöre, können sich an den riesigen Basaltbrocken versuchen.\n\nIch wandere auf einem breiten Waldweg weiter zur Marienberger Höhe und der Wacholderheide, von der ich die Aussicht über Bad Marienberg genieße. Dann folge ich einem Feldweg hangabwärts, biege nach 400 Metern rechts ab und halte mich Richtung Stadtmitte. Ein kurzes Stück umlaufe ich ein Wohngebiet bis zur Straße „Unter den Eichen“. Dort biege ich nach links ab und gehe etwa 300 Meter bis zur Kirburger Straße. Dieser folge ich nach rechts und weiter geradeaus über einen Kreisel. Dann biege ich rechts in die Büchtingstraße ab und folge ihr 200 Meter. Von dort führt mich mein Weg nach rechts durch den Kurpark, vorbei am denkmalgeschützten Fachwerkhaus der Tourist Information und zum „Park der Sinne“ mit Barfußpfad und Apothekergarten. Ich ziehe meine Wanderschuhe aus und gönne meinen Füßen einen Abstecher auf den Rundweg mit 16 verschiedenen Belägen. Dann schnuppere ich noch kurz in den Apothekengarten mit 100 verschiedenen Pflanzen hinein, bevor ich meinen Weg über den Marktplatz in die Bismarckstraße mit ihren Einkaufs- und Einkehrmöglichkeiten fortsetze.\n\nDas letzte Drittel des Weges führt mich über die Bismarckstraße und die Rauscheidstraße zum Freilichtmuseum Basaltpark, in dem mir Schautafeln Einblicke in die Vulkantätigkeit der Region vor etwa 25 Millionen Jahren bieten. Von dort aus wandere ich steil bergauf in Richtung Wildpark und nutze die verbliebene Energie, um vom Hedwigsturm aus das Westerwald-Panoramablick zu genießen.",
    accessTrails: [],
    accessTrailMarking: null
  },
  safetyNotes: "Besonders im Herbst ist darauf zu achten, dass das am Boden liegende Laub Unebenheiten, Wurzeln, Steine oder Löcher im Weg verdecken kann. Mit Wegebeeinträchtigungen dieser Art ist auf jeder Wanderung zu rechnen.",
  safetyAppUrl: null,
  equipment: "Tragen Sie festes Schuhwerk sowie witterungsangepasste, zweckmäßige Kleidung, die Sie vor Kälte und Nässe bzw. Hitze und Sonne schützt.",
  tips: [
    {
      name: "Wildpark Bad Marienberg",
      note: "Im Wildpark steht im Frühling der tierische Nachwuchs an, dann kann man unter anderem die jungen Ziegen und Schafe beobachten.",
      url: null
    }
  ],
  literature: [
    "Die Broschüre \"Kleine Wäller - Großer Genuss\" ist bei der Touristinfo oder online unter https://www.badmarienberg.de/cms/deutsch/deskline/index.html#/prospekte erhältlich."
  ],
  start: {
    name: "Parkplatz am Wildpark",
    address: "Wildparkstraße, 56470 Bad Marienberg",
    coordinates: null
  },
  destination: {
    name: "Parkplatz am Wildpark",
    address: "Wildparkstraße, 56470 Bad Marienberg",
    coordinates: null
  }
},

// ═══════════════════════════════════════════════════════════
// 13 – Weg der Sinne (Werkhausen)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 13,
  _status: "complete",
  title: "Kleiner Wäller Weg der Sinne",
  subtitle: "Werkhausen",
  type: "Spazierweg",
  km: "2,6",
  difficulty: "Leicht",
  tags: "Sinnesstationen, Barfußpfad, Klangzaun, Werkhausen",
  sourceUrl: "https://www.westerwald.info/d/kleiner-waeller-weg-der-sinne-werkhausen-spazierweg/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=46240272&project=oar-rlp",
  tourenplanerUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/46240272/",
  stats: {
    ascent: "49 hm",
    descent: "45 hm",
    duration: "0,7 h",
    highPoint: "309 m",
    lowPoint: "264 m"
  },
  description: {
    headline: null,
    text: "Wer Kinder hat, ist mit diesem Spaziergang durch die Hügel rund um Werkhausen bestens beraten. Ich genieße den \"Weg der Sinne\" in vollen Zügen: Zu Beginn erklimme ich einige Höhenmeter, um mich dann an dem wunderbaren Blick auf die typische Landschaft des Westerwaldes zu erfreuen. Anschließend warten Wiesenpfade und Feldwege ebenso auf mich wie diverse Sinnesstationen am Wegesrand. So übe ich mich beispielsweise auf einem Balancierbalken, erprobe ein Farbenspiel, stecke meine Hand in Fühlboxen und nasche erlaubterweise von den Angeboten diverser Beete. Auch der Barfußpfad macht viel Spaß, denn er kitzelt meine Fußsohlen. Alle meine Sinne wie das Riechen, Schmecken, Sehen und Fühlen sowie das Hören werden beschäftigt. Daneben kommt selbstverständlich die Natur zur Geltung, denn auf dem Weg gibt es immer wieder weite Ausblicke in die Umgebung."
  },
  directions: {
    byCar: "von B8 aus Richtung Westen über Hasselbach nach Werkhausen\n\nvon B8 aus Richtung Osten in Weyerbusch nach Werkhausen abbiegen"
  },
  publicTransport: {
    arrival: "Es besteht keine Anbindung mit Bus und Bahn.",
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [],
    taxis: [],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {
      location: "Werkhausen",
      free: "57635 Werkhausen, Dorftreff",
      paid: null
    }
  ],
  routeDescription: {
    general: "Beim Start am Dorftreff in Werkhausen werfe ich einen Blick auf die Infotafel, denn ich muss aufpassen, dass ich die richtige Route wähle. Den „Weg der Sinne“ gibt es nämlich zwei Mal, meine Strecke verläuft in großen Teilen entlang des gleichnamigen Projekts der Ortsgemeinde Werkhausen, folgt allerdings bereits am Anfang einem etwas anderen Wegeverlauf.\n\nIch gehe gegen den Uhrzeigersinn einmal rund um das Dorf und probiere immer wieder Sinnesstationen wie den Klangzaun oder das Bachrauschen aus. Zunächst spaziere ich ein paar Meter bis zur Hauptstraße und folge ihr etwa 100 Meter, bis sie auf die Fichtenstraße trifft. Dort biege ich links ab und gehe ein paar Meter auf der Straße. Vor den ersten Häusern biege ich rechts auf einen leicht zwischen Hecken und Bäumen versteckten Wiesenweg ab. Oben biege ich auf dem Wiesenweg nach links ab und komme nach kurzer Zeit wieder auf den Teerweg. Diesem folge ich entlang vieler verschiedener Sinnesstationen leicht bergan. Unterwegs laden Bänke zu einer gemütlichen Rast oder einem kleinen Picknick ein. Am höchsten Punkt biege ich sofort nach links ab und gehe auf einem Feldweg wieder bergab. Unten angekommen sehe ich links in wenig Entfernung das Dorfgemeinschaftshaus, ich biege jedoch nach rechts und direkt wieder nach links ab und folge kurz der Hauptstraße in Richtung des Dorfes Werkhausen. Hinter den ersten Häusern zweigt der Weg erneut nach links ab und führt mich über eine Wiese mit weiteren Sinnesstationen zurück zu meinem Ausgangspunkt.",
    accessTrails: [],
    accessTrailMarking: null
  },
  safetyNotes: null,
  safetyAppUrl: null,
  equipment: "Es ist keine spezielle Ausrüstung erforderlich.",
  tips: [
    {
      name: "Kultur Im Tal",
      note: "angrenzend",
      url: null
    },
    {
      name: "Picknickkorb",
      note: "Am Startpunkt gibt es einen überdachten Rastplatz, daher gerne den Picknickkorb mitbringen.",
      url: null
    }
  ],
  literature: [],
  start: {
    name: "Werkhausen",
    address: "Dorftreff",
    coordinates: null
  },
  destination: {
    name: "Werkhausen",
    address: "Dorftreff",
    coordinates: null
  }
},

// ═══════════════════════════════════════════════════════════
// 14 – Vitalparcours (Rengsdorf)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 14,
  _status: "complete",
  title: "Kleiner Wäller Vitalparcours",
  subtitle: "Rengsdorf",
  type: "Spazierweg",
  km: "4,4",
  difficulty: "Leicht",
  tags: "Vitalparcours, Sportstationen, Butterpfadhütte, Hardert",
  sourceUrl: "https://www.westerwald.info/d/kleiner-waeller-vital-parcours/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=801436094&project=oar-rlp",
  tourenplanerUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/801436094/",
  stats: {
    ascent: "131 hm",
    descent: "69 hm",
    duration: "1,3 h",
    highPoint: "333 m",
    lowPoint: "265 m"
  },
  description: {
    headline: null,
    text: "Offizieller Startpunkt ist der Wanderparkplatz an der K104 zwischen Rengsdorf und Hardert. Weitere mögliche Startpunkte sind am Ortsrand von Hardert sowie am Deichwiesenhof in Bonefeld.\n\nDer eigentliche markierte Rundweg (rot-weiße Markierung) im Bereich Rengsdorf/Hardert hat eine Länge von 2,4 km. Er führt an 6 Stationen vorbei.\n\nAb Bonefeld ist eine gelb-rote Markierung für einen Zuweg angebracht. Dieser hat eine Länge von weiteren 3,8 km, wobei die Strecke zwischen Station 2 und 3 auf dem gleichen Wegestück verläuft. Station 7 wird noch aufgebaut, Station 8 befindet sich am Deichwiesenhof. Auf dem Wegeverlauf am Völkerwiesenbach befinden sich aber auch die Angebote des roten Zwergenwegs."
  },
  directions: {
    byCar: null
  },
  publicTransport: {
    arrival: "Linie 120 zwischen Neuwied und Altenkirchen",
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [
      {
        name: "Linie 120",
        url: "https://bischoff-touristik.de/wp-content/uploads/2016/11/120-2.pdf"
      }
    ],
    taxis: [],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {
      location: "Rengsdorf/Hardert",
      free: "Kostenloser Wanderparkplatz K104 zwischen Rengsdorf und Hardert",
      paid: null
    }
  ],
  routeDescription: {
    general: "Der kleine Wäller Vitalparcours mit rotem W auf weißem Grund ist 2,4 km lang und startet am Wanderparkplatz Obere Mühle, zwischen Rengsdorf und Hardert. Wir folgen der Markierung und kommen schon nach 100 m zur Station 1. Von dort geht es weiter vorbei an einer Waldliege bis zur Station 2, an der Butterpfadhütte. Rechts an der Hütte führt der Weg nun bergauf bis zur Station 3, vor der Scheidchenhütte. Vor der Hütte biegen wir wieder rechts ab in Richtung Hardert zur Station 4 und laufen geradeaus weiter bis zum Ortsrand von Hardert zur Station 5. Vor der Wanderhütte Wolfstal geht es ein letztes Mal rechts ab zur Station 6, der letzten Station auf dieser Runde. Bergab laufen wir dann zum Ausgangspunkt zurück.",
    accessTrails: [],
    accessTrailMarking: "rotes W auf weißem Grund"
  },
  safetyNotes: "Benutzung aller Sportgeräte auf eigene Gefahr. Bitte beachten Sie die Hinweise am Gerät.",
  safetyAppUrl: null,
  equipment: "Für die ideale Nutzung sind wetterfeste Sportschuhe und Kleidung zu empfehlen",
  tips: [
    {
      name: "Roter Zwergenweg 1",
      note: "Familien mit Kindern können die Geräte mit dem teils parallel verlaufenden roten Zwergenweg 1 verbinden.",
      url: null
    }
  ],
  literature: [],
  start: {
    name: "Kostenloser Wanderparkplatz K104",
    address: "zwischen Rengsdorf und Hardert",
    coordinates: null
  },
  destination: {
    name: "Kostenloser Wanderparkplatz K104",
    address: "zwischen Rengsdorf und Hardert",
    coordinates: null
  }
}

,
// ═══════════════════════════════════════════════════════════
// 15 – GeoRoute Glasstadt Wirges (Wirges)  [neu, Eröffnung 08.05.2026]
// ═══════════════════════════════════════════════════════════
{
  id: 15,
  _status: "complete",
  title: "Kleiner Wäller und GeoRoute Glasstadt Wirges",
  subtitle: "Wirges",
  type: "Spazierwanderweg",
  km: "8",
  difficulty: "Mittel",
  tags: "Glasindustrie, GeoRoute, Silbersee, Steimel-Kapelle, Westerwälder Dom, Industriekultur",
  sourceUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/806181053/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=806181053&project=oar-rlp",
  tourenplanerUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/806181053/",
  stats: {
    ascent: "81 hm",
    descent: "81 hm",
    duration: "2,0 h",
    highPoint: null,
    lowPoint: null
  },
  description: {
    headline: "Wandern durch die Industriegeschichte der Glasstadt Wirges",
    text: "Der rund 8 km lange Rundweg verbindet die Stadt Wirges mit den umliegenden Wäldern und führt entlang zahlreicher GeoStationen, die Einblicke in die Geschichte der Wirgeser Glasindustrie, der Eisenbahn und der Menschen vor Ort geben. Auf dem Weg liegen unter anderem der Silbersee – ein ehemaliger Tonabbau, der heute als Angelteich genutzt wird – sowie die Marienkapelle auf dem Steimel mit Blick über die Stadt. Ein kurzer Abstecher führt zum Westerwälder Dom (St. Bonifatius), der Wirges weit über die Region hinaus bekannt gemacht hat. Unterwegs ergeben sich immer wieder weite Ausblicke auf den Ort und die Montabaurer Höhe. Die Tour ist Teil des Nationalen GEOPARKS Westerwald-Lahn-Taunus und seit Mai 2026 zusätzlich als Kleiner Wäller des Westerwald Touristik-Service zertifiziert."
  },
  directions: {
    byCar: "Über die A3 (Ausfahrt Montabaur oder Dierdorf), dann der B255 nach Wirges folgen. Start am Bürgerhaus Wirges."
  },
  publicTransport: {
    arrival: "Bahnhof Wirges (Linie RB28 Limburg–Siershahn–Engers/Koblenz). Vom Bahnhof wenige Minuten Fußweg zum Bürgerhaus.",
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [],
    taxis: [],
    sustainableTip: "Anreise mit der Bahn ist möglich – der Bahnhof Wirges liegt direkt im Ort.",
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {
      location: "Wirges",
      free: "Parkplätze am Bürgerhaus Wirges sowie im Stadtzentrum",
      paid: null
    }
  ],
  routeDescription: {
    general: "Moderater Verlauf durch die Stadt und angrenzende Wälder, mit zahlreichen GeoStationen zur Industrie- und Glasgeschichte.",
    accessTrails: [],
    accessTrailMarking: "Markierung mit Logo Kleiner Wäller"
  },
  safetyNotes: null,
  safetyAppUrl: null,
  equipment: "Festes Schuhwerk, witterungsangepasste Kleidung",
  tips: [
    {
      name: "Westerwälder Dom (St. Bonifatius)",
      note: "Sehenswerte neugotische Pfarrkirche, Grundstein 1885 – kurzer Abstecher von der Route empfehlenswert.",
      url: null
    },
    {
      name: "Silbersee",
      note: "Ehemaliger Tonabbau, heute idyllischer Teich (4,5 ha)",
      url: null
    },
    {
      name: "Marienkapelle am Steimel",
      note: "1865 erbaut, vom Ort über einen Kreuzweg erreichbar, mit Blick über Wirges und Umgebung",
      url: null
    }
  ],
  literature: [],
  start: {
    name: "Bürgerhaus Wirges",
    address: "56422 Wirges",
    coordinates: null
  },
  destination: {
    name: "Bürgerhaus Wirges",
    address: "56422 Wirges",
    coordinates: null
  }
},

// ═══════════════════════════════════════════════════════════
// 16 – Schwarze Nister (Bad Marienberg)  [PARTIAL]
// ═══════════════════════════════════════════════════════════
{
  id: 16,
  _status: "partial",
  title: "Kleiner Wäller Schwarze Nister",
  subtitle: "Bad Marienberg",
  type: "Spazierwanderweg",
  km: "4,3",
  difficulty: "Leicht",
  tags: "Schwarze Nister, Naturschutzgebiet Bacher Lay, Basaltwand, Park der Sinne",
  sourceUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/wanderung/kleiner-waeller-schwarze-nister-bad-marienberg/64379431/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=64379431&project=oar-rlp",
  tourenplanerUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/64379431/",
  stats: {
    ascent: "80 hm",
    descent: "80 hm",
    duration: "1:10 h",
    highPoint: "483 m",
    lowPoint: "435 m"
  },
  description: {
    headline: null,
    text: "Dieser gemütliche SpazierWanderweg begleitet das Flüsschen Schwarze Nister auf seinem Weg durch das Naturschutzgebiet Bacher Lay.\n\nDer Kleine Wäller Schwarze Nister ist der zweite SpazierWanderweg in Bad Marienberg. Hier kannst du gemütlich schlendern und die Natur geniessen. Und obwohl die Tour nur knapp 4,5 km lang ist, gibt es doch einiges zu sehen, selbst in Herbst und Winter. Im Sommer bietet ein Kneipp-Tretbecken oder das Flüsschen selber eine Abkühlung für Füße und Beine und in der Bacher Lay ist es sowieso immer kühl. Sehenswert ist dort die Basaltwand und auch sonst kannst du noch Reste des früheren Basaltabbaus entdecken, immer begleitet von der Schwarzen Nister. Zurück in der Stadt warten im Park der Sinne Barfußweg und Apothekergarten auf einen Besuch."
  },
  directions: { byCar: null },
  publicTransport: {
    arrival: null, returnTrip: null, returnTripUrl: null,
    stops: [], links: [], taxis: [],
    sustainableTip: null, sustainableTipUrls: [], moreInfoUrl: null
  },
  parking: [],
  routeDescription: { general: null, accessTrails: [], accessTrailMarking: null },
  safetyNotes: "Besonders im Herbst ist darauf zu achten, dass das am Boden liegende Laub Unebenheiten, Wurzeln, Steine oder Löcher im Weg verdecken kann.",
  safetyAppUrl: null,
  equipment: "Festes Schuhwerk wird empfohlen.",
  tips: [
    {
      name: "Apothekergarten im Park der Sinne",
      note: "Im Frühling leuchtet der Apothekergarten in frischem Grün, die Schautafeln informieren über die Wirkungen und Anwendungsgebiete der Heilkräuter.",
      url: null
    }
  ],
  literature: [],
  start: { name: "Bad Marienberg", address: "Bad Marienberg", coordinates: null },
  destination: { name: "Bad Marienberg", address: "Bad Marienberg", coordinates: null }
},

// ═══════════════════════════════════════════════════════════
// 17 – Wiesensee (Stahlhofen am Wiesensee)  [PARTIAL]
// ═══════════════════════════════════════════════════════════
{
  id: 17,
  _status: "partial",
  title: "Kleiner Wäller Wiesensee",
  subtitle: "Stahlhofen am Wiesensee",
  type: "Spazierwanderweg",
  km: "6,4",
  difficulty: "Leicht",
  tags: "Wiesensee, Westerwälder Seenplatte, barrierefrei, Familienfreundlich",
  sourceUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/wanderung/kleiner-waeller-wiesensee-stahlhofen-am-wiesensee/44998998/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=44998998&project=oar-rlp",
  tourenplanerUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/44998998/",
  stats: {
    ascent: "32 hm",
    descent: "32 hm",
    duration: "1:43 h",
    highPoint: "438 m",
    lowPoint: "407 m"
  },
  description: {
    headline: null,
    text: "Barrierefreier Rundwanderweg Kleiner Wäller Wiesensee mit Einkehrmöglichkeit und vielen Bänken rund um den Wiesensee. Aktuell führt der See aufgrund von Reparaturarbeiten kein Wasser.\n\nStart und Ziel ist der Parkplatz am Winner Ufer 9 in Stahlhofen am Wiesensee, direkt am See gelegen. Die Strecke führt komplett um den Wiesensee herum und ist mit ihrem nahezu ebenen Verlauf auch für Kinderwagen und mobilitätseingeschränkte Personen gut geeignet."
  },
  directions: { byCar: null },
  publicTransport: {
    arrival: null, returnTrip: null, returnTripUrl: null,
    stops: [], links: [], taxis: [],
    sustainableTip: null, sustainableTipUrls: [], moreInfoUrl: null
  },
  parking: [
    { location: "Stahlhofen am Wiesensee", free: "Parkplatz Winner Ufer 9, 56459 Stahlhofen am Wiesensee", paid: null }
  ],
  routeDescription: { general: null, accessTrails: [], accessTrailMarking: null },
  safetyNotes: null,
  safetyAppUrl: null,
  equipment: "Bequemes Schuhwerk genügt.",
  tips: [],
  literature: [],
  start: { name: "Parkplatz Winner Ufer", address: "Winner Ufer 9, 56459 Stahlhofen am Wiesensee", coordinates: null },
  destination: { name: "Parkplatz Winner Ufer", address: "Winner Ufer 9, 56459 Stahlhofen am Wiesensee", coordinates: null }
},

// ═══════════════════════════════════════════════════════════
// 18 – Westerburg  [PARTIAL]
// ═══════════════════════════════════════════════════════════
{
  id: 18,
  _status: "partial",
  title: "Kleiner Wäller Westerburg",
  subtitle: "Westerburg",
  type: "Spazierwanderweg",
  km: "4,8",
  difficulty: "Mittel",
  tags: "Liebfrauenkirche, Christ-König-Kirche, Rathausplatz, Schloss Westerburg",
  sourceUrl: "https://www.westerwald.info/d/kleiner-waeller-westerburg/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=806200957&project=oar-rlp",
  tourenplanerUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/806200957/",
  stats: {
    ascent: "137 hm",
    descent: "137 hm",
    duration: "1:20 h",
    highPoint: "420 m",
    lowPoint: "327 m"
  },
  description: {
    headline: null,
    text: "Kleiner Wäller Westerburg – anspruchsvoll, abwechslungsreich und voller kultureller Highlights. Unterwegs warten eindrucksvolle Ausblicke und historische Sehenswürdigkeiten.\n\nErleben Sie einen abwechslungsreichen Spaziergang durch Geschichte, Kultur und Natur – auf dem Kleinen Wäller Westerburg. Der Weg verbindet eindrucksvolle Aussichtspunkte, kulturelle Highlights und stille Waldpfade zu einem kurzweiligen Rundweg mit Anspruch.\n\nStartpunkt ist die imposante Liebfrauenkirche, die mit ihrer erhöhten Lage über der Stadt thront. Von hier führt der Weg durch das Wohngebiet vorbei an der Christ-König-Kirche, einem modernen Sakralbau aus der Nachkriegszeit. Über den Rathausplatz geht es weiter zu Schloss Westerburg und durch ruhige Waldpassagen zurück zum Ausgangspunkt."
  },
  directions: { byCar: null },
  publicTransport: {
    arrival: null, returnTrip: null, returnTripUrl: null,
    stops: [], links: [], taxis: [],
    sustainableTip: null, sustainableTipUrls: [], moreInfoUrl: null
  },
  parking: [],
  routeDescription: { general: null, accessTrails: [], accessTrailMarking: null },
  safetyNotes: null,
  safetyAppUrl: null,
  equipment: "Festes Schuhwerk wird empfohlen.",
  tips: [],
  literature: [],
  start: { name: "Liebfrauenkirche Westerburg", address: "Westerburg", coordinates: null },
  destination: { name: "Liebfrauenkirche Westerburg", address: "Westerburg", coordinates: null }
},

// ═══════════════════════════════════════════════════════════
// 19 – Rund um Mabühl / Oberroder Knoten  [PARTIAL]
// ═══════════════════════════════════════════════════════════
{
  id: 19,
  _status: "partial",
  title: "Kleiner Wäller Rund um Mabühl",
  subtitle: "Oberroder Knoten",
  type: "Spazierwanderweg",
  km: "3,4",
  difficulty: "Leicht",
  tags: "Familienfreundlich, Lehrpfad, Oberroder Knoten, Sportfischerverein Früh auf",
  sourceUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/wanderung/kleiner-waeller-rund-um-mabuehl-oberroder-knoten/57040240/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=57040240&project=oar-rlp",
  tourenplanerUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/57040240/",
  stats: {
    ascent: "70 hm",
    descent: "70 hm",
    duration: "0:55 h",
    highPoint: "546 m",
    lowPoint: "485 m"
  },
  description: {
    headline: null,
    text: "Familienfreundliche Rundtour mit schönen Ausblicken und viel Abwechslung.\n\nDie anschaulichen Tafeln erzählen viel über Wald und Flur, Bäume, Tiere und machen die Rundtour besonders abwechslungs- und lehrreich. Picknickmöglichkeiten gibt es am Parkplatz am Oberroder Knoten oder am Vereinsheim des Sportfischervereins \"Früh auf\"."
  },
  directions: { byCar: null },
  publicTransport: {
    arrival: null, returnTrip: null, returnTripUrl: null,
    stops: [], links: [], taxis: [],
    sustainableTip: null, sustainableTipUrls: [], moreInfoUrl: null
  },
  parking: [
    { location: "Oberroder Knoten", free: "Parkplatz am Oberroder Knoten mit Picknickmöglichkeit", paid: null }
  ],
  routeDescription: { general: null, accessTrails: [], accessTrailMarking: null },
  safetyNotes: null,
  safetyAppUrl: null,
  equipment: "Festes Schuhwerk wird empfohlen.",
  tips: [
    {
      name: "Vereinsheim Sportfischerverein \"Früh auf\"",
      note: "An den Wochenenden meist geöffnet — Möglichkeit, Getränke zu kaufen.",
      url: null
    }
  ],
  literature: [],
  start: { name: "Parkplatz Oberroder Knoten", address: "Oberroden", coordinates: null },
  destination: { name: "Parkplatz Oberroder Knoten", address: "Oberroden", coordinates: null }
},

// ═══════════════════════════════════════════════════════════
// 20 – Hessentagswanderweg (Herborn)  [PARTIAL]
// ═══════════════════════════════════════════════════════════
{
  id: 20,
  _status: "partial",
  title: "Kleiner Wäller Hessentagswanderweg",
  subtitle: "Herborn",
  type: "Spazierwanderweg",
  km: "5,0",
  difficulty: "Leicht",
  tags: "Herborner Altstadt, Fachwerk, Aussichtsturm Dillblick, Wildgehege, Naturpark Lahn-Dill-Bergland",
  sourceUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/wanderung/kleiner-waeller-hessentagswanderweg-herborn/44998827/",
  gpxUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=44998827&project=oar-rlp",
  tourenplanerUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/44998827/",
  stats: {
    ascent: "156 hm",
    descent: "156 hm",
    duration: "1:30 h",
    highPoint: "332 m",
    lowPoint: "199 m"
  },
  description: {
    headline: null,
    text: "Erlebe die sehenswerte Herborner Altstadt mit malerischem Fachwerk, den Aussichtsturm Dillblick und das Wildgehege mit seinen freundlichen Bewohnern. Viele Sitzplätze und Aussichtspunkte entlang des Weges, dazu Einkehrmöglichkeiten in der Altstadt.\n\nStartpunkt dieses abwechslungsreichen Spaziergangs ist der 17 m hohe Aussichtsturm Dillblick. Vor dem Start kann man hier den herrlichen Panoramablick genießen. Vom Turm führt der Weg durch das Wildgehege. Die Ziegen, Lamas und Esel freuen sich über Besuch. Das Damwild kann von einer Aussichtsplattform beobachtet werden. Für Kinder gibt es tolle Spiel- und Klettergeräte. Der Rundweg führt weiter vorbei an der Kriegsgräberstätte zurück in die Altstadt."
  },
  directions: { byCar: null },
  publicTransport: {
    arrival: null, returnTrip: null, returnTripUrl: null,
    stops: [], links: [], taxis: [],
    sustainableTip: null, sustainableTipUrls: [], moreInfoUrl: null
  },
  parking: [],
  routeDescription: { general: null, accessTrails: [], accessTrailMarking: null },
  safetyNotes: null,
  safetyAppUrl: null,
  equipment: "Festes Schuhwerk wird empfohlen.",
  tips: [],
  literature: [],
  start: { name: "Aussichtsturm Dillblick", address: "Herborn", coordinates: null },
  destination: { name: "Aussichtsturm Dillblick", address: "Herborn", coordinates: null }
}

];