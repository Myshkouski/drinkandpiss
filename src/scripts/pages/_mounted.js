export default async function mounted() {
	const Leaflet = require('leaflet')

	// this._handleWindowResizeEvent()
	// window.addEventListener('resize', this._handleWindowResizeEvent)

	// this.markers = [...this.markers, ...localStorageMarkers]

	const map = new Leaflet.map(this.$refs.map, {
		zoomControl: false,
		attributionControl: false
	})

	this.map = map
	this.locationMarker = null

	map.setView(this.viewCenter, this.zoom)
	setImmediate(() => {
		this.locate()
	})

	const attribution = Leaflet.control.attribution({
		position: 'bottomright',
		prefix: 'Drink&Piss'
	}).addTo(map)

	let tileHostname
	tileHostname = 'http://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.jpg'
	// tileHostname = 'https://{s}.tile.osm.org/{z}/{x}/{y}.{ext}'
	tileHostname = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'

	const tileLayer1 = Leaflet.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}{r}.png', {
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
		subdomains: 'abcd',
		maxZoom: 19
	}).addTo(map)

	const tileLayer2 = Leaflet.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
		subdomains: 'abcd',
		maxZoom: 19
	})

	this._markerIcon = new Leaflet.Icon({
		iconUrl: '/img/water-drop.png',
		iconSize: [50, 50],
		// iconAnchor: [20, 20],
		// popupAnchor: [-3, -76],
		// shadowUrl: 'my-icon-shadow.png',
		// shadowSize: [68, 95],
		// shadowAnchor: [22, 94]
	})

	map.on('click', event => {
		const latlng = [
			event.latlng.lat,
			event.latlng.lng
		]

		this._createMarker({
			geo: latlng
		}, {
			icon: this._markerIcon
		})
	})

	let waterpoints

	try {
		const fetched = await fetch(process.env.ENDPOINT_WATERPOINTS)
		waterpoints = await fetched.json()
	} catch (error) {
		waterpoints = []
	}

	this.$store.commit('markers/addFetchedMarkers', waterpoints)
}
