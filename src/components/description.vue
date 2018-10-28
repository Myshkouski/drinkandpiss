<template lang="pug">
div._
	div.content-wrapper
		div.close-wrapper
			p.close-button(@click="hideDescription") Close
		p(v-if="description") {{description.display_name}}
</template>

<script>
import {
	mapGetters
} from 'vuex'

export default {
	props: {
		location: {}
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
			if (this.location) {
				const fetched = await fetch(`https://nominatim.osm.org/reverse?format=json&lat=${this.location[0]}&lon=${this.location[1]}`)
				this.description = await fetched.json()
			}
		},

		hideDescription() {
			this.$store.commit('ui/setActiveUIElement', null)
		}
	}
}
</script>

<style lang="sass" scoped>
	.content-wrapper
		padding: 1rem

	.close-wrapper
		text-align: right

	.close-button
		margin: 0
		display: inline-block
		color: #f55
</style>
