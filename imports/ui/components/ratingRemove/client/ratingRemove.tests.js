import { name as RatingRemove } from '../ratingRemove';
import { Ratings } from '../../../../api/ratings';
import 'angular-mocks';
 
describe('RatingRemove', () => {
  beforeEach(() => {
    window.module(RatingRemove);
  });
 
  describe('controller', () => {
    let controller;
    const rating = {
      _id: 'ratingId'
    };
 
    beforeEach(() => {
      inject(($rootScope, $componentController) => {
        controller = $componentController(RatingRemove, {
          $scope: $rootScope.$new(true)
        }, {
          rating
        });
      });
    });
 
    describe('remove()', () => {
      beforeEach(() => {
        spyOn(Ratings, 'remove');
        controller.remove();
      });
 
      it('should remove a rating', () => {
        expect(Ratings.remove).toHaveBeenCalledWith(rating._id);
      });
    });
  });
});