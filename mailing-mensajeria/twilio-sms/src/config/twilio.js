import twilio from "twilio";
import {config} from "./config.js";

//generamos el cliente para usar twilio

export const twilioClient = twilio(config.twilio.account,config.twilio.token)
