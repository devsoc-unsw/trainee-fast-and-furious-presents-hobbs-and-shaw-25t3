export interface StageProps {
  question: string;
  field: string;
  emojis: Map<string, string>;
  to: string;
}

export interface SelectorPageProps {
  stage: StageProps;
  handleStageChange: (arg0: string) => void;
}
