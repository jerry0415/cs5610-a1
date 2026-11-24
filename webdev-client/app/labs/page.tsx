import Link from "next/link";

export default function Labs() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <h2>Mingxuan Liu</h2>
      <ul>
        <li>
          <Link href="/labs/lab1">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2: CSS Basics</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3: JavaScript Fundamentals</Link>
        </li>
        <li>
          <Link href="/labs/lab4" id="wd-lab4-link">
            Lab 4: Placeholder
          </Link>
        </li>
        <li>
          <Link href="/labs/lab5">Lab 5</Link>
        </li>
        <li>
          <a
            href="https://github.com/jerry0415/cs5610-a1"
            id="wd-github"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://github.com/jerry0415/cs5610-a1/tree/main/webdev-server"
            id="wd-github-node"
            target="_blank"
            rel="noreferrer"
          >
            Node.js HTTP Server GitHub
          </a>
        </li>
        <li>
          <a
            href={HTTP_SERVER}
            id="wd-http-server"
            target="_blank"
            rel="noreferrer"
          >
            HTTP Server
          </a>
        </li>
      </ul>
    </div>
  );
}
