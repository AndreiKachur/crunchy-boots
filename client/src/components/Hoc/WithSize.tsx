import React, { useEffect, useState } from 'react';
import { DbItem } from '../../types/db-types'

interface ItemPropsType {
    item: DbItem;
    addToCart: any;
    ordered: boolean;
    browseImgs: () => {
        type: string;
        id: number;
    }
    addSize: any;
}

function WithSize<T extends ItemPropsType>(
    Wrapped: React.ComponentType<T>, itemSizeClass: string, itemLabelClass: string
) {
    return function WithSize(props: T) {

        const { addSize, item } = props
        const { newCollection, topseller, sizes } = item

        const [sizesWithClass, setSizesWithClass] = useState<string[]>(createClassesArray())
        const [actualRest, setActualRest] = useState<number>(0)
        const [checked, setChecked] = useState<boolean>(false)

        function createClassesArray() {
            let classesArray = []
            for (let i = 0; i < sizes.length; i++) {
                classesArray.push(itemSizeClass)
            }
            return classesArray
        }

        const chooseSize = (i: number, rest: number) => {
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

        useEffect(() => () => setChecked(false), [])

        const addLabel = (clazzName: string, data: string, label: string) => {
            return data === label ?
                <div className={`${clazzName} ${clazzName}_${label.toLowerCase()}`} >
                    {data}
                </div > :
                null
        }

        const newLabel = addLabel(itemLabelClass, newCollection, 'NEW')
        const topLabel = addLabel(itemLabelClass, topseller, 'TOP')

        return (
            <Wrapped
                {...props as T}
                sizesWithClass={sizesWithClass}
                actualRest={actualRest}
                checked={checked}
                chooseSize={chooseSize}
                changeActualRest={changeActualRest}
                collectionLabel={newLabel}
                topLabel={topLabel}
            />
        )
    }
}

export default WithSize;