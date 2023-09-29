import { io } from 'socket.io-client'
const URL = import.meta.env.NODE_ENV === 'production' ? import.meta.env.PRODUCTION_SERVER_URL : import.meta.env.SERVER_URL;

export const socket = io(URL, {autoConnect: false, withCredentials: true});