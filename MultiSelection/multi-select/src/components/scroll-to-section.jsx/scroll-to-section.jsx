import { useRef } from "react";




export default function ScrollToSection(){

    const ref = useRef()

    function handleScrollToSection(){
        let pos = ref.current.getBoundingClientRect().top

        window.scrollTo({
            top: pos,
            behavior: 'smooth'
        })

    }

    const data = [
        {
            label : 'First Card',
            style : {
                width : '100%',
                height : '600px',
                background : 'red'
            }
        },
        {
            label : 'Second Card',
            style : {
                width : '100%',
                height : '600px',
                background : 'grey'
            }
        },
        {
            label : 'Third Card',
            style : {
                width : '100%',
                height : '600px',
                background : 'blue'
            }
        },
        {
            label : 'Fourth Card',
            style : {
                width : '100%',
                height : '600px',
                background : 'green'
            }
        },
        {
            label : 'Fifth Card',
            style : {
                width : '100%',
                height : '600px',
                background : 'orange'
            }
        }

    ]

    return (<div>
        <h1>Scroll to a particular section</h1>
        <button onClick={handleScrollToSection}>Click to Scroll</button>
        {
            // Card four is chosen as a random example index = 3
            data.map((dataItem, index) => 
                <div ref={index === 3 ? ref : null} style={dataItem.style}>
                    <h3>{dataItem.label}</h3>
                </div>
            )
        }
    </div>
    );
}