[![npm](https://img.shields.io/npm/v/is-valid-regon.svg)](https://www.npmjs.com/package/is-valid-regon) ![downloads](https://img.shields.io/npm/dt/is-valid-regon.svg) [![CI](https://github.com/wojtekmaj/is-valid-regon/actions/workflows/ci.yml/badge.svg)](https://github.com/wojtekmaj/is-valid-regon/actions)

# Is-Valid-REGON

Check if a number is a valid REGON.

## tl;dr

- Install by executing `npm install is-valid-regon` or `yarn add is-valid-regon`.
- Import by adding `import isValidREGON from 'is-valid-regon'`.
- Use it by writing `const valid = isValidREGON('817613530')`

## See also

- [is-valid-nip](https://github.com/wojtekmaj/is-valid-nip): Check if a number is a valid Numer Identyfikacji Podatkowej (NIP).
- [is-valid-pesel](https://github.com/wojtekmaj/is-valid-pesel): Check if a number is a valid PESEL.

## Examples

```ts
isValidREGON('817613530'); // true

isValidREGON('12345678512347'); // true
```

## License

The MIT License.

## Author

<table>
  <tr>
    <td >
      <img src="https://avatars.githubusercontent.com/u/5426427?v=4&s=128" width="64" height="64" alt="Wojciech Maj">
    </td>
    <td>
      <a href="https://github.com/wojtekmaj">Wojciech Maj</a>
    </td>
  </tr>
</table>
