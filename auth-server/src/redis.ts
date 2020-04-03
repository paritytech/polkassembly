// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import * as redis from 'redis';

export const client = redis.createClient({
	host: process.env.REDIS_HOST,
	port: Number(process.env.REDIS_PORT)
});

/**
 * get from redis
 *
 * @param key string
 *
 * @returns values string
 */
export const redisGet = (key: string): Promise<string> => new Promise((resolve, reject) => {
	client.get(key, (err, value) => {
		if (err) {
			return reject(err);
		}

		resolve(value);
	});
});

/**
 * set value in redis
 *
 * @param key string
 * @param value string
 */
export const redisSet = (key: string, value: string): Promise<string> => new Promise((resolve, reject) => {
	client.set(key, value, (err, reply) => {
		if (err) {
			return reject(err);
		}

		resolve(reply);
	});
});

/**
 * set value in redis with ttl(expiry in seconds)
 *
 * @param key string
 * @param ttl number in seconds
 * @param value string
 */
export const redisSetex = (key: string, ttl: number, value: string): Promise<string> => new Promise((resolve, reject) => {
	client.setex(key, ttl, value, (err, reply) => {
		if (err) {
			return reject(err);
		}

		resolve(reply);
	});
});

