/** @format */

const express = require("express");
const router = express.Router();
const fs = require("fs");

const {
	pascalCase,
	createFolder,
	writeToFile,
} = require("../../helpers/common-helper");
const {
	generateComponentTemplate,
} = require("./generate-component-handlebars-instance");
const {
	generatePreviewTemplate,
} = require("../generate-preview/generate-preview-handlebars-instance");
const { GENERATED_PATH } = require("../../helpers/constant");

router.post("/", (req, res) => {
	try {
		req.body.forEach((element) => {
			const componentName = pascalCase(element.name);
			const componentPath = GENERATED_PATH + componentName + ".js";
			// createFolder(generatedPath, componentName);
			// fs.mkdirSync(generatedPath + componentName, { recursive: true });
			const previewPath = GENERATED_PATH + componentName + "Preview" + ".js";
			fs.writeFileSync(componentPath, generateComponentTemplate(element));
			fs.writeFileSync(previewPath, generatePreviewTemplate(componentName));
		});

		res.send(`component js generated`);
	} catch (error) {
		return res.status(400).json({ errors: error });
	}
});

module.exports = router;
