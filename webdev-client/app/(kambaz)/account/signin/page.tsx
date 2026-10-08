import Link from "next/link";

const inputClass =
  "mb-2 w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign in</h1>
      <input
        id="wd-username"
        placeholder="username"
        className={inputClass}
        defaultValue="ada"
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className={inputClass}
        defaultValue="123"
      />
      <input
        id="wd-ai-signin-note"
        placeholder="sample note"
        className={inputClass}
      />
      <Link
        id="wd-signin-btn"
        href="/account/profile"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-sm font-medium text-white no-underline hover:bg-blue-700"
      >
        Sign in
      </Link>
      <Link
        id="wd-signup-link"
        href="/account/signup"
        className="text-sm text-red-600 no-underline hover:underline"
      >
        Sign up
      </Link>
    </div>
  );
}
