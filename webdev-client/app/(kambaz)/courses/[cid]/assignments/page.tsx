import AssignmentItem from "./AssignmentItem.tsx";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      <input
        id="wd-search-assignment"
        type="text"
        placeholder="Search for Assignments"
      />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 className="wd-assignments-title">
        ASSIGNMENTS 40% of Total<button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <AssignmentItem
          cid={cid}
          aid="1"
          title="Assignment 1"
          details="Assignment 1 details"
        />
        <AssignmentItem
          cid={cid}
          aid="2"
          title="Assignment 2"
          details="Assignment 2 details"
        />
        <AssignmentItem
          cid={cid}
          aid="3"
          title="Assignment 3"
          details="Assignment 3 details"
        />
      </ul>
    </div>
  );
}
