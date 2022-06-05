import React from 'react'
import styled from "styled-components"
import Section from "./Section"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Section4 from "./Section4"


function Home() {
    return (
        <Main>

            <Container>
                <Section
                    title="Model S"
                    backgroundImage="model-s.jpg"
                    buttontext="Custom Order"
                />
                <Section2
                    title="Model Y"
                    backgroundImage="model-y.jpg"
                    buttontext="Custom Order"
                />
            </Container>

            
                {/* <Section2
                    title="Model Y"
                    backgroundImage="model-y.jpg"
                    buttontext="Custom Order"
                /> */}
        

            <Container>
                <Section3
                    title="Model X"
                    backgroundImage="model-x.jpg"
                    buttontext="Custom Order"
                />
                <Section4
                    title="Model 3"
                    backgroundImage="model-3.jpg"
                    buttontext="Custom Order"
                />
            </Container>
        </Main>

    )
}

export default Home
const Container = styled.div`
// size=100px;
height: 50vh;
width: 100vw;
`
const Main = styled.div``