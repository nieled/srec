import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './userList.html';
import { Users } from '../../../api/users';

class UserList {
	constructor($scope, $reactive) {
		'ngInject';

		$reactive(this).attach($scope);

		this.helpers({
			users() {
				return Users.find({});
			}
		});
	}
}

const name = 'userList';

// create a module
export default angular.module(name, [
	angularMeteor,
]).component(name, {
	template,
	controllerAs: name,
	controller: UserList
});