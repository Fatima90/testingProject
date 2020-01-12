import React from 'react';
import { Button, FlatList, Text, View, TouchableOpacity } from 'react-native';

export default class RunningOrders extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            runningOrder: []
        }
    }

    listOrders = () => {
        return fetch('http://10.0.2.2/inception/RunningOrder/Object/List.js?api=2XqyobTfAcidHorp7AyDpDDW4PViDP0yG31u4PoqiRJyVKNdKXNHLsKhqTcTSeJ5')
        .then((response) => response.json())
        .then((responseJson) => {
            // set data to state
            this.renderResults(responseJson.object)
        })
        .catch((error) => {
            console.error(error);
        })
    }

    renderResults = arr => {
        arr.forEach(element => {
           this.setState({
               runningOrder: this.state.runningOrder.concat({
                   id: element.id,
                   name: element.name,
                   domain: element.domain
               })
           }) 
        });
        console.log(this.state.runningOrder)
    }
    
    render() {
        return (
            <View style={{flex:1, alignItems:'center'}}>
            <Button
                title="List Running Orders"
                onPress= {() => this.listOrders() }
                // onPress={() => this.props.navigation.navigate('Home') }
            />
            <View style={{flex: 0.2}}></View>
            { this.state.runningOrder.length > 0 &&
                <View style={{flex:0.5}}>
                    <FlatList
                        data={this.state.runningOrder}
                        renderItem={({item}) => <TouchableOpacity onPress={()=> this.props.navigation.navigate('Home', { orderID: item.id})}><Text style={{color: 'red', fontSize: 18}}>{item.name}</Text></TouchableOpacity>} />    
                </View>
            }        
            </View>
        );
    }
}
