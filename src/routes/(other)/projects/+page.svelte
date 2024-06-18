<script lang="ts">
  import Input from "$lib/components/ui/input/input.svelte";
  import * as Card from "$lib/components/ui/card";
  import { snakeToNormal } from "$lib/utils/string_manipulator.js";
  import Fuse from "fuse.js";

  // Data
  export let data;
  const { projects, techstack } = data;

  // Project
  let projectList = projects;

  // Input value
  let search: string = "";

  // Search handler
  $: if (search) {
    const fuse = new Fuse(projects, { distance: 20, keys: ["name"] });

    projectList = fuse
      .search(search.replaceAll(" ", "_"))
      .map((property) => property.item);
  } else {
    projectList = projects;
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

  <section class="projects">
    {#each projectList as project}
      {@const { name, description, techstack: projectTechstack } = project}

      <a href="/project/{name}">
        <Card.Root class="h-full">
          <Card.Header class="min-h-32">
            <Card.Title class="capitalize">{snakeToNormal(name)}</Card.Title>
            <Card.Description>{description}</Card.Description>
          </Card.Header>

          <Card.Content>
            <div class="divider"></div>
          </Card.Content>

          <Card.Footer>
            <div class="techstack-container">
              {#each projectTechstack.split(",") as projectTech}
                {@const techstackList = techstack.filter(
                  (tech) => tech.name === projectTech,
                )}

                {#each techstackList as tech}
                  <img src={tech.imgLink} alt={name} class="techstack" />
                {/each}
              {/each}
            </div>
          </Card.Footer>
        </Card.Root>
      </a>
    {/each}
  </section>
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
