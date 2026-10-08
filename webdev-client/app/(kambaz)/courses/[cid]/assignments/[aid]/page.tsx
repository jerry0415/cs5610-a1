import Link from "next/link";

const inputClass =
  "w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm";
const labelClass = "mb-1 block text-sm font-medium text-neutral-800";
const sectionClass = "rounded border border-neutral-300 bg-white p-4 text-sm";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  const assignmentsHref = `/courses/${cid}/assignments`;

  return (
    <div id="wd-assignments-editor" className="max-w-3xl text-sm">
      <label htmlFor="wd-name" className={labelClass}>
        Assignment Name
      </label>
      <input
        id="wd-name"
        defaultValue="A1 - ENV + HTML"
        className={`${inputClass} mb-4`}
      />

      <textarea
        id="wd-description"
        rows={6}
        className={`${inputClass} mb-6`}
        defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel."
      />

      <div className="space-y-4">
        <div className="grid grid-cols-[140px_1fr] items-start gap-3">
          <label
            htmlFor="wd-points"
            className="pt-2 text-right text-sm text-neutral-700"
          >
            Points
          </label>
          <input
            id="wd-points"
            defaultValue={100}
            className={`${inputClass} max-w-[120px]`}
          />
        </div>

        <div className="grid grid-cols-[140px_1fr] items-start gap-3">
          <label
            htmlFor="wd-group"
            className="pt-2 text-right text-sm text-neutral-700"
          >
            Assignment Group
          </label>
          <select
            id="wd-group"
            defaultValue="ASSIGNMENTS"
            className={`${inputClass} max-w-xs`}
          >
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
        </div>

        <div className="grid grid-cols-[140px_1fr] items-start gap-3">
          <label
            htmlFor="wd-display-grade-as"
            className="pt-2 text-right text-sm text-neutral-700"
          >
            Display Grade as
          </label>
          <select
            id="wd-display-grade-as"
            defaultValue="Percentage"
            className={`${inputClass} max-w-xs`}
          >
            <option value="Percentage">Percentage</option>
            <option value="Letter">Letter</option>
          </select>
        </div>

        <div className="grid grid-cols-[140px_1fr] items-start gap-3">
          <label
            htmlFor="wd-submission-type"
            className="pt-2 text-right text-sm text-neutral-700"
          >
            Submission Type
          </label>
          <div className={sectionClass}>
            <select
              id="wd-submission-type"
              defaultValue="Online"
              className={`${inputClass} mb-3 max-w-xs`}
            >
              <option value="Online">Online</option>
            </select>
            <div className="mb-2 font-medium text-neutral-800">
              Online Entry Options
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="wd-text-entry"
                  name="wd-online-entry"
                />
                Text Entry
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="wd-website-url"
                  name="wd-online-entry"
                />
                Website URL
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="wd-media-recordings"
                  name="wd-online-entry"
                />
                Media Recordings
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="wd-student-annotation"
                  name="wd-online-entry"
                />
                Student Annotation
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="wd-file-upload"
                  name="wd-online-entry"
                />
                File Uploads
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[140px_1fr] items-start gap-3">
          <div className="pt-2 text-right text-sm text-neutral-700">Assign</div>
          <div className={sectionClass}>
            <label htmlFor="wd-assign-to" className={labelClass}>
              Assign to
            </label>
            <select
              id="wd-assign-to"
              multiple
              defaultValue={["Everyone"]}
              className={`${inputClass} mb-3 h-24`}
            >
              <option value="Everyone">Everyone</option>
              <option value="Section1">Section 1</option>
              <option value="Section2">Section 2</option>
              <option value="Section3">Section 3</option>
            </select>

            <label htmlFor="wd-due-date" className={labelClass}>
              Due
            </label>
            <input
              type="date"
              id="wd-due-date"
              defaultValue="2024-05-13"
              className={`${inputClass} mb-3`}
            />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="wd-available-from" className={labelClass}>
                  Available from
                </label>
                <input
                  type="date"
                  id="wd-available-from"
                  defaultValue="2024-05-06"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="wd-available-until" className={labelClass}>
                  Until
                </label>
                <input
                  type="date"
                  id="wd-available-until"
                  defaultValue="2024-05-20"
                  className={inputClass}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <label htmlFor="wd-ai-editor-notes" className={`${labelClass} mt-6`}>
        Sample notes
      </label>
      <textarea
        id="wd-ai-editor-notes"
        rows={4}
        className={`${inputClass} mb-4`}
      />

      <hr className="my-6 border-neutral-300" />

      <div className="flex justify-end gap-2">
        <Link
          href={assignmentsHref}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-800 no-underline hover:bg-neutral-50"
        >
          Cancel
        </Link>
        <Link
          href={assignmentsHref}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white no-underline hover:bg-red-700"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
