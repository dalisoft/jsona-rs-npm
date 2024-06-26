# jsona-rs-npm

JSONA parser, linter, formatter, lsp and cli

> **npm** integration for [jsona-rs](https://github.com/jsona/jsona) without any overhead so using full power of `jsona-rs` CLI performance and feature

## Documentations

Look at [official documentation](https://jsona.github.io/jsona)

## Motivation

> This package is specifically designed for direct Command-Line Interface (CLI) interaction or as an extension for Visual Studio Code.

### The functionality for npx or bunx is not included and is not anticipated to be incorporated in the future

## How this is fast?

This project leverages the [binary2npm](https://github.com/dalisoft/binary2npm) utility to streamline the acquisition of platform-specific binaries. The binaries provided by the author are highly optimized, surpassing the performance of the traditional **Node.js** `bin.js` approach. By invoking the binaries directly, we circumvent unnecessary overhead, resulting in significantly reduced startup times and enhanced efficiency.

## Installation

```sh
npm install dalisoft/jsona-rs-npm -D
# or
yarn install dalisoft/jsona-rs-npm -D
# or
bun add dalisoft/jsona-rs-npm -D
```

## Environment variables

| Name           | Description                                                                                     | Required |
| -------------- | ----------------------------------------------------------------------------------------------- | -------- |
| `GITHUB_TOKEN` | For [GitHub API](https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting) | Yes      |

## Usage

See [Documentations](#documentations), requires [Environment variables](#environment-variables)

## Similar projects

- [spectral](https://github.com/stoplightio/spectral)
- [dprint-markdown](https://github.com/dprint/dprint-plugin-markdown)
- [prettier](https://prettier.io)
- [biomejs](https://biomejs.dev)

## License

Apache-2.0
