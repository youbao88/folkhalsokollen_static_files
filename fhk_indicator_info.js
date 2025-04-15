const källa_url_map = {
  "Socialstyrelsens dödsorsaksstatistik":
    "https://www.folkhalsokollen.se/datakallor/socialstyrelsens-dodsorsaksstatistik",
  "VAL-databaserna":
    "https://www.folkhalsokollen.se/datakallor/val-databaserna",
  "Region Stockholms folkhälsoenkät":
    "https://www.folkhalsokollen.se/datakallor/region-Stockholms-folkhalsoenkat",
  "Barnhälsovårdens årsrapport":
    "https://www.folkhalsokollen.se/datakallor/barnhalsovardens-arsrapport",
  "Statistiska centralbyrån (SCB)":
    "https://www.folkhalsokollen.se/datakallor/sociodemografiska-data",
  "Databas över anmälda brott, Brottsförebyggande rådet (Brå)":
    "https://www.folkhalsokollen.se/datakallor/brottsforebyggande-radet",
  "Regionalt cancercentrum Stockholm Gotland (RCC)":
    "https://www.folkhalsokollen.se/datakallor/cancerdata",
  "SmiNet, Skatteverket": "https://www.folkhalsokollen.se/datakallor/sminet",
  "Institutet för miljömedicin (IMM)":
    "https://www.folkhalsokollen.se/datakallor/institutet-for-miljomedicin",
  Stockholmsenkäten:
    "https://www.folkhalsokollen.se/datakallor/stockholmsenkaten/",
  Graviditetsregistret:
    "https://www.folkhalsokollen.se/datakallor/graviditetsregistret/",
};
const indicator_info = {
  Boendeform: {
    definition:
      "Andel (%) individer som bor i hyresrätt, bostadsrätt eller eget småhus.",
    källa: "Statistiska centralbyrån (SCB) ",
    läsa_mer_1_text: "Människorna i Sverige, Statistiska centralbyrån (SCB). ",
    läsa_mer_1_link:
      "https://www.scb.se/hitta-statistik/sverige-i-siffror/manniskorna-i-sverige/",
  },
  Familjetyp: {
    definition:
      "Andel (%) individer som bor ensamma utan barn, ensamma med barn, bor tillsammans utan barn eller bor tillsammans med barn.",
    källa: "Statistiska centralbyrån (SCB) ",
    läsa_mer_1_text: "Människorna i Sverige, Statistiska centralbyrån (SCB). ",
    läsa_mer_1_link:
      "https://www.scb.se/hitta-statistik/sverige-i-siffror/manniskorna-i-sverige/",
  },
  Födelseland: {
    definition: "Andel (%) individer födda i Sverige, Europa eller annat land.",
    källa: "Statistiska centralbyrån (SCB) ",
    läsa_mer_1_text: "Människorna i Sverige, Statistiska centralbyrån (SCB). ",
    läsa_mer_1_link:
      "https://www.scb.se/hitta-statistik/sverige-i-siffror/manniskorna-i-sverige/",
  },
  Åldersgrupper: {
    definition: "Andel (%) individer i olika åldersgrupper.",
    källa: "Statistiska centralbyrån (SCB) ",
    läsa_mer_1_text: "Människorna i Sverige, Statistiska centralbyrån (SCB) ",
    läsa_mer_1_link:
      "https://www.scb.se/hitta-statistik/sverige-i-siffror/manniskorna-i-sverige/",
  },
  "Ekonomiskt bistånd": {
    definition:
      "Andel (%) individer som fått ekonomiskt bistånd i form av försörjningsstöd.",
    källa: "Statistiska centralbyrån (SCB) ",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Inkomst, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sociala-och-ekonomiska-forutsattningar/inkomst/",
  },
  "Huvudsaklig sysselsättning": {
    definition:
      "Andel (%) individer som studerar eller får sin huvudsakliga inkomst från förvärvsarbete, andel som får sin huvudsakliga inkomst från arbetslöshetsersättning (arbetslös) och andel som får sin huvudsakliga inkomst från förtidspension eller sjukpenning (sjukskriven)",
    källa: "Statistiska centralbyrån (SCB) ",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Arbete, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sociala-och-ekonomiska-forutsattningar/arbete/",
  },
  Inkomstnivå: {
    definition:
      "Andel (%) individer som har inkomster som ligger inom gruppen med lägst inkomst i länet (första kvartilen), medellåg inkomst (andra kvartilen), medelhög inkomst (tredje kvartilen) och högst inkomst (fjärde kvartilen). Indikatorn beräknas genom att inkomstfördelningen i hela länet rangordnas och delas in i fyra lika stora grupper (kvartiler). Inkomsten i sin tur beräknas som familjens totala nettoinkomst dividerat med antal personer i familjen, viktat efter antal barn respektive vuxna.",
    källa: "Statistiska centralbyrån (SCB) ",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Inkomst, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sociala-och-ekonomiska-forutsattningar/inkomst/",
  },
  "24-åringar med bristfällig utbildning": {
    definition:
      "Andel (%) 24-åringar där högsta utbildning inte motsvarar treårig gymnasieutbildning eller tvåårig yrkesinriktad gymnasieutbildning.",
    källa: "Statistiska centralbyrån (SCB) ",
    läsa_mer_1_text:
      "Utbildning - nyckeln till arbete. Sveriges kommuner och regioner (SKR)",
    läsa_mer_1_link:
      "https://skr.se/download/18.45167e4317e2b341b24bb50d/1642783429505/7585-365-9.pdf",
  },
  "Barn i familjer med låg inkomst": {
    definition:
      "Andel (%) som lever i familjer där inkomster efter skatt och bidrag inte räcker till nödvändiga levnadsomkostnader, som mat, kläder, el och boende, enligt Statistikmyndigheten SCB:s beräkning av inkomst för skälig levnadsnivå.",
    källa: "Statistiska centralbyrån (SCB) ",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Inkomst, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sociala-och-ekonomiska-forutsattningar/inkomst/",
  },
  Utbildningsnivå: {
    definition:
      "Andel (%) individer med förgymnasial, gymnasial eller eftergymnasial utbildning som högsta utbildningsnivå.",
    källa: "Statistiska centralbyrån (SCB) ",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Utbildning, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sociala-och-ekonomiska-forutsattningar/utbildning/",
  },
  "Amning vid 4 månaders ålder": {
    definition:
      "Andel (%) barn inom barnhälsovården som enbart eller delvis får bröstmjölk vid fyra månaders ålder. Barn som får enbart bröstmjölk och eventuella mineraler, vitaminer eller läkemedel, räknas som enbart ammande barn. Barn som får bröstmjölk, men också smakportioner, välling, bröstmjölksersättning eller hela måltider bestående av annan kost räknas som delvis ammande. Observera att det kan förekomma brister i data för olika år och man ska vara försiktig med att dra slutsatser från de år och område det gäller för. Data är inkomplett eller osäkra för: Norrtälje (år 2016–2018), Sigtuna (år 2016), Vallentuna (2020), Sollentuna (2021–2022), Solna (2021–2022), Haninge (2021), Tyresö (2021), Kungsholmen (2022).",
    källa: "Barnhälsovårdens årsrapport ",
    läsa_mer_1_text:
      "Årsrapport – barnhälsovård i Stockholms län 2023, Region Stockholm.",
    läsa_mer_1_link:
      "https://kunskapsstodforvardgivare.se/download/18.28eeaa311900ff142db87ea/1718694895552/%C3%85rsrapport%20Barnh%C3%A4lsov%C3%A5rd%C2%A02023.pdf",
  },
  "Exponering för tobaksrök vid 8 månaders ålder": {
    definition:
      "Andel (%) barn vars mamma, pappa eller annan person som stadigvarande bor i familjen rökte dagligen när barnet var fyra veckor och när en uppföljningen gjordes vid åtta månaders ålder. Observera att det kan förekomma brister i data för olika år och man ska vara försiktig med att dra slutsatser från de år och område det gäller för. Data är inkomplett för: Norrtälje (2016–2018), Sigtuna (2016), Skärholmen (2017), Kungsholmen (2022).",
    källa: "Barnhälsovårdens årsrapport ",
    läsa_mer_1_text:
      "Årsrapport – barnhälsovård i Stockholms län 2023, Region Stockholm.",
    läsa_mer_1_link:
      "https://kunskapsstodforvardgivare.se/download/18.28eeaa311900ff142db87ea/1718694895552/%C3%85rsrapport%20Barnh%C3%A4lsov%C3%A5rd%C2%A02023.pdf",
  },
  "Kariesfria 3-åringar": {
    definition:
      "Andel (%) treåringar utan kariesskadade tänder. Med skadade tänder avses tänder som har hål (karies), som dragits ut på grund av karies eller som fått fyllningar på grund av tidigare hål.",
    källa: "Barnhälsovårdens årsrapport ",
    läsa_mer_1_text:
      "Årsrapport – barnhälsovård i Stockholms län 2023, Region Stockholm.",
    läsa_mer_1_link:
      "https://kunskapsstodforvardgivare.se/download/18.28eeaa311900ff142db87ea/1718694895552/%C3%85rsrapport%20Barnh%C3%A4lsov%C3%A5rd%C2%A02023.pdf",
  },
  "Övervikt och obesitas 4-åringar": {
    definition:
      "\nAndel (%) fyraåringar med övervikt och obesitas. Övervikt (utan obesitas) definieras som ISO-BMI 25–30 och obesitas definieras som ISO-BMI 30 eller mer. ISO-BMI är ett BMI som är anpassat för barn från två års ålder. Observera att det kan förekomma brister i data för olika år och man ska vara försiktig med att dra slutsatser från de år och område det gäller för. Data är inkomplett för: Södertälje (2016–2017), Norrtälje (2017, 2018, 2021), Sigtuna (2017), Skärholmen (2017, 2021, 2022, 2023), Österåker (2021) , Rinkeby-Kista (2021).\n",
    källa: "Barnhälsovårdens årsrapport ",
    läsa_mer_1_text:
      "Årsrapport – barnhälsovård i Stockholms län 2023, Region Stockholm.",
    läsa_mer_1_link:
      "https://kunskapsstodforvardgivare.se/download/18.28eeaa311900ff142db87ea/1718694895552/%C3%85rsrapport%20Barnh%C3%A4lsov%C3%A5rd%C2%A02023.pdf",
  },
  "Anmälan socialtjänst via BVC": {
    definition:
      "Andel (%) barn i åldrarna 0–5 år per årskull kring vilka Barnavårdscentralen (BVC) gjort orosanmälan till socialtjänsten. Observera att det kan förekomma brister i data för olika år och man ska vara försiktig med att dra slutsatser från de år och område det gäller för. Data är inkomplett för: Norrtälje (år 2017–2018) och Kungsholmen (2022).",
    källa: "Barnhälsovårdens årsrapport ",
    läsa_mer_1_text:
      "Årsrapport – barnhälsovård i Stockholms län 2023, Region Stockholm.",
    läsa_mer_1_link:
      "https://kunskapsstodforvardgivare.se/download/18.28eeaa311900ff142db87ea/1718694895552/%C3%85rsrapport%20Barnh%C3%A4lsov%C3%A5rd%C2%A02023.pdf",
  },
  "Vaccinationstäckning MPR": {
    definition:
      "Andel (%) barn per årskull som har vaccinerats mot mässling, påssjuka och röda hund (MPR) med minst en dos. Data för år 2022 gäller barn födda 2020 och så vidare. Observera att det kan förekomma brister i data för olika år och man ska vara försiktig med att dra slutsatser från de år och område det gäller för. Data är inkomplett för: Norrtälje (2016–2018), Sigtuna (2016), Kungsholmen (2022).",
    källa: "Barnhälsovårdens årsrapport ",
    läsa_mer_1_text:
      "Årsrapport – barnhälsovård i Stockholms län 2023, Region Stockholm.",
    läsa_mer_1_link:
      "https://kunskapsstodforvardgivare.se/download/18.28eeaa311900ff142db87ea/1718694895552/%C3%85rsrapport%20Barnh%C3%A4lsov%C3%A5rd%C2%A02023.pdf",
    läsa_mer_2_text:
      "Strategier för att öka vaccinationstäckningen – en kunskapsöversikt. Rapport 2022:7. Centrum för epidemiologi och dsamhällsmedicin (CES).",
    läsa_mer_2_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20227-strategier-for-att-oka-vaccinationstackningen--en-kunskapsoversikt/",
  },
  "Röstande i kommunval": {
    definition:
      "Andel (%) individer som röstat i val till kommunfullmäktige av det totala antalet röstberättigade i kommunen eller stadsdelen (inklusive blanka och ogiltiga röster).",
    källa: "Statistiska centralbyrån (SCB)",
  },
  "Anmälda våldsbrott": {
    definition:
      "Samtliga anmälda våldsbrott (t.ex. mord, misshandel, ofredande och sexualbrott) hos polis, tull och åklagare. Antal redovisas efter den kommun eller stadsdel där brotten har begåtts. Om uppgift om brottsplats saknas redovisas uppgifterna endast på länsnivå. Antalet anmälda brott per kommun eller stadsdel divideras sedan med antal invånare. Brotten behöver därmed inte ha berört eller utförts av invånare i kommunen eller stadsdelen. Måttet indikerar ändå hur vanligt det är med våldsbrott i området, men påverkas av anmälningsbenägenheten, som kan skilja sig åt mellan grupper och områden.",
    källa: "Databas över anmälda brott, Brottsförebyggande rådet (Brå)",
    läsa_mer_1_text:
      "Strategi för att förebygga och bekämpa våld i Stockholms län 2020–2026, Länsstyrelsen",
    läsa_mer_1_link:
      "https://www.lansstyrelsen.se/stockholm/om-oss/vara-tjanster/publikationer/2019/strategi-for-att-forebygga-och-bekampa-vald-i-stockholms-lan---strategi-2020-2026.html",
    läsa_mer_2_text:
      "Inslag av cannabis vid dödligt våld i Stockholm och i Sverige. Delrapport 1 i en serie om cannabisproblematiken bland unga vuxna i Stockholms län. Rapport 2022:1, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_2_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20221-inslag-av-cannabis-vid-dodligt-vald-i-stockholm-och-i-sverige/",
    läsa_mer_3_text:
      "Sexuella trakasserier i Stockholms län. Rapport 2022:14. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_3_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-sexuella-trakasserier-i-stockholms-lan/",
    läsa_mer_4_text:
      "Folkhälsorapport 2023 - Sociala relationer. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_4_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sociala-och-ekonomiska-forutsattningar/sociala-relationer/",
  },
  "Utsatthet för hot och våld": {
    definition:
      "Andel (%) individer som uppger att de har utsatts för fysiskt våld under de senaste tolv månaderna.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 - Sociala relationer. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sociala-och-ekonomiska-forutsattningar/sociala-relationer/",
    läsa_mer_2_text:
      "Strategi för att förebygga och bekämpa våld i Stockholms län 2020–2026, Länsstyrelsen",
    läsa_mer_2_link:
      "https://www.lansstyrelsen.se/stockholm/om-oss/vara-tjanster/publikationer/2019/strategi-for-att-forebygga-och-bekampa-vald-i-stockholms-lan---strategi-2020-2026.html",
    läsa_mer_3_text:
      "Sexuella trakasserier i Stockholms län. Rapport 2022:14. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_3_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-sexuella-trakasserier-i-stockholms-lan/",
  },
  Ensamhet: {
    definition:
      "Andel (%) individer som uppger att de besväras av ensamhet minst en gång i veckan.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 - Sociala relationer. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sociala-och-ekonomiska-forutsattningar/sociala-relationer/",
    läsa_mer_2_text:
      "Ensamhet i Stockholms län (rapport 2021:10), Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_2_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-202110-ensamhet-i-stockholms-lan/",
    läsa_mer_3_text:
      "Strategier för att förebygga ensamhet hos äldre. Rapport 2021:11. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_3_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-202111-strategier-for-att-forebygga-ensamhet-hos-aldre/",
  },
  "Tillit till polisen": {
    definition:
      "Andel (%) individer som uppger att de har ganska stort eller mycket stort förtroende för polisen.",
    källa: "Region Stockholm Folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023. Sociala och ekonomiska förutsättningar, sociala relationer. Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sociala-och-ekonomiska-forutsattningar/sociala-relationer/",
  },
  "Tillit till riksdagen": {
    definition:
      "Andel (%) individer som uppger att de har ganska stort eller mycket stort förtroende för riksdagen.",
    källa: "Region Stockholm Folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 - Sociala relationer. Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sociala-och-ekonomiska-forutsattningar/sociala-relationer/",
  },
  "Tillit till sjukvården": {
    definition:
      "Andel (%) individer som uppger att de har ganska stort eller mycket stort förtroende för sjukvården.",
    källa: "Region Stockholm Folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 - Sociala relationer. Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sociala-och-ekonomiska-forutsattningar/sociala-relationer/",
  },
  "Rädsla att gå ut ensam": {
    definition:
      "Andel (%) individer som uppger att de ibland eller ofta avstår att gå ut ensamma av rädsla för att bli överfallna, rånade eller på annat sätt ofredade.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Strategi för att förebygga och bekämpa våld i Stockholms län 2020–2026, Länsstyrelsen",
    läsa_mer_1_link:
      "https://www.lansstyrelsen.se/stockholm/om-oss/vara-tjanster/publikationer/2019/strategi-for-att-forebygga-och-bekampa-vald-i-stockholms-lan---strategi-2020-2026.html",
    läsa_mer_2_text:
      "Folkhälsorapport 2023 - Sociala relationer. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_2_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sociala-och-ekonomiska-forutsattningar/sociala-relationer/",
  },
  "Utsatthet för sexuella trakasserier": {
    definition:
      "Andel (%) individer som uppger att de har blivit sexuellt trakasserade online eller fysiskt, under de senaste tolv månaderna.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Strategi för att förebygga och bekämpa våld i Stockholms län 2020–2026, Länsstyrelsen",
    läsa_mer_1_link:
      "https://www.lansstyrelsen.se/stockholm/om-oss/vara-tjanster/publikationer/2019/strategi-for-att-forebygga-och-bekampa-vald-i-stockholms-lan---strategi-2020-2026.html",
    läsa_mer_2_text:
      "Sexuella trakasserier i Stockholms län. Rapport 2022:14. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_2_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-sexuella-trakasserier-i-stockholms-lan/",
  },
  "Trafikbuller i bostad": {
    definition:
      "Andel (%) individer som uppger att trafikbuller (väg-, tåg- eller flygtrafik) medför störningar i eller i närheten av sin bostad (t.ex. svårt att somna eller svårt att ha fönster öppna på dagtid) varje vecka eller dagligen.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Buller i samhället, Centrum för arbets- och miljömedicin (CAMM) ",
    läsa_mer_1_link:
      "https://www.camm.regionstockholm.se/miljohalsa-online/buller-i-samhallet/",
  },
  "Fallskada (diagnostiserad)": {
    definition:
      "Andel (%) individer, 65 år eller äldre, som vårdats inom regionfinansierad öppen- eller slutenvård med lågenergifall (ICD-10 diagnoskoder: W00, W01, W05, W06, W07, W08, W09, W10, W17, W18, W19). Motsvarar i praktiken ett fall i samma plan eller mindre. ",
    källa: "VAL-databaserna",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Fallskador, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/fallolyckor/",
    läsa_mer_2_text:
      "Hur mår de allra äldsta i Stockholms län? Rapport 2023:6. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_2_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20236-hur-mar-de-allra-aldsta/",
  },
  "Vaccination mot säsongsinfluensa": {
    definition:
      "Andel (%) individer, 65 år eller äldre, som är vaccinerade mot säsongsinfluensa.",
    källa: "VAL-databaserna ",
    läsa_mer_1_text:
      "Folkhälsomyndighetens samlingssida om vaccination mot influensa",
    läsa_mer_1_link:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/vaccinationer/vacciner-a-o/influensa/",
    läsa_mer_2_text:
      "Budgetpåverkansanalys av vaccinationsprogram för äldre. Rapport 2023:3. Stockholm  centrum för hälsoekonomi (StoCHE).",
    läsa_mer_2_link:
      "https://www.folkhalsoguiden.se/publikationer/chis-rapport-2023-budgetpaverkansanalys-vaccinationsprogram/",
    läsa_mer_3_text:
      "Strategier för att öka vaccinationstäckningen – en kunskapsöversikt. Rapport 2022:7. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_3_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20227-strategier-for-att-oka-vaccinationstackningen--en-kunskapsoversikt/",
    läsa_mer_4_text:
      "Hur mår de allra äldsta i Stockholms län? Rapport 2023:6. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_4_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20236-hur-mar-de-allra-aldsta/",
  },
  "Vaccination mot covid-19": {
    definition:
      "Andel (%) individer, 65 år eller äldre, som har haft minst en vaccination mot covid-19 under året.",
    källa: "VAL-databaserna ",
    läsa_mer_1_text:
      "Folkhälsomyndighetens samlingssida om vaccination mot covid-19",
    läsa_mer_1_link:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/vaccinationer/vacciner-som-anvands-i-sverige/covid-19/",
    läsa_mer_2_text:
      "Strategier för att öka vaccinationstäckningen – en kunskapsöversikt.  Rapport 2022:7. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_2_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20227-strategier-for-att-oka-vaccinationstackningen--en-kunskapsoversikt/",
    läsa_mer_3_text:
      "Budgetpåverkansanalys av vaccinationsprogram för äldre. Rapport 2023:3. Stockholm centrum för hälsoekonomi (StoCHE).",
    läsa_mer_3_link:
      "https://www.folkhalsoguiden.se/publikationer/chis-rapport-2023-budgetpaverkansanalys-vaccinationsprogram/",
  },
  "Demens (diagnostiserad)": {
    definition:
      "Andel (%) individer, 65 år eller äldre, som vårdats inom regionfinansierad öppen- eller slutenvård med demens. Demens utgörs av demens vid Alzheimers sjukdom (ICD-10 F00), vaskulär demens (ICD-10 F01), demens vid andra sjukdomar (ICD-10 F02), ospecificerad demens (ICD-10 F03) samt, eller Alzheimers sjukdom (ICD-10 G30).\xa0",
    källa: "VAL-databaserna",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Demens, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/demens/",
    läsa_mer_2_text:
      "Hur mår de allra äldsta i Stockholms län? Rapport 2023:6. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_2_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20236-hur-mar-de-allra-aldsta/",
  },
  "Avstått läkemedel på grund av dålig ekonomi": {
    definition:
      "Andel (%) individer som uppger att de har avstått från att hämta ut läkemedel (ordinerade av läkare) under de senaste tolv månaderna, på grund av dålig ekonomi.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Inkomst, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sociala-och-ekonomiska-forutsattningar/inkomst/",
  },
  "Avstått vård på grund av dålig ekonomi": {
    definition:
      "Andel (%) individer som uppger att de, trots upplevt behov, har avstått från att besöka sjukvården under de senaste tolv månaderna, på grund av dålig ekonomi.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Inkomst, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sociala-och-ekonomiska-forutsattningar/inkomst/",
  },
  Öppenvårdsbesök: {
    definition:
      "Antal öppenvårdsbesök per 1 000 invånare inom primärvård, psykiatri och somatisk specialistvård (hemsjukvård, palliativ vård, BVC, MVC och kommunal sjukvård ingår inte). Öppenvårdsbesök avser journalförda kontakter med sjukvårdsmottagningar, i form av fysiskt besök, telefonkontakt eller nätläkarbesök. Vårdvolymerna kan ibland variera i viss mån mellan åren på grund av förändringar i vårdorganisationen eller registreringsrutiner, men också på grund av slumpvariationer i sjukdomars förekomst.",
    källa: "VAL-databaserna ",
  },
  Slutenvårdstillfällen: {
    definition:
      "Antal slutenvårdstillfällen (dvs. inläggningar på sjukhus) per 1 000 invånare inom geriatrik, psykiatri och somatisk specialistvård (hemsjukvård, palliativ vård, förlossningsvård och intagningsavdelning på sjukhus ingår inte). Vårdvolymerna kan ibland variera mellan åren på grund av förändringar i vårdorganisationen eller registreringsrutiner, men också på grund av slumpvariationer i sjukdomars förekomst.",
    källa: "VAL-databaserna ",
  },
  "Deltagande i föräldraskapsstöd under graviditet": {
    definition:
      "Andel (%) gravida som var förstföderskor och deltog i föräldraskapsstöd.\n\nFöräldraskapsstöd under graviditeten är en del av barnmorskemottagningarnas uppdrag. Syftet med föräldraskapsstödet är att främja barnets hälsa och utveckling genom att uppmärksamma och stärka föräldraskapet och föräldrars förmåga att möta det väntade barnet. Stödet innefattar både förlossnings- och föräldra¬förberedelse. Stödet kan erbjudas i olika former: gruppträffar, storgruppsföreläsningar, enskilt stöd, digitala gruppträffar eller enskilt digitalt informationsstöd. Målsättningen är att föräldraskapsstöd ska erbjudas alla blivande och nyblivna föräldrar",
    källa: "Graviditetsregistret",
    läsa_mer_1_text:
      "Årsrapport.  Barnmorskemottagningarna i Stockholms län 2023, Region Stockholm (pdf)\n",
    läsa_mer_1_link:
      "https://kunskapsstodforvardgivare.se/download/18.37e7d4a9192711eeaaa1479a/1729071091738/Arsrapport-modrahalsovard-2023.pdf",
    läsa_mer_2_text:
      "Hälsa under graviditet och nyföddhetsperiod. Rapport 2023:3, Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_2_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20233-halsa-under-graviditet-och-nyfoddhetsperiod/",
    läsa_mer_3_text:
      "Graviditetsregistrets årsrapport 2023. (pdf, medscinet.com)",
    läsa_mer_3_link:
      "https://www.medscinet.com/GR/uploads/hemsida/Graviditetsregistrets%20%C3%85rsrapport%202023%201.0.pdf",
    läsa_mer_4_text:
      "Graviditet, förlossning och tiden efter - Nationellt kunskapsstöd för kontinuitet i vårdkedjan och vård på rätt nivå, Socialstyrelsen 2022 (pdf). ",
    läsa_mer_4_link:
      "https://www.socialstyrelsen.se/globalassets/sharepoint-dokument/artikelkatalog/kunskapsstod/2022-12-8287.pdf",
    läsa_mer_5_text:
      "Myndigheten för familjerätt och föräldraskapsstöd: Nationell strategi för ett stärkt föräldraskapsstöd (mfof.se)",
    läsa_mer_5_link:
      "https://www.mfof.se/foraldraskapsstod/nationell-strategi-for-ett-starkt-foraldraskapsstod.html",
    läsa_mer_6_text:
      "Myndigheten för familjerätt och föräldraskapsstöd: Mödra- och barnhälsovården (mfof.se)",
    läsa_mer_6_link:
      "https://www.mfof.se/foraldraskapsstod/arenor-for-foraldraskapsstod/modra--och-barnhalsovarden.html",
  },
  "Psykisk ohälsa": {
    definition:
      'Andel (%) individer som lider av psykisk ohälsa mätt med Kessler Psychological Distress Scale (K6). K6 består av sex frågor om psykisk ohälsa under de senaste 30 dagarna och hur stor del av tiden besvären funnits. Ett värde på 8 eller mer räknas som psykisk ohälsa.<br><br><b>Varför syns inte utvecklingen över tid?</b><br>Sedan 1990 har den psykiska ohälsan i Stockholms län mätts med tolvfrågorsversionen av General Health Questionnaire (GHQ-12). I senaste folkhälsoenkäten, Hälsa Stockholm 2021, ersättes GHQ-12 med ett motsvarande mätverktyg: sexfrågorsversionen av Kessler Psychological Distress Scale (K6)<br>Både GHQ-12 och K6 är utvecklade som screeningsinstrument för psykisk ohälsa, men skiljer sig i längd, svarsalternativ och till viss del i innehåll. På grund av skillnaderna kan man inte direkt jämföra ett visst värde i GHQ-12 med ett visst värde i K6, och vice versa. Folkhälsokollen redovisar därför enbart data för 2021 mätt med K6.<br><br><b>Se utvecklingen över tid på länsnivå</b><br>Ett visst urval av deltagarna i 2021 års folkhälsoenkät (de som ingår i Stockholm Public Health Cohort) har fått besvara GHQ-12-frågorna i enkäten. Det gör att vi kan redovisa en tidstrend för psykisk hälsa på länsnivå.<br><br><button class="buttonLink" title="https://www.folkhalsokollen.se/webbverktyg/psykisk-halsa-over-tid-i-stockholms-lan" role="link" onclick="window.open(\'https://www.folkhalsokollen.se/webbverktyg/psykisk-halsa-over-tid-i-stockholms-lan\', \'_blank\')">Tidstrend för psykisk ohälsa på länsnivå och information om GHQ-12 och K6</button>\n',
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text: "Inriktning - Uppdrag Psykisk Hälsa i Stockholms län",
    läsa_mer_1_link:
      "https://www.uppdragpsykiskhalsa.se/stockholmslan/inriktning/",
    läsa_mer_2_text:
      "Stigma kring psykisk ohälsa. Rapport 2023:6. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_2_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20236-stigma-kring-psykisk-ohalsa/",
    läsa_mer_3_text:
      "Psykisk ohälsa och psykiskt välbefinnande i befolkningen. Rapport 2023:4. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_3_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20234-psykisk-ohalsa-och-psykiskt-valbefinnande-i-befolkningen/",
    läsa_mer_4_text:
      "Psykisk ohälsa i Stockholms län. Rapport 2022:13. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_4_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-2022-13-psykisk-ohalsa-i-stockholms-lan/",
    läsa_mer_5_text:
      "Arbetsanpassning vid psykisk ohälsa. Rapport 2024:05. Centrum för arbets- och miljömedicin (CAMM).",
    läsa_mer_5_link:
      "https://www.folkhalsoguiden.se/publikationer/camm-rapport-202405/",
  },
  Självmordstankar: {
    definition:
      "Andel (%) individer som uppger att de har allvarligt övervägt att ta sitt liv det senaste året.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Självmord och självskador, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/sjalvmord-och-sjalvskador/",
    läsa_mer_2_text:
      "Tidigare vårdkonsumtion bland alla personer som dog suicid i Stockholms län år 2011 till 2016. Rapport 2021:2, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_2_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20212-tidigare-vardkonsumtion-bland-alla-personer-som-dog-i-suicid-i-stockholms-lan-ar-20112016/ ",
    läsa_mer_3_text:
      "Suicidkommunikation på digitala plattformar. Rapport 2021. Nationellt centrum för suicidforskning (NASP).",
    läsa_mer_3_link:
      "https://www.folkhalsoguiden.se/publikationer/nasp-suicidkommunikation-pa-digitala-plattformar/",
    läsa_mer_4_text: "Inriktning - Uppdrag Psykisk Hälsa i Stockholms län",
    läsa_mer_4_link:
      "https://www.uppdragpsykiskhalsa.se/stockholmslan/inriktning/",
    läsa_mer_5_text:
      "Journalgranskningsstudie – Självmord i Stockholms län 2015. Delrapport 2: Psykosociala faktorer dokumenterade bland unga 0–24 år. Rapport 2024:05. Centrum för hälsoekonomi, informatik och sjukvårdsforskning (CHIS).",
    läsa_mer_5_link:
      "https://www.folkhalsoguiden.se/publikationer/chis-rapport-202405/",
  },
  Självmordsförsök: {
    definition:
      "Andel (%) individer som uppger att de har försökt att ta sitt liv det senaste året. Data för år 2018 är exkluderade eftersom frågan i den enkäten avviker från andra år.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Självmord och självskador, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/sjalvmord-och-sjalvskador/",
    läsa_mer_2_text:
      "Tidigare vårdkonsumtion bland alla personer som dog suicid i Stockholms län år 2011 till 2016.. Rapport 2021:2, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_2_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20212-tidigare-vardkonsumtion-bland-alla-personer-som-dog-i-suicid-i-stockholms-lan-ar-20112016/",
    läsa_mer_3_text:
      "Suicidkommunikation på digitala plattformar. Rapport 2021. Nationellt centrum för suicidforskning (NASP).",
    läsa_mer_3_link:
      "https://www.folkhalsoguiden.se/publikationer/nasp-suicidkommunikation-pa-digitala-plattformar/",
    läsa_mer_4_text: "Inriktning - Uppdrag Psykisk Hälsa i Stockholms län",
    läsa_mer_4_link:
      "https://www.uppdragpsykiskhalsa.se/stockholmslan/inriktning/",
    läsa_mer_5_text:
      "Journalgranskningsstudie – Självmord i Stockholms län 2015. Delrapport 2: Psykosociala faktorer dokumenterade bland unga 0–24 år. Rapport 2024:05. Centrum för hälsoekonomi, informatik och sjukvårdsforskning (CHIS).",
    läsa_mer_5_link:
      "https://www.folkhalsoguiden.se/publikationer/chis-rapport-202405/",
  },
  "Spänd arbetssituation": {
    definition:
      "Andel (%) individer som har ett spänt arbete som definieras som höga arbetskrav i relation till låg kontroll över vad som ska utföras och hur. Höga arbetskrav definieras som de som uppger att de har inte tillräckligt med tid för att hinna med sina arbetsuppgifter eller uppger att det förekommer motstridiga krav i sitt arbete. Låg kontroll definieras som de som uppger att arbetet inte ger dem möjlighet att lära sig något nytt och att utvecklas i arbetet, att de inte har frihet att bestämma vad som ska utföras i sitt arbete eller hur det ska utföras.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Arbetshälsorapport Stockholms län 2024, Centrum för arbets- och miljömedicin (CAMM)",
    läsa_mer_1_link:
      "https://www.camm.regionstockholm.se/49a041/globalassets/verksamheter/forskning-och-utveckling/centrum-for-arbets--och-miljomedicin1/dokument/rapporter/ahr2024-tillganglighetsanpassad.pdf",
  },
  "Depression och ångest (diagnostiserad)": {
    definition:
      "Andel (%) individer, 18 år eller äldre, som vårdats inom regionfinansierad öppen- eller slutenvård med diagnosen depression, ångest eller stressrelaterade tillstånd (ICD-10-diagnos F32-F34, F38 F39, F40-F43). Observera att eftersom data bygger på rapporterade diagnoser från vården skulle skillnader mellan områden eller över tid, delvis kunna bero på skillnader i registreringen av diagnoser. Måttet redovisar individer med en registrerad diagnos och täcker därför inte hela andelen som lider av depression och ångest. Säkerheten i talen är mindre i de kommuner eller stadsdelar med en mindre befolkningsstorlek, som till exempel i Salem, Nykvarn och Vaxholm.",
    källa: "VAL-databaserna ",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Depression och ångest, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/angest-och-depression/",
    läsa_mer_2_text:
      "Nationella riktlinjer för vård vid depression och ångestsyndrom, Socialstyrelsen",
    läsa_mer_2_link:
      "https://www.socialstyrelsen.se/kunskapsstod-och-regler/regler-och-riktlinjer/nationella-riktlinjer/riktlinjer-och-utvarderingar/depression-och-angest/",
    läsa_mer_3_text: "Regionalt vårdprogram för depression, Region Stockholm",
    läsa_mer_3_link:
      "https://psykiatristod.se/regionala-vardprogram/depression",
    läsa_mer_4_text:
      "Stigma kring psykisk ohälsa. Rapport 2023:6. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_4_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20236-stigma-kring-psykisk-ohalsa/",
    läsa_mer_5_text:
      "Förekomst av ångestdiagnos bland unga i Stockholms län. Rapport 2024:3. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_5_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20243-forekomst-av-angestdiagnos-bland-unga-i-stockholms-lan/",
  },
  "Adhd (diagnostiserad)": {
    definition:
      "Andel (%) individer, 0–17 år eller 18–29 år, som vårdats inom regionfinansierad öppen- eller slutenvård med en adhd-diagnos (ICD-10-diagnos F90). Observera att eftersom data bygger på rapporterade diagnoser från vården skulle skillnader mellan områden eller över tid, delvis kunna bero på skillnader i registreringen av diagnoser. Måttet redovisar individer med en registrerad diagnos och täcker därför inte hela andelen som har adhd. Säkerheten i talen är mindre i de kommuner eller stadsdelar med en mindre befolkningsstorlek, som till exempel i Salem, Nykvarn och Vaxholm.",
    källa: "VAL-databaserna ",
    läsa_mer_1_text:
      "Autismspektrumtillstånd och adhd bland barn och ungdomar i Stockholms län\nFörekomst av diagnoser i befolkningen samt vårdkonsumtion: Uppföljningsrapport år 2024 (Rapport 2024:2), Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-2024.2-autismspektrumtillstand-och-adhd-bland-barn-och-ungdomar-i-stockholms-lan/",
    läsa_mer_2_text:
      "Autismspektrumtillstånd och adhd bland vuxna i Stockholms län Förekomst av diagnoser i befolkningen samt vårdkonsumtion. Rapport 2022, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_2_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20232-autismspektrumtillstand-och-adhd-bland-vuxna-i-stockholms-lan/",
  },
  "Autismspektrumtillstånd (diagnostiserad)": {
    definition:
      "Andel (%) individer, 0–17 år eller 18–29 år, som vårdats inom regionfinansierad öppen- eller slutenvård med diagnosen autismspektrumtillstånd (ICD-10-diagnos F84). Observera att eftersom data bygger på rapporterade diagnoser från vården skulle skillnader mellan områden eller över tid, delvis kunna bero på skillnader i registreringen av diagnoser. Måttet redovisar individer med en registrerad diagnos och täcker därför inte hela andelen som har autismspektrumtillstånd. Säkerheten i talen är mindre i de kommuner eller stadsdelar med en mindre befolkningsstorlek, som till exempel i Salem, Nykvarn och Vaxholm.",
    källa: "VAL-databaserna ",
    läsa_mer_1_text:
      "Autismspektrumtillstånd och adhd bland barn och ungdomar i Stockholms län\nFörekomst av diagnoser i befolkningen samt vårdkonsumtion: Uppföljningsrapport år 2024 (Rapport 2024:2), Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-2024.2-autismspektrumtillstand-och-adhd-bland-barn-och-ungdomar-i-stockholms-lan/",
    läsa_mer_2_text:
      "Autismspektrumtillstånd och adhd bland vuxna i Stockholms län Förekomst av diagnoser i befolkningen samt vårdkonsumtion. Rapport 2022, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_2_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20232-autismspektrumtillstand-och-adhd-bland-vuxna-i-stockholms-lan/",
  },
  "Fysiskt tungt arbete": {
    definition:
      "Andel (%) individer som uppger att sitt arbete innebär att de jobbar rent kroppsligt, att de flera gånger om dagen måste lyfta minst 15 kilo åt gången, att de arbetar i vriden ställning eller arbetar med händerna upplyfta i höjd med axlarna eller högre mer än en fjärdedel av sin arbetstid.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Arbetshälsorapport Stockholms län 2024, Centrum för arbets- och miljömedicin (CAMM)",
    läsa_mer_1_link:
      "https://www.camm.regionstockholm.se/49a041/globalassets/verksamheter/forskning-och-utveckling/centrum-for-arbets--och-miljomedicin1/dokument/rapporter/ahr2024-tillganglighetsanpassad.pdf",
  },
  "Vibrationer på jobbet": {
    definition:
      "Andel (%) individer som uppger att de i sitt arbete använder vibrerande handhållna maskiner eller redskap minst fyra timmar per vecka och/eller utsätts för helkroppsvibrationer minst fyra timmar per vecka.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Arbetshälsorapport Stockholms län 2024, Centrum för arbets- och miljömedicin (CAMM)",
    läsa_mer_1_link:
      "https://www.camm.regionstockholm.se/49a041/globalassets/verksamheter/forskning-och-utveckling/centrum-for-arbets--och-miljomedicin1/dokument/rapporter/ahr2024-tillganglighetsanpassad.pdf",
  },
  Våtarbete: {
    definition:
      "Andel (%) individer som uppger att de genom sitt arbete har hudkontakt med vatten mer än två timmar per dag.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Arbetshälsorapport Stockholms län 2024, Centrum för arbets- och miljömedicin (CAMM)",
    läsa_mer_1_link:
      "https://www.camm.regionstockholm.se/49a041/globalassets/verksamheter/forskning-och-utveckling/centrum-for-arbets--och-miljomedicin1/dokument/rapporter/ahr2024-tillganglighetsanpassad.pdf",
  },
  "Buller på jobbet": {
    definition:
      "Andel (%) individer som uppger att de i sitt arbete måste använda en hög röst, mycket hög röst eller behöver skrika när de samtalar med andra på cirka 1  meters avstånd när det bullrar som mest på arbetsplatsen.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Arbetshälsorapport Stockholms län 2024, Centrum för arbets- och miljömedicin (CAMM)",
    läsa_mer_1_link:
      "https://www.camm.regionstockholm.se/49a041/globalassets/verksamheter/forskning-och-utveckling/centrum-for-arbets--och-miljomedicin1/dokument/rapporter/ahr2024-tillganglighetsanpassad.pdf",
  },
  "Luftförorening på jobbet": {
    definition:
      "Andel (%) individer som uppger att de i sitt arbete utsätts för damm, motoravgaser eller rök minst fyra timmar per vecka.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Arbetshälsorapport Stockholms län 2024, Centrum för arbets- och miljömedicin (CAMM)",
    läsa_mer_1_link:
      "https://www.camm.regionstockholm.se/49a041/globalassets/verksamheter/forskning-och-utveckling/centrum-for-arbets--och-miljomedicin1/dokument/rapporter/ahr2024-tillganglighetsanpassad.pdf",
  },
  "Användning av hasch eller marijuana": {
    definition:
      "Andel (%) individer som uppger att de har använt hasch eller marijuana det senaste året.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Narkotikavanor, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/levnadsvanor/droganvandning/",
    läsa_mer_2_text:
      "Inslag av cannabis vid dödligt våld i Stockholm ooch i Sverige. Rapport 2022:1. Centrum för epidemiologi och samhällsmedicin (CES). ",
    läsa_mer_2_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20221-inslag-av-cannabis-vid-dodligt-vald-i-stockholm-och-i-sverige/ ",
    läsa_mer_3_text:
      "Cannabisbrottens geografi i Stockholms län. Rapport 2022:2. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_3_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20222-cannabisbrottens-geografi-i-stockholms-lan/",
    läsa_mer_4_text:
      "Ungas uppfattning om cannabis. Rapport 2022:4. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_4_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20224-ungas-uppfattning-om-cannabis/",
    läsa_mer_5_text:
      "Cannabisrelaterad vård bland unga vuxna. Rapport 2022:6. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_5_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20226-cannabisrelaterad-vard-bland-unga-vuxna/",
    läsa_mer_6_text:
      "Unga vuxnas cannabisbruk. Rapport 2023:10. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_6_link:
      "https://www.folkhalsoguiden.se/publikationer/rapport-202310-unga-vuxnas-cannabisbruk/",
  },
  "Röker dagligen": {
    definition:
      "Andel (%) individer som uppger att de röker dagligen. Rökning avser tobaksvaror såsom cigaretter, cigariller och piptobak.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Rökning, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/levnadsvanor/rokning/",
    läsa_mer_2_text: "Tobaksprevention (ces.regionstockholm.se)",
    läsa_mer_2_link:
      "https://www.ces.regionstockholm.se/projekt-och-uppdrag/tobaksprevention/",
    läsa_mer_3_text: "Sluta-röka-linjen",
    läsa_mer_3_link: "https://www.slutarokalinjen.se",
    läsa_mer_4_text:
      "Kostnadsfria nikotinläkemedel som stöd till rökstopp. Rapport 2022:10. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_4_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-202210/",
    läsa_mer_5_text:
      "Stöd till rökavvänjning i grupper med låg socioekonomi. Rapport 2023:1. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_5_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20231-stod-till-rokavvanjning-i-grupper-med-lag-socioekonomi/",
    läsa_mer_6_text:
      "Metoder för rökavvänjning bland tonåringar och unga vuxna. Rapport 2023:7. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_6_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20237-metoder-for-rokavvanjning-bland-tonaringar-och-unga-vuxna/",
    läsa_mer_7_text:
      "SOTIS – Samtal om tobak och nikotin i mötet med ungdomar. Centrum för epidemiologi och samhällsmedicin (CES). 2024.",
    läsa_mer_7_link: "https://www.folkhalsoguiden.se/publikationer/ces-sotis/",
  },
  "Snusar dagligen": {
    definition: "Andel (%) individer som uppger att de snusar dagligen.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Rökning. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/levnadsvanor/rokning/",
    läsa_mer_2_text: "Tobaksprevention (ces.regionstockholm.se)",
    läsa_mer_2_link:
      "https://www.ces.regionstockholm.se/projekt-och-uppdrag/tobaksprevention/",
    läsa_mer_3_text: "Sluta-röka-linjen",
    läsa_mer_3_link: "https://www.slutarokalinjen.se",
    läsa_mer_4_text:
      "SOTIS – Samtal om tobak och nikotin i mötet med ungdomar. Centrum för epidemiologi och samhällsmedicin (CES). 2024.",
    läsa_mer_4_link: "https://www.folkhalsoguiden.se/publikationer/ces-sotis/",
  },
  "Riskbruk alkohol": {
    definition:
      "Andel (%) individer som uppger en alkoholkonsumtion som definieras som riskbruk. Riskbruk är definierat som sex poäng eller mer för män och fem poäng eller mer för kvinnor i AUDIT-C skalan. AUDIT-C är ett kort screeningsinstrument för att ringa in riskbruk. Gränsvärden är de som Folkhälsomyndigheten använt i nationella folkhälsoundersökningen Hälsa på lika villkor (HLV) 2004-2022. ",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Alkoholvanor, Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/levnadsvanor/alkoholvanor/",
    läsa_mer_2_text:
      "Stockholmarnas alkoholvanor. Rapport 2022:12. Centrum för epidemiologi och samhällsmedicin (CES).\n",
    läsa_mer_2_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-202212/",
    läsa_mer_3_text: "Alkoholhjälpen",
    läsa_mer_3_link: "https://alkoholhjalpen.se/",
    läsa_mer_4_text:
      "Frågor och svar om risker med alkoholkonsumtion. Folkhälsomyndigheten (folkhalsomyndigheten.se) ",
    läsa_mer_4_link:
      "https://www.folkhalsomyndigheten.se/livsvillkor-levnadsvanor/andts/fragor-och-svar/fragor-och-svar-om-risker-med-alkoholkonsumtion/",
  },
  "Fysisk aktivitet": {
    definition:
      "Andel (%) inivider som uppger en nivå av fysisk aktivitet som uppnår gällande rekommendationer för fysisk aktivitet (sammanlagt 150 minuter fysisk aktivitet per vecka av måttlig intensitet eller 75 minuter ansträngande insitensitet, alternativt en kombination).",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Fysisk aktivitet, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/levnadsvanor/fysisk-aktivitet/",
    läsa_mer_2_text:
      "Matvanor, idrott och vikt bland elever från 100 grundskolor i Stockholms län. Rapport 2020:7. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_2_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20207-matvanor-idrott-och-vikt-bland-elever---fran-100-grundskolor-i-stockholms-lan/",
  },
  "Lågt intag frukt": {
    definition:
      "Andel (%) individer som uppger att de äter frukt eller bär mindre än en gång per dag.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Matvanor, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/levnadsvanor/matvanor/",
    läsa_mer_2_text: "SkolmatSverige",
    läsa_mer_2_link: "https://www.skolmatsverige.se/",
    läsa_mer_3_text: "Matguiden - Mat och hälsa",
    läsa_mer_3_link: "https://www.folkhalsoguiden.se/matguiden/mat-och-halsa/",
  },
  "Lågt intag grönsaker": {
    definition:
      "Andel (%) individer som uppger att de äter grönsaker mindre än en gång per dag.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Matvanor, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/levnadsvanor/matvanor/",
    läsa_mer_2_text: "SkolmatSverige",
    läsa_mer_2_link: "https://www.skolmatsverige.se/",
    läsa_mer_3_text: "Matguiden - Mat och hälsa",
    läsa_mer_3_link: "https://www.folkhalsoguiden.se/matguiden/mat-och-halsa/",
  },
  "Högt intag läsk, saft, sötade drycker": {
    definition:
      "Andel (%) individer som uppger att de dricker läsk, saft eller sötade drycker mer än en gång per vecka.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Matvanor, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/levnadsvanor/matvanor/",
    läsa_mer_2_text: "SkolmatSverige",
    läsa_mer_2_link: "https://www.skolmatsverige.se/",
    läsa_mer_3_text: "Matguiden - Mat och hälsa",
    läsa_mer_3_link: "https://www.folkhalsoguiden.se/matguiden/mat-och-halsa/",
  },
  Sömnsvårigheter: {
    definition:
      "Andel (%) individer som uppger att de har lätta eller svåra besvär av sömnsvårigheter.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Sömnbrist kopplat till depression och suicidtankar bland ungdomar. Faktablad 2023, Nationellt centrum för suicidprevention (NASP)",
    läsa_mer_1_link:
      "https://www.folkhalsoguiden.se/publikationer/chis-faktablad---somnbrist-kopplat-till-depression-och-suicidtankar-hos-ungdomar/",
  },
  "Begränsande sjukdom": {
    definition:
      "Andel (%) individer som uppger att de har en långvarig sjukdom, besvär efter olycksfall, funktionshinder eller annat långvarigt hälsoproblem som har medfört att arbetsförmågan är nedsatt eller har hindrat andra dagliga sysselsättningar i hög grad eller i någon mån.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Sjukdomar och skador, Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/",
    läsa_mer_2_text:
      "Hur mår de allra äldsta i Stockholms län? Rapport 2023:6. Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_2_link:
      "https://www.folkhalsoguiden.se/4a4d82/globalassets/verksamheter/forskning-och-utveckling/centrum-for-epidemiologi-och-samhallsmedicin/folkhalsoguiden/rapporter-och-faktablad/rapport-2023.6-hur-mar-de-allra-aldsta-i-stockholms-lan.pdf",
    läsa_mer_3_text:
      "Personer med omfattande funktionsnedsättning i Stockholms län. Rapport 2023:9. Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_3_link:
      "\nhttps://www.folkhalsoguiden.se/publikationer/ces-rapport-20239-personer-med-omfattande-funktionsnedsattning-i-stockholms-lan/",
  },
  "Självskattad hälsa": {
    definition:
      "Andel (%) individer som bedömer sitt allmänna hälsotillstånd som någorlunda, dåligt eller mycket dåligt.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Hälsoläget i Stockholms län, Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/introduktion-och-metod/halsolaget-i-stockholms-lan/",
  },
  Ryggsmärta: {
    definition:
      "Andel (%) individer som uppger att de under de senaste sex månaderna haft ont i nedre delen av ryggen, vilket medfört att arbetsförmågan varit nedsatt eller att de hindrats i andra dagliga sysselsättningar i hög grad eller någon mån.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Smärta, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/smarta/",
  },
  Nacksmärta: {
    definition:
      "Andel (%) individer som uppger att de under de senaste sex månaderna haft ont i nacken, övre delen av ryggen eller skuldrorna, vilket medfört att arbetsförmågan varit nedsatt eller att de hindrats i andra dagliga sysselsättningar i hög grad eller någon mån.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Smärta, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/smarta/",
    läsa_mer_2_text:
      "Nacksmärta – orsaker och åtgärder. Rapport 2019:1, Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_2_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20191-nacksmarta--orsaker-och-atgarder/",
  },
  "Huvudvärk eller migrän": {
    definition:
      "Andel (%) individer som uppger att de under de senaste sex månaderna haft återkommande huvudvärk eller migrän, vilket medfört att arbetsförmågan varit nedsatt eller att de hindrats i andra dagliga sysselsättningar i hög grad eller någon mån.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Smärta, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/smarta/",
  },
  "Diabetes (diagnostiserad)": {
    definition:
      "Antal individer per 100 000 som har fått vård med diagnosen diabetes typ 2 (diagnoskod E11, ICD-10)",
    källa: "VAL-databaserna",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Diabetes, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/diabetes/",
  },
  "Övervikt och obesitas": {
    definition:
      "Andel (%) individer som uppger en vikt och längd som motsvarar övervikt utan obesitas (BMI 25–30 kg/m2) eller obesitas (BMI över 30 kg/m2). Övervikt totalt definieras som BMI över 25 kg/m2.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Övervikt, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/riskfaktorer/overvikt/",
    läsa_mer_2_text:
      "Den ojämlika obesitasvården. Rapport 2022:3, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_2_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20223-den-ojamlika-obesitasvarden/",
  },
  nan: {},
  "Premenstruellt syndrom (PMS)": {
    definition:
      "Andel (%) kvinnor i åldern 16–40 år som uppger att de har måttliga till svåra besvär av PMS",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Gynekologiska sjukdomar, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/gynekologiska-sjukdomar/",
    läsa_mer_2_text:
      "Riktlinjer vid premenstruell dysforisk störning, PMDS. Janusinfo.se, Region Stockholm",
    läsa_mer_2_link:
      "https://janusinfo.se/behandling/expertgruppsutlatanden/kvinnosjukdomarochforlossning/kvinnosjukdomarochforlossning/riktlinjervidpremenstruelldysforiskstorningpmds.5.6081a39c160e9b387319f3.html",
  },
  Tandhälsa: {
    definition:
      "Andel (%) individer som uppger att de har varken bra eller dålig, dålig eller mycket dålig tandhälsa.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Tandhälsan hos barn och ungdomar i Stockholms län 2022. Raport, 2022, Hälso- och sjukvårdsförvaltningen, Region Stockholm.",
    läsa_mer_1_link:
      "https://akademiskbarntandvard.ki.se/wp-content/uploads/sites/141/2023/06/Tandhalsorapport-2022.pdf",
    läsa_mer_2_text:
      "Riktlinjer vid premenstruell dysforisk störning, PMDS - Janusinfo.se",
  },
  "Förväntad medellivslängd": {
    definition:
      "Antal år som i genomsnitt återstår att leva vid födseln för en person enligt den gällande dödligheten vid tidpunkten. Beräkningarna är gjorda av demografer vid Statistiska centralbyrån (SCB), på beställning av Tillväxt- och regionplaneförvaltningen, Region Stockholm.",
    källa: "Statistiska centralbyrån (SCB)",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 - Hälsoläget i Stockholm. Centrum för epidemiologi och samhällsmedicin (CES). ",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/introduktion-och-metod/halsolaget-i-stockholms-lan/ ",
    läsa_mer_2_text:
      "Medellivslängden i Sverige, Statistiska Centralbyrån (SCB)",
    läsa_mer_2_link:
      "https://www.scb.se/hitta-statistik/sverige-i-siffror/manniskorna-i-sverige/medellivslangd-i-sverige/",
  },
  Ohälsodagar: {
    definition:
      "Genomsnittligt antal dagar med ohälsa som ersatts genom socialförsäkringarna, det vill säga utöver de 14 dagar som arbetsgivaren bekostar. Dagar med ohälsa består av summan av sjukpenningdagar, rehabiliteringsdagar samt dagar med arbetsskadeersättning och sjukersättning eller aktivitetsersättning. ",
    källa: "Statistiska centralbyrån (SCB) ",
  },
  "Hjärtinfarkt (ålder nyinsjuknade)": {
    definition:
      "Medianåldern för nyinsjuknande i hjärtinfarkt, vilket definieras som ett vårdtillfälle med någon av huvuddiagnoserna I20–125 (ICD-10) hos individer som aldrig tidigare haft en hjärtinfarkt eller där det gått minst sju år sedan den senaste. Resultaten redovisas som ett femårsmedelvärde.",
    källa: "VAL-databaserna ",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Hjärtinfarkt och stroke, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten/sjukdomar-och-skador/hjartinfarkt-och-stroke/",
  },
  "Stroke (ålder nyinsjuknade)": {
    definition:
      "Medianåldern för nyinsjuknande i stroke, vilket definieras som ett vårdtillfälle med någon av huvuddiagnoserna I60–I69 (ICD-10) hos individer som aldrig tidigare haft en stroke, eller där det gått minst sju år sedan man senast vårdades för stroke. Resultaten redovisas som ett femårsmedelvärde.",
    källa: "VAL-databaserna ",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Hjärtinfarkt och stroke, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/hjartinfarkt-och-stroke/",
  },
  Lungcancer: {
    definition:
      "Antal nya fall av lungcancer per 100 000 invånare. Som årtal beräknas tidpunkten för första diagnosen under perioden 2006–2019 ur Cancerregistret.",
    källa: "Regionalt cancercentrum Stockholm Gotland (RCC)",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Cancer, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/cancer/ ",
    läsa_mer_2_text:
      "Regional cancerplan Stockholm-Gotland 20204–2027, Regionalt cancercentrum Stockholm Gotland",
    läsa_mer_2_link:
      "https://cancercentrum.se/contentassets/c17be38bac8443d3b3e7599d5f58d13a/sjukvardsregional-cancerplan-2024-2027.pdf",
  },
  "Tjock- och ändtarmscancer": {
    definition:
      "Antal nya fall av tjock- och ändtarmscancer per 100 000 invånare. Som årtal beräknas tidpunkten för första diagnosen under perioden 2006–2019 ur Cancerregistret. ",
    källa: "Regionalt cancercentrum Stockholm Gotland (RCC)",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Cancer, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/cancer/ ",
    läsa_mer_2_text:
      "Regional cancerplan Stockholm-Gotland 2024–2027, Regionalt cancercentrum Stockholm Gotland",
    läsa_mer_2_link:
      "https://cancercentrum.se/contentassets/c17be38bac8443d3b3e7599d5f58d13a/sjukvardsregional-cancerplan-2024-2027.pdf",
  },
  Bröstcancer: {
    definition:
      "Antal nya fall av bröstcancer per 100 000 kvinnor. Som årtal beräknas tidpunkten för första diagnosen under perioden 2006–2019 ur Cancerregistret.",
    källa: "Regionalt cancercentrum Stockholm Gotland (RCC)",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Cancer, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/cancer/",
    läsa_mer_2_text:
      "Regional cancerplan Stockholm-Gotland 2024–2027, Regionalt cancercentrum Stockholm Gotland",
    läsa_mer_2_link:
      "\nhttps://cancercentrum.se/contentassets/c17be38bac8443d3b3e7599d5f58d13a/sjukvardsregional-cancerplan-2024-2027.pdf",
  },
  Prostatacancer: {
    definition:
      "Antal nya fall av prostatacancer per 100 000 män. Som årtal beräknas tidpunkten för första diagnosen under perioden 2006–2019 ur Cancerregistret.",
    källa: "Regionalt cancercentrum Stockholm Gotland (RCC)",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Cancer, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/cancer/ ",
    läsa_mer_2_text:
      "Regional cancerplan Stockholm-Gotland 2024–2027, Regionalt cancercentrum Stockholm Gotland",
    läsa_mer_2_link:
      "https://cancercentrum.se/contentassets/c17be38bac8443d3b3e7599d5f58d13a/sjukvardsregional-cancerplan-2024-2027.pdf",
  },
  "Malignt hudmelanom": {
    definition: "Antal nya fall av malignt hudmelanom per 100 000 invånare.",
    källa: "Regionalt cancercentrum Stockholm Gotland (RCC)",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Cancer, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/cancer/ ",
    läsa_mer_2_text:
      "Regional cancerplan Stockholm-Gotland 2024–2027, Regionalt cancercentrum Stockholm Gotland",
    läsa_mer_2_link:
      "https://cancercentrum.se/contentassets/c17be38bac8443d3b3e7599d5f58d13a/sjukvardsregional-cancerplan-2024-2027.pdf",
  },
  "Dödsfall på grund av covid-19": {
    definition:
      "Antal dödsfall per 10 000 invånare med covid-19  som underliggande dödsorsak.",
    källa: "Socialstyrelsens dödsorsaksstatistik",
    läsa_mer_1_text:
      "Rapporter om covid-19, utgivna av Centrum för epidemiologi och samhällsmedicin (CES). ",
    läsa_mer_1_link:
      "https://www.ces.regionstockholm.se/rapporter/rapporter-om-covid-19/",
  },
  "Sjukhusinläggning med covid-19": {
    definition:
      "Antal slutenvårdstillfällen (dvs. inläggning på sjukhus) per 10 000 invånare med covid-19 som huvuddiagnos.",
    källa: "VAL-databaserna ",
    läsa_mer_1_text:
      "Rapporter om covid-19, utgivna av Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_1_link:
      "https://www.ces.regionstockholm.se/rapporter/rapporter-om-covid-19/",
  },
  Gymnasiebehörighet: {
    definition:
      "Procentandelen elever med ett slutbetyg från grundskolan som ger behörighet till något av de nationella gymnasieprogrammen (inkl. yrkesprogrammen), av de elever som slutfört sin grundskoleutbildning under våren respektive år. Uppgiften anges utifrån elevens boendeort, inte skolornas geografiska placering. </br></br>Notera: Måttet är inte helt jämförbart med Skolverkets statistik. Andelen behöriga påverkas bl. a. av andelen nyligen invandrade, med ofullständiga kunskaper i svenska",
    källa: "Statistiska centralbyrån (SCB) ",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 - Utbildning. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sociala-och-ekonomiska-forutsattningar/utbildning/ ",
    läsa_mer_2_text: "Beskrivande statistik, Skolverkets statistikrapporter",
    läsa_mer_2_link:
      "https://www.skolverket.se/publikationsserier/beskrivande-statistik",
  },
  Livsvillkorsindex: {
    definition:
      ' Livsvilkorindex är ett index som synliggör skillnader i sociala och ekonomiska förhållanden mellan bostadsområden. Indexet används bara för att jämföra olika områden med varandra och bygger på en sammanställning av sju olika variabler:<br><ol style="font-style: italic"><li>Andel som varit arbetslösa det senaste året;</li><li>Andel som erhållit ekonomiskt bistånd det senaste året;</li><li> Andel med förgymnasial utbildning;</li><li> Andel ensamstående föräldrar;</li><li> Andel utrikesfödda;</li><li> Medianinkomst;</li><li>Genomsnittlig boyta.</li></ol> Variablerna har standardiserats och vägts tillsammans för att sammanfatta så mycket av variationen i de olika variablerna som möjligt i ett index, ett så kallat livsvilkorindex. Indexet är ett relativt mått. Det innebär att ett områdes värde bara kan tolkas i jämförelse med andra områden som mäts med samma mått, och kan inte förstås som en oberoende siffra. Livsvillkorindexet är standardiserat så att det genomsnittliga värdet för Stockholms län är 100. Det innebär att alla områden som har ett värde under 100 präglas av mer sårbara livsvillkor än genomsnittet i länet och alla områden med värden över 100 präglas av mindre sårbara livsvillkor än genomsnittet i länet. Det vill säga, desto lägre värden, desto sämre är de genomsnittliga sociala och ekonomiska förhållanden i området (i termer av de sju variablerna som indexet bygger på) i jämförelse med andra områden i Stockholms län.',
    källa: "Statistiska centralbyrån (SCB)",
    läsa_mer_1_text:
      "Länsstyrelsen Stockholm, 2024. Regional lägesbild: Om livsvillkor, brott, narkotika samt otrygghet i Stockholms län 2023.",
    läsa_mer_1_link: "https://catalog.lansstyrelsen.se/store/39/resource/455",
  },
  "Besvär av trafikbuller i bostad": {
    definition:
      "Andel (%) individer som uppger att trafikbuller (väg-, tåg- eller flygtrafik) medför störningar i eller i närheten av sin bostad (t.ex. svårt att somna eller svårt att ha fönster öppna på dagtid) varje vecka eller dagligen.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Miljöhälsorapport Stockholms län 2021, Centrum för arbets- och miljömedicin (CAMM)",
    läsa_mer_1_link:
      "https://www.camm.regionstockholm.se/4ae032/siteassets/camm-dokument/miljohalsorapport2021.pdf",
    läsa_mer_2_text:
      "Kapitlet om buller på Miljöhälsa online, Centrum för arbets- och miljömedicin (CAMM):",
    läsa_mer_2_link:
      "https://www.camm.regionstockholm.se/miljohalsa-online/buller-i-samhallet/",
    läsa_mer_3_text:
      "Omgivningsbuller och hälsa. Faktablad 2020. Centrum för arbets- och miljömedicin (CAMM).",
    läsa_mer_3_link:
      "https://www.folkhalsoguiden.se/publikationer/omgivningsbuller--och-halsa/",
  },
  "Exponeras för trafikbuller": {
    definition:
      "Andel invånare vars genomsnittliga årsexponering för en eller fler former av trafikbuller (väg-, spår-, eller flygtrafikbuller) överstiger WHO:s riktvärden. <br>Dessa riktvärden är:<br><ul><li>53 dB Lden för vägtrafik </li><li>54 dB Lden för spårtrafik </li><li>45 dB Lden för flygtrafik </li></ul><br>Notera att dessa riktvärden är något striktare än våra svenska norm- och målvärden, därav relativt höga andelar exponerade.",
    källa: "Institutet för miljömedicin (IMM);Statistiska centralbyrån (SCB)",
    läsa_mer_1_text:
      "Miljöhälsorapport Stockholms län 2021, Centrum för arbets- och miljömedicin (CAMM)",
    läsa_mer_1_link:
      "https://www.camm.regionstockholm.se/4ae032/siteassets/camm-dokument/miljohalsorapport2021.pdf",
    läsa_mer_2_text:
      "Kapitlet om trafikbuller på Miljöhälsa Online, från Centrum för Arbets- och Miljömedicin",
    läsa_mer_2_link:
      "https://www.camm.regionstockholm.se/miljohalsa-online/buller-i-samhallet/",
    läsa_mer_3_text:
      "Environmental noise guidelines for the European Region. WHO Regional office for Europe, Copenhagen, 2019.",
    läsa_mer_3_link:
      "https://www.who.int/europe/publications/i/item/9789289053563",
    läsa_mer_4_text:
      "Omgivningsbuller och hälsa. Faktablad 2020. Centrum för arbets- och miljömedicin (CAMM).",
    läsa_mer_4_link:
      "https://www.folkhalsoguiden.se/publikationer/omgivningsbuller--och-halsa/",
  },
  "Exponeras för luftföroreningar": {
    definition:
      "Andel invånare vars genomsnittliga årsexponering för grova partiklar (PM10) eller kvävedioxid (NO2) överstiger WHO:s riktvärden.<br>Dessa riktvärden är: <br><ul><li>15 µg/m3 av grova partiklar (PM10) </li><li>10 µg/m3 av kvävedioxid (NO2) </li></ul><br>Notera att dessa riktvärden är något strängare än våra svenska norm- och målvärden, därav relativt höga andelar exponerade.",
    källa: "Institutet för miljömedicin (IMM);Statistiska centralbyrån (SCB)",
    läsa_mer_1_text:
      "Miljöhälsorapport Stockholms län 2021, Centrum för arbets- och miljömedicin (CAMM)",
    läsa_mer_1_link:
      "https://www.camm.regionstockholm.se/4ae032/siteassets/camm-dokument/miljohalsorapport2021.pdf",
    läsa_mer_2_text:
      "Kapitlet om luftförorening på Miljöhälsa online, från Centrum för Arbets- och Miljömedicin",
    läsa_mer_2_link:
      "https://www.camm.regionstockholm.se/miljohalsa-online/luftfororeningar-utomhus/",
    läsa_mer_3_text:
      "What are the WHO Air quality guidelines?, WHO Regional office for Europe, Copenhagen, 2021.",
    läsa_mer_3_link:
      "https://www.who.int/news-room/feature-stories/detail/what-are-the-who-air-quality-guidelines",
    läsa_mer_4_text:
      "Luftföroreningar och hälsa. Fakablad 2018. Centrum för arbets- och miljömedicin (CAMM).",
    läsa_mer_4_link:
      "https://www.folkhalsoguiden.se/publikationer/luftfororeningar-och-halsa/",
  },
  "Besök i grönområde": {
    definition:
      "Andel (%) av befolkningen i Stockholms län som vistas i park, grönområde eller annan natur varje dag eller flera gånger per vecka under sommarhalvåret",
    källa: "Miljöhälsoenkäten",
    läsa_mer_1_text:
      "Miljöhälsorapport Stockholms län 2017, Centrum för arbets- och miljömedicin (CAMM)",
    läsa_mer_1_link:
      "http://dok.slso.sll.se/CAMM/Rapportserien/2017/CAMM_miljoohalsorapport_webb.pdf",
    läsa_mer_2_text:
      "Miljöhälsorapport Stockholms län 2021, Centrum för arbets- och miljömedicin (CAMM)",
    läsa_mer_2_link:
      "https://www.camm.regionstockholm.se/4ae032/siteassets/camm-dokument/miljohalsorapport2021.pdf",
    läsa_mer_3_text:
      "Kapitlet om grönstruktur på Miljöhälsa Online, från Centrum för Arbets- och Miljömedicin",
    läsa_mer_3_link:
      "https://www.camm.regionstockholm.se/miljohalsa-online/gronstruktur/",
  },
  "Grönska på gångavstånd från bostaden": {
    definition:
      "Andel (%) av befolkningen i Stockholms län som har park, grönområde eller annan natur på gångavstånd från sin bostad",
    källa: "Miljöhälsoenkäten",
    läsa_mer_1_text:
      "Miljöhälsorapport Stockholms län 2017, Centrum för arbets- och miljömedicin (CAMM)",
    läsa_mer_1_link:
      "http://dok.slso.sll.se/CAMM/Rapportserien/2017/CAMM_miljoohalsorapport_webb.pdf",
    läsa_mer_2_text:
      "Miljöhälsorapport Stockholms län 2021, Centrum för arbets- och miljömedicin (CAMM)",
    läsa_mer_2_link:
      "https://www.camm.regionstockholm.se/4ae032/siteassets/camm-dokument/miljohalsorapport2021.pdf",
    läsa_mer_3_text:
      "Kapitlet om grönstruktur på Miljöhälsa Online, från Centrum för Arbets- och Miljömedicin",
    läsa_mer_3_link:
      "https://www.camm.regionstockholm.se/miljohalsa-online/gronstruktur/",
  },
  "Störs av trafikbuller": {
    definition:
      "Andel (%) av befolkningen i Stockholms län som uppger att de är mycket eller väldigt mycket störda av trafikbuller (väg-, spår- och flygtrafik sammantaget) i eller i närheten av sin bostad",
    källa: "Miljöhälsoenkäten",
    läsa_mer_1_text:
      "Miljöhälsorapport Stockholms län 2017, Centrum för arbets- och miljömedicin (CAMM)",
    läsa_mer_1_link:
      "http://dok.slso.sll.se/CAMM/Rapportserien/2017/CAMM_miljoohalsorapport_webb.pdf",
    läsa_mer_2_text:
      "Miljöhälsorapport Stockholms län 2021, Centrum för arbets- och miljömedicin (CAMM)",
    läsa_mer_2_link:
      "https://www.camm.regionstockholm.se/4ae032/siteassets/camm-dokument/miljohalsorapport2021.pdf",
    läsa_mer_3_text:
      "Kapitlet om buller i samhället på Miljöhälsa Online, från Centrum för Arbets- och Miljömedicin",
    läsa_mer_3_link:
      "https://www.camm.regionstockholm.se/miljohalsa-online/buller-i-samhallet/",
  },
  "Upplevelse av luftkvalitet": {
    definition:
      "Andel (%) av befolkningen i Stockholms län som rapporterar dålig eller mycket dålig luftkvalitet utomhus i närheten av sin bostad",
    källa: "Miljöhälsoenkäten",
    läsa_mer_1_text:
      "Miljöhälsorapport Stockholms län 2017, Centrum för arbets- och miljömedicin (CAMM)",
    läsa_mer_1_link:
      "http://dok.slso.sll.se/CAMM/Rapportserien/2017/CAMM_miljoohalsorapport_webb.pdf",
    läsa_mer_2_text:
      "Miljöhälsorapport Stockholms län 2021, Centrum för arbets- och miljömedicin (CAMM)",
    läsa_mer_2_link:
      "https://www.camm.regionstockholm.se/4ae032/siteassets/camm-dokument/miljohalsorapport2021.pdf",
    läsa_mer_3_text:
      "Kapitlet om luftföroreningar utomhus på Miljöhälsa Online, från Centrum för Arbets- och Miljömedicin",
    läsa_mer_3_link:
      "https://www.camm.regionstockholm.se/miljohalsa-online/luftfororeningar-utomhus/",
  },
  "Tillgång till grönska i närområdet": {
    definition:
      "Andel invånare som har tillgång till grönområde inom 100 meter från bostaden.<br>Grönområde definieras som ett område av sammanhängande grönytor som uppgår till minst 0,5 hektar och som är allmänt tillgängligt. ",
    källa: "Statistiska centralbyrån (SCB)\n",
    läsa_mer_1_text:
      "Miljöhälsorapport Stockholms län 2021, Centrum för arbets- och miljömedicin (CAMM)",
    läsa_mer_1_link:
      "https://www.camm.regionstockholm.se/4ae032/siteassets/camm-dokument/miljohalsorapport2021.pdf",
    läsa_mer_2_text:
      "Kapitlet om Grönstruktur på Miljöhälsa online, från Centrum för Arbets- och Miljömedicin",
    läsa_mer_2_link:
      "https://www.camm.regionstockholm.se/miljohalsa-online/gronstruktur/",
    läsa_mer_3_text:
      "Urban green spaces and health. A review of evidence. WHO Regional office for Europe, Copenhagen, 2016.",
    läsa_mer_3_link: "https://apps.who.int/iris/handle/10665/345751",
    läsa_mer_4_text:
      "Tillgång till bostadsnära grönska i befolkningen. Rapport 2022:04. Centrum för arbets- och miljömedicin (CAMM).",
    läsa_mer_4_link:
      "https://www.folkhalsoguiden.se/publikationer/camm-rapport-2022-tillgang-till-bostadsnara--gronska-i-befolkningen/",
  },
  "Beroende och skadligt bruk (diagnostiserad)": {
    definition:
      "Andel (%) individer, 18 år eller äldre, som vårdats inom regionfinansierad öppen- eller slutenvård med diagnosen psykiska störningar och beteendestörningar orsakade av psykoaktiva substanser (ICD-10-diagnos F10-F16, F18-F19).Denna diagnosgrupp innehåller huvudsakligen psykiska problem orsakade av beroende och skadligt bruk av alkohol eller droger.<br><br>Observera att eftersom data bygger på rapporterade diagnoser från vården skulle skillnader mellan områden eller över tid, delvis kunna bero på skillnader i registreringen av diagnoser. Måttet redovisar individer med en registrerad diagnos och täcker därför inte hela andelen som har problem. De som inte söker vård för sina problem får heller ingen registrerad diagnos. Säkerheten i talen är mindre i de kommuner eller stadsdelar med en mindre befolkningsstorlek, som till exempel i Salem, Nykvarn och Vaxholm.",
    källa: "VAL-databaserna",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Alkoholvanor, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/levnadsvanor/alkoholvanor/",
    läsa_mer_2_text:
      "Folkhälsorapport 2023 – Narkotikavanor, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_2_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/levnadsvanor/droganvandning/",
    läsa_mer_3_text:
      "Nationella riktlinjer för vård och stöd vid missbruk och beroende, Socialstyrelsen",
    läsa_mer_3_link:
      "https://www.socialstyrelsen.se/globalassets/sharepoint-dokument/artikelkatalog/nationella-riktlinjer/2019-1-16.pdf",
  },
  "Röker e-cigaretter (grundskola åk 9)": {
    definition:
      "Andel (%) elever i grundskola årskurs 9 som uppger att de röker e-cigaretter dagligen eller ibland.\nE-cigaretter, även kallat ”vejp” är en apparat som laddas med vätska som ofta är fylld med nikotin. Nikotin är beroendeframkallande och nikotinets egenskaper kan påverka hälsan negativt. ",
    källa: "Stockholmsenkäten",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Rökning, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/levnadsvanor/rokning/",
    läsa_mer_2_text: "Sluta-röka-linjen",
    läsa_mer_2_link: "https://www.slutarokalinjen.se/",
    läsa_mer_3_text: "Hälsoområde Tobak, Elevhälsoportalen skola",
    läsa_mer_3_link:
      "https://www.elevhalsoportalen.se/skola/halsoomraden/tobak/  ",
    läsa_mer_4_text:
      "Kunskap om tobaks- och nikotinprodukters skadeverkningar. Rapport, Folkhälsomyndigheten 2023.",
    läsa_mer_4_link:
      "https://www.folkhalsomyndigheten.se/contentassets/6ab2ab5dabe64ccab994e8b472331c6d/kunskap-tobaks-nikotinprodukters-skadeverkningar.pdf",
    läsa_mer_5_text:
      "SOTIS – Samtal om tobak och nikotin i mötet med ungdomar. Centrum för epidemiologi och samhällsmedicin (CES). 2024.",
    läsa_mer_5_link: "https://www.folkhalsoguiden.se/publikationer/ces-sotis/",
  },
  "Röker e-cigaretter (gymnasiet år 2)": {
    definition:
      "Andel (%) elever i gymnasiet år 2 som uppger att de röker e-cigaretter dagligen eller ibland. \nE-cigaretter, även kallat ”vejp” är en apparat som laddas med vätska som ofta är fylld med nikotin. Nikotin är beroendeframkallande och nikotinets egenskaper kan påverka hälsan negativt. ",
    källa: "Stockholmsenkäten",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Rökning, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/levnadsvanor/rokning/",
    läsa_mer_2_text: "Sluta-röka-linjen",
    läsa_mer_2_link: "https://www.slutarokalinjen.se/",
    läsa_mer_3_text: "Hälsoområde Tobak, Elevhälsoportalen skola",
    läsa_mer_3_link:
      "https://www.elevhalsoportalen.se/skola/halsoomraden/tobak/  ",
    läsa_mer_4_text:
      "Kunskap om tobaks- och nikotinprodukters skadeverkningar. Rapport, Folkhälsomyndigheten 2023.",
    läsa_mer_4_link:
      "https://www.folkhalsomyndigheten.se/contentassets/6ab2ab5dabe64ccab994e8b472331c6d/kunskap-tobaks-nikotinprodukters-skadeverkningar.pdf",
    läsa_mer_5_text:
      "SOTIS – Samtal om tobak och nikotin i mötet med ungdomar. Centrum för epidemiologi och samhällsmedicin (CES). 2024.",
    läsa_mer_5_link: "https://www.folkhalsoguiden.se/publikationer/ces-sotis/",
  },
  "Använder vitt snus (grundskola åk 9)": {
    definition:
      "Andel (%) elever i grundskola årskurs 9 som uppger att de snusar vitt snus eller nikotinpåse. Vitt snus benämns ofta som tobaksfritt med nikotin. Nikotin är beroendeframkallande och nikotinets egenskaper kan påverka hälsan negativt. ",
    källa: "Stockholmsenkäten",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Rökning, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/levnadsvanor/rokning/",
    läsa_mer_2_text: "Sluta-röka-linjen",
    läsa_mer_2_link: "https://www.slutarokalinjen.se/",
    läsa_mer_3_text: "Hälsoområde Tobak, Elevhälsoportalen skola",
    läsa_mer_3_link:
      "https://www.elevhalsoportalen.se/skola/halsoomraden/tobak/  ",
    läsa_mer_4_text:
      "Kunskap om tobaks- och nikotinprodukters skadeverkningar. Rapport, Folkhälsomyndigheten 2023.",
    läsa_mer_4_link:
      "https://www.folkhalsomyndigheten.se/contentassets/6ab2ab5dabe64ccab994e8b472331c6d/kunskap-tobaks-nikotinprodukters-skadeverkningar.pdf",
    läsa_mer_5_text:
      "SOTIS – Samtal om tobak och nikotin i mötet med ungdomar. Centrum för epidemiologi och samhällsmedicin (CES). 2024.",
    läsa_mer_5_link: "https://www.folkhalsoguiden.se/publikationer/ces-sotis/",
  },
  "Använder vitt snus (gymnasiet år 2)": {
    definition:
      "Andel (%) elever i gymnasiet år 2 som uppger att de snusar vitt snus eller nikotinpåse. Vitt snus benämns ofta som tobaksfritt med nikotin. Nikotin är beroendeframkallande och nikotinets egenskaper kan påverka hälsan negativt. ",
    källa: "Stockholmsenkäten",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Rökning, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/levnadsvanor/rokning/",
    läsa_mer_2_text: "Sluta-röka-linjen",
    läsa_mer_2_link: "https://www.slutarokalinjen.se/",
    läsa_mer_3_text: "Hälsoområde Tobak, Elevhälsoportalen skola",
    läsa_mer_3_link:
      "https://www.elevhalsoportalen.se/skola/halsoomraden/tobak/  ",
    läsa_mer_4_text:
      "Kunskap om tobaks- och nikotinprodukters skadeverkningar. Rapport, Folkhälsomyndigheten 2023.",
    läsa_mer_4_link:
      "https://www.folkhalsomyndigheten.se/contentassets/6ab2ab5dabe64ccab994e8b472331c6d/kunskap-tobaks-nikotinprodukters-skadeverkningar.pdf",
    läsa_mer_5_text:
      "SOTIS – Samtal om tobak och nikotin i mötet med ungdomar. Centrum för epidemiologi och samhällsmedicin (CES). 2024.",
    läsa_mer_5_link: "https://www.folkhalsoguiden.se/publikationer/ces-sotis/",
  },
  "Ångestkänslor (grundskola åk 9)": {
    definition:
      "Andel (%) elever i grundskola årskurs 9 som uppger att de ganska ofta eller väldigt ofta känner sig rädda utan att veta varför. \nObservera att Upplands-Bro svar för 2020 baseras på skolkommun i stället för hemkommun.",
    källa: "Stockholmsenkäten",
    läsa_mer_1_text: "Hälsoområde Psykisk hälsa, Elevhälsoportalen",
    läsa_mer_1_link:
      "https://www.elevhalsoportalen.se/skola/halsoomraden/psykisk-halsa/",
    läsa_mer_2_text: "Barn & unga, Uppdrag psykisk hälsa",
    läsa_mer_2_link:
      "https://www.uppdragpsykiskhalsa.se/stockholmslan/barn-unga/",
    läsa_mer_3_text:
      "Folkhälsorapport 2023 – Ångest och depression, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_3_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/angest-och-depression/ ",
    läsa_mer_4_text:
      "Det utökade uppdraget för barn och unga med psykisk ohälsa i Region Stockholm. Uppföljning av strukturförändringar inom primärvården. Rapport 2024:4. Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_4_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20244/",
    läsa_mer_5_text:
      "Förekomst av ångestdiagnos bland unga i Stockholms län. Rapport 2024:3. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_5_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20243-forekomst-av-angestdiagnos-bland-unga-i-stockholms-lan/",
  },
  "Ångestkänslor (gymnasiet år 2)": {
    definition:
      "Andel (%) elever i gymnasiet år 2 som uppger att de ganska ofta eller väldigt ofta känner sig rädda utan att veta varför.\nObservera att Upplands-Bro svar för 2020 baseras på skolkommun i stället för hemkommun.",
    källa: "Stockholmsenkäten",
    läsa_mer_1_text: "Hälsoområde Psykisk hälsa, Elevhälsoportalen",
    läsa_mer_1_link:
      "https://www.elevhalsoportalen.se/skola/halsoomraden/psykisk-halsa/",
    läsa_mer_2_text: "Barn & unga, Uppdrag psykisk hälsa",
    läsa_mer_2_link:
      "https://www.uppdragpsykiskhalsa.se/stockholmslan/barn-unga/",
    läsa_mer_3_text:
      "Folkhälsorapport 2023 – Ångest och depression, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_3_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/angest-och-depression/ ",
    läsa_mer_4_text:
      "Det utökade uppdraget för barn och unga med psykisk ohälsa i Region Stockholm. Uppföljning av strukturförändringar inom primärvården. Rapport 2024:4. Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_4_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20244/",
    läsa_mer_5_text:
      "Förekomst av ångestdiagnos bland unga i Stockholms län. Rapport 2024:3. Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_5_link:
      "https://www.folkhalsoguiden.se/publikationer/ces-rapport-20243-forekomst-av-angestdiagnos-bland-unga-i-stockholms-lan/",
  },
  "Huvudvärk (grundskola åk 9)": {
    definition:
      "Andel (%) elever i grundskola årskurs 9 som uppger att de har huvudvärk en gång i veckan eller oftare. \nObservera att Upplands-Bro svar för 2020 baseras på skolkommun i stället för hemkommun.",
    källa: "Stockholmsenkäten",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Smärta, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/smarta/ ",
    läsa_mer_2_text: "Metodstöd för elevhälsan. Uppdrag psykisk hälsa.   ",
    läsa_mer_2_link: "https://metodstod.se/metoder/huvudvark/",
  },
  "Huvudvärk (gymnasiet år 2)": {
    definition:
      "Andel (%) elever i gymnasiet år 2 som uppger att de har huvudvärk en gång i veckan eller oftare.  Observera att Upplands-Bro svar för 2020 baseras på skolkommun i stället för hemkommun.",
    källa: "Stockholmsenkäten",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – Smärta, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/smarta/ ",
    läsa_mer_2_text: "Metodstöd för elevhälsan. Uppdrag psykisk hälsa.   ",
    läsa_mer_2_link: "https://metodstod.se/metoder/huvudvark/",
  },
};