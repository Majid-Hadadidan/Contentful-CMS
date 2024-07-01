import { useFetchProjects } from "./FisrtProjects.jsx";

export const Projects = () => {
  const { loading, projects } = useFetchProjects();

  if (loading) {
    <section className="projects">
      <h2>Loading...</h2>
    </section>;
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, img, title, url } = project;
          return (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="project"
            >
              <img className="img" src={img} alt={title} />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
      {/*      
      {projects.map((project) => {
        const { img, title, id, url } = project;
        <a id={id} href={url} >
          <img src={img} />
        </a>;
      })} */}
    </section>
  );
};
