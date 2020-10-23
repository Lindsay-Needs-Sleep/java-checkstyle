#!/usr/bin/env node

(function () {
    'use strict';

    var argv = require('yargs');
    var check = require('../src/index');

    var args = argv
        .usage('Usage: $0 [-c path to config file] <dirs or files to check, space deliminated>')
        .demandCommand(1, 'Missing dir or file to check')
        .describe('c', 'path to the config file')
        .argv;

    check.runJavaCheck(args._, args.c);
}());
