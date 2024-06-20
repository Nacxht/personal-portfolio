<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card";
  import { Skeleton } from "$lib/components/ui/skeleton/index";

  export let data;
</script>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<main>
  <p>
    If you are interested in collaborating, have any questions, or just want to
    discuss further about projects or creative ideas, please do not hesitate to
    contact me. I am always open to new opportunities and happy to discuss how
    we can create something amazing together.
  </p>

  {#await data.contacts}
    <h4 class="text-center">Loading Contact...</h4>
    <section class="space-y-3">
      <Skeleton class="w-full h-32" />
      <Skeleton class="w-full h-32" />
    </section>
  {:then contacts}
    <section class="contact-container">
      <Card.Root>
        <Card.Header>
          <Card.Title tag="h4">Links</Card.Title>
        </Card.Header>

        <Card.Content>
          <div class="divider"></div>
        </Card.Content>

        <Card.Footer>
          <div class="link-container">
            {#each contacts as contact}
              {@const { name, link } = contact}

              {#if link}
                <Button variant="secondary" href={link} class="capitalize">
                  {name}
                </Button>
              {/if}
            {/each}
          </div>
        </Card.Footer>
      </Card.Root>
    </section>

    <section class="other">
      <Card.Root>
        <Card.Header>
          <Card.Title tag="h4">Other</Card.Title>
        </Card.Header>

        <Card.Content>
          <div class="divider"></div>
        </Card.Content>

        <Card.Footer>
          <div class="other-container">
            <ul>
              {#each contacts as contact}
                {@const { name, text } = contact}

                {#if text}
                  <li>
                    <span class="block large capitalize">{name} :</span>
                    <span class="block inline-code select-all">{text}</span>
                  </li>
                {/if}
              {/each}
            </ul>
          </div>
        </Card.Footer>
      </Card.Root>
    </section>
  {/await}
</main>

<style lang="postcss">
  main {
    @apply space-y-5;
  }

  li {
    @apply space-y-2;
  }

  .link-container {
    @apply flex flex-grow gap-3;
  }
</style>
