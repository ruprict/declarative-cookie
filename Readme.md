# declarative-cookie

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Action creator for [redux-effects-cookie](https://github.com/redux-effects/redux-effects-cookie)

## Installation

    $ npm install declarative-cookie

## Usage

Params:
  * name - Cookie name to get/set
  * value - Value to set

If you pass one argument, it returns an action that retrieves a cookie by name.  If you pass two arguments, it returns an action that sets the value of the cookie.

## Example

### Getting a cookie (using [bind-effect](https://github.com/redux-effects/bind-effect) for composition)

```javascript
import bind from 'bind-effect'
import cookie from 'declarative-cookie'
import {createAction} from 'redux-actions'

const setAuthToken = createAction('SET_AUTH_TOKEN')

function initializeAuth () {
  return bind(cookie('authToken'), setAuthToken) // = {type: 'GET_COOKIE', payload: {name: 'authToken'}, meta: {steps: [[setAuthToken]}}
}
```

### Setting a cookie

```javascript
import cookie from 'declarative-cookie'
import fetch from 'declarative-fetch'

function login (username, password) {
  return bind(fetch('/user/login', {method: 'POST', body: {username, password}}),
    ({token}) => cookie('authToken', token))
}
```

This uses the [declarative-fetch](https://github.com/redux-effects/declarative-fetch) package to send a login request, and then sets the auth token in a cookie if it is successful.

## License

The MIT License

Copyright &copy; 2015, Weo.io &lt;info@weo.io&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
