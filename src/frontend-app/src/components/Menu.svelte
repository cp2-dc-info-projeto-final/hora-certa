<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Heading, Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { onMount } from "svelte";
  import { logout, type User } from "$lib/auth";
  import { goto } from "$app/navigation";
  import { ArrowRightToBracketOutline } from "flowbite-svelte-icons";
  import { userStore, isLoadingStore, initializeAuth, clearUser } from "$lib/stores/auth";
  
  // Usar stores reativos em vez de variáveis locais
  $: user = $userStore;
  $: loading = $isLoadingStore;

  onMount(async () => {
    // Inicializar o store de autenticação
    await initializeAuth();
  });

  // função para logout (só apaga o token)
  async function handleLogout() {
    console.log('Logout iniciado...');
    try {
      await logout();
      clearUser(); // Usar função do store para limpar estado
      console.log('Logout concluído, redirecionando...');
      goto('/login');
    } catch (error) {
      console.error('Erro no logout:', error);
    }
  }
</script>

<div class="relative px-8">
  <Navbar class="fixed start-0 top-0 z-20 w-full bg-gray-800 px-2 py-2.5 sm:px-4">
    <NavBrand href="/">
      <img src="/images/icon.svg" class="me-3 h-6 sm:h-9" alt="Logo aleatória" />
      <Heading class="self-center text-xl font-semibold whitespace-nowrap text-primary-500 dark:text-primary-400">Projeto Modelo 2025</Heading>
    </NavBrand>
    <NavHamburger />
    <NavUl>
      <NavLi href="/" class="text-lg font-bold px-4 py-2 text-primary-500 dark:text-primary-400 hover:text-yellow-300 hover:bg-gray-700 focus:text-yellow-400 focus:bg-gray-700 transition-colors rounded-lg">Home</NavLi>
      <NavLi href="/about" class="text-lg font-bold px-4 py-2 text-primary-500 dark:text-primary-400 hover:text-yellow-300 hover:bg-gray-700 focus:text-yellow-400 focus:bg-gray-700 transition-colors rounded-lg">Sobre</NavLi>
      
      {#if !loading}
        {#if user} <!-- se existir usuário é porque conseguiu logar-->
          {#if user.role === 'admin'} <!-- só exibe menu usuários para admin-->
            <NavLi href="/users" class="text-lg font-bold px-4 py-2 text-primary-500 dark:text-primary-400 hover:text-yellow-300 hover:bg-gray-700 focus:text-yellow-400 focus:bg-gray-700 transition-colors rounded-lg">Usuários</NavLi>
          {/if}
          <NavLi>
            <div class="flex items-center">
              <span class="text-primary-500 dark:text-primary-400 px-4 py-2">Olá, {user.login}</span>
              <button 
                class="ml-2 px-3 py-1 bg-primary-600 hover:bg-primary-700 text-white rounded text-sm flex items-center gap-1"
                on:click={handleLogout}
              >
                <ArrowRightToBracketOutline class="w-4 h-4" />
                Sair
              </button>
            </div>
          </NavLi>
        {:else} <!-- se não exibe botão de login-->
          <NavLi href="/login" class="text-lg font-bold px-4 py-2 text-primary-500 dark:text-primary-400 hover:text-yellow-300 hover:bg-gray-700 focus:text-yellow-400 focus:bg-gray-700 transition-colors rounded-lg">Login</NavLi>
        {/if}
      {/if}
    </NavUl>
  </Navbar>
</div>