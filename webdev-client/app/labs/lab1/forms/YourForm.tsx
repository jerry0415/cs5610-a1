export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Student Profile</h4>

      <h5>Text Fields</h5>
      <label htmlFor="wd-your-first-name">First name:</label>
      <input
        type="text"
        id="wd-your-first-name"
        placeholder="Jane"
        defaultValue="Jane"
      />
      <br />
      <label htmlFor="wd-your-last-name">Last name:</label>
      <input
        type="text"
        id="wd-your-last-name"
        placeholder="Doe"
        defaultValue="Doe"
      />
      <br />
      <label htmlFor="wd-your-student-id">Student ID:</label>
      <input
        type="password"
        id="wd-your-student-id"
        placeholder="••••••••"
        defaultValue="SAMPLE1234"
      />
      <br />

      <h5>About You</h5>
      <label htmlFor="wd-your-bio">Why I am taking this course:</label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={40}
        rows={6}
        defaultValue="SAMPLE: I am taking this course to learn full-stack web development and strengthen my React skills."
      />
      <br />

      <h5>Class Standing</h5>
      <input
        type="radio"
        name="wd-your-standing"
        id="wd-your-standing-freshman"
      />
      <label htmlFor="wd-your-standing-freshman">Freshman</label>
      <br />
      <input
        type="radio"
        name="wd-your-standing"
        id="wd-your-standing-sophomore"
      />
      <label htmlFor="wd-your-standing-sophomore">Sophomore</label>
      <br />
      <input
        type="radio"
        name="wd-your-standing"
        id="wd-your-standing-junior"
      />
      <label htmlFor="wd-your-standing-junior">Junior</label>
      <br />
      <input
        type="radio"
        name="wd-your-standing"
        id="wd-your-standing-senior"
        defaultChecked
      />
      <label htmlFor="wd-your-standing-senior">Senior</label>
      <br />
      <input
        type="radio"
        name="wd-your-standing"
        id="wd-your-standing-graduate"
      />
      <label htmlFor="wd-your-standing-graduate">Graduate</label>
      <br />

      <h5>Enrollment Status</h5>
      <input
        type="radio"
        name="wd-your-enrollment"
        id="wd-your-enrollment-full-time"
        defaultChecked
      />
      <label htmlFor="wd-your-enrollment-full-time">Full-time</label>
      <br />
      <input
        type="radio"
        name="wd-your-enrollment"
        id="wd-your-enrollment-part-time"
      />
      <label htmlFor="wd-your-enrollment-part-time">Part-time</label>
      <br />

      <h5>Interests</h5>
      <input
        type="checkbox"
        name="wd-your-interests"
        id="wd-your-interest-react"
        defaultChecked
      />
      <label htmlFor="wd-your-interest-react">React</label>
      <br />
      <input
        type="checkbox"
        name="wd-your-interests"
        id="wd-your-interest-typescript"
        defaultChecked
      />
      <label htmlFor="wd-your-interest-typescript">TypeScript</label>
      <br />
      <input
        type="checkbox"
        name="wd-your-interests"
        id="wd-your-interest-nodejs"
      />
      <label htmlFor="wd-your-interest-nodejs">Node.js</label>
      <br />
      <input
        type="checkbox"
        name="wd-your-interests"
        id="wd-your-interest-fullstack"
      />
      <label htmlFor="wd-your-interest-fullstack">Full-stack careers</label>
      <br />

      <h5>Major</h5>
      <label htmlFor="wd-your-major">College / major: </label>
      <br />
      <select id="wd-your-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="IS">Information Systems</option>
        <option value="DS">Data Science</option>
        <option value="SE">Software Engineering</option>
        <option value="OTHER">Other</option>
      </select>
      <br />

      <h5>Topics to deepen this term</h5>
      <label htmlFor="wd-your-topics">Select topics: </label>
      <br />
      <select multiple id="wd-your-topics" defaultValue={["REACT", "STATE"]}>
        <option value="REACT">React patterns</option>
        <option value="STATE">State management</option>
        <option value="NODE">Node / Express</option>
        <option value="DB">Databases</option>
        <option value="DEPLOY">Deployment</option>
      </select>
      <br />

      <h5>Other Details</h5>
      <label htmlFor="wd-your-email">School email: </label>
      <input
        type="email"
        id="wd-your-email"
        placeholder="jane@university.edu"
        defaultValue="jane@university.edu"
      />
      <br />
      <label htmlFor="wd-your-grad-year">Expected graduation year: </label>
      <input
        type="number"
        id="wd-your-grad-year"
        defaultValue={2027}
        min={2024}
        max={2032}
      />
      <br />
      <label htmlFor="wd-your-start-date">Program start date: </label>
      <input
        type="date"
        id="wd-your-start-date"
        defaultValue="2025-09-01"
        min="2020-01-01"
        max="2030-12-31"
      />
      <br />
      <label htmlFor="wd-your-excitement">
        Excitement about this course (0–10):{" "}
      </label>
      <input
        type="range"
        id="wd-your-excitement"
        min={0}
        max={10}
        defaultValue={8}
      />
      <br />

      <h5>Actions</h5>
      <button id="wd-your-form-save" type="submit">
        Save
      </button>
      <button id="wd-your-form-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
