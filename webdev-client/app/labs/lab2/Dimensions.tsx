export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This long sentence stays inside a box that is only 120 pixels wide
          and 60 pixels tall, so the declared size is obvious.
        </div>
        <div className="wd-dimension-fixed wd-bg-color-yellow">Fixed</div>
      </div>
    </div>
  );
}
