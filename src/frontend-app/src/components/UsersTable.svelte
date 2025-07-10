<script lang="ts">
  import { Table, TableHead, TableHeadCell, TableBody, TableBodyRow, TableBodyCell, Card } from 'flowbite-svelte';
  import api from '$lib/api';
  import { onMount } from 'svelte';

  type User = {
    id: number;
    login: string;
    email: string;
  };

let users: User[] = [];
let loading = true;
let error = '';

onMount(async () => {
    try {
      const res = await api.get('/users');
      users = res.data.data;
      console.log(users);
    } catch (e) {
      error = 'Erro ao carregar usuários';
    } finally {
      loading = false;
    }
  });
</script>

{#if loading}
  <div class="my-8 text-center text-gray-500">Carregando usuários...</div>
{:else if error}
  <div class="my-8 text-center text-red-500">{error}</div>
{:else}
  <!-- Tabela para telas médias/grandes -->
  <div class="hidden lg:block">
    <Table class="w-full max-w-3xl mx-auto my-8 shadow-lg border border-gray-200 rounded-lg">
      <TableHead>
        <TableHeadCell>ID</TableHeadCell>
        <TableHeadCell>Login</TableHeadCell>
        <TableHeadCell>Email</TableHeadCell>
      </TableHead>
      <TableBody>
        {#each users as user}
          <TableBodyRow>
            <TableBodyCell>{user.id}</TableBodyCell>
            <TableBodyCell>{user.login}</TableBodyCell>
            <TableBodyCell>{user.email}</TableBodyCell>
          </TableBodyRow>
        {/each}
      </TableBody>
    </Table>
  </div>
  <!-- Cards para mobile/tablet -->
  <div class="block lg:hidden">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 max-w-3xl mx-auto">
      {#each users as user}
        <Card class="w-full p-0 overflow-hidden shadow-lg border border-gray-200">
          <div class="px-4 pt-4 pb-2 bg-gray-100 text-left">
            <div class="text-lg font-semibold text-gray-800 text-left">{user.login}</div>
            <div class="text-xs text-gray-400 text-left">ID: {user.id}</div>
          </div>
          <div class="px-4 pb-4 pt-2 flex flex-col gap-2 text-left">
            <div class="flex items-center gap-2 text-left">
              <svg class="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 12A4 4 0 1 0 8 12a4 4 0 0 0 8 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 14v7m-7-7v7m14-7v7"/></svg>
              <span class="text-gray-700 text-sm">{user.email}</span>
            </div>
          </div>
        </Card>
      {/each}
    </div>
  </div>
{/if}
