export const SelectorPageData = [
  {
    question: 'What are you feeling?',
    field: 'mood',
    emojis: new Map([
      ['🥳', 'thai|chinese|burger'],
      ['🥰', 'french|italian|dessert|bakery|steak_house'],
      ['😭', 'japanese|korean|thai|fast_food|american|hot_pot|ramen'],
      ['😎', 'italian|american|greek|spanish|seafood'],
      ['😴', 'burger|pizza'],
      ['😡', 'mexican|indian|korean|jamaican|tex-mex'],
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