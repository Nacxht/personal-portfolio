<script lang="ts">
  import Footer from "$lib/components/layout/footer.svelte";
  import Navbar from "$lib/components/layout/navbar.svelte";
  import "../app.css";
</script>

<Navbar />

<div class="page-container">
  <slot />
</div>

<Footer githubLink="https://github.com/Nacxht" />

<style lang="postcss">
  :global(html) {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .page-container {
    @apply container mx-auto lg:max-w-[40rem] my-7 pt-14 px-3
    min-h-[80dvh];
  }

  /* Typography */
  :global(h1) {
    @apply scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl;
  }

  :global(h2) {
    @apply scroll-m-20 mb-2 text-3xl font-semibold tracking-tight
    transition-colors first:mt-0 capitalize;
  }

  :global(h3) {
    @apply scroll-m-20 text-2xl font-semibold tracking-tight capitalize mb-2;
  }

  :global(h4) {
    @apply scroll-m-20 text-xl font-semibold tracking-tight capitalize;
  }

  :global(p) {
    @apply leading-7 [&:not(:first-child)]:mt-3 text-gray-300;
  }

  :global(.large) {
    @apply text-lg font-semibold;
  }

  :global(.inline-code) {
    @apply relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold;
  }

  /* Divider */
  :global(.divider) {
    @apply border border-secondary;
  }
</style>
