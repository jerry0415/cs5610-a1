"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { FaBook, FaCalendar, FaFlask, FaInbox } from "react-icons/fa";
import { FaCircleQuestion, FaRegCircleUser } from "react-icons/fa6";
import Link from "next/link";

const blackLink =
  "block bg-black py-3 text-center text-sm text-white no-underline";
const redIcon = "inline-block text-3xl text-red-500";

export default function KambazNavigation() {
  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:block"
    >
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
        className={blackLink}
      >
        <span className={`${redIcon} font-bold`}>N</span>
        <br />
        Northeastern
      </a>
      <Link href="/account" id="wd-account-link" className={blackLink}>
        <FaRegCircleUser className={redIcon} />
        <br />
        Account
      </Link>
      <Link
        href="/dashboard"
        id="wd-dashboard-link"
        className="block bg-white py-3 text-center text-sm text-red-600 no-underline"
      >
        <AiOutlineDashboard className="inline-block text-3xl text-red-600" />
        <br />
        Dashboard
      </Link>
      <Link href="/dashboard" id="wd-course-link" className={blackLink}>
        <FaBook className={redIcon} />
        <br />
        Courses
      </Link>
      <Link href="/calendar" id="wd-calendar-link" className={blackLink}>
        <FaCalendar className={redIcon} />
        <br />
        Calendar
      </Link>
      <Link href="/inbox" id="wd-inbox-link" className={blackLink}>
        <FaInbox className={redIcon} />
        <br />
        Inbox
      </Link>
      <Link href="/labs" id="wd-labs-link" className={blackLink}>
        <FaFlask className={redIcon} />
        <br />
        Labs
      </Link>
      <Link href="/help" id="wd-ai-nav-help" className={blackLink}>
        <FaCircleQuestion className={redIcon} />
        <br />
        Help
      </Link>
    </nav>
  );
}
