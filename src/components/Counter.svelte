<script lang="ts">
  let count = 0;
</script>

<div>
  <p>Count: {count}</p>
  <button type="button" on:click={() => (count += 1)}> Increment </button>
</div>
