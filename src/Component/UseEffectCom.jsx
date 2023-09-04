import { useState, useEffect } from "react"

export default function UseEffectCom() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    });
    useEffect(() => {
        setCount2((count2) => count2 + 5);
    }, []);
    return (
        <>
            <h1 style={{ color: "red" }}>Use Effect Page</h1>
            <h2>{count}</h2>
            <h2>{count2}</h2>
        </>
    )
}