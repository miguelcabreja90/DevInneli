import supplier from '../../api/supplier'
import data from '../../data'

const FETCHING_SUPPLIERS = 'FETCHING_SUPPLIERS'
const SWITCH_SUPPLIER_NEW_MODAL = 'SWITCH_SUPPLIER_NEW_MODAL'
const SWITCH_SUPPLIER_EDIT_MODAL = 'SWITCH_SUPPLIER_EDIT_MODAL'
const SWITCH_SUPPLIER_SHOW_MODAL = 'SWITCH_SUPPLIER_SHOW_MODAL'
const SUPPLIER_CREATED = 'SUPPLIER_CREATED'
const SUPPLIER_EDIT = 'SUPPLIER_EDIT'
const SUPPLIER_UPDATED = 'SUPPLIER_UPDATED'
const SUPPLIER_DELETE = 'SUPPLIER_DELETE'
const SUPPLIER_TABLE_LOADING = 'SUPPLIER_TABLE_LOADING'
const FAILED_SUPPLIER = 'FAILED_SUPPLIER'
const ENV_DATA_PROCESS = 'ENV_DATA_PROCESS'
const SET_EDIT_SUPPLIER = 'SET_EDIT_SUPPLIER'
const SET_SUPPLIER_AVATAR = 'SET_SUPPLIER_AVATAR'

const state = {
  showNewModal: false,
  showEditModal: false,
  showShowModal: false,
  suppliers: [],
  avatar: '',
  loading: false,
  saved: false,
  newSupplier: {
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    phone: '',
    avatar: '',
    country: '',
    province: '',
    barCode: '',
    description: ''
  },
  editSupplier: {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    phone: '',
    avatar: '',
    country: '',
    province: '',
    barCode: '',
    description: ''
  },
  isSupplierTableLoading: false,
  isActionInProgress: false,
  isTableLoading: false
}

const mutations = {
  [SWITCH_SUPPLIER_NEW_MODAL] (state, showModal) {
    state.showNewModal = showModal
  },
  [SWITCH_SUPPLIER_EDIT_MODAL] (state, showModal) {
    state.showEditModal = showModal
  },
  [SWITCH_SUPPLIER_SHOW_MODAL] (state, showModal) {
    state.showShowModal = showModal
  },
  [SUPPLIER_TABLE_LOADING] (state, isLoading) {
    state.isTableLoading = isLoading
  },
  [FETCHING_SUPPLIERS] (state, suppliers) {
    suppliers.map((value) => {
      Object.keys(data.countries).map((key) => {
        if (key === value.country) {
          value.nameCountry = data.countries[key].name + '(' + data.countries[key].native + ')'
          value.countryFlag = data.countries[key].emoji
        }
      })
    })

    state.suppliers = suppliers
  },
  [ENV_DATA_PROCESS] (state, isActionInProgress) {
    state.isActionInProgress = isActionInProgress
  },
  [SUPPLIER_CREATED] (state) {
    state.showNewModal = false
    state.newSupplier = {
      firstName: '',
      lastName: '',
      email: '',
      city: '',
      phone: '',
      avatar: '',
      country: '',
      province: '',
      barCode: '',
      description: ''
    }
    state.saved = true
    this._vm.$Toast.fire({
      icon: 'success',
      title: this._vm.$language.t(
        '$vuetify.messages.success_add', [this._vm.$language.t('$vuetify.menu.supplier')]
      )
    })
  },
  [SUPPLIER_EDIT] (state, supplierId) {
    state.editSupplier = Object.assign({}, state.suppliers
      .filter(node => node.id === supplierId)
      .shift()
    )
  },
  [SUPPLIER_UPDATED] (state) {
    state.showEditModal = false
    state.editSupplier = {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      city: '',
      phone: '',
      avatar: '',
      country: '',
      province: '',
      barCode: '',
      description: ''
    }
    state.saved = true
    this._vm.$Toast.fire({
      icon: 'success',
      title: this._vm.$language.t(
        '$vuetify.messages.success_up', [this._vm.$language.t('$vuetify.menu.supplier')]
      )
    })
  },
  [SET_EDIT_SUPPLIER] (state, profile) {
    state.editSupplier.push(profile)
  },
  [SUPPLIER_DELETE] (state) {
    state.saved = true
    this._vm.$Toast.fire({
      icon: 'success',
      title: this._vm.$language.t(
        '$vuetify.messages.success_del', [this._vm.$language.t('$vuetify.menu.supplier')]
      )
    })
  },
  [SET_SUPPLIER_AVATAR] (state, avatar) {
    state.avatar = avatar
    state.saved = true
  },
  [FAILED_SUPPLIER] (state, error) {
    state.saved = false
    state.error = error
    this._vm.$Toast.fire({
      icon: 'error',
      title: this._vm.$language.t(
        '$vuetify.messages.failed_catch', [this._vm.$language.t('$vuetify.menu.supplier')]
      )
    })
  }
}

