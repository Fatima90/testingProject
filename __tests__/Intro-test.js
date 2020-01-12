import 'react-native';
import React from 'react';
import App from '../App';
import { Example } from '../Example';
import renderer from 'react-test-renderer';
import { render, fireEvent, wait } from '@testing-library/react-native';

// creating snapshots
// test('renders correctly', () => {
//     const tree = renderer.create(<App />).toJSON();
//     expect(tree).toMatchSnapshot();
// })

test('test example of the counter', () => {
    const { getByText, baseElement, getByTestId, queryByTestId, debug } = render(<Example />);
    const results =render( <Example/> );
    // debug()
})

test(' example of some things', async () => {
    const { getByTestId, getByText, queryByTestId, baseElement, queryAllByA11yRole } = render(<Example />);
    const textSample = 'Fatema Hammami';

    const input= getByTestId('input');
    fireEvent.changeText(input, textSample);

    const button = getByText('Press Me');
    fireEvent.press(button);
    
    await wait(() => expect(queryByTestId('printed-username')).toBeTruthy());
    console.log(getByTestId('printed-username'))

})
