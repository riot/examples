export interface RandomComponentState {
  number: number | null;
  logs: { text: string }[];
}

export interface RandomComponentProps {
  title: string;
}
