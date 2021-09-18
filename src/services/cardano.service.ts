// import * as CardanocliJs from 'cardanocli-js'
import CardanocliJs from 'cardanocli-js';
import { config } from '../config';
import path from 'path';

const shelleyGenesisPath = path.join(
    process.cwd(),
    config.shelleyGenesisFile
  );

const cardanocliJs = new CardanocliJs({ shelleyGenesisPath, network: config.cardanoNetworkMagic, })

class CardanoService {
    public static queryTip() {
        return cardanocliJs.queryTip()
    }

}

export default CardanoService