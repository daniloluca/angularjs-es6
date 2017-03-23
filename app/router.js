// imports

export default function routerConfig ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');

	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'app/controllers/home/home.html',
		controller: 'homeCtrl'
	});
}
