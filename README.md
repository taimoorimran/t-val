![Logo of t-val](./tval_plugin_logo.png)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger) ![npm](https://img.shields.io/npm/v/@taimoorimran/tval)

**t-val** is an input validator, can be used with the input field and you can define set of rules to apply on input field.

Here's the [Code Sandbox](https://breakdance.github.io/breakdance/)!

### Installation
Installing the package.
```sh
$ npm install @taimoorimran/tval
```
### Usage
```javascript
// importing the package
    import { tval } from 'taimoorimran/tval';
// calling the function
    const config = { 
        ...
    }
    console.log(tval('value', config));
```
### Configuration
#### Length
| Rule | Type | Value | Description |
| ------ | ------ | ------ | ------ |
| minLength | int | - | Length of string should be greater |
```javascript
const config = {
    minLength: 5
}
```
| Rule | Type | Value | Description |
| ------ | ------ | ------ | ------ |
| maxLength | int | - | Length of string should be lesser |
```javascript
const config = {
    maxLength: 5
}
```
| Rule | Type | Value | Description |
| ------ | ------ | ------ | ------ |
| length | int | - | Length of string should be equals to |
```javascript
const config = {
    length: 5
}
```
#### Alphabets
| Rule | Type | Value | Description |
| ------ | ------ | ------ | ------ |
| allowUpper | bool | Default: **False** | Allow upper case characters in string - [A-Z] |
```javascript
const config = {
    characters: {
        allowUpper: // true / false
    }
}
```
| Rule | Type | Value | Description |
| ------ | ------ | ------ | ------ |
| allowLower | bool | Default: **False** | Allow lower case characters in string - [a-z] |
```javascript
const config = {
    characters: {
        allowLower: // true / false
    }
}
```
#### Numerals
| Rule | Type | Value | Description |
| ------ | ------ | ------ | ------ |
| allowNumeric | bool | Default: **False** | Allow numerals in string - [0-9] |
```javascript
const config = {
    allowNumeric: // true / false
}
```
#### Space
| Rule | Type | Value | Description |
| ------ | ------ | ------ | ------ |
| dontAllowSpace | bool | Default: **False** | Allow spaces in string |
```javascript
const config = {
    dontAllowSpace: // true / false
}
```
#### Special Characters
| Rule | Type | Value | Description |
| ------ | ------ | ------ | ------ |
| allowAll | bool | Default: **False** | Allow special characters => [!, @, #, $, %, ^, &, *] |
```javascript
const config = {
    specialCharacters: {
        allowAll: // true / false
    }
}
```
| Rule | Type | Value | Description |
| ------ | ------ | ------ | ------ | 
| onlyAllowThese | bool | Default: **False** | Add selective special characters |
```javascript
const config = {
    specialCharacters: {
        onlyAllowThese: '&#_-'
    }
}
```
#### Overview
```javascript
const config = {
    minLength: 1,
    maxLength: 5,
    //OR
    length: 10,
    allowNumeric: // true / false,
    characters: {
        allowUpper: // true / false
        allowLower: // true / false
    },
    specialCharacters: {
        allowAll: // true / false,
        onlyAllowThese: '&#_-'
    }
}
```
### License
**t-val** is  [MIT licensed](./LICENSE).
### Powered By
![Logo of 7ctech](https://7ctech.com/logo-small-2.png)