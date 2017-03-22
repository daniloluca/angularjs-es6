import angular from 'angular';
import angularRoute from 'angular-ui-router';

import Router from './router';

angular.module('angular-es6', ['ui.router'])

	.config(Router);
