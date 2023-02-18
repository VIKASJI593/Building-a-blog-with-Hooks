import React, { useState } from "react";

function useFormInputs(initialValue) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}

function LoginForm() {
  const email = useFormInputs("");
  const password = useFormInputs("");

  return (
    <form>
      <div>Email</div>
      <div>
        <input type="text" {...email} />
      </div>
      <br />
      <div>Password</div>
      <div>
        <input type="password" {...password} />
      </div>
      <p>
        <strong>
          <em>Email:</em>
        </strong>
        {email.value}
        <strong>
          <em>Password:</em>
        </strong>
        {''}
        {password.value}
      </p>
    </form>
  );
}

function SignupForm() {
  const email = useFormInputs("");
  const password = useFormInputs("");
  const confirmpassword = useFormInputs("");

  return (
    <form>
      <div>Email</div>
      <div>
        <input type="text" {...email} />
      </div>
      <br />

      <div>Password</div>
      <div>
        <input type="password" {...password} />
      </div>
      <br />

      <div>Confirm Password</div>
      <div>
        <input type="password" {...confirmpassword} />
      </div>
      <p>
        <strong>
          <em>Email:</em>
        </strong>
        {email.value}
        <strong>
          <em>Password:</em>
        </strong>
        {''}
        {password.value}
        <strong>
          <em>Confirm Password:</em>
        </strong>
        {''}
        {confirmpassword.value}
      </p>
    </form>
  );
}

function App(props) {
  return (
    <div className="App" style={{ padding: 20 }}>
      <h2>Login</h2>
      <LoginForm />
      <br />
      <h3>Signup</h3>
      <SignupForm />
    </div>
  );
}

export default App;
