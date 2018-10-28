import {
	localStorageMarkerKey
} from '~/config/dict'

export const state = () => {
	return {
		locationMarker: null,
		fetchedMarkers: [],
		localMarkers: []
	}
}

export const getters = {
	markers(state) {
		return [
			...state.localMarkers,
			...state.fetchedMarkers
		]
	}
}

export const mutations = {
	addLocalMarkers(state, localMarkers) {
		state.localMarkers = [...localMarkers]

		if(process.browser) {
			window.localStorage.setItem(localStorageMarkerKey, JSON.stringify(localMarkers))
		}
	},

	addFetchedMarkers(state, fetchedMarkers) {
		state.fetchedMarkers = [...fetchedMarkers]
	}
}
