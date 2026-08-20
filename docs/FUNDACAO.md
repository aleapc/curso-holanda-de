# FUNDAÇÃO — curso-holanda-de (neerlandês ALVO, guia ALEMÃO, destino Países Baixos)

> Documento-fonte da Fase 1. A Fase 2 (autoria dos 36 episódios) SEGUE este arquivo.
> Em conflito, `docs/PRODUTO.md` vence sobre tudo o que estiver aqui.
>
> **O que é estruturalmente inédito neste SKU:** é a **primeira vez que o neerlandês é a
> língua-ALVO** no catálogo, e o par de-DE → nl é **o mais PRÓXIMO** que o catálogo tem
> (duas germânicas ocidentais vizinhas). Isso inverte a economia do produto: o custo do
> aluno **não** é montar a frase — é **não cair no cognato** e **pronunciar**. O que
> este documento fixa vira o molde que as outras 35 partes replicam.

Papéis (de `audio.config.json`, NÃO editar):
- **Guia (comprador) = ALEMÃO** — `guide_de_f` (Juli, educadora) / `guide_de_m` (Thomas, avisos).
- **Alvo (ensinado) = NEERLANDÊS** — `target_nl_f` (Noa) / `target_nl_m` (Wim).
- **INV-5 / G14:** a guia alemã NUNCA fala neerlandês; a nativa neerlandesa NUNCA fala alemão.
  Como as duas línguas são muito próximas, este é **o par de maior risco de vazamento** do
  catálogo — o G14 recebeu uma entrada `nl` na tabela MARCAS de propósito.

---

## (a) OS FATOS-DIFERENCIAL DOS PAÍSES BAIXOS (com fonte)

Regra de dono de slot: os fatos são **dono=destino** e se reusam em TODOS os compradores
dos Países Baixos (nl→NL, en→NL, etc.). A **redação** aqui é em alemão porque a guia deste
SKU é alemã, mas o FATO é do destino. Cada fato traz fonte, ano e ressalva; nenhum número
sem cheque vai ao áudio (PRODUTO §5.3). Datar em `fatosDatados[]` com `revisarAte` (G13).

### FATO Nº1 — PINNEN / cartão de crédito recusado  *(o mais forte pro alemão)*
- **O quê:** ~80% dos pagamentos no balcão são cartão, quase tudo **débito** (pinnen);
  **<0,5%** é crédito. Muitos lugares — destaque o **Albert Heijn**, o maior supermercado —
  **não aceitam Visa/Mastercard de CRÉDITO**; o **débito** (Maestro / V Pay / Visa Debit)
  costuma passar. Crédito estrangeiro é recusado com frequência, **sobretudo em
  autoatendimento** (caixas self-checkout, máquinas).
- **Regra de bolso (a peça de produto):** leve **cartão de DÉBITO + algum dinheiro**, nunca
  dependa só do crédito.
- **Por que é o nº1 pro alemão, e não um fato médio:** o comprador alemão presume "cartão é
  cartão" (a girocard dele é onipresente) e chega esperando que o crédito funcione. É onde a
  expectativa dele mais colide com a realidade local.
- **Fonte:** Betaalvereniging Nederland / De Nederlandsche Bank (DNB), *Factsheet
  Toonbankbetalingen 2024*; DNB, *Point of sale payments 2024*.
- **RESSALVA (obrigatória no áudio):** a aceitação de crédito **melhora ano a ano** →
  "não conte com isso", **nunca** "nunca aceitam". Números (~80% / <0,5%) são agregados
  arredondados, não citações literais. O caso Albert Heijn é prática amplamente relatada,
  não declaração institucional da rede.
- **Léxico que o aluno precisa reconhecer:** `pinnen` (pagar no débito) · `contant`
  (dinheiro) · `pinautomaat` (caixa eletrônico) · `alleen pinnen`/`pin only` (só débito,
  muitas vezes sem dinheiro). **Já ancorado em B06** (ver §c e `ep-b06.json`).

### FATO — FIETSPAD / prioridade absoluta do ciclista
- **O quê:** na **ciclovia (fietspad)** o **ciclista manda**. O pedestre que anda, para ou
  atravessa na ciclovia está no **lugar mais perigoso da cidade**. Trate a fietspad **como
  faixa de carro**: olhe, não pare em cima dela, não a use de calçada.
