<template>
  <form class="mt-10 rounded-md bg-gray-200 p-5 dark:bg-slate-800">
    <textarea
      class="mb-5 h-40 w-full resize-none rounded-md p-5 dark:bg-slate-900"
      placeholder="New Journal Entry for danielkelly_io"
    ></textarea>
    <EmojiField />
    <div class="flex justify-between">
      <span>0 / 280</span>
      <button>Remember <ArrowCircleRight width="20" /></button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import EmojiField from '@/components/EmojiField.vue';
import ArrowCircleRight from '@/assets/icons/arrow-circle-right.svg';
</script>
