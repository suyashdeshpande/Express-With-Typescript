"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const teacher_1 = require("./routes/teacher");
const students_1 = require("./routes/students");
const app = express();
app.get('/', (req, res) => {
    res.send("Hello World");
});
app.use('/students', students_1.route);
app.use('/teachers', teacher_1.route);
app.listen(1234, () => console.log("Server started at http://localhost:1234"));
//# sourceMappingURL=server.js.map