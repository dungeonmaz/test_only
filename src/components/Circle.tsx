import { DotsArray } from "./Year"

type CircleProps = {
    select: number,
    dots: Array<DotsArray>,
    handleSelect: (num: number) => void,
}

const Circle = ({select, dots, handleSelect} : CircleProps) => {
    const radius = 265
    const length = dots.length
    const circleRotation = (-60 - (360 / dots.length * (select - 1)))
    return (
        <div className='circle-container' style={{ rotate: `${circleRotation}deg` }}>
            <div className='circle' />
            {dots.map((value, index) => (
                <div onClick={() => handleSelect(value.number)}  key={value.number} className={`dot ${select === value.number && 'selected'}`} style={{
                    top: `${radius + radius * Math.sin(index * (360 / length) * Math.PI / 180)}px`,
                    right: `${radius - radius * Math.cos(index * (360 / length) * Math.PI / 180)}px`
                }}>
                    <div style={{transition: 'ease rotate 1200ms',rotate:`${-circleRotation}deg`}}>{value.number}</div>
                    <div style={{transition: 'ease rotate 1200ms',rotate:`${-circleRotation}deg`}} className="name">{value.name}</div>
                </div>
            ))}
        </div>
    )
}

export default Circle