import Filtercolumn from "../Filtercolumn/Filtercolumn";
import Card from "../Card/Card";
import React, { Component, useEffect, useState } from 'react'
import './Filter.css';
import Filterline from '../FilterRow/Filterrow';

export default function Product(){
const [showfilter,setshowfilter]=useState(true);
const [data,setData]=useState([])

useEffect(()=>{
    let temp=[];
    let i=10
while(i>0){
    temp.push(i);
    i--
}
setData(temp)
},[])


function handlefilterclick(){
    setshowfilter(!showfilter)
}
    return (
        <>
          <Filterline status={showfilter} click={handlefilterclick}/>
          <hr />
        <div className="products">
            <div className={`filtercolumnproduct ${showfilter?'':'hide'}` }>

            <Filtercolumn click={handlefilterclick}/>
            </div>
            <div className={`productdisplay ${showfilter?"":'displayfull'}`} >
                {data.length>0?(data.map((arr,ind)=><Card key={ind}/>)):('')}
            </div>
        </div>
        </>
    )
}