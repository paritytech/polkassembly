export default (address: string) => {
	if (!address || address.length < 8) {
		return address;
	}

	return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
};