const getters = {}

const actions = {
  toogleNewModal ({ commit }, showModal) {
    commit(SWITCH_SUPPLIER_NEW_MODAL, showModal)
  },
  toogleEditModal ({ commit }, showModal) {
    commit(SWITCH_SUPPLIER_EDIT_MODAL, showModal)
  },
  toogleShowModal ({ commit }, showModal) {
    commit(SWITCH_SUPPLIER_SHOW_MODAL, showModal)
  },
  openEditModal ({ commit }, supplierId) {
    commit(SWITCH_SUPPLIER_EDIT_MODAL, true)
    commit(SUPPLIER_EDIT, supplierId)
  },
  openShowModal ({ commit }, supplierId) {
    commit(SWITCH_SUPPLIER_SHOW_MODAL, true)
    commit(SUPPLIER_EDIT, supplierId)
  },
  async getSuppliers ({ commit }) {
    commit(SUPPLIER_TABLE_LOADING, true)
    // noinspection JSUnresolvedVariable
    await supplier
      .fetchSuppliers()
      .then(({ data }) => {
        commit(FETCHING_SUPPLIERS, data.data)
        commit(SUPPLIER_TABLE_LOADING, false)
      }).catch((error) => commit(FAILED_SUPPLIER, error))
  },
  async createSupplier ({ commit, dispatch }, newSupplier) {
    commit(ENV_DATA_PROCESS, true)

    await supplier
      .sendCreateRequest(newSupplier)
      .then(() => {
        commit(SUPPLIER_CREATED)
        commit(ENV_DATA_PROCESS, false)
        dispatch('supplier/getSuppliers', null, { root: true })
      })
      .catch((error) => commit(FAILED_SUPPLIER, error))
  },
  async updateSupplier ({ commit, dispatch }, editSupplier) {
    await supplier
      .sendUpdateRequest(editSupplier)
      .then(() => {
        commit(SUPPLIER_UPDATED)
        commit(ENV_DATA_PROCESS, false)
        dispatch('supplier/getSuppliers', null, { root: true })
      })
      .catch((error) => commit(FAILED_SUPPLIER, error))
  },
  async deleteSupplier ({ commit, dispatch }, supplierId) {
    await supplier
      .sendDeleteRequest(supplierId)
      .then(() => {
        commit(SUPPLIER_DELETE)
        dispatch('supplier/getSuppliers', null, { root: true })
      })
      .catch((error) => commit(FAILED_SUPPLIER, error))
  },

  async updateAvatar ({ commit, dispatch }, file) {
    const image = `data:${file.file.type};base64,${file.file.base64}`
    const sendData = {
      id: file.id,
      image: image
    }
    await supplier.updateAvatar(sendData).then(() => {
      commit(SET_SUPPLIER_AVATAR, file.file.base64)
      dispatch('auth/getSupplierData', null, { root: true })
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
