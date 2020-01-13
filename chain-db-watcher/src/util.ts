
import dotenv from 'dotenv';
// import { RawParam, RawParamValue } from '../types';
// import { TypeDef, TypeDefInfo } from '@polkadot/types/types';
// import { isUndefined } from '@polkadot/util';
import fetch from 'node-fetch';

dotenv.config();

// export const createValue = (param: { type: TypeDef }): RawParam => {
// 	const value = getInitValue(param.type);

// 	return {
// 		isValid: !isUndefined(value),
// 		value
// 	};
// };

// export const getInitValue = (def: TypeDef): RawParamValue | RawParamValue[] => {
// 	if (def.info === TypeDefInfo.Vec) {
// 		return [getInitValue(def.sub as TypeDef)];
// 	} else if (def.info === TypeDefInfo.Tuple) {
// 		return Array.isArray(def.sub)
// 			? def.sub.map((def): any => getInitValue(def))
// 			: [];
// 	} else if (def.info === TypeDefInfo.Struct) {
// 		return Array.isArray(def.sub)
// 			? def.sub.reduce((result, def): Record<string, RawParamValue | RawParamValue[]> => {
// 				result[def.name as string] = getInitValue(def);

// 				return result;
// 			}, {} as unknown as Record<string, RawParamValue | RawParamValue[]>)
// 			: {};
// 	} else if (def.info === TypeDefInfo.Enum) {
// 		return Array.isArray(def.sub)
// 			? { [def.sub[0].name as string]: getInitValue(def.sub[0]) }
// 			: {};
// 	}
// };

// FIXME This is dumb and fetches the token every single time.
export const getToken = async () => {

	const credentials = JSON.stringify({
		'username':process.env.USERNAME,
		'password':process.env.PASSWORD
	});

	const url = process.env.AUTH_SERVER_LOGIN_URL;

	if (!url) {
		throw new Error('Auth server url not set in env.');
	}

	const token = await fetch(url, {
		method: 'post',
		body:    credentials,
		headers: { 'Content-Type': 'application/json' }
	})
		.then(res => res.json())
		.then(json => json.token)
		.catch(e => {throw new Error('Couldn\'t fetch the token' + e);});

	return token;
};
