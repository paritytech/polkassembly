/**
 * Return an address encoded for the current network
 *
 * @param address An address
 *
 */

export default function() {

	const network = process.env.REACT_APP_NETWORK;

	if (!network){
		throw Error ('Please set the REACT_APP_NETWORK environment variable');
	}

	// FIXME this needs to be types
	if (network !== 'polkadot' && network !== 'kusama'){
		throw Error ('REACT_APP_NETWORK environment variable must be one of polkadot or kusama');
	}

	return process.env.REACT_APP_NETWORK;
}