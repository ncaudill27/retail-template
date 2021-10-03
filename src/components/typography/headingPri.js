import styled from "styled-components"

export default styled.h1`
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-light);
  color: var(--color-text);
  line-height: 1.05;
  /* ----------
      FONT SIZE VARIABLES
    ---------- */
  --type-fontsize-min: 3em; /* 26px */
  --type-fontsize-max: 5em; /* 64px */
  --type-fontsize-value: 0.73em + 4.36vw;
  font-size: clamp(
    var(--type-fontsize-min),
    var(--type-fontsize-value),
    var(--type-fontsize-max)
  );
`
