import styled from "styled-components"

export default styled.h3`
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-bold);
  /* ----------
      FONT SIZE VARIABLES
    ---------- */
  --type-fontsize-min: 1.25em; /* 20px */
  --type-fontsize-max: 1.625em; /* 26px */
  --type-fontsize-value: 0.7em + 2.4vw;
  font-size: clamp(
    var(--type-fontsize-min),
    var(--type-fontsize-value),
    var(--type-fontsize-max)
  );
`
