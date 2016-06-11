import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

//Tests sync actions


describe('course Actions', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSES_SUCCESS action', () => {
      //arrange
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_COURSES_SUCCESS,
        course: course
      };

      //action
      const action = courseActions.createCourseSuccess(course);

      //assertion
      expect(action).toEqual(expectedAction)
    })
  })
})