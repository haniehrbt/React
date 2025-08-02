import { ReactNode } from "react";
import './App.css'

function App(): ReactNode {
    const names = ["ali", "reza", "moeein"];
    return (
        <>
            <h1>Title</h1>
            <Chiz />
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </>
    );
}

function Chiz(): ReactNode {
    return <div>chiz</div>;
}

export default App;
