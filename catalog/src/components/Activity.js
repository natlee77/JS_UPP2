import React from 'react'

const Activity = ({activity, activities, setActivities}) => {
    //f. knappen-filtrera(ta bort värde) , updatera(setActivity-all-over), sortera activity i list
    const deleteHandler=()=>{
    setActivities(activities.filter(
        item =>item.id !==activity.id
    ))}
     //instock<->outstock    
    const StatusHandler=()=>{
        setActivities(activities.map(item =>{
                if(item.id === activity.id) {
                    return{
                        ...item, inStock : !item.inStock  //updatera true<->false
                        // ( inStock = 'active' )
                            /* if(item.inStock )
                                return item.status.text === 'active'
                            
                            else 
                                return item.status.value === 'completed'      */                          
                            
                    }
                }
                return item 
            }  
        )) 
    }    

    return (
        <div  className="border mb-2 p-1">
            <div className="d-flex justify-content-between align-items-center">
                <div >
                    <div className="prod-name" >{activity.name }</div> 
                    <div className="prod-description">{activity.description}</div>
                </div>
                {/* icon */}
                <div>
                   <div onClick={StatusHandler} id='status' className={ `text  cursor-pointer ${ activity.inStock ?  'endStatus': 'onStatus' }` } value=''>status</div>                
                   <i onClick={deleteHandler} className="fas fa-trash cursor-pointer"></i>
                </div>
            </div>
            
        </div>
    )
}

export default Activity
