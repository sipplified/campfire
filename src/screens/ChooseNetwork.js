
import React, { Component } from 'react';
import { TouchableHighlight, TouchableOpacity, Image, StyleSheet, Dimensions, RefreshControl, ListView, Text, View } from 'react-native';

import * as networksActions from '../reducers/networks/actions';

import {connect} from 'react-redux';

export default class ChooseNetwork extends Component {
    static navigatorButtons = {
        leftButtons: [{
            title: 'Cancel',
            id: 'close'
        }],
        rightButtons: [{
            title: 'Find',
            id: 'find'
        }]
    };

    static navigatorStyle = {
        navBarButtonColor: '#777',
        navBarTextColor: '#666'
    };

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds
        };
        this._isMounted = false;
        this._renderRow = this._renderRow.bind(this);

        this.loadNetworks = this.loadNetworks.bind(this);

    }

    loadNetworks() {
        this.props.dispatch(networksActions.loadNetworks());
    }

    componentWillMount() {
        this.loadNetworks();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.state.networks !== this.props.state.networks) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.state.networks)
            })
        }
    }

    _renderRow(data) {
        return (
            <TouchableHighlight>
                <View style={{backgroundColor: '#fff', padding: 20, borderTopWidth: 0.5, borderColor: '#ccc'}}>
                    <Text style={{color: '#555', fontSize: 18}}>{data.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#eee' }}>
                <View style={[styles.header, styles.headerWhite, {justifyContent:'center'}]}>
                    <Text style={{color: '#666', fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>Networks</Text>
                </View>
                {this.props.state.networks.length ?
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow}
                        style={{ flex: 1 }}
                        refreshControl={
                          <RefreshControl
                            refreshing={this.props.state.isLoading}
                            onRefresh={this.loadNetworks}
                          />
                        }
                    /> : <View />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#3498db',
        padding: 15,
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30
    },
    headerWhite: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        padding: 10,
        paddingTop: 30
    },
    headerText: {
        color: '#fff',
        fontSize: 15,
        lineHeight: 20
    },
    headerIcon: {
        tintColor: '#fff'
    }
});