#!/usr/bin/env node
import { Command } from 'commander';
import getFormat from '../index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format (default "stylish")')
  .action((filepath1, filepath2) => {
    const outputFormat = program.opts().format;
    console.log(getFormat(filepath1, filepath2, outputFormat));
  });

program.parse(process.argv);
