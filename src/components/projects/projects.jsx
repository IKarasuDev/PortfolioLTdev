import "./projects.css";
import BARSSS from "../../assets/BARSSS.png";
import not_image from "../../assets/not_image.png";
import TBSRace from "../../assets/TBSRace.png";

const projectsData = [
  {
    category: "Full Games",
    items: [
      {
        name: "Be Another Rank SSS (DEMO)",
        image: BARSSS,
        description:
          "Be Another Rank SSS is a PvE RPG with a linear storyline that follows Auren...",
        links: [
          {
            label: "Demo",
            url: "https://ltdeveloper.itch.io/be-another-rank-sss-demo",
          },
        ],
      },
    ],
  },
  {
    category: "Prototypes",
    items: [
      {
        name: "Race Tournament Bracket System",
        image: TBSRace,
        description:
          "This minigame was created to test a tournament system based on a bracket structure...",
        links: [
          {
            label: "Demo",
            url: "https://ltdeveloper.itch.io/tournament-bracket-system",
          },
        ],
      },
    ],
  },
  {
    category: "Systems",
    items: [
      {
        name: "Godot 4 Reusable Single Elimination Bracket System",
        image: not_image,
        description:
          "The system is designed to manage competitive structures independently of gameplay logic...",
        links: [
          {
            label: "GitHub",
            url: "https://github.com/IKarasuDev/Godot-4-Reusable-Single-Elimination-Bracket-System",
          },
        ],
      },
    ],
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-container">
        {projectsData.map((category, index) => (
          <div key={index} className="project_category">
            <h3 className="category_name">{category.category}</h3>

            {category.items.map((project, i) => (
              <div key={i} className="project-container">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-img"
                />

                <div className="project-details">
                  <h3 className="project-name">{project.name}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="projects-links">
                    {project.links.map((link, j) => (
                      <a
                        key={j}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="links-button"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;