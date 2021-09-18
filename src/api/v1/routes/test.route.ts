import express from 'express'

export class TestRoute {

    public static async testPost(req: express.Request, res: express.Response) {
        res.status(200).json({
            message: req.body,
        })
    }
}