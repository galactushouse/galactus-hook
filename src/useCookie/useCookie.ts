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

  return { getCookie }
}

export default useCookie
