// Design tokens and configuration
export const designConfig = {
  colors: {
    background: {
      main: 'bg-[#d4d4d8]',
      white: 'bg-white',
      gray: 'bg-gray-100',
      black: 'bg-black',
    },
    text: {
      primary: 'text-black',
      secondary: 'text-gray-600',
      tertiary: 'text-gray-700',
    },
    accent: {
      yellow: 'bg-yellow-400',
    },
  },
  spacing: {
    section: {
      sm: 'py-12 md:py-16',
      md: 'py-16 md:py-24',
      lg: 'py-20 md:py-32',
    },
    container: 'container mx-auto px-6',
    gap: {
      sm: 'gap-4',
      md: 'gap-8 md:gap-12',
      lg: 'gap-12',
    },
  },
  typography: {
    heading: {
      xl: 'text-5xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight',
      lg: 'text-4xl md:text-5xl lg:text-6xl font-normal leading-tight',
      md: 'text-3xl md:text-4xl font-normal',
    },
    body: {
      base: 'text-base leading-relaxed',
      sm: 'text-sm',
    },
    stats: 'text-5xl md:text-6xl lg:text-7xl font-bold',
  },
  animation: {
    fadeIn: 'transition-opacity duration-500',
    bounce: 'animate-bounce',
    scrollLeft: 'animate-scroll-left',
    scrollRight: 'animate-scroll-right',
    float: 'animate-float',
  },
  border: {
    radius: {
      sm: 'rounded-lg',
      md: 'rounded-xl',
      lg: 'rounded-2xl',
      full: 'rounded-full',
    },
  },
};

export const scrollConfig = {
  arrowFadeThreshold: 50, // pixels scrolled before arrow fades
};

