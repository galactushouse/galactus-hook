interface RequestProps {
  url: string
  method: string
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
