import React, { useState } from 'react';


function Login(props) {
    const [user, setUser] = useState("");
    
    function handlechange(event) {
        setUser(event.target.value)
    }

    function handleClick() {
        if(user === "") {
            document.getElementById('dialog-dark-rounded').showModal();
        } else {
            props.handleLogin(user)
        }
    }

    function handleKeyDown(event) {
        if(event.key === 'Enter') {
            if(user === "") {
                
            } else {
                props.handleLogin(user)
            }
        }
    }
    
    return (
        <div className="login-container">
            <div className="login-content nes-container is-rounded is-dark">
            
                <div className="nes-field">
                    <label htmlFor="name_field">Github Account</label>
                    <input 
                        type="text" 
                        name="username" 
                        id="name_field" 
                        className="nes-input"
                        onChange={handlechange}
                        onKeyDown={handleKeyDown}
                        autoComplete="off"
                        value={user}/>

                        <section>
                        <button  style={{marginTop: "0.5em"}} type="button" className="nes-btn is-error" onClick={handleClick}>
                            Find
                        </button>
                        <dialog className="nes-dialog is-dark is-rounded" id="dialog-dark-rounded">
                            <form method="dialog">
                            <p className="title">Error!</p>
                            <p>No text was entered before clicking find!.</p>
                            <menu className="dialog-menu">
                                <button className="nes-btn is-primary">Confirm</button>
                            </menu>
                            </form>
                        </dialog>
                        </section>

                </div>

            </div>
        </div>
    )
}

export default Login;