export const parallel = true
export const publicPath = process.env.PUBLIC_PATH || '/_nuxt/'
export function extend(config, {
	isClient
}) {
	const mainFields = ['module', 'main']
	if (isClient) {
		mainFields.unshift('browser')
	}
	config.resolve.mainFields = mainFields

	const additionalExtensions = ['.pug', '.sass']
	const extensions = config.resolve.extensions
	additionalExtensions.forEach(ext => {
		if (!~extensions.indexOf(ext)) {
			extensions.push(ext)
		}
	})
}
