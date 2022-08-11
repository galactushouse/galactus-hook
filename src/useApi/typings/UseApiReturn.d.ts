interface UseApiReturn {
  getRequest: (url: string, headers?: Headers, cache?: RequestCache) => void
  postRequest: (
    url: string,
    headers?: Headers,
    body?: Body,
    cache?: RequestCache
  ) => void
  putRequest: (
    url: string,
    headers?: Headers,
    body?: Body,
    cache?: RequestCache
  ) => void
  patchRequest: (
    url: string,
    headers?: Headers,
    body?: Body,
    cache?: RequestCache
  ) => void
  deleteRequest: (url: string, headers?: Headers, cache?: RequestCache) => void
}
