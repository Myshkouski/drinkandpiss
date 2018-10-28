<template lang="pug" src="~/templates/partials/description.pug"></template>

<script>
import {
	mapGetters
} from 'vuex'

export default {
	props: {
		marker: null
	},

	data() {
		return {
			description: null
		}
	},

	watch: {
		location(newValue, prevValue) {
			let changed = false

			if (!prevValue) {
				changed = true
			} else {
				for (const index in newValue) {
					if (newValue[index] !== prevValue[index]) {
						changed = true
						break
					}
				}
			}

			if (changed) {
				this.fetchDescription()
			}
		},

		showDescriptionUIElement(value) {
			if (!value) {
				this.description = null
			} else {
				this.fetchDescription()
			}
		}
	},

	computed: {
		...mapGetters({
			showDescriptionUIElement: 'ui/isDescriptionActive'
		})
	},

	mounted() {
		this.fetchDescription()
	},

	methods: {
		async fetchDescription() {
			if (this.marker) {
				const location = this.marker.geo
				const description = await fetch(`https://nominatim.osm.org/reverse?format=json&lat=${location[0]}&lon=${location[1]}`)
				this.description = await description.json()
			}
		},

		hideDescription() {
			this.$store.commit('ui/setActiveUIElement', null)
		}
	}
}
</script>

<style lang="sass" src="~/styles/partials/description" scoped></style>
