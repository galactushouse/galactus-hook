interface UseApiReturn {
  getRequest: ({ url, headers, cache }: GetRequestProps) => void
  postRequest: ({ url, headers, body, cache }: PostRequestProps) => void
  putRequest: ({ url, headers, body, cache }: PutRequestProps) => void
  patchRequest: ({ url, headers, body, cache }: PatchRequestProps) => void
  deleteRequest: ({ url, headers, cache }: DeleteRequestProps) => void
}
