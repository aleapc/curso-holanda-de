// Texto de exibição das fases — na língua do COMPRADOR (nl).
// Dado, não lógica: gerado a partir da tabela i18n do reposicionamento.
// Ver jornada.ts para a estrutura universal (slot → fase).
import type { FaseId } from './jornada';

export const FASE_LABEL: Record<FaseId, { emoji: string; nome: string; descricao: string }> = {
  chegada: { emoji: '🛬', nome: "Aankomst", descricao: "Uw eerste 24 uur — van het vliegtuig tot u zich thuis voelt." },
  diaadia: { emoji: '☀️', nome: "Dagelijks leven", descricao: "Eten, winkelen, je verplaatsen en dingen regelen — als iemand die dit al kent." },
  integrando: { emoji: '🌙', nome: "Erbij horen", descricao: "Geen verdwaalde toerist — iemand die gekomen is om te blijven." }
};

export const FASE_COR: Record<FaseId, string> = {
  chegada: 'terracota',
  diaadia: 'salvia',
  integrando: 'oceano'
};

export const PROMESSA = {
  headline: "De taal van uw reis, in de volgorde waarin u ze echt nodig heeft.",
  subhead: "Van de balie op de luchthaven tot de laatste toost van de avond.",
  provaLabel: "Een feit dat deze cursus echt leert:"
};
