import React, {Component} from 'react';  
import {StyleSheet, Text, View,StatusBar} from 'react-native';  
import {createAppContainer} from 'react-navigation';   
import Icon from 'react-native-vector-icons/FontAwesome';  
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import AppNavigator from './lib/router';  
import {Fragment} from 'react'; 
const AppIndex = createAppContainer(AppNavigator)  
  
export default class App extends Component{  

    //export default class App extends Component {
        constructor(props) {
          super(props);
          this.state = {
            HeadTable: ['Head1', 'Head2', 'Head3', 'Head4', 'Head5'],
            DataTable: [
              ['1', '2', '3', '4', '5'],
              ['a', 'b', 'c', 'd', 'e'],
              ['1', '2', '3', '4', '5'],
              ['a', 'b', 'c', 'd', 'e'],
              ['1', '2', '3', '4', '5']
            ]
          }
        }
      
    render(){  
        const state = this.state;
        return(  
            <Fragment>
            <View style={{flex:1}} >  
                <StatusBar  
                    backgroundColor='black'  
                    barStyle='light-content'  
                />  
                <View style={styles.header}>  
                    <Icon name='ios-camera' size={28} color='white'/>  
                    <Icon name='ios-menu' size={28} color='white'/>  
                </View>  
                <AppIndex/>  
            </View>  
            <View style={styles.container}>
            <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
              <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
              <Rows data={state.DataTable} textStyle={styles.TableText}/>
            </Table>
          </View>
          </Fragment>
        )  
    }  
}  
const styles = StyleSheet.create({  
    wrapper: {  
        flex: 1,  
    },  
    header:{  
        flexDirection: 'row',  
        alignItems: 'center',  
        justifyContent: 'space-between',  
        backgroundColor: 'red',  
        paddingHorizontal: 20,  
        paddingTop: 5,  
    },  
    container: { 
        flex: 1,
        padding: 18,
        paddingTop: 40,
        backgroundColor: '#ffffff' 
      },
      HeadStyle: { 
        height: 50,
        alignContent: "center",
        backgroundColor: '#ffe0f0'
      },
      TableText: { 
        margin: 10
      },
});  