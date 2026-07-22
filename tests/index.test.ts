import { describe, it, expect } from "vitest";
import { czechVocative } from "../src/index";

describe("czechVocative", () => {
  it("ženská jména na -a → -o", () => {
    expect(czechVocative("Jana")).toBe("Jano");
    expect(czechVocative("Simona")).toBe("Simono");
    expect(czechVocative("Lucka")).toBe("Lucko");
    expect(czechVocative("Petra")).toBe("Petro");
    expect(czechVocative("Eva")).toBe("Evo");
    expect(czechVocative("Tereza")).toBe("Terezo");
    expect(czechVocative("Kristýna")).toBe("Kristýno");
    expect(czechVocative("Anna")).toBe("Anno");
    expect(czechVocative("Andrea")).toBe("Andreo");
    expect(czechVocative("Šárka")).toBe("Šárko");
  });

  it("mužské zdrobněliny na -a → -o", () => {
    expect(czechVocative("Honza")).toBe("Honzo");
    expect(czechVocative("Ondra")).toBe("Ondro");
    expect(czechVocative("Kuba")).toBe("Kubo");
    expect(czechVocative("Pepa")).toBe("Pepo");
  });

  it("mužská jména na souhlásku ze slovníku", () => {
    expect(czechVocative("Petr")).toBe("Petře");
    expect(czechVocative("Pavel")).toBe("Pavle");
    expect(czechVocative("Tomáš")).toBe("Tomáši");
    expect(czechVocative("Marek")).toBe("Marku");
    expect(czechVocative("Jan")).toBe("Jane");
    expect(czechVocative("Martin")).toBe("Martine");
    expect(czechVocative("Jakub")).toBe("Jakube");
    expect(czechVocative("Ondřej")).toBe("Ondřeji");
    expect(czechVocative("František")).toBe("Františku");
  });

  it("nejistá jména zůstávají v 1. pádě (bezpečně)", () => {
    // ženská na -e / -ie → beze změny
    expect(czechVocative("Lucie")).toBe("Lucie");
    expect(czechVocative("Marie")).toBe("Marie");
    // -í / -o / neznámé souhláskové ženské
    expect(czechVocative("Jiří")).toBe("Jiří");
    expect(czechVocative("Ivo")).toBe("Ivo");
    expect(czechVocative("Dagmar")).toBe("Dagmar");
    expect(czechVocative("Nikol")).toBe("Nikol");
  });

  it("ošetří prázdný/neplatný vstup a bere jen první slovo", () => {
    expect(czechVocative("")).toBe("");
    expect(czechVocative(null)).toBe("");
    expect(czechVocative(undefined)).toBe("");
    expect(czechVocative("  Jana  ")).toBe("Jano");
    expect(czechVocative("Jana Nováková")).toBe("Jano");
  });
});
