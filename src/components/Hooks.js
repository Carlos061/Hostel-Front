import React, {useState, useEffect, useRef} from 'react'


function Hooks() {
    const [name, setName] = useState('david')
    const [myCounter, setCounter] = useState(true)
    const [login, setLogin] = useState(true)
    const count = useRef(0)
    const inputRef = useRef()

    useEffect(()=>{
        count.current = count.current + 1
    })

    const handleIncrement = () => {
        setCounter(!myCounter)
    }

    const handleFocus = () => {
        inputRef.current.focus();
    }

    function Login(){
        return(
            <div>
                <h1>This is my Login component</h1>
            </div>
        )
    }

    function Register(){
        return(
            <div>
                <h1>This is my Register component</h1>
            </div>
        )
    }

    return (
        <div>
            <input 
                ref={inputRef}
                type='text' 
                onChange={(e) => setName(e.target.value)} 
                placeholder='enter your name'/>
            <p>My name is {name}</p>
            <p>The count is {count.current}</p>
            <button onClick={handleIncrement}>Increment count</button>
            <button onClick={handleFocus}>Focus Element</button>
            <button onClick={()=>setLogin(!login)}>{login ? "login form":"register form"}</button>
            {login ? <Login />:<Register />}
        </div>
    )
}

export default Hooks