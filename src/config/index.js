import {
  resolve
} from 'path'

import * as env from './_env'

export default {
  hooks: {
    listen(server, options) {
      console.log('')
      require('qrcode-terminal').generate(`http://${options.host}:${options.port}`)
    }
  },
  srcDir: resolve(__dirname, '..'),
  build: {
    ...require('./_build')
  },
  env: {
    ...env
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
  css: [
    '~/styles/global.sass'
  ],
  router: {
    base: env.ROUTER_BASE
  },
  head: {
    ...require('./_head')
  }
}
