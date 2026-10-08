import Link from "next/link";

const inputClass =
  "mb-2 w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign up</h1>
      <input
        placeholder="username"
        className={`wd-username ${inputClass}`}
        defaultValue="ada"
      />
      <input
        placeholder="password"
        type="password"
        className={`wd-password ${inputClass}`}
        defaultValue="123"
      />
      <input
        placeholder="verify password"
        type="password"
        className={`wd-password-verify ${inputClass}`}
      />
      <Link
        href="/account/profile"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-sm font-medium text-white no-underline hover:bg-blue-700"
      >
        Sign up
      </Link>
      <Link
        href="/account/signin"
        className="text-sm text-red-600 no-underline hover:underline"
      >
        Sign in
      </Link>
    </div>
  );
}
