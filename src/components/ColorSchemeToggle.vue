<template>
  <button
    class="absolute top-4 right-4"
    @click="toggleColorScheme"
  >
    Change theme
  </button>
</template>

<script setup lang="ts">
import { usePreferredColorScheme } from '@vueuse/core';
import { onMounted } from 'vue';

const preferredColor = usePreferredColorScheme();

const htmlEl = document.querySelector('html') as HTMLElement;

onMounted(() => {
  htmlEl.dataset.theme = preferredColor.value === 'light' ? 'light' : 'dark';
});

function toggleColorScheme() {
  const currentTheme = document.querySelector('html')?.dataset.theme;

  htmlEl.dataset.theme = currentTheme === 'light' ? 'dark' : 'light';
}
</script>
