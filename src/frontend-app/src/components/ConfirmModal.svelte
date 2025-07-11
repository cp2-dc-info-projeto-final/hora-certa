<script lang="ts">
  import { Modal, Button } from 'flowbite-svelte';
  import { CloseOutline, CheckOutline } from 'flowbite-svelte-icons';

  export let open = false;
  export let message = 'Tem certeza?';
  export let confirmText = 'Confirmar';
  export let cancelText = 'Cancelar';
  export let onConfirm: () => void;
  export let onCancel: () => void;


</script>

<Modal bind:open={open} size="sm" class="z-50">
  <div slot="header" class="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-t-lg border-b border-gray-200">
    <span class="font-semibold text-gray-700">Confirmação</span>
    <Button color="light" size="xs" onclick={onCancel} aria-label="Fechar">
      <CloseOutline class="w-5 h-5 text-gray-500" />
    </Button>
  </div>
  <form method="dialog" class="flex flex-col gap-4 p-6">
    <div class="text-lg text-gray-800 text-center">{message}</div>
    <div class="flex justify-center gap-4 mt-4">
      <Button color="light" type="button" onclick={onCancel}>
        <CloseOutline class="w-5 h-5 text-gray-500" /> {cancelText}
      </Button>
      <Button color="primary" type="button" onclick={onConfirm}>
        <CheckOutline class="w-5 h-5 text-white" /> {confirmText}
      </Button>
    </div>
  </form>
</Modal>
