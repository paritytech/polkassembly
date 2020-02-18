export default (balance: string) => {
	const result = parseInt(balance, 10);

	return isNaN(result) ? 0 : Math.floor(result/1000000000000);
};
