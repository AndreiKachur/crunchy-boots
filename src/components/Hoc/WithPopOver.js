import React, { useEffect, useState } from 'react';

const WithPopOver = (Wrapped) => {
    return (function WithPopOver(props) {

        const { addToCart, checked, actualRest, ordered } = props

        const [pop, setPop] = useState(false)
        const [text, setText] = useState('Please choose any size')
        const [sizeChecked, setSizeChecked] = useState(false)

        useEffect(() => {
            setSizeChecked(checked)
            return () => setSizeChecked(false)
        }, [checked])

        const onPopOver = (text, time) => {
            setText(text);
            setPop(true);
            setTimeout(() => setPop(false), time)
        }
        const onCart = () => {
            if (ordered) {
                return onPopOver("You've already made an order. Please wait a bit. Our manager definitely will contact you soon.", 4500)
            }
            if (sizeChecked && actualRest === 0) {
                return onPopOver("Sorry, but there's nothing left. Choose another size.", 2600)
            }
            if (sizeChecked) {
                onPopOver('Added to cart', 2400)
                addToCart()
            } else {
                onPopOver('Please choose any size', 2400)
            }
        }

        return <Wrapped
            {...props}
            onCart={onCart}
            text={text}
            pop={pop} />
    }
    )
}

export default WithPopOver