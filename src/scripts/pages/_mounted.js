export default function mounted() {
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
		prefix: 'Drink&Peace'
	}).addTo(map)

	const tileLayer = Leaflet.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.{ext}', {
		attribution: 'Powered by OpenStreetMaps',
		ext: 'png'
	}).addTo(map)

	const markerIcon = new Leaflet.Icon({
		iconUrl: '/img/water-drop.png',
		iconSize: [50, 50],
		// iconAnchor: [20, 20],
		// popupAnchor: [-3, -76],
		// shadowUrl: 'my-icon-shadow.png',
		// shadowSize: [68, 95],
		// shadowAnchor: [22, 94]
	})

	this.markers.forEach(latlng => {
		this._createMarker(latlng, {
			icon: markerIcon
		})
	})

	map.on('click', event => {
		const latlng = [
			event.latlng.lat,
			event.latlng.lng
		]

		this._createMarker(latlng, {
			icon: markerIcon
		})

		// const popup = L.popup({
		// 	// className: 'popup'
		// })

		// popup.setContent('<p>Hello world!<br />This is a nice popup.</p>')

		// marker.bindPopup(popup).openPopup()
	})
}
