import React from 'react'
import Activity from './Activity'

const ActivityCatalog = ({activities, setActivities}) => {
    //randera ut olicka activity i catalog
    //null-ställe
    if (activities.length ===0){
        return (
            <div id="prod-catalog" className="mb-5 text-center" >
                No activity found , please add activity                          
            </div>
        ) 
    }
    //++ activity to catalog
    return (
        <div id="prod-catalog" className="mb-5">
                        {/* <Activity--js// map()-call each element in an array, in order.  /> */}
            {
                activities.map(activity=>(
                //    child  måste ha unik key
                    <Activity activity={activity} key={activity.id} activities={activities} setActivities={setActivities}/> 
                ))
            }
                      
        </div>
    )
}

export default ActivityCatalog
