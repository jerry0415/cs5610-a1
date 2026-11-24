"use client";

import { useState } from "react";

export default function WorkingWithRemoteObjects() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState({
    id: "M101",
    name: "ML Introduction to Rocket Propulsion",
    description: "Basic principles of rocket propulsion and rocket engines.",
    course: "RS101",
  });
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-remote-objects">
      <h3>Working With Remote Objects</h3>
      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${HTTP_SERVER}/lab5/assignment`}
      >
        Get Assignment
      </a>
      <br />
      <a
        id="wd-retrieve-module"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${HTTP_SERVER}/lab5/module`}
      >
        Get Module
      </a>
      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        href={`${HTTP_SERVER}/lab5/assignment/title`}
      >
        Get Title
      </a>
      <br />
      <a id="wd-retrieve-module-name" href={`${HTTP_SERVER}/lab5/module/name`}>
        Get Module Name
      </a>
      <h4>Updating Properties</h4>
      <a
        id="wd-update-assignment-title"
        href={`${ASSIGNMENT_API_URL}/title/${encodeURIComponent(assignment.title)}`}
      >
        Update Title
      </a>
      <input
        id="wd-assignment-title"
        value={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <br />
      <a
        id="wd-update-assignment-score"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>
      <input
        id="wd-assignment-score"
        type="number"
        value={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) || 0 })
        }
      />
      <br />
      <a
        id="wd-update-assignment-completed"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
      >
        Update Completed
      </a>
      <input
        id="wd-assignment-completed"
        type="checkbox"
        checked={assignment.completed}
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })
        }
      />
      <br />
      <a
        id="wd-update-module-name"
        href={`${MODULE_API_URL}/name/${encodeURIComponent(module.name)}`}
      >
        Update Module Name
      </a>
      <input
        id="wd-module-name"
        value={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <br />
      <a
        id="wd-update-module-description"
        href={`${MODULE_API_URL}/description/${encodeURIComponent(module.description)}`}
      >
        Update Module Description
      </a>
      <input
        id="wd-module-description"
        value={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })}
      />
    </div>
  );
}
