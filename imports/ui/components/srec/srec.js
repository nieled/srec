import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './srec.html';
import { name as RatingsList } from '../ratingsList/ratingsList';
import { name as UserList } from '../userList/userList';
import { name as RatingDetails } from '../ratingDetails/ratingDetails';
import { name as Navigation } from '../navigation/navigation';

class Srec {}

const name = 'srec';

// create a module
export default angular.module(name, [
	angularMeteor,
	uiRouter,
	RatingsList,
	UserList,
	RatingDetails,
	Navigation
]).component(name, {
	template,
	controllerAs: name,
	controller: Srec
})
	.config(config);

function config($locationProvider, $urlRouterProvider) {
  'ngInject';
 
  $locationProvider.html5Mode(true);
 
  $urlRouterProvider.otherwise('/ratings');
}