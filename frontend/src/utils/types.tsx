export interface SelectorPageProps {
    question: string;
    emojis: Map<string, () => void>;
    prevPage: string;
}