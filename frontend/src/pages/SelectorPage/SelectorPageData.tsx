export const SelectorPageData = [
  {
    question: 'What are you feeling?',
    field: 'mood',
    emojis: new Map([
      ['🥳', 'excited'],
      ['🥰', 'loved'],
      ['😭', 'sad'],
      ['😎', 'chill'],
      ['😴', 'tired'],
      ['😡', 'angry'],
    ]),
  },
  {
    question: 'How many people?',
    field: 'group',
    emojis: new Map([
      ['🧍', 'solo'],
      ['👫', 'couple'],
      ['🧍‍♀️🧍🧍‍♂️', 'group'],
    ]),
  },
  {
    question: 'What is your price range?',
    field: 'price',
    emojis: new Map([
      ['💵', '1'],
      ['💵💵', '2'],
      ['💵💵💵', '3'],
    ]),
  },
  {
    question: 'How far can you go?',
    field: 'distance',
    emojis: new Map(),
  }
];