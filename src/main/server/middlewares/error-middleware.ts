import { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors/api-errors";


export function errorMiddleware(
    err: Error & ApiError,
    _request: Request,
    res: Response,
    _next: NextFunction
) {
    console.log("Erro: ", err);
    
    const statusCode = err.statusCode ?? 500
    const message = err.statusCode ? err.message : 'Erro interno do servidor'
    return res.status(statusCode).json({ message })
}

