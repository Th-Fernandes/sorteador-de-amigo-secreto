export function useLogoPath() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 1024) return "/img/logo-branco-vertical.png"
  return "/img/logo.png"
}