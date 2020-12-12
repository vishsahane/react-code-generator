const express = require("express");
const router = express.Router();
const fs = require("fs");

const {
	pascalCase
} = require("../../helpers/common-helper");
const {
	generateComponentTemplate,
} = require("./generate-component-handlebars-instance");
const {
	generatePreviewTemplate,
} = require("../generate-preview/generate-preview-handlebars-instance");
const { GENERATED_PATH } = require("../../../generate-path");

router.post("/", (req, res) => {
	try {
		const generatedComponent = [];
		req.body.pages.forEach((element, index) => {
			const componentName = pascalCase(element.name);
			const componentPath = GENERATED_PATH;

			if (!fs.existsSync(componentPath)) {
				fs.mkdirSync(componentPath, { recursive: true });
			}
			
			fs.writeFileSync(
				componentPath + componentName + ".js",
				generateComponentTemplate(element)
			);
			if (index == req.body.selectedPageIndex) {
				fs.writeFileSync(
					componentPath + "Preview.js",
					generatePreviewTemplate(componentName)
				);
			}

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
