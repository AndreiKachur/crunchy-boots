import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import { IoIosArrowDropupCircle } from 'react-icons/io'

function SrollUp() {
    return (
        <ScrollToTop smooth top={720}
            style={{
                background: 'transparent',
                boxShadow: 'unset'
            }}

            component={
                <IoIosArrowDropupCircle
                    style={{
                        display: 'flex',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2.5rem',
                        color: '#F9F3F3',
                    }}
                />}
        />
    )
}

export default SrollUp
