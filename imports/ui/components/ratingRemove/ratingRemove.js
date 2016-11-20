import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './ratingRemove.html';
import { Ratings } from '../../../api/ratings';

class RatingRemove {
	remove() {
		if (this.rating) {
			Ratings.remove(this.rating._id);
		}
	}
}

const name = 'ratingRemove';

//create a module
export default angular.module(name, [
	angularMeteor
]).component(name, {
	template,
	bindings: {
		party: '<'
	},
	controllerAs: name,
	controller: RatingRemove
});