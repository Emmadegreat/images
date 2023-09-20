import React from 'react'
import { useDrag } from 'react-dnd'
import { useDrop } from 'react-dnd';

//const Picture = ({ id, image }) => {
const Picture = ({ id, image, index, moveImage, tag }) => {
  const [, ref] = useDrag({
    type: 'image',
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: 'image',
    hover: (draggedImage) => {
      if (draggedImage.index !== index) {
        moveImage(draggedImage.index, index);
        draggedImage.index = index;
      }
    },
  });

    //drag function
    /*const [{ isDragging }, drag] = useDrag(() => ({
        type: 'image',
        item: {id:id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));*/

    return (
        <div className=''>
            <div ref={(node) => ref(drop(node))} style={{ width: '150px', height: '150px', margin: '1rem',  border: '1px solid red' }}>
          <img src={image} alt={`Image ${id}`} style={{ width: '100%', height: '100%' }} />
          <p>{ tag}</p>
    </div>
            {/*<img
                ref={drag}
                src={image}
                style={{width:"150px", height: "150px", margin: "1rem", border: isDragging? "1px solid red":"0px"}}
    />*/}
        </div>
    )
}

export default Picture
