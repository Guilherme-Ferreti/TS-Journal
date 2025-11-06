import { type Emoji } from '@/types/Emoji';
import type { Component } from 'vue';
import { reactive } from 'vue';

const files: { [key: string]: unknown } = import.meta.glob('../assets/icons/emojis/*.svg', {
  eager: true,
});

export default function UseEmojis() {
  const emojis: { name: Emoji; component: Component }[] = reactive([]);

  for (const path in files) {
    const component = files[path] as Component;
    const name = path.replace('../assets/icons/emojis/', '').replace('-emoji.svg', '') as Emoji;

    emojis.push({ name, component });
  }

  /**
   * Get a single emoji component by name
   */
  const findEmoji = (name: Emoji) => emojis.find((emoji) => emoji.name === name)?.component;

  return { emojis, findEmoji };
}
