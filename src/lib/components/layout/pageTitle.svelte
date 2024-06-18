<script lang="ts">
  import { afterNavigate } from "$app/navigation";
  import { onMount } from "svelte";

  let title: string = "";

  onMount(() => {
    title = document.title;
  });

  afterNavigate(() => {
    title = document.title;
  });
</script>

<h2>{title}</h2>
<div class="divider"></div>

<style lang="postcss">
  .divider {
    @apply my-5;
  }
</style>
