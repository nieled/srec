import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './ratingAdd.html';
import { Ratings } from '../../../api/ratings';

class RatingAdd {
	constructor() {
		this.rating = {};
	}

	submit() {
		Ratings.insert(this.rating);
		this.reset();
		//console.log('submit:', this.rating);
	}

	reset() {
		this.rating = {};
	}
}

const name = 'ratingAdd';

// create a module
export default angular.module(name, [
	angularMeteor
]).component(name, {
	template,
	controllerAs: name,
	controller: RatingAdd
});