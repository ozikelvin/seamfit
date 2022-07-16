import axios from "axios";

const BASE_URL: string = 'https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc';

export const searchGif = async(value:string | undefined) => {
    try{
     const res = await axios.get(`${BASE_URL}&q=${value}&limit=25&offset=0&rating=Y&lang=en`);
    return res.data ;
    }catch(err){
        throw err ;
    }
}