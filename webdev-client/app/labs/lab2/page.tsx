import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p style={{ backgroundColor: "blue", color: "white" }}>
        Style attribute allows configuring look and feel right on the element.
        Although it&apos;s very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>
      <p
        id="wd-ai-style-attr"
        style={{ backgroundColor: "purple", color: "white" }}
      >
        Style attributes can also set a purple background with white text on a
        sample paragraph.
      </p>
      <p style={{ backgroundColor: "green", color: "yellow" }}>
        Hi this is a second paragraph, with green background and yellow text.
      </p>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same
          name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a different
          look and feel
        </p>
        <p id="wd-ai-id-selector">
          This sample paragraph is selected by its own ID and styled separately
          from the other ID selectors
        </p>
        <p id="wd-id-selector-3">
          My custom paragraph with a custom look and feel
        </p>
      </div>
      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
        <p className="wd-ai-class-selector">
          This sample class styles a paragraph and a heading with the same look
        </p>
        <h4 className="wd-ai-class-selector">
          This heading uses the same sample class as the paragraph above
        </h4>
        <p className="wd-your-class">
          A second class can style this paragraph the same way as a heading
        </p>
        <h4 className="wd-your-class">
          This heading shares the second class with the paragraph above
        </h4>
      </div>
      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .selector-2 .selector3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
                <span className="wd-ai-selector-5">
                  This deeper span is styled only by the new descendant selector
                </span>
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
            </p>
          </div>
        </div>
      </div>
      <div id="wd-css-cascade">
        <h3>Cascade and specificity (The conflict)</h3>
        <blockquote id="wd-ai-cascade" className="wd-ai-cascade">
          A tag rule, a class rule, and an id rule all set this background. The
          id wins, even though the tag rule is declared last.
        </blockquote>
        <p id="wd-ai-cascade" className="wd-ai-cascade">
          A tag rule, a class rule, and an id rule set different backgrounds on
          this sample paragraph.
        </p>
      </div>

      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />
      <p>
        <a href="/labs/lab2/tailwind">Open Tailwind CSS lab →</a>
      </p>
    </div>
  );
}
