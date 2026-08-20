// A CONFIG DE CURSO — o que muda entre SKUs mora AQUI e só aqui.

export const curso = {
  /**
   * Identidade do SKU, e ela NÃO é cosmética: é o namespace de localStorage.
   * Todos os cursos servem de aleapc.github.io/<curso>/, e localStorage é por
   * ORIGEM, não por caminho — sem isto, os cursos leem e sobrescrevem o
   * progresso uns dos outros.
   */
  sku: 'curso-holanda-de',
  /** Idioma do comprador (a voz-guia). Alemão — o turista alemão nos Países Baixos. */
  buyerLang: 'de',
  /** Idioma do destino (a fala nativa ensinada). Neerlandês — NOVIDADE: 1ª vez
   * que o neerlandês é língua-ALVO no catálogo. */
  targetLang: 'nl',
  /** Par para o link do Google Tradutor: sl = comprador, tl = destino. */
  translatorPair: { sl: 'de', tl: 'nl' },
  /** Moeda do destino. */
  destCurrency: 'EUR',
  /**
   * Vazio DE PROPÓSITO: o comprador alemão usa euro e o destino também.
   * Não há conversão a fazer, e o /bolso mostra a nota «mesma moeda» em vez de
   * um conversor inútil. O item de dinheiro nº 1 desta coluna NÃO é câmbio — é o
   * PINNEN: muitos lugares nos Países Baixos só aceitam débito/PIN e recusam
   * cartão de crédito estrangeiro (e às vezes dinheiro). Isso é FATO cultural
   * das fichas, não conversão de moeda.
   */
  homeCurrencies: [] as string[],
  timeZone: 'Europe/Amsterdam',
  cidadeExibicao: 'Amsterdam',
  /**
   * Faixas do dia para a tela "NOW", narradas em ALEMÃO (voz-guia), sobre o
   * ritmo HOLANDÊS — e ele tem duas diferenças reais que pegam o alemão: o
   * almoço holandês é FRIO e leve (broodje/boterham), não a refeição quente
   * principal como o Mittagessen; e o avondeten (jantar) é CEDO, por volta das
   * 18h. Entre os dois entra a "borrel". PROVISÓRIO: horários amplamente
   * documentados para os Países Baixos urbanos, não fatos com fonte específica
   * como as fichasCulturais. Revisar antes de tratar como padrão definitivo.
   */
  faixasNow: [
    { de: 0, linha: 'Die Küchen sind zu, aber ein Nachtsnackbar oder ein FEBO-Automat hat immer noch etwas Warmes.' },
    { de: 5 * 60, linha: 'Noch fast nichts offen. Die ersten Cafés und Bäckereien machen gegen sechs auf.' },
    { de: 7 * 60, linha: 'Ontbijt: Brot mit Käse oder hagelslag, dazu ein Kaffee. In den Niederlanden frühstückt man früh.' },
    { de: 9 * 60 + 30, linha: 'Ruhiger Vormittag. Cafés servieren Kaffee mit Gebäck — du bist früh dran, nicht spät.' },
    { de: 11 * 60 + 30, linha: 'Der Lunch beginnt. Achtung: er ist hier KALT und leicht — ein belegtes Brötchen, keine warme Hauptmahlzeit.' },
    { de: 12 * 60, linha: 'Lunchtime: broodjes und boterhammen, schnell und kalt. Die warme Mahlzeit kommt erst am Abend.' },
    { de: 14 * 60, linha: 'Der Lunch klingt aus. Cafés bleiben für einen Kaffee und ein Stück Kuchen offen.' },
    { de: 16 * 60, linha: 'Die ruhige Lücke vor dem Abend. Ein Kaffee oder ein früher Borrel überbrücken die Zeit.' },
    { de: 17 * 60, linha: 'Borrel: Drinks und bitterballen am frühen Abend — so fängt der Feierabend an.' },
    { de: 18 * 60, linha: 'Avondeten: hier isst man FRÜH zu Abend. Um diese Zeit sind die Restaurants schon gut besetzt.' },
    { de: 21 * 60, linha: 'Das Abendessen klingt aus. Viele Küchen schließen früher, als du denkst — frag nach der Küchenzeit.' },
    { de: 22 * 60 + 30, linha: 'Spät. Ein snackbar oder eine Pommesbude hat noch offen, aber viele Küchen haben schon zu.' }
  ] as { de: number; linha: string }[]
} as const;

export type CursoConfig = typeof curso;
