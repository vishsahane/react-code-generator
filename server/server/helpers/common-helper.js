/** @format */

module.exports = {
	pascalCase: (str, splitting = " ") => {
		return str
			.split(splitting)
			.map((e) => e[0].toUpperCase() + e.slice(1).toLowerCase())
			.join("");
	},
	camelCase: (str, splitting = " ") => {
		return str
			.split(splitting)
			.map((e, i) => {
				return i === 0 ? e : e[0].toUpperCase() + e.slice(1).toLowerCase();
			})
			.join("");
	},
	comparingTwoValues: (actualValue, expectedValue) => {
		return actualValue === expectedValue;
	}
};
