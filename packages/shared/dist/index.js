"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
const add = (a, b, c) => {
    return a + b + (c || 0) + Math.random();
};
exports.add = add;
