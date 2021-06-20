# Weather App

## Table of content

* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Building](#building)

## General info 

A small app that fetches weather from weatherstack API and displays it. Also includes buttons for history and local weather

## Technologies 

Project is created with:
* HTML5, CSS3, JS, 
* webpack: 5.38.1,
* webpack-cli: 4.7.2,
* copy-webpack-plugin: 9.0.0,
* eslint: 7.28.0,
* file-loader: 6.2.0,
* html-webpack-plugin: 5.3.1,
* npm: 6.14.10,
* style-loader: 2.0.0,
* webp-loader: 0.6.0,
* webpack-dev-server: 3.11.2,
* webpack-merge: 5.8.0

## Setup
To run this project, you need to make sure you have `package.json`

Then in your console run: 
```
$ npm install
```

To run ESlint scan just run 

```
$ npm run lint
```
To run ESlint scan and fix:

```
$ npm run lint:fix
```
## Building

To build a developer version run:

```
$ npm run build:dev
```
It now will be stored in the `dev` folder

You can also use webpack's dev server by running: 

```
$ npm run watch
```
Note: only works with dev build of the project

To build a production version use:

```
$ npm run build:prod
```
Production version will be stored in a `prod` folder
