import { AllSizes } from '@theme';

export type ChipVariant = 'contained' | 'outlined';

export interface ChipProps extends Omit<StackProps, 'children' | 'label' | 'fontSize'> {
  variant?: ChipVariant;
  label: ReactNode;
  size?: AllSizes;
  fontSize?: number;
  onRemoveClick?: () => void;
}
