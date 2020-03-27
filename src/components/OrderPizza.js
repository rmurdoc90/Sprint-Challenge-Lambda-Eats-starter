import React, { useState} from "react";
import axios from "axios";


export default function OrderPizza(){
    
    const [post, setPost] = useState([]);
    
    const [formState, setFormState] = useState({
        name:'',
        size:'',
        ham:'',
        pineapple:'',
        jalapenos:'',
        sauce:'',

    })

    const formSubmit = e =>{
        e.preventDefault();
        axios
        .post("https://reqres.in/api/users", formState)
        .then(res => {
            setPost(res.data);
            console.log("success", post);
            setFormState({
            name: '',
            size:'',
            ham:'',
            pineapple:'',
            jalapenos:'',
            sauce:'',
            })
        })
        .catch(err => console.log(err.response));
    }

    const inputChange = e => {
        e.persist();
        const newFormData = {
          ...formState,
          [e.target.name]:
            e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
        setFormState(newFormData);
      };

    return (
        <form onSubmit = {formSubmit}>
            <label htmlFor='name'>
                Name 
                <input
                type='text'
                name='name'
                value={formState.name}
                onChange={inputChange}
                />
            </label>

            <label htmlFor='size'>
                What Size 
                <select id='size' name='size' onChange={inputChange}>
                    <option value='blank'></option>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                    <option value='XL'>XL</option>
                </select>
            </label>
            <h3>Toppings</h3>
            <label htmlFor='ham' className='ham'>
                <input
                    type='checkbox'
                    name="ham"
                    checked={formState.ham}
                    onChange={inputChange}
                    />
                Ham
                </label>
                <label htmlFor='pineapple' className='pineapple'>
                <input
                    type='checkbox'
                    name="pineapple"
                    checked={formState.pineapple}
                    onChange={inputChange}
                    />
                Pineapple
                </label>
                <label htmlFor='jalapenos' className='jalapenos'>
                <input
                    type='checkbox'
                    name="jalapenos"
                    checked={formState.jalapenos}
                    onChange={inputChange}
                    />
                Jalapenos
                </label>
                <label htmlFor='sauce' className='sauce'>
                <input
                    type='checkbox'
                    name="sauce"
                    checked={formState.sauce}
                    onChange={inputChange}
                    />
                Hot Sauce
                </label>
                <pre>{JSON.stringify(post, null, 2)}</pre>
                <button >Submit</button>
        </form>
    )
}