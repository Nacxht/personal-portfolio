<script lang="ts">
  import SkeletonDescription from "$lib/components/reusable/skeleton-description.svelte";
  import { Skeleton } from "$lib/components/ui/skeleton/index";
  import { snakeToNormal } from "$lib/utils/string_manipulator.js";
  import { marked } from "marked";

  // Data
  export let data;
  const { blog } = data;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<nav>
  <h2>
    {#await blog}
      <Skeleton class="h-9 w-96" />
    {:then blog}
      {#if blog}
        {snakeToNormal(`${blog?.name}`)}
      {:else}
        Blog
      {/if}
    {/await}
  </h2>
  <div class="divider"></div>
</nav>

<main>
  {#await blog}
    <section class="thumbnail">
      <Skeleton class="h-80" />
    </section>

    <p>
      <SkeletonDescription />
      <SkeletonDescription />
      <SkeletonDescription />
    </p>
  {:then blog}
    {#if blog}
      <section class="thumbnail">
        {#if blog.thumbnail}
          <img src={blog ? blog.thumbnail : ""} alt="thumbnail" />
        {:else}
          <!-- else content here -->
        {/if}
      </section>

      <section class="description">
        <h3 class="font-bold">Description</h3>

        <p>
          {@html marked(blog?.description)}
        </p>
      </section>

      <section class="other-img">
        <!--  -->
      </section>
    {:else}
      <h2 class="project-empty">This project doesn't yet have a description</h2>
    {/if}
  {/await}
</main>

<style lang="postcss">
  main {
    @apply space-y-3;
  }

  .thumbnail img {
    @apply border-2 rounded-md max-w-full;
  }

  .project-empty {
    @apply text-gray-600 font-bold select-none h-[60vh] flex justify-center
    items-center text-center;
  }
</style>
