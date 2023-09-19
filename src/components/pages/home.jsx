import '../styles/home.css'

import React, { useState } from 'react'
import { useDrag, useDrop } from 'react-dnd'

import Gallery from '../../gallery'
import Picture from '../Picture'

const Home = () => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'image',
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    const [board, setBoard] = useState([]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    const addImageToBoard = (id) => {
       const gallery = Gallery.filter((item) =>id === item.id )

        setBoard((board)=> [...board, gallery[id]])
    }

    return (
        <>
            <section className='home'>
                <form action="">
                    <input type="search" name="search" id="" placeholder="Search image category" />
                </form>
                <h1>My Images</h1><hr /><br />

                <div className='card' ref={drop}>
                    {
                        Gallery.map((item) => {
                            return (
                                <div key={item.id} className='card-data'>
                                    <div>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            style={{border: isDragging? "1px solid red" : "0px"}}
                                        />
                                    </div>

                                    <div>
                                        <p>{item.name}</p>
                                        <p>Category: </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div><hr />
                <div className="my-gallery">

                    {
                        board.map((item) => (
                            <img src={ item.image} alt={item.name} key={item.id} />
                        ))
                    }

                </div>
            </section>

        </>
    )
}

export default Home
