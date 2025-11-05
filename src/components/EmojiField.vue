<template>
  <div class="mb-5 flex">
    <component
      class="mr-2 w-8 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110"
      v-for="emoji in emojis"
      :is="emoji.component"
      :key="emoji.name"
      :class="{ 'emoji--selected': modelValue === emoji.name }"
      @click="$emit('update:modelValue', emoji.name === modelValue ? null : emoji.name)"
    ></component>
  </div>
</template>

<script lang="ts" setup>
import UseEmojis from '@/composables/UseEmojis';
const { emojis } = UseEmojis();

defineProps(['modelValue']);
defineEmits(['update:modelValue']);
</script>

<style scoped>
@reference '@/assets/css/main.css';

.emoji--selected,
.emoji--selected path {
  @apply rounded-3xl bg-teal-700 fill-white dark:bg-teal-700 dark:fill-white;
}
</style>
