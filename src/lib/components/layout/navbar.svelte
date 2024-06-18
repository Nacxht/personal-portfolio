<script lang="ts">
  import Button from "../ui/button/button.svelte";
  import { HamburgerMenu, Home } from "svelte-radix";
  import * as Dialog from "$lib/components/ui/dialog";
  import { buttonVariants } from "../ui/button";
  import { beforeNavigate } from "$app/navigation";

  const pages = ["projects", "experiences", "techstack", "contact"];
</script>

<nav>
  <div class="nav-container">
    <Button href="/" variant="ghost" size="icon">
      <Home />
    </Button>

    <Dialog.Root>
      <Dialog.Trigger
        class={buttonVariants({ variant: "ghost", size: "icon" })}
      >
        <HamburgerMenu />
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
