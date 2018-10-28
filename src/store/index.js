import Vue from 'vue'
import Vuex from 'vuex'

import {
	localStorageMarkerKey
} from '~/config/dict'

Vue.use(Vuex)

const plugins = [
	function initLocalStorage(store) {
		if (process.browser) {
			let localStorageMarkers = []

			try {
				localMarkers = JSON.parse(window.localStorage.getItem(localStorageMarkerKey))
			} catch (error) {
				window.localStorage.setItem(localStorageMarkerKey, localStorageMarkers)
			}

			store.commit('markers/addLocalMarkers', localStorageMarkers)
		}
	}
]

export {
	plugins
}
