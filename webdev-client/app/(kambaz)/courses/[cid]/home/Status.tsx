import {
  FaBell,
  FaBullhorn,
  FaCheckCircle,
  FaHome,
  FaStar,
} from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { MdBarChart, MdDoNotDisturbAlt } from "react-icons/md";
import { RiBarChart2Fill } from "react-icons/ri";

const actionBtn =
  "mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm";
const actionIcon = "me-2 shrink-0 text-base";

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-1 flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      <button type="button" className={actionBtn}>
        <BiImport className={actionIcon} /> Import Existing Content
      </button>
      <button type="button" className={actionBtn}>
        <LiaFileImportSolid className={actionIcon} /> Import from Commons
      </button>
      <button type="button" className={actionBtn}>
        <FaHome className={actionIcon} /> Choose Home Page
      </button>
      <button type="button" className={actionBtn}>
        <RiBarChart2Fill className={actionIcon} /> View Course Stream
      </button>
      <button type="button" className={actionBtn}>
        <FaBullhorn className={actionIcon} /> New Announcement
      </button>
      <button type="button" className={actionBtn}>
        <MdBarChart className={actionIcon} /> New Analytics
      </button>
      <button type="button" className={actionBtn}>
        <FaBell className={actionIcon} /> View Course Notifications
      </button>
      <button type="button" id="wd-ai-status" className={actionBtn}>
        <FaStar className={actionIcon} /> Sample action
      </button>
    </div>
  );
}
