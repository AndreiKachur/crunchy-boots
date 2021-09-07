import React, { useEffect, useState } from 'react';

interface PropTypes {
    addToCart: any
    checked: boolean
    actualRest: number
    ordered: boolean
}

function WithPopOver<T extends PropTypes>(Wrapped: React.FC<T>) {
    return (function WithPopOver(props: T) {

        const { addToCart, checked, actualRest, ordered } = props

        const [pop, setPop] = useState<boolean>(false)
        const [text, setText] = useState<string>('Please choose any size')
        const [sizeChecked, setSizeChecked] = useState<boolean>(false)

        useEffect(() => {
            setSizeChecked(checked)
            return () => setSizeChecked(false)
        }, [checked])

        const onPopOver = (text: string, time: number) => {
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
                onPopOver('Added to cart', 1500)
                addToCart()
            } else {
                onPopOver('Please choose any size', 2000)
            }
        }

        return <Wrapped
            {...props as T}
            onCart={onCart}
            text={text}
            pop={pop} />
    }
    )
}

export default WithPopOver