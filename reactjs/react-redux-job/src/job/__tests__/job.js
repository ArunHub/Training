import React from 'react';
import Job from './Job'
import Enzyme, { shallow, mount } from 'enzyme';

describe('Button', () => {
    it('should apply styles correctly', () => {
      const job = shallow(<Job />);
      expect(job.render()).toMatchSnapshot();
    })
})