import './styles/home.css'

import React, { useEffect, useState } from 'react'

import Gallery from '../gallery'
import Picture from './Picture'
import spinner1 from './images/spinner1.png'

const Home = () => {

    const [board, setBoard] = useState([...Gallery]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {

        setTimeout(() => {
            setIsLoading(false);
        }, 2500)
    }, )

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }

    const filteredBoard = board.filter((picture) =>
        picture.tag && picture.tag.toLowerCase().includes(search.toLowerCase())
    );

    //drop function
    const moveImage = (from, to) => {
        const updatedImages = [...board];
        const [movedImage] = updatedImages.splice(from, 1);
        updatedImages.splice(to, 0, movedImage);
        setBoard(updatedImages);
    };

    return (
        <>
            <section className='home'>
                <form action="">
                    <input
                        type="search"
                        name="search" id=""
                        placeholder="Search by tag"
                        value={search}
                        onChange={onChangeHandler}
                    />
                </form>
                <h1>Gallery</h1><hr /><br />
                <div className="card">
                    {isLoading ? (
                        <div className="spinner">
                            <img src={spinner1} alt="spinner" />
                        </div>
                            ) : filteredBoard.length > 0 ? (
                                filteredBoard.map((picture, index) => (
                                    <Picture
                                        key={picture.id}
                                        id={picture.id}
                                        image={picture.im_source}
                                        index={index}
                                        moveImage={moveImage}
                                        tag={picture.tag}
                                    />
                                ))
                        ) : (

                        <p>Sorry No image found.</p>
                    )}

                </div>
                <hr />
            </section>

        </>
    )
}

export default Home
