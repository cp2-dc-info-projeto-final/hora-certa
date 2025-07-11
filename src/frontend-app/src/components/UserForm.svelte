<script lang="ts">
  import { Card, Button, Label, Input, Heading } from 'flowbite-svelte';
  import { onMount } from 'svelte';
  import api from '$lib/api';
  import { goto } from '$app/navigation';
  import { ArrowLeftOutline, FloppyDiskAltOutline } from 'flowbite-svelte-icons';

  export let id: number | null = null;

  // Objeto do formulário
  type User = {
    id: number;
    login: string;
    email: string;
  };

  let user: User = { id: 0, login: '', email: '' };
  let loading = false;
  let error = '';

  // Se estiver em modo edição, carrega os dados do usuário
  onMount(async () => {
    if (id !== null) {
      loading = true;
      try {
        const res = await api.get(`/users/${id}`);
        user = res.data.data
        console.log(user);
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
        await api.post('/users', user);
      } else {
        await api.put(`/users/${id}`, user);
      }
      goto('/users');
    } catch (e) {
      error = 'Erro ao salvar usuário.';
    } finally {
      loading = false;
    }
  }

  function handleCancel() {
    console.log('Cancelar');
    goto('/users');
  }
</script>

<Card class="max-w-md mx-auto mt-10 p-0 overflow-hidden shadow-lg border border-gray-200 rounded-lg">
  <form class="flex flex-col gap-6 p-6" on:submit|preventDefault={handleSubmit}>
    <Heading tag="h3" class="mb-2 text-center">
      {id === null ? 'Cadastrar Usuário' : 'Editar Usuário'}
    </Heading>
    {#if error}
      <div class="text-red-500 text-center">{error}</div>
    {/if}
    <div>
      <Label for="login">Login</Label>
      <Input id="login" bind:value={user.login} placeholder="Digite o login" required class="mt-1" />
    </div>
    <div>
      <Label for="email">Email</Label>
      <Input id="email" type="email" bind:value={user.email} placeholder="Digite o e-mail" required class="mt-1" />
    </div>
    <div class="flex gap-4 justify-end mt-4">
      <Button color="light" type="button" onclick={handleCancel} disabled={loading}>
        <ArrowLeftOutline class="inline w-5 h-5 mr-2 align-text-bottom" />
        {id === null ? 'Voltar' : 'Cancelar'}
      </Button>
      <Button type="submit" color="primary" loading={loading}>
      <FloppyDiskAltOutline class="inline w-5 h-5 mr-2 align-text-bottom" />
      {id === null ? 'Cadastrar' : 'Salvar'}
</Button>
    </div>
  </form>
</Card>
