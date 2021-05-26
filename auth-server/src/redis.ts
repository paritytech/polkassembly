// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import * as redis from 'redis';

if (!process.env.REDIS_URL) {
	throw new Error('REDIS_URL is not set');
}

export const client = redis.createClient(process.env.REDIS_URL);

/**
 * get from redis
 *
 * @param key string
 *
 * @returns values string
 */
export const redisGet = (key: string): Promise<string> => new Promise((resolve, reject) => {
	client.get(key, (err: Error | null, value: string) => {
		if (err) {
			return reject(err);
		}

		resolve(value);
	});
});

/**
 * set key-value in redis
 *
 * @param key string
 * @param value string
 */
export const redisSet = (key: string, value: string): Promise<string> => new Promise((resolve, reject) => {
	client.set(key, value, (err: Error | null, reply: string) => {
		if (err) {
			return reject(err);
		}

		resolve(reply);
	});
});

/**
 * set key-value in redis with ttl(expiry in seconds)
 *
 * @param key string
 * @param ttl number in seconds
 * @param value string
 */
export const redisSetex = (key: string, ttl: number, value: string): Promise<string> => new Promise((resolve, reject) => {
	client.setex(key, ttl, value, (err: Error | null, reply: string) => {
		if (err) {
			return reject(err);
		}

		resolve(reply);
	});
});

/**
 * delete key from redis
 *
 * @param key string
 */
export const redisDel = (key: string): Promise<number> => new Promise((resolve, reject) => {
	client.del(key, (err, reply) => {
		if (err) {
			return reject(err);
		}

		resolve(reply);
	});
});
