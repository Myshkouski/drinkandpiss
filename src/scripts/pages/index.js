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
			selectedMarker: null,
			locating: false
		}
	},

	components: {
		DescriptionComponent: require('~/partials/description').default
	},

	watch: {
		location: '_setLocationMarker',
		viewCenter: '_centerMap',

		activeUIElement() {
			this.$nextTick(() => {
				this.map.invalidateSize(true)
			})
		},

		markers() {
			this.markers.forEach(marker => {
				this._createMarker(marker, {
					icon: this._markerIcon
				})
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
