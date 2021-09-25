import React from 'react';
import './PrimeMinister.css'

const PrimeMinister = (props) => {
    // console.log(props.primeMinister)
    const {image,name,age,gender,headOfGovt,country,Salary} =props.primeMinister
    return (
        <div className="col-md-3 mt-3 mb-3 ms-3 border border-1 border-success g-3">           
            <img src={image} width="100px" height="100px" className="p-1"/>
            <h4>Name : {name}</h4>
            <p>Age : {age}</p>
            <p>Gender : {gender}</p>
            <p>Head of the Govt. :{headOfGovt}</p>
            <h4>Country : {country}</h4>
            <h6>Salary : {Salary}</h6>
        </div>
    );
};

export default PrimeMinister;