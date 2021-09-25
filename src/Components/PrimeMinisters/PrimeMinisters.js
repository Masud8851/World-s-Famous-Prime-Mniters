import React, { useEffect, useState } from 'react';

const PrimeMinisters = () => {

    const [primeMinisters, setPrimeMinisters] = useState([]);
    useEffect(()=>{
        fetch('./minister.JSON')
            .then(res=>res.json())
            .then(data=>setPrimeMinisters(data))
    },[])


    return (
        <div>
            <div className="row">
                <div className="col-lg-9 bg-secondary text-white">
                    <h1>Users</h1>
                </div>
                <div className="col-lg-3 bg-success">
                    <div className="pt-2">
                        <h6>Users Added: </h6>
                        <h6>Total Salary: </h6>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PrimeMinisters;