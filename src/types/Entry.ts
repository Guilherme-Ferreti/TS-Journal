import type { Emoji } from './Emoji';

export default interface Entry {
  id: string;
  body: string;
  emoji: Emoji;
  createdAt: Date;
}
