publish:
	 npm publish --dry-run

install:
	npm ci

make lint:
	npx eslint .

make test: 
	NODE_OPTIONS=--experimental-vm-modules npx jest