import React, { useEffect, useState } from "react";

const Counter = () => {
    const [counterValue, setCounterValue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {setCounterValue(setedValue => setedValue + 1)}, 1000);
        
        return () => clearInterval(interval);
    }, []); 
    
    

    return (
        <div className="mt-5 fs-1">{counterValue}</div>
    );
}

export default Counter