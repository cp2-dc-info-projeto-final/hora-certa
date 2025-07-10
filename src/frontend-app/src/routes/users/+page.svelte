<script lang="ts">
  import UsersTable from '../../components/UsersTable.svelte';
  import { PlusOutline  } from 'flowbite-svelte-icons';
  import { goto } from '$app/navigation';
</script>

<div class="text-center p-8 pt-32">
  <div class="flex items-center justify-between max-w-3xl mx-auto mb-6">
    <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Usuários</h1>
    <button class="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow transition" on:click={() => goto('/users/new')}>
      <PlusOutline class="w-5 h-5" />
      Adicionar
    </button>
  </div>
  <UsersTable />
</div>
