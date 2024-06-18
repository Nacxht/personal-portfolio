<script>
  export let githubLink;
</script>

<footer class="bg-gray-900 m-4">
  <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <a
        href={githubLink}
        target="_blank"
        class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
      >
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap text-white"
          >Zkyzors</span
        >
      </a>

      <p class="text-sm">
        Design is inspired by <span
          ><a
            href="https://ekel.dev"
            target="_blank"
            class="underline font-bold">ekel.dev</a
          ></span
        >
      </p>
    </div>
    <hr class="my-6 sm:mx-auto border-gray-700 lg:my-8" />
    <span class="block text-sm sm:text-center text-gray-400"
      >© 2024 Zkyzors. All Rights Reserved.</span
    >
  </div>
</footer>

<style lang="postcss">
  footer {
    @apply bg-inherit border-t border-gray-700;
  }
</style>
