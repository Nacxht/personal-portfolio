<script lang="ts">
  import "../app.css";
</script>

<slot />

<style lang="postcss">
  :global(html) {
    @apply bg-primary;
  }
</style>
