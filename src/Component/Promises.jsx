import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';


const Promises = () => {
    const [catUrl, setCatUrl] = useState('');
    const [error, setError] = useState(false);
    const [state, setState] = useState('');
    useEffect(() => {
        setState('loading');
        axios.get('https://cataas.com/cat?json=true').then((res) => {
                console.log("Promises success data",res);
                setState('success');
                setCatUrl('https://cataas.com' + res.data.url);
            }).catch((err) => {
                console.error('Promises Error:', err);
                setState('error');
                setError(err);
            });
    }, []);
    if (state === 'error')
        return (
            <h1>

                {error.toString()}
            </h1>
        );
  return (
    <div> <h1 style={{ color: "red" }}>Promisis</h1>
    <div>
            <div>
                {state === 'loading' ? (
                    <h1>Loading...</h1>
                ) : (
                    <img src="{catUrl}" />
                )}
            </div>
        </div>
        </div>
  )
}

export default Promises