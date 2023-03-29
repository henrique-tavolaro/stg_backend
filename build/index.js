"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("./main/config/env");
const app_1 = __importDefault(require("./main/server/config/app"));
const port = Number(env_1.env.PORT);
app_1.default.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});
