 import React, { useState } from 'react';
      const SignUp=({onRouteChange}) =>{
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [name, setName] = useState('');
      const [username, setUsername] = useState('');
      //const loadUser = () => {};
      const onSubmitSignUp = (event) => {event.preventDefault();
        fetch('http://localhost:3000/SignUp', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            email: email, 
            password:password,
            name: name,
            username:username
          })
        })
          .then(respone => respone.json())
        .then(user =>{
          if (user.id){
           // onRouteChange ('home')
          }
        })
    }
        return(
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
            <div className="measure">
            <fieldset
              id="sign_up"
              className="ba b--transparent ph0 mh0"
            >
            <legend className="f2 fw6 ph0 mh0">
            Sign up
            </legend>
            <div className="mt3">
            <label
              className="db fw6 lh-copy f6"
              htmlFor="name"
               >
            name
            </label>
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="text"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              autoComplete="name" 
            />
            </div>
            <div className="mt3">
            <label
              className="db fw6 lh-copy f6"
              htmlFor="email-address"
            >
            Username
            </label>u
            <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="username, button"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username" 
          />
            </div>
            <div className="mt3">
            <label
              className="db fw6 lh-copy f6"
              htmlFor="email-address"
            >
            Email
            </label>
            <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="email, button"
            name="email-address"
            id="email-address"
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email" 
          />
            </div>
            <div className="mv3">
            <label
              className="db fw6 lh-copy f6"
              htmlFor="password"
            >
            Password
            </label>
            <input
             className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
             type="password, button"
             name="password"
             id="password"
             onChange={(e) => setPassword(e.target.value)}
             autoComplete="current-password"
           />
            </div>
            </fieldset>
            <div className="">
            <input
           onClick={() =>onRouteChange('home',{onSubmitSignUp}) }
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="button"
              value="Signup"
            />
      </div>
            <div className="lh-copy mt3">
            <p
              onClick={() => onRouteChange('SignIn')}
              className="f6 link dim black db pointer "
            >
            siygnIn
            </p>
      </div>
            </div>
            </main>
          </article>
        )
    }
export default SignUp;