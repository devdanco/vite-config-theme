import { createTheme, customTheme, mergeThemeOverrides } from '@mononxtest/ui-lib';

const ownTheme = createTheme({
  primaryColor: 'cyan',
  spacing: {
    xs: 'calc(2rem * var(--mantine-scale))',
    sm: 'calc(4rem * var(--mantine-scale))',
    md: 'calc(6rem * var(--mantine-scale))',
    lg: 'calc(8rem * var(--mantine-scale))',
    xl: 'calc(10rem * var(--mantine-scale))',
  },
});

export const theme = mergeThemeOverrides(customTheme, ownTheme);
