import React, {useState, useEffect} from 'react'
import logo from "../logo.svg"

const Register = () => {
    const domain = "http://127.0.0.1:8000"
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [registering, setRegistering] = useState(false)
    const [error, setError] = useState(false)
    const [url, setUrl] = useState(`${domain}/interests`)
    
    const fetchData = () => {
        setLoading(true)
        fetch(url)
        .then(res =>{
          if(!res.ok){
            throw Error(res.statusText)
          }
          return res.json()
        })
        .then(data => {
          setLoading(false)
          setData(data)
        })
        .catch(error=>{
          setError(error.message)
          setLoading(false)
        })
    }

    const handleRegister = () => {
        const form = document.getElementById("regForm");
        form.onsubmit = function(event){
            event.preventDefault();
            setRegistering(true)
            const formData = new FormData(form)
            fetch(`${domain}/intern-students`,{
                method: "POST",
                cors: "no-cors",
                body: formData
            })
            .then(res =>{
            if(!res.ok){
                throw Error(res.statusText)
            }
            return res.json()
            })
            .then(data => {
                setRegistering(false)
                console.log(data)
                form.reset();
            })
            .catch(error=>{
                console.log(error.message)
                setRegistering(false)
            })
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div className='Register'>
            <img src={logo} alt='logo' />
            <h1>Register Here</h1>
            <form id='regForm'>
                <input required type='text' name='name' placeholder='fullname'/>
                <input required type='text' name='contact' placeholder='contact'/>
                <input required type='text' name='email' placeholder='email'/>
                <select name='gender'>
                    <option value={'Male'}>Male</option>
                    <option value={'Female'}>Female</option>
                </select><br />
                {loading && <p>loading ...</p>}
                {error && <p>loading ...</p>}
                {data && 
                    (
                        data.map(data => {
                            return(
                                <div key={data.id}>
                                    <input type='checkbox' 
                                        name='interest' 
                                        value={data.id}/> {data.name} <br />
                                </div>
                            )
                        })
                    )
                }
                <input type='file' name='letter'/>
                {!registering && <button onClick={handleRegister}>Register</button>}
                {registering && <button disabled>Registering ...</button>}
            </form>
        </div>
    )
}

export default Register