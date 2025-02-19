import { NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class AuthcheckMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        if(req.headers.Authorization) next();
        throw new UnauthorizedException();
    }
}