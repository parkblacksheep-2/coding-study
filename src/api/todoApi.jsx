import axious from "axios";
export const API_SERVER_HOST ="http://localhost:5173";

const prefix='${API_SERVER_HOST}/api/todo';

export const getOne =async(tno) => {
    const res = await axious.get('{prefix}/${tno');
    return res.data;
};