import React from 'react';
import JsonData from './data.json';

 function JsonDataDisplay(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr key={info.id}>
                    <td >{info.id}</td>
                    <td>{info.name}</td>
                    <td>{info.language}</td>
                    <td>{info.genre}</td>
                </tr>
            )
        }
    )
 
    return(
        <div className='container'>
            <table className="table text-white">
            <thead>
                    <tr>
                    <th>Sr.NO</th>
                    <th>Name</th>
                    <th>Language</th>
                    <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>
    )
 }
 
 export default JsonDataDisplay;