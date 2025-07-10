<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
</script>

<div class="relative px-8">
  <Navbar class="fixed start-0 top-0 z-20 w-full bg-gray-800 px-2 py-2.5 sm:px-4">
    <NavBrand href="/">
      <img src="/images/icon.svg" class="me-3 h-6 sm:h-9" alt="Logo aleatória" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Projeto Modelo 2025</span>
    </NavBrand>
    <NavHamburger />
    <NavUl>
      <NavLi href="/" class="text-lg font-bold px-4 py-2 hover:text-yellow-300 hover:bg-gray-700 focus:text-yellow-400 focus:bg-gray-700 transition-colors rounded-lg">Home</NavLi>
      <NavLi href="/about" class="text-lg font-bold px-4 py-2 hover:text-yellow-300 hover:bg-gray-700 focus:text-yellow-400 focus:bg-gray-700 transition-colors rounded-lg">Sobre</NavLi>
      <NavLi href="/users" class="text-lg font-bold px-4 py-2 hover:text-yellow-300 hover:bg-gray-700 focus:text-yellow-400 focus:bg-gray-700 transition-colors rounded-lg">Usuários</NavLi>
    </NavUl>
  </Navbar>
</div>