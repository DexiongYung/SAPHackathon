import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import Leaderboard from './pages/Leaderboard/Leaderboard';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Leaderboard/>
        </Layout>
      </div>
    );
  }
}

export default App;
