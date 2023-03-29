"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
function errorMiddleware(err, _request, res, _next) {
    console.log("Erro: ", err);
    const statusCode = err.statusCode ?? 500;
    const message = err.statusCode ? err.message : 'Erro interno do servidor';
    return res.status(statusCode).json({ message });
}
exports.errorMiddleware = errorMiddleware;
