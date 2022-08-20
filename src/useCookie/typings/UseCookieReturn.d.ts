interface UseCookieReturn {
  getCookie: (name: string) => void
  setCookie: (name: string, value: string, daysToExpire: number) => void
  deleteCookie: (name: string) => void
}
