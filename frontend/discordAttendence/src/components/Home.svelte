<script>
  let userInput = "";
  let listOfUserInputs = [];

  function handleClick(){
    listOfUserInputs.push(userInput);
    alert(JSON.stringify(listOfUserInputs));
  }
</script>

  <h1>Please enter your Chat-ID:</h1>
  <p>
    Contact our <a href="https://t.me/discordattendancenotificationbot">Telegram-Bot</a> to get your Chat-ID.
  </p>

  <div>
    <input bind:value={userInput} />
  </div>

  {#if userInput.length > 5}
    <button on:click={handleClick}> Submit </button>
  {/if}
  
  <link
  href="https://fonts.googleapis.com/css?family=Overpass:100,400"
  rel="stylesheet"
  />
  
<style>
  h1 {
    color: #ff7b00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 200;
  }
</style>
