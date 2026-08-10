import { redirect } from "react-router-dom";
import { login } from "../../services/authService";
import { setCredentials } from "./authSlice";
import store from "../../store/store";

export async function authLoader({ request }) {
  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);
  let response;
  try {
    response = await login(credentials);
  } catch {
    return { error: "Invalid username or password" };
  }
  store.dispatch(
    setCredentials({
      user: { username: credentials.username },
      token: response.token,
    }),
  );
  const redirectTo = new URL(request.url).searchParams.get("redirectTo") || "/";
  return redirect(redirectTo);
}
