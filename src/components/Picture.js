import React from 'react'
import { useDrag } from 'react-dnd'
import { useDrop } from 'react-dnd';

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



    return (
      <div className='card-data' ref={(node) => ref(drop(node))}>
        <img src={image} alt={`Image ${tag}`} />
        <p>{ tag}</p>
      </div>
    )
}

export default Picture
