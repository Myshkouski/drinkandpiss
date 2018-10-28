import dotenv from 'dotenv'

dotenv.config()

export const ENDPOINT_WATERPOINTS = process.env.ENDPOINT_WATERPOINTS || null
export const ROUTER_BASE = process.env.ROUTER_BASE || ''
