import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";
import "../Styles/projectsMenu.css"


const projects = {
  1: {
    title: "Placify",
    image: projectOne,
    description: (
      <>
        <div className="projects-desc-scroll">
          <p>
            Placify streamlines the campus placement process, offering a
            user-friendly web app where students can directly apply for job
            postings from registered companies. With intuitive features,
            recruiters can efficiently manage applications, accepting or
            rejecting candidates based on specific requirements. Placify ensures
            a smoother, more convenient placement experience for both students
            and recruiters alike.
          </p>
        </div>
      </>
    ),
    github: "https://github.com/AryanPardhi/PLacify.git",
    Demo: "http",
  },
  2: {
    title: "vNotes",
    image: projectTwo,
    description: (
      <>
        <div className="projects-desc-scroll">
          <p>
          vNotes: Your Secure Web App for Organizing All Your Notes in One Place. With top-notch security measures, vNotes ensures that only you have access to your notes, providing peace of mind while keeping your information organized and easily accessible.
          </p>
        </div>
      </>
    ),
    github: "https://github.com/AryanPardhi/vNotes.git",
    Demo: "http",
  },
  3: {
    title: "NewseMon",
    image: projectThree,
    description: (
      <>
        <div className="projects-desc-scroll">
          <p>
          NewseMon: Your Personalized Web App for Staying Updated with the Latest News Across the Country. With a dynamic news feed feature, NewsEmon delivers real-time updates on current events, ensuring you're always in the know about what's happening nationwide.
          </p>
        </div>
      </>
    ),
    github: "https://github.com/AryanPardhi/NewseMon.git",
    demo: "http",
  },
};

export default projects;
