
import React, { Component } from 'react';
import { TouchableHighlight, TouchableOpacity, Image, StyleSheet, Dimensions, ListView, View } from 'react-native';
import { Container, Content, Thumbnail, Text, Button, Icon, List, ListItem} from 'native-base';

import Conversation from '../components/conversation';

export default class Inbox extends Component {

    static navigatorStyle = {
        navBarNoBorder: false
    };

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        ds = ds.cloneWithRows([{
            id: 'fdfasf',
            user: {
                first: 'Red',
                last: 'Rainey',
                email: 'colin@findconvos.com',
                avatar: 'https://media.licdn.com/media/p/4/005/097/089/0bebe5a.jpg'
            },
            lastMessage: 'Hey man check this out!'
        },
            {
                id: 'fdfasf',
                user: {
                    first: 'Colin',
                    last: 'Brauns',
                    email: 'colin@findconvos.com',
                    avatar: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/1/005/08d/1f5/0fe67d4.jpg'
                },
                lastMessage: 'Hey man check this out!'
            },
            {
                id: 'fdfasf',
                user: {
                    first: 'Colin',
                    last: 'Brauns',
                    email: 'colin@findconvos.com',
                    avatar: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/1/005/08d/1f5/0fe67d4.jpg'
                },
                lastMessage: 'Hey man check this out!'
            },
            {
                id: 'fdfasf',
                user: {
                    first: 'Colin',
                    last: 'Brauns',
                    email: 'colin@findconvos.com',
                    avatar: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/1/005/08d/1f5/0fe67d4.jpg'
                },
                lastMessage: 'Hey man check this out!'
            }]);
        this.state = {
            conversations: ds
        };
        this._isMounted = false;

        this._renderRow = this._renderRow.bind(this);

        //this.selectConversation = this.selectConversation.bind(this);
    }
    _renderRow(conversationData, sectionID, rowID) {
        return (
            <TouchableHighlight onPress={() => this._onPress(conversationData)} underlayColor="#f6f6f6">
                <View>
                    <Conversation conversationData={conversationData} />
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        return (
                <View style={{ flex: 1 }}>
                    <ListView
                        dataSource={this.state.conversations}
                        renderRow={this._renderRow}
                        style={{ flex: 1 }}
                        renderHeader={() => {
                            return (
                                <View style={styles.newMatchContainer}>
                                    <View style={styles.newMatchRow}>
                                        <TouchableOpacity>
                                            <Image style={styles.newMatchThumnnail} source={{uri: 'https://media.licdn.com/media/p/4/005/097/089/0bebe5a.jpg'}} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            );
                        }}
                    />
                </View>
        );
    }
    _onPress(conversationData) {
        this.props.navigator.push({
            title: conversationData.user.first,
            screen: 'MessageThread'
        })
    }
}

const styles = StyleSheet.create({
    newMatchContainer: {
        //flex: 0.2,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    },
    newMatchRow: {
        flex: 1,
        padding: 5,
        flexDirection: 'row'
    },
    newMatchThumnnail: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 5,
        borderColor: '#fff'
    }
});
