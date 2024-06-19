<script lang="ts">
  import Badge from "$lib/components/ui/badge/badge.svelte";
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import { snakeToNormal } from "$lib/utils/string_manipulator.js";
  import { marked } from "marked";

  export let data;
  const { badgeContents } = data;
</script>

<svelte:head>
  <title>Wildan Haydar Amru</title>
  <meta name="robots" content="index, follow" />
</svelte:head>

<main>
  <header>
    <h2>wildan haydar amru</h2>

    <div class="badges-container">
      {#each badgeContents as badge}
        <Badge class="w-fit" variant="secondary">{badge}</Badge>
      {/each}
    </div>

    <p>
      {#await data.intro}
        Loading Description...
      {:then intro}
        {#if intro}
          {@html marked(intro.description)}
        {/if}
      {/await}
    </p>
  </header>

  <article class="recent-projects">
    <h2>recent projects</h2>

    <div class="card-container">
      {#await data.recentProjects}
        Loading Data...
      {:then recentProjects}
        {#each recentProjects as project}
          {@const { name, description, techstack: projectTechstack } = project}

          <a href="/projects/{name}">
            <Card.Root class="h-full">
              <Card.Header class="min-h-36">
                <Card.Title class="capitalize">
                  {snakeToNormal(name)}
                </Card.Title>
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
                    {#each projectTechstack.split(",") as projectTech}
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

        <Button variant="outline" href="/projects" class="w-full col-span-full">
          More Project...
        </Button>
      {/await}
    </div>
  </article>

  <article class="service">
    <h2>service</h2>

    {#await data.intro}
      <p>Loading Description...</p>
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

  .recent-projects .card-container {
    @apply grid grid-cols-1 md:grid-cols-2 gap-3;
  }

  .recent-projects .techstack-container {
    @apply flex flex-wrap gap-3;
  }

  .recent-projects img.techstack {
    @apply h-7 w-7;
  }
</style>
