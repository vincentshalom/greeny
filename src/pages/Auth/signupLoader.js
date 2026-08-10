import { redirect } from "react-router-dom";
import { signup, login } from "../../services/authService";
import { store } from "../../store/store";
import { setCredentials } from "../../store/authSlice";

export async function signupAction({ request }) {
  const formData = await request.formData();
  const { username, email, password } = Object.fromEntries(formData);

  try {
    await signup({ username, email, password });
  } catch {
    return { error: "Could not create account. Try a different username." };
  }

  let session;
  try {
    session = await login({ username, password });
  } catch {
    return redirect("/login");
  }

  store.dispatch(
    setCredentials({ user: { username, email }, token: session.token }),
  );

  return redirect("/");
}
