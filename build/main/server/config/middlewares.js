"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = require("../middlewares/cors");
const error_middleware_1 = require("../middlewares/error-middleware");
const morgan_1 = require("../middlewares/morgan");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("../../../swagger.json"));
exports.default = (app) => {
    app.use(cors_1.cors);
    app.use(morgan_1.morganMiddleware);
    app.use(error_middleware_1.errorMiddleware);
    app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
};
