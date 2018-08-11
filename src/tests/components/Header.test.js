import React from 'react';
import { Header } from '../../components/Header'
// import ReactShallowRenderer from 'react-test-renderer/shallow'
import { shallow } from 'enzyme';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout = {() => {}} />);
    expect(wrapper).toMatchSnapshot();
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header/>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // console.log(renderer.getRenderOutput());

});

test('should call startLogout on button click', () => {
    const startLogout = jest.fn(); //spy
    const wrapper = shallow(<Header startLogout={startLogout} />)
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});
