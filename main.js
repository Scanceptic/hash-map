function HashMap() {
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
		this[hashedKey] = value;
		// grow buckets size if needed
	}

	function get(key) {
		// hash key
		const hashedKey = hash(key);
		// return hashedKey value
		const value = this[hashedKey];
		if (value === undefined) {
			return null;
		} else {
			return value;
		}
	}

	function has(key) {}

	function remove(key) {}

	function length() {}

	function clear() {}

	function keys() {}

	function values() {}

	function entries() {}

	return {
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

const test = HashMap();
