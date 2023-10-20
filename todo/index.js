'use strict'
const tasks = []

/**
 * タスクを追加する
 * @param {string} taskName
 */
function add(taskName) {
    tasks.push({ name: taskName, isDone: false})
}

/**
 * タスク名と完了したかどうかの真偽値が含まれるオブジェクトを受け取り、完了したかを返す
 * @param {object} task
 * @returns {boolean} 完了したかどうか
 */
function isDone(task) {
    return task.isDone
}

/**
* タスク名と完了したかどうかの真偽値が含まれるオブジェクトを受け取り、完了していないかを返す
* @param {object} task
* @return {boolean} 完了していないかどうか
*/
function isNotDone(task) {
    return !task.isDone
}

/**
 * タスク一覧を取得する
 * @returns {array}
 */
function list() {
    return tasks
        // .filter(task => isNotDone(task)) と同じ意味
        .filter(isNotDone)
        .map(task => task.name)
}

/**
 * タスクを完了状態にする
 * @param {string} taskName
 */
function done(taskName) {
    const indexFound = tasks.findIndex(task => task.name === taskName)
    if (indexFound !== -1) {
        tasks[indexFound].isDone = true
    }
}

/**
 * 完了済みタスクの一覧を取得する
 * @returns {array}
 * 
 */
function donelist() {
    return tasks
        .filter(isDone)
        .map(task => task.name)
}

/**
 * 項目を削除する
 * @param {string} taskName
 */
function del(taskName) {
    const indexFound = tasks.findIndex(task => task.name === taskName)
    if (indexFound !== -1) {
        tasks.splice(indexFound, 1)
    }
}

/**
 * 17の倍数である場合 true を返す
 * @param {number} num
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0
}


module.exports = {
    add,
    list,
    done,
    donelist,
    del,
    isMultipleOfSeventeen
}