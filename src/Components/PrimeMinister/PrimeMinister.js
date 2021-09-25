import React from 'react';

const PrimeMinister = (props) => {
    // console.log(props.primeMinister)
    const {image,name,age,gender,headOfGovt,country,salary} =props.primeMinister
    return (
        <div className="col-md-3 ms-1 border border-1 border-success g-3">           
            <img src={image} width="100px" height="100px"/>
            <h4>Name : {name}</h4>
            <h5>Age : {age}</h5>
            <h5>Gender : {gender}</h5>
            <h5>Head of the Govt. :{headOfGovt}</h5>
            <h4>Country : {country}</h4>
            <h6>Salary : {salary}</h6>
        </div>
    );
};

export default PrimeMinister;