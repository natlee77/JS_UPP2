import React from 'react'
import  { useState } from 'react'// hooks
import  uuid from 'react-uuid'
//skapat useState //hear vi have inputs som ska hantera
//(props)-hämta from Main.js


const Form = ({activities, setActivities}) => {
    //state:
    const[name, setName] =useState('')
    const[description, setDescription] =useState('')
    const[submitState, setSubmitState] =useState(true) //for att disabled from början

    // for att hantera setName , setDescription -> f. :
    const nameHandler = (e) =>{
        //null ställe validering-btn "add "
        e.target.value.length >= 2 ?  setSubmitState(false) : setSubmitState(true)  

        setName(e.target.value)    //++ onChange
    }

    const descriptionHandler = (e) =>{
        setDescription(e.target.value)    //++ onChange-event-kan matta in info & update
    }

    //formular ska inte lista activity -->only update->skapa f.:
    const submitHandler = (e) =>{
        e.preventDefault()        //jag bestämer - action på knappen
        setActivities([
            ...activities,         //...sprädd=tar gamla []array +lägga in nyskapad object 
                { name : name,
                 description : description, 
                 inStock : false, 
                 id : uuid() }])    //{}ska göra object-skapa activity 

            //null ställe
            setName('')
            setDescription('')
            setSubmitState(true)
    }


    return (
        <form>
            <div className="mb-3">             
                <input  onChange={nameHandler} value={name} type="text" className="form-control" placeholder="activity name"/>
            </div>
            <div className="mb-4">
               <textarea onChange={descriptionHandler} value={description} className="form-control" id="" placeholder="activity description" rows="5"></textarea>
            </div>
            <div className="mb-3">
                {/* när trycker knapp -onClick*/}
               <button  onClick={submitHandler} disabled={submitState} className="btn btn-secondary p-1 w-100"  type="submit"  >Add activity</button>
            </div>
        </form>
    )
}

export default Form
