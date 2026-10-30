import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import MustardInput from '../components/MustardInput.vue';

describe('MustardInput', () => {
  test('Input renders correctly', async () => {
    const label = 'Test Input';
    const type = 'text';
    const placeholder = 'Enter text';
    const value = '';

    const wrapper = mount(MustardInput, {
      props: {
        label,
        type,
        placeholder,
        modelValue: value,
      },
    });

    expect(wrapper.find('label').text()).toBe(label);
    expect(wrapper.find('input').element.placeholder).toBe(placeholder);
    expect(wrapper.find('input').element.type).toBe(type);
  });

  test('Input blur triggers validate', async () => {
    const wrapper = mount(MustardInput, {
      props: {
        required: true,
        modelValue: '',
      },
    });

    expect(wrapper.find('.error').exists()).toBe(false);
    await wrapper.find('input').trigger('blur');
    expect(wrapper.find('.error').text()).toBe('Required field');
  });
});
