import './styles/footer.css'

import React from 'react'

const Footer = (props) => {
    return (
        <>
            <footer>
                <p>{props.copyright} {props.year }</p>

            </footer>

        </>
    )
}

export default Footer
