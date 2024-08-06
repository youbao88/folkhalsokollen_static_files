const indicator_name_parameter_map = {
  Gymnasiebehörighet: {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: "Ej valbart",
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: "Ej valbart",
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: "Ej valbart",
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Dödsfall på grund av covid-19": {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: [
        "0-24 år",
        "25-44 år",
        "45-64 år",
        "65-79 år",
        "80+ år",
      ],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: [
        "0-24 år",
        "25-44 år",
        "45-64 år",
        "65-79 år",
        "80+ år",
      ],
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: [
        "0-24 år",
        "25-44 år",
        "45-64 år",
        "65-79 år",
        "80+ år",
      ],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Sjukhusinläggning med covid-19": {
    karta: {
      karta_Tidsperiod: "2023",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: [
        "0-24 år",
        "25-44 år",
        "45-64 år",
        "65-79 år",
        "80+ år",
      ],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2023",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: [
        "0-24 år",
        "25-44 år",
        "45-64 år",
        "65-79 år",
        "80+ år",
      ],
    },
    tabell: {
      table_Tidsperiod: "2023",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: [
        "0-24 år",
        "25-44 år",
        "45-64 år",
        "65-79 år",
        "80+ år",
      ],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Vaccination mot covid-19 (minst 2 doser)": {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: [
        "18-24 år",
        "25-44 år",
        "45-64 år",
        "65-79 år",
        "80+ år",
      ],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: [
        "18-24 år",
        "25-44 år",
        "45-64 år",
        "65-79 år",
        "80+ år",
      ],
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: [
        "18-24 år",
        "25-44 år",
        "45-64 år",
        "65-79 år",
        "80+ år",
      ],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Vaccination mot säsongsinfluensa": {
    karta: {
      karta_Tidsperiod: "2023-2024",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2023-2024",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2023-2024",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Snusar dagligen": {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  Självmordsförsök: {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Huvudvärk eller migrän": {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Fysisk aktivitet": {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Självskattad hälsa": {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  Nacksmärta: {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Tillit till polisen": {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  Självmordstankar: {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  Sömnsvårigheter: {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  Ryggsmärta: {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Utsatthet för hot och våld": {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Lågt intag grönsaker": {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Övervikt och obesitas": {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Högt intag läsk, saft, sötade drycker": {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Psykisk ohälsa": {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  Ensamhet: {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Lågt intag frukt": {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Långvarig covid-19 (hög påverkan)": {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Riskbruk alkohol": {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Skjutit upp eller avstått vård p.g.a. coronapandemin": {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Användning av hasch eller marijuana": {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Avstått vård på grund av dålig ekonomi": {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Röker dagligen": {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Avstått läkemedel på grund av dålig ekonomi": {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Rädsla att gå ut ensam": {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Begränsande sjukdom": {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Utsatthet för sexuella trakasserier": {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  Öppenvårdsbesök: {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["0-24 år", "25-49 år", "50-69 år", "70+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["0-24 år", "25-49 år", "50-69 år", "70+ år"],
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["0-24 år", "25-49 år", "50-69 år", "70+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  Slutenvårdstillfällen: {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["0-24 år", "25-49 år", "50-69 år", "70+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["0-24 år", "25-49 år", "50-69 år", "70+ år"],
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["0-24 år", "25-49 år", "50-69 år", "70+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  Familjetyp: {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["0-24 år", "25-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["0-24 år", "25-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["0-24 år", "25-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Förväntad medellivslängd": {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Samtliga"],
      karta_Åldersgrupp: ["Samtliga"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Samtliga"],
    },
    linje: {
      linje_Kön: ["Samtliga"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["Samtliga"],
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["Samtliga"],
      tabel_Kön: ["Samtliga"],
    },
  },
  Åldersgrupper: {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["Se indikatorn"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["Se indikatorn"],
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["Se indikatorn"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  Födelseland: {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["0-24 år", "25-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["0-24 år", "25-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["0-24 år", "25-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  Utbildningsnivå: {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["25-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["25-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["25-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  Bröstcancer: {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Kvinnor"],
      karta_Åldersgrupp: ["Samtliga"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Kvinnor"],
    },
    linje: {
      linje_Kön: ["Kvinnor"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["Samtliga"],
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["Samtliga"],
      tabel_Kön: ["Kvinnor"],
    },
  },
  "Anmälda våldsbrott": {
    karta: {
      karta_Tidsperiod: "2023",
      karta_Kön: ["Samtliga"],
      karta_Åldersgrupp: ["Samtliga"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2023",
      stapel_Kön: ["Samtliga"],
    },
    linje: {
      linje_Kön: ["Samtliga"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["Samtliga"],
    },
    tabell: {
      table_Tidsperiod: "2023",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["Samtliga"],
      tabel_Kön: ["Samtliga"],
    },
  },
  "Tjock- och ändtarmscancer": {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["Samtliga"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["Samtliga"],
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["Samtliga"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Ekonomiskt bistånd": {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["25-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["25-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["25-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "24-åringar med bristfällig utbildning": {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: "Ej valbart",
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: "Ej valbart",
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: "Ej valbart",
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Barn i familjer med låg inkomst": {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: "Samtliga",
      karta_Åldersgrupp: ["0-4 år", "10-14 år", "15-19 år", "5-9 år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: "Samtliga",
    },
    linje: {
      linje_Kön: "Samtliga",
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["0-4 år", "10-14 år", "15-19 år", "5-9 år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["0-4 år", "10-14 år", "15-19 år", "5-9 år"],
      tabel_Kön: "Samtliga",
    },
  },
  Prostatacancer: {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Män"],
      karta_Åldersgrupp: ["Samtliga"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Män"],
    },
    linje: {
      linje_Kön: ["Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["Samtliga"],
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["Samtliga"],
      tabel_Kön: ["Män"],
    },
  },
  Lungcancer: {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["Samtliga"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["Samtliga"],
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["Samtliga"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Anmälan socialtjänst via BVC": {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Samtliga"],
      karta_Åldersgrupp: ["Samtliga"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Samtliga"],
    },
    linje: {
      linje_Kön: ["Samtliga"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["Samtliga"],
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["Samtliga"],
      tabel_Kön: ["Samtliga"],
    },
  },
  "Övervikt och obesitas 4-åringar": {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Flickor", "Pojkar"],
      karta_Åldersgrupp: ["Samtliga"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Flickor", "Pojkar"],
    },
    linje: {
      linje_Kön: ["Flickor", "Pojkar"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["Samtliga"],
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["Samtliga"],
      tabel_Kön: ["Flickor", "Pojkar"],
    },
  },
  "Vaccinationstäckning MPR": {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Samtliga"],
      karta_Åldersgrupp: ["Samtliga"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Samtliga"],
    },
    linje: {
      linje_Kön: ["Samtliga"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["Samtliga"],
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["Samtliga"],
      tabel_Kön: ["Samtliga"],
    },
  },
  "Exponering för tobaksrök vid 8 månaders ålder": {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Samtliga"],
      karta_Åldersgrupp: ["Samtliga"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Samtliga"],
    },
    linje: {
      linje_Kön: ["Samtliga"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["Samtliga"],
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["Samtliga"],
      tabel_Kön: ["Samtliga"],
    },
  },
  "Amning vid 4 månaders ålder": {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Samtliga"],
      karta_Åldersgrupp: ["Samtliga"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Samtliga"],
    },
    linje: {
      linje_Kön: ["Samtliga"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["Samtliga"],
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["Samtliga"],
      tabel_Kön: ["Samtliga"],
    },
  },
  "Kariesfria 3-åringar": {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Samtliga"],
      karta_Åldersgrupp: ["Samtliga"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Samtliga"],
    },
    linje: {
      linje_Kön: ["Samtliga"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["Samtliga"],
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["Samtliga"],
      tabel_Kön: ["Samtliga"],
    },
  },
  Inkomstnivå: {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["25-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["25-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["25-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  Boendeform: {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["0-24 år", "25-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["0-24 år", "25-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["0-24 år", "25-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Huvudsaklig sysselsättning": {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["25-44 år", "45-64 år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["25-44 år", "45-64 år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["25-44 år", "45-64 år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Hjärtinfarkt (ålder nyinsjuknade)": {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["Ej valbart"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["Ej valbart"],
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["Ej valbart"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Stroke (ålder nyinsjuknade)": {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["Ej valbart"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["Ej valbart"],
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["Ej valbart"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Adhd (diagnostiserad)": {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["0-17 år", "18-29 år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["0-17 år", "18-29 år"],
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["0-17 år", "18-29 år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Autismspektrumtillstånd (diagnostiserad)": {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["0-17 år", "18-29 år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["0-17 år", "18-29 år"],
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["0-17 år", "18-29 år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Beroende och skadligt bruk (diagnosticerad)": {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["18-44 år", "45+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["18-44 år", "45+ år"],
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["18-44", "45+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Depression och ångest (diagnostiserad)": {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["18-29 år", "30-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["18-29 år", "30-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["18-29 år", "30-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  Ohälsodagar: {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["25-44 år", "45-64 år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["25-44 år", "45-64 år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["25-44 år", "45-64 år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Röstande i kommunval": {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Samtliga"],
      karta_Åldersgrupp: ["Samtliga"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Samtliga"],
    },
    linje: {
      linje_Kön: ["Samtliga"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["Samtliga"],
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["Samtliga"],
      tabel_Kön: ["Samtliga"],
    },
  },
  "Riskabla spelvanor": {
    karta: {
      karta_Tidsperiod: "2018",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2018",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2018",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Användning av annan narkotika än hasch eller marijuana": {
    karta: {
      karta_Tidsperiod: "2018",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2018",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år"],
    },
    tabell: {
      table_Tidsperiod: "2018",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  Diabetes: {
    karta: {
      karta_Tidsperiod: "2018",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2018",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2018",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Användning av narkotikaklassificerade läkemedel": {
    karta: {
      karta_Tidsperiod: "2018",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2018",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2018",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  Tandhälsa: {
    karta: {
      karta_Tidsperiod: "2018",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2018",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2018",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Otillräcklig hjälp i vardagslivet": {
    karta: {
      karta_Tidsperiod: "2018",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2018",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2018",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Besvär av trafikbuller i bostad": {
    karta: {
      karta_Tidsperiod: "2018",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2018",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2018",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Oro för att förlora sitt arbete": {
    karta: {
      karta_Tidsperiod: "2018",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2018",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år"],
    },
    tabell: {
      table_Tidsperiod: "2018",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Hjälp med att ta sig fram utomhus": {
    karta: {
      karta_Tidsperiod: "2018",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2018",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2018",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Hjälp med hushållssysslor": {
    karta: {
      karta_Tidsperiod: "2018",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2018",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2018",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Fallolyckor med påverkan på vardagslivet": {
    karta: {
      karta_Tidsperiod: "2018",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2018",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2018",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  Fallolyckor: {
    karta: {
      karta_Tidsperiod: "2018",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2018",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2018",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  Fallskada: {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["65-84 år", "85+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["65-84 år", "85+ år"],
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["65-84 år", "85+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Hjälp med personlig omvårdnad": {
    karta: {
      karta_Tidsperiod: "2018",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2018",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2018",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Ekonomiska svårigheter": {
    karta: {
      karta_Tidsperiod: "2018",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2018",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2018",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Nedsatt hörsel": {
    karta: {
      karta_Tidsperiod: "2018",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2018",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2018",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Fysiskt tungt arbete": {
    karta: {
      karta_Tidsperiod: "2018",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2018",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år"],
    },
    tabell: {
      table_Tidsperiod: "2018",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Vibrationer på jobbet": {
    karta: {
      karta_Tidsperiod: "2018",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2018",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år"],
    },
    tabell: {
      table_Tidsperiod: "2018",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  Våtarbete: {
    karta: {
      karta_Tidsperiod: "2018",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2018",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år"],
    },
    tabell: {
      table_Tidsperiod: "2018",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Tillit till riksdagen": {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },

  "Tillit till sjukvården": {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Spänd arbetssituation": {
    karta: {
      karta_Tidsperiod: "2018",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2018",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år"],
    },
    tabell: {
      table_Tidsperiod: "2018",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Luftförorening på jobbet": {
    karta: {
      karta_Tidsperiod: "2018",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2018",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år"],
    },
    tabell: {
      table_Tidsperiod: "2018",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Buller på jobbet": {
    karta: {
      karta_Tidsperiod: "2018",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["16-44 år", "45-64 år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2018",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["16-44 år", "45-64 år"],
    },
    tabell: {
      table_Tidsperiod: "2018",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["16-44 år", "45-64 år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Exponeras för luftföroreningar": {
    karta: {
      karta_Tidsperiod: "2019",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["0-19 år", "20-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2018",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["0-19 år", "20-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2019",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["0-19 år", "20-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Exponeras för trafikbuller": {
    karta: {
      karta_Tidsperiod: "2019",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["0-19 år", "20-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2018",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["0-19 år", "20-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2019",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["0-19 år", "20-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Tillgång till grönska i närområdet": {
    karta: {
      karta_Tidsperiod: "2019",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["0-19 år", "20-44 år", "45-64 år", "65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2018",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["0-19 år", "20-44 år", "45-64 år", "65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2019",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["0-19 år", "20-44 år", "45-64 år", "65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
  "Ångestkänslor (grundskola åk 9)": {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Killar", "Tjejer"],
      karta_Åldersgrupp: "Samtliga",
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Killar", "Tjejer"],
    },
    linje: {
      linje_Kön: ["Killar", "Tjejer"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: "Samtliga",
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: "Samtliga",
      tabel_Kön: ["Killar", "Tjejer"],
    },
  },
  "Ångestkänslor (gymnasiet år 2)": {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Killar", "Tjejer"],
      karta_Åldersgrupp: "Samtliga",
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Killar", "Tjejer"],
    },
    linje: {
      linje_Kön: ["Killar", "Tjejer"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: "Samtliga",
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: "Samtliga",
      tabel_Kön: ["Killar", "Tjejer"],
    },
  },
  "Använder vitt snus (grundskola åk 9)": {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Killar", "Tjejer"],
      karta_Åldersgrupp: "Samtliga",
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Killar", "Tjejer"],
    },
    linje: {
      linje_Kön: ["Killar", "Tjejer"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: "Samtliga",
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: "Samtliga",
      tabel_Kön: ["Killar", "Tjejer"],
    },
  },
  "Använder vitt snus (gymnasiet år 2)": {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Killar", "Tjejer"],
      karta_Åldersgrupp: "Samtliga",
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Killar", "Tjejer"],
    },
    linje: {
      linje_Kön: ["Killar", "Tjejer"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: "Samtliga",
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: "Samtliga",
      tabel_Kön: ["Killar", "Tjejer"],
    },
  },
  "Huvudvärk (grundskola åk 9)": {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Killar", "Tjejer"],
      karta_Åldersgrupp: "Samtliga",
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Killar", "Tjejer"],
    },
    linje: {
      linje_Kön: ["Killar", "Tjejer"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: "Samtliga",
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: "Samtliga",
      tabel_Kön: ["Killar", "Tjejer"],
    },
  },
  "Huvudvärk (gymnasiet år 2)": {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Killar", "Tjejer"],
      karta_Åldersgrupp: "Samtliga",
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Killar", "Tjejer"],
    },
    linje: {
      linje_Kön: ["Killar", "Tjejer"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: "Samtliga",
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: "Samtliga",
      tabel_Kön: ["Killar", "Tjejer"],
    },
  },
  "Röker e-cigaretter (grundskola åk 9)": {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Killar", "Tjejer"],
      karta_Åldersgrupp: "Samtliga",
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Killar", "Tjejer"],
    },
    linje: {
      linje_Kön: ["Killar", "Tjejer"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: "Samtliga",
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: "Samtliga",
      tabel_Kön: ["Killar", "Tjejer"],
    },
  },
  "Röker e-cigaretter (gymnasiet år 2)": {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Killar", "Tjejer"],
      karta_Åldersgrupp: "Samtliga",
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Killar", "Tjejer"],
    },
    linje: {
      linje_Kön: ["Killar", "Tjejer"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: "Samtliga",
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: "Samtliga",
      tabel_Kön: ["Killar", "Tjejer"],
    },
  },
  "Livsvillkorsindex": {
    karta: {
      karta_Tidsperiod: "2021",
      karta_Kön: "Samtliga",
      karta_Åldersgrupp: "Samtliga",
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2021",
      stapel_Kön: "Samtliga",
    },
    linje: {
      linje_Kön: "Samtliga",
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: "Samtliga",
    },
    tabell: {
      table_Tidsperiod: "2021",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: "Samtliga",
      tabel_Kön: "Samtliga",
    },
  },
    "Demens (diagnostiserad)": {
    karta: {
      karta_Tidsperiod: "2022",
      karta_Kön: ["Kvinnor", "Män"],
      karta_Åldersgrupp: ["65+ år"],
    },
    stapel: {
      stapel_Område: "Stockholms län",
      stapel_Tidsperiod: "2022",
      stapel_Kön: ["Kvinnor", "Män"],
    },
    linje: {
      linje_Kön: ["Kvinnor", "Män"],
      linje_Område: ["Stockholms län", "Botkyrka"],
      linje_Åldersgrupp: ["65+ år"],
    },
    tabell: {
      table_Tidsperiod: "2022",
      table_Område: "Stockholms län",
      tabel_Åldersgrupp: ["65+ år"],
      tabel_Kön: ["Kvinnor", "Män"],
    },
  },
};
const indicator_init_map = {
  "Äldres hälsa": {
    indikator_group: "Äldres hälsa",
    indikator_name: "Demens (diagnostiserad)",
    indikator_category: "Ej valbart",
    karta_Tidsperiod: "2022",
    karta_Kön: ["Kvinnor", "Män"],
    karta_Åldersgrupp: ["65+ år"],
    stapel_Område: "Stockholms län",
    stapel_Tidsperiod: "2022",
    stapel_Kön: ["Kvinnor", "Män"],
    linje_Område: ["Stockholms län", "Botkyrka"],
    linje_Kön: ["Kvinnor", "Män"],
    linje_Åldersgrupp: ["65+ år"],
    table_Tidsperiod: "2022",
    table_Område: "Stockholms län",
    tabel_Åldersgrupp: ["65+ år"],
    tabel_Kön: ["Kvinnor", "Män"],
  },
  Levnadsvanor: {
    indikator_group: "Levnadsvanor",
    indikator_name: "Användning av annan narkotika än hasch eller marijuana",
    indikator_category: "Ej valbart",
    karta_Tidsperiod: "2018",
    karta_Kön: ["Kvinnor", "Män"],
    karta_Åldersgrupp: ["16-44 år", "45-64 år"],
    stapel_Område: "Stockholms län",
    stapel_Tidsperiod: "2018",
    stapel_Kön: ["Kvinnor", "Män"],
    linje_Område: ["Stockholms län", "Botkyrka"],
    linje_Kön: ["Kvinnor", "Män"],
    linje_Åldersgrupp: ["16-44 år", "45-64 år"],
    table_Tidsperiod: "2018",
    table_Område: "Stockholms län",
    tabel_Åldersgrupp: ["16-44 år", "45-64 år"],
    tabel_Kön: ["Kvinnor", "Män"],
  },
  "Hälsa och sjukdom": {
    indikator_group: "Hälsa och sjukdom",
    indikator_name: "Begränsande sjukdom",
    indikator_category: "Ej valbart",
    karta_Tidsperiod: "2021",
    karta_Kön: ["Kvinnor", "Män"],
    karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    stapel_Område: "Stockholms län",
    stapel_Tidsperiod: "2021",
    stapel_Kön: ["Kvinnor", "Män"],
    linje_Område: ["Stockholms län", "Botkyrka"],
    linje_Kön: ["Kvinnor", "Män"],
    linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    table_Tidsperiod: "2021",
    table_Område: "Stockholms län",
    tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    tabel_Kön: ["Kvinnor", "Män"],
  },
  "Hälso- och sjukvård": {
    indikator_group: "Hälso- och sjukvård",
    indikator_name: "Avstått läkemedel på grund av dålig ekonomi",
    indikator_category: "Ej valbart",
    karta_Tidsperiod: "2021",
    karta_Kön: ["Kvinnor", "Män"],
    karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    stapel_Område: "Stockholms län",
    stapel_Tidsperiod: "2021",
    stapel_Kön: ["Kvinnor", "Män"],
    linje_Område: ["Stockholms län", "Botkyrka"],
    linje_Kön: ["Kvinnor", "Män"],
    linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    table_Tidsperiod: "2021",
    table_Område: "Stockholms län",
    tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    tabel_Kön: ["Kvinnor", "Män"],
  },
  "Ungas hälsa": {
    indikator_group: "Ungas hälsa",
    indikator_name: "Ångestkänslor (grundskola åk 9)",
    indikator_category: "Ej valbart",
    karta_Tidsperiod: "2022",
    karta_Kön: ["Killar", "Tjejer"],
    karta_Åldersgrupp: "Samtliga",
    stapel_Område: "Stockholms län",
    stapel_Tidsperiod: "2022",
    stapel_Kön: ["Killar", "Tjejer"],
    linje_Område: ["Stockholms län", "Botkyrka"],
    linje_Kön: ["Killar", "Tjejer"],
    linje_Åldersgrupp: "Samtliga",
    table_Tidsperiod: "2022",
    table_Område: "Stockholms län",
    tabel_Åldersgrupp: "Samtliga",
    tabel_Kön: ["Killar", "Tjejer"],
  },
  "Psykisk ohälsa": {
    indikator_group: "Psykisk ohälsa",
    indikator_name: "Adhd (diagnostiserad)",
    indikator_category: "Ej valbart",
    karta_Tidsperiod: "2022",
    karta_Kön: ["Kvinnor", "Män"],
    karta_Åldersgrupp: ["0-17 år", "18-29 år"],
    stapel_Område: "Stockholms län",
    stapel_Tidsperiod: "2022",
    stapel_Kön: ["Kvinnor", "Män"],
    linje_Område: ["Stockholms län", "Botkyrka"],
    linje_Kön: ["Kvinnor", "Män"],
    linje_Åldersgrupp: ["0-17 år", "18-29 år"],
    table_Tidsperiod: "2022",
    table_Område: "Stockholms län",
    tabel_Åldersgrupp: ["0-17 år", "18-29 år"],
    tabel_Kön: ["Kvinnor", "Män"],
  },
  "Sociala relationer, trygghet och demokrati": {
    indikator_group: "Sociala relationer, trygghet och demokrati",
    indikator_name: "Anmälda våldsbrott",
    indikator_category: "Ej valbart",
    karta_Tidsperiod: "2021",
    karta_Kön: "Samtliga",
    karta_Åldersgrupp: "Samtliga",
    stapel_Område: "Stockholms län",
    stapel_Tidsperiod: "2021",
    stapel_Kön: "Samtliga",
    linje_Område: ["Stockholms län", "Botkyrka"],
    linje_Kön: "Samtliga",
    linje_Åldersgrupp: "Samtliga",
    table_Tidsperiod: "2021",
    table_Område: "Stockholms län",
    tabel_Åldersgrupp: "Samtliga",
    tabel_Kön: "Samtliga",
  },
  "Utbildning, sysselsättning och inkomst": {
    indikator_group: "Utbildning, sysselsättning och inkomst",
    indikator_name: "24-åringar med bristfällig utbildning",
    indikator_category: "Ej valbart",
    karta_Tidsperiod: "2022",
    karta_Kön: ["Kvinnor", "Män"],
    karta_Åldersgrupp: "Ej valbart",
    stapel_Område: "Stockholms län",
    stapel_Tidsperiod: "2022",
    stapel_Kön: ["Kvinnor", "Män"],
    linje_Område: ["Stockholms län", "Botkyrka"],
    linje_Kön: ["Kvinnor", "Män"],
    linje_Åldersgrupp: "Ej valbart",
    table_Tidsperiod: "2022",
    table_Område: "Stockholms län",
    tabel_Åldersgrupp: "Ej valbart",
    tabel_Kön: ["Kvinnor", "Män"],
  },
  Arbetsmiljö: {
    indikator_group: "Arbetsmiljö",
    indikator_name: "Buller på jobbet",
    indikator_category: "Ej valbart",
    karta_Tidsperiod: "2018",
    karta_Kön: ["Kvinnor", "Män"],
    karta_Åldersgrupp: ["16-44 år", "45-64 år"],
    stapel_Område: "Stockholms län",
    stapel_Tidsperiod: "2018",
    stapel_Kön: ["Kvinnor", "Män"],
    linje_Område: ["Stockholms län", "Botkyrka"],
    linje_Kön: ["Kvinnor", "Män"],
    linje_Åldersgrupp: ["16-44 år", "45-64 år"],
    table_Tidsperiod: "2018",
    table_Område: "Stockholms län",
    tabel_Åldersgrupp: ["16-44 år", "45-64 år"],
    tabel_Kön: ["Kvinnor", "Män"],
  },
  Demografi: {
    indikator_group: "Demografi",
    indikator_name: "Åldersgrupper",
    indikator_category: ["0-6 år", "7-12 år", "13-19 år"],
    karta_Tidsperiod: "2022",
    karta_Kön: ["Kvinnor", "Män"],
    karta_Åldersgrupp: "Se indikatorn",
    stapel_Område: "Stockholms län",
    stapel_Tidsperiod: "2022",
    stapel_Kön: ["Kvinnor", "Män"],
    linje_Område: ["Stockholms län", "Botkyrka"],
    linje_Kön: ["Kvinnor", "Män"],
    linje_Åldersgrupp: "Se indikatorn",
    table_Tidsperiod: "2022",
    table_Område: "Stockholms län",
    tabel_Åldersgrupp: "Se indikatorn",
    tabel_Kön: ["Kvinnor", "Män"],
  },
  "Barns hälsa": {
    indikator_group: "Barns hälsa",
    indikator_name: "Amning vid 4 månaders ålder",
    indikator_category: "Ej valbart",
    karta_Tidsperiod: "2022",
    karta_Kön: "Samtliga",
    karta_Åldersgrupp: "Samtliga",
    stapel_Område: "Stockholms län",
    stapel_Tidsperiod: "2022",
    stapel_Kön: "Samtliga",
    linje_Område: ["Stockholms län", "Botkyrka"],
    linje_Kön: "Samtliga",
    linje_Åldersgrupp: "Samtliga",
    table_Tidsperiod: "2022",
    table_Område: "Stockholms län",
    tabel_Åldersgrupp: "Samtliga",
    tabel_Kön: "Samtliga",
  },
  Miljöhälsa: {
    indikator_group: "Miljöhälsa",
    indikator_name: "Besvär av trafikbuller i bostad",
    indikator_category: "Ej valbart",
    karta_Tidsperiod: "2018",
    karta_Kön: ["Kvinnor", "Män"],
    karta_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    stapel_Område: "Stockholms län",
    stapel_Tidsperiod: "2018",
    stapel_Kön: ["Kvinnor", "Män"],
    linje_Område: ["Stockholms län", "Botkyrka"],
    linje_Kön: ["Kvinnor", "Män"],
    linje_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    table_Tidsperiod: "2018",
    table_Område: "Stockholms län",
    tabel_Åldersgrupp: ["16-44 år", "45-64 år", "65+ år"],
    tabel_Kön: ["Kvinnor", "Män"],
  },
};
const id_indicator = {
  138423: "Arbetsmiljö",
  138425: "Barns hälsa",
  138427: "Ungas hälsa",
  138424: "Demografi",
  138391: "Hälsa och sjukdom",
  138415: "Hälso- och sjukvård",
  138365: "Levnadsvanor",
  138419: "Psykisk ohälsa",
  138421: "Sociala relationer, trygghet och demokrati",
  138422: "Utbildning, sysselsättning och inkomst",
  138426: "Äldres hälsa",
  219317: "Miljöhälsa",
};
