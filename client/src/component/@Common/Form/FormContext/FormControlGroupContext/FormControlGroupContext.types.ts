export interface FormControlGroupContextValue {
  addControl: (name: string) => void;
  removeControl: (name: string) => void;
  onErrorChange: (name: string, error: string | boolean) => void;
}
