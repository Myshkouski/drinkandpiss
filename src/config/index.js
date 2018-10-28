import {
	resolve
} from 'path'

export default {
	hooks: {
		listen(server, options) {
			console.log('')
			require('qrcode-terminal').generate(`http://${options.host}:${options.port}`)
			// console.log('Scan to open the app')
		}
  },
	srcDir: resolve(__dirname, '..'),
	build: {
		...require('./_build')
	},
	generate: {
		dir: 'docs',
		fallback: true,
		interval: 20
	},
	render: {
		http2: {
			push: true
		}
	},
	serverMiddleware: [
		// __dirname + '/api/cors'
	],
	router: {
		base: process.env.ROUTER_BASE || ''
	},
	head: {
		...require('./_head')
	}
}
