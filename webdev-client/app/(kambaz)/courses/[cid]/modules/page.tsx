"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import Module from "./Module";
import Lesson from "./Lesson";
import ModulesControls from "./ModulesControls";
import {
  useModulesStore,
  type CourseModule,
} from "../../../store/modulesStore";
import * as client from "../../client";

export default function Modules() {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const modules = useModulesStore((state) => state.modules);
  const setModules = useModulesStore((state) => state.setModules);
  const addModule = useModulesStore((state) => state.addModule);
  const deleteModule = useModulesStore((state) => state.deleteModule);
  const updateModule = useModulesStore((state) => state.updateModule);

  useEffect(() => {
    const load = async () => {
      if (!courseId) return;
      setModules(await client.findModulesForCourse(courseId));
    };
    load();
  }, [courseId, setModules]);

  const onAddModule = async (moduleName: string) => {
    const created = await client.createModuleForCourse(courseId, {
      name: moduleName,
    });
    addModule(created);
  };

  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    deleteModule(moduleId);
  };

  const onUpdateModule = async (module: CourseModule) => {
    const saved = await client.updateModule(module);
    updateModule(saved);
  };

  return (
    <div>
      <ModulesControls onAddModule={onAddModule} />
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module
            key={module._id}
            module={module}
            onDelete={() => onRemoveModule(module._id)}
            onUpdate={onUpdateModule}
          >
            {module.lessons?.map((lesson) => (
              <Lesson key={lesson._id} title={lesson.name} />
            ))}
          </Module>
        ))}
      </ul>
    </div>
  );
}
