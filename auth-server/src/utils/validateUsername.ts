export default (username: string): boolean => {
	const regexp = /^[A-Za-z0-9._-]{3,20}$/;

	return regexp.test(username);
};
