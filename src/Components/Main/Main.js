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
            <div className="row">

                {/* All Prime Ministers */}
                <div className="col-md-8">
                    {/* Single Prime Minister */}
                    <div className="row p-4">
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