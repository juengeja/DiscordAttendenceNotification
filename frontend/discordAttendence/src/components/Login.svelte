
<script>
//import Home from "./Home.svelte";

  let Chat_ID = "";
  let listOfChat_IDs = [];

  function handleClick(){
    listOfChat_IDs.push(Chat_ID);
    /*alert(JSON.stringify(listOfChat_IDs));*/
    window.location.href = "./Home.svelte"
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
    <button type="submit" onsubmit="return false" onclick="seitewechseln" on:click={handleClick}>Submit</button>
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
