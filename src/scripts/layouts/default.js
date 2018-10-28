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
