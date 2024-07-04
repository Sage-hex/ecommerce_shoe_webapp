import { useReducer, useState } from "react";
const initialState = []; 

const reducer = (action,state) => {
    if(action.type === "addProduct"){
        // return [...state, {name:action.payload.name, image:action.payload.image,description:action.payload.description,price:action.payload.price,category: action.payload.category}];
        return[...state,{...action.payload}];
    }else{
        throw new Error()
    }
}

const Post = () =>{
    const [products, dispatch] = useReducer(reducer, initialState);
    const [inputValues, setInputValues] = useState({});
    const [displayImage, setDisplayImage] = useState(placeholder);

    const HandleUploadImage = (e) => {
        const file = e.target.files[0];
        const save = URL.createObjectURL(file)
        setInputValues((prev) =>{return{...prev, image:save}});
        setDisplayImage(save);
    }

    const addProduct=() =>{
        console.log(products)
        dispatch({type: "addProduct", payload: inputValues})

    }

    return(
        <div className="Post-Container">

            <div className="Post-Form">
                <img src="{placeholder}" alt="" />
                <input type="file"  accept="image/x-png,image/gif,image/jpeg" id="image" onChange={(e) => HandleUploadImage(e)}/>
                <label htmlFor="image">add image</label>

            </div>
        </div>
    )
}


// Home

import Card