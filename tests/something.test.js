import React from 'react';
import renderer from 'react-test-renderer';

import something from '..\src\component\something.js';

describe('<something />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<something />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });