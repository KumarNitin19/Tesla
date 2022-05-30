import React from 'react';
import styled from "styled-components";
import Section from "./Section";

function Home() {
    return (
       <Container>
           <Section
                title = "Ferrari 340"
                backgroundImg="s.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
                speed = "1.99s"
                range ="396 mi"
                battery ="100 kWh"
                motor="AWD"
                power ="1,020 hp"

           />
           <Section 
            title = "Mustang GT(1968)"
            backgroundImg="y.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Existing Inventory"
            speed = "3.5s"
                range ="326 mi"
                battery ="39.2 kWh"
                motor="AWD"
                power ="283 hp"
           />
           <Section 
            title = "Model 3"
            backgroundImg="x.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Existing Inventory"
            speed = "5.9s"
                range ="353 mi"
                battery ="82 kWh"
                motor="AWD"
                power ="221 hp"
               
           />
           <Section 
            title = "BMW"
            backgroundImg="cyber.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Existing Inventory"
            speed = "2.5s"
                range ="340 mi"
                battery ="75 kWh"
                motor="AWD"
                power ="1,020 hp"
                
           />
           <Section 
            title = "1965 Buick Riviera"
            backgroundImg="3.jpg"
            leftBtnText = "Learn More"
            rightBtnText = ""
          
           />
            <Section
                title = "Tesla Roadster"
                backgroundImg="image2.jpeg"
                leftBtnText = "Learn More"
                rightBtnText = ""
               
           />
            <Section
                title = "Lowest Cost Solar Panel in U.S.A."
                backgroundImg="solar-panel.jpg"
                leftBtnText = "Order Now"
                rightBtnText = "Learn More"
               
           />
            <Section 
            title = "Solar for New Roofs"
            backgroundImg="solar-roof.jpg"
            leftBtnText = "Order Now"
            rightBtnText = "Learn More"
           
           />
            <Section 
            title = "Accessories"
            backgroundImg="accessories.jpg"
            leftBtnText = "Shop Now"
            rightBtnText = ""
          
           />
           </Container>
    )
}

export default Home


const Container = styled.div`
         height: 100vh;
`