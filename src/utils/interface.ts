import { fixedHeight } from "./types";

export interface GifObj {
    username:string;
    title:string;
    id:string;
    url:string;
    images:{
        fixed_height:fixedHeight;

    }

}

export interface Props {
    value?: string;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }