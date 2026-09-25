export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      <img
        id="wd-ai-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHZ7rCP8r1XXENyXZJS5pNVupcG1wxgT7hwUDFEVRrA&s"
        width="200px"
        alt="Floral"
      />
      <br />
      <img
        id="wd-your-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7KpRkSBtf4ioDCmX8FVNHpzZf9G8ulaq3DClTjh-jGQ&s=10"
        alt="tree"
      />
    </div>
  );
}
