"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middlewares_1 = __importDefault(require("./middlewares"));
const routes_1 = __importDefault(require("../routes/routes"));
require("express-async-errors");
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, routes_1.default)(app);
(0, middlewares_1.default)(app);
exports.default = app;
