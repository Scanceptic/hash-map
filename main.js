function createHashMap() {
	const hashMap = {};
	function hash(key) {
		let hashCode = 0;

		const primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = primeNumber * hashCode + key.charCodeAt(i);
		}

		return hashCode;
	}

	function set(key, value) {
		// hash key
		const hashedKey = hash(key);
		// set hashedKey value
		this.hashMap[hashedKey] = value;
		// grow buckets size if needed
	}

	function get(key) {
		// hash key
		const hashedKey = hash(key);
		// return hashedKey value
		const value = this.hashMap[hashedKey];
		if (value === undefined) {
			return null;
		} else {
			return value;
		}
	}

	function has(key) {
		// hash key
		const hashedKey = hash(key);
		// return hashedKey value
		const value = this.hashMap[hashedKey];
		if (value === undefined) {
			return false;
		} else {
			return true;
		}
	}

	function remove(key) {
		// hash key
		const hashedKey = hash(key);
		// return hashedKey value
		const value = this.hashMap[hashedKey];
		if (value === undefined) {
			return false;
		} else {
			this.hashMap[hashedKey] = undefined;
			return true;
		}
	}

	function length() {
		// initialize length counter
		let counter = 0;
		// get every key within hashmap ("this")
		for (prop in this.hashMap) {
			// if type string (instead of type function) increment
			if (typeof prop === "string") {
				counter++;
			}
		}
		return counter;
	}

	function clear() {}

	function keys() {}

	function values() {}

	function entries() {}

	return {
		hashMap,
		hash,
		set,
		get,
		has,
		remove,
		length,
		clear,
		keys,
		values,
		entries,
	};
}

const test = createHashMap();
