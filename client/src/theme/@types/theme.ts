import { AllSizes, SizeCssVarNameInfo, SizeInfo } from './size';
import { AllScreens } from './screen';
import { AllColors } from './color';
import { copy } from '@pdg/data';

/********************************************************************************************************************
 * Theme
 * ******************************************************************************************************************/
export interface Theme {
  dark: boolean;
  sizes: Record<AllSizes, SizeInfo>;
  screens: Record<AllScreens, number>;
  colors: Record<AllColors, string>;
  css: {
    names: {
      sizes: Record<AllSizes, string>;
      screens: Record<AllScreens, string>;
      colors: Record<AllColors, string>;
    };
    vars: {
      sizes: Record<AllSizes, SizeCssVarNameInfo>;
      screens: Record<AllScreens, string>;
      colors: Record<AllColors, string>;
    };
  };
}

const cssValue = {
  screens: AllScreens.reduce(
    (acc, res) => {
      acc[res] = '';
      return acc;
    },
    {} as Record<AllScreens, string>
  ),
  sizes: AllSizes.reduce(
    (acc, size) => {
      acc[size] = { fontSize: '', lineHeight: '' };
      return acc;
    },
    {} as Record<AllSizes, SizeCssVarNameInfo>
  ),
  colors: AllColors.reduce(
    (acc, color) => {
      acc[color] = '';
      return acc;
    },
    {} as Record<AllColors, string>
  ),
};

export const Theme: Theme = {
  dark: false,
  screens: AllScreens.reduce(
    (acc, res) => {
      acc[res] = 0;
      return acc;
    },
    {} as Record<AllScreens, number>
  ),
  sizes: AllSizes.reduce(
    (acc, size) => {
      acc[size] = { fontSize: 0, lineHeight: 0 };
      return acc;
    },
    {} as Record<AllSizes, SizeInfo>
  ),
  colors: AllColors.reduce(
    (acc, color) => {
      acc[color] = '';
      return acc;
    },
    {} as Record<AllColors, string>
  ),
  css: {
    names: {
      ...copy(cssValue),
      sizes: AllSizes.reduce(
        (acc, size) => {
          acc[size] = '';
          return acc;
        },
        {} as Record<AllSizes, string>
      ),
    },
    vars: copy(cssValue),
  },
};
