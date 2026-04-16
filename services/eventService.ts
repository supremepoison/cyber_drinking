import { PlayerStats, InventoryItem, GameEvent } from "../types";
import { STORY_TREE } from "../storyData";
import { TRANSLATIONS, COVER_IMAGE_URL } from "../constants";

// Local narrative event lookup service.
export const generateEvent = async (
  _stats: PlayerStats,
  turn: number,
  _scenarioContext: string,
  _history: string[],
  inventory: InventoryItem[],
  lang: 'en' | 'zh',
  _stageName: string,
  eventId: string = 's1_t1_start'
): Promise<GameEvent> => {
  const eventNode = STORY_TREE[eventId];

  if (eventNode) {
    const rawEvent = lang === 'zh' ? eventNode.zh : eventNode.en;
    const filteredChoices = rawEvent.choices.filter(choice => {
      return !choice.itemUsed || inventory.some(i => i.id === choice.itemUsed && i.quantity > 0);
    });

    return {
      ...rawEvent,
      choices: filteredChoices
    };
  }

  const t = TRANSLATIONS[lang];
  return {
    id: 'error',
    turn,
    title: t.fallbackError,
    description: "System Error: Narrative node not found.",
    backgroundImage: COVER_IMAGE_URL,
    choices: [
      {
        text: t.fallbackChoice1,
        outcomeNarrative: t.fallbackOutcome1,
        statChanges: {},
        nextEventId: 's1_t1_start'
      }
    ]
  };
};
