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
		const generatedComponent = [];
		req.body.forEach((element) => {
			const componentName = pascalCase(element.name);
			const componentPath = GENERATED_PATH + componentName;

			const previewPath = GENERATED_PATH + "Preview.js";
			fs.writeFileSync(
				componentPath + ".js",
				generateComponentTemplate(element)
			);
			fs.writeFileSync(previewPath, generatePreviewTemplate(componentName));
			generatedComponent.push({ componentPath, componentName });
		});

		res.status(200).json({
			message: "Component generated successfully",
			generatedComponent,
		});
	} catch (error) {
		return res.status(400).json({ errors: error });
	}
});

module.exports = router;
