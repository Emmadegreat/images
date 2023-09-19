import React, { useEffect, useState } from 'react'

import Gallery from '../gallery'
import Picture from './Picture'
import spinner from './images/spinner.png'
import spinner1 from './images/spinner1.png'
import { useDrop } from 'react-dnd'

const DragDrop = () => {

    const [board, setBoard] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setIsLoading(false);
        }, 2500)
    }, )

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),

        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addImageToBoard = (id) => {
        const pictureList = Gallery.filter((picture) => id === picture.id);
        setBoard((board) => [...board, pictureList[0]]);
    }

    return (
        <>


            <section className='home'>
                <form action="">
                    <input type="search" name="search" id="" placeholder="Search image category" />
                </form>
                <h1>My Images</h1><hr /><br />

                <div className='card'>
                    {isLoading ?
                        (<div className="spinner"><img src={spinner1} alt="spinner" /></div>)
                    :(

                            Gallery.map((picture) => {
                                return (
                                    <div className='card-data'>
                                        <Picture
                                            image={picture.im_source}
                                            id={picture.id}
                                        />
                                        <p>{ picture.tag}</p>
                                    </div>
                                )
                            })

                    )}

                </div><hr />
                <h2>Gallery</h2>
                <div className="my-gallery" ref={drop}>

                    {
                        board.map((picture) => {
                            return <Picture image={picture.im_source} id={picture.id} />
                        })
                    }

                </div>
            </section>


            {/*<div className="Pictures">
                {Gallery.map((picture) => {
                    return <Picture image={picture.im_source} id={ picture.id} />
                })}
            </div>

            <div className="Board" ref={drop} style={{height:"500px",border:"1px solid red"}}>
                {board.map((picture) => {
                    return <Picture image={picture.im_source} id={picture.id} />
                })}
            </div>*/}

        </>
    )
}

export default DragDrop
