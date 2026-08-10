import { redirect } from "react-router-dom";
import { sendMessage } from "../../services/contactService";

export async function contactLoader({ request }) {
  const formData = await request.formData();
  const contents = Object.fromEntries(formData);

  const res = await sendMessage(contents);
  console.log(res);
  redirect(`/message-confirmation`);
}
