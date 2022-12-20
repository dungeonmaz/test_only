import { useState } from "react"
import Circle from "./Circle"
import InfoSlider from "./InfoSlider"

export type DotsArray = {
    number: number,
    name: string
}

const dots: DotsArray[] = []

const years = [
    {
        name: 'Lorem',
        array: [
            { year: 1980, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, a quo asperiores laborum iure' },
            { year: 1981, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 1982, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 1983, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 1984, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 1985, desc: 'Lorem ipsum dolor sit amet.' },
        ]
    },
    {
        name: 'Ipsum',
        array: [
            { year: 1986, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 1987, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 1988, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 1989, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 1990, desc: 'Lorem ipsum dolor sit amet.' },
        ]
    },
    {
        name: 'Dolor',
        array: [
            { year: 1991, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 1992, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 1993, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 1994, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 1995, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 1996, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 1997, desc: 'Lorem ipsum dolor sit amet.' },
        ]
    },
    {
        name: 'Sit',
        array: [
            { year: 1998, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 1999, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 2000, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 2001, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 2002, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 2003, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 2004, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 2005, desc: 'Lorem ipsum dolor sit amet.' },
        ]
    },
    {
        name: 'Amet',
        array: [
            { year: 2006, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 2007, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 2008, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 2009, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 2010, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 2011, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 2012, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 2013, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 2014, desc: 'Lorem ipsum dolor sit amet.' },
        ]
    },
    {
        name: 'Elit',
        array: [
            { year: 2015, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 2016, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 2017, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 2018, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 2019, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 2020, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 2021, desc: 'Lorem ipsum dolor sit amet.' },
            { year: 2022, desc: 'Lorem ipsum dolor sit amet.' },
        ]
    },
]

for (let i = 0; i < years.length; i++) {
    dots.push({number: i+1, name: years[i].name})
}

let timerFirst: NodeJS.Timer
let timerLast: NodeJS.Timer

const Year = () => {
    const [select, setSelect] = useState(1)
    const [firstYear, setFirstYear] = useState(1980)
    const [lastYear, setLastYear] = useState(1985)

    const handleSelect = (num: number) => {
        setSelect(prev => {
            setYears(num)
            return num
        })
    }

    const handleNext = () => {
        setSelect(prev => {
            setYears(prev + 1)
            return prev + 1
        })
    }

    const handlePrev = () => {
        setSelect(prev => {
            setYears(prev - 1)
            return prev - 1
        })
    }

    const setYears = (sel: number) => {
        clearInterval(timerFirst)
        clearInterval(timerLast)
        if (years[sel - 1].array[0].year > years[select - 1].array[0].year) {
            timerFirst = setInterval(() => {
                setFirstYear(prev => {
                    if (prev === years[sel - 1].array[0].year - 1) {
                        clearInterval(timerFirst)
                    }
                    return prev + 1
                })
            }, 40)
            timerLast = setInterval(() => {
                setLastYear(prev => {
                    if (prev === years[sel - 1].array[years[sel - 1].array.length - 1].year - 1) {
                        clearInterval(timerLast)
                    }
                    return prev + 1
                })
            }, 40)
        } else {
            timerFirst = setInterval(() => {
                setFirstYear(prev => {
                    if (prev === years[sel - 1].array[0].year + 1) {
                        clearInterval(timerFirst)
                    }
                    return prev - 1
                })
            }, 40)
            timerLast = setInterval(() => {
                setLastYear(prev => {
                    if (prev === years[sel - 1].array[years[sel - 1].array.length - 1].year + 1) {
                        clearInterval(timerLast)
                    }
                    return prev - 1
                })
            }, 40)
        }
    }



    return (
        <div className="background">
            <div className="container">
                <hr className="vertical" />
                <hr className="horizontal" />
                <Circle select={select} handleSelect={handleSelect} dots={dots}/>
                <div className="logo-gradient" />

                <h1 className="logo">Исторические<br />даты</h1>

                <div className="year">
                    <span className="year-1">{firstYear}</span>
                    &nbsp;&nbsp;
                    <span className="year-2">{lastYear}</span>
                </div>

                <div className="name-mobile">{years[select - 1].name}</div>
                <hr className="horizontal-mobile" />

                <div className="buttons-container">
                    <p>{select < 10 ? '0' + select : select}/{dots.length < 10 ? '0' + dots.length : dots.length}</p>
                    <div className="buttons">
                        <button onClick={handlePrev} disabled={select === 1} className="arrow-button"></button>
                        <button onClick={handleNext} disabled={select === dots.length} className="arrow-button"></button>
                    </div>
                </div>
                <InfoSlider data={years[select - 1].array} />
            </div>
        </div>
    )
}

export default Year