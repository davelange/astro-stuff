<script lang="ts">
  let count = 0;
</script>

<div>
  <p>Svelte</p>
  <div class="flex gap-4 items-center">
    <button
      type="button"
      on:click={() => (count += 1)}
      class="bg-indigo-500 py-2 px-8"
    >
      Increment
    </button>
    <p>Count: {count}</p>
  </div>
</div>
