<script>
//import Home from "./Home.svelte";
  import { onMount } from "svelte"

  let Chat_ID = 3;
  let listOfChat_IDs = [];
  
  onMount(handleClick)
  const controller = new AbortController();
  const signal = controller.signal;

  async function handleClick(){

    alert("Hi")
    const exists = await fetch(`http://localhost:8000/api/v1/persistence/get/chatId/${Chat_ID}`, {signal: signal})
    alert(exists)
  
    if(exists){
      alert("a")
      window.location.href = "./Home.svelte"
    }
  }

  
</script>

  <h1><b>Please enter your Chat-ID:</b></h1>
  <p>
    Contact our <a href="https://t.me/discordattendancenotificationbot">Telegram-Bot</a> to get your Chat-ID.
  </p>

  <div id="Login" class="tabcontent">
    <input bind:value={Chat_ID} />
  </div>

          {#if Chat_ID.length > 5}
    <button type="submit" onsubmit="return false" on:click={handleClick}>Submit</button>
  {/if}

  <!--
  <link
  href="https://fonts.googleapis.com/css?family=Overpass:100,400"
  rel="stylesheet"
  />
  -->
  
<style>
  h1 {
    color: #ff7b00;
    font-size: 5em;
    font-weight: 200;
  }
</style>
