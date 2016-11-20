import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
 
import template from './ratingDetails.html';
 
class RatingDetails {
  constructor($stateParams) {
    'ngInject';
 
    this.ratingId = $stateParams.ratingId;
  }
}
 
const name = 'ratingDetails';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
]).component(name, {
  template,
  controllerAs: name,
  controller: RatingDetails
})
	.config(config);

function config($stateProvider) {
	'ngInject';

	$stateProvider.state('ratingDetails', {
		url: '/ratings/:ratingId',
		template: '<rating-details></rating-details>'
	});
}