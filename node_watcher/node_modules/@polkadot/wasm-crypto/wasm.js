const crypto = require('crypto'); let wasm; const requires = { crypto };

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

let WASM_VECTOR_LEN = 0;

function passArray8ToWasm(arg) {
    const ptr = wasm.__wbindgen_malloc(arg.length * 1);
    getUint8Memory().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function getArrayU8FromWasm(ptr, len) {
    return getUint8Memory().subarray(ptr / 1, ptr / 1 + len);
}

let cachedGlobalArgumentPtr = null;
function globalArgumentPtr() {
    if (cachedGlobalArgumentPtr === null) {
        cachedGlobalArgumentPtr = wasm.__wbindgen_global_argument_ptr();
    }
    return cachedGlobalArgumentPtr;
}

let cachegetUint32Memory = null;
function getUint32Memory() {
    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory;
}
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
module.exports.ext_sr_derive_keypair_hard = function(arg0, arg1) {
    const ptr0 = passArray8ToWasm(arg0);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm(arg1);
    const len1 = WASM_VECTOR_LEN;
    const retptr = globalArgumentPtr();
    try {
        wasm.ext_sr_derive_keypair_hard(retptr, ptr0, len0, ptr1, len1);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getArrayU8FromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;


    } finally {
        wasm.__wbindgen_free(ptr0, len0 * 1);
        wasm.__wbindgen_free(ptr1, len1 * 1);

    }

};

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
module.exports.ext_sr_derive_keypair_soft = function(arg0, arg1) {
    const ptr0 = passArray8ToWasm(arg0);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm(arg1);
    const len1 = WASM_VECTOR_LEN;
    const retptr = globalArgumentPtr();
    try {
        wasm.ext_sr_derive_keypair_soft(retptr, ptr0, len0, ptr1, len1);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getArrayU8FromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;


    } finally {
        wasm.__wbindgen_free(ptr0, len0 * 1);
        wasm.__wbindgen_free(ptr1, len1 * 1);

    }

};

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
module.exports.ext_sr_derive_public_soft = function(arg0, arg1) {
    const ptr0 = passArray8ToWasm(arg0);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm(arg1);
    const len1 = WASM_VECTOR_LEN;
    const retptr = globalArgumentPtr();
    try {
        wasm.ext_sr_derive_public_soft(retptr, ptr0, len0, ptr1, len1);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getArrayU8FromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;


    } finally {
        wasm.__wbindgen_free(ptr0, len0 * 1);
        wasm.__wbindgen_free(ptr1, len1 * 1);

    }

};

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
module.exports.ext_sr_from_seed = function(arg0) {
    const ptr0 = passArray8ToWasm(arg0);
    const len0 = WASM_VECTOR_LEN;
    const retptr = globalArgumentPtr();
    try {
        wasm.ext_sr_from_seed(retptr, ptr0, len0);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getArrayU8FromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;


    } finally {
        wasm.__wbindgen_free(ptr0, len0 * 1);

    }

};

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
module.exports.ext_sr_sign = function(arg0, arg1, arg2) {
    const ptr0 = passArray8ToWasm(arg0);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm(arg1);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm(arg2);
    const len2 = WASM_VECTOR_LEN;
    const retptr = globalArgumentPtr();
    try {
        wasm.ext_sr_sign(retptr, ptr0, len0, ptr1, len1, ptr2, len2);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getArrayU8FromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;


    } finally {
        wasm.__wbindgen_free(ptr0, len0 * 1);
        wasm.__wbindgen_free(ptr1, len1 * 1);
        wasm.__wbindgen_free(ptr2, len2 * 1);

    }

};

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
module.exports.ext_sr_verify = function(arg0, arg1, arg2) {
    const ptr0 = passArray8ToWasm(arg0);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm(arg1);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm(arg2);
    const len2 = WASM_VECTOR_LEN;
    try {
        return (wasm.ext_sr_verify(ptr0, len0, ptr1, len1, ptr2, len2)) !== 0;

    } finally {
        wasm.__wbindgen_free(ptr0, len0 * 1);
        wasm.__wbindgen_free(ptr1, len1 * 1);
        wasm.__wbindgen_free(ptr2, len2 * 1);

    }

};

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
module.exports.ext_blake2b = function(arg0, arg1, arg2) {
    const ptr0 = passArray8ToWasm(arg0);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm(arg1);
    const len1 = WASM_VECTOR_LEN;
    const retptr = globalArgumentPtr();
    try {
        wasm.ext_blake2b(retptr, ptr0, len0, ptr1, len1, arg2);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getArrayU8FromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;


    } finally {
        wasm.__wbindgen_free(ptr0, len0 * 1);
        wasm.__wbindgen_free(ptr1, len1 * 1);

    }

};

/**
* Create a keccak256 hash for the specified input
*
*
* Returns the hash as a vector
* @param {Uint8Array} arg0
* @returns {Uint8Array}
*/
module.exports.ext_keccak256 = function(arg0) {
    const ptr0 = passArray8ToWasm(arg0);
    const len0 = WASM_VECTOR_LEN;
    const retptr = globalArgumentPtr();
    try {
        wasm.ext_keccak256(retptr, ptr0, len0);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getArrayU8FromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;


    } finally {
        wasm.__wbindgen_free(ptr0, len0 * 1);

    }

};

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
module.exports.ext_pbkdf2 = function(arg0, arg1, arg2) {
    const ptr0 = passArray8ToWasm(arg0);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm(arg1);
    const len1 = WASM_VECTOR_LEN;
    const retptr = globalArgumentPtr();
    try {
        wasm.ext_pbkdf2(retptr, ptr0, len0, ptr1, len1, arg2);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getArrayU8FromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;


    } finally {
        wasm.__wbindgen_free(ptr0, len0 * 1);
        wasm.__wbindgen_free(ptr1, len1 * 1);

    }

};

/**
* sha512 hash for the specified input
*
* * data: Arbitrary data to be hashed
*
* Returns a vecor with the hash result
* @param {Uint8Array} arg0
* @returns {Uint8Array}
*/
module.exports.ext_sha512 = function(arg0) {
    const ptr0 = passArray8ToWasm(arg0);
    const len0 = WASM_VECTOR_LEN;
    const retptr = globalArgumentPtr();
    try {
        wasm.ext_sha512(retptr, ptr0, len0);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getArrayU8FromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;


    } finally {
        wasm.__wbindgen_free(ptr0, len0 * 1);

    }

};

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
module.exports.ext_twox = function(arg0, arg1) {
    const ptr0 = passArray8ToWasm(arg0);
    const len0 = WASM_VECTOR_LEN;
    const retptr = globalArgumentPtr();
    try {
        wasm.ext_twox(retptr, ptr0, len0, arg1);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getArrayU8FromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;


    } finally {
        wasm.__wbindgen_free(ptr0, len0 * 1);

    }

};

const { u8aToString } = require('@polkadot/util');

// let cachedTextDecoder = new TextDecoder('utf-8');

function getStringFromWasm(ptr, len) {
    return u8aToString(getUint8Memory().subarray(ptr, ptr + len));
}
/**
* Generate a bip39 phrase
*
* words: number of words, either 12, 15, 18 21 or 24
*
* Returns the bip 39 phrase
* @param {number} arg0
* @returns {string}
*/
module.exports.ext_bip39_generate = function(arg0) {
    const retptr = globalArgumentPtr();
    wasm.ext_bip39_generate(retptr, arg0);
    const mem = getUint32Memory();
    const rustptr = mem[retptr / 4];
    const rustlen = mem[retptr / 4 + 1];

    const realRet = getStringFromWasm(rustptr, rustlen).slice();
    wasm.__wbindgen_free(rustptr, rustlen * 1);
    return realRet;

};

const { stringToU8a } = require('@polkadot/util');

// let cachedTextEncoder = new TextEncoder('utf-8');

let passStringToWasm;
if (typeof stringToU8aInto === 'function') {
    passStringToWasm = function(arg) {

        let size = arg.length;
        let ptr = wasm.__wbindgen_malloc(size);
        let writeOffset = 0;
        while (true) {
            const view = getUint8Memory().subarray(ptr + writeOffset, ptr + size);
            const { read, written } = stringToU8aInto(arg, view);
            arg = arg.substring(read);
            writeOffset += written;
            if (arg.length === 0) {
                break;
            }
            ptr = wasm.__wbindgen_realloc(ptr, size, size * 2);
            size *= 2;
        }
        WASM_VECTOR_LEN = writeOffset;
        return ptr;
    };
} else {
    passStringToWasm = function(arg) {

        const buf = stringToU8a(arg);
        const ptr = wasm.__wbindgen_malloc(buf.length);
        getUint8Memory().set(buf, ptr);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    };
}
/**
* Create entropy from a bip39 phrase
*
* * phrase: mnemonic phrase
*
* Returns the entropy
* @param {string} arg0
* @returns {Uint8Array}
*/
module.exports.ext_bip39_to_entropy = function(arg0) {
    const ptr0 = passStringToWasm(arg0);
    const len0 = WASM_VECTOR_LEN;
    const retptr = globalArgumentPtr();
    try {
        wasm.ext_bip39_to_entropy(retptr, ptr0, len0);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getArrayU8FromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;


    } finally {
        wasm.__wbindgen_free(ptr0, len0 * 1);

    }

};

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
module.exports.ext_bip39_to_mini_secret = function(arg0, arg1) {
    const ptr0 = passStringToWasm(arg0);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm(arg1);
    const len1 = WASM_VECTOR_LEN;
    const retptr = globalArgumentPtr();
    try {
        wasm.ext_bip39_to_mini_secret(retptr, ptr0, len0, ptr1, len1);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getArrayU8FromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;


    } finally {
        wasm.__wbindgen_free(ptr0, len0 * 1);
        wasm.__wbindgen_free(ptr1, len1 * 1);

    }

};

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
module.exports.ext_bip39_to_seed = function(arg0, arg1) {
    const ptr0 = passStringToWasm(arg0);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm(arg1);
    const len1 = WASM_VECTOR_LEN;
    const retptr = globalArgumentPtr();
    try {
        wasm.ext_bip39_to_seed(retptr, ptr0, len0, ptr1, len1);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getArrayU8FromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;


    } finally {
        wasm.__wbindgen_free(ptr0, len0 * 1);
        wasm.__wbindgen_free(ptr1, len1 * 1);

    }

};

/**
* Validates a bip39 phrase
*
* * phrase: mnemonic phrase
*
* Returns the true/false
* @param {string} arg0
* @returns {boolean}
*/
module.exports.ext_bip39_validate = function(arg0) {
    const ptr0 = passStringToWasm(arg0);
    const len0 = WASM_VECTOR_LEN;
    try {
        return (wasm.ext_bip39_validate(ptr0, len0)) !== 0;

    } finally {
        wasm.__wbindgen_free(ptr0, len0 * 1);

    }

};

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
module.exports.ext_ed_from_seed = function(arg0) {
    const ptr0 = passArray8ToWasm(arg0);
    const len0 = WASM_VECTOR_LEN;
    const retptr = globalArgumentPtr();
    try {
        wasm.ext_ed_from_seed(retptr, ptr0, len0);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getArrayU8FromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;


    } finally {
        wasm.__wbindgen_free(ptr0, len0 * 1);

    }

};

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
module.exports.ext_ed_sign = function(arg0, arg1, arg2) {
    const ptr0 = passArray8ToWasm(arg0);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm(arg1);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm(arg2);
    const len2 = WASM_VECTOR_LEN;
    const retptr = globalArgumentPtr();
    try {
        wasm.ext_ed_sign(retptr, ptr0, len0, ptr1, len1, ptr2, len2);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getArrayU8FromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;


    } finally {
        wasm.__wbindgen_free(ptr0, len0 * 1);
        wasm.__wbindgen_free(ptr1, len1 * 1);
        wasm.__wbindgen_free(ptr2, len2 * 1);

    }

};

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
module.exports.ext_ed_verify = function(arg0, arg1, arg2) {
    const ptr0 = passArray8ToWasm(arg0);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm(arg1);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm(arg2);
    const len2 = WASM_VECTOR_LEN;
    try {
        return (wasm.ext_ed_verify(ptr0, len0, ptr1, len1, ptr2, len2)) !== 0;

    } finally {
        wasm.__wbindgen_free(ptr0, len0 * 1);
        wasm.__wbindgen_free(ptr1, len1 * 1);
        wasm.__wbindgen_free(ptr2, len2 * 1);

    }

};

const heap = new Array(32);

heap.fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

module.exports.__wbg_new_3a746f2619705add = function(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    return addHeapObject(new Function(varg0));
};

function getObject(idx) { return heap[idx]; }

module.exports.__wbg_call_f54d3a6dadb199ca = function(arg0, arg1) {
    return addHeapObject(getObject(arg0).call(getObject(arg1)));
};

module.exports.__wbg_self_ac379e780a0d8b94 = function(arg0) {
    return addHeapObject(getObject(arg0).self);
};

module.exports.__wbg_crypto_1e4302b85d4f64a2 = function(arg0) {
    return addHeapObject(getObject(arg0).crypto);
};

module.exports.__wbg_getRandomValues_1b4ba144162a5c9e = function(arg0) {
    return addHeapObject(getObject(arg0).getRandomValues);
};

module.exports.__wbg_getRandomValues_1ef11e888e5228e9 = function(arg0, arg1, arg2) {
    let varg1 = getArrayU8FromWasm(arg1, arg2);
    getObject(arg0).getRandomValues(varg1);
};

module.exports.__wbg_require_6461b1e9a0d7c34a = function(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    return addHeapObject(requires[varg0]);
};

module.exports.__wbg_randomFillSync_1b52c8482374c55b = function(arg0, arg1, arg2) {
    let varg1 = getArrayU8FromWasm(arg1, arg2);
    getObject(arg0).randomFillSync(varg1);
};

module.exports.__wbindgen_is_undefined = function(i) { return getObject(i) === undefined ? 1 : 0; };

module.exports.__wbindgen_jsval_eq = function(a, b) { return getObject(a) === getObject(b) ? 1 : 0; };

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

module.exports.__wbindgen_object_drop_ref = function(i) { dropObject(i); };

// wasm = require('./wasm_bg');


module.exports.abort = function () { throw new Error('abort'); };

const createPromise = require('./wasm_promise');
const wasmPromise = createPromise().catch(() => null);

module.exports.isReady = function () { return !!wasm; }
module.exports.waitReady = function () { return wasmPromise.then(() => !!wasm); }

wasmPromise.then((_wasm) => { wasm = _wasm });

