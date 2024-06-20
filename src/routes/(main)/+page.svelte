<script lang="ts">
  import RecentProject from "$lib/components/pages/index/recent-project.svelte";
  import SkeletonDescription from "$lib/components/reusable/skeleton-description.svelte";
  import Badge from "$lib/components/ui/badge/badge.svelte";
  import { Button } from "$lib/components/ui/button";
  import { marked } from "marked";

  export let data;
  const { badgeContents } = data;
</script>

<svelte:head>
  <title>Wildan Haydar Amru</title>
</svelte:head>

<main>
  <header>
    <h2>wildan haydar amru</h2>

    <div class="badges-container">
      {#each badgeContents as badge}
        <Badge class="w-fit" variant="secondary">{badge}</Badge>
      {/each}
    </div>

    {#await data.intro}
      <SkeletonDescription />
      <SkeletonDescription />
      <SkeletonDescription />
    {:then intro}
      <p>
        {@html marked(intro ? intro.description : "")}
      </p>
    {/await}
  </header>

  <article class="recent-projects">
    <h2>recent projects</h2>

    <RecentProject
      recentProjects={data.recentProjects}
      techstack={data.techstack}
    />
  </article>

  <article class="service">
    <h2>service</h2>

    {#await data.intro}
      <SkeletonDescription />
    {:then intro}
      <p>
        {intro ? intro.serviceDescription : ""}
      </p>

      <Button variant="outline" class="capitalize mt-3">contact me</Button>
    {/await}
  </article>
</main>

<style lang="postcss">
  main {
    @apply space-y-5;
  }

  .badges-container {
    @apply flex flex-wrap gap-2;
  }
</style>
