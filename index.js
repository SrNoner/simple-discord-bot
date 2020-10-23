
//over all this bot is just for fun nothing more 

const Discord = require('discord.js');
const {
	prefix, //is not used but you can implement it
	token,
} = require('./confug.json');
const ytdl = require('ytdl-core');
const client = new Discord.Client();


var bruh; 

client.once('ready', () => {
	console.log('Ready!');
	bruh=true;
});

client.once('reconnecting', () => {
	console.log('Reconnecting!');
});

client.once('disconnect', () => {
	console.log('Disconnect!');
});


async function dois(){
  if(bruh==true)
  {
	let a;
	// this part as the objective to randomly start the switch
	a=Math.floor(Math.random()*2);
	console.log("----------");
	console.log("a =",a);
	console.log("---------");
	
	if(a==1)
	{
		let op;
		op=Math.floor(Math.random()*20);
		console.log("op =",op);
		
		switch (op) {
			case 0:
					
				const au = await client.channels.cache.get("id of the voice channel").join();
					const dispatcher = au.play('./file.mp3'); //mp3 exemple

					dispatcher.on('start', () => {
						console.log('audio.mp3 is now playing!');
					});

					dispatcher.on('finish', () => {
						console.log('audio.mp3 has finished playing!');
						
					});

					dispatcher.on('error', console.error);
			
				break;
			case 1:
				client.channels.cache.get("id of the text channel").send("text");
				break;
		
			case 2:
				const au1 = await client.channels.cache.get("id of the voice channel ").join();
				const dispatcher2 = au1.play(ytdl('https://www.youtube.com/watch?v=2ZIpFytCSVc')); ////youtube exemple

				dispatcher2.on('start', () => {
					console.log('audio.mp3 is now playing!');
				});

				dispatcher2.on('finish', () => {
					console.log('audio.mp3 has finished playing!');
					
				});

				dispatcher2.on('error', console.error);
			break;
			
			
			
			default:

			break;
		}

	}

  }
}
  setInterval(dois,30000);



client.login(token);