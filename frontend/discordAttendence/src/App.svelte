<script>
  import router from '../node_modules/page/page.mjs';
  import Login from "@/components/Login.svelte";
  import Home from "@/components/Home.svelte";
  import { onMount } from "svelte";
  import { setContext, getContext } from "svelte";
  import { writable } from "svelte/store";

  let page;
  let params;
  let Chat_ID;
  /*let writableStore = writable(Chat_ID);

  setContext('ChatID', Chat_ID);*/
  
  const controller = new AbortController();
  const signal = controller.signal;
  
  async function handleClickSubmitLoginParent(){
    
    const response = await fetch(`http://localhost:8800/api/v1/persistence/get/chatId/${Chat_ID}`, {signal: signal, method: "GET"})
    
    const exists = await response.text()
    
    if(exists === `true`){
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
<Home bind:Chat_ID = {Chat_ID}/>
<!--<Table/>-->
{/if}

<style>

</style>
