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

* addLocalStorage

Using the `addLocalStorage` function you can save data to the browser's local storage.

| Parameters | Type | Require | Description |
| --- | --- | --- | --- |
| `key` | `string` | ✓ | Key name to be saved to local storage. |
| `value` | `unknown` | ✓ | Value to be saved in local storage. |

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

* editLocalStorage

Using the `editLocalStorage` function you can edit data already saved in the browser's local storage.

| Parameters | Type | Require | Description |
| --- | --- | --- | --- |
| `key` | `string` | ✓ | Key name referring to the data to be edited in local storage. |
| `value` | `unknown` | ✓ | Value to edit in local storage. |

```javascript
import React, { useState } from 'react'

import { useLocalStorage } from '@galactushouse/galactus-hook'

const MyComponent = () => {
  const [myPet, setMyPet] = useState('')
  const { editLocalStorage } = useLocalStorage()

  const handleEditPetName = () => {
    setMyPet(newPetName)
  }

  const handleLocalStorage = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    editLocalStorage('petName', myPet)
  }

  return (
    ...
  )
}

export default MyComponent
```

* readLocalStorage

Using the `readLocalStorage` function you can fetch data already saved in the browser's local storage, save it in a variable and even show it to the user.

| Parameters | Type | Require | Description |
| --- | --- | --- | --- |
| `key` | `string` | ✓ | Key name referring to the data to be fetched from local storage. |

```javascript
import React, { useState } from 'react'

import { useLocalStorage } from '@galactushouse/galactus-hook'

const MyComponent = () => {
  const [myPet, setMyPet] = useState('')
  const { readLocalStorage } = useLocalStorage()

  const handleGetPetName = () => {
    const getPetName = readLocalStorage('petName')

    if (getPetName) {
      setMyPet(getPetName)
    }
  }

  return (
    <>
      <span>{myPet}</span>
      ...
    </>
  )
}

export default MyComponent
```

* removeLocalStorage

Using the `removeLocalStorage` function you can delete data already saved in the browser's local storage.

| Parameters | Type | Require | Description |
| --- | --- | --- | --- |
| `key` | `string` | ✓ | Name of the key to be deleted from local storage along with its value. |

```javascript
import { useLocalStorage } from '@galactushouse/galactus-hook'

const MyComponent = () => {
  const { removeLocalStorage } = useLocalStorage()

  const handleDeletePetName = () => {
    removeLocalStorage('petName')
  }
  ...
}

export default MyComponent
```
