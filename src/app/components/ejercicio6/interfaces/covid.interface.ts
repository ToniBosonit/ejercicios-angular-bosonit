export interface Covid {
  updated:                number;
  country:                string;
  countryInfo:            CountryInfo;
  cases:                  number;
  todayCases:             number;
  deaths:                 number;
  todayDeaths:            number;
  recovered:              number;
  todayRecovered:         number;
  active:                 number;
  critical:               number;
  casesPerOneMillion:     number;
  deathsPerOneMillion:    number;
  tests:                  number;
  testsPerOneMillion:     number;
  population:             number;
  continent:              Continent;
  oneCasePerPeople:       number;
  oneDeathPerPeople:      number;
  oneTestPerPeople:       number;
  activePerOneMillion:    number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion:  number;
}

export enum Continent {
  Africa = "Africa",
  Asia = "Asia",
  AustraliaOceania = "Australia-Oceania",
  Empty = "",
  Europe = "Europe",
  NorthAmerica = "North America",
  SouthAmerica = "South America",
}

export interface CountryInfo {
  _id:  number | null;
  iso2: null | string;
  iso3: null | string;
  lat:  number;
  long: number;
  flag: string;
}
