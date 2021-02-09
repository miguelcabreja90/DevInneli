import api from '../config/api'

export default {
  fetchShops () {
    return api.get('shop')
  },
  getShopData (data) {
    return api.post('shop/data', data)
  },
  sendCreateRequest (shop) {
    return api.post('shop', shop)
  },
  sendUpdateRequest (shop) {
    return api.put('shop/' + shop.id, shop)
  },
  sendDeleteRequest (shopId) {
    return api.remove('shop/' + shopId)
  }
}
