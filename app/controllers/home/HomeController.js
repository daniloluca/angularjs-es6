import BaseController from '../BaseController.js';

export default class HomeController extends BaseController {
	constructor($scope, HomeService) {
		super();

		HomeService.getDefaultValue().then((defaultValue) => {
			$scope.content = defaultValue;
		});
	}

	static getTemplateUrl() {
		return 'app/controllers/home/home.html';
	}
}
