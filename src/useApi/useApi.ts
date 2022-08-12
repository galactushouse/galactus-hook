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

  const getRequest = async (
    url: string,
    headers?: Headers,
    cache?: RequestCache
  ) => {
    const response = await handleRequest({
      url,
      method: 'GET',
      headers,
      cache
    })

    return response
  }

  const postRequest = async (
    url: string,
    headers?: Headers,
    body?: Body,
    cache?: RequestCache
  ) => {
    const response = await handleRequest({
      url,
      method: 'POST',
      headers,
      body,
      cache
    })

    return response
  }

  const putRequest = async (
    url: string,
    headers?: Headers,
    body?: Body,
    cache?: RequestCache
  ) => {
    const response = await handleRequest({
      url,
      method: 'PUT',
      headers,
      body,
      cache
    })

    return response
  }

  const patchRequest = async (
    url: string,
    headers?: Headers,
    body?: Body,
    cache?: RequestCache
  ) => {
    const response = await handleRequest({
      url,
      method: 'PATCH',
      headers,
      body,
      cache
    })

    return response
  }

  const deleteRequest = async (
    url: string,
    headers?: Headers,
    cache?: RequestCache
  ) => {
    const response = await handleRequest({
      url,
      method: 'DELETE',
      headers,
      cache
    })

    return response
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
