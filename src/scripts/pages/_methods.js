export function locate() {
	const {
		map
	} = this

	this.locating = true

	map.locate({
		enableHighAccuracy: true
	}).once('locationfound', event => {
		this.location = [
			event.latlng.lat,
			event.latlng.lng
		]

		this.zoom = 16
		this.viewCenter = this.location

		this.locating = false
	}).once('locationerror', async event => {
		try {
			const hostname = 'http://api.petabyet.com/geoip/'
			const geoip = await fetch(hostname)

			const {
				latitude,
				longitude
			} = await geoip.json()

			this.viewCenter = this.location = [
				latitude,
				longitude
			]
		} catch (error) {
			console.error('Cannot locate by IP address using ' + hostname)
			console.error(error)
		}

		this.locating = false
	})
}

export function _createMarker(marker, options) {
	const Leaflet = require('leaflet')

	const _marker = new Leaflet.Marker(marker.geo, options)
	_marker.on('click', event => {
		this.viewCenter = marker.geo
		this.selectedMarker = marker
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
