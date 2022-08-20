# useCookie

Hook with quick and easy functionality to manage cookies for your web applications.

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

Import the `useCookie` hook from the library into your component:

```javascript
import { useCookie } from '@galactushouse/galactus-hook'
```

Inside your component's function, unstructure the desired hook function:

```javascript
const MyComponent = () => {
  const {
    getCookie,
    setCookie,
    deleteCookie
  } = useCookie()

  ...
}
```

### Examples

- getCookie

Using the `getCookie` function you can access information and cookie values saved in the browser.

| Parameters | Type | Require | Description |
| --- | --- | --- | --- |
| `name` | `string` | ✓ | Name of the cookie to be accessed. |

```javascript
import { useCookie } from '@galactushouse/galactus-hook'

const MyComponent = () => {
  const { getCookie } = useCookie()

  const mySessionID = getCookie('session_ID')

  return (
    <div>
      <span>Your session key is: {mySessionID}</span>
    </div>
  )
}

export default MyComponent
```

- setCookie

Using the `setCookie` function you can create new cookies or edit them according to your application needs.

| Parameters | Type | Require | Description |
| --- | --- | --- | --- |
| `name` | `string` | ✓ | Name of the cookie to be created or edited. |
| `value` | `string` | ✓ | Value of the cookie to be created or edited. |
| `daysToExpire` | `number` | ✗ | Days the cookie will be valid before it expires. |

```javascript
import { useCookie } from '@galactushouse/galactus-hook'

const MyComponent = () => {
  const { setCookie } = useCookie()

  const cookieName = 'userKey'
  const cookieValue = '19750504'

  setCookie(cookieName, cookieValue, 30)

  return (
    ...
  )
}

export default MyComponent
```

- deleteCookie

Using the `deleteCookie` function you can delete cookies from the browser as per your need.

| Parameters | Type | Require | Description |
| --- | --- | --- | --- |
| `name` | `string` | ✓ | Name of the cookie to be deleted. |

```javascript
import { useCookie } from '@galactushouse/galactus-hook'

const MyComponent = () => {
  const { deleteCookie } = useCookie()

  const cookieName = 'userKey'

  deleteCookie(cookieName)

  return (
    ...
  )
}

export default MyComponent
```
