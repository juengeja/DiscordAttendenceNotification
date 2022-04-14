<script>

 export let chatID;


/*export let discord_server;
export let server_nickname;
export let specific_channel;
export let channel_nickname;
export let discord_user;
export let user_nickname;*/

let tableData = [
        {Number:1, Type: "Discord-Channel", Name: "124324234445", Nickname: "Hans"},
        {Number:2, Type: "User-Name", Name: "123131232342", Nickname: "Peter"},
        {Number:3, Type: "User-Name", Name: "123123123234", Nickname: "Maier"}
]

let entry = document.getElementsByName("entry");

function addTableRow() {
  let type = "TEST";

  let tabelle = document.getElementById("tabelle");

  let newRow = tabelle.insertAdjacentHTML(1,type);
  let cell1 = newRow.insertAdjacentHTML(0,"Test");
  let cell2 = newRow.insertAdjacentHTML(1,"asdasdad");

  cell1.innerHTML = type;
}

</script>

<body class="body2">
<h1><b>Add to List of Notifications for: </b></h1>

<form class="formular">
  <p>Logged in with Chat-ID: <b class="b"> {chatID}</b></p>

<div class="grid-container">
  <div class="grid-item"><label for="discord_server">discord server:</label></div>
  <div class="grid-item"><input class="l1" id="discord_server" type="text" name="discord_server" value="" placeholder="server-id"></div>  
  <div class="grid-item"><input class="l1" id="server_nickname" type="text" name="server_nickname" value="" placeholder="server-nickname"></div>
  <div class="grid-item"><label for="specific_channel">specific channel:</label></div>
  <div class="grid-item"><input id="specific_channel" tpye="text" name="specific_channel" value="" placeholder="channel-id"></div>
  <div class="grid-item"><input id="channel" tpye="text" name="channel_nickname" value="" placeholder="channel-nickname"></div>
  <div class="grid-item"><label for="discord_user">discord user:</label></div>
  <div class="grid-item"><input id="discord_user" tpye="text" name="discord_user" value="" placeholder="user-id"></div>
  <div class="grid-item"><input id="user_nickname" tpye="text" name="user_nickname" value="" placeholder="user-nickname"></div>
</div>

<div class="buttons">
  <button class="button1" type="submit">Submit</button>
  <button class="button3">Update</button> 
  <button class="button2" type="reset">Reset</button>
</div>

<div class="tabellendiv">
  <table>
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
  