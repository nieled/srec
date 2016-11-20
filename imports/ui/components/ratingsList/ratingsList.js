import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './ratingsList.html';
import { Ratings } from '../../../api/ratings';
import { name as RatingAdd } from '../ratingAdd/ratingAdd';
import { name as RatingRemove } from '../ratingRemove/ratingRemove';

class RatingsList {
	constructor($scope, $reactive) {
		'ngInject';

		$reactive(this).attach($scope);

		this.helpers({
			ratings() {
				console.log(Ratings.find({}));
				return Ratings.find({});
			}
		});
	}
}

const name = 'ratingsList';

// create a module
export default angular.module(name, [
	angularMeteor,
	RatingAdd,
	RatingRemove
]).component(name, {
	template,
	controllerAs: name,
	controller: RatingsList
});