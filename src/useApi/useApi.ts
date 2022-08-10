const useApi = () => {
  const request = async ({
    url,
    method,
    headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body,
    cache = 'default'
  }: RequestProps): Promise<UseApiReturn> => {
    const response = await fetch(url, {
      method,
      headers,
      body: !!body ? JSON.stringify(body) : null,
      cache
    }).then((response: Response) => {
      if (response.status !== 200 && response.status !== 204) {
        return console.error(
          'Error when trying to make a request to the API: ',
          response
        )
      }

      if (response.status === 204) {
        return
      }

      return response.json()
    })

    return response
  }

  return {
    get: ({ url, headers, cache }: RequestProps) => {
      request({
        url,
        method: 'GET',
        headers,
        cache
      })
    },
    post: ({ url, headers, body, cache }: RequestProps) => {
      request({
        url,
        method: 'POST',
        headers,
        body,
        cache
      })
    },
    put: ({ url, headers, body, cache }: RequestProps) => {
      request({
        url,
        method: 'PUT',
        headers,
        body,
        cache
      })
    }
  }
}

export default useApi
