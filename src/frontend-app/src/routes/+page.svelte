<script lang="ts">
  import { Heading, P, Button } from 'flowbite-svelte';
  import Menu from '../components/Menu.svelte';
</script>

<Menu />

<section class="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 py-20">
  <!-- Fundo decorativo -->
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <div class="absolute -top-40 left-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-0 right-20 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl animate-pulse"></div>
  </div>

  <!-- Conteúdo -->
  <div class="relative z-10 flex flex-col items-center gap-20 w-full max-w-6xl mx-auto">
    <!-- Cards laterais (benefícios) -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
      <div class="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition">
        <h3 class="text-blue-700 font-semibold text-lg mb-2">✅ Agendamento Inteligente</h3>
        <p class="text-gray-600 text-sm">
          Gerencie compromissos com facilidade e sincronização entre cliente e prestador.
        </p>
      </div>

      <div class="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition">
        <h3 class="text-blue-700 font-semibold text-lg mb-2">🔔 Notificações Automáticas</h3>
        <p class="text-gray-600 text-sm">
          Evite esquecimentos com lembretes automáticos e confirmações inteligentes.
        </p>
      </div>

      <div class="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition">
        <h3 class="text-blue-700 font-semibold text-lg mb-2">💼 Profissionalismo</h3>
        <p class="text-gray-600 text-sm">
          Ideal para autônomos, clínicas, barbearias e empresas de serviços.
        </p>
      </div>

      <div class="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition">
        <h3 class="text-blue-700 font-semibold text-lg mb-2">🔒 Segurança Total</h3>
        <p class="text-gray-600 text-sm">
          Proteção com criptografia moderna e backups automáticos.
        </p>
      </div>
    </div>

    <!-- Card central -->
    <div class="bg-white/80 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-100 p-10 max-w-2xl text-center animate-fadeIn">
      <img
        src="/images/hora-certa-icon.png"
        alt="Hora Certa Logo"
        class="mx-auto mb-6 w-24 h-24 drop-shadow-lg rounded-xl bg-white p-3 border border-blue-200"
      />

      <Heading tag="h1" class="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
        Hora Certa
      </Heading>

      <P class="text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
        A <strong class="text-blue-700">Hora Certa</strong> é uma plataforma moderna para
        <strong> agendamento e gerenciamento de serviços </strong>,
        conectando clientes e profissionais com eficiência e elegância.
        <br /><br />
        Simplifique sua rotina com
        <span class="text-blue-600 font-semibold">notificações automáticas</span>,
        <span class="text-blue-600 font-semibold">controle de horários</span> e
        <span class="text-blue-600 font-semibold">gestão inteligente</span>.
      </P>

      <div class="flex justify-center gap-6">
        <a href="/login">
          <Button
            color="blue"
            size="xl"
            class="px-10 py-4 font-semibold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Entrar
          </Button>
        </a>
        <a href="/users/new">
          <Button
            color="gray"
            size="xl"
            class="px-10 py-4 font-semibold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Cadastrar-se
          </Button>
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fadeIn {
    animation: fadeIn 1.2s ease-out;
  }
</style>
