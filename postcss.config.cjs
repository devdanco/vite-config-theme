module.exports = {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '36em',
        'mantine-breakpoint-sm': '48em',
        'mantine-breakpoint-md': '62em',
        'mantine-breakpoint-lg': '75em',
        'mantine-breakpoint-xl': '88em',
        'mantine-spacing-xs': '0.75rem',
        'mantine-spacing-sm': '1rem',
        'mantine-spacing-md': '1.5rem',
        'mantine-spacing-lg': '2rem',
        'mantine-spacing-xl': '2.5rem',
      },
    },
  },
};
