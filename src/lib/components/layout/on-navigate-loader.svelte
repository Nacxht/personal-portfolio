<script lang="ts">
  import { beforeNavigate, afterNavigate, onNavigate } from "$app/navigation";
  import { cubicOut } from "svelte/easing";
  import { tweened } from "svelte/motion";

  const proggress = tweened(0, {
    duration: 500,
    easing: cubicOut,
  });

  let isLoading = false;

  beforeNavigate(() => {
    isLoading = true;
    proggress.set(0);
  });

  onNavigate(() => {
    proggress.set(0.5);
  });

  afterNavigate(async () => {
    function delay(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    await proggress.set(1).then(() => {
      isLoading = false;
    });

    await delay(200);
    proggress.set(0);
  });
</script>

<section class="proggress-bar-container">
  <div
    class="proggress-bar {!isLoading ? 'hidden-proggress' : ''}"
    style="transform: scaleX({$proggress});"
  ></div>
</section>

<style lang="postcss">
  .proggress-bar {
    @apply top-0 left-0
        w-full h-[2px]
        bg-orange-500
        origin-left
        fixed z-[9999];
  }

  .hidden-proggress {
    @apply opacity-0
        transition-opacity duration-300;
  }
</style>
