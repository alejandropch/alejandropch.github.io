import React from 'react';
import {Text, Img} from './styles'

export default function InfoAbout() {
  return (
        <>
            <div className="col">
                <Text className="fs-2">Fullstack Engineer - Capable of crafting web applications, Single Page Apps, Web Components, and Serverside Rendering using the MERN stack. I really love having projects that have great functionality but also look nice for the end user.
                {'\n'}I’m constantly learning new ways of developing outstanding products. 
                So, if you want to say hi or talk about something. Feel free to contact me.</Text>
                <button>Contact me</button>
            </div>
            <div className="col">
                <Img className="rounded mx-auto d-block" src="https://i.imgur.com/lRSWz1hl.png" />
            </div>
        </>
    )
}
