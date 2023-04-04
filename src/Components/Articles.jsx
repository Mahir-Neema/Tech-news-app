import React, { useEffect, useState } from 'react'
import { useGlobalContext } from './Context';

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
            return <h1>{post.title}</h1>
        })}
    </>
    )
}

export default Articles