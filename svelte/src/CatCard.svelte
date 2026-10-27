<script>
  let { cat, onAdopt } = $props();
</script>

<li>
  {cat.name}
  {#if cat.adopted}
    <span>(adopted)</span>
  {/if}
  <button onclick={() => onAdopt(cat.id)}>Adopt</button>
</li>
