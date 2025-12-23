import React from 'react'

function FormControl() {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [res, setRes] = React.useState("");

    const userName = "Vidya";
    const userEmail = "vidya@gmail.com";
    const userPassword = "vidya123";
    const handleSubmit = (e) => {
        e.preventDefault();

        if (name === userName && email === userEmail && password === userPassword) {
            setRes("Login Successful");
        }else {
            setRes("Login Failed");
        }

        // if(name === !userName){
        //     setRes("Invalid Name");
        //     return;
        // }else if(email === !userEmail){
        //     setRes("Invalid Email");
        //     return;
        // }else if(password === !userPassword){
        //     setRes("Invalid Password");
        //     return;
        // }
    }

    return (
        <>
            <form className="form-control" onSubmit={handleSubmit}>
                <label htmlFor="Name">Name : </label>
                <input type="name" id="name" name="name" placeholder="Enter your Name" onChange={(e)=>(setName(e.target.value))} />
                <label htmlFor="email">Email : </label>
                <input type="email" id="email" name="email" placeholder="Enter your Email" onChange={(e)=>(setEmail(e.target.value))} />
                <label htmlFor="password">Password : </label>
                <input type="password" id="password" name="password" placeholder="Enter your Password" onChange={(e)=>(setPassword(e.target.value))} />
                <button type="submit">Submit</button>
            </form>
            <h1>{res}</h1>
        </>
    )
}

export default FormControl