<template>
  <ColorSchemeToggle />
  <main class="m-auto max-w-200 p-10">
    <TheHeader />
    <EntryEditor @created="handleEntryCreated($event)" />
    <ul>
      <li
        v-for="entry in entries"
        :key="entry.id"
      >
        <EntryCard :entry="entry" />
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import EntryCard from '@/components/EntryCard.vue';
import EntryEditor from '@/components/EntryEditor.vue';
import TheHeader from '@/components/TheHeader.vue';
import { nanoid } from 'nanoid';
import { ref } from 'vue';
import ColorSchemeToggle from './components/ColorSchemeToggle.vue';
import type Entry from './types/Entry';

const entries = ref<Entry[]>([
  {
    id: nanoid(),
    body: 'Today I enjoyed walking the dog in the park.',
    emoji: 'happy',
    createdAt: new Date(),
  },
]);

function handleEntryCreated(entry: Entry) {
  entries.value.unshift(entry);
}
</script>
