export default class HomeService {
	constructor($http){
		this.defaultValue = $http({url: '/app/mocks/default.json', method: 'GET'});
	}

	getDefaultValue() {
		return this.defaultValue.then((response) => response.data.inputDefaultValue);
	}
}
