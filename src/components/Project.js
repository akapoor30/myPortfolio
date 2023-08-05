import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>

      {/* Chat Application */}
      <div className="project">
        <h3>Chat Application (Chit-Chat)</h3>
        <p>
          Built a MERN stack chat application with real-time messaging, group
          functionality, and secure message storage. Implemented user
          authentication using JWT for secure access. Designed a responsive UI
          with React and utilized Socket.io for real-time communication.
          Leveraged MongoDB for efficient data management.
        </p>
        <p>
          <strong>Tech Used:</strong> Mongo DB, ReactJS, NodeJS, ExpressJS,
          HTML, CSS, JSON Web Tokens (JWT), Socket.io
        </p>
        <a
          href="https://github.com/akapoor30/chit-chat"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>

      {/* From Paper to Pixels */}
      <div className="project">
        <h3>
          From Paper to Pixels: A Machine Learning Solution for Sustainable
          Study Materials
        </h3>
        <p>
          Developed an ML solution predicting student study material
          preferences, optimizing deliveries, and demonstrating proficiency in
          Python, Jupyter, and ML algorithms.
        </p>
        <p>
          <strong>Tech Used:</strong> Python, Jupyter, Pandas, Numpy,
          Scikit-Learn
        </p>
        <a
          href="YOUR_PAPER_TO_PIXELS_LINK_HERE"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>

      {/* Weather app */}
      <div className="project">
        <h3>Weather app</h3>
        <p>
          Developed a weather application integrating Rapid API for real-time
          weather information, featuring weather details for common places with
          a focus on user experience and visually appealing interfaces.
        </p>
        <p>
          <strong>Tech Used:</strong> HTML, CSS, Javascript
        </p>
        <a
          href="https://akapoor30.github.io/WeatherNow/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
      <div className="project">
        <h3>TO-DO-LIST</h3>
        <p>
          Developed a simple to-do list where user can add task, which help
          users to organize their task according to their priorities and delete
          them when completed.
        </p>
        <p>
          <strong>Tech Used:</strong> HTML, CSS, Javascript
        </p>
        <a
          href="https://akapoor30.github.io/To-Do-List/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </section>
  );
};

export default Projects;
