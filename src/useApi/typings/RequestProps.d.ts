interface RequestProps {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  headers?: {}
  body?: {}
  cache?:
    | 'default'
    | 'no-store'
    | 'reload'
    | 'no-cache'
    | 'force-cache'
    | 'only-if-cached'
}
