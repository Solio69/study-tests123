
// Знакомимся с модулем `assert` и его основными функциями

// Такой необычный импорт связан с тем,
// что assert, экспортируемый по умолчанию, считается устаревшим
// Правильно использовать strict
import { strict as assert } from 'assert';
import { capitalize } from '../src/capitalize.js';

// Проверка сменилась с отрицательной на положительную
// assert(capitalize('') === '');
// assert(capitalize('hello') === 'Hello');


// Проверка сменилась с отрицательной на положительную
assert.equal(capitalize(''), '');

// Первый параметр actual – то, что пришло
// Второй параметр expected – то, что ожидает тест
// Правильный порядок аргументов имеет большое значение при анализе ошибки

assert.equal(capitalize('hello'), 'Hello');
assert.equal(capitalize('hello'), 'hello'); // err