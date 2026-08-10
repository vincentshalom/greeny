import { Form } from "react-router-dom";

function Login() {
  return (
    <section className="">
      <div className="">
        <h1>Login</h1>
        <Form className="">
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Password
            <input type="password" name="password" required />
          </label>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </Form>
      </div>
    </section>
  );
}

export default Login;
