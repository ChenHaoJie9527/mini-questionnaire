import {setupWorker} from "msw";
import handles from "./handlers";

const server = setupWorker(...handles);

export default server;