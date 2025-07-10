<script lang="ts">
  import { Card, Button, Label, Input } from 'flowbite-svelte';
  import { onMount } from 'svelte';
  import api from '$lib/api';
  import { goto } from '$app/navigation';

  export let id: number | null = null;

  // Campos do formulário
  let login = '';
  let email = '';
  let loading = false;
  let error = '';

  // Se estiver em modo edição, carrega os dados do usuário
  onMount(async () => {
    if (id !== null) {
      loading = true;
      try {
        const res = await api.get(`/users/${id}`);
        login = res.data.login;
        email = res.data.email;
      } catch (e) {
        error = 'Erro ao carregar usuário.';
      } finally {
        loading = false;
      }
    }
  });

  async function handleSubmit() {
    loading = true;
    error = '';
    try {
      if (id === null) {
        await api.post('/users', { login, email });
      } else {
        await api.put(`/users/${id}`, { login, email });
      }
      goto('/users');
    } catch (e) {
      error = 'Erro ao salvar usuário.';
    } finally {
      loading = false;
    }
  }

  function handleCancel() {
    goto('/users');
  }
</script>

<Card class="max-w-md mx-auto mt-10 p-0 overflow-hidden shadow-lg border border-gray-200 rounded-lg">
  <form class="flex flex-col gap-6 p-6" on:submit|preventDefault={handleSubmit}>
    <h2 class="text-2xl font-bold text-gray-800 mb-2 text-center">
      {id === null ? 'Cadastrar Usuário' : 'Editar Usuário'}
    </h2>
    {#if error}
      <div class="text-red-500 text-center">{error}</div>
    {/if}
    <div>
      <Label for="login">Login</Label>
      <Input id="login" bind:value={login} placeholder="Digite o login" required class="mt-1" />
    </div>
    <div>
      <Label for="email">Email</Label>
      <Input id="email" type="email" bind:value={email} placeholder="Digite o e-mail" required class="mt-1" />
    </div>
    <div class="flex gap-4 justify-end mt-4">
      <Button color="light" type="button" on:click={handleCancel} disabled={loading}>
        Cancelar
      </Button>
      <Button type="submit" color="primary" loading={loading}>
        {id === null ? 'Cadastrar' : 'Salvar'}
      </Button>
    </div>
  </form>
</Card>
