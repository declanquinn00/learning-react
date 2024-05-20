import { useRef } from "react";
import useFetch from "../use-fetch";




export default function ScrollToTopBottom(){

    const {data, error, pending} = useFetch('https://dummyjson.com/products?limit=100',{});
    console.log(error, data, pending);

    const bottomRef = useRef(null);
    const topRef = useRef(null);
    
    function handleScrollToTop(){
/*
        window.scrollTo({
            top : 0, left: 0, behavior: 'smooth'
        })
*/
        topRef.current.scrollIntoView({behavior: 'smooth'})
    }

    function handleScrollToBottom(){
        bottomRef.current.scrollIntoView({behavior: 'smooth'})
    }


    if(error){
        return <h1>An Error Occured!</h1>
    }

    if(pending){
        return <h1>Loading Please Wait...</h1>
    }



    return <div>
        <h1>Scroll to Top and Bottom Feature</h1>
        <div ref={topRef}></div>
        <h3>This is the top</h3>
        <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
        <ul>
        {
            data && data.products && data.products.length ?
            data.products.map(item => <li>{item.title}</li>) : null
        } 
        </ul>
        <button onClick={handleScrollToTop}>Scroll to Top</button>
        <div ref={bottomRef}></div>
        <h3>This is the bottom of the page</h3>
    </div>
}