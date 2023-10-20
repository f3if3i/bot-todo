'use strict'
const todo = require('./index.js')
const assert = require('node:assert')

todo.add('ノートを買う')
todo.add('鉛筆を買う')
assert.deepStrictEqual(todo.list(), ['ノートを買う', '鉛筆を買う'])

todo.done('鉛筆を買う')
assert.deepStrictEqual(todo.list(), ['ノートを買う'])
assert.deepStrictEqual(todo.donelist(), ['鉛筆を買う'])

todo.del('ノートを買う')
todo.del('鉛筆を買う')
assert.deepStrictEqual(todo.list(), [])
assert.deepStrictEqual(todo.donelist(), [])

const num = 17 * 2
assert.strictEqual(todo.isMultipleOfSeventeen(num), true)
console.log('テストが正常に完了しました')

