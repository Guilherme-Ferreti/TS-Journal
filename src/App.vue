<template>
  <main class="m-auto max-w-200 p-10">
    <TheHeader />
    <EntryEditor />
    <ul>
      <li>
        <EntryCard />
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import EntryCard from '@/components/EntryCard.vue';
import EntryEditor from '@/components/EntryEditor.vue';
import TheHeader from '@/components/TheHeader.vue';
</script>
