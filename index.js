#!/usr/bin/env node
const complimenter = require('./build/Release/addon'); // Path to your addon
const { Command } = require('commander');
const program = new Command();

program
  .name('complimentinator')
  .description('A CLI to deliver overly enthusiastic compliments.')
  .version('1.0.0');

program.action(() => {
  console.log(complimenter.getCompliment());
});

program.parse();