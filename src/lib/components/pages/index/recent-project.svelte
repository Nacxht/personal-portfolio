<script lang="ts">
  import SkeletonCard from "$lib/components/reusable/skeleton-card.svelte";
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import type { Project } from "$lib/types/data/project";
  import type { Techstacks } from "$lib/types/data/techstack";
  import { snakeToNormal } from "$lib/utils/string_manipulator.js";
  import RecentTechstack from "./recent-techstack.svelte";

  export let recentProjects: Promise<Project[]>;
  export let techstack: Promise<Techstacks[]>;
</script>

<div class="card-container">
  {#await recentProjects}
    <SkeletonCard />
    <SkeletonCard />
  {:then projects}
    {#each projects as project}
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
            <RecentTechstack {projectTechstack} {techstack} />
          </Card.Footer>
        </Card.Root>
      </a>
    {/each}

    <Button variant="outline" href="/projects" class="w-full col-span-full">
      More Project...
    </Button>
  {/await}
</div>

<style lang="postcss">
  .card-container {
    @apply grid grid-cols-1 md:grid-cols-2 gap-3;
  }
</style>
