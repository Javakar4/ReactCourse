import React from 'react'
import Content from '../Components/Content.jsx'
import Demo from '../Components/Demo.jsx'
import { AppContextProvider } from "../Context/ContextAPI";

function Home() {
    return (
        <>
            {/* <Content name="John" age="20" id="101" /> */}
            {/* Use ContextAPI Here */}
            <AppContextProvider>
                <Content />
                <Demo />
            </AppContextProvider>
        </>
    )
}

export default Home