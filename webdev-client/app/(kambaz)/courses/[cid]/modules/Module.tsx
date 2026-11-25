import type { ReactNode } from "react";
import ModuleControlButtons from "./ModuleControlButtons";
import {
  useModulesStore,
  type CourseModule,
} from "../../../store/modulesStore";

export default function Module({
  module,
  onDelete,
  onUpdate,
  children,
}: {
  module: CourseModule;
  onDelete: (moduleId: string) => void;
  onUpdate: (module: CourseModule) => void;
  children?: ReactNode;
}) {
  const updateModule = useModulesStore((state) => state.updateModule);
  return (
    <li className="wd-module mb-5 overflow-hidden border border-neutral-400 p-0 text-xl">
      <div className="wd-title flex items-center justify-between bg-neutral-200 p-3 ps-2">
        {!module.editing ? (
          <span>{module.name}</span>
        ) : (
          <input
            className="form-control w-1/2 rounded border border-neutral-300 px-2 py-1 text-base"
            value={module.name}
            onChange={(e) =>
              updateModule({ ...module, name: e.target.value })
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onUpdate({ ...module, editing: false });
              }
            }}
          />
        )}
        <ModuleControlButtons
          moduleId={module._id}
          deleteModule={onDelete}
        />
      </div>
      <ul className="wd-lessons m-0 list-none p-0">{children}</ul>
    </li>
  );
}
