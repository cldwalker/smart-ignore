## Description

smart-ignore is a Light Table plugin that updates your file.ignore-pattern based on your current folders
and their .gitignores. Updating file.ignore-pattern means no more noise in your file opener or workspace.

## Install

Install this plugin with LT's plugin manager or clone this project to your LT plugins directory.

## Usage

Since smart-ignore works by hooking into LT's events, there isn't any explicit usage.
However, if you'd like to update file.ignore-pattern based on your current workspace, one command
is provided. Search for "smart-ignore" in commands.

## Bugs/Issues

Please report them [on github](http://github.com/cldwalker/smart-ignore/issues).

## Contributions

[See here](http://tagaholic.me/contributing.html) for contributing guidelines.

## TODO
* When a folder is removed, update ignore-pattern to remove unique files in that files .gitignore.
  This will require tracking ignore-regexs per folder.
* Add tests
