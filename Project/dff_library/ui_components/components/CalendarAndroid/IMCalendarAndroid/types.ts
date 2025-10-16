export interface CalendarEventItem {
  date: string;
  drawable: string;
  text: string;
}

export interface IMCalendarProps {
  data: CalendarEventItem[];
  dateChangeFunction?: (prop: any) => void;
  monthChangeFunction?: (prop: any) => void;
}
