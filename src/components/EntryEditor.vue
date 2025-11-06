<template>
  <form
    class="mt-10 rounded-md bg-gray-200 p-5 dark:bg-slate-800"
    @submit.prevent="handleSubmit"
  >
    <textarea
      v-model="body"
      class="mb-5 h-40 w-full resize-none rounded-md p-5 dark:bg-slate-900"
      placeholder="New Journal Entry for johndoe_io"
    ></textarea>
    <EmojiField v-model="emoji" />
    <div class="flex justify-between">
      <span>0 / 280</span>
      <button>Remember <ArrowCircleRight width="20" /></button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import EmojiField from '@/components/EmojiField.vue';
import ArrowCircleRight from '@/assets/icons/arrow-circle-right.svg';
import { ref } from 'vue';
import type { Emoji } from '@/types/Emoji';
import type Entry from '@/types/Entry';
import { nanoid } from 'nanoid';

const body = ref('');
const emoji = ref<Emoji | null>(null);

const emit = defineEmits<{
  created: [entry: Entry];
}>();

function handleSubmit() {
  if (body.value.length <= 0) {
    alert('Please provide an entry.');
    return;
  }

  if (emoji.value === null) {
    alert('Please select an emoji.');
    return;
  }

  emit('created', {
    id: nanoid(),
    body: body.value,
    emoji: emoji.value,
    createdAt: new Date(),
  });

  body.value = '';
  emoji.value = null;
}
</script>
