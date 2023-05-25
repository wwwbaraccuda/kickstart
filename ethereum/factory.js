import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xcF08B45516942F0134e918AcD1D4a2D30AD1a673'
);

export default instance;
