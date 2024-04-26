// Import necessary utilities and libraries
import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import CounterComponent from '@/components/CounterComponent.vue'; // Adjust the path as needed

describe('CounterComponent', () => {
  let wrapper;

  beforeEach(() => {
    // Mount the component before each test
    wrapper = mount(CounterComponent);
  });

  it('initializes with a count of 0', () => {
    // Check if the initial count is 0 as expected
    expect(wrapper.text()).to.include('Count: 0');
  });

  it('increments count by 1 when the add button is clicked', async () => {
    // Find the "Add 1 to count" button and simulate a click
    const addButton = wrapper.find('#button-add');
    addButton.trigger('click');

    // Wait for Vue to update the DOM
    await wrapper.vm.$nextTick();

    // Check if the count has been incremented by 1
    expect(wrapper.text()).to.include('Count: 1');
  });

  it('decrements count by 1 when the remove button is clicked', async () => {
    // Increment count first to test decrement
    wrapper.setData({ count: 1 });

    // Find the "Remove 1 to count" button and simulate a click
    const removeButton = wrapper.find('#button-remove');
    removeButton.trigger('click');

    // Wait for Vue to update the DOM
    await wrapper.vm.$nextTick();

    // Check if the count has been decremented by 1
    expect(wrapper.text()).to.include('Count: 0');
  });
});

