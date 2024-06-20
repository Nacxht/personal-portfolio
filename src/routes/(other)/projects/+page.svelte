<script lang="ts">
  import Input from "$lib/components/ui/input/input.svelte";
  import * as Card from "$lib/components/ui/card";
  import { snakeToNormal } from "$lib/utils/string_manipulator.js";
  import Fuse from "fuse.js";
  import SkeletonCard from "$lib/components/reusable/skeleton-card.svelte";

  // Data
  export let data;
  const { projects } = data;

  // Project
  let filteredProjectList: {
    id: number;
    name?: string;
    description?: string;
    techstack?: string;
    createdAt?: string;
    updatedAt?: string;
  }[] = [];

  // Search status
  let isNotFound: boolean = false;

  // Input value
  let search: string = "";

  // Search handler
  $: if (search) {
    async function searchHandler(search: string) {
      const fuse = new Fuse(await projects, { distance: 20, keys: ["name"] });

      const result = fuse
        .search(search.replaceAll(" ", "_"))
        .map((property) => property.item);

      if (result.length) {
        filteredProjectList = result;
        isNotFound = false;
        return;
      }

      isNotFound = true;
      return;
    }

    searchHandler(search);
  } else {
    filteredProjectList = [];
    isNotFound = false;
  }
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<main>
  <section class="search">
    <Input
      bind:value={search}
      type="text"
      placeholder="Search..."
      class="max-w-full md:max-w-xs"
    />
  </section>

  {#await data.projects}
    <section class="projects">
      <h4 class="col-span-full text-center">Loading Projects...</h4>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </section>
  {:then projects}
    {#if !isNotFound}
      <section class="projects">
        {#each filteredProjectList.length ? filteredProjectList : projects as project}
          {@const { name, description, techstack: projectTechstack } = project}

          <a href="/projects/{name}">
            <Card.Root class="h-full">
              <Card.Header class="min-h-36">
                <Card.Title class="capitalize"
                  >{snakeToNormal(`${name}`)}</Card.Title
                >
                <Card.Description>{description}</Card.Description>
              </Card.Header>

              <Card.Content>
                <div class="divider"></div>
              </Card.Content>

              <Card.Footer>
                <div class="techstack-container">
                  {#await data.techstack}
                    Loading Techstack...
                  {:then techstack}
                    {#each `${projectTechstack}`.split(",") as projectTech}
                      {@const techstackList = techstack.filter(
                        (tech) => tech.name === projectTech,
                      )}

                      {#each techstackList as tech}
                        <img src={tech.imgLink} alt={name} class="techstack" />
                      {/each}
                    {/each}
                  {/await}
                </div>
              </Card.Footer>
            </Card.Root>
          </a>
        {/each}
      </section>
    {/if}
  {/await}
</main>

<style lang="postcss">
  main {
    @apply space-y-3;
  }

  .projects {
    @apply grid grid-cols-1 md:grid-cols-2 gap-3;
  }

  .projects .techstack-container {
    @apply flex flex-wrap gap-3;
  }

  .projects img.techstack {
    @apply h-7 w-7;
  }
</style>
