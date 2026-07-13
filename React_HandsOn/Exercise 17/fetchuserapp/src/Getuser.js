import React from 'react';

class Getuser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }

  componentDidMount() {
    fetch('https://api.randomuser.me/')
      .then((response) => response.json())
      .then((data) => this.setState({ user: data.results[0] }))
      .catch((error) => console.error(error));
  }

  render() {
    const { user } = this.state;
    if (!user) return <p>Loading user...</p>;

    return (
      <div>
        <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
        <img src={user.picture.large} alt="user avatar" />
      </div>
    );
  }
}

export default Getuser;
