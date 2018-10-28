export const state = () => {
	return {
		activeUIElement: null
	}
}

export const getters = {
	isMenuActive(state) {
		return state.activeUIElement === 'menu'
	},

	isDescriptionActive(state) {
		return state.activeUIElement === 'description'
	}
}

export const mutations = {
	setActiveUIElement(state, value) {
		state.activeUIElement = value
	}
}
