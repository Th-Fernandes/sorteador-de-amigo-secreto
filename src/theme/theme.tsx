import { ThemeProvider } from "styled-components"

export const theme = {
  colors: {
    main: "#4B69FD",
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