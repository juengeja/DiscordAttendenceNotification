<script>

</script>

<form name="Infos" onsubmit="return false" action="insert.php" method="post">
<h1><b>Add to List of Notifications:</b></h1>

<div class="grid-container">
  <div class="grid-item"><label for="discord_server">discord server:</label></div>
  <div class="grid-item"><input class="l1" id="discord_server" type="text" name="discord_server" value="" placeholder="server-id"></div>  
  <div class="grid-item"><input class="l1" id="server_nickname" type="text" name="server_nickname" value="" placeholder="server-nickname"></div>
  <div class="grid-item"><label for="specific_channel">specific channel:</label></div>
  <div class="grid-item"><input id="specific_channel" tpye="text" name="specific_channel" value="" placeholder="channel-id"></div>
  <div class="grid-item"><input id="channel" tpye="text" name="channel_nickname" value="" placeholder="channel-nickname"></div>
  <div class="grid-item"><label for="discord_user">discord user:</label></div>
  <div class="grid-item"><input id="discord_user" tpye="text" name="discord_user" value="" placeholder="user-id" required></div>
  <div class="grid-item"><input id="user_nickname" tpye="text" name="user_nickname" value="" placeholder="user-nickname"></div>
</div>

<div>
  <button class="b1" type="submit">Submit</button>
  <button class="b2" type="reset">Reset</button> 
</div>
</form>

<div id="Home" class="tabcontent"></div>

<style>
.b1 {
  text-align: center;
  height: 1%;
  width: 10%;
  color: black;
  background-color: greenyellow;
  outline: black;
  border-style: solid;
  border-width: 2px;
  font-size: 100%;
  cursor: pointer;

}

.b2 {
  text-align: center;
  height: 1%;
  width: 10%;
  color: white;
  background-color: red;
  outline: black;
  border-style: solid;
  border-width: 2px;
  font-size: 100%;
  cursor: pointer;
}

h1 {
  color: #ff7b00; 
  /*text-transform: uppercase;*/
  font-size: 5em;
  font-weight: 200;
  /*text-shadow: 3px 3px 5px rgb(129, 82, 25);*/
}

div {
  /*padding-right: 60%;
  text-align: right;
  padding-top: 0px;*/
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-left: 30%;
  padding-right: 40%;
  gap: 10px;
  grid-template-rows: repeat(100px, auto);
  text-align: right;
  align-items: baseline;
}
.l1 {
  padding-left: 5px;
} 
label {
  padding-right: 4px;
}

</style>
  