import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './srec.html';
import { name as RatingsList } from '../ratingsList/ratingsList';
import { name as UserList } from '../userList/userList';

class Srec {}

const name = 'srec';

// create a module
export default angular.module(name, [
	angularMeteor,
	RatingsList,
	UserList
]).component(name, {
	template,
	controllerAs: name,
	controller: Srec
});