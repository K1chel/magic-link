import { magicLink } from "@/actions/magic-link";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const SignInPage = async () => {
  const session = await auth();

  if (session) redirect("/");

  return (
    <div className="max-w-md mx-auto w-full px-4">
      <form
        action={magicLink}
        className="flex flex-col items-center justify-center gap-y-4 w-full"
      >
        <input
          placeholder="email@email.com"
          className="w-full p-2 rounded border"
          type="email"
          name="email"
        />
        <button className="w-full bg-slate-200 p-2 rounded">
          Send Magic Link
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
