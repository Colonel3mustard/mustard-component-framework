import { mount } from '@vue/test-utils';
import { describe } from 'node:test';
import { expect, test } from 'vitest';
import MustardCheck from '../components/MustardCheck.vue';

describe('MustardCheck', () => {
  test('Check renders correctly', async () => {
    const wrapper = mount(MustardCheck, {
      props: {
        label: 'Test Check',
      },
    });

    expect(wrapper.find('label').text()).toBe('Test Check');
  });
  test('Check emits correctly', async () => {
    const wrapper = mount(MustardCheck, {
      props: {
        label: 'Test Check',
      },
    });

    await wrapper.find('label').trigger('click');
    expect((wrapper.emitted().click[0] as Array<unknown>)[0]).toBe(true);
  });
});
