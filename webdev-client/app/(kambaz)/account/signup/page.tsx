"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccountContext } from "../AccountContext";
import * as client from "../client";

const inputClass =
  "mb-2 w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm";

export default function Signup() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();

  const signup = async () => {
    const current = await client.signup(user);
    setCurrentUser(current);
    router.push("/account/profile");
  };

  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign up</h1>
      <input
        placeholder="username"
        className={`wd-username ${inputClass}`}
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        placeholder="password"
        type="password"
        className={`wd-password ${inputClass}`}
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button
        type="button"
        onClick={signup}
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-700"
      >
        Sign up
      </button>
      <Link
        href="/account/signin"
        className="text-sm text-red-600 no-underline hover:underline"
      >
        Sign in
      </Link>
    </div>
  );
}
