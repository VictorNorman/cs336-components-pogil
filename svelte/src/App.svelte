<script>
  import CatCard from "./CatCard.svelte";
  import LikeButton from "./LikeButton.svelte";

  let cats = $state([
    {
      id: 1,
      name: "Tabby",
      adopted: false,
    },
    {
      id: 2,
      name: "Mochi",
      adopted: false,
    },
  ]);

  let availableCount = $derived(
    cats.filter((cat) => {
      return !cat.adopted;
    }).length,
  );

  function adopt(id) {
    const cat = cats.find((c) => {
      return c.id === id;
    });
    cat.adopted = true;
  }
</script>

<LikeButton />
<h1>{availableCount} cats available</h1>
<ul>
  {#each cats as cat (cat.id)}
    <CatCard {cat} onAdopt={adopt} />
  {/each}
</ul>
