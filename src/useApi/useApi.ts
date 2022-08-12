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
        if (
          response.status !== 200 &&
          response.status !== 201 &&
          response.status !== 202
        ) {
          return console.error(
            'Error when trying to make a request to the API: ',
            response
          )
        }

        return response.json()
      })
      .then((data: JSON) => {
        return data
      })

    return response
  }

  const getRequest = async ({ url, headers, cache }: GetRequestProps) => {
    const response = await handleRequest({
      url,
      method: 'GET',
      headers,
      cache
    })

    return response
  }

  const postRequest = async ({
    url,
    headers,
    body,
    cache
  }: PostRequestProps) => {
    const response = await handleRequest({
      url,
      method: 'POST',
      headers,
      body,
      cache
    })

    return response
  }

  const putRequest = async ({ url, headers, body, cache }: PutRequestProps) => {
    const response = await handleRequest({
      url,
      method: 'PUT',
      headers,
      body,
      cache
    })

    return response
  }

  const patchRequest = async ({
    url,
    headers,
    body,
    cache
  }: PatchRequestProps) => {
    const response = await handleRequest({
      url,
      method: 'PATCH',
      headers,
      body,
      cache
    })

    return response
  }

  const deleteRequest = async ({ url, headers, cache }: DeleteRequestProps) => {
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
