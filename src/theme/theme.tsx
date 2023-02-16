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
    md: 768,
    lg: 1024
  },
  shadowBorder: `
    border: 1px solid #000;
    border-radius: 3.75rem;
    box-shadow: 2px 2px 0px 0px rgba(0,0,0,1);
  `
}

export function ThemeComponent ({children}:any) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}