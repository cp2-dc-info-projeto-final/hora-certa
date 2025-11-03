<script lang="ts">
  // Importa componentes do Flowbite-Svelte para montar o menu
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Heading } from "flowbite-svelte";
  import { onMount } from "svelte";
  import { logout, getCurrentUser, getToken, type User } from "$lib/auth";
  import { goto } from "$app/navigation";
  import { ArrowRightToBracketOutline } from "flowbite-svelte-icons";
  import { page } from "$app/stores";
  
  // Estado local do usuário logado
  let user: User | null = null;
  let hasToken = false;

  // Verifica token sincronamente (instantâneo)
  // Se existir token, tenta buscar os dados do usuário em background.
  function updateAuthStatus() {
    hasToken = getToken() !== null;
    
    if (hasToken && !user) {
      getCurrentUser()
        .then(userData => {
          user = userData;
        })
        .catch(() => {
          // Se der erro (token expirado ou inválido), limpa estado
          user = null;
          hasToken = false;
        });
    } else if (!hasToken) {
      user = null;
    }
  }

  // Reativo à mudança de página — atualiza autenticação sempre que a URL muda
  $: if ($page.url) {
    updateAuthStatus();
  }

  // Executa na montagem inicial do componente
  onMount(() => {
    updateAuthStatus();
  });

  // Função de logout
  // Apenas apaga o token e redireciona para a tela de login.
  async function handleLogout() {
    console.log('Logout iniciado...');
    try {
      await logout();
      user = null; // Limpa o estado local
      console.log('Logout concluído, redirecionando...');
      goto('/login');
    } catch (error) {
      console.error('Erro no logout:', error);
    }
  }
</script>

<div class="relative px-8">
  <Navbar class="fixed start-0 top-0 z-20 w-full bg-gradient-to-r from-blue-600/70 via-indigo-600/60 to-blue-700/70 backdrop-blur-lg px-2 py-2.5 sm:px-4 shadow-lg transition-all duration-500">
    <!-- Marca e logotipo -->
    <NavBrand href="/" class="flex items-center space-x-3">
      <img src="/images/hora-certa-icon.png" class="h-8 w-8 rounded-lg shadow-md bg-white/80 p-1" alt="Hora Certa Logo" />
      <Heading class="text-2xl font-bold text-white tracking-wide drop-shadow-md">
        Hora Certa
      </Heading>
    </NavBrand>

    <NavHamburger />

    <NavUl class="space-x-3">
      <NavLi href="/" class="text-lg font-semibold text-white hover:text-yellow-300 transition-colors">Home</NavLi>
      <NavLi href="/about" class="text-lg font-semibold text-white hover:text-yellow-300 transition-colors">Sobre</NavLi>

      {#if hasToken}
        {#if user}
          {#if user.role === 'admin'}
            <NavLi href="/users" class="text-lg font-semibold text-white hover:text-yellow-300 transition-colors">Usuários</NavLi>
          {/if}

          <NavLi>
            <div class="flex items-center gap-2 text-white">
              <span class="text-white/90">Olá, {user.login}</span>
              <button 
                class="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm flex items-center gap-1 transition-colors"
                on:click={handleLogout}
              >
                <ArrowRightToBracketOutline class="w-4 h-4" />
                Sair
              </button>
            </div>
          </NavLi>
        {/if}
      {:else}
        {#if $page.url.pathname !== '/'}
          <NavLi href="/login" class="text-lg font-semibold text-white hover:text-yellow-300 transition-colors">Login</NavLi>
          <NavLi href="/users/new" class="text-lg font-semibold text-white hover:text-yellow-300 transition-colors">Cadastrar-se</NavLi>
        {/if}
      {/if}
    </NavUl>
  </Navbar>
</div>
