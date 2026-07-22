/**
 * Český vokativ (5. pád) pro KŘESTNÍ jména — kvůli oslovení „Vítej, Lucko!".
 *
 * Čeština má vokativ zrádný, proto je přístup ZÁMĚRNĚ konzervativní:
 *  1) slovník běžných mužských jmen zakončených na souhlásku (jistá forma),
 *  2) obecné pravidlo `-a → -o` (Jana→Jano, Simona→Simono, Honza→Honzo),
 *  3) u všeho ostatního (jména na -e/-í/-o/-y a ženská na souhlásku) vrací
 *     1. pád (nominativ) — radši neutrální než špatně vyskloňované oslovení.
 *
 * Určeno pro JEDNO slovo (křestní jméno). Víc slov → vezme první.
 * Neaplikovat na názvy salonů/firem (ty zůstávají v 1. pádě).
 */

// Běžná mužská jména zakončená na souhlásku → vokativ (klíč = malými písmeny).
const MALE_VOCATIVE: Record<string, string> = {
  petr: "petře",
  pavel: "pavle",
  karel: "karle",
  tomáš: "tomáši",
  marek: "marku",
  jakub: "jakube",
  david: "davide",
  martin: "martine",
  jan: "jane",
  ondřej: "ondřeji",
  filip: "filipe",
  adam: "adame",
  dominik: "dominiku",
  lukáš: "lukáši",
  michal: "michale",
  daniel: "danieli",
  matěj: "matěji",
  vojtěch: "vojtěchu",
  štěpán: "štěpáne",
  radek: "radku",
  vašek: "vašku",
  mírek: "mírku",
  zdeněk: "zdeňku",
  josef: "josefe",
  jaroslav: "jaroslave",
  miroslav: "miroslave",
  jaromír: "jaromíre",
  milan: "milane",
  roman: "romane",
  robert: "roberte",
  patrik: "patriku",
  václav: "václave",
  antonín: "antoníne",
  františek: "františku",
  ladislav: "ladislave",
  vladimír: "vladimíre",
  aleš: "aleši",
  libor: "libore",
  oldřich: "oldřichu",
  kamil: "kamile",
  richard: "richarde",
  viktor: "viktore",
  šimon: "šimone",
  kryštof: "kryštofe",
  otakar: "otakare",
  igor: "igore",
  ivan: "ivane",
  luboš: "luboši",
  miloš: "miloši",
  radim: "radime",
  bohuslav: "bohuslave",
  přemysl: "přemysle",
  denis: "denisi",
  marcel: "marceli",
  emil: "emile",
  vít: "víte",
  tobiáš: "tobiáši",
  sebastian: "sebastiane",
  radovan: "radovane",
};

function capitalizeFirst(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function czechVocative(name: string | null | undefined): string {
  if (!name) return "";
  const trimmed = name.trim();
  if (!trimmed) return "";
  // jen křestní jméno (první slovo)
  const word = trimmed.split(/\s+/)[0];
  const lower = word.toLowerCase();

  // 1) slovník mužských jmen (zachovej velké první písmeno)
  const dict = MALE_VOCATIVE[lower];
  if (dict) return capitalizeFirst(dict);

  // 2) -a → -o (Jana→Jano, Lucka→Lucko, Ondra→Ondro, Anna→Anno)
  if (lower.endsWith("a")) {
    const suffix = word.slice(-1) === "A" ? "O" : "o";
    return word.slice(0, -1) + suffix;
  }

  // 3) ostatní → nominativ (bezpečně)
  return word;
}
