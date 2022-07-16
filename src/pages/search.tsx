import React , { useState} from "react";
import { TextInput } from "../components/Text";
import { searchGif } from '../services/request';
import { useNavigate } from 'react-router-dom'; 
import { GifObj } from "../utils/interface";

export const Search: React.FC = ()  => {
    
    const navigate = useNavigate();
    const [text, setText] = useState<string>('');
    const [gifData , setGifData] = useState<GifObj[]>([]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setText(e.target.value)
    }
    const OnsearchGif = async() =>{
      const res = await searchGif(text);
      if(res){
        setGifData(res?.data);
      }
    }

return (
    <React.Fragment>
             <h2 className="giphy" >Giphy</h2>
            <div className="search" >   
       
        <TextInput  value={text} handleChange={onChange}  />
            <button onClick={OnsearchGif} >search</button>
            </div>

        <div>
        <div className="gifs" >
            {
                gifData.map((obj , i) => {

              return  obj?.username.trim() !== '' &&  (
                        <div className="gif" onClick={() => navigate(`/gif/${text}/${obj.username}`)} key={i} >
                       <img src={obj.images.fixed_height.url} alt="gif" /> <span className="li">{ obj?.username }    </span>
                       </div> 
                      )
                })
            }
            </div>
        </div>

    </React.Fragment>
)
}