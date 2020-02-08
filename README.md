# helloworld-for-typescript

![](https://github.com/msfukui/helloworld-for-typescript/workflows/Node.js%20CI/badge.svg)

`Hello world` for TypeScript

c.f. https://qiita.com/matzkoh/items/90baab22ad489b78384b

## Setup

```
$ npm init -y
..
$ npm i -D typescript rimraf
..
$ npm i -D @types/node
..
$ npm i -D jest @types/jest ts-jest
..
```

## build & test & view the coverage report

```
$ npm build
..
$ node -e "require('dist').main()"
Hello world
$ npm t
..
$ npx http-server -o coverage/lcov-report
..
```
