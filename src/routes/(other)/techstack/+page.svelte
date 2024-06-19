<script lang="ts">
  import { snakeToNormal } from "$lib/utils/string_manipulator.js";
  import * as Card from "$lib/components/ui/card";
  import * as Tooltip from "$lib/components/ui/tooltip";

  // Data
  export let data;
</script>

<svelte:head>
  <title>Techstack</title>
</svelte:head>

<main class="space-y-3">
  {#await data.techstackCategory}
    <p>Loading Techstack</p>
  {:then techstackCategory}
    {#each techstackCategory as category}
      {@const { name, techstack } = category}

      <Card.Root>
        <Card.Header>
          <Card.Title tag="h4">{name}</Card.Title>
        </Card.Header>

        <Card.Content>
          <div class="techstack-container">
            {#each techstack as tech}
              {@const { name, imgLink } = tech}

              <Tooltip.Root>
                <Tooltip.Trigger class="cursor-default">
                  <img src={imgLink} alt={name} />
                </Tooltip.Trigger>

                <Tooltip.Content>
                  <p class="text-black capitalize">{snakeToNormal(name)}</p>
                </Tooltip.Content>
              </Tooltip.Root>
            {/each}
          </div>
        </Card.Content>
      </Card.Root>
    {/each}
  {/await}
</main>

<style lang="postcss">
  .techstack-container {
    @apply flex flex-wrap gap-2;
  }

  .techstack-container img {
    @apply h-8 w-8;
  }
</style>
