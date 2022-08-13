# useApi

Hook with quick and easy functionality for full API consumption. The useApi hook works with the GET, POST, PUT, PATCH and DELETE methods.

## Install

Install the `galactus-hook` library:

```shell
npm install @galactushouse/galactus-hook
```

or

```shell
yarn add @galactushouse/galactus-hook
```

## Usage

Import the `useApi` hook from the library into your component:

```javascript
import { useApi } from '@galactushouse/galactus-hook'
```

Inside your component's function, unstructure the desired hook function:

```javascript
const MyComponent = () => {
  const {
    getRequest,
    postRequest,
    putRequest,
    patchRequest,
    deleteRequest
  } = useApi()

  ...
}
```

### Examples

- getRequest

Using the `getRequest` function you can fetch data from APIs.

| Parameters | Type | Require | Description |
| --- | --- | --- | --- |
| `url` | `string`  | ✓ | URL where the request will be made. |
| `headers` | `Headers (object)` | ✗ | Object containing the request headers. |
| `cache` | `RequestCache (string)` | ✗ | Request cache property. |

*These parameters must be contained in an object.

```javascript
import { useState, useEffect } from 'react'
import { useApi } from '@galactushouse/galactus-hook'

const MyComponent = () => {
  const [users, setUsers] = useState({})
  const { getRequest } = useApi()

  const options = {
    url: 'https://my-api.com/users/details/971925'
  }

  useEffect(() => {
    getRequest(options).then((data: Response) => {
      setUsers(data)
    })
  }, [])

  return (
    ...
  )
}

export default MyComponent
```

- postRequest

Using the `postRequest` function you can post data to APIs.

| Parameters | Type | Require | Description |
| --- | --- | --- | --- |
| `url` | `string`  | ✓ | URL where the request will be made. |
| `headers` | `Headers (object)` | ✗ | Object containing the request headers. |
| `body` | `Body (object)` | ✓ | Object that contains the body with the data to be registered by the request. |
| `cache` | `RequestCache (string)` | ✗ | Request cache property. |

*These parameters must be contained in an object.

```javascript
import { useApi } from '@galactushouse/galactus-hook'

const MyComponent = () => {
  const { postRequest } = useApi()

  const options = {
    url: 'https://my-api.com/users/create',
    body: {
      id: '971925',
      firstName: 'Bruno',
      lastName: 'Martins',
      age: 25,
      email: 'bruno@mail.com'
    }
  }

  const handleRequest = (options: {}) => {
    postRequest(options).then((response: Response) => {
      return response
    })
  }

  return (
    ...
  )
}

export default MyComponent
```

- putRequest

Using the `putRequest` function you can edit full table data from an APIs.

| Parameters | Type | Require | Description |
| --- | --- | --- | --- |
| `url` | `string`  | ✓ | URL where the request will be made. |
| `headers` | `Headers (object)` | ✗ | Object containing the request headers. |
| `body` | `Body (object)` | ✓ | Object that contains the body with the data to be edited by the request. |
| `cache` | `RequestCache (string)` | ✗ | Request cache property. |

*These parameters must be contained in an object.

```javascript
import { useApi } from '@galactushouse/galactus-hook'

const MyComponent = () => {
  const { putRequest } = useApi()

  const options = {
    url: 'https://my-api.com/users/edit/971925',
    body: {
      firstName: 'Peter',
      lastName: 'Parker',
      age: 19,
      email: 'spiderman@mail.com'
    }
  }

  const handleRequest = (options: {}) => {
    putRequest(options).then((response: Response) => {
      return response
    })
  }

  return (
    ...
  )
}

export default MyComponent
```

- patchRequest

Using the `patchRequest` function you can edit partial table data from an API.

| Parameters | Type | Require | Description |
| --- | --- | --- | --- |
| `url` | `string`  | ✓ | URL where the request will be made. |
| `headers` | `Headers (object)` | ✗ | Object containing the request headers. |
| `body` | `Body (object)` | ✓ | Object that contains the body with the data to be edited by the request. |
| `cache` | `RequestCache (string)` | ✗ | Request cache property. |

*These parameters must be contained in an object.

```javascript
import { useApi } from '@galactushouse/galactus-hook'

const MyComponent = () => {
  const { patchRequest } = useApi()

  const options = {
    url: 'https://my-api.com/users/edit/971925',
    body: {
      lastName: 'Parker',
      email: 'spiderman@mail.com'
    }
  }

  const handleRequest = (options: {}) => {
    patchRequest(options).then((response: Response) => {
      return response
    })
  }

  return (
    ...
  )
}

export default MyComponent
```

- deleteRequest

Using the `deleteRequest` function you can delete data from an API table.

| Parameters | Type | Require | Description |
| --- | --- | --- | --- |
| `url` | `string`  | ✓ | URL where the request will be made. |
| `headers` | `Headers (object)` | ✗ | Object containing the request headers. |
| `cache` | `RequestCache (string)` | ✗ | Request cache property. |

*These parameters must be contained in an object.

```javascript
import { useApi } from '@galactushouse/galactus-hook'

const MyComponent = () => {
  const { deleteRequest } = useApi()

  const options = {
    url: 'https://my-api.com/users/delete/971925'
  }

  const handleRequest = (options: {}) => {
    deleteRequest(options).then((response: Response) => {
      return response
    })
  }

  return (
    ...
  )
}

export default MyComponent
```
