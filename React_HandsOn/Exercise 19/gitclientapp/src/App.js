import React, { useEffect, useState } from 'react';
import GitClient from './GitClient';

function App() {
  const [repos, setRepos] = useState([]);
  const gitClient = new GitClient();

  useEffect(() => {
    gitClient.getRepositories('techiesyed')
      .then((names) => setRepos(names))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>GitHub Repositories</h1>
      <ul>
        {repos.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
