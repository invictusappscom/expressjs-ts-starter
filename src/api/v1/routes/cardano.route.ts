import express from 'express'
import CardanoService from '../../../services/cardano.service'

export class CardanoRoute {

    public static async mint(req: express.Request, res: express.Response) {
        res.status(200).json({
            message: CardanoService.queryTip(),
        })
    }
}