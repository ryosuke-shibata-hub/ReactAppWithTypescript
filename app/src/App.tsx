import React from 'react';
import Title from './components/Title';
import Form from "./components/Form";
import Results from "./components/Results";
import './App.css';
import { useState } from "react";

type ResultsStateType = {
    country: string,
    cityName: string,
    temperature: string,
    conditionText: string,
    icon: string,
}
function App() {
    //データは全てstate内に保存する
    const [city, setCity] = useState<string>("");
    const [results, setResults] = useState<ResultsStateType>({
        country: "",
        cityName: "",
        temperature: "",
        conditionText: "",
        icon: "",
    });
    //Form.tsxからApiに都市名を渡す
    const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch(`https://api.weatherapi.com/v1/current.json?key=053b5e37ce6548dda1f134204232008&q=${city}&aqi=no`)
            .then(res => res.json())
            .then(data => {
                setResults({
                    country: data.location.country,
                    cityName: data.location.name,
                    temperature: data.current.temp_c,
                    conditionText: data.current.condition.text,
                    icon: data.current.condition.icon,
                })
            })
    }
    return (
        <div className="wrapper">
            <div className='container'>
                <Title />
                <Form setCity={setCity} getWeather={getWeather} />
                <Results results={results} />
            </div>
        </div>
    );
}

export default App;
