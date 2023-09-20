import React, { useEffect, useState } from 'react'

import Gallery from '../gallery'
import Picture from './Picture'
import spinner from './images/spinner.png'
import spinner1 from './images/spinner1.png'
import { useAuth0 } from '@auth0/auth0-react'
import { useDrop } from 'react-dnd'

const DragDrop = () => {

    //const { user } = useAuth0();

    const [board, setBoard] = useState([...Gallery]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {

        setTimeout(() => {
            setIsLoading(false);
        }, 2500)
    }, )

    //search function
    //const searchGallery = board.filter((item) => {
        //return item.tag.toLowerCase().includes(search.toLowerCase());
    //})

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }

    //drop function

    const moveImage = (from, to) => {
        const updatedImages = [...board];
        const [movedImage] = updatedImages.splice(from, 1);
        updatedImages.splice(to, 0, movedImage);
        setBoard(updatedImages);
    };

    /*const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),

        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addImageToBoard = (id) => {
        const pictureList = Gallery.filter((picture) => id === picture.id);
        setBoard((board) => [...board, pictureList[0]]);
    }*/

    return (//dev-ftqqx17ghaswe01h == tenant domain
        <>


            <section className='home'>
                <form action="">
                    <input
                        type="search"
                        name="search" id=""
                        placeholder="Search image category"
                        value={search}
                        onChange={onChangeHandler}
                    />
                </form>
                <h1>Gallery</h1><hr /><br />

                <div className='card'>

                        {board.map((picture, index) => (
                            <Picture
                                key={picture.id}
                                id={picture.id}
                                image={picture.im_source}
                                index={index}
                                moveImage={moveImage}
                                tag={picture.tag}
                            />
                        ))}

                    {/*isLoading ?
                        (<div className="spinner"><img src={spinner1} alt="spinner" /></div>)
                    :(

                            searchGallery.map((picture) => {
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

                        )*/}

                </div><hr />

                {/*<div className="my-gallery" ref={drop}>

                    {
                        board.map((picture) => {
                            return <Picture image={picture.im_source} id={picture.id} />
                        })
                    }

                </div>*/}
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
