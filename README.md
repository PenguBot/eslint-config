<div align="center">

# @pengubot/eslint-config
PenguBot's Organisation Standard ESLint and TSConfig

[![GitHub](https://img.shields.io/github/license/pengubot/eslint-config?logo=github&style=flat-square)](https://github.com/pengubot/eslint-config/blob/master/LICENSE.md)
[![npm](https://img.shields.io/npm/v/@pengubot/eslint-config?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@pengubot/eslint-config)
[![npm](https://img.shields.io/npm/dt/@pengubot/eslint-config?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@pengubot/eslint-config)
[![Discord](https://img.shields.io/discord/303195322514014210?color=697EC4&label=Discord&logo=discord&logoColor=FDFEFE&style=flat-square)](https://pengubot.com/support)
[![Twitter Follow](https://img.shields.io/twitter/follow/adityatripathid?label=Follow%20@adityatripathid&logo=twitter&colorB=1DA1F2&style=flat-square)](https://twitter.com/adityatripathid/follow)
[![Twitter Follow](https://img.shields.io/twitter/follow/PenguBot?label=Follow%20@PenguBot&logo=twitter&colorB=1DA1F2&style=flat-square)](https://twitter.com/PenguBot/follow)
[![Patreon Support](https://img.shields.io/badge/patreon-donate-brightgreen.svg?label=Support%20on%20Patreon&logo=patreon&colorB=F96854&style=flat-square&link=https://patreon.com/PenguBot)](https://patreon.com/PenguBot)
[![PayPal Donate](https://img.shields.io/badge/paypal-donate-brightgreen.svg?label=Donate%20with%20Paypal&logo=paypal&colorB=00457C&style=flat-square&link=https://paypal.me/adityatripathid)](https://paypal.me/adityatripathid)
</div>

----

## Installation
Installing the Peer Dependencies:
> yarn add -D eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin

Then install this config:
> yarn add -D @pengubot/eslint-config

## Installation
### ESLint
To use it as your ESLint config you can add this to your `.eslintrc` file:

```json
{
    "extends": ["@pengubot"]
}
```
Or you can add this to your `package.json`:
```json
{
    "eslintConfig": {
        "extends": "@pengubot"
    }
}
```

Then create a `tsconfig.eslint.json` similar to the following example in the same directory:
```json
{
    "extends": "./tsconfig.json",
    "include": ["src"]
}
```

### TypeScript
To use `@pengubot/eslint-config`'s TypeScript config you can add this to your `tsconfig.json`:

```json
{
    "extends": "@pengubot/eslint-config"
}
```

## Support
[![Support](https://i.imgur.com/H1MveyG.png?2)](https://ko-fi.com/AdityaTD)

## License
[MIT](https://github.com/PenguBot/eslint-config/blob/master/LICENSE)