<script lang="ts">
  import { Card, Button, Input, Label, Alert, Spinner } from "flowbite-svelte";
  import { goto } from "$app/navigation";
  import { login as authLogin } from "$lib/auth";

  let login = "";
  let password = "";
  let loading = false;
  let error = "";
  let success = "";

  async function handleLogin() {
    if (!login || !password) {
      error = "Por favor, preencha todos os campos.";
      success = "";
      return;
    }

    loading = true;
    error = "";
    success = "";

    try {
      const result = await authLogin({ login, password });

      if (result.status === 200) {
        success = "Login realizado com sucesso!";
        setTimeout(() => goto("/"), 1000);
      } else if (result.status === 401) {
        error = "Usuário ou senha inválidos.";
      } else if (result.status === 403) {
        error = "Acesso negado. Verifique suas permissões.";
      } else if (result.status === 500) {
        error = "Erro interno do servidor. Tente novamente mais tarde.";
      } else {
        error = result.message || "Ocorreu um erro desconhecido.";
      }
    } catch (err) {
      console.error("Erro no login:", err);
      error = "Falha ao conectar-se ao servidor.";
    } finally {
      loading = false;
    }
  }
</script>

<svelte:head>
  <title>Login - Hora Certa</title>
</svelte:head>

<section class="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden px-4">
  <!-- Luzes difusas -->
  <div class="absolute inset-0 -z-10">
    <div class="absolute -top-20 -left-40 w-[600px] h-[600px] bg-blue-400/40 rounded-full blur-[160px]"></div>
    <div class="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-cyan-400/40 rounded-full blur-[160px]"></div>
  </div>

  <Card class="relative z-10 backdrop-blur-xl bg-white/20 border border-white/40 shadow-2xl rounded-3xl p-10 w-full max-w-md text-gray-900 dark:text-white">
    <h1 class="text-3xl font-bold text-center text-blue-900 dark:text-white mb-6">Entrar</h1>

    <form on:submit|preventDefault={handleLogin} class="space-y-6">
      <div>
        <Label for="login" class="mb-2">Login</Label>
        <Input id="login" type="text" bind:value={login} placeholder="Digite seu login" required />
      </div>

      <div>
        <Label for="password" class="mb-2">Senha</Label>
        <Input id="password" type="password" bind:value={password} placeholder="Digite sua senha" required />
      </div>

      {#if error}
        <Alert color="red" class="rounded-xl">{error}</Alert>
      {/if}
      {#if success}
        <Alert color="green" class="rounded-xl">{success}</Alert>
      {/if}

      <Button type="submit" class="w-full rounded-full" disabled={loading}>
        {#if loading}
          <Spinner size="sm" /> Entrando...
        {:else}
          Entrar
        {/if}
      </Button>
    </form>

    <p class="text-sm text-center text-gray-700 dark:text-gray-400 mt-6">
      Não tem conta?
      <a href="/users/new" class="text-blue-700 font-semibold hover:underline">Cadastre-se</a>
    </p>
  </Card>
</section>
