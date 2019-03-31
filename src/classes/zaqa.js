import axios from 'axios';
const config = require('config');

export default class Zaqa {
	constructor()
	{

	}

	keypressClassback(data)
	{
		const cmd = data.split(' ');
		if (cmd[0] === "ackall")
		{
			config.get('app.ackall_endpoints').forEach((e) => {
				axios.get(e).then((res) => {
					console.log(res.data);
					console.log("called ackall endpoint " + e);
				}).catch((err) => {
					console.log(err);
					console.log("error calling ackall endpoint " + e);
				});
			});
		}
		else if (cmd[0] === "ack")
		{
			config.get('app.ack_endpoints').forEach((e) => {
				axios.get(e.url, {params: {[e.field_name]: cmd[1]}}).then((res) => {
					console.log(res.data);
					console.log("called ack endpoint " + e.url);
				}).catch((err) => {
					console.log(err);
					console.log("error calling ack endpoint " + e.url);
				});
			});
		}
		console.log("ZAQ: " + data);
	}
}
