import { ThemeProvider } from "styled-components"

export const theme = {
  colors: {
    main: "#4B69FD",
    orange: "#FE652B",
    light: {
      400: " #FFF9EB"
    },
    dark: {
      400: "#000000",
    },

  },
  sizes: {
    sm: 360,
    md: 1024
  }
}

export function ThemeComponent ({children}:any) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}