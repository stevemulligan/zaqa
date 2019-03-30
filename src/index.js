import Focus from "@chrysalis-api/focus";
import { Model01 } from "@chrysalis-api/hardware-keyboardio-model01";

import express from 'express';
import Zaqa from "./classes/zaqa";

const app = express();
const z = new Zaqa();

const focus = new Focus({egress_callback: z.keypressClassback});

focus.open(Model01).then(() => {
	console.log("Keyboard is open and ready");
});

app.get('/at/:id/:r/:g/:b', async function(req, res){
	await focus.command("led.at", req.params.id, req.params.r, req.params.g, req.params.b);
	res.send('ok');
});

app.get('/all/:r/:g/:b', async function(req, res){
	await focus.command("led.setAll", req.params.r, req.params.g, req.params.b);
	res.send('ok');
});


app.listen(7890);

