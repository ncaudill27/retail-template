import styled from "styled-components"

export default styled.h2`
  font-family: var(--font-family-secondary);
  font-weight: var(--font-weight-light);
  color: var(--color-text);
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
  /* --type-lineheight-min: 1.391304347826;
  --type-lineheight-max: 1.422222222222;
  --type-lineheight-value: 1.22em + 3.9vw;
  line-height: clamp(
    var(--type-lineheight-min),
    var(--type-lineheight-value),
    var(--type-lineheight-max)
  ); */
`
