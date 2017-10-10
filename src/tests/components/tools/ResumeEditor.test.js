import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
Enzyme.configure({adapter: new Adapter()});

import {ResumeEditor} from '../../../components/tools/ResumeEditor';

describe('<ResumeEditor />', () => {
  describe('should render without crashing', () => {
    it('renders without crashing', () => {
      shallow(<ResumeEditor />);
    });
  });
});