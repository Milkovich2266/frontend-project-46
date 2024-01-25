install:
	npm si
gendiff:
	node gendiff.js
publish: 
	npm publish --dry-run
lint:
	npx eslint .
