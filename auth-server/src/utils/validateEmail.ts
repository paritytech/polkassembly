// dumb edit to trigger CI
export default (email: string): boolean => {
	const regexp = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i

	return regexp.test(email)
}
