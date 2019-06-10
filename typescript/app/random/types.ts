import {RiotComponentExport} from 'riot'

export interface RandomComponentProps {
  title: string;
}

export interface RandomComponent extends RiotComponentExport {
  generate(event: MouseEvent): void;
  clearLogs(): void;
  readonly props?: RandomComponentProps;
  state: {
    number: number | null;
    logs: { text: string }[];
  };
}