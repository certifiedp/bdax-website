// Design tokens and configuration
export const designConfig = {
  colors: {
    background: {
      main: 'bg-[radial-gradient(circle_at_20%_0%,#1d2850_0%,#0a102b_45%,#050612_100%)]',
      dark: 'bg-[#05081b]',
      darker: 'bg-[linear-gradient(180deg,#101a3f_0%,#0c112d_55%,#1b101d_100%)]',
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

