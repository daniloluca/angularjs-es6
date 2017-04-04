import angular from 'angular';
import angularRouter from 'angular-ui-router';

import Router from './router';

import Style from './main.css';

import HomeController from './controllers/home/home.controller.js';

import FormDirective from './directives/inputForm/inputForm.directive.js';

import HomeService from './services/home/home.service.js';

angular.module('angularjs-es6', ['ui.router'])

	.config(Router)

	.controller('HomeCtrl', HomeController)

	.directive('inputForm', FormDirective)

	.service('HomeService', HomeService);
