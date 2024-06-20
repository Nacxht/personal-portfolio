<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import { HamburgerMenu, Home } from "svelte-radix";
  import * as Dialog from "$lib/components/ui/dialog";
  import { buttonVariants } from "../ui/button";
  import { afterNavigate, beforeNavigate } from "$app/navigation";

  const pages = ["projects", "experiences", "techstack", "contact"];

  // Anti Navigation
  let isNavigate: boolean = false;

  beforeNavigate(() => {
    isNavigate = true;
  });

  afterNavigate(() => {
    setTimeout(() => {
      isNavigate = false;
    }, 200);
  });

  $: isNavigate = isNavigate;
</script>

<nav>
  <div class="nav-container">
    <Button href="/" variant="ghost" size="icon">
      <!-- {#if isNavigate}
        <img
          src="https://api.iconify.design/svg-spinners:270-ring-with-bg.svg?color=%23888888"
          alt="loader"
        />
      {:else} -->
      <Home />
      <!-- {/if} -->
    </Button>

    <Dialog.Root>
      <Dialog.Trigger
        class={buttonVariants({ variant: "ghost", size: "icon" })}
      >
        <!-- {#if isNavigate}
          <img
            src="https://api.iconify.design/svg-spinners:270-ring-with-bg.svg?color=%23888888"
            alt="loader"
          />
        {:else} -->
        <HamburgerMenu />
        <!-- {/if} -->
      </Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Pages</Dialog.Title>
          <div class="divider"></div>
        </Dialog.Header>

        <div class="button-container">
          {#each pages as page}
            <Dialog.Close>
              <Button
                href="/{page}"
                class="capitalize w-full"
                variant="secondary"
              >
                {page}
              </Button>
            </Dialog.Close>
          {/each}
        </div>
      </Dialog.Content>
    </Dialog.Root>
  </div>
</nav>

<style lang="postcss">
  nav {
    @apply bg-gray-900 fixed w-full z-20 top-0 border-b border-gray-600
      bg-transparent backdrop-blur-lg;
  }

  .nav-container {
    @apply justify-between container py-4 mx-auto max-w-xl flex px-4;
  }

  .button-container {
    @apply grid grid-cols-2 gap-2;
  }
</style>
