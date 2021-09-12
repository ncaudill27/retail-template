import styled from "styled-components"

export default styled.h1`
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
`
