import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import style from '../Styles';
import ListItem from './ListItem';

// this is main component
export default class ListView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                planets: {results:[]}
              },
        };
    }

    componentDidMount(){
        let url = 'https://swapi.co/api/planets/';
        this.fetchData(url).then((planets) => {
            this.setState({
                data:{
                    planets: planets
                }
            });
        }).catch((error) => {
            console.log('Error:', error)
            this.toggleIsLoadingState();
        });
    }

    fetchData = (url) => { 
        return fetch(url).then(response => {
          return response.json();
        }).then(responseJson => {
          return responseJson
        }).catch(error => console.log('Error fetching data:', error));
    }

    render() {
        const { planets } = this.state.data; 
        return (
        <ScrollView>
            {planets.results.length > 0?
                planets.results.map(function(item){
                    return <ListItem key={item.diameter} item={item}/>
                })
            :
                <Text style={{textAlign:'center'}}>Please wait loading....</Text>
            }
        </ScrollView>
        );
    }
}
