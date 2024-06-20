<script lang="ts">
  import type { Techstacks } from "$lib/types/data/techstack";

  export let projectTechstack: string;
  export let techstack: Promise<Techstacks[]>;
</script>

<div class="techstack-container">
  {#await techstack}
    <!--  -->
  {:then techstacks}
    {#each projectTechstack.split(",") as projectTech}
      {@const techstackList = techstacks.filter(
        (tech) => tech.name === projectTech,
      )}

      {#each techstackList as tech}
        <img src={tech.imgLink} alt={tech.name} class="techstack" />
      {/each}
    {/each}
  {/await}
</div>

<style lang="postcss">
  .techstack-container {
    @apply flex flex-wrap gap-3;
  }

  img.techstack {
    @apply h-7 w-7;
  }
</style>
