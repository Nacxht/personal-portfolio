<script lang="ts">
  import Badge from "$lib/components/ui/badge/badge.svelte";
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import { snakeToNormal } from "$lib/utils/string_manipulator.js";
  import { marked } from "marked";

  export let data;
  const { intro, badgeContents, recentProjects, techstack } = data;
  const { description, serviceDescription } = intro;
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

    <p>
      {@html marked(description)}
    </p>
  </header>

  <article class="recent-projects">
    <h2>recent projects</h2>

    <div class="card-container">
      {#each recentProjects as project}
        {@const { name, description, techstack: projectTechstack } = project}

        <a href="/projects/{name}">
          <Card.Root class="h-full">
            <Card.Header class="min-h-24 md:min-h-28">
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
      <Button variant="outline" href="/projects" class="w-full col-span-full"
        >More Project...</Button
      >
    </div>
  </article>

  <article class="service">
    <h2>service</h2>

    <p>
      {serviceDescription}
    </p>

    <Button variant="outline" class="capitalize mt-3">contact me</Button>
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
    @apply flex flex-wrap gap-1;
  }

  .recent-projects img.techstack {
    @apply h-7 w-7;
  }
</style>
