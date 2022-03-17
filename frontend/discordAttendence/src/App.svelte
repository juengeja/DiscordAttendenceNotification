<script>
  import Login from "@/components/Login.svelte";
  import Home from "@/components/Home.svelte";


  /*
  const webpages = [   
    { name: "Login", component: Login}, 
    { name: "Home", component: Home }
  ];
  let selectedPage = webpages[0];
  $: console.dir(selectedPage)
  const loadPage = (obj) => {selectedPage = obj};
*/

</script>

<main>
<Login />
<Home />
</main>


<!--
{#each webpages as webpageObj}
	<button class="tablink" 
					title={webpageObj.name}
					on:click={() => loadPage(webpageObj)}>{webpageObj.name}</button>
{/each}
 <svelte:component this={selectedPage.component} />
-->


<style>
  /*main {
    text-align: center;
    padding: 1em;
    max-width: 1000px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }*/
</style>
