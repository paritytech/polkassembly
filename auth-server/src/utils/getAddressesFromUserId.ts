import Address from '../model/Address';

/**
 * Get Addresses from userId
 */
export default async (userId: number): Promise<Address[]> => {
	const addresses = await Address
		.query()
		.where('user_id', userId);

	return addresses;
};

