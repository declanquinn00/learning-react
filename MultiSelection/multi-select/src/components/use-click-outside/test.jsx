import { useRef, useState } from "react"
import useOutsideClick from ".";



export default function UseOnClickOutsideTest(){
    const [showContent, setShowContent] = useState(false);
    const ref = useRef();
    useOutsideClick(ref, ()=> setShowContent(false))

    


    return <div>
        {showContent ? (<div ref={ref}>
            <h1>This is Random Content</h1>
            <p>Click outside this to close</p>
        </div>) : (<button onClick={()=> setShowContent(true)}>Show Content</button>)}
    
    </div>
}