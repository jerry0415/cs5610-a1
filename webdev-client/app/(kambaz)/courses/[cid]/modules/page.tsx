"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Module from "./Module";
import Lesson from "./Lesson";
import ModulesControls from "./ModulesControls";
import * as db from "../../../database";

export default function Modules() {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const [modules, setModules] = useState(db.modules);
  const [moduleName, setModuleName] = useState("");
  const addModule = () => {
    setModules([
      ...modules,
      {
        _id: crypto.randomUUID(),
        name: moduleName,
        description: "",
        course: courseId,
        lessons: [],
      },
    ]);
    setModuleName("");
  };
  const courseModules = modules.filter((module) => module.course === courseId);

  return (
    <div>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
      />
      <ul id="wd-modules" className="m-0 list-none p-0">
        {courseModules.map((module) => (
          <Module key={module._id} title={module.name}>
            {module.lessons?.map((lesson) => (
              <Lesson key={lesson._id} title={lesson.name} />
            ))}
          </Module>
        ))}
      </ul>
    </div>
  );
}
