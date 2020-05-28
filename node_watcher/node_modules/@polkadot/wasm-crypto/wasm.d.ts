/* tslint:disable */
/**
* Perform a derivation on a secret
*
* * secret: UIntArray with 64 bytes
* * cc: UIntArray with 32 bytes
*
* returned vector the derived keypair as a array of 96 bytes
* @param {Uint8Array} arg0 
* @param {Uint8Array} arg1 
* @returns {Uint8Array} 
*/
export function ext_sr_derive_keypair_hard(arg0: Uint8Array, arg1: Uint8Array): Uint8Array;
/**
* Perform a derivation on a secret
*
* * secret: UIntArray with 64 bytes
* * cc: UIntArray with 32 bytes
*
* returned vector the derived keypair as a array of 96 bytes
* @param {Uint8Array} arg0 
* @param {Uint8Array} arg1 
* @returns {Uint8Array} 
*/
export function ext_sr_derive_keypair_soft(arg0: Uint8Array, arg1: Uint8Array): Uint8Array;
/**
* Perform a derivation on a publicKey
*
* * pubkey: UIntArray with 32 bytes
* * cc: UIntArray with 32 bytes
*
* returned vector is the derived publicKey as a array of 32 bytes
* @param {Uint8Array} arg0 
* @param {Uint8Array} arg1 
* @returns {Uint8Array} 
*/
export function ext_sr_derive_public_soft(arg0: Uint8Array, arg1: Uint8Array): Uint8Array;
/**
* Generate a key pair.
*
* * seed: UIntArray with 32 element
*
* returned vector is the concatenation of first the private key (64 bytes)
* followed by the public key (32) bytes.
* @param {Uint8Array} arg0 
* @returns {Uint8Array} 
*/
export function ext_sr_from_seed(arg0: Uint8Array): Uint8Array;
/**
* Sign a message
*
* The combination of both public and private key must be provided.
* This is effectively equivalent to a keypair.
*
* * public: UIntArray with 32 element
* * private: UIntArray with 64 element
* * message: Arbitrary length UIntArray
*
* * returned vector is the signature consisting of 64 bytes.
* @param {Uint8Array} arg0 
* @param {Uint8Array} arg1 
* @param {Uint8Array} arg2 
* @returns {Uint8Array} 
*/
export function ext_sr_sign(arg0: Uint8Array, arg1: Uint8Array, arg2: Uint8Array): Uint8Array;
/**
* Verify a message and its corresponding against a public key;
*
* * signature: UIntArray with 64 element
* * message: Arbitrary length UIntArray
* * pubkey: UIntArray with 32 element
* @param {Uint8Array} arg0 
* @param {Uint8Array} arg1 
* @param {Uint8Array} arg2 
* @returns {boolean} 
*/
export function ext_sr_verify(arg0: Uint8Array, arg1: Uint8Array, arg2: Uint8Array): boolean;
/**
* blake2b hash for the specified input
*
* * data: Arbitrary data to be hashed
* * key: Key to add to the hashing (normally empty)
* * size: Size in bytes of the resulting output
*
* Returns a vector with the hash result
* @param {Uint8Array} arg0 
* @param {Uint8Array} arg1 
* @param {number} arg2 
* @returns {Uint8Array} 
*/
export function ext_blake2b(arg0: Uint8Array, arg1: Uint8Array, arg2: number): Uint8Array;
/**
* Create a keccak256 hash for the specified input
*
*
* Returns the hash as a vector
* @param {Uint8Array} arg0 
* @returns {Uint8Array} 
*/
export function ext_keccak256(arg0: Uint8Array): Uint8Array;
/**
* pbkdf2 hash from an input, salt for the number of specified rounds
*
* * data: Arbitrary data to be hashed
* * salt: Salt for this hash
* * rounds: The number of rounds to perform
*
* Returns a vecor with the hash result
* @param {Uint8Array} arg0 
* @param {Uint8Array} arg1 
* @param {number} arg2 
* @returns {Uint8Array} 
*/
export function ext_pbkdf2(arg0: Uint8Array, arg1: Uint8Array, arg2: number): Uint8Array;
/**
* sha512 hash for the specified input
*
* * data: Arbitrary data to be hashed
*
* Returns a vecor with the hash result
* @param {Uint8Array} arg0 
* @returns {Uint8Array} 
*/
export function ext_sha512(arg0: Uint8Array): Uint8Array;
/**
* twox hash for the specified input and rounds
*
* * data: Arbitrary data to be hashed
* * rounds: Number of 8-byte rounds to add to the output
*
* Returns a vecor with the hash result
* @param {Uint8Array} arg0 
* @param {number} arg1 
* @returns {Uint8Array} 
*/
export function ext_twox(arg0: Uint8Array, arg1: number): Uint8Array;
/**
* Generate a bip39 phrase
*
* words: number of words, either 12, 15, 18 21 or 24
*
* Returns the bip 39 phrase
* @param {number} arg0 
* @returns {string} 
*/
export function ext_bip39_generate(arg0: number): string;
/**
* Create entropy from a bip39 phrase
*
* * phrase: mnemonic phrase
*
* Returns the entropy
* @param {string} arg0 
* @returns {Uint8Array} 
*/
export function ext_bip39_to_entropy(arg0: string): Uint8Array;
/**
* Create a mini-secret from a bip39 phrase
*
* * phrase: mnemonic phrase
*
* Returns the 32-byte mini-secret via entropy
* @param {string} arg0 
* @param {string} arg1 
* @returns {Uint8Array} 
*/
export function ext_bip39_to_mini_secret(arg0: string, arg1: string): Uint8Array;
/**
* Creates a see from a bip-39 phrase
*
* @phrase: mnemonic phrase
*
* Returns a 32-byte seed
* @param {string} arg0 
* @param {string} arg1 
* @returns {Uint8Array} 
*/
export function ext_bip39_to_seed(arg0: string, arg1: string): Uint8Array;
/**
* Validates a bip39 phrase
*
* * phrase: mnemonic phrase
*
* Returns the true/false
* @param {string} arg0 
* @returns {boolean} 
*/
export function ext_bip39_validate(arg0: string): boolean;
/**
* Generate a key pair.
*
* * seed: UIntArray with 32 element
*
* returned vector is the concatenation of first the private key (64 bytes)
* followed by the public key (32) bytes.
* @param {Uint8Array} arg0 
* @returns {Uint8Array} 
*/
export function ext_ed_from_seed(arg0: Uint8Array): Uint8Array;
/**
* Sign a message
*
* The combination of both public and private key must be provided.
* This is effectively equivalent to a keypair.
*
* * public: UIntArray with 32 element
* * private: UIntArray with 64 element
* * message: Arbitrary length UIntArray
*
* * returned vector is the signature consisting of 64 bytes.
* @param {Uint8Array} arg0 
* @param {Uint8Array} arg1 
* @param {Uint8Array} arg2 
* @returns {Uint8Array} 
*/
export function ext_ed_sign(arg0: Uint8Array, arg1: Uint8Array, arg2: Uint8Array): Uint8Array;
/**
* Verify a message and its corresponding against a public key;
*
* * signature: UIntArray with 64 element
* * message: Arbitrary length UIntArray
* * pubkey: UIntArray with 32 element
* @param {Uint8Array} arg0 
* @param {Uint8Array} arg1 
* @param {Uint8Array} arg2 
* @returns {boolean} 
*/
export function ext_ed_verify(arg0: Uint8Array, arg1: Uint8Array, arg2: Uint8Array): boolean;

export function isReady(): boolean;
export function waitReady(): Promise<boolean>;

