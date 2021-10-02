import styled from "styled-components"

export default styled.h1`
  color: var(--color-text);
  line-height: 1.05;
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
`
