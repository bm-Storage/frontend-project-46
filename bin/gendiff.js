#!/usr/bin/env node
import { Command } from 'commander';
import format from '../index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format (default "stylish")')
  .action((filepath1, filepath2) => {
    const diff = format(filepath1, filepath2);
    console.log(diff);
  });

program.parse(process.argv);