- **Fonte:** Holland2Stay / Holland-Cycling, guias 2024/25.
- **RESSALVA:** o **valor da multa varia** por fonte — **não ancore no número**, ancore na
  **norma** (a ciclovia é via, não calçada). Casa natural: parte de circular/ler o lugar
  (B08/B10) e a cápsula cultural de "fazer o que eles fazem".

### FATO — INGLÊS Nº1 do mundo + dinâmica DE↔NL  *(âNGULO DE PRODUTO SENSÍVEL)*
- **O quê:** os Países Baixos são **nº1 mundial em inglês** (EF EPI 2024: 636 pts, 1º de 113
  países, 6º ano seguido). O neerlandês **troca rápido pro inglês** ao menor sinal de
  dificuldade. **~71% falam alemão** (ordem de grandeza, não censo), e a compreensão é
  **assimétrica**: o neerlandês entende alemão mais do que o contrário.
- **ÂNGULO SENSÍVEL (tratar com cuidado, sem virar aula de história):** há **crédito social
  real em TENTAR o neerlandês** (`dank je wel`, `alstublieft`). Começar **em ALEMÃO de cara**
  com um estranho pode soar como pressuposto ("Países Baixos = extensão da Alemanha", tema
  historicamente delicado). **A aposta segura é abrir em inglês ou neerlandês**, não em
  alemão. Isto entra como **permissão/leitura de sala**, nunca como lição de história nem
  como acusação ao comprador.
- **Fonte:** EF EPI 2024; estimativas de proficiência em alemão (ordem de grandeza).
- **Consequência de produto:** o molde social de reparo (`ENTSCHULDIGUNG` → «Sorry/Pardon»)
  abre com uma palavra **neutra** (Sorry) + inglês/neerlandês, não com alemão. Ver §c.

### FATO — GORJETA (fooi)
- **O quê:** o serviço **já está incluído por lei** ("inclusief service"). A `fooi` é
  **opcional**: arredondar ou ~**5–10%** já é generoso. Ao pagar **no PIN**, diz-se o valor
  **TOTAL em voz alta** (você informa a quantia que quer que passe).
- **Diferencial MÉDIO pro alemão** (ele também arredonda) — entra como nota, não como âncora.
- **Fonte:** normas de consumo NL. Casa: I10 (o dinheiro sem drama).

### FATO — TIKKIE / rachar a conta
- **O quê:** rachar ("go Dutch") é **valor cultural**, sem constrangimento. O app **Tikkie**
  (cobrança via WhatsApp) é **onipresente**: pagaram por você → te mandam um Tikkie.
- **O NOVO pro alemão é o Tikkie** (a franqueza de rachar já lhe é familiar). Entra em I04
  (a noite) / I10.
- **Fonte:** uso de mercado NL (Tikkie/ABN AMRO). RESSALVA: penetração é uso corrente, não
  número citado.

### FATO — 112 e apotheek ≠ drogist
- **O quê:** emergência **112** (**só CHAMADA de voz, sem SMS**). **apotheek** = farmácia
  **com receita**; **drogist** (Kruidvat/Etos) = **só sem receita**. **Receita da UE
  (inclusive alemã) é válida.**
- **Diferencial MÉDIO pro alemão** (a distinção Apotheke/Drogerie existe na Alemanha). Casa:
  B17 (farmácia, dor, emergência) — a única parte declaradamente defensiva de M1.
- **Fonte:** normas de saúde/emergência NL/UE.

### NÃO-fato (registrado para não voltar)
- **"Jantar cedo" NÃO é fato-âncora.** A pesquisa mostrou que é **FRACO** pro alemão — ele
  também janta cedo. No máximo uma **nota leve** em I01 (o relógio deles); a `curso.config`
  já carrega o ritmo (lunch frio/leve, borrel, avondeten ~18h) como PROVISÓRIO, a revisar.

---

## (b) A FONÉTICA DO PAR alemão → neerlandês

> É o par mais **PRÓXIMO** do catálogo. O erro nº1 do comprador alemão **NÃO é articulatório
> nem gramatical**: é a **ARMADILHA DO COGNATO** (falso amigo). A estrutura da frase é quase
> a mesma; o custo migra de MONTAR A FRASE para **NÃO CAIR NO COGNATO** e **PRONUNCIAR**.

### 1) O erro nº1 — FALSOS AMIGOS de alta frequência (o ouro deste par)
Tudo PARECE igual, e é por isso que o alemão lê/ouve uma palavra parecida e assume o sentido
alemão. Os de alta frequência:

| neerlandês | significa | o alemão lê como (ERRADO) |
|---|---|---|
| **bellen** | telefonar | bellen = latir |
| **mogen / mag** | poder, ter licença | mögen = gostar |
| **eng** | assustador | eng = estreito |
| **brutaal** | atrevido, insolente | brutal |
| **aardig** | simpático | artig = comportado |
| **meer** | lago **e** mais | (das) Meer = mar |
| **slim** | esperto | slim = magro |

- **A GAG RECORRENTE DO SKU (o equivalente ao `vino`×`fino` do alemão-espanhol) = «mag».**
  Escolhida porque **monta em cima do molde de pedido que o aluno mais usa** («Mag ik ___?»,
  molde `ICH-MOCHTE`, casa B11): toda vez que ele pede, a gag recorre por construção. E é
  **falsificável no balcão de um jeito indolor**: ele pede «Mag ik een koffie?» achando que
  disse "eu gosto de um café" e **recebe o café mesmo assim** — o mal-entendido é
  **invisível**, o que faz a comédia (o mundo responde a uma coisa, ele acha que disse
  outra). **Já plantada em B06** como ficha cultural, paga em B11.
- **Gancho cômico secundário (memorável, não estrutural) = «bellen»** (telefonar, não latir).
  Bom para uma batida de humor receptivo em A02, sem ser produzido.

### 2) O 2º custo — PRONÚNCIA (o que o alemão não tem)
Vira **drill de shadow/gesto em B01** (PRODUTO §3.4 / dono=par), **não** molde:
- **⟨g⟩ / ⟨ch⟩** = fricativa dura **[x]/[ɣ]**, mais gutural que a alemã. **Scheveningen** é o
  xibolete. (Respelling: "ch" como em *Bach*.)
- **⟨ui⟩** = ditongo **[œy]** que o alemão **não tem** (`huis`, `ui`). (Respelling: "öü".)
- **⟨ij⟩ / ⟨ei⟩** = **[ɛi]** (`mij`, `wij`, `trein`). (Respelling: "äi".)
- **⟨eu⟩** = **[ø]** (`euro`, `deur`). (Respelling: "öö".)
- **diminutivo ⟨-tje⟩** (`kaartje`, `biertje`) — onipresente no balcão.
- Apoio: **⟨oe⟩ = [u]** ("uu"), **⟨u⟩ = [y]** ("ü"), **⟨aa/ee⟩** longas.

### 3) O que é BRINDE (dizer claramente ao aluno)
- **Quase toda a estrutura de frase e a ordem de palavras** (V2, verbo no fim na
  subordinada) — **igual ao alemão do próprio comprador**. Não é custo; é presente.
- **Estoque enorme de cognatos VERDADEIROS:** water/Wasser, brood/Brot, bier/Bier,
  huis/Haus, koffie/Kaffee, melk/Milch, station/Station, `geen`≈kein, `niet`≈nicht.
- **O artigo indefinido «een» é INVARIÁVEL** entre os dois gêneros (de-woord/het-woord), e
  **não há CASO** — o encaixe entra na **forma de dicionário**. O comprador alemão, que no
  espelho tinha de escolher der/den/ein/einen, aqui **não escolhe nada**.
- **Resultado:** o custo do aluno migra de MONTAR A FRASE para **NÃO CAIR NO COGNATO** e
  **PRONUNCIAR**. É onde o produto gasta o orçamento do aluno.

---

## (c) O ROSTER DE MOLDES re-derivado (de-DE → nl, survival Dutch)

Fonte de verdade: `src/lib/course/moldes.json` (já autorado nesta Fase 1). Abaixo, o resumo
com forma, casa, redisparos e nota. **Ordem canônica** dos redisparos: sempre DEPOIS da casa
na ordem B01…B18 → I01…I10 → A01…A08 (G9d).

- **Termo canônico do molde na voz-guia alemã = «Baustein»** (fixado em
  `_regras.vocabulario_molde.termo`; o G15 confere que a CASA nomeia a peça com esse termo,
  invariável). Escolhido por **consistência de catálogo** com o outro SKU de comprador alemão
  (curso-espanha-de, que já usa «Baustein» — o comprador que leva dois destinos reencontra a
  mesma palavra de método) e por casar com a metáfora Lego do produto. É o cognato direto do
  «bouwsteen» que o curso-espelho usa. *(O pedido sugeria «die Formel»/«das Muster» — ver
  Perguntas em aberto.)*

### Restrição e presente do destino (o que estrutura o roster)
- **NÃO há caso** e **«een» é invariável** → o encaixe entra na **forma de dicionário**,
  **nunca pré-flexionado** (o oposto exato do espelho alemão, onde o encaixe entrava em
  acusativo). Único resíduo: o gênero DEFINIDO de/het, que **entra grudado ao artigo como
  bloco** (het toilet, de uitgang), e que o indefinido «een» esconde na maioria dos pedidos.
- **V2 e verbo no fim** chegam prontos da língua do comprador — **brinde, não custo**.
- **T/V (je/u):** recusado (8ª vez no catálogo). Usa-se **«u»** sempre; a passagem a «je» é
  reconhecida, nunca produzida.

### Os moldes (8 operacionais + 2 sociais = 10)

| id (chave) | forma (nl) | categoria | casa | redisparos | nota curta |
|---|---|---|---|---|---|
| `HABEN-SIE` | **Heeft u [ding]?** | operacional | **B06** | B08, B11, B12, B15, B16, I03 | o de maior alcance; «u» embutido; encaixe na forma de dicionário |
| `WO-IST` | **Waar is [de plek]?** | operacional | B08 | B09, B10, B17 | move os pés; boca = placa |
| `ICH-MOCHTE` | **Mag ik [ding]?** | operacional | B11 | B14, B15, I01, I04 | pedir/pagar; **CASA da gag «mag»** (ver §b) |
| `KONNEN-SIE` | **Kunt u [actie]?** | operacional | B07 | B09, B13, B17, I02 | socorro; buraco em infinitivo → verbo já no fim |
| `OHNE` | **Zonder [ding]** | operacional | B12 | B13, B16, I04 | segurança alimentar; «geen ___»≈kein |
| `ICH-SUCHE` | **Ik zoek [ding]** | operacional | B10 | B16, B17, I09 | abre a busca; 1ª busca real = «een pinautomaat» |
| `WAS-KOSTET` | **Hoeveel kost [ding]?** | operacional | B15 | B18, I10 | tiles SINGULARES (kost concorda com número) |
| `ENTSCHULDIGUNG` | **Sorry / Pardon, + [pedido]** | social | B03 | B05, B07, B08, I02 | abridor de reparo neutro; **não abrir em alemão** (§a) |
| `WANN-IST` | **Hoe laat is [het ding]?** | operacional | I01 ⚠ | I03, I07 | planejar; **PENDÊNCIA §5.1 — ver abaixo** |
| `DANKE` | **Dank je / Dank u wel / Bedankt** | social | B02 | B11, B14, B18, I07 | FECHADO; «dank u wel» compra simpatia (§a) |

**Formas naturais de balcão adotadas** (e as variantes reconhecidas mas NÃO produzidas):
HAVE «Heeft u ___?» (inf. «Heb je ___?») · GET/REQUEST «Mag ik ___?» (var. «Doe mij maar
___», «Een ___, alstublieft») · WHERE «Waar is ___?» · HOW-MUCH «Hoeveel kost ___?» (var.
«Wat kost ___?») · WITHOUT «Zonder ___» (neg. «Geen ___») · CAN-YOU «Kunt u ___?».

### ⚠ Pendência de §5.1 no roster (herdada do espelho — decisão para o dono)
`WANN-IST` é **operacional** com casa em **I01 (M2)**, o que **contraria a LEI do §5.1**
("operacional SÓ nasce em M1"). Foi **mantido em I01** para não quebrar o build (o andaime da
Fase 2 declara `WANN-IST` em `ep-i01.json`; mover a casa agora acusaria o slot novo em M1 sem
ele e furaria o G9b). **Recomendação:** a Fase 2 relocaliza a casa para um slot de M1 —
candidato natural **B09** («Hoe laat is de volgende trein?», bilhete/transporte). Registrado
também em `moldes.json`.

---

## A MARCA DO PRODUTO (o "¡Dime!"/"Sumimasen!" deste SKU) — proposta

- **Proposta principal: «Zeg het maar!»** (formal «Zegt u het maar») — literalmente "pode
  dizer / manda". É **o que o vendedor diz convidando você a pedir**, exatamente o papel do
  `¡Dime!` espanhol. Vira a assinatura receptiva do SKU: o aluno aprende a **reconhecer** o
  convite e a responder com um molde.
- **Runner-up: «Alstublieft!»** — a palavra-canivete do balcão (por favor / aqui está), que
  o comprador vai ouvir e dizer o dia inteiro; boa como marca **produtiva** se o dono
  preferir uma palavra que o aluno FALA em vez de RECONHECE.
- Recomendo `Zeg het maar!` como marca e `alstublieft` como o par de cortesia que fica ao
  lado do `DANKE` (é a decisão registrada na nota do molde `DANKE`).

---

## DECISÕES DE TOM/PADRÃO QUE FIXAM A FASE 2

1. **A economia inverte:** o produto gasta o orçamento do aluno em **falso amigo** +
   **pronúncia**, não em morfologia. Toda parte `dono=par` (B01, B08, B10, B12, I06, I07,
   A01, A05) deve tratar cognato/pronúncia; toda parte de molde entrega o encaixe **na forma
   de dicionário** (nunca pré-flexionado — é o erro que este par NÃO tem).
2. **Nunca abrir em alemão com estranho** (§a): o reparo social abre com «Sorry/Pardon» +
   inglês/neerlandês; tentar neerlandês compra simpatia. Isso é **permissão e leitura de
   sala**, jamais lição de história ou culpa ao comprador.
3. **PINNEN é o fato nº1 e nasce em B06** (a 1ª hora / primeiro balcão), datado e com
   ressalva "melhora ano a ano". O léxico pinnen/contant/pinautomaat é receptivo.
4. **A gag «mag»** recorre por construção (molde de pedido) e é falsificável no balcão —
   plantada em B06, paga em B11. Sem jargão gramatical falado (kill-switch §5.1).
5. **Respelling** (`pinyin`) é do neerlandês **para o olho do leitor alemão**, reflete o que
   se ouve e **nunca vai ao TTS** (o campo `tts` carrega o neerlandês real). Convenções em §b.
6. **Termo do método = «Baustein»**, invariável em todo o SKU (G15).
7. **INV-5 é o risco #1 deste par:** por proximidade, é fácil a guia alemã escorregar pro
   neerlandês. Toda narração-guia passa pelo G14 (entrada `nl` na tabela MARCAS).

---

## VALIDAÇÃO (estado ao fim da Fase 1)

- `node scripts/valida-esqueleto.mjs` → **✓ verde** (sku do roster corrigido para
  "de → Nederland (Holanda)").
- `node scripts/valida-estrutura.mjs` → **✓ verde** (36 partes conformes ao contrato).
- `node scripts/valida-tom.mjs` → **9 erros, TODOS esperados**: `G15` em b02, b03, b07, b08,
  b10, b11, b12, b15, i01 — as CASAS espelho ainda em narração-guia **neerlandesa** que não
  nomeiam o termo alemão «Baustein». **Some sozinho quando a Fase 2 reescrever cada parte em
  alemão.** **B06 e moldes.json não introduzem NENHUM erro próprio** (0 erros, 0 avisos em
  B06; G9 65% geração; G14 0 divergências; G4 113 chars/clipe em B06; G13 datas válidas).
- Áudio **não** gerado (instrução).

---

## PERGUNTAS EM ABERTO (para o dono)

1. **Termo do método:** escolhi **«Baustein»** (consistência com curso-espanha-de + metáfora
   Lego). O pedido sugeria «die Formel»/«das Muster». Se o dono preferir uma delas, é troca de
   uma string em `moldes.json._regras.vocabulario_molde.termo` + o nome da peça na narração de
   B06 (e das demais casas na Fase 2).
2. **Chaves de molde (ids):** **mantive os ids do espelho** (`HABEN-SIE`, `WO-IST`, …) como
   chaves estáveis para o andaime das 35 partes continuar apontando para o roster e o build
   não explodir agora; o **conteúdo** (forma, encaixe, exemplos, notas) está 100% re-derivado
   para o neerlandês. **Alternativa:** renomear os ids para o neerlandês (`HEEFT-U`, `WAAR-IS`,
   …) agora — mas isso só faz sentido **junto** com a reescrita das 35 partes na Fase 2 (senão
   gera ~40 erros transitórios de referência). Recomendo renomear **na Fase 2**, como migração
   atômica. Decisão do dono.
3. **§5.1 / WANN-IST em I01:** manter (build verde, herdado) ou relocalizar a casa para B09
   já na Fase 1? Recomendo relocalizar na Fase 2 (ver acima).
4. **Marca do SKU:** «Zeg het maar!» (receptiva, análoga ao ¡Dime!) vs «Alstublieft!»
   (produtiva). Proposta: a primeira.
