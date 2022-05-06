import React from 'react'
import C1 from "./C1"
import C2 from "./C2"
import C3 from "./C3"

export default function Jaghan() {
    const componentsList = [C1, C2, C3]
    const [component, setComponent] = React.useState([C1]) // by default show th1 C1 component

    //extra disabling back and save next buttons
    const [disableSaveNextButton, setDisableSaveNextButton] = React.useState(false)
    const [disableBacktButton, setDisableBackButton] = React.useState(false)

    React.useEffect(() => {
        //if only one component in the component array disable back button
        if(component.length <= 1){
            setDisableBackButton(true)
        }else setDisableBackButton(false)

        //if component array len is equal to componentList array len then disable save next button
        // or show another button for next step

        if(component.length >= componentsList.length){
            setDisableSaveNextButton(true)
        }else setDisableSaveNextButton(false)

    }, [component])

    const saveNext = () => {
        let pushComponent = component.length
        if(pushComponent > 2) {
            //handle error here
            //disable the save next button
            return
        }
        setComponent(oldState => [...oldState, componentsList[pushComponent]])
    }

    const back = () => {
        if(component.length <= 1){
            //cannot go back anymore
            //disable back button or handle error
            return
        }

        //in react we should not remove directly from array
        //so just re fill the component array till back part
        let tmpArray = Array.from(component)
        tmpArray.pop()
        setComponent(tmpArray)
    }

    //this just returns the component at the end of the array
    const ShowComponent = (Component) => {

        return <Component/>
    }

    return (
        <div>

            {
                ShowComponent(component[component.length-1])
            }
            <button onClick={saveNext} disabled={disableSaveNextButton}>Save and next</button>
            <button onClick={back} disabled={disableBacktButton}>Back</button>

        </div>
    )
}
