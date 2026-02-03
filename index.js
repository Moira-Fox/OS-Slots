
const WebSocket = require("ws");

const wss = new WebSocket.Server({port:8082});
let WS = null
var connections = {};
wss.on('connection', ws => {
	WS = ws
	console.log("connected");
	ws.on("close",()=>{
		
	})
	
	ws.on("message", function MSG(message) {
		
	});

})
const readline = require('node:readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function waitForInput(ws){

	rl.question('', resp => {
		if(WS!=null)
		{	
			if(resp.toLowerCase()==="go"||resp.length==0){
				WS.send('go');
			}
		}else{
			console.log("The browser source is not connected.")
		}
		waitForInput()
	});
}
console.log("You must reload the browser source.")
console.log("press enter to re-run the slots.")
waitForInput();


