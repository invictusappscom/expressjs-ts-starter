import express from 'express';

export class StatusController {

    public static async status(req: express.Request, res: express.Response) {
        res.status(200).json({
            message: 'Server is alive.',
        });
    }
}