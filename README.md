<h1 align="center">♨️ React UI Boilerplate</h1>

<div align="center">
  <p>
    A React boilerplate with opinionated setup to help you quickly create your own React UI library.
  </p>
  <img src="https://img.shields.io/github/license/boilertowns/nostalgia-boilerplate?style=flat-square" alt="MIT license" >
</div>

## The Setup

- [React v18][react-url]
- [TypeScript][typescript-url]
- UI development with [Storybook][storybook-url]
- Unit test with [Testing-library][testing-library-url]
- Linting with [Eslint][eslint-url] and code formatting with [Prettier][prettier-url]
- Conventional commit messages with [Commitlint][commitlint-url]
- Build the library with [Rollup][rollup-url]

## Get Started

- Use [Boilertowns](https://github.com/boilertowns/create-boilertowns) CLI.

  ```sh
  # npm
  npm init boilertowns -- -b react-ui-boilerplate

  # yarn
  yarn create boilertowns -b react-ui-boilerplate

  # pnpm
  pnpm dlx create-boilertowns -b react-ui-boilerplate

  # bun
  bun create boilertowns/react-ui-boilerplate [library-name]
  ```

- Click the green "Use this template" button to generate a new repository with the same structure and files.

  <img src="https://docs.github.com/assets/cb-36544/images/help/repository/use-this-template-button.png" alt="Use this template button" width="500">

  [Ref: Github Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)

## Development

- Build the library:

  ```sh
  pnpm build
  ```

- Run storybook in development mode:

  ```sh
  pnpm storybook
  ```

- Unit test component with:

  ```sh
  pnpm test
  ```

## GitHub release

This boilerplate uses [release-please-action](https://github.com/google-github-actions/release-please-action) to automated generate CHANGELOG, create Github releases and publish to NPM via GitHub Actions. You can see details of action at [release.yml](/.github/workflows//release.yml) and read more about [release-please](https://github.com/googleapis/release-please).

## Publish package

To automating publish your library package to NPM registry, you must first create a `NPM_TOKEN`. [See this article for more details](https://docs.npmjs.com/creating-and-viewing-access-tokens). Make sure the type of access token is **Automation**.

[Follow this instruction](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) to add the created token to your GitHub Actions secrets. Name of the secret is `NPM_TOKEN`.

## Contributing

**react-ui-boilerplate** ❤️ your contributions. If you have any ideas, suggestions, fixes, feel free to contribute.

[boilertowns-url]: https://github.com/boilertowns
[react-url]: https://beta.reactjs.org
[typescript-url]: https://www.typescriptlang.org
[storybook-url]: https://storybook.js.org
[eslint-url]: https://eslint.org
[commitlint-url]: https://github.com/conventional-changelog/commitlint
[prettier-url]: https://prettier.io
[testing-library-url]: https://testing-library.com
[rollup-url]: https://rollupjs.org
