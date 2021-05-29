# helloworld-for-typescript

![](https://github.com/msfukui/helloworld-for-typescript/workflows/Node.js%20CI/badge.svg)

`Hello world` for TypeScript

VSCode extentions are not setting.

## Set up

```
$ npm install
..
```

## Build & test & view the coverage report

```
$ npm run build
..
$ node -e "require('./dist/lib').main()"
Hello world
$ npm test
..
$ npx http-server -o coverage/lcov-report
..
```

## Lint & Format

```
$ npm run lint
..
$ npm run format
..
```

or

```
$ npm run fix
```

## Set up pre-commit hook

husky and lint-staged have already been set up.

## CI setup

Use github actions.

## Ref

- この TypeScript が Hello, world! のくせに慎重すぎる - Qiita

  https://qiita.com/matzkoh/items/90baab22ad489b78384b

  このリポジトリを作成する際に参考にした記事です。

- Prettier 入門 ～ ESLint との違いを理解して併用する～ - Qiita

  https://qiita.com/soarflat/items/06377f3b96964964a65d

  このリポジトリをメンテする際に参考にした記事です。

- eslint-config-prettier

  https://github.com/prettier/eslint-config-prettier

  ESLint を Prettier と組み合わせて使う場合に、Prettier と競合するルールを自動でオフにする ESLint の拡張機能。

- Definition for rule 'simple-import-sort/sort' was not found simple-import-sort/sort | stackoverflow

  https://stackoverflow.com/questions/64905158/definition-for-rule-simple-import-sort-sort-was-not-found-simple-import-sort-s

  ESLint の simple-import-sort/sort の名前の変更について。

  v6 から simple-import-sort/sort → simple-import-sort/imports に名前が変更されている。

- npm run のスクリプトを連続実行・並列実行する (npm-run-all) | まくまく Node.js ノート

  https://maku77.github.io/nodejs/npm/npm-run-all.html

  npm-run-all のわかりやすい説明。

- npm run のスクリプトの中でディレクトリの削除を行う (rimraf) | まくまく Node.js ノート

  https://maku77.github.io/nodejs/npm/npm-run-rimraf.html

  rimraf のわかりやすい説明。

- how to use with jest #53

  https://github.com/power-assert-js/espower-typescript/issues/53

  TypeScript + Jest での power-assert の使い方 issue 。

  現時点では babel を使わないと動作しない模様。。

- typicode/husky - Modern native Git hooks made easy 🐶 woof!

  https://github.com/typicode/husky
