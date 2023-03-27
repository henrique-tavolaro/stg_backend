import { Request, Response } from "express";
import { Controller } from "../../presentation/protocols/controller";


export const adapterRoute = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        res.set('Content-type', 'application/Json')

        console.log('REQUEST', req);


        const response = await controller.handle(req);

        return res.status(response?.statusCode!).json(response?.data)
    }
}