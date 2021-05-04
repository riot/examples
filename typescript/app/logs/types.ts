export interface Log {
  text: string;
}

export interface LogComponentProps {
  logs: Log[];
  onclear: () => void
}
