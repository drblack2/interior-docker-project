export const fetchProjects = async () => {
  const response = await fetch('/api/projects');

  if (!response.ok) {
    throw new Error('Unable to load projects');
  }

  return response.json();
};
