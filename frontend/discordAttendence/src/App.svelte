<script>
  import Login from "@/components/Login.svelte";
  import Home from "@/components/Home.svelte";

  let page = "Login";
  let chatID = "";
  
  const controller = new AbortController();
  const signal = controller.signal;
  
  async function handleClickSubmitLoginParent(){
    
    const response = await fetch(`http://5.45.107.109:8800/api/v1/persistence/get/chatID/${chatID}`, {signal: signal, method: "GET"})
    const responseJson = await response.json();
    
    if(await responseJson.exists === true){
      page = "Home";
    }else{
      alert(`Chat-ID '${chatID}' is not registered. Please contact our Telegram-Bot!`)
    }
  }
</script>

{#if page === "Login"}
  <Login bind:chatID handleClickSubmitLogin={() => handleClickSubmitLoginParent()}/>
{/if}

{#if page === "Home"}
  <Home bind:chatID />
{/if}

<style>
</style>