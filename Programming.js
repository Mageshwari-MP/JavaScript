import React from 'react'
import {Element} from 'react-scroll'
import programImg from '../../assets/programming skills.jpg'
import LinearProgress from '@material-ui/core/LinearProgress'
import './Programming.css'

const Programming = () => {
    return (
        <Element className='programming' id='programming skills'>
            <div className='programming__image'>
                <img src={programImg} alt=''/>
            </div>
            <div className='programming__text'>
                <h2>Programming Skills</h2>
                <div className='programming__skillSet'>
                    <h5>C</h5>
                    <div className='programming__slider programming__slider1'>
                    <LinearProgress variant='determinate' value={90} />
                    </div>
                </div>
                <div className='programming__skillSet'>
                    <h5>Python</h5>
                    <div className='programming__slider programming__slider2'>
                    <LinearProgress variant='determinate' value={80} />
                    </div>
                </div>
                <div className='programming__skillSet'>
                    <h5>R</h5>
                    <div className='programming__slider programming__slider3'>
                    <LinearProgress variant='determinate' value={85} />
                    </div>
                </div>
                <div className='programming__skillSet'>
                    <h5>Basics of Java</h5>
                    <div className='programming__slider programming__slider4'>
                    <LinearProgress variant='determinate' value={90} />
                    </div>
                </div>
            </div>
        </Element>
      )
    }
    
export default Programming
