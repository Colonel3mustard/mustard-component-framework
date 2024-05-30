import { mount } from '@vue/test-utils';
import { describe } from 'node:test';
import { expect, test } from 'vitest';
import MustardBtn from '../components/MustardBtn.vue';

describe('MustardBtn', () => {
  test('Button renders correctly', async () => {
    const wrapper = mount(MustardBtn, {
      props: {
        label: 'Test Button',
      },
    });

    expect(wrapper.find('.btn').text()).toBe('Test Button');
  });

  test('Button click emits event', async () => {
    const wrapper = mount(MustardBtn, {
      props: {
        label: 'Test Button',
      },
    });

    await wrapper.trigger('click');
    expect(wrapper.emitted().click.length).toBe(1);
  });
});
