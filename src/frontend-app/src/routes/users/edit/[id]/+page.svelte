<script lang="ts">
  import UserForm from '../../../../components/UserForm.svelte';
  import { page } from '$app/stores';
  import { get } from 'svelte/store';

  // Pega o id da URL
  const { id } = get(page).params;
</script>

<UserForm id={Number(id)} />
