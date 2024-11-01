"use client";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form"

export default  function Page(){

    let [temperature, setTemperature] = useState();
    let [icon, setIcon]  = useState();
    let [interact, setInteract] = useState(false)
    
    let [loading, setLoading] = useState();


    let {register, handleSubmit, formState:{errors}} = useForm();

    const getWeather = async (data)=>{

        try{

        setInteract(true);

        setLoading(true)

        let resp = await axios.get(`http://api.weatherapi.com/v1/current.json?key=24df5fcf9b6c4eaebb770740222103&q=${data.citySelector}&aqi=no`);
        setIcon('https:' + resp.data.current.condition.icon);
        setLoading(false)


        console.log(resp.data.current.temp_c)
        setTemperature(resp.data.current.temp_c);

        }catch(e){

            setLoading(false);

        }
    }

    return <div>    

        <form onSubmit={handleSubmit( getWeather )}>
            <select {...register('citySelector', {required:true})}>
                <option value="">Select City</option>
                <option value="Karachi">Karachi</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Quetta">Quetta</option>
                <option value="gilgit">Gilgit</option>
                <option value="London">London</option>
                <option value="Sydney">Sydney</option>
            </select>
            {errors.citySelector  ? <div>Select a valid city</div> : null}

            <button>Get Weather</button>
        </form>

        <h1>  { <img src={icon} alt="" />}</h1>

        {loading == false && interact == true ? <h1>{temperature}</h1> : 
        loading == true && interact == true ? <img width="40" src="loading.jpg" /> : null}

    </div>
}