# @polkassembly/util

A set of utility functions used in [Polkassembly](https://polkassembly.io).

## Usage

Installation -

```
yarn add @polkssembly/util
```

Functions can be imported directly from the package, e.g.

```js
import { getPassingThreshold } from '@polkassembly/util';
```

## Utility functions
- `getPassingThreshold`: Get the amount of Aye needed for a referendum to pass.
- `newtonRaphson`: This is a fork of [scijs/newton-raphson-method](https://github.com/scijs/newton-raphson-method) that uses bn.js instances instead of plain javascript numbers. It has been simplified and requires to pass the function and its derivative as argument.
- `solveQuadraticEquation`: Get the roots of a polynomial function of degree 2  (`a*x^2 + b*x + c`) where the coeffiscients a, b and c are BN from bn.js.
