export const COLORS = {
  text: "black",
  background: "white",
  primary: {
    main: "#DB2D24",
    light: "#E25750",
    dark: "#A3221B"
  },
  secondary: {
    main: "#24D2DB",
    light: "#50DBE2",
    dark: "#1B9EA5"
  }
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