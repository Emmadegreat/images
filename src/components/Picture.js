import React from 'react'
import { useDrag } from 'react-dnd'

const Picture = ({ id, image }) => {

    //drag function
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'image',
        item: {id:id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div className=''>
            <img
                ref={drag}
                src={image}
                style={{width:"150px", height: "150px", margin: "1rem", border: isDragging? "1px solid red":"0px"}}
        />
        </div>
    )
}

export default Picture
