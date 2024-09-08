#!/usr/bin/env node
import { program } from "commander";


export default program
  .description('Compares two configuration files and shows a difference')
  .version('1.0.0')
  .argument('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')

program.parse(process.argv);

