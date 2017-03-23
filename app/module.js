import angular from 'angular';
import angularRouter from 'angular-ui-router';

import Router from './router';

import FormDirective from './directives/inputForm/InputFormDirective.js';

import HomeService from './services/home/HomeService.js';

import HomeController from './controllers/home/HomeController.js';

angular.module('angular-es6', ['ui.router'])

	.config(Router)

	.directive('inputForm', () => new FormDirective())

	.service('HomeService', HomeService)

	.controller('homeCtrl', HomeController);
