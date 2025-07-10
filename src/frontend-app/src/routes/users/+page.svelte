<script lang="ts">
  import Menu from '../../components/Menu.svelte';
  import { ListPlaceholder, CardPlaceholder, Skeleton } from 'flowbite-svelte';
</script>

<Menu />

<div class="text-center p-8 pt-32">
  <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">Usuários</h1>
  <ul class="flex flex-col gap-6 mb-8">
    <li><ListPlaceholder class="my-8 mx-auto w-full max-w-md" /></li>
    <li><CardPlaceholder class="my-8 mx-auto w-full max-w-md" /></li>
  </ul>
  <div class="flex flex-col items-center">
    <Skeleton class="my-8 mx-auto w-full max-w-md h-32" />
  </div>
</div>
