<script>
  import router from '../node_modules/page/page.mjs';
  import Login from "@/components/Login.svelte";
  import Home from "@/components/Home.svelte";

  let page;
  let params;



  async function handleClick(){

    alert(Chat_ID);

    const exists = await fetch(`http://localhost:8800/api/v1/persistence/get/chatId/${Chat_ID}`, {signal: signal, method: "GET"})

    if(exists){
    window.location.href = "./Home.svelte"
    }
  }


  let Chat_ID;

  const addChatID = (event) => {
    Chat_ID = [Chat_ID, event.detail];
  };

  //let Chat_ID = 123456789;
  //alert(chat_ID);

  router('/', () => page = Login)
  router('/Home.svelte', (Context, next) => {
    params = Context.params;
    next();
  }, () => page = Home);

  router.start();
  
</script>

<!--
<Login bind:Chat_ID/>
  <p>{Chat_ID}</p>
-->

{#if page === Login}
<!--<Login bind:value={Chat_ID}/>-->
  <Login {Chat_ID} handleClick={handleClick}/>
{/if}

{#if page === Home}
<!---->
<Home {Chat_ID}/>
{/if}

<style>

</style>
