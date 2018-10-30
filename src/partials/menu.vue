<template lang="pug">
transition(
	enter-class="hidden"
	leave-to-class="hidden"
	)
	div._(v-show="!hide")
		div.menu
			span(@click.stop.prevent="clearMarkers") Clear markers
			div.button.gradient-outline
				span Add point
</template>

<script>
import {
	localStorageMarkerKey
} from '~/config/dict'

export default {
	props: {
		hide: {
			type: Boolean,
			default: () => true
		}
	},

	methods: {
		clearMarkers() {
			window.localStorage.setItem(localStorageMarkerKey, '[]')
			this.$router.go()
		}
	}
}
</script>

<style lang="sass" scoped>
._
	position: fixed
	top: 0
	left: 0
	right: 0
	width: 720px
	height: 100%
	background-color: rgba(0, 0, 0, .5)
	z-index: 900
	transition: all .2s ease-out

	&.shown
		transform: translateX(0)
	&.hidden
		transform: translateX(-720px)

@media screen and (max-width: 720px)
	._
		max-width: 100%

.menu
  display: flex
  padding: 1.5rem
  padding: 4.5rem
  width: 100%
  min-height: 100%
  flex-flow: column-reverse
  justify-content: center
  align-items: center
  color: white
  position: relative
</style>
