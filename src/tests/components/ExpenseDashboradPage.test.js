import React from 'react';
import ExpenseDashboradPage from '../../components/ExpenseDashboradPage'
import { shallow } from 'enzyme';

test('should render Expense DashboradPagecorrectly', () => {
    const wrapper = shallow(<ExpenseDashboradPage/>);
    expect(wrapper).toMatchSnapshot();

});
