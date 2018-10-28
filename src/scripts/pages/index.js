import debounce from 'lodash/debounce'
import {
	mapState,
	mapGetters
} from 'vuex'

export default {
	data() {
		return {
			viewCenter: [53, 26],
			location: null,
			zoom: 5,
			map: null,
			about: null
		}
	},

	components: {
		DescriptionComponent: require('~/components/description').default
	},

	// async fetch({
	// 	store
	// }) {
	// 	let waterpoints
	//
	// 	try {
	// 		waterpoints = await fetch('http://localhost:8080/waterpoints')
	// 	} catch (error) {
	// 		waterpoints = []
	// 	}
	//
	// 	store.dispatch('markers/addFetched', waterpoints)
	// },

	watch: {
		location: '_setLocationMarker',
		viewCenter: '_centerMap',

		activeUIElement() {
			this.$nextTick(() => {
				this.map.invalidateSize(true)
			})
		}
	},

	computed: {
		...mapGetters({
			showDescriptionUIElement: 'ui/isDescriptionActive',
			markers: 'markers/markers'
		}),

		...mapState({
			activeUIElement: state => state.ui.activeUIElement
		})
	},

	methods: {
		...require('./_methods')
	},

	// beforeDestroy() {
	//   window.removeEventListener('resize', this._handleWindowResizeEvent)
	// },

	mounted: require('./_mounted').default
}
