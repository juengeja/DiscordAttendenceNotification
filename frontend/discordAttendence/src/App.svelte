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

{#if page === Login}
<Login />
{/if}

{#if page === Home}
<Home />
{/if}

<style>

</style>
