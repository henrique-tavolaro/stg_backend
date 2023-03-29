"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adapterRoute = void 0;
const adapterRoute = (controller) => {
    return async (req, res) => {
        res.set('Content-type', 'application/Json');
        console.log('REQUEST', req);
        const response = await controller.handle(req);
        return res.status(response?.statusCode).json(response?.data);
    };
};
exports.adapterRoute = adapterRoute;
