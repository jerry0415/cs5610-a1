import Link from "next/link";

export default function TOC() {
  return (
    <div id="wd-toc">
      <p>Mingxuan Liu — build, learn, ship.</p>
      <ul>
        <li>
          <Link id="wd-home-link" href="/labs">
            Labs
          </Link>
        </li>
        <li>
          <Link id="wd-lab1-link" href="/labs/lab1">
            Lab 1
          </Link>
        </li>
        <li>
          <Link id="wd-lab2-link" href="/labs/lab2">
            Lab 2
          </Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3</Link>
        </li>
        <li>
          <Link href="/labs/lab4">Lab 4</Link>
        </li>
        <li>
          <Link href="/labs/lab5">Lab 5</Link>
        </li>
        <li>
          <Link href="/book/ch1" id="wd-toc-book-link">
            Chapter 1
          </Link>
        </li>
      </ul>
    </div>
  );
}
