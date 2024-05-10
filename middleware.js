import { updateSession } from "./lib";

export async function middleware(req){
    return await updateSession(req);
}