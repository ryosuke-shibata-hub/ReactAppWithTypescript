import React from "react";
import { useState } from "react";

type ResultPropsType = {
    results: {
        country: string,
        cityName: string,
        temperature: string,
        conditionText: string,
        icon: string,
    }
}
const Results = (props: ResultPropsType) => {
    const { country, cityName, temperature, conditionText, icon } = props.results;
    return (
        <div>
            {country &&
                <div className="results-country">{country}</div>
            }
            {cityName &&
                <div className="results-city">{cityName}</div>
            }
            {temperature &&
                <div className="results-temperature">{temperature}</div>
            }
            {conditionText &&
                <div className="results-condition">
                    <img src={icon} alt="icon" />
                    <span>{conditionText}</span>
                </div>
            }
        </div>
    );
};


export default Results;
