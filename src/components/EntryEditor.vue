<template>
  <form
    class="mt-10 rounded-md bg-gray-200 p-5 dark:bg-slate-800"
    @submit.prevent="handleSubmit"
  >
    <div class="mb-5">
      <textarea
        v-model="body"
        class="h-40 w-full resize-none rounded-md p-5 dark:bg-slate-900"
        placeholder="New Journal Entry for johndoe_io"
        maxlength="280"
        autofocus
      ></textarea>
      <FieldError v-if="bodyHasError">Please provide an entry.</FieldError>
    </div>
    <div>
      <EmojiField v-model="emoji" />
      <FieldError v-if="emojiHasError">Please select and emoji.</FieldError>
    </div>
    <div class="flex justify-between">
      <span>{{ body.length }} / 280</span>
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
import FieldError from './FieldError.vue';

const body = ref('');
const emoji = ref<Emoji | null>(null);

const bodyHasError = ref(false);
const emojiHasError = ref(false);

const emit = defineEmits<{
  created: [entry: Entry];
}>();

function handleSubmit() {
  if (!validateForm()) {
    return;
  }

  emit('created', {
    id: nanoid(),
    body: body.value,
    emoji: emoji.value as Emoji,
    createdAt: new Date(),
  });

  resetForm();
}

function validateForm() {
  bodyHasError.value = body.value.length <= 0;
  emojiHasError.value = emoji.value === null;

  return !bodyHasError.value && !emojiHasError.value;
}

function resetForm() {
  body.value = '';
  emoji.value = null;

  bodyHasError.value = false;
  emojiHasError.value = false;
}
</script>
