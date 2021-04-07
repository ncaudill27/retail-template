export const COLORS = {
  text: "black",
  background: "white",
  primary: {
    main: "	hsl(3, 72%, 50%)",
    light: "hsl(3, 72%, 60%)",
    dark: "	hsl(3, 72%, 37%)",
  },
  secondary: {
    main: "hsl(183, 72%, 50%)",
    light: "hsl(183, 72%, 60%)",
    dark: "	hsl(183, 72%, 38%)",
  },
}

const SIZES = [
  8, // 0
  16, // 1
  24, // 2
  32, // 3
  40, // 4
  48, // 5
  56, // 6
  64, // 7
  72, // 8
  80, // 9
  88, // 10
  96, // 11
  104, // 12
]

export const size = idx => SIZES[idx]
