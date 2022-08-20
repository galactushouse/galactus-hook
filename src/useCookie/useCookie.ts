const useCookie = (): UseCookieReturn => {
  const getCookie = (name: string) => {
    const separateCookies: SeparateCookies = document.cookie.split(';').reduce(
      (cookieAccumulator, cookie) =>
        Object.assign(cookieAccumulator, {
          [cookie.split('=')[0].trim()]: cookie.split('=')[1]
        }),
      {}
    )

    return separateCookies[name]
  }

  const setCookie = (name: string, value: string, daysToExpire?: number) => {
    const expirationDate = `expires=${new Date(
      new Date().getTime() +
        (daysToExpire ? daysToExpire : 30) * 24 * 60 * 60 * 1000
    )}`

    document.cookie = `${name}=${value}; ${expirationDate}; path=/`
  }

  const deleteCookie = (name: string) => {
    document.cookie = `${name}=''; expires=Thu, 01 Jan 2000 00:00:00 GMT; path=''`
  }

  return { getCookie, setCookie, deleteCookie }
}

export default useCookie
