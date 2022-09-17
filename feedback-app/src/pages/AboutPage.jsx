import Card from "../components/shared/Card";
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h2>About</h2>

        <p>version : 1.0</p>
        <p>This is the about page for the FeedBack UI App</p>
        <p>
          <a href="/">Return to Home</a>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
