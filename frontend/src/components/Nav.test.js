import { render } from '@testing-library/react';
import { mount } from 'enzyme'
import App from '../App'
import { IconButton, MenuItem } from '@mui/material';
import Map from './Map';
import Home from './Home'
import renderer from 'react-test-renderer';
import Nav from './Nav';
import {
    BrowserRouter,
} from "react-router-dom";

it('renders', () => {
    const div = document.createElement('div')
    render(<BrowserRouter><Nav /></BrowserRouter>, div)
})

it('renders a navbar in the App', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find("Nav")).toHaveLength(1);
})

it('has 4 elements in the Navbar', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find(MenuItem)).toHaveLength(4);
})

it('render map component when burger map button is clicked', () => {
    const wrapper = mount(<App />)
    wrapper.find('.menuButtonNav').find('li').simulate('click');
    expect(wrapper.find(Map)).toHaveLength(1);
})

it('render map component when normal map button is clicked', () => {
    const wrapper = mount(<App />)
    wrapper.find('.menuButtonNav').find('button').simulate('click');
    expect(wrapper.find(Map)).toHaveLength(1);
})

it('render home component when burger home button is clicked', () => {
    const wrapper = mount(<App />)
    wrapper.find('.logoButton').find('div').last().simulate('click');
    expect(wrapper.find(Home)).toHaveLength(1);
})

it('render home component when normal home button is clicked', () => {
    const wrapper = mount(<App />)
    wrapper.find('.logoButton').find('div').first().simulate('click');
    expect(wrapper.find(Home)).toHaveLength(1);
})

it('the navbar stays as it is after we clicked the map button', () => {
    const wrapper = mount(<App />)
    const before = wrapper.find(Nav);
    wrapper.find('.menuButtonNav').find('button').simulate('click');
    const after = wrapper.find(Nav)
    expect(before).toEqual(after);
})

// it('renders a burger menu if resized below the minimum size', () => {
//     const wrapper = mount(<App />)
//     // Change the viewport to 500px.
//     // global.innerWidth = 1000;

//     // // Trigger the window resize event.
//     // console.log(wrapper.find(IconButton).find('button').first().getElement())
//     // global.dispatchEvent(new Event('resize'));
//     // console.log(wrapper.find(IconButton).find('button').first().getElement().props('width'))
//     // console.log(expect(wrapper.find(IconButton).find('button').first()).toBeVisible())
//     //expect(wrapper.find(IconButton).find('button').first().getElement()).toHaveStyle('disabled={false}')
// })

