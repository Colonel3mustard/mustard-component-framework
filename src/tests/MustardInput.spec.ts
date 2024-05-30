import { mount } from '@vue/test-utils';
import { describe } from 'node:test';
import { expect, test } from 'vitest';
import MustardInput from '../components/MustardInput.vue';

describe('MustardInput', () => {
  test('Input renders correctly', async () => {
    const label = 'Test Input';
    const type = 'text';
    const placeholder = 'Enter text';

    const wrapper = mount(MustardInput, {
      props: {
        label,
        type,
        placeholder,
      },
    });

    expect(wrapper.find('label').text()).toBe(label);
    expect(wrapper.find('input').element.placeholder).toBe(placeholder);
    expect(wrapper.find('input').element.type).toBe(type);
  });

  test('Input blur triggers validate', async () => {
    const wrapper = mount(MustardInput);

    const spy = vi.spyOn(wrapper.vm, 'validate');
    await wrapper.find('input').trigger('blur');
    expect(spy).toHaveBeenCalled();
  });

  test('Input keyup triggers keyUp', async () => {
    const wrapper = mount(MustardInput);

    const spy = vi.spyOn(wrapper.vm, 'keyUp');
    await wrapper.find('input').trigger('keyup');
    expect(spy).toHaveBeenCalled();
  });
});
