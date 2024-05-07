import React from 'react';
import Accordian from './Accordian';

const FAQ = () => {
    return (
        <div className='p-4 bg-gray-200 rounded-lg'>
            <Accordian title="Do you prefer stealth or action games?" answer="Stealth" />
            <Accordian title="Name a video game franchise which contains elements of ludonarrative dissonance." answer="Uncharted" />
            <Accordian title="Name a video game developer and publisher notorious for their extreme rendition of the pleasure/pain principle." answer="FromSoftware" />
            <Accordian title="Summarize game development in two words." answer="Form & Substance" />
        </div>
    )
}

export default FAQ;