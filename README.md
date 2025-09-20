# bucket-list-app

A bare-bones to-do list app demonstrating [TypeScript], [Node.js], and [Jasmine] working together. This list just keeps on growing: nothing ever falls off it, until you refresh the page :smile:

<img style="max-width:100%;" alt="Screenshot of 'bucket list' to-do app" src="/images/screenshot_wireframe_side-by-side.jpeg" align="center" /><br />
*Figure 1: Screenshot and wireframe of 'bucket list' to-do app*

## Features
* **Add** an item to the to-do list (that's all. Items are *not* **updated** or **deleted** - *this is just a demo*.)

## Installation
```
// clone the repository
$ git clone https://github.com/hfagerlund/bucket-list-app.git

$ cd <path-to-installation>/bucket-list-app

// install dependencies and devDependencies
$ yarn install
```
## Usage
```
// compile
$ yarn compile // OR: $ tsc -w (for constant 'watch' feature - ie. watch and compile all '.ts' files.)

// run the tests
$ yarn test
```
View `index_browser.htm` in a web browser (*Note: tested in Firefox*).

<details><summary><strong>Javascript as a module</strong></summary><p>

<em>(work in progress)</em>
To avoid CORS issues:

* Install Node.js **[http-server]**: `$ yarn add --dev http-server`
* Add the following to package.json (under 'scripts'):
 
```
"scripts": {
    "server": "http-server -p 8080 -o index.htm --cors",
  },
```

* Run the server:

```
$ yarn server
```

(Automatically opens `http://127.0.0.1:8080/index.htm` in the default web browser.)
</p></details>

- - -

## How to selectively run tests (only part of the test suite)
1. **Example:** Only run specs in **a single file**:
```
$ npx jasmine dist/app.spec.js
```
2. **Example:** Only run **tests dealing with the GUI**:
* modify `src/app.spec.ts`:
```
-   describe('GUI', function() {
+   fdescribe('GUI', function() {
```
* output:
```
# ...
$ yarn test
#...
Started
..........


Ran 10 of 18 specs
10 specs, 0 failures
Finished in 0.012 seconds
Incomplete: fit() or fdescribe() was found
```
**Note** : As of Jasmine v.3.x, tests will **intentionally** *not* exit cleanly if the suite contains `fit()` or `fdescribe()`, to prevent users from committing **disabled** specs.
- - -
## How the source was generated
<details><summary>Generate a 'package.json' file</summary><p>

```
$ yarn init
```
</p></details>

<details><summary>Install TypeScript</summary><p>

```
$ yarn add typescript
```
</p></details>

<details><summary>Install Jasmine, JSDOM, (TypeScript type) definitions, and TS execution engine</summary><p>
 
```
$ yarn add --dev jasmine jsdom@22.0.0 @types/jasmine @types/jsdom @types/node ts-node
```

(All copyrights for [Jasmine], [JSDOM], [(TypeScript type) definitions], and [TS execution engine] remain with their respective owners.)

</p></details>
<details><summary>Generate a 'tsconfig.json' file</summary><p>

```
$ tsc --init // OR $ npx tsc --init
```
</p></details>
<details><summary>Initialize Jasmine</summary><p>

```
$ npx jasmine init // generates 'spec/support/jasmine.mjs'
```
</p></details>

- - -

## License
Copyright (c) 2025 Heini Fagerlund. Licensed under the [MIT License](https://github.com/hfagerlund/bucket-list-app/blob/main/LICENSE).

<!-- References -->
[http-server]: https://github.com/http-party/http-server
[Jasmine]: https://jasmine.github.io/
[JSDOM]: https://github.com/jsdom/jsdom
[Node.js]: https://nodejs.org/en
[TS execution engine]: https://typestrong.org/ts-node/
[TypeScript]: https://www.typescriptlang.org/
[(TypeScript type) definitions]: https://github.com/DefinitelyTyped/DefinitelyTyped


<!-- All copyrights for the above remain with their respective owners. -->
