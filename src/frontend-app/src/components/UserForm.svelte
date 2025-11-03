<script lang="ts">
  // =============================
  // Formulário de criação/edição de usuários
  // =============================

  // Importação de componentes visuais (Flowbite-Svelte)
  import { Card, Button, Label, Input, Heading, Select } from 'flowbite-svelte';

  // Ciclo de vida do componente
  import { onMount } from 'svelte';

  // Comunicação com o backend (API centralizada)
  import api from '$lib/api';

  // Navegação programática (para redirecionamentos)
  import { goto } from '$app/navigation';

  // Ícones utilizados no formulário
  import { ArrowLeftOutline, FloppyDiskAltOutline } from 'flowbite-svelte-icons';

  // =============================
  // Propriedades recebidas e estado local
  // =============================

  // `id` indica se estamos editando (id existe) ou criando (id = null)
  export let id: number | null = null;

  // Tipo do usuário (mantém padrão com backend)
  type User = {
    id: number;
    login: string;
    email: string;
    senha?: string;
    role: string;
  };

  // Estado inicial do formulário
  let user: User = { id: 0, login: '', email: '', senha: '', role: 'user' };

  // Opções para o campo "Perfil" (role)
  const roleOptions = [
    { value: 'user', name: 'Usuário' },
    { value: 'admin', name: 'Administrador' }
  ];

  // Flags e mensagens de controle
  let loading = false; // estado de carregamento
  let error = ''; // mensagem de erro

  // =============================
  // Carrega dados do usuário (modo edição)
  // =============================

  onMount(async () => {
    if (id !== null) {
      loading = true;
      try {
        const res = await api.get(`/users/${id}`);
        // Evita carregar senha (por segurança)
        user = { ...res.data.data, senha: '' };
        console.log('Usuário carregado:', user);
      } catch (e) {
        error = 'Erro ao carregar usuário.';
        console.error(e);
      } finally {
        loading = false;
      }
    }
  });

  // =============================
  // Manipulação do envio do formulário
  // =============================

  async function handleSubmit() {
    // Validação básica de senha (apenas quando for criar ou alterar)
    if (id === null && (!user.senha || user.senha.length < 6)) {
      error = 'Senha deve ter pelo menos 6 caracteres.';
      return;
    }

    if (id !== null && user.senha && user.senha.length < 6) {
      error = 'Senha deve ter pelo menos 6 caracteres.';
      return;
    }

    loading = true;
    error = '';

    try {
      const userData = { ...user };

      // Se estiver editando e a senha estiver vazia, remove do payload
      if (id !== null && !userData.senha) {
        delete userData.senha;
      }

      if (id === null) {
        await api.post('/users', userData);
      } else {
        await api.put(`/users/${id}`, userData);
      }

      // Redireciona após salvar
      goto('/users');
    } catch (e: any) {
      // Mostra mensagem de erro amigável do backend, se existir
      error = e.response?.data?.message || 'Erro ao salvar usuário.';
      console.error(e);
    } finally {
      loading = false;
    }
  }

  // =============================
  // Cancelar / voltar para lista
  // =============================

  function handleCancel() {
    console.log('Ação cancelada pelo usuário.');
    goto('/users');
  }
</script>

<!-- =============================
     Estrutura visual do formulário
     ============================= -->

<Card class="max-w-md mx-auto mt-10 p-0 overflow-hidden shadow-lg border border-gray-200 rounded-lg">
  <form class="flex flex-col gap-6 p-6" on:submit|preventDefault={handleSubmit}>
    
    <!-- Título dinâmico -->
    <Heading tag="h3" class="mb-2 text-center">
      {id === null ? 'Cadastrar Usuário' : 'Editar Usuário'}
    </Heading>

    <!-- Exibição de erro -->
    {#if error}
      <div class="text-red-500 text-center">{error}</div>
    {/if}

    <!-- Campo login -->
    <div>
      <Label for="login">Login</Label>
      <Input
        id="login"
        bind:value={user.login}
        placeholder="Digite o login"
        required
        class="mt-1"
      />
    </div>

    <!-- Campo email -->
    <div>
      <Label for="email">Email</Label>
      <Input
        id="email"
        type="email"
        bind:value={user.email}
        placeholder="Digite o e-mail"
        required
        class="mt-1"
      />
    </div>

    <!-- Campo senha -->
    <div>
      <Label for="senha">
        Senha {id !== null ? '(deixe vazio para manter atual)' : ''}
      </Label>
      <Input
        id="senha"
        type="password"
        bind:value={user.senha}
        placeholder={id === null
          ? 'Digite a senha (mínimo 6 caracteres)'
          : 'Nova senha (opcional)'}
        required={id === null}
        minlength={6}
        class="mt-1"
      />
    </div>

    <!-- Campo de perfil (role) -->
    <div>
      <Label for="role">Perfil</Label>
      <Select
        id="role"
        bind:value={user.role}
        items={roleOptions}
        class="mt-1"
      />
    </div>

    <!-- Botões de ação -->
    <div class="flex gap-4 justify-end mt-4">
      <Button
        color="light"
        type="button"
        onclick={handleCancel}
        disabled={loading}
      >
        <ArrowLeftOutline class="inline w-5 h-5 mr-2 align-text-bottom" />
        {id === null ? 'Voltar' : 'Cancelar'}
      </Button>

      <Button
        type="submit"
        color="primary"
        disabled={loading}
      >
        <FloppyDiskAltOutline class="inline w-5 h-5 mr-2 align-text-bottom" />
        {id === null ? 'Cadastrar' : 'Salvar'}
      </Button>
    </div>
  </form>
</Card>
