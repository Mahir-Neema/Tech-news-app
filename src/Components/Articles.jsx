import React, { useEffect, useState } from 'react'
import { useGlobalContext } from './Context';
import "./Articles.css"

function Articles() {
    const {hits,nofPages,isLoading} = useGlobalContext();

    if(isLoading){
        return<>
            <h1>Loading🫡🫡🫡</h1>
        </>
    }

    return (<>
        <div>Tech News</div>
        {hits.map((post,index)=>{
            const {title,author,objectID, url, num_comments} = post;
            return <>
                <div className="card">
                    <h2>{title}</h2>
                    <p>
                        By <span>{author}</span> || <span>{num_comments}</span> comments
                    </p>
                    <div className="card-button">
                        <a href="url" className='url_button'>Read More..</a>
                        <a href="#" className='remove_button'>Remove</a>
                    </div>
                </div>
            </>
        })}
    </>
    )
}

export default Articles