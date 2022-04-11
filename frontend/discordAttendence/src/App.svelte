<script>
  import router from '../node_modules/page/page.mjs';
  import Login from "@/components/Login.svelte";
  import Home from "@/components/Home.svelte";

  let page;
  let params;
  let Chat_ID;

  async function handleClickSubmitLoginParent(){
    
    alert(Chat_ID);

    const exists = await fetch(`http://localhost:8800/api/v1/persistence/get/chatId/${Chat_ID}`, {signal: signal, method: "GET"})

    if(exists){
    window.location.href = "./Home.svelte"
    }
  }

  router('/', () => page = Login)
  router('/Home.svelte', (Context, next) => {
    params = Context.params;
    next();
  }, () => page = Home);

  router.start();
  
</script>

{#if page === Login}
  <Login bind:Chat_ID={Chat_ID} handleClickSubmitLogin={() => handleClickSubmitLoginParent()}/>
{/if}

{#if page === Home}
<!---->
<Home {Chat_ID}/>
<!--<Table/>-->
{/if}

<style>

</style>
