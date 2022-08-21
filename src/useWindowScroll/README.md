# useWindowScroll

Hook with quick and easy functionality to access the horizontal and vertical position of the scroll in your application.

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

Import the `useWindowScroll` hook from the library into your component:

```javascript
import { useWindowScroll } from '@galactushouse/galactus-hook'
```

Inside your component's function, unstructure the desired hook variables:

```javascript
const MyComponent = () => {
  const {
    positionX,
    positionY
  } = useWindowScroll()

  ...
}
```

### Examples

- positionX

Using the `positionX` variable, you will have access to the current position of the horizontal scroll in your application.

| Parameters | Type | Description |
| --- | --- | --- |
| `positionX` | `number` | Current position of the horizontal scroll. |

```javascript
import { useWindowScroll } from '@galactushouse/galactus-hook'

const MyComponent = () => {
  const { positionX } = useWindowScroll()

  return (
    <p>
      Your horizontal scroll is:
      <span>{positionX}<span/>
    <p/>
  )
}

export default MyComponent
```

- positionY

Using the `positionY` variable, you will have access to the current position of the vertical scroll in your application.

| Parameters | Type | Description |
| --- | --- | --- |
| `positionY` | `number` | Current position of the vertical scroll. |

```javascript
import { useWindowScroll } from '@galactushouse/galactus-hook'

const MyComponent = () => {
  const { positionY } = useWindowScroll()

  return (
    <header className={positionY > 100 ? 'hidden' : 'visible'}>
      <img src="logo.png" />
      <ul>
        <li>T-shirts</li>
        <li>Pants</li>
        <li>Sneakers</li>
        <li>Caps</li>
        <li>Hoodies</li>
      </ul>
    </header>
  )
}

export default MyComponent
```
