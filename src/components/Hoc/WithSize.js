import React, { Component } from 'react';

const WithSize = (Wrapped, itemSizeClass, itemLabelClass) => {
    return class extends Component {

        sizes = this.props.item.sizes;

        createClassesArray() {
            let classesArray = []
            for (let i = 0; i < this.sizes.length; i++) {
                classesArray.push(itemSizeClass)
            }
            return classesArray
        }

        state = {
            sizesWithClass: this.createClassesArray(),
            actualRest: 0,
            checked: false
        }
        componentWillUnmount() {
            this.setState({ checked: false })
        }

        chooseSize = (i, rest) => {
            let newClasses = this.createClassesArray()
            const newItem = `${itemSizeClass} ${itemSizeClass}_checked`
            this.setState(() => ({
                sizesWithClass: [...newClasses.slice(0, i), newItem, ...newClasses.slice(i + 1)],
                actualRest: rest,
                checked: true
            }))
            this.props.addSize(this.sizes[i].size)
        }
        changeActualRest = () => {
            const actualRest = this.state.actualRest
            if (actualRest > 0) this.setState(() => ({ actualRest: actualRest - 1 }))
            return (this.state.actualRest)
        }

        render() {
            const { newCollection, topseller } = this.props.item;

            const collectionLabel = newCollection === 'NEW' ?
                <div className={`${itemLabelClass} ${itemLabelClass}_new`}>{newCollection}</div> : null
            const topLabel = topseller === 'TOP' ?
                <div className={`${itemLabelClass} ${itemLabelClass}_top`}>{topseller}</div> : null

            return (
                <Wrapped {...this.props} {...this.state}
                    chooseSize={this.chooseSize}
                    changeActualRest={this.changeActualRest}
                    collectionLabel={collectionLabel}
                    topLabel={topLabel} />
            )
        }

    }
}
export default WithSize;