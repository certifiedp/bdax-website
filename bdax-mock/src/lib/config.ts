// Design tokens and configuration
export const designConfig = {
  colors: {
    background: {
      main: 'bg-black',
      dark: 'bg-[#080a19]',
      darker: 'bg-[#0a0c1b]',
      white: 'bg-white',
      gray: 'bg-gray-100',
      black: 'bg-black',
      muted: 'bg-[rgba(255,255,255,0.1)]',
    },
    text: {
      primary: 'text-white',
      secondary: 'text-[rgba(255,255,255,0.5)]',
      tertiary: 'text-[rgba(255,255,255,0.64)]',
      black: 'text-black',
      accent: 'text-[#fdb517]',
    },
    accent: {
      primary: 'bg-[#d68a15]',
      gold: 'bg-[#fdb517]',
      orange: 'bg-[#fe9f07]',
      bannerBg: 'bg-[rgba(214,138,21,0.29)]',
    },
    border: {
      light: 'border-[rgba(255,255,255,0.2)]',
    },
  },
  spacing: {
    section: {
      sm: 'py-12 md:py-16',
      md: 'py-16 md:py-24',
      lg: 'py-20 md:py-32',
    },
    container: 'container mx-auto px-6 lg:px-16',
    gap: {
      sm: 'gap-4',
      md: 'gap-8 md:gap-12',
      lg: 'gap-12',
    },
  },
  typography: {
    heading: {
      xl: 'text-6xl md:text-7xl lg:text-8xl font-normal leading-[0.94] tracking-tight',
      lg: 'text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-[-1.2px]',
      md: 'text-3xl md:text-4xl font-normal',
      base: 'text-xl md:text-2xl font-medium',
    },
    body: {
      base: 'text-base md:text-lg leading-relaxed',
      sm: 'text-sm md:text-base',
      xs: 'text-sm',
    },
    stats: 'text-5xl md:text-6xl font-medium',
  },
  animation: {
    fadeIn: 'transition-opacity duration-500',
    fadeInUp: 'animate-fadeInUp',
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

