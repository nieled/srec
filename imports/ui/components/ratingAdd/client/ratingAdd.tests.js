import { name as RatingAdd } from '../ratingAdd';
import { Ratings } from '../../../../api/ratings';
import 'angular-mocks';

describe('RatingAdd', () => {
	beforeEach(() => {
		window.module(RatingAdd);
	});

	describe('controller', () => {
		let controller;
		const rating = {
			UserID: 6,
			MovieID: 1,
			Rating: 4,
			Timestamp: 978300760 
		};

		beforeEach(() => {
			inject(($rootScope, $componentController) => {
				controller = $componentController(RatingAdd, {
					$scope: $rootScope.$new(true)
				});
			});
		});

		describe('reset()', () => {
			it('should clean up rating object', () => {
				controller.rating = rating;
				controller.reset();

				expect(controller.rating).toEqual({});
			});
		});

		describe('submit()', () => {
			beforeEach(() => {
				spyOn(Ratings, 'insert');
				spyOn(controller, 'reset').and.callThrough();

				controller.rating = rating;

				controller.submit();
			});

			it('should insert a new rating', () => {
				expect(Ratings.insert).toHaveBeenCalledWith(rating);
			});

			it('should call reset()', () => {
				expect(controller.reset).toHaveBeenCalled();
			});
		});
	});
});
