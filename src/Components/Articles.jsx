import React, { useEffect, useState } from 'react'

function Articles() {

    let APIURL = "https://hn.algolia.com/api/v1/search?query=react";
    let isLoading = true;

    useEffect(()=>{
        fetchAPIData(APIURL);
    },[])

    const fetchAPIData = async (apiurl) => {
        try{
            const response  = await fetch(apiurl);
            const data = await response.json();
            console.log(data);
        } catch(e){
            console.log("Error Occured -> "+e)
        }
    }

    return (<>
        <div>Tech News</div>

    </>
    )
}

export default Articles