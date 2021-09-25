import React, { useEffect, useState } from 'react';
import PrimeMinister from '../PrimeMinister/PrimeMinister';

const Main = () => {
    const [primeMinisters, setPrimeMinister] = useState([]);

    useEffect(()=>{
        fetch('./minister.JSON')
            .then(res=>res.json())
            .then(data=>setPrimeMinister(data))
    },[])


    return (
        <div>
            <div className="row mt-0">
                {/* All Prime Ministers */}
                <div className="col-md-9">
                    {/* Single Prime Minister */}
                    <div className="row pt-0 ps-2">
                        {
                            primeMinisters.map( primeMinister =><PrimeMinister               
                                key={primeMinister.id} 
                                primeMinister={primeMinister}
                            ></PrimeMinister>)
                        }
                    </div>
                </div>               
            </div>
        </div>
    );
};

export default Main;