import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x8931Cb0e8DcfdE591F162FCFe459724bbC8f5727'
);

export default instance;