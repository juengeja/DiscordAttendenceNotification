<script>
  const controller = new AbortController();
  const signal = controller.signal;

  export let chatID;
  let channelTableData = [];
  let userTableData = [];
  let guildTableData = [];

  let discordServer = "";
  let serverNickname = "";
  let specificChannel = "";
  let channelNickname = "";
  let discordUser = "";
  let userNickname = "";

  let tableData = [
    {Number:1, Type: "Discord-Channel", Name: "124324234445", Nickname: "Hans"},
    {Number:2, Type: "User-Name", Name: "123131232342", Nickname: "Peter"},
    {Number:3, Type: "User-Name", Name: "123123123234", Nickname: "Maier"}
  ]

  let entry = document.getElementsByName("entry");

  /*
  function addTableRow() {
    let type = "TEST";

    let tabelle = document.getElementById("tabelle");

    let newRow = tabelle.insertAdjacentHTML(1,type);
    let cell1 = newRow.insertAdjacentHTML(0,"Test");
    let cell2 = newRow.insertAdjacentHTML(1,"asdasdad");

    cell1.innerHTML = type;
  }*/

  const tabellendiv = document.querySelector("tabellendiv");

  function handleClick() {
  //let btn4 = undefined;
  let btn4 = document.querySelector(".button4")
    //let btn = e.target
    //btn.closest("tr").remove();

  btn4.addEventListener("click", handleDelete(btn4))
  //btn4.addEventListener("click", function (e) {
    //console.log(e.target.closest("tr"))
  }

  function handleDelete(btn4) { 
    let btn = btn4
    const tr = btn4.closest("tr");
    console.log(tr)
    btn.closest("tr").remove();
   }


   //tabellendiv.addEventListener("click", function (e) {
     //handleClick(e)
     //alert("HI")
   //} );
  
  async function loadUserData() {
    const channelResponse = await fetch(`http://localhost:8800/api/v1/persistence/get/channelByID/${chatID}`, {signal: signal, method: "GET"});
    channelTableData = await channelResponse.json();

    const userResponse = await fetch(`http://localhost:8800/api/v1/persistence/get/userByID/${chatID}`, {signal: signal, method: "GET"});
    userTableData = await userResponse.json();

    const guildResponse = await fetch(`http://localhost:8800/api/v1/persistence/get/guildByID/${chatID}`, {signal: signal, method: "GET"});
    guildTableData = await guildResponse.json();
  }
  async function addUserData() {
    if(specificChannel !== "" && chatID !== undefined && typeof(specificChannel) === Number){
      if(channelNickname === "") channelNickname = undefined;
      const addChannelResponse = await fetch(`http://localhost:8800/api/v1/persistence/post/channel/`, {signal: signal, method: "POST", body: {"channelID":specificChannel, "chatID":chatID, "name":channelNickname}});
      const addChannelResponseJson = await addChannelResponse.json();
      console.log(await addChannelResponseJson.status);
    } else {
      alert("IDs have to be valid numbers!")
    }
    if(discordUser !== "" && chatID !== undefined && typeof(discordUser) === Number){
      if(userNickname === "") userNickname = undefined;
      const addUserResponse = await fetch(`http://localhost:8800/api/v1/persistence/post/user/`, {signal: signal, method: "POST", body: {"userID":discordUser, "chatID":chatID, "name":userNickname}});
      const addUserResponseJson = await addUserResponse.json();
      console.log(await addUserResponseJson.status);
    } else {
      alert("IDs have to be valid numbers!")
    }
    if(discordServer !== "" && chatID !== undefined && typeof(discordServer) === Number){
      if(serverNickname === "") serverNickname = undefined;
      const addGuildResponse = await fetch(`http://localhost:8800/api/v1/persistence/post/guild/`, {signal: signal, method: "POST", body: {"guildID":discordServer, "chatID":chatID, "name":serverNickname}});
      const addGuildResponseJson = await addGuildResponse.json();
      console.log(await addGuildResponseJson.status);
    } else {
      alert("IDs have to be valid numbers!")
    }
    reload();
  }
  async function deleteUserData(deleteChannel, deleteUser, deleteGuild) {
    if(deleteChannel.channelID !== undefined && deleteChannel.chatID !== undefined && deleteChannel.name !== undefined){
      const deleteChannelResponse = await fetch(`http://localhost:8800/api/v1/persistence/delete/channel/`, {signal: signal, method: "DELETE", body: deleteChannel});
      const deleteChannelResponseJson = await deleteChannelResponse.json();
      console.log(await deleteChannelResponseJson.status);
    }
    if(deleteUser.userID !== undefined && deleteUser.chatID !== undefined && deleteUser.name !== undefined){
      const deleteUserResponse = await fetch(`http://localhost:8800/api/v1/persistence/delete/user/`, {signal: signal, method: "DELETE", body: deleteUser});
      const deleteUserResponseJson = await deleteUserResponse.json();
      console.log(await deleteUserResponseJson.status);
    }
    if(deleteGuild.guildID !== undefined && deleteGuild.chatID !== undefined && deleteGuild.name !== undefined){
      const deleteGuildResponse = await fetch(`http://localhost:8800/api/v1/persistence/delete/guild/`, {signal: signal, method: "DELETE", body: deleteGuild});
      const deleteGuildResponseJson = await deleteGuildResponse.json();
      console.log(await deleteGuildResponseJson.status);
    }
    reload();
  }
  async function reload(){
    loadUserData();
    buildTable();
  }
  async function buildTable(){

  }
  loadUserData()
