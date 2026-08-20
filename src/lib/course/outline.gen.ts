import type { ModuloOutline } from '../types';

// ┌──────────────────────────────────────────────────────────────────────────┐
// │  ARQUIVO GERADO — não edite à mão.                                       │
// │  Fonte: os ep-*.json (título) + slots.json (ordem e módulo).             │
// │  Regenerar: npm run outline   ·   Conferir: npm run outline:conferir     │
// │                                                                          │
// │  O título vivia aqui E no episódio. Duas canônicas para a mesma string   │
// │  é o defeito que fez duas partes reescritas aparecerem na tela com o     │
// │  título antigo e duas partes novas não aparecerem. Agora deriva.         │
// └──────────────────────────────────────────────────────────────────────────┘

export const outline: ModuloOutline[] = [
  {
    nivel: 'basico',
    nome: 'Basic · Get by',
    descricao: 'The German that gets the day done: arriving, ordering, paying, moving, and getting help.',
    cor: 'terracota',
    licoes: [
      { id: 'b01', titulo: 'De klanken zijn al van u — vijf letters krijgen ander werk', pronta: true },
      { id: 'b02', titulo: 'Groet bij binnenkomst, en negen andere woorden', pronta: true },
      { id: 'b03', titulo: 'Entschuldigung, en dan wat u nodig hebt', pronta: true },
      { id: 'b04', titulo: 'Vijf beslissingen die uw eigen keukentafel nog mag nemen', pronta: true },
      { id: 'b05', titulo: 'Drie vragen, en u hebt alle drie antwoorden al', pronta: true },
      { id: 'b06', titulo: 'Haben Sie — en dan wat het eerste uur maar nodig heeft', pronta: true },
      { id: 'b07', titulo: 'Können Sie — de rit naar de stad, gevraagd in vier woorden', pronta: true },
      { id: 'b08', titulo: 'Wo ist — en het antwoord dat u in uw hoofd meedraagt', pronta: true },
      { id: 'b09', titulo: 'De stempel die papier in een ticket verandert', pronta: true },
      { id: 'b10', titulo: 'Zeg de tweede letter, en het bord leest zichzelf', pronta: true },
      { id: 'b11', titulo: 'Ich möchte — en de eerste ronde komt binnen', pronta: true },
      { id: 'b12', titulo: 'Ohne — het kleine woord dat het bord van u maakt', pronta: true },
      { id: 'b13', titulo: 'Ich habe eine Allergie — vóór de bestelling, niet na het bord', pronta: true },
      { id: 'b14', titulo: 'Zahlen, bitte — en het bedrag op de kaart is wat u betaalt', pronta: true },
      { id: 'b15', titulo: 'Was kostet das? — de drie woorden die alles op het schap prijzen', pronta: true },
      { id: 'b16', titulo: 'Haben Sie — de minuut aan de balie die de kamer opwaardeert', pronta: true },
      { id: 'b17', titulo: 'Apotheke — de balie die het oplost voor er een dokter aan te pas moet', pronta: true },
      { id: 'b18', titulo: 'Der letzte Morgen — was kostet, de tassen, en het afscheid dat u terug laat vragen', pronta: true },
    ]
  },
  {
    nivel: 'intermediario',
    nome: 'Intermediate · Get the good stuff',
    descricao: 'Eat where they eat, when they eat, at the price they pay.',
    cor: 'oliva',
    licoes: [
      { id: 'i01', titulo: 'Wann ist — de vraag die u hun rooster overhandigt', pronta: true },
      { id: 'i02', titulo: 'Moin, Grüß Gott, Hallo — en dan uw beurt aan de toonbank', pronta: true },
      { id: 'i03', titulo: 'Was empfehlen Sie — en het bord dat u niet ging bestellen', pronta: true },
      { id: 'i04', titulo: 'Die Runde — één tafel, één ronde, één woord voor de rekening', pronta: true },
      { id: 'i05', titulo: 'De vijf vragen, en de twee zinnen die een zesde afsluiten', pronta: true },
      { id: 'i06', titulo: 'Ich war, ich hatte — en acht klare blokken voor al het andere', pronta: true },
      { id: 'i07', titulo: 'Zeg het goede hardop, en zeg het gewone met dezelfde stem', pronta: true },
      { id: 'i08', titulo: 'Uitgenodigd: wat u de deur binnenbrengt, en wanneer u opstaat', pronta: true },
      { id: 'i09', titulo: 'Marktochtend, de statiegeldautomaat en welk feest deze week aan is', pronta: true },
      { id: 'i10', titulo: 'Geld hier: het etiket is de hele prijs', pronta: true },
    ]
  },
  {
    nivel: 'avancado',
    nome: 'Advanced · Read the room',
    descricao: 'The humour, the pride, the old argument, and what their silence means.',
    cor: 'indigo',
    licoes: [
      { id: 'a01', titulo: 'Hoe ze praten als het niet tegen u is', pronta: true },
      { id: 'a02', titulo: 'Waar ze om lachen, en de grap die van u is', pronta: true },
      { id: 'a03', titulo: 'Wie ze denken dat ze zijn', pronta: true },
      { id: 'a04', titulo: 'Het oude debat', pronta: true },
      { id: 'a05', titulo: 'De andere taal, en de hallo die met de kaart meebeweegt', pronta: true },
      { id: 'a06', titulo: '3 oktober, en vijftien andere kalenders', pronta: true },
      { id: 'a07', titulo: 'Het aanbod dat u nooit doet, en alleen hoeft aan te nemen', pronta: true },
      { id: 'a08', titulo: 'De laatste ochtend, en tien openers die in een broekzak passen', pronta: true },
    ]
  },
];

// Gerado de static/img/ — a home só pede imagem que existe.
export const COM_IMAGEM = new Set(["a01","a02","a03","a04","a05","a06","a07","a08","b01","b02","b03","b04","b05","b06","b07","b08","b09","b10","b11","b12","b13","b14","b15","b16","b17","b18","i01","i02","i03","i04","i05","i06","i07","i08","i09","i10"]);
