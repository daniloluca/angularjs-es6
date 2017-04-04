export default function routerConfig ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');

	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'app/controllers/home/home.view.html',
		controller: 'HomeCtrl'
	});
}
