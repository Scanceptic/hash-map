function createHashMap() {
	const hashMap = {};
	function hash(key) {
		console.log("Hash...");
		let hashCode = 0;

		const primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = primeNumber * hashCode + key.charCodeAt(i);
		}

		return hashCode;
	}

	function set(key, value) {
		console.log("Set...");
		// hash key
		const hashedKey = hash(key);
		// set hashedKey value
		this.hashMap[hashedKey] = value;
		// grow buckets size if needed
	}

	function get(key) {
		console.log("Get...");
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
		console.log("Has...");
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
		console.log("Remove...");
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
		console.log("Length...");
		// initialize length counter
		let counter = 0;
		// loop every key within hashmap ("this")
		for (prop in this.hashMap) {
			// increment
			counter++;
		}
		return counter;
	}

	function clear() {
		console.log("Clear...");
		// clear hashmap
		this.hashMap = {};
	}

	function keys() {
		console.log("Keys...");
		// create array
		const keyArray = [];
		// loop every key in hashmap
		for (prop in this.hashMap) {
			//push key to array
			keyArray.push(prop);
		}
		return keyArray;
	}

	function values() {
		console.log("Values...");
		// create array
		const valueArray = [];
		// loop every prop in hashmap
		for (prop in this.hashMap) {
			// push hashMap[key] (=value) to array
			valueArray.push(this.hashMap[prop]);
		}
		return valueArray;
	}

	function entries() {
		console.log("Entries...");
		// create array
		const pairArray = [];
		// loop every prop in hashmap
		for (prop in this.hashMap) {
			// push [key, value] to array
			pairArray.push([prop, this.hashMap[prop]]);
		}
		return pairArray;
	}

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
