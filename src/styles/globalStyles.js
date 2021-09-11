import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
html {
  /* ----------
    SPACING VARIABLES
  ---------- */
  --spacing-0: 8px;
  --spacing-1: 16px;
  --spacing-2: 24px;
  --spacing-3: 32px;
  --spacing-4: 40px;
  --spacing-5: 48px;
  --spacing-6: 56px;
  --spacing-7: 64px;
  --spacing-8: 72px;
  --spacing-9: 80px;
  --spacing-10: 88px;
  --spacing-11: 96px;
  --spacing-12: 104px;
  /* ----------
    COLOR PALETTE
  ---------- */
  --color-text: hsl(140deg, 30%, 12%);
  --color-background: hsl(20deg, 43%, 99%);
  --color-primary: hsl(140deg, 52%, 55%);
  --color-primary-muted: hsl(140deg, 40%, 71%);
  --color-primary-dark: hsl(140deg, 52%, 36%);
  /* ----------
    BASE TYPOGRAPHY RULES
  ---------- */
  --font-weight-bold: 700;
  --font-weight-semi-bold: 600;
  --font-weight-medium: 500;
  --font-weight-regular: 400;
  --font-weight-light: 300;
  --font-family-primary: "Montserrat", "DejaVu Sans", "Verdana", "sans‑serif";
  --font-family-secondary: "Open Sans", "Segoe UI", "Apple SD Gothic Neo", "Lucida Grande", "Lucida Sans Unicode", "sans‑serif";
  }
  /* ----------
    CSS RESET
  ---------- */
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: var(--font-family-secondary);
    background-color: var(--color-background);
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: var(--font-family-primary);
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  /* ----------
    SPECIFIC CSS
  ---------- */
  h1 {
    /* ----------
      FONT SIZE VARIABLES
    ---------- */
    --type-fontsize-min: 1.625em; /* 26px */
    --type-fontsize-max: 4em; /* 64px */
    --type-fontsize-value: 0.73em + 4.36vw;
    font-size: clamp(
      var(--type-fontsize-min),
      var(--type-fontsize-value),
      var(--type-fontsize-max)
    );
    /* ----------
      LINE HEIGHT VARIABLES
    ---------- */
    --type-lineheight-min: 1.538461538462;
    --type-lineheight-max: 1.5;
    --type-lineheight-value: 1.13em + 6.83vw;
    line-height: clamp(
      var(--type-lineheight-min),
      var(--type-lineheight-value),
      var(--type-lineheight-max)
    );
  }

  h2 {
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-semi-bold);
    /* ----------
      FONT SIZE VARIABLES
    ---------- */
    --type-fontsize-min: 1.4375em; /* 23px */
    --type-fontsize-max: 3em; /* 48px */
    --type-fontsize-value: 0.91em + 2.55vw;
    font-size: clamp(
      var(--type-fontsize-min),
      var(--type-fontsize-value),
      var(--type-fontsize-max)
    );
    /* ----------
      LINE HEIGHT VARIABLES
    ---------- */
    --type-lineheight-min: 1.391304347826;
    --type-lineheight-max: 1.422222222222;
    --type-lineheight-value: 1.22em + 3.9vw;
    line-height: clamp(
      var(--type-lineheight-min),
      var(--type-lineheight-value),
      var(--type-lineheight-max)
    );
  }
`
