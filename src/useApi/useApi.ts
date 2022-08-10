const useApi = () => {
  const handleRequest = async ({
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

  const getRequest = ({ url, headers, cache }: RequestProps) => {
    handleRequest({
      url,
      method: 'GET',
      headers,
      cache
    })
  }

  const postRequest = ({ url, headers, body, cache }: RequestProps) => {
    handleRequest({
      url,
      method: 'POST',
      headers,
      body,
      cache
    })
  }

  const putRequest = ({ url, headers, body, cache }: RequestProps) => {
    handleRequest({
      url,
      method: 'PUT',
      headers,
      body,
      cache
    })
  }

  const patchRequest = ({ url, headers, body, cache }: RequestProps) => {
    handleRequest({
      url,
      method: 'PATCH',
      headers,
      body,
      cache
    })
  }

  const deleteRequest = ({ url, headers, cache }: RequestProps) => {
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
