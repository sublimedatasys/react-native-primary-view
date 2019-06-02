import * as React from 'react';
import Index from './screens/Index';
import { BottomNavigation } from 'react-native-paper';

const PlanetRoute = () => <Index title="Planets"/>;
const InboxRoute = () => <Index title="Inbox"/>;
const ProfileRoute = () => <Index title="Profile"/>;

export default class App extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'planets', title: 'Planets', icon: 'star' },
      { key: 'inbox', title: 'Inbox', icon: 'inbox' },
      { key: 'porfile', title: 'Porfile', icon: 'face' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    planets: PlanetRoute,
    inbox: InboxRoute,
    porfile: ProfileRoute,
  });

  render() {
    return (
      <BottomNavigation
        barStyle={{backgroundColor:'#eee'}}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}