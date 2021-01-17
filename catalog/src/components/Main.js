//refce
import React from 'react'
import { useState } from 'react'// hooks
import Form from './Form'//3
import ActivityCatalog from './ActivityCatalog'//4

//hämta ut from App.js -props-()
const Main = () => {
    //state:
    const[activities, setActivities] =useState([])

    return (
        <main className="container pt-3"  > 
                                        {/* dela skärm i 2 del /gatter-mellanrum*/}
           <div className="row g-5 ">
               <div className="col-5"> 
                                        {/* skick ner Activity setActivity i form - props */}
                    <Form activities={activities}  setActivities={setActivities} />
               </div>
                                        {/* punkt connecting form <->ActivityCatalog */}
               <div className="col-7">
                   <ActivityCatalog activities={activities} setActivities={setActivities}/>
               </div>
           </div>
        </main>
    )
}

export default Main
