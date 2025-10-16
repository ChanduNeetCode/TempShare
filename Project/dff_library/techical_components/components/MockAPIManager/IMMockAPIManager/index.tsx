export default async function IMMockApiManager(fileName: string, url: string) {
  try {
    let mockResponse = '';
    const urlConv = url.toLowerCase();
    if (urlConv === '/allproducts-offers-paofferlist-fetch'.toLowerCase()) {
      mockResponse = require('../MockResponses/OffersAndRewards/paofferlistFetch.json');
    } else if (urlConv === '/allproducts-offers-list-fetch'.toLowerCase()) {
      mockResponse = require('../MockResponses/OffersAndRewards/allproductsOffersList.json');
    } else if (
      urlConv === '/allproducts-rewards-feewaiver-fetchs'.toLowerCase()
    ) {
      mockResponse = require('../MockResponses/OffersAndRewards/rewardsFeewaiver.json');
    } else if (urlConv === '/cards-dcmanagecard-list'.toLowerCase()) {
      mockResponse = require('../MockResponses/OffersAndRewards/dcmanagecardList.json');
    } else if (urlConv === '/cards-ccmanagecard-list'.toLowerCase()) {
      mockResponse = require('../MockResponses/OffersAndRewards/ccmanagecardList.json');
    }
    return mockResponse;
  } catch (err) {
    return err;
  }
}
