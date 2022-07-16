import React , { useEffect , useState } from "react";
import { searchGif } from '../services/request';
import { useParams } from 'react-router-dom'
import { GifObj } from "../utils/interface";


export const Details : React.FC  = ()  =>{
        

    const [gifData , setGifData] = useState<GifObj>();
    const { name , gif } = useParams();
    

    useEffect(() =>{
        const OnsearchGif = async() =>{
            const res = await searchGif(name);
            if(res){
            const gifArr : GifObj[]  = res?.data;
            const index = gifArr.findIndex((obj) => obj.username === gif)
            setGifData(gifArr[index])
            }
          }
          OnsearchGif()
    }, [name, gif])

    console.log(gifData)

    return (
        <div role={'contentinfo'} className="wrapper" >
            <h1 > {gifData?.title} </h1>
            <div className="name"  >User name : <b> {gifData?.username} </b></div>
            <div className="img"  >
                <img src={gifData?.images?.fixed_height.url}  alt='GIF'/>
            </div>

        </div>
    )
}