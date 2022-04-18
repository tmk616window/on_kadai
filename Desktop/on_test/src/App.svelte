<script lang="ts">
	export let text: string;
	export let counter: number;
  type content = {
    counter: number,
    text: string
  }
  let counterList: number[] = []
  let contents: content[] = [{counter: 0, text: "new"}];
  
  const addContent = () => {
    contents = [...contents, {counter: 0, text: "new"}];
    console.log(contents);
  };

  const removeContent = (id: number) => {
    contents = contents.filter((_, i) => i !== id)
  };

	const handleAddCounter = (index: number) => {
		contents[index].counter += 1;
	}

	const handleRemoveCounter = (index: number) => {
		contents[index].counter -= 1;
	}
</script>

<main>
  <h1>Multiple Counter</h1>
  {#each contents as content, index}
    <div key={index} id={index}>
      <input bind:value={contents[index].text} >
      <p>{contents[index].counter}</p>
      <button on:click={() => handleAddCounter(index)}>
        add
      </button>
      <button on:click={() => handleRemoveCounter(index)}>
        remove
      </button>
      <button on:click={() => removeContent(index)}>
        removeContent
      </button>
    </div>
  {/each}
  <button on:click={addContent}>new counter</button>
  <div>
    {#each contents as content, index}
      {contents[index].text}
      {contents[index].counter}
    {/each}
  </div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>