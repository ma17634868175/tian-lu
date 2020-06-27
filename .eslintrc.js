/*
 * @Author: marx
 * @Date: 2020-06-27 21:56:50
 * @LastEditTime: 2020-06-27 21:59:34
 * @Description: 组件描述
 * @FilePath: /tian-lu/.eslintrc.js
 */

module.exports = {
    root: true,
    env: {
        node: true
    },
    // extends: ["plugin:vue/essential", "@vue/prettier"],//这里面的@vue/prettier去掉
    extends: ["plugin:vue/essential"],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    },
    parserOptions: {
        // parser: "babel-eslint"
    }
};