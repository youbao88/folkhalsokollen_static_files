const indicator_info = {
  "Dödsfall på grund av covid-19": {
    definition:
      "Antal dödsfall med covid-19 per 10 000 invånare definieras som laboratoriebekräftade fall enligt SmiNet, där den smittade avlidit inom 30 dagar enligt Skatteverkets registrering.",
    källa: "SmiNet, Skatteverket",
    läsa_mer_1_text:
      "Rapporter om covid-19, utgivna av Centrum för epidemiologi och samhällsmedicin (CES). ",
    läsa_mer_1_link: "https://www.folkhalsoguiden.se/covid19",
  },
  "Vaccination mot covid-19 (minst 2 doser)": {
    definition:
      "Antal (%) som fått minst två doser vaccin mot covid-19. Antalet är kumulativt, det vill säga att till exempel antalet i 2022 innehåller totalt antal personer som har fått vaccinet till och med december 2022.",
    källa: "VAL-databaserna ",
    läsa_mer_1_text:
      "Rapport 2022:7 Centrum för epidemiologi och samhällsmedicin (CES): Strategier för att öka vaccinationstäckningen - en kunskapsöversikt (pdf, folkhalsoguiden.se)",
    läsa_mer_1_link:
      "https://www.folkhalsokollen.se/globalassets/verksamheter/forskning-och-utveckling/centrum-for-epidemiologi-och-samhallsmedicin/folkhalsoguiden/rapporter-och-faktablad/rapport-2022.7-strategier-for-att-oka-vaccinationstackningen---ef.pdf",
  },
  "Skjutit upp eller avstått vård p.g.a. coronapandemin": {
    definition:
      "Andel (%) individer som uppger att de har skjutit upp eller avstått från vård på grund av coronapandemin. \n\nVård inkluderar sjukvården, tandvården och besök hos psykolog eller terapeut.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Vård för psykisk ohälsa under\ncovid-19-pandemin (rapport 2021:3), Centrum för epidemologi och samhällsmedicin  (CES) (pdf)  ",
    läsa_mer_1_link:
      "https://www.folkhalsoguiden.se/globalassets/verksamheter/forskning-och-utveckling/centrum-for-epidemiologi-och-samhallsmedicin/folkhalsoguiden/rapporter-och-faktablad/rapport-2021.3-vard-for-psykisk-ohalsa-under-covid-19-pandemin.pdf",
    läsa_mer_2_text:
      "Rapporter om covid-19, utgivna av Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_2_link: "https://www.folkhalsoguiden.se/covid19",
    läsa_mer_3_text:
      "Vård för psykisk ohälsa under coronapandemin, från pandemins utbrott till slutet av 2021 (rapport 2022:16) Centrum för epidemiologi och samhällsmedicin (CES) (pdf)",
    läsa_mer_3_link:
      "https://www.ces.regionstockholm.se/globalassets/verksamheter/forskning-och-utveckling/centrum-for-epidemiologi-och-samhallsmedicin/folkhalsoguiden/rapporter-och-faktablad/rapport-2022.16-vard-for-psykisk-ohalsa-under-coronapandemin-fran-pandemins-utbrott-till-slutet-av-2021.pdf",
  },
  "Långvarig covid-19 (hög påverkan)": {
    definition:
      "Andel (%) individer som uppger att de har haft covid-19-symtom i mer än sex veckor, vilket medfört att arbetsförmågan varit nedsatt eller att de har hindrats i andra dagliga sysselsättningar i hög grad.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Rapporter om covid-19, utgivna av Centrum för epidemiologi och samhällsmedicin (CES). ",
    läsa_mer_1_link: "https://www.folkhalsoguiden.se/covid19",
  },
  "Slutenvård med covid-19": {
    definition:
      "Antal slutenvårdstillfällen (dvs. inläggning på sjukhus) per 10 000 invånare med covid-19 som huvuddiagnos.",
    källa: "VAL-databaserna ",
    läsa_mer_1_text:
      "Rapporter om covid-19, utgivna av Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_1_link: "https://www.folkhalsoguiden.se/covid19",
  },
  Boendeform: {
    definition:
      "Andel (%) individer som bor i hyresrätt, bostadsrätt eller eget småhus.",
    källa: "Statistiska centralbyrån (SCB) ",
  },
  Familjetyp: {
    definition:
      "Andel (%) individer som bor ensamma utan barn, ensamma med barn, bor tillsammans utan barn eller bor tillsammans med barn.",
    källa: "Statistiska centralbyrån (SCB) ",
  },
  Födelseland: {
    definition: "Andel (%) individer födda i Sverige, Europa eller annat land.",
    källa: "Statistiska centralbyrån (SCB) ",
    läsa_mer_1_text: "Människorna i Sverige, Statistiska centralbyrån (SCB) ",
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
      "Andel (%) individer som fått ekonomiskt bistånd (tidigare socialbidrag) i högst sex månader eller mer än sex månader.",
    källa: "Statistiska centralbyrån (SCB) ",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – inkomst, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link: "ekonomiska",
  },
  "Huvudsaklig sysselsättning": {
    definition:
      "Andel (%) individer som studerar eller får sin huvudsakliga inkomst från förvärvsarbete, andel som får sin huvudsakliga inkomst från arbetslöshetsersättning (arbetslös) och andel som får sin huvudsakliga inkomst från förtidspension eller sjukpenning (sjukskriven)",
    källa: "Statistiska centralbyrån (SCB) ",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – arbete, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sociala-och-ekonomiska-forutsattningar/arbete/",
  },
  Inkomstnivå: {
    definition:
      "Andel (%) individer som har inkomster som ligger inom gruppen med lägst inkomst i länet (första kvartilen), medellåg inkomst (andra kvartilen), medelhög inkomst (tredje kvartilen) och högst inkomst (fjärde kvartilen). Indikatorn beräknas genom att inkomstfördelningen i hela länet rangordnas och delas in i fyra lika stora grupper (kvartiler). Inkomsten i sin tur beräknas som familjens totala nettoinkomst dividerat med antal personer i familjen, viktat efter antal barn respektive vuxna.",
    källa: "Statistiska centralbyrån (SCB) ",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – inkomst, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sociala-och-ekonomiska-forutsattningar/inkomst/",
  },
  Utbildningsnivå: {
    definition:
      "Andel (%) individer med förgymnasial, gymnasial eller eftergymnasial utbildning som högsta utbildningsnivå.",
    källa: "Statistiska centralbyrån (SCB) ",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – utbildning, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sociala-och-ekonomiska-forutsattningar/utbildning/",
  },
  "Ekonomiska svårigheter": {
    definition:
      "Andelen (%) individer som uppger att de haft svårigheter att klara de löpande utgifterna för bland annat mat, hyra och räkningar under de senaste tolv månaderna.\n",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – utbildning, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sociala-och-ekonomiska-forutsattningar/inkomst/",
    läsa_mer_2_text:
      "Hälsa och livsvillkor bland personer i hemlöshet i Stockholms län 2019. En enkätintervjustudie. Centrum för epidemiologi och samhälsmedicin (CES)",
    läsa_mer_2_link:
      "https://www.ces.regionstockholm.se/globalassets/verksamheter/forskning-och-utveckling/centrum-for-epidemiologi-och-samhallsmedicin/folkhalsoguiden/rapporter-och-faktablad/rapport-2022.9-halsa-och-livsvillkor-bland-personer-i-hemloshet---tk.pdf",
  },
  "Oro för att förlora sitt arbete": {
    definition:
      "Andelen (%) individer som uppger att de är oroliga för att förlora sitt arbete inom det närmaste året, av de som förvärvsarbetar.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – arbete, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sociala-och-ekonomiska-forutsattningar/arbete/",
  },
  "Avstått läkemedel på grund av dålig ekonomi": {
    definition:
      "Andel (%) individer som uppger att de har avstått från att hämta ut läkemedel (ordinerade av läkare) under de senaste tolv månaderna, på grund av dålig ekonomi.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – inkomst, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sociala-och-ekonomiska-forutsattningar/inkomst/",
  },
  "Avstått vård på grund av dålig ekonomi": {
    definition:
      "Andel (%) individer som uppger att de, trots upplevt behov, har avstått från att besöka sjukvården under de senaste tolv månaderna, på grund av dålig ekonomi.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – inkomst, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sociala-och-ekonomiska-forutsattningar/inkomst/",
  },
  "Amning vid 4 månaders ålder": {
    definition:
      "Andel (%) barn inom barnhälsovården som enbart eller delvis får bröstmjölk vid fyra månaders ålder. Barn som får enbart bröstmjölk och eventuella mineraler, vitaminer eller läkemedel, räknas som enbart ammande barn. Barn som får bröstmjölk, men också smakportioner, välling, bröstmjölksersättning eller hela måltider bestående av annan kost räknas som delvis ammande.",
    källa: "Barnhälsovårdens årsrapport ",
    läsa_mer_1_text:
      "Årsrapport – barnhälsovård i Stockholms län 2021, Region Stockholm",
    läsa_mer_1_link:
      "https://kunskapsstodforvardgivare.se/download/18.2b762f8e1818001d879404a/1655987569867/2021_bvc_arsrapport.pdf",
  },
  "Exponering för tobaksrök vid 8 månaders ålder": {
    definition:
      "Andel (%) barn vars mamma, pappa eller annan person som stadigvarande bor i familjen rökte dagligen när barnet var fyra veckor och när en uppföljningen gjordes vid åtta månaders ålder.",
    källa: "Barnhälsovårdens årsrapport ",
    läsa_mer_1_text:
      "Årsrapport – barnhälsovård i Stockholms län 2021, Region Stockholm",
    läsa_mer_1_link:
      "https://kunskapsstodforvardgivare.se/download/18.2b762f8e1818001d879404a/1655987569867/2021_bvc_arsrapport.pdf",
  },
  "Kariesfria 3-åringar": {
    definition:
      "Andel (%) treåringar utan kariesskadade tänder. Med skadade tänder avses tänder som har hål (karies), som dragits ut på grund av karies eller som fått fyllningar på grund av tidigare hål.",
    källa: "Barnhälsovårdens årsrapport ",
    läsa_mer_1_text:
      "Årsrapport – barnhälsovård i Stockholms län 2021, Region Stockholm",
    läsa_mer_1_link:
      "https://kunskapsstodforvardgivare.se/download/18.2b762f8e1818001d879404a/1655987569867/2021_bvc_arsrapport.pdf",
  },
  "Övervikt och obesitas 4-åringar": {
    definition:
      "\nAndel (%) fyraåringar med övervikt och obesitas. Övervikt (utan obesitas) definieras som ISO-BMI 25–30 och obesitas definieras som ISO-BMI 30 eller mer. ISO-BMI är ett BMI som är anpassat för barn från två års ålder.\n",
    källa: "Barnhälsovårdens årsrapport ",
    läsa_mer_1_text:
      "Årsrapport – barnhälsovård i Stockholms län 2021, Region Stockholm",
    läsa_mer_1_link:
      "https://kunskapsstodforvardgivare.se/download/18.2b762f8e1818001d879404a/1655987569867/2021_bvc_arsrapport.pdf",
  },
  "Anmälan socialtjänst via BVC": {
    definition:
      "Andel (%) barn i åldrarna 0–5 år per årskull kring vilka Barnavårdscentralen (BVC) gjort orosanmälan till socialtjänsten. ",
    källa: "Barnhälsovårdens årsrapport ",
    läsa_mer_1_text:
      "Årsrapport – barnhälsovård i Stockholms län 2021, Region Stockholm",
    läsa_mer_1_link:
      "https://kunskapsstodforvardgivare.se/download/18.2b762f8e1818001d879404a/1655987569867/2021_bvc_arsrapport.pdf",
  },
  "Vaccinationstäckning MPR": {
    definition:
      "Andel (%) barn per årskull som har vaccinerats mot mässling, påssjuka och röda hund (MPR) med minst en dos. Data för år 2015 gäller barn födda 2013 och så vidare. ",
    källa: "Barnhälsovårdens årsrapport ",
    läsa_mer_1_text:
      "Årsrapport – barnhälsovård i Stockholms län 2021, Region Stockholm",
    läsa_mer_1_link:
      "https://kunskapsstodforvardgivare.se/download/18.2b762f8e1818001d879404a/1655987569867/2021_bvc_arsrapport.pdf",
  },
  "Röstande i kommunval": {
    definition:
      "Andel (%) individer som röstat i val till kommunfullmäktige av det totala antalet röstberättigade i kommunen eller stadsdelen (inklusive blanka och ogiltiga röster).",
    källa:
      "Statistiska centralbyrån (SCB), Valmyndigheten och Stockholms statistikkontor ",
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
      "https://www.ces.regionstockholm.se/globalassets/verksamheter/forskning-och-utveckling/centrum-for-epidemiologi-och-samhallsmedicin/folkhalsoguiden/rapporter-och-faktablad/rapport-2022.1-inslag-av-cannabis-vid-dodligt-vald-i-stockholm-och-i-sverige.pdf",
  },
  "Utsatthet för hot och våld": {
    definition:
      "Andel (%) individer som uppger att de har utsatts för fysiskt våld under de senaste tolv månaderna.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Strategi för att förebygga och bekämpa våld i Stockholms län 2020–2026, Länsstyrelsen",
    läsa_mer_1_link:
      "https://www.lansstyrelsen.se/stockholm/om-oss/vara-tjanster/publikationer/2019/strategi-for-att-forebygga-och-bekampa-vald-i-stockholms-lan---strategi-2020-2026.html",
  },
  Ensamhet: {
    definition:
      "Andel (%) individer som uppger att de besväras av ensamhet minst en gång i veckan.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Ensamhet i Stockholms län (rapport 2021:10), Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsokollen.se/globalassets/verksamheter/forskning-och-utveckling/centrum-for-epidemiologi-och-samhallsmedicin/folkhalsoguiden/rapporter-och-faktablad/rapport-2021.10-ensamhet-i-stockholms-lan_resultat-fran-stockholms-lans-folkhalsokohort.pdf",
  },
  "Tillit till andra människor": {
    definition:
      "Andel (%) individer som uppger att de kan lita på de flesta människor som bor i sitt bostadsområde.",
    källa: "Region Stockholms folkhälsoenkät",
  },
  "Tillit till institutioner": {
    definition:
      "Andel (%) individer som uppger att de har ganska stort eller mycket stort förtroende för sjukvården, polisen och riksdagen.",
    källa: "Region Stockholms folkhälsoenkät",
  },
  "Rädsla att gå ut ensam": {
    definition:
      "Andel (%) individer som uppger att de ibland eller ofta avstår att gå ut ensamma av rädsla för att bli överfallna, rånade eller på annat sätt ofredade.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Strategi för att förebygga och bekämpa våld i Stockholms län 2020–2026, Länsstyrelsen",
    läsa_mer_1_link:
      "https://www.lansstyrelsen.se/stockholm/om-oss/vara-tjanster/publikationer/2019/strategi-for-att-forebygga-och-bekampa-vald-i-stockholms-lan---strategi-2020-2026.html",
  },
  "Utsatthet för sexuella trakasserier": {
    definition:
      "Andel (%) individer som uppger att de har blivit sexuellt trakasserade online eller fysiskt, under de senaste tolv månaderna.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Strategi för att förebygga och bekämpa våld i Stockholms län 2020–2026, Länsstyrelsen",
    läsa_mer_1_link:
      "https://www.lansstyrelsen.se/stockholm/om-oss/vara-tjanster/publikationer/2019/strategi-for-att-forebygga-och-bekampa-vald-i-stockholms-lan---strategi-2020-2026.html",
  },
  "Trafikbuller i bostad": {
    definition:
      "Andel (%) individer som uppger att trafikbuller (väg-, tåg- eller flygtrafik) medför störningar i eller i närheten av sin bostad (t.ex. svårt att somna eller svårt att ha fönster öppna på dagtid) varje vecka eller dagligen.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Buller i samhället, Centrum för arbets- och miljömedicin (CAMM) ",
    läsa_mer_1_link: "Buller i samhället (sll.se)",
  },
  "Nedsatt hörsel": {
    definition:
      "Andel (%) individer som uppger att de har svårt att höra vad som sägs i samtal med flera personer, med eller utan hörapparat.",
    källa: "Region Stockholms folkhälsoenkät",
  },
  "Hjälp med att ta sig fram utomhus": {
    definition:
      "Andel (%) individer som uppger att de behöver hjälp med att ta sig fram utomhus.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Hur mår Stockholmarna efter 65? – Beskrivning av hälsa och levnadsvanor 2002–2018 (rapport 2019:3), Äldrecentrum",
    läsa_mer_1_link:
      "2019_3 framsida Hur mår stockholmarna efter 65_en beskrivning av äldres hälsa och levnadsvanor 2002-2018_rev (aldrecentrum.se)",
    läsa_mer_2_text:
      "StockholmSNAC 2019 – en beskrivning av äldreomsorgstagarna och omsorgens omfattning i Stockholms stad 2019 (rapport 2020:2), Äldrecentrum",
    läsa_mer_2_link:
      "https://www.aldrecentrum.se/sites/default/files/publication/pdf/stockholmsnac2019_rapport_200408-v2.pdf",
  },
  "Hjälp med hushållssysslor": {
    definition:
      "Andel (%) individer som uppger att de behöver hjälp med hushållssysslor.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "StockholmSNAC 2019 – en beskrivning av äldreomsorgstagarna och omsorgens omfattning i Stockholms stad 2019 (rapport 2020:2), Äldrecentrum",
    läsa_mer_1_link:
      "https://www.aldrecentrum.se/sites/default/files/publication/pdf/stockholmsnac2019_rapport_200408-v2.pdf",
  },
  "Hjälp med personlig omvårdnad": {
    definition:
      "Andel (%) individer som uppger att de behöver hjälp med att bada, duscha eller gå på toaletten.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "StockholmSNAC 2019 – en beskrivning av äldreomsorgstagarna och omsorgens omfattning i Stockholms stad 2019 (rapport 2020:2), Äldrecentrum",
    läsa_mer_1_link:
      "https://www.aldrecentrum.se/sites/default/files/publication/pdf/stockholmsnac2019_rapport_200408-v2.pdf",
  },
  Fallolyckor: {
    definition:
      "Andel (%) individer som uppger att de har fallit omkull och skadat sig under de senaste sex månaderna oavsett påverkan på vardagslivet.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – fallolyckor, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/fallolyckor/",
    läsa_mer_2_text: "Fallolyckor - Socialstyrelsen (socialstyrelsen.se)",
    läsa_mer_2_link:
      "https://www.socialstyrelsen.se/kunskapsstod-och-regler/omraden/aldre/fallolyckor/",
  },
  "Fallolyckor med påverkan på vardagslivet": {
    definition:
      "Andel (%) individer som uppger att de har fallit omkull och skadat sig under de senaste sex månaderna, och att skadan eller skadorna har påverkat deras vardagsaktiviteter i någon grad eller hög grad.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023– fallolyckor, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/fallolyckor/",
  },
  "Otillräcklig hjälp i vardagslivet": {
    definition:
      "Andel (%) individer som uppger att de skulle behöva mer hjälp än de får med hushållssysslor, att bada eller duscha, att gå på toaletten eller att ta sig fram utomhus.   ",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "StockholmSNAC 2019 – en beskrivning av äldreomsorgstagarna och omsorgens omfattning i Stockholms stad 2019 (rapport 2020:2), Äldrecentrum",
    läsa_mer_1_link:
      "https://www.aldrecentrum.se/sites/default/files/publication/pdf/stockholmsnac2019_rapport_200408-v2.pdf",
  },
  "Vaccination mot säsongsinfluensa": {
    definition:
      "Andel (%) individer, 65 år eller äldre, som är vaccinerade mot säsongsinfluensa.",
    källa: "VAL-databaserna ",
    läsa_mer_1_text:
      "Folkhälsomyndighetens samlingssida om vaccination mot influensa",
    läsa_mer_1_link:
      "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/vaccinationer/vacciner-a-o/influensa/",
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
  "Psykisk ohälsa": {
    definition:
      'Andel (%) individer som lider av psykisk ohälsa mätt med Kessler Psychological Distress Scale (K6). K6 består av sex frågor om psykisk ohälsa under de senaste 30 dagarna och hur stor del av tiden besvären funnits. Ett värde på 8 eller mer räknas som psykisk ohälsa.<br><br><b>Varför syns inte utvecklingen över tid?</b><br>Sedan 1990 har den psykiska ohälsan i Stockholms län mätts med tolvfrågorsversionen av General Health Questionnaire (GHQ-12). I senaste folkhälsoenkäten, Hälsa Stockholm 2021, ersättes GHQ-12 med ett motsvarande mätverktyg: sexfrågorsversionen av Kessler Psychological Distress Scale (K6)<br>Både GHQ-12 och K6 är utvecklade som screeningsinstrument för psykisk ohälsa, men skiljer sig i längd, svarsalternativ och till viss del i innehåll. På grund av skillnaderna kan man inte direkt jämföra ett visst värde i GHQ-12 med ett visst värde i K6, och vice versa. Folkhälsokollen redovisar därför enbart data för 2021 mätt med K6.<br><br><b>Se utvecklingen över tid på länsnivå</b><br>Ett visst urval av deltagarna i 2021 års folkhälsoenkät (de som ingår i Stockholm Public Health Cohort) har fått besvara GHQ-12-frågorna i enkäten. Det gör att vi kan redovisa en tidstrend för psykisk hälsa på länsnivå.<br><br><button class="buttonLink" title="https://www.folkhalsokollen.se/webbverktyg/psykisk-halsa-over-tid-i-stockholms-lan" role="link">Tidstrend för psykisk ohälsa på länsnivå och information om GHQ-12 och K6</button>\n',
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text: "Uppdrag Psykisk Hälsa i Stockholms län",
    läsa_mer_1_link: "https://www.uppdragpsykiskhalsa.se/stockholmslan/",
    läsa_mer_2_text:
      "Screening av psykisk ohälsa med Refugee Health Screener – en uppföljning av Region Stockholm (rapport 2020:2), Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_2_link:
      "https://www.folkhalsoguiden.se/globalassets/verksamheter/forskning-och-utveckling/centrum-for-epidemiologi-och-samhallsmedicin/folkhalsoguiden/rapporter-och-faktablad/rapport-2020.2-screening-av-psykisk-ohalsa-med-refugee-health-screener.pdf",
  },
  Självmordstankar: {
    definition:
      "Andel (%) individer som uppger att de har allvarligt övervägt att ta sitt liv det senaste året.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Tidigare vårdkonsumtion bland alla personer som dog suicid i Stockholms län år 2011 till 2016 (rapport 2021:2), Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsoguiden.se/globalassets/verksamheter/forskning-och-utveckling/centrum-for-epidemiologi-och-samhallsmedicin/folkhalsoguiden/rapporter-och-faktablad/rapport-2021.2-tidigare-vardkonsumtion-bland-alla-personer-som-dog-suicid-i-stockholms-lan-ar-2011-till-2016.pdf",
    läsa_mer_2_text:
      "Folkhälsorapport 2023 – självmord och självskador, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_2_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/sjalvmord-och-sjalvskador/",
  },
  Självmordsförsök: {
    definition:
      "Andel (%) individer som uppger att de har försökt att ta sitt liv det senaste året. Data för år 2018 är exkluderade eftersom frågan i den enkäten avviker från andra år.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Tidigare vårdkonsumtion bland alla personer som dog suicid i Stockholms län år 2011 till 2016 (rapport 2021:2), Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsoguiden.se/globalassets/verksamheter/forskning-och-utveckling/centrum-for-epidemiologi-och-samhallsmedicin/folkhalsoguiden/rapporter-och-faktablad/rapport-2021.2-tidigare-vardkonsumtion-bland-alla-personer-som-dog-suicid-i-stockholms-lan-ar-2011-till-2016.pdf",
    läsa_mer_2_text:
      "Folkhälsorapport 2023 – självmord och självskador, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_2_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/sjalvmord-och-sjalvskador/",
  },
  "Spänd arbetssituation": {
    definition:
      "Andel (%) individer som har ett spänt arbete som definieras som höga arbetskrav i relation till låg kontroll över vad som ska utföras och hur. Höga arbetskrav definieras som de som uppger att de har inte tillräckligt med tid för att hinna med sina arbetsuppgifter eller uppger att det förekommer motstridiga krav i sitt arbete. Låg kontroll definieras som de som uppger att arbetet inte ger dem möjlighet att lära sig något nytt och att utvecklas i arbetet, att de inte har frihet att bestämma vad som ska utföras i sitt arbete eller hur det ska utföras.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Arbetshälsorapport Stockholms län 2020, Centrum för arbets- och miljömedicin (CAMM)",
    läsa_mer_1_link:
      "http://dok.slso.sll.se/CAMM/Rapportserien/2020/Arbetshalsorapport_Stockholms_lan_2020_tillg%C3%A4nglig.pdf",
    läsa_mer_2_text:
      "Arbetsmiljöns betydelse för symtom på depression och utmattningssyndrom. En systematisk litteraturöversikt (rapport 2014), Statens Beredning för Medicinsk Utvärdering (SBU)",
    läsa_mer_2_link:
      "https://www.sbu.se/contentassets/800ad7aecf9146c795d3a89c7a957048/arbetsmiljo_depression_2014.pdf",
    läsa_mer_3_text:
      "Den organisatoriska och sociala arbetsmiljön – viktiga pusselbitar i en god arbetsmiljö. Vägledning till föreskrifterna om organisatorisk och social arbetsmiljö (rapport 2015), Arbetsmiljöverket",
    läsa_mer_3_link:
      "https://www.av.se/arbetsmiljoarbete-och-inspektioner/publikationer/bocker/vagledning-organisatorisk-social-arbetsmiljo-h457/",
  },
  "Depression och ångest (diagnostiserad)": {
    definition:
      "Andel (%) individer, 18 år eller äldre, som vårdats inom regionfinansierad öppen- eller slutenvård med diagnosen depression, ångest eller stressrelaterade tillstånd (ICD-10-diagnos F32-F34, F38 F39, F40-F43). Observera att eftersom data bygger på rapporterade diagnoser från vården skulle skillnader mellan områden eller över tid, delvis kunna bero på skillnader i registreringen av diagnoser. Måttet redovisar individer med en registrerad diagnos och täcker därför inte hela andelen som lider av depression och ångest. Säkerheten i talen är mindre i de kommuner eller stadsdelar med en mindre befolkningsstorlek, som till exempel i Salem, Nykvarn och Vaxholm.",
    källa: "VAL-databaserna ",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – depression och ångest, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/angest-och-depression/",
    läsa_mer_2_text:
      "Nationella riktlinjer för vård vid depression och ångestsyndrom, Socialstyrelsen",
    läsa_mer_2_link:
      "https://www.socialstyrelsen.se/kunskapsstod-och-regler/regler-och-riktlinjer/nationella-riktlinjer/riktlinjer-och-utvarderingar/depression-och-angest/",
    läsa_mer_3_text: "Regionalt vårdprogram för depression, Region Stockholm",
    läsa_mer_3_link:
      "https://psykiatristod.se/regionala-vardprogram/depression",
  },
  "Adhd (diagnostiserad)": {
    definition:
      "Andel (%) individer, 0–17 år eller 18–29 år, som vårdats inom regionfinansierad öppen- eller slutenvård med en adhd-diagnos (ICD-10-diagnos F90). Observera att eftersom data bygger på rapporterade diagnoser från vården skulle skillnader mellan områden eller över tid, delvis kunna bero på skillnader i registreringen av diagnoser. Måttet redovisar individer med en registrerad diagnos och täcker därför inte hela andelen som har adhd. Säkerheten i talen är mindre i de kommuner eller stadsdelar med en mindre befolkningsstorlek, som till exempel i Salem, Nykvarn och Vaxholm.",
    källa: "VAL-databaserna ",
    läsa_mer_1_text:
      "Autismspektrumtillstånd och adhd bland barn och ungdomar i Stockholms län: Förekomst av diagnoser i befolkningen samt vårdkonsumtion (Rapport 2022:5), Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsoguiden.se/globalassets/verksamheter/forskning-och-utveckling/centrum-for-epidemiologi-och-samhallsmedicin/folkhalsoguiden/rapporter-och-faktablad/rapport-2022.5-autismspektrumtillstand-och-adhd-bland-barn-och-ungdomar-i-stockholms-lan.pdf",
    läsa_mer_2_text:
      "Autismspektrumtillstånd och adhd bland vuxna i Stockholms län Förekomst av diagnoser i befolkningen samt vårdkonsumtion. Rapport 2022, Centrum för epidemiologi och samhällsmedicin (CES) (pdf)",
    läsa_mer_2_link:
      "https://www.ces.regionstockholm.se/globalassets/verksamheter/forskning-och-utveckling/centrum-for-epidemiologi-och-samhallsmedicin/rapporter-och-faktablad/rapport-autismspektrumtillstand-och-adhd-bland-vuxna-i-stockholms-lan.pdf",
  },
  "Autismspektrumtillstånd (diagnostiserad)": {
    definition:
      "Andel (%) individer, 0–17 år eller 18–29 år, som vårdats inom regionfinansierad öppen- eller slutenvård med diagnosen autismspektrumtillstånd (ICD-10-diagnos F84). Observera att eftersom data bygger på rapporterade diagnoser från vården skulle skillnader mellan områden eller över tid, delvis kunna bero på skillnader i registreringen av diagnoser. Måttet redovisar individer med en registrerad diagnos och täcker därför inte hela andelen som har autismspektrumtillstånd. Säkerheten i talen är mindre i de kommuner eller stadsdelar med en mindre befolkningsstorlek, som till exempel i Salem, Nykvarn och Vaxholm.",
    källa: "VAL-databaserna ",
    läsa_mer_1_text:
      "Autismspektrumtillstånd och adhd bland barn och ungdomar i Stockholms län: Förekomst av diagnoser i befolkningen samt vårdkonsumtion (Rapport 2022:5), Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsoguiden.se/globalassets/verksamheter/forskning-och-utveckling/centrum-for-epidemiologi-och-samhallsmedicin/folkhalsoguiden/rapporter-och-faktablad/rapport-2022.5-autismspektrumtillstand-och-adhd-bland-barn-och-ungdomar-i-stockholms-lan.pdf",
    läsa_mer_2_text:
      "Autismspektrumtillstånd och adhd bland vuxna i Stockholms län Förekomst av diagnoser i befolkningen samt vårdkonsumtion. Rapport 2022, Centrum för epidemiologi och samhällsmedicin (CES) (pdf)",
    läsa_mer_2_link:
      "https://www.ces.regionstockholm.se/globalassets/verksamheter/forskning-och-utveckling/centrum-for-epidemiologi-och-samhallsmedicin/rapporter-och-faktablad/rapport-autismspektrumtillstand-och-adhd-bland-vuxna-i-stockholms-lan.pdf",
  },
  "Fysiskt tungt arbete": {
    definition:
      "Andel (%) individer som uppger att sitt arbete innebär att de jobbar rent kroppsligt, att de flera gånger om dagen måste lyfta minst 15 kilo åt gången, att de arbetar i vriden ställning eller arbetar med händerna upplyfta i höjd med axlarna eller högre mer än en fjärdedel av sin arbetstid.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Arbetshälsorapport Stockholms län 2020, Centrum för arbets- och miljömedicin (CAMM)",
    läsa_mer_1_link:
      "http://dok.slso.sll.se/CAMM/Rapportserien/2020/Arbetshalsorapport_Stockholms_lan_2020_tillg%C3%A4nglig.pdf",
  },
  "Vibrationer på jobbet": {
    definition:
      "Andel (%) individer som uppger att de i sitt arbete använder vibrerande handhållna maskiner eller redskap minst fyra timmar per vecka och/eller utsätts för helkroppsvibrationer minst fyra timmar per vecka.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Arbetshälsorapport Stockholms län 2020, Centrum för arbets- och miljömedicin (CAMM)",
    läsa_mer_1_link:
      "http://dok.slso.sll.se/CAMM/Rapportserien/2020/Arbetshalsorapport_Stockholms_lan_2020_tillg%C3%A4nglig.pdf",
  },
  Våtarbete: {
    definition:
      "Andel (%) individer som uppger att de genom sitt arbete har hudkontakt med vatten mer än två timmar per dag.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Arbetshälsorapport Stockholms län 2020, Centrum för arbets- och miljömedicin (CAMM)",
    läsa_mer_1_link:
      "http://dok.slso.sll.se/CAMM/Rapportserien/2020/Arbetshalsorapport_Stockholms_lan_2020_tillg%C3%A4nglig.pdf",
  },
  "Buller på jobbet": {
    definition:
      "Andel (%) individer som uppger att de i sitt arbete måste använda en hög röst, mycket hög röst eller behöver skrika när de samtalar med andra på cirka 1  meters avstånd när det bullrar som mest på arbetsplatsen.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Arbetshälsorapport Stockholms län 2020, Centrum för arbets- och miljömedicin (CAMM)",
    läsa_mer_1_link:
      "http://dok.slso.sll.se/CAMM/Rapportserien/2020/Arbetshalsorapport_Stockholms_lan_2020_tillg%C3%A4nglig.pdf",
  },
  "Luftförorening på jobbet": {
    definition:
      "Andel (%) individer som uppger att de i sitt arbete utsätts för damm, motoravgaser eller rök minst fyra timmar per vecka.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Arbetshälsorapport Stockholms län 2020, Centrum för arbets- och miljömedicin (CAMM)",
    läsa_mer_1_link:
      "http://dok.slso.sll.se/CAMM/Rapportserien/2020/Arbetshalsorapport_Stockholms_lan_2020_tillg%C3%A4nglig.pdf",
  },
  "Användning av hasch eller marijuana": {
    definition:
      "Andel (%) individer som uppger att de har använt hasch eller marijuana det senaste året.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – narkotikavanor, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/riskfaktorer/droganvandning/",
    läsa_mer_2_text:
      "Rapporter om cannabis och unga vuxna i Stockhholms län, utgivna av Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_2_link:
      "https://www.folkhalsoguiden.se/material/rapporter/rapporter-om-cannabis-och-unga-vuxna/",
    läsa_mer_3_text: "Regeringens nationella ANDT-strategi 2021-2025",
    läsa_mer_3_link:
      "https://www.regeringen.se/rattsliga-dokument/skrivelse/2022/03/skr.-202122213",
  },
  "Användning av annan narkotika än hasch eller marijuana": {
    definition:
      "Andel (%) individer som uppger att de har använt annan narkotika än hasch eller marijuana (t.ex. amfetamin, kokain, heroin, ecstacy eller LSD) det senaste året.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – narkotikavanor, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/levnadsvanor/droganvandning/",
    läsa_mer_2_text:
      "Strategi och handlingsplan för ANDT-arbetet i Stockholms län 2017–2020",
    läsa_mer_2_link:
      "https://www.lansstyrelsen.se/stockholm/om-oss/vara-tjanster/publikationer/2017/strategi-och-handlingsplan-for-andt-arbetet-i-stockholms-lan-2017-2020.html",
    läsa_mer_3_text:
      "Rapporter om cannabis och unga vuxna i Stockhholms län, utgivna av Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_3_link:
      "https://www.folkhalsoguiden.se/material/rapporter/rapporter-om-cannabis-och-unga-vuxna/",
    "Läs mer text 4": "Regeringens nationella ANDT-strategi 2021-2025",
    "Läs mer link 4":
      "https://www.regeringen.se/rattsliga-dokument/skrivelse/2022/03/skr.-202122213",
  },
  "Användning av narkotikaklassificerade läkemedel": {
    definition:
      "Andel (%) individer som uppger att de har använt receptbelagda mediciner på annat sätt än läkare ordinerat (t.ex. Tramadol eller bensodiazepiner) det senaste året.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – narkotikavanor, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/levnadsvanor/droganvandning/",
    läsa_mer_2_text:
      "Strategi och handlingsplan för ANDT-arbetet i Stockholms län 2017–2020",
    läsa_mer_2_link:
      "https://www.lansstyrelsen.se/stockholm/om-oss/vara-tjanster/publikationer/2017/strategi-och-handlingsplan-for-andt-arbetet-i-stockholms-lan-2017-2020.html",
    läsa_mer_3_text:
      "Rapporter om cannabis och unga vuxna i Stockhholms län, utgivna av Centrum för epidemiologi och samhällsmedicin (CES).",
    läsa_mer_3_link:
      "https://www.folkhalsoguiden.se/material/rapporter/rapporter-om-cannabis-och-unga-vuxna/",
    "Läs mer text 4": "Regeringens nationella ANDT-strategi 2021-2025",
    "Läs mer link 4":
      "https://www.regeringen.se/rattsliga-dokument/skrivelse/2022/03/skr.-202122213",
  },
  "Röker dagligen": {
    definition:
      "Andel (%) individer som uppger att de röker dagligen. Rökning avser tobaksvaror såsom cigaretter, cigariller och piptobak.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text: "Sluta-röka-linjen",
    läsa_mer_1_link: "www.slutarokalinjen.se",
    läsa_mer_2_text: "Tobaksprevention (folkhalsoguiden.se)",
    läsa_mer_2_link:
      "https://www.folkhalsoguiden.se/amnesomraden1/levnadsvanor/uppdrag-tobaksprevention-stockholm/",
    läsa_mer_3_text:
      "Folkhälsorapport 2023 – rökning, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_3_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/levnadsvanor/rokning/",
  },
  "Snusar dagligen": {
    definition: "Andel (%) individer som uppger att de snusar dagligen.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text: "Sluta-röka-linjen",
    läsa_mer_1_link: "www.slutarokalinjen.se",
    läsa_mer_2_text: "Tobaksprevention (folkhalsoguiden.se)",
    läsa_mer_2_link:
      "https://www.folkhalsoguiden.se/amnesomraden1/levnadsvanor/uppdrag-tobaksprevention-stockholm/",
    läsa_mer_3_text:
      "Folkhälsorapport 2023 – rökning, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_3_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/levnadsvanor/rokning/",
  },
  "Riskbruk alkohol": {
    definition:
      "Andel (%) individer som uppger en alkoholkonsumtion som definieras som riskbruk. Riskbruk definieras som mer än 9 standardglas per vecka för kvinnor, mer än 14 standardglas per vecka för män eller mer än 5 standardglas per tillfälle oberoende av kön.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text: "Alkohollinjen",
    läsa_mer_1_link: "https://www.alkohollinjen.se/",
    läsa_mer_2_text:
      "Folkhälsorapport 2023 - alkoholvanor, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_2_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/levnadsvanor/alkoholvanor/",
  },
  "Fysisk aktivitet": {
    definition:
      "Andel (%) inivider som uppger en nivå av fysisk aktivitet som uppnår gällande rekommendationer för fysisk aktivitet (sammanlagt 150 minuter fysisk aktivitet per vecka av måttlig intensitet eller 75 minuter ansträngande insitensitet, alternativt en kombination).",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – fysisk aktivitet, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/levnadsvanor/fysisk-aktivitet/",
    läsa_mer_2_text:
      "Hälsofrämjande och överviktsförebyggande arbete i kommuner och stadsdelar i Stockholms län (2019:3), Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_2_link:
      "https://www.folkhalsoguiden.se/globalassets/verksamheter/forskning-och-utveckling/centrum-for-epidemiologi-och-samhallsmedicin/folkhalsoguiden/rapporter-och-faktablad/rapport-2019.3-overviktsforebyggande-arbete-i-kommuner.pdf",
  },
  "Lågt intag frukt": {
    definition:
      "Andel (%) individer som uppger att de äter frukt eller bär mindre än en gång per dag.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – matvanor, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/rlevnadsvanor/matvanor/",
    läsa_mer_2_text: "SkolmatSverige",
    läsa_mer_2_link: "www.skolmatsverige.se",
    läsa_mer_3_text: "Matguiden - Mat och hälsa",
    läsa_mer_3_link:
      "https://www.folkhalsoguiden.se/amnesomraden/levnadsvanor/matguiden/mat-och-halsa/",
  },
  "Lågt intag grönsaker": {
    definition:
      "Andel (%) individer som uppger att de äter grönsaker mindre än en gång per dag.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – matvanor, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/levnadsvanor/matvanor/",
    läsa_mer_2_text: "SkolmatSverige",
    läsa_mer_2_link: "www.skolmatsverige.se",
    läsa_mer_3_text: "Matguiden - Mat och hälsa",
    läsa_mer_3_link:
      "https://www.folkhalsoguiden.se/amnesomraden/levnadsvanor/matguiden/mat-och-halsa/",
  },
  "Högt intag läsk, saft, sötade drycker": {
    definition:
      "Andel (%) individer som uppger att de dricker läsk, saft eller sötade drycker mer än en gång per vecka.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – matvanor, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/levnadsvanor/matvanor/",
    läsa_mer_2_text: "SkolmatSverige",
    läsa_mer_2_link: "www.skolmatsverige.se",
    läsa_mer_3_text: "Matguiden - Mat och hälsa",
    läsa_mer_3_link:
      "https://www.folkhalsoguiden.se/amnesomraden/levnadsvanor/matguiden/mat-och-halsa/",
  },
  "Riskabla spelvanor": {
    definition:
      "Andel (%) individer som uppger spelvanor som definieras som riskabla spelvanor. Riskabla spelvanor definieras som de som uppger att de under det senaste halvåret ibland, ofta eller nästan alltid har spelat för mer än de verkligen haft råd att förlora, behövt spela med större summor för att få samma känsla av spänning, återvänt en annan dag för att försöka vinna tillbaka pengarna de förlorat eller lånat pengar eller sålt något för att ha pengar att spela för.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text: "Beroendecentrum – spelberoende",
    läsa_mer_1_link:
      "https://www.beroendecentrum.se/vard-hos-oss/spelberoende/",
  },
  "Begränsade sjukdom": {
    definition:
      "Andel (%) individer som uppger att de har en långvarig sjukdom, besvär efter olycksfall, funktionshinder eller annat långvarigt hälsoproblem som har medfört att arbetsförmågan är nedsatt eller har hindrat andra dagliga sysselsättningar i hög grad eller i någon mån.",
    källa: "Region Stockholms folkhälsoenkät",
  },
  "Självskattad hälsa": {
    definition:
      "Andel (%) individer som bedömer sitt allmänna hälsotillstånd som någorlunda, dåligt eller mycket dåligt.",
    källa: "Region Stockholms folkhälsoenkät",
  },
  Ryggsmärta: {
    definition:
      "Andel (%) individer som uppger att de under de senaste sex månaderna haft ont i nedre delen av ryggen, vilket medfört att arbetsförmågan varit nedsatt eller att de hindrats i andra dagliga sysselsättningar i hög grad eller någon mån.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – smärta, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/smarta/",
  },
  Nacksmärta: {
    definition:
      "Andel (%) individer som uppger att de under de senaste sex månaderna haft ont i nacken, övre delen av ryggen eller skuldrorna, vilket medfört att arbetsförmågan varit nedsatt eller att de hindrats i andra dagliga sysselsättningar i hög grad eller någon mån.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – smärta, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/smarta/",
    läsa_mer_2_text:
      "Nacksmärta – orsaker och åtgärder (rapport 2019:1), Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_2_link:
      "https://www.folkhalsoguiden.se/globalassets/verksamheter/forskning-och-utveckling/centrum-for-epidemiologi-och-samhallsmedicin/rapporter-och-faktablad/rapport-2019.1-nacksmarta---orsaker-och-atgarder.pdf",
  },
  "Huvudvärk eller migrän": {
    definition:
      "Andel (%) individer som uppger att de under de senaste sex månaderna haft återkommande huvudvärk eller migrän, vilket medfört att arbetsförmågan varit nedsatt eller att de hindrats i andra dagliga sysselsättningar i hög grad eller någon mån.",
    källa: "Region Stockholms folkhälsoenkät",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – smärta, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/smarta/",
  },
  Diabetes: {
    definition:
      "Andel (%) individer som uppger att de har diagnosen typ 1-diabetes eller typ 2-diabetes.",
    källa: "Region Stockholms folkhälsoenkät",
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
      "Folkhälsorapport 2023 – övervikt och fetma, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/riskfaktorer/overvikt/",
    läsa_mer_2_text:
      "Hälsofrämjande och överviktsförebyggande arbete i kommuner och stadsdelar i Stockholms län – Enkätundersökning 2018 (rapport 2019:3), Centrum för epidemiologi och samhälle (CES)",
    läsa_mer_2_link:
      "https://www.folkhalsoguiden.se/globalassets/verksamheter/forskning-och-utveckling/centrum-for-epidemiologi-och-samhallsmedicin/folkhalsoguiden/rapporter-och-faktablad/rapport-2019.3-overviktsforebyggande-arbete-i-kommuner.pdf",
    läsa_mer_3_text:
      "Den ojämlika obesitasvården (rapport 2022:3), Centrum för epidemiologi och samhällsmedicin (CES) (pdf)",
    läsa_mer_3_link:
      "https://www.ces.regionstockholm.se/globalassets/verksamheter/forskning-och-utveckling/centrum-for-epidemiologi-och-samhallsmedicin/folkhalsoguiden/rapporter-och-faktablad/rapport-2022.3-den-ojamlika-obestitasvardentga.pdf",
  },
  Sömnsvårigheter: {
    definition:
      "Andel (%) individer som uppger att de har lätta eller svåra besvär av sömnsvårigheter.",
    källa: "Region Stockholms folkhälsoenkät",
  },
  Tandhälsa: {
    definition:
      "Andel (%) individer som uppger att de har varken bra eller dålig, dålig eller mycket dålig tandhälsa.",
    källa: "Region Stockholms folkhälsoenkät",
  },
  "Förväntad medellivslängd": {
    definition:
      "Antal år som i genomsnitt återstår att leva vid födseln för en person enligt den gällande dödligheten vid tidpunkten. Beräkningarna är gjorda av demografer vid Statistiska centralbyrån (SCB), på beställning av Tillväxt- och regionplaneförvaltningen, Region Stockholm.",
    källa: "Statistiska centralbyrån (SCB)",
    läsa_mer_1_text:
      "Medellivslängden i Sverige, Statistiska Centralbyrån (SCB)",
    läsa_mer_1_link:
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
      "Folkhälsorapport 2023 – hjärtinfarkt och stroke, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten/sjukdomar-och-skador/hjartinfarkt-och-stroke/",
  },
  "Stroke (ålder nyinsjuknade)": {
    definition:
      "Medianåldern för nyinsjuknande i stroke, vilket definieras som ett vårdtillfälle med någon av huvuddiagnoserna I60–I69 (ICD-10) hos individer som aldrig tidigare haft en stroke, eller där det gått minst sju år sedan man senast vårdades för stroke. Resultaten redovisas som ett femårsmedelvärde.",
    källa: "VAL-databaserna ",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – hjärtinfarkt och stroke, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/hjartinfarkt-och-stroke/",
  },
  Lungcancer: {
    definition:
      "Antal nya fall av lungcancer per 100 000 invånare. Som årtal beräknas tidpunkten för första diagnosen under perioden 2006–2019 ur Cancerregistret.",
    källa: "Regionalt cancercentrum Stockholm Gotland (RCC)",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – cancer, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/cancer/ ",
    läsa_mer_2_text:
      "Regional cancerplan Stockholm-Gotland 2020–2023, Regionalt cancercentrum Stockholm Gotland",
    läsa_mer_2_link:
      "https://www.cancercentrum.se/globalassets/vara-uppdrag/strategisk-utvecklingsplan/stockholm---gotland/regional-cancerplan-rcc-stockholm-gotland-2020-2023.pdf ",
  },
  "Tjock- och ändtarmscancer ": {
    definition:
      "Antal nya fall av tjock- och ändtarmscancer per 100 000 invånare. Som årtal beräknas tidpunkten för första diagnosen under perioden 2006–2019 ur Cancerregistret. ",
    källa: "Regionalt cancercentrum Stockholm Gotland (RCC)",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – cancer, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/cancer/ ",
    läsa_mer_2_text:
      "Regional cancerplan Stockholm-Gotland 2020–2023, Regionalt cancercentrum Stockholm Gotland",
    läsa_mer_2_link:
      "https://www.cancercentrum.se/globalassets/vara-uppdrag/strategisk-utvecklingsplan/stockholm---gotland/regional-cancerplan-rcc-stockholm-gotland-2020-2023.pdf ",
  },
  Bröstcancer: {
    definition:
      "Antal nya fall av bröstcancer per 100 000 kvinnor. Som årtal beräknas tidpunkten för första diagnosen under perioden 2006–2019 ur Cancerregistret.",
    källa: "Regionalt cancercentrum Stockholm Gotland (RCC)",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – cancer, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/cancer/",
    läsa_mer_2_text:
      "Regional cancerplan Stockholm-Gotland 2020–2023, Regionalt cancercentrum Stockholm Gotland",
    läsa_mer_2_link:
      "https://www.cancercentrum.se/globalassets/vara-uppdrag/strategisk-utvecklingsplan/stockholm---gotland/regional-cancerplan-rcc-stockholm-gotland-2020-2023.pdf ",
  },
  Prostatacancer: {
    definition:
      "Antal nya fall av prostatacancer per 100 000 män. Som årtal beräknas tidpunkten för första diagnosen under perioden 2006–2019 ur Cancerregistret.",
    källa: "Regionalt cancercentrum Stockholm Gotland (RCC)",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – cancer, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/cancer/ ",
    läsa_mer_2_text:
      "Regional cancerplan Stockholm-Gotland 2020–2023, Regionalt cancercentrum Stockholm Gotland",
    läsa_mer_2_link:
      "https://www.cancercentrum.se/globalassets/vara-uppdrag/strategisk-utvecklingsplan/stockholm---gotland/regional-cancerplan-rcc-stockholm-gotland-2020-2023.pdf ",
  },
  "Malignt hudmelanom": {
    definition: "Antal nya fall av malignt hudmelanom per 100 000 invånare.",
    källa: "Regionalt cancercentrum Stockholm Gotland (RCC)",
    läsa_mer_1_text:
      "Folkhälsorapport 2023 – cancer, Centrum för epidemiologi och samhällsmedicin (CES)",
    läsa_mer_1_link:
      "https://www.folkhalsorapportstockholm.se/rapporten2/sjukdomar-och-skador/cancer/ ",
    läsa_mer_2_text:
      "Regional cancerplan Stockholm-Gotland 2020–2023, Regionalt cancercentrum Stockholm Gotland",
    läsa_mer_2_link:
      "https://www.cancercentrum.se/globalassets/vara-uppdrag/strategisk-utvecklingsplan/stockholm---gotland/regional-cancerplan-rcc-stockholm-gotland-2020-2023.pdf ",
  },
  Gymnasiebehörighet: {
    definition:
      "Procentandelen elever med ett slutbetyg från grundskolan som ger behörighet till något av de nationella gymnasieprogrammen (inkl. yrkesprogrammen), av de elever som slutfört sin grundskoleutbildning under våren respektive år. Uppgiften anges utifrån elevens boendeort, inte skolornas geografiska placering. </br></br>Notera: Måttet är inte helt jämförbart med Skolverkets statistik. Andelen behöriga påverkas bl. a. av andelen nyligen invandrade, med ofullständiga kunskaper i svenska",
    källa: "Statistiska centralbyrån (SCB) ",
    läsa_mer_1_text: "Skolverkets statistikrapporter",
    läsa_mer_1_link:
      "https://www.skolverket.se/publikationsserier/beskrivande-statistik",
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
    läsa_mer_2_link: "Buller i samhället (camm.regionstockholm.se)",
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
  },
};
