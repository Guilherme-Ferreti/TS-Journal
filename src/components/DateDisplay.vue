<template>
  <div>{{ formatted }}</div>
</template>

<script setup lang="ts">
import { formatRelative } from 'date-fns';
import { computed } from 'vue';

const props = defineProps<{
  date: Date;
}>();

const formatted = computed(() => formatRelative(props.date, Date.now()));
</script>
