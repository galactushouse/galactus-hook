interface UseCookieReturn {
  getCookie: (name: string) => void
  setCookie: (name: string, value: string, daysToExpire: number) => void
}
