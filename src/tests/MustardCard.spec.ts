import { mount } from '@vue/test-utils';
import { describe } from 'node:test';
import { expect, test } from 'vitest';
import MustardCard from '../components/MustardCard.vue';
import { Card } from '../types/Mustard';

describe('MustardCard', () => {
  test('Card renders correctly', async () => {
    const card: Card = {
      title: 'Test Card',
      subtitle: 'This is a test card',
      imgSrc: 'https://via.placeholder.com/150',
    };

    const wrapper = mount(MustardCard, {
      props: {
        item: card,
      },
    });

    expect(wrapper.find('.title').text()).toBe(card.title);
    expect(wrapper.find('.subtitle').text()).toBe(card.subtitle);
  });

  test('Card click emits event', async () => {
    const card: Card = {
      title: 'Test Card',
      subtitle: 'This is a test card',
      imgSrc: 'https://via.placeholder.com/150',
    };

    const wrapper = mount(MustardCard, {
      props: {
        item: card,
      },
    });

    await wrapper.trigger('click');
    expect(wrapper.emitted().click.length).toBe(1);
  });
});
