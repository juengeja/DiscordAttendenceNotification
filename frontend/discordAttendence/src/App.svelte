<script>
  import router from '../node_modules/page/page.mjs';

  import Login from "@/components/Login.svelte";
  import Home from "@/components/Home.svelte";

  let page;
  let params;

  router('/', () => page = Login)
  router('/Home.svelte', (Context, next) => {
    params = Context.params;
    next();
  }, () => page = Home);

  router.start();
  
</script>


<!--
  <svelte:component this={page} {params} />
-->

{#if page === Login}
<Login />
{/if}

{#if page === Home}
<Home />
{/if}

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
