import * as React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Wow from './Wow';

Enzyme.configure({ adapter: new Adapter() });
it('shallow renders without crashing', () => {
  shallow(<Wow />);
});
