import React, { useEffect, useState } from 'react';

const WithSize = (Wrapped, itemSizeClass, itemLabelClass) => {
    return function WithSize(props) {
        const { addSize, item } = props
        const { newCollection, topseller, sizes } = item

        const [sizesWithClass, setSizesWithClass] = useState(createClassesArray())
        const [actualRest, setActualRest] = useState(0)
        const [checked, setChecked] = useState(false)

        function createClassesArray() {
            let classesArray = []
            for (let i = 0; i < sizes.length; i++) {
                classesArray.push(itemSizeClass)
            }
            return classesArray
        }

        const chooseSize = (i, rest) => {
            let newClasses = createClassesArray()
            const newItem = `${itemSizeClass} ${itemSizeClass}_checked`

            setSizesWithClass(
                [...newClasses.slice(0, i),
                    newItem,
                ...newClasses.slice(i + 1)])
            setActualRest(rest)
            setChecked(true)

            addSize(sizes[i].size)
        }

        const changeActualRest = () => {
            if (actualRest > 0) {
                setActualRest(actualRest - 1)
            }
            return actualRest
        }

        useEffect(() => {
            return () => setChecked(false)
        })

        const collectionLabel = newCollection === 'NEW' ?
            <div className={`${itemLabelClass} ${itemLabelClass}_new`
            } >
                {newCollection}
            </div >
            : null
        const topLabel = topseller === 'TOP' ?
            <div className={`${itemLabelClass} ${itemLabelClass}_top`}>
                {topseller}
            </div>
            : null

        return (
            <Wrapped
                {...props}
                sizesWithClass={sizesWithClass}
                actualRest={actualRest}
                checked={checked}
                chooseSize={chooseSize}
                changeActualRest={changeActualRest}
                collectionLabel={collectionLabel}
                topLabel={topLabel} />
        )
    }
}

export default WithSize;