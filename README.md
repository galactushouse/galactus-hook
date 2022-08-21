<img alt="GalactusHook banner" width="100%" src="https://i.ibb.co/0YCQHPG/galactus-hook-banner.png" />

## About

The `galactus-hook` library has a collection of ready-to-use hooks that will help you with your project tasks, in addition to making your code clean and with many fast features.

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

Import one or more hooks chosen from the library into your component and use them as needed for your project:

```javascript
import { useLocalStorage } from '@galactushouse/galactus-hook'
```

## Hooks documentation

Access the specific documentation for each hook to learn more about its features:

* [useApi](https://github.com/galactushouse/galactus-hook/tree/master/src/useApi#readme)
* [useCookie](https://github.com/galactushouse/galactus-hook/tree/master/src/useCookie#readme)
* [useLocalStorage](https://github.com/galactushouse/galactus-hook/tree/master/src/useLocalStorage#readme)
* [useLocation](https://github.com/galactushouse/galactus-hook/tree/master/src/useLocation#readme)
* [useWindowScroll](https://github.com/galactushouse/galactus-hook/tree/master/src/useWindowScroll#readme)

## Hooks details

| Hook | Functions / Variables | Description |
| --- | --- | --- |
| `useApi` | `getRequest` `postRequest` `putRequest` `patchRequest` `deleteRequest` | Hook with quick and easy functionality for full API consumption. The useApi hook works with the GET, POST, PUT, PATCH and DELETE methods. |
| `useCookie` | `getCookie` `setCookie` `deleteCookie` | Hook with quick and easy functionality to manage cookies for your web applications. |
| `useLocalStorage` | `addLocalStorage` `editLocalStorage` `readLocalStorage` `removeLocalStorage` | Hook with quick and easy functionality to create, edit, access and remove information in the browser's local storage. |
| `useLocation` | `getLocation` `setLocation` | Hook with quick and easy functionality for accessing window.location, giving you full possibilities of reading and changing its properties, generating navigation autonomy for your web application. |
| `useWindowScroll` | `positionX` `positionY` | Hook with quick and easy functionality to access the horizontal and vertical position of the scroll in your application. |

## Contribute

To contribute to the `galactus-hook` project follow the steps mentioned below:

1. Fork the `galactus-hook` project.
2. Clone the project (forked by you).
3. Make changes, create new hooks or documentation (In case you create a new hook, you must also create the documentation of its features in the README.md file in your folder).
4. Record your change in the CHANGELOG.md file following the [standardization](https://keepachangelog.com/en/1.0.0/).
5. Submit your Pull Request (PR) containing your changes.

## Licensed

GalactusHook is [MIT](https://github.com/galactushouse/galactus-hook/blob/master/LICENSE) licensed.
