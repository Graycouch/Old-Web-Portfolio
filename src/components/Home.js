import React from "react"
import image from "../2.jpg";

export default function Home(){
    return(
        <main>
            <img src = {image} alt = "Snowy Mountain" className = "absolute object-cover w-full h-full"/>
            <section className = "relative flex justify-center min-h-screen pt-12 lg:pt-64 px-0">
                <h1 className = "text-6xl text-blue-100 font-bold cursive leading-none lg: leading-snug home-name">Welcome, I'm Abdel Rahman</h1>
            </section>
        </main>
    )
}