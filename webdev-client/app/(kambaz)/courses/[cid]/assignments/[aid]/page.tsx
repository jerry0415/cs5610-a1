export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" defaultValue="Percentage">
                <option value="Percentage">Percentage</option>
                <option value="Letter">Letter</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type" defaultValue="Online">
                <option value="Online">Online</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              Online Entry Options
            </td>
            <td>
              <br />
              <input
                type="checkbox"
                id="wd-text-entry"
                name="wd-online-entry"
              />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <input
                type="checkbox"
                id="wd-website-url"
                name="wd-online-entry"
              />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input
                type="checkbox"
                id="wd-media-recordings"
                name="wd-online-entry"
              />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
              <br />
              <input
                type="checkbox"
                id="wd-student-annotation"
                name="wd-online-entry"
              />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br />
              <input
                type="checkbox"
                id="wd-file-upload"
                name="wd-online-entry"
              />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              Assign
            </td>
            <td>
              <label htmlFor="wd-assign-to">Assign to</label>
              <br />
              <select id="wd-assign-to" multiple defaultValue={["Everyone"]}>
                <option value="Everyone">Everyone</option>
                <option value="Section1">Section 1</option>
                <option value="Section2">Section 2</option>
                <option value="Section3">Section 3</option>
              </select>
              <br />
              <label htmlFor="wd-due-date">Due</label>
              <br />
              <input type="date" id="wd-due-date" defaultValue="2024-05-13" />
              <br />
              <label htmlFor="wd-available-from">Available from</label>
              <br />
              <input
                type="date"
                id="wd-available-from"
                defaultValue="2024-05-06"
              />
              <br />
              <label htmlFor="wd-available-until">Until</label>
              <br />
              <input
                type="date"
                id="wd-available-until"
                defaultValue="2024-05-20"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
