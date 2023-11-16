#!/usr/bin/env node

const { program } = import('commander');

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-V, --version', 'output the version number')
  

  program.parse();