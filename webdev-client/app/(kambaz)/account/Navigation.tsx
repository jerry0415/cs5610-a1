"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../kambaz.css";

export default function AccountNavigation() {
  const pathname = usePathname() ?? "";

  const itemClass = (active: boolean) =>
    active
      ? "list-group-item active border-0"
      : "list-group-item border-0 text-red-600";

  return (
    <div
      id="wd-account-navigation"
      className="wd list-group rounded-none text-lg"
    >
      <Link
        href="/account/signin"
        id="wd-account-signin-link"
        className={itemClass(pathname.startsWith("/account/signin"))}
      >
        Signin
      </Link>
      <Link
        href="/account/signup"
        id="wd-account-signup-link"
        className={itemClass(pathname.startsWith("/account/signup"))}
      >
        Signup
      </Link>
      <Link
        href="/account/profile"
        id="wd-account-profile-link"
        className={itemClass(pathname.startsWith("/account/profile"))}
      >
        Profile
      </Link>
    </div>
  );
}
