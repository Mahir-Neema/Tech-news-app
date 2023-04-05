import React, { useEffect, useState } from 'react'
import { useGlobalContext } from './Context';
import "./Articles.css"

function Articles() {
    const {hits,nofPages,isLoading,deletePost} = useGlobalContext();

    if(isLoading){
        return<>
            <h1>Loading🫡🫡🫡</h1>
        </>
    }

    return (<>
        <div>Tech News</div>
        {hits.map((post)=>{
            const {title,author,objectID, url, num_comments} = post;
            return <>
                <div className="card" key={objectID}>
                    <h2>{title}</h2>
                    <p>
                        By <span>{author}</span> || <span>{num_comments}</span> comments
                    </p>
                    <div className="card-button">
                        <a href={url} className='url_button' target='blank'>Read More..</a>
                        <a href="#" onClick={()=>deletePost(objectID)} className='remove_button'>Remove</a>
                    </div>
                </div>
            </>
        })}
    </>
    )
}

export default Articles