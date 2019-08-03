import {RiotComponentExport} from 'riot'

export interface RandomComponentState {
  number: number | null;
  logs: { text: string }[];
}

export interface RandomComponentProps {
  title: string;
}

export interface RandomComponent extends RiotComponentExport<RandomComponentProps, RandomComponentState> {
  generate(event: MouseEvent): void;
  clearLogs(): void;
  state: RandomComponentState;
}