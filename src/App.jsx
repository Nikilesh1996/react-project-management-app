import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined, // SelectedProject will be used to store the id
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState((previousState) => {
      return { ...previousState, selectedProjectId: null };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((previousState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...previousState,
        projects: [...previousState.projects, newProject],
      };
    });
  }

  console.log("Projects ", projectState);
  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else {
    // Content will hold the selected project.
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
