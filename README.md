[![Actions Status](https://github.com/bm-Storage/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/bm-Storage/frontend-project-46/actions)
[![Node CI](https://github.com/bm-Storage/frontend-project-46/actions/workflows/genDiffTest.yml/badge.svg)](https://github.com/bm-Storage/frontend-project-46/actions/workflows/genDiffTest.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/4b3922ddba549e5159a6/maintainability)](https://codeclimate.com/github/bm-Storage/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4b3922ddba549e5159a6/test_coverage)](https://codeclimate.com/github/bm-Storage/frontend-project-46/test_coverage)

## Difference calculator
"
A "difference calculator" is a program that determines the difference between two data structures.

Supports different input formats: yaml, json.
Generating a report in the form of plain, stylish and json.

### System requirements

```bash
npm

node.js v20.16.0
```

### Installation

```bash

git clone git@github.com:bm-Storage/frontend-project-46.git

make install

npm link
```

### Stylish format (default)

```bash

gendiff filepath1.json filepath2.json

or 

gendiff -f stylish filepath1.json filepath2.json
```

[![Stylish-demo](https://asciinema.org/a/z2SDMap8IgF92mhrI7r3c7Duz.png)](https://asciinema.org/a/z2SDMap8IgF92mhrI7r3c7Duz)

### Plain format

```bash

gendiff -f plain filepath1.json filepath2.json
```


