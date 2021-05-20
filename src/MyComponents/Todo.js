import React from 'react'

export default function todo({ todoo ,ondelete}) {
    return (
        <div>
           <div className="card my-2 mx-2" style={{width: "18rem"}}>
                <h5 className="card-title">{todoo.title}</h5>
                <p className="card-text">{todoo.desc}</p>
                <button href="#" onClick={()=>{ondelete(todoo)}} className="btn btn-primary">Delete</button>
            </div>
        </div>
    )
}
