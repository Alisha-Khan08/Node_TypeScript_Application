import { Request, Response, NextFunction } from 'express';

export const get404 = async (req: Request, res: Response, next: NextFunction) => {
        res.status(404).json({ message: "404!! Not Found"});
};

/* istanbul ignore next */
export const get500 = async (err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: "Request not found"});
};

