import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { User } from '../auth';
import { getCurrentUser } from '../auth';

// Store reativo para o estado de autenticação
export const userStore = writable<User | null>(null);
export const isLoadingStore = writable<boolean>(true);

// Função para inicializar o store com o usuário atual
export async function initializeAuth() {
  if (!browser) return;
  
  isLoadingStore.set(true);
  try {
    const user = await getCurrentUser();
    userStore.set(user);
  } catch (error) {
    console.error('Erro ao inicializar autenticação:', error);
    userStore.set(null);
  } finally {
    isLoadingStore.set(false);
  }
}

// Função para atualizar o estado após login
export function setUser(user: User | null) {
  userStore.set(user);
}

// Função para limpar o estado após logout
export function clearUser() {
  userStore.set(null);
}
