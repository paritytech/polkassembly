
/**
 * Returns an array of addresses or null
 *
 * @param pgArray A postgres encode array
 *
 * Examples:
 *
 * decodePostgresArray("{\"5Ev8deqBc5bXB2pq2C9RWCBXM1kuS6wjqbZJiSRTA8kLZfTu\",\"5ChscJFxEt9KWevt5aLV6SMGARFVyH8fz2LZKjGBHV7MgfDq\"}")
 * => [ "5Ev8deqBc5bXB2pq2C9RWCBXM1kuS6wjqbZJiSRTA8kLZfTu", "5ChscJFxEt9KWevt5aLV6SMGARFVyH8fz2LZKjGBHV7MgfDq" ]
 *
 * decodePostgresArray("{\"5Ev8deqBc5bXB2pq2C9RWCBXM1kuS6wjqbZJiSRTA8kLZfTu\"}")
 * => [ "5Ev8deqBc5bXB2pq2C9RWCBXM1kuS6wjqbZJiSRTA8kLZfTu" ]
 *
 * decodePostgresArray("{}")
 * => null
 */

export function decodePostgresArray(pgArray: string): string[] | null{
	const addressArray = pgArray.replace(/"|{|}/g, '');
	const addresses = addressArray.length > 1 ||  !!addressArray[0] ? addressArray.split(',') : null;
	return addresses;
}