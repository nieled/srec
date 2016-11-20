import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

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
				console.log(Ratings.find({}).fetch());
				return Ratings.find({});
			}
		});
	}
}

const name = 'ratingsList';

// create a module
export default angular.module(name, [
	angularMeteor,
	uiRouter,
	RatingAdd,
	RatingRemove
]).component(name, {
	template,
	controllerAs: name,
	controller: RatingsList
})
	.config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('ratings', {
      url: '/ratings',
      template: '<ratings-list></ratings-list>'
    });
}