"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.morganMiddleware = void 0;
const morgan_1 = __importDefault(require("morgan"));
const cli_color_1 = __importDefault(require("cli-color"));
exports.morganMiddleware = (0, morgan_1.default)((tokens, req, res) => {
    const date = new Date().toISOString();
    return [
        cli_color_1.default.greenBright(date),
        "-",
        cli_color_1.default.green(tokens.method(req, res)),
        cli_color_1.default.yellow(tokens.url(req, res)),
        "-",
        cli_color_1.default.cyan(tokens.status(req, res)),
        cli_color_1.default.magenta(`${tokens["response-time"](req, res)} ms \n`),
    ].join(" ");
}, {
    stream: {
        write: (message) => {
            console.log(message.replace(/\n/gi, ""));
        },
    },
});
