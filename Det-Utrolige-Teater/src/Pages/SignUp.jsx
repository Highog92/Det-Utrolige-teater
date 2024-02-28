import signUpStyle from './Styles/SignUp.module.scss'
import { useState, useContext } from 'react';
import { UserContext } from '../Context/UserContext';

export function SignUp() {

    const [message, setMessage] = useState()

    const { userData, setUserData } = useContext(UserContext)
    console.log(userData);

    async function handleSignup(event) {


        // Denne linje gør at siden ikke opdatere når man trykker på submit
        event.preventDefault()

        // Nødvendige variabler for at kunne oprette en bruger. 
        // https://documenter.getpostman.com/view/6540576/2s9Y5cugYY#d2e52144-c17a-45f1-ab0a-4cfd955fb66b        

        const activeValue = true;
        const org_idValue = 1;
        const refresh_tokenValue = "1234";
        const groupsValue = 1;



        let url = "http://localhost:3000/users"

        let body = new URLSearchParams()
        body.append('firstname', event.target.username.value)
        body.append('lastname', event.target.lastname.value)
        body.append('email', event.target.email.value)
        body.append('password', event.target.password.value)


        body.append("is_active", activeValue);
        body.append("org_id", org_idValue);
        body.append("refresh_token", refresh_tokenValue);
        body.append("groups", groupsValue);

        console.log(body);

        let options = {
            method: "POST",
            body: body

        }

        try {
            let res = await fetch(url, options)
            let data = await res.json()
            setUserData(data.user)
            setMessage("Tilykke med din nye bruger :)")
            console.log(data);
        } catch (err) {
            setMessage("Prøv lige igen, noget gik galt")
            console.log(err);
        }
    }


    return (

        <section className={signUpStyle.signUp}>
            <form onSubmit={(event) => handleSignup(event)}>
                <h1>Sign Up</h1>
                <p>Indtast dine informationer for at oprette en bruger</p>
                <label htmlFor="">Firstname
                    <input name="username" type="text" />
                </label>
                <label htmlFor="">Lastname
                    <input name="lastname" type="text" />
                </label>
                <label htmlFor="">Email
                    <input name="email" type="email" />
                </label>
                <label htmlFor="">Password
                    <input name="password" type="password" />
                </label>
                <input value="Sign up" type="submit" className={signUpStyle.submit} />

                <p>{message}</p>
            </form>


        </section>
    )
}
