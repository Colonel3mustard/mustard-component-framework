import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import MustardCheck from '../components/MustardCheck.vue';

describe('MustardCheck', () => {
  test('Check renders correctly', async () => {
    const wrapper = mount(MustardCheck, {
      props: {
        label: 'Test Check',
        modelValue: false,
        id: '1',
      },
    });

    const labels = wrapper.findAll('label');
    expect(labels[labels.length - 1].text()).toBe('Test Check');
  });
  test('Check emits correctly', async () => {
    const wrapper = mount(MustardCheck, {
      props: {
        label: 'Test Check',
        modelValue: false,
        id: '2',
      },
    });

    await wrapper.find('input').setValue(true);
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true]);
  });
});
