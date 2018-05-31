"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = express_1.Router();
exports.route = route;
let teachers = [
    { name: 'Prateek' },
    { name: 'Arnav' }
];
route.get('/', (req, res) => {
    res.send(teachers);
});
route.get('/:id', (req, res) => {
    res.send(teachers[parseInt(req.params.id)].name);
});
//# sourceMappingURL=teacher.js.map