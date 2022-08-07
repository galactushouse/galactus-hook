# useLocalStorage

Hook with quick and easy functionality to create, edit, access and remove information in the browser's local storage.

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

Import the useLocalStorage hook from the library into your component:

```javascript
import { useLocalStorage } from '@galactushouse/galactus-hook'
```

Inside your component's function, unstructure the desired hook function:

```javascript
const MyComponent = () => {
  const {
    addLocalStorage,
    editLocalStorage,
    readLocalStorage,
    removeLocalStorage
  } = useLocalStorage()

  ...
}
```

### Examples

- addLocalStorage

```javascript
import React, { useState } from 'react'

import { useLocalStorage } from '@galactushouse/galactus-hook'

const MyComponent = () => {
  const [myPet, setMyPet] = useState('')
  const { addLocalStorage } = useLocalStorage()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMyPet(event.target.value)
  }

  const handleLocalStorage = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    addLocalStorage('petName', myPet)
  }

  return (
    <form onSubmit={handleLocalStorage}>
      <input
        type="text"
        value={myPet}
        onChange={handleInputChange}
        placeholder="Enter your pet's name"
      />
      <input
        type="submit"
        value="Save pet"
      />
    </form>
  )
}

export default MyComponent
```

Your data will be saved in your browser's local storage.
