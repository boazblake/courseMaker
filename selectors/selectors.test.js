import expect from 'expect';
import authorsFormattedForDropDown from './authorSelectors'

describe('Author Selectors', () => {
  descrive('authorsFormattedForDropDown', () => {
    it('should return author data formatted for use in a drop down', () => {
      const authors =[
      {id: 'boaz-blake', firstName: 'Boaz', LastName: 'Blake'},
      {id: 'megan-vasquez', firstName: 'Megan', LastName: 'Vasquez'},
      ];

      const expected = [
        {value: 'boaz-blake' , text: 'Boaz Blake' },
        {value: 'megan-vasquez' , text: 'Megan Vasquez' }
      ];

      expect(authorsFormattedForDropDown(authors)).toEqual(expected)
    });
  });
});