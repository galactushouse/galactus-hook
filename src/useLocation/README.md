# useLocation

Hook with quick and easy functionality for accessing window.location, giving you full possibilities of reading and changing its properties, generating navigation autonomy for your web application.

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

Import the `useLocation` hook from the library into your component:

```javascript
import { useLocation } from '@galactushouse/galactus-hook'
```

Inside your component's function, unstructure the desired hook function:

```javascript
const MyComponent = () => {
  const {
    getLocation,
    setLocation
  } = useLocation()

  ...
}
```

### Examples

- getLocation

Using the `getLocation` function you can fetch location information from your web application.

| Parameters | Type | Possible values | Require | Description |
| --- | --- | --- | --- | --- |
| `name` | `string` |  `href` `hostname` `pathname` `hash` `protocol`  | ✓ | Location property name. |

```javascript
import { useLocation } from '@galactushouse/galactus-hook'

const MyComponent = () => {
  const { getLocation } = useLocation()

  const myHostname = getLocation('hostname')

  return (
    <p>
      Articles can be found at: <a href=`${myHostname}/articles`>Articles</a>
    </p>
  )
}

export default MyComponent
```

- setLocation

Using the `setLocation` function you can edit location information of your web application.

| Parameters | Type | Possible values | Require | Description |
| --- | --- | --- | --- | --- |
| `name` | `string` |  `href` `hostname` `pathname` `hash` `protocol`  | ✓ | Location property name. |
| `value` | `string` |  -  | ✓ | Value to change in the location property. |

```javascript
import { useLocation } from '@galactushouse/galactus-hook'

const MyComponent = () => {
  const { setLocation } = useLocation()

  return (
    <button
      onClick={() => setLocation('pathname', '/example-article')}
    >
      Go to article
    </button>
  )
}

export default MyComponent
```
