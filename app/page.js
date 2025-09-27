"use client"
import React from "react"
import { useState, useEffect } from "react"
import Navbar from "./conponents/Navbar"
import Slide_1 from "./conponents/slides/Slide_1"
import Slide_2 from "./conponents/slides/Slide_2"
import Slide_3 from "./conponents/slides/Slide_3"
import Slide_4 from "./conponents/slides/Slide_4"
import Slide_5 from "./conponents/slides/Slide_5"
import Slide_6 from "./conponents/slides/Slide_6"
import Slide_7 from "./conponents/slides/Slide_7"


export default function Home() {
  const [mouted, setMouted] = useState(false)

  useEffect(() => {

    setMouted(true)

  }, [])


  if (mouted) {
    return (
      <>
        <Navbar />

        <Slide_1 />
        <Slide_2 />
        <Slide_3 />
        <Slide_4 />
        <Slide_5 />
        <Slide_6 />
        <Slide_7 />

      </>
    )
  }

}
