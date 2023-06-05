import { api } from "../api";

export const login = async (email:string, pass: string): Promise< boolean > => {  

    const data: any = await api;
    
    if((email !== data.email) || (pass !== data.password)) return false;
    return true;
}
