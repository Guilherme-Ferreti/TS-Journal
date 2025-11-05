<template>
  <div class="mt-5 rounded-md bg-gray-200 p-5 dark:bg-slate-800">
    <div class="flex items-center">
      <component
        width="75"
        :is="findEmoji('happy')"
        class="mr-5 min-w-max"
      ></component>
      <div class="entry-text">Today I enjoyed walking the dog in the park.</div>
    </div>
    <div class="flex justify-end text-sm text-teal-800 dark:text-teal-300">
      <DateDisplay
        :date="new Date()"
        class="mr-2"
      />
      |
      <span class="ml-2 opacity-60">danielkelly_io</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import DateDisplay from '@/components/DateDisplay.vue';
import UseEmojis from '@/composables/UseEmojis';
const { findEmoji } = UseEmojis();
</script>
