/**
 * We build three flavors of Bitcoin Source API:
 * 
 *    1. 'common' - ES5 CommonJS build for use in node applications. Dependencies are external.
 *    2. 'esm' - ES6 imports build for use in other builds. Dependencies are external.
 *    3. 'browser' - ES5 build for use in a browser. Dependencies are bundled.
 * 
 * Each also has a minified version meant for distribution. We do not build sourcemaps. If
 * developers need them for debugging, they may turn them on with the sourcemap option which
 * must be enabled at the top level and in terser for minified builds.
 */

import babel from 'rollup-plugin-babel'
import builtins from 'rollup-plugin-node-builtins'
import commonjs from 'rollup-plugin-commonjs'
import flow from 'rollup-plugin-flow'
import globals from 'rollup-plugin-node-globals'
import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import pkg from './package.json'
import { terser } from 'rollup-plugin-terser'


// The text to appear at the top of the generated files.
const license = `/**
 * https://github.com/the-bitcoin-token/bitcoin-source-api
 * Copyright (c) 2019 Bitcoin Computer
 * Copyright (c) 2019 Clemens Ley
 * Copyright (c) 2019 Dave Foderick
 * Copyright (c) 2019 Brenton Gunning
 * Distributed under the MIT software license, see the accompanying
 * file LICENSE or http://www.opensource.org/licenses/mit-license.php.
 */`

// Disable circular dependency warnings in our library because they are allowed in ES6 and don't
// cause problems for us. The maintainer of Rollup does not plan to remove this warning. This is
// his recommendation. See: https://github.com/rollup/rollup/issues/2271
function onwarnHook(warning, rollupWarn) {
  // Imports from files are OK and do not cause problems
  const exceptions = [
    'node_modules/rollup-plugin-node-builtins/src/es6/readable-stream/duplex.js'
  ]

  if (exceptions.indexOf(warning.importer) === -1) {
    rollupWarn(warning)
  }
}

// Define the libraries that bitcoin-source-api is dependant on so that we don't bundle them
const nodeDependencies = []
const packageDependencies = Object.keys(pkg.dependencies)
const dependencies = nodeDependencies.concat(packageDependencies)

// Define our default babel plugin config
const babelPluginConfig = {
  // Prefer the config below over babelrc
  babelrc: false,
  presets: [
    // Disable converting modules because rollup will do this better
    ["@babel/preset-env", { targets: { esmodules: true } }],
  ]
}

// Define our babel plugin config when generating minified builds
const babelPluginMinifiedConfig = {
  // Prefer the config below over babelrc
  babelrc: false,
  presets: [
    // Disable converting modules because rollup will do this better
    ["@babel/preset-env", { targets: { esmodules: true } }],
    ["minify", {
      // Don't minify the built-in objects. This breaks for some reason.
      builtIns: false,
      // Our terser will mangle names and this breaks for some reason
      mangle: false
    }]
  ]
}

const common = {
  input: 'src/index.js',
  output: {
    file: `dist/${pkg.name}.common.js`,
    format: 'cjs',
    banner: license
  },
  external: dependencies,
  onwarn: onwarnHook,
  plugins: [
    flow(),
    json(),
    resolve(),
    babel(babelPluginConfig)
  ]
}

const commonMin = {
  input: 'src/index.js',
  output: {
    file: `dist/${pkg.name}.common.min.js`,
    format: 'cjs',
    banner: license,
    compact: true
  },
  external: dependencies,
  onwarn: onwarnHook,
  plugins: [
    flow(),
    json(),
    resolve(),
    babel(babelPluginMinifiedConfig),
    terser()
  ]
}

const esm = {
  input: 'src/index.js',
  output: {
    file: `dist/${pkg.name}.esm.js`,
    format: 'es',
    banner: license
  },
  external: dependencies,
  onwarn: onwarnHook,
  plugins: [
    flow(),
    json(),
    resolve(),
    babel(babelPluginConfig)
  ]
}

const esmMin = {
  input: 'src/index.js',
  output: {
    file: `dist/${pkg.name}.esm.min.js`,
    format: 'es',
    banner: license,
    compact: true
  },
  external: dependencies,
  onwarn: onwarnHook,
  plugins: [
    flow(),
    json(),
    resolve(),
    babel(babelPluginMinifiedConfig),
    terser()
  ]
}

const browser = {
  input: 'src/index.js',
  output: {
    file: `dist/${pkg.name}.browser.js`,
    format: 'iife',
    name: 'BitcoinSourceApi',
    banner: license
  },
  onwarn: onwarnHook,
  plugins: [
    flow(),
    json(),
    commonjs({ preferBuiltins: true }),
    resolve({ browser: true, preferBuiltins: true }),
    globals(),
    builtins(),
    babel(babelPluginConfig)
  ]
}

const browserMin = {
  input: 'src/index.js',
  output: {
    file: `dist/${pkg.name}.browser.min.js`,
    format: 'iife',
    name: 'BitcoinSourceApi',
    banner: license,
    compact: true
  },
  onwarn: onwarnHook,
  plugins: [
    flow(),
    json(),
    commonjs({ preferBuiltins: true }),
    resolve({ browser: true, preferBuiltins: true }),
    globals(),
    builtins(),
    babel(babelPluginMinifiedConfig),
    terser()
  ]
}

export default [common, commonMin, esm, esmMin, browser, browserMin]
