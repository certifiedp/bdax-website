// Design tokens and configuration
export const designConfig = {
  colors: {
    background: {
      // Layered darks with warmer tones and deep blacks
      main: 'bg-[radial-gradient(1200px_900px_at_18%_8%,#1a1410_0%,#0f0a08_45%,transparent_70%),radial-gradient(900px_700px_at_85%_88%,#15100a_0%,#0c0905_55%,transparent_78%),radial-gradient(1400px_900px_at_50%_120%,rgba(10,8,6,0.9)_0%,rgba(5,4,3,0.82)_60%,transparent_85%),linear-gradient(180deg,#0a0806_0%,#050403_52%,#000000_100%)]',
      dark: 'bg-[#050505]',
      darker: 'bg-[linear-gradient(180deg,#0c0a08_0%,#090705_55%,#000000_100%)]',
      white: 'bg-white',
      gray: 'bg-gray-100',
      black: 'bg-black',
      muted: 'bg-[rgba(255,255,255,0.08)]',
    },
    text: {
      primary: 'text-white',
      secondary: 'text-[rgba(255,255,255,0.68)]',
      tertiary: 'text-[rgba(255,255,255,0.45)]',
      black: 'text-black',
      accent: 'text-[#f6a735]',
    },
    accent: {
      primary: 'bg-[#f39a26]',
      gold: 'bg-[#f7b548]',
      orange: 'bg-[#f28423]',
      bannerBg: 'bg-[rgba(124,80,18,0.68)]',
    },
    border: {
      light: 'border-[rgba(255,255,255,0.25)]',
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

