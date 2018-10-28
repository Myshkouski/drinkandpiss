export function locate() {
	const {
		map
	} = this

	map.locate({
		enableHighAccuracy: true
	}).once('locationfound', event => {
		this.location = [
			event.latlng.lat,
			event.latlng.lng
		]

		this.zoom = 16
		this.viewCenter = this.location
	}).once('locationerror', async event => {
		try {
			const geoip = await fetch('http://api.petabyet.com/geoip/')

			const {
				latitude,
				longitude
			} = await geoip.json()

			this.viewCenter = this.location = [
				latitude,
				longitude
			]
		} catch (error) {
			alert(error)
		}
	})
}

export function _createMarker(latlng, options) {
	const Leaflet = require('leaflet')

	const marker = new Leaflet.Marker(latlng, options)
	marker.on('click', event => {
		this.viewCenter = this.about = [...latlng]
		this.$store.commit('ui/setActiveUIElement', 'description')
	}).addTo(this.map)

	return marker
}

export function _activateDescriptionUIElement() {
	this.$store.commit('ui/setActiveUIElement', 'description')
}

export function _centerMap(latlng) {
	this.$nextTick(() => {
		this.map.invalidateSize(true)
		this.map.setView(latlng, this.zoom)
	})
}

export function _setLocationMarker() {
	if (!this.locationMarker) {
		const Leaflet = require('leaflet')

		const locationIcon = new Leaflet.Icon({
			iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
			iconSize: [50, 50],
			// iconAnchor: [20, 20],
			// popupAnchor: [-3, -76],
			// shadowUrl: 'my-icon-shadow.png',
			// shadowSize: [68, 95],
			// shadowAnchor: [22, 94]
		})

		this.locationMarker = new Leaflet.Marker(this.location, {
			icon: locationIcon
		}).addTo(this.map)
	}

	this.locationMarker.setLatLng(this.location)
}
