import { Form, Link, useActionData, useNavigation } from "react-router-dom";

export default function Signup() {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="auth-page">
      <h1>Create an account</h1>
      {actionData?.error && (
        <p className="auth-page__error">{actionData.error}</p>
      )}
      <Form method="post">
        <label>
          Username
          <input type="text" name="username" required />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required minLength={6} />
        </label>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating account..." : "Sign Up"}
        </button>
      </Form>
      <p className="auth-page__switch">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}
