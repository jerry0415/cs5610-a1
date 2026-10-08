"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../kambaz.css";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  const home = `/courses/${cid}/home`;
  const modules = `/courses/${cid}/modules`;
  const piazza = `/courses/${cid}/piazza`;
  const zoom = `/courses/${cid}/zoom`;
  const assignments = `/courses/${cid}/assignments`;
  const quizzes = `/courses/${cid}/quizzes`;
  const grades = `/courses/${cid}/grades`;
  const people = `/courses/${cid}/people`;

  const itemClass = (active: boolean) =>
    active
      ? "list-group-item active border-0"
      : "list-group-item border-0 text-red-600";

  const sectionActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <div
      id="wd-courses-navigation"
      className="wd list-group rounded-none text-lg"
    >
      <Link
        href={home}
        id="wd-course-home-link"
        className={itemClass(pathname === home)}
      >
        Home
      </Link>
      <Link
        href={modules}
        id="wd-course-modules-link"
        className={itemClass(sectionActive(modules))}
      >
        Modules
      </Link>
      <Link
        href={piazza}
        id="wd-course-piazza-link"
        className={itemClass(sectionActive(piazza))}
      >
        Piazza
      </Link>
      <Link
        href={zoom}
        id="wd-course-zoom-link"
        className={itemClass(sectionActive(zoom))}
      >
        Zoom
      </Link>
      <Link
        href={assignments}
        id="wd-course-assignments-link"
        className={itemClass(sectionActive(assignments))}
      >
        Assignments
      </Link>
      <Link
        href={quizzes}
        id="wd-course-quizzes-link"
        className={itemClass(sectionActive(quizzes))}
      >
        Quizzes
      </Link>
      <Link
        href={grades}
        id="wd-course-grades-link"
        className={itemClass(sectionActive(grades))}
      >
        Grades
      </Link>
      <Link
        href={`${people}/table`}
        id="wd-course-people-link"
        className={itemClass(sectionActive(people))}
      >
        People
      </Link>
    </div>
  );
}
