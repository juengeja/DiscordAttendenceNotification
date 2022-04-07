<script>

</script>

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

<style>
.b1 {
  background-color: greenyellow;
}

.b2 {
  background-color: red;
}

h1 {
  color: #ff7b00; 
  font-size: 5em;
  font-weight: 200;
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
label {
  padding-right: 4px;
}

</style>
  