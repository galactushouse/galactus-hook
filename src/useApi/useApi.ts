const useApi = (): UseApiReturn => {
  const handleRequest = async ({
    url,
    method,
    headers,
    body,
    cache
  }: HandleRequestProps) => {
    const response = await fetch(url, {
      method,
      headers: !!headers
        ? headers
        : {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
      body: !!body ? JSON.stringify(body) : null,
      cache: !!cache ? cache : 'default'
    })
      .then((response: Response) => {
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
      .then((data: JSON) => {
        return data
      })

    return response
  }

  const getRequest = (url: string, headers?: Headers, cache?: RequestCache) => {
    handleRequest({
      url,
      method: 'GET',
      headers,
      cache
    })
  }

  const postRequest = (
    url: string,
    headers?: Headers,
    body?: Body,
    cache?: RequestCache
  ) => {
    handleRequest({
      url,
      method: 'POST',
      headers,
      body,
      cache
    })
  }

  const putRequest = (
    url: string,
    headers?: Headers,
    body?: Body,
    cache?: RequestCache
  ) => {
    handleRequest({
      url,
      method: 'PUT',
      headers,
      body,
      cache
    })
  }

  const patchRequest = (
    url: string,
    headers?: Headers,
    body?: Body,
    cache?: RequestCache
  ) => {
    handleRequest({
      url,
      method: 'PATCH',
      headers,
      body,
      cache
    })
  }

  const deleteRequest = (
    url: string,
    headers?: Headers,
    cache?: RequestCache
  ) => {
    handleRequest({
      url,
      method: 'DELETE',
      headers,
      cache
    })
  }

  return {
    getRequest,
    postRequest,
    putRequest,
    patchRequest,
    deleteRequest
  }
}

export default useApi
