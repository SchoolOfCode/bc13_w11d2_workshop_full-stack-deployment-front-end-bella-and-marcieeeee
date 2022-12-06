import React from 'react';
import { render } from '@testing-library/react';

import ListItem from './index';

const testProps = {
  name: 'banana',
};

test('The ListItem component will display the name of a list item.', () => {
  const { getByText } = render(<ListItem name={testProps.name} />);
  const actual = getByText('banana');

  expect(actual).toBeInTheDocument();
});