</script>

<body class="body2">
<h1><b>Add to List of Notifications for: </b></h1>

<form class="formular">
  <p>Logged in with Chat-ID: <b class="b"> {chatID}</b></p>

<div class="grid-container">
  <div class="grid-item"><label for="discord_server">discord server:</label></div>
  <div class="grid-item"><input class="l1" id="discord_server" type="text" name="discord_server" bind:value={discordServer} placeholder="server-id"></div>  
  <div class="grid-item"><input class="l1" id="server_nickname" type="text" name="server_nickname" bind:value={serverNickname} placeholder="server-nickname"></div>
  <div class="grid-item"><label for="specific_channel">specific channel:</label></div>
  <div class="grid-item"><input id="specific_channel" tpye="text" name="specific_channel" bind:value={specificChannel} placeholder="channel-id"></div>
  <div class="grid-item"><input id="channel" tpye="text" name="channel_nickname" bind:value={channelNickname} placeholder="channel-nickname"></div>
  <div class="grid-item"><label for="discord_user">discord user:</label></div>
  <div class="grid-item"><input id="discord_user" tpye="text" name="discord_user" bind:value={discordUser} placeholder="user-id"></div>
  <div class="grid-item"><input id="user_nickname" tpye="text" name="user_nickname" bind:value={userNickname} placeholder="user-nickname"></div>
</div>

<div class="buttons">
  <button class="button1" type="submit" on:click={() => addUserData()}>Submit</button>
  <button class="button3">Update</button> 
  <button class="button2" type="reset">Reset</button>
</div>

<div class="tabellendiv">
  <table class="table">
  <thead>
    <tr>
        {#each Object.keys(tableData[0]) as columnHeading}
        <th>{columnHeading}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each Object.values(tableData) as row}
    <tr>
      {#each Object.values(row) as cell}
        <td>{cell}</td>
      {/each}
      <button class="button4" type="reset" on:click={() => handleClick()}>Delete</button>
    </tr>
  {/each}
  </tbody>
</table>
</div>
</form>
</body>

<style>

table {
      border: 3px solid;
      border-color:rgb(180, 72, 159);
      margin-top: 8%;
      margin-left: 8px;
      color: white;
      width: 100%;
      margin-bottom: 1%;
      border-collapse:collapse;
    }

    th{
      border: 3px solid;
      border-collapse: collapse;
      border-color:rgb(180, 72, 159);
      color: aqua;
      padding: 5px;

    }

    td {
      border: 3px solid;
      border-collapse: collapse;
      border-color:rgb(180, 72, 159);
      color: white;
      padding: 5px;

    }


.tabellendiv {
  padding-left: 5%;
  width: 100%;
  background-color: transparent;
  border-radius: 100px;
  padding-bottom: 4vh;
}
  .tabelle {
    color:white;
    width: 100%;
    margin-top: 5%;
    border-color: aqua;
    background-color: black;
  }
p {
  color:white;
  font-style: italic;
  font-size: 110%;
  text-align: center;
}

.b {
  color: rgb(74, 140, 202);
}


.body2 {
  background-image: linear-gradient(to right, rgb(6, 6, 22) ,rgb(20, 21, 66) , rgb(50, 25, 95), rgb(48, 23, 94), rgb(77, 11, 68), rgb(63, 29, 58), rgb(27, 2, 23));
  height: 100%;
  min-height: 99vh;
} 

.button1 {
  background-color: transparent;
  border-start-start-radius: 50px;
  border-bottom-left-radius: 50px;
  background-image: linear-gradient(to right, rgb(8, 94, 37) ,rgb(24, 100, 56) , rgb(23, 117, 46), rgb(23, 110, 59), rgb(20, 117, 53), rgb(25, 122, 58), rgb(32, 121, 77));
  color: white;
}

.button2 { 
  border-end-end-radius: 50px;
  border-top-right-radius: 50px;
  color: rgb(255, 255, 255);
  background: linear-gradient(to right, rgb(124, 45, 70) ,rgb(128, 23, 46) , rgb(128, 14, 33), rgb(110, 10, 10));
  border-color: rgb(146, 23, 44);
}

.button3 {
  background-color: transparent;
  background-image: linear-gradient(to right, rgb(45, 107, 71) ,rgb(66, 74, 165) , rgb(58, 67, 184), rgb(68, 61, 170), rgb(37, 65, 168), rgb(65, 46, 177), rgb(143, 66, 66));
  color: white
}

.button4 { 
  color: rgb(255, 255, 255);
  background: linear-gradient(to right, rgb(124, 45, 70) ,rgb(128, 23, 46) , rgb(128, 14, 33), rgb(110, 10, 10));
  border-color: rgb(146, 23, 44);
}

h1 {
  color: white; 
  font-size: 5em;
  font-weight: 200;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 2%;
  gap: 10px;
  grid-template-rows: repeat(100px, auto);
  text-align: right;
  align-items: baseline;
}

.grid-item {
  color: white;
}
label {
  padding-right: 4px;
}

.formular {
  padding-top: 1%;
  margin-left: 33%;
  width: 30%;
  padding-right: 4%;
  background-color: transparent;
  border-radius: 100px;
  box-shadow: 0 5px 80px 70px rgba(99, 59, 117, 0.3);
  padding-bottom: 1vh;
}

.buttons{
  margin-top: 5%;
  padding-bottom: 5%;
  margin-left: 13%;
}

</style>
  