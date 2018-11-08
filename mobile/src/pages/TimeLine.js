import React, { Component } from 'react';

import api from '../services/api';
import Tweet from '../components/Tweet';

import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class TimeLine extends Component {
    static navigationOptions = {
        title: 'Início',
        headerRight: (
            <TouchableOpacity onPress={() => {}}>
                <Icon 
                    style={{marginRight:20}}
                    name="add-circle-outline"
                    size={24}
                    color="#4BB0EE"/>
            </TouchableOpacity>
        )
    };

    states = {
        tweets: [],
    }
    async componentDidMount(){
        const response = await api.get('tweets');

        this.setStates({ tweets: response.data});
    }
  render() {
    return (
    <View style={styles.container}>
        <FlatList 
            data={this.states.tweets}
            keyExtractor={tweet => tweet._id}
            renderItem={({item}) => <Tweet tweet={tweet}/>}
            />

    </View>
    )}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF"
    }
  });