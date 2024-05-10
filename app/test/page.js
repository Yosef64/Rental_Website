import { redirect } from "next/navigation";
import { login, logout, getSession } from "@/lib";
export default async function SignupForm() {
  const session = await getSession();
  // const sessionString = JSON.stringify(session, null, 2);
  // const sessionObject = JSON.parse(sessionString);
  

  // console.log(user);
  return (
    <form
      action={async (formData) => {
        "use server";
        await login(formData);

        redirect("/test");
      }}
      
    >
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" placeholder="Name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="Email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
      </div>
      <button type="submit">Sign Up</button>
      <pre>{JSON.stringify(session,null,2)}</pre>
    </form>
  );
}
