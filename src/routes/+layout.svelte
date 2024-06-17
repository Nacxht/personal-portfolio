<script lang="ts">
  import "../app.css";
</script>

<div class="page-container">
  <slot />
</div>

<style lang="postcss">
  .page-container {
    @apply container mx-auto lg:max-w-[40rem] my-10 pt-14 px-3;
  }
</style>
