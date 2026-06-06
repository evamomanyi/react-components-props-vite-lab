// src/components/About.jsx

/**
 * About Component
 * Displays information about the blog and blog logo.
 *
 * Connected To:
 * - Parent: App
 */

function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      {/* Blog logo image */}
      <img
        src={image}
        alt="blog logo"
        width="250"
      />

      {/* Blog description */}
      <p>{about}</p>
    </aside>
  );
}

export default About;