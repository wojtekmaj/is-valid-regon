[![npm](https://img.shields.io/npm/v/is-valid-regon.svg)](https://www.npmjs.com/package/is-valid-regon) ![downloads](https://img.shields.io/npm/dt/is-valid-regon.svg) [![CI](https://github.com/wojtekmaj/is-valid-regon/workflows/CI/badge.svg)](https://github.com/wojtekmaj/is-valid-regon/actions) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

# Is-Valid-REGON
Check if a number is a valid REGON.

## tl;dr
* Install by executing `npm install is-valid-regon` or `yarn add is-valid-regon`.
* Import by adding `import isValidREGON from 'is-valid-regon'`.
* Use it by writing `const valid = isValidREGON('817613530')`

## See also

* [is-valid-nip](https://github.com/wojtekmaj/is-valid-nip): Check if a number is a valid Numer Identyfikacji Podatkowej (NIP).
* [is-valid-pesel](https://github.com/wojtekmaj/is-valid-pesel): Check if a number is a valid PESEL.

## Examples

```js
> isValidREGON('817613530');
< true

> isValidREGON('12345678512347');
< true
```

## License

The MIT License.

## Author

<table>
  <tr>
    <td>
      <img src="https://github.com/wojtekmaj.png?s=100" width="100">
    </td>
    <td>
      Wojciech Maj<br />
      <a href="mailto:kontakt@wojtekmaj.pl">kontakt@wojtekmaj.pl</a><br />
      <a href="https://wojtekmaj.pl">https://wojtekmaj.pl</a>
    </td>
  </tr>
</table>
