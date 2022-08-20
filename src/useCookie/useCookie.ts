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

  const setCookie = (name: string, value: string, daysToExpire: number) => {
    const expirationDate = `expires=${new Date(
      new Date().getTime() + daysToExpire * 24 * 60 * 60 * 1000
    )}`

    document.cookie = `${name}=${value}; ${expirationDate}; path=/`
  }

  return { getCookie, setCookie }
}

export default useCookie
