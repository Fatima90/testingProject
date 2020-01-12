import React from 'react';
import  {View, Button, Text, FlatList} from 'react-native';

export default class Stories extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            stories: []
        }
    }

    callAPI = () => {
        // Note: 10.0.2.2 is a Special alias to host loopback interface (i.e., 127.0.0.1 on development machine)
        return fetch('http://10.0.2.2/inception/Story/Object/List.js?api=2XqyobTfAcidHorp7AyDpDDW4PViDP0yG31u4PoqiRJyVKNdKXNHLsKhqTcTSeJ5&template=false',{
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.renderStories(responseJson.object);
            console.log(responseJson.object)
        })
        .catch((error) => {
            console.log(error);
        })
    }

    renderStories = arr => {
        arr.forEach(element => {
           this.setState({
               stories: this.state.stories.concat({
                   id: element.id,
                   slug: element.slug,
                   createdBy: element.createdBy.id
               })
           }) 
        });
        console.log(this.state.stories)
    }

    render(){
        const runningOrder = this.props.navigation.getParam('orderID')
        return (
            <View style={{flex:1,alignItems:'center'}}>
                <Button onPress={() => this.callAPI()} title="List Stories" />
                <View style={{flex: 0.2}}></View>
              
                    <View style={{flex:0.5}}>
                        <FlatList
                            data={this.state.stories}
                            renderItem={({item}) => <Text style={{color: 'blue', fontSize: 18}}>{item.slug}</Text>}/> 
                    </View>
                        
            </View>
        )
    }
}