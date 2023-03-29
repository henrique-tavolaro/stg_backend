"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoose = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.mongoose = mongoose_1.default;
const env_1 = require("../config/env");
mongoose_1.default.set('strictQuery', true);
mongoose_1.default.connect(env_1.env.MONGO_URL);
mongoose_1.default.Promise = global.Promise;
