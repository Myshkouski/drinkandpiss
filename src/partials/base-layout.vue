<template lang="pug">
div
  header
    div.menu
      MenuComponent(:hide="hiddenMenu")
      div.menu-icon(@click.stop.prevent="toggleMenu")
    slot(name="header-elements")
  main
    slot
  footer
</template>

<script>
export default {
	components: {
		MenuComponent: require('~/partials/menu').default
	},

	data() {
		return {
			hiddenMenu: true
		}
	},

	methods: {
		toggleMenu() {
			this.hiddenMenu = !this.hiddenMenu
			this.$store.commit('ui/setActiveUIElement', this.hiddenMenu ? null : 'menu')
		}
	}
}
</script>

<style lang="sass" src="~/styles/partials/base-layout"></style>
