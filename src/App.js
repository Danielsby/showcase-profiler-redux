import React, {Profiler, useState} from "react";
import './App.css';
import {Button, handleProfilerRender} from "./Components";
import ErrorBoundary from "./ErrorBoundary";

function App() {
    const [btnText, setBtnText] = useState("Click here");
    const [title, setTitle] = useState('Empty title');
    const [message, setMessage] = useState("No message");

    const tryCatch = (text) => {
        try {
            text();
        } catch (error) {
            console.log("error: ", error);
        } finally {
            setMessage(text);
        }
    }

    return (<div className="App">
        <React.StrictMode>
            <header className="App-header">
                <p>{message}</p>

                <Profiler id="Frontpage" onRender={handleProfilerRender}>
                    <ErrorBoundary>
                        <Button
                            onClickFunction={() => {
                                tryCatch("An error occurred");
                                setBtnText("Well done")
                            }}
                            title={title}
                        >
                            {btnText}
                        </Button>
                    </ErrorBoundary>
                </Profiler>
            </header>
        </React.StrictMode>
    </div>);
}

export default App;
