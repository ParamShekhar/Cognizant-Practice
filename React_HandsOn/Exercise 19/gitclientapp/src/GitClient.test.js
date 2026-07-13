import axios from 'axios';
import GitClient from './GitClient';

jest.mock('axios');

describe('Git Client Tests', () => {
  test('should return repository names for techiesyed', async () => {
    const mockData = {
      data: [{ name: 'repo-one' }, { name: 'repo-two' }]
    };
    axios.get.mockResolvedValue(mockData);

    const gitClient = new GitClient();
    const repos = await gitClient.getRepositories('techiesyed');

    expect(repos).toEqual(['repo-one', 'repo-two']);
    expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/techiesyed/repos');
  });
});
