import styled from "styled-components"

export default styled.h4`
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-bold);
  /* ----------
    FONT SIZE VARIABLES
  ---------- */
  --type-fontsize-min: 1em; /* 16px */
  --type-fontsize-max: 1.125em; /* 18px */
  --type-fontsize-value: 0.7em + 0.8vw;
  font-size: clamp(
    var(--type-fontsize-min),
    var(--type-fontsize-value),
    var(--type-fontsize-max)
  );
`
