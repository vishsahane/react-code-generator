const handlebarsInstance = require("handlebars");
const { pascalCase, comparingTwoValues } = require("./common-helper");

handlebarsInstance.registerHelper("pascalCase", (str) => {
	return pascalCase(str);
});

handlebarsInstance.registerHelper(
	"comparingTwoValues",
	(actualValue, expectedValue) => {
		return comparingTwoValues(actualValue, expectedValue);
	}
);

handlebarsInstance.registerHelper("styleObject", function (value) {
	return "{" + value + "}";
});

module.exports = handlebarsInstance;
