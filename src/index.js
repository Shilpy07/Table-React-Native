import React, {Component} from 'react';  
import {StyleSheet, Text, View,StatusBar, Image, SafeAreaView, ScrollView} from 'react-native';  
import {createAppContainer} from 'react-navigation';   
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import AppNavigator from './lib/router';

const AppIndex = createAppContainer(AppNavigator)  
  
export default class App extends Component{  

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
            <SafeAreaView style={styles.container}>
              <ScrollView style={styles.scrollView}>
                <AppIndex/> 
                <Image source={require('./images/image1.jpg')} style={{ width:100, height:100, marginBottom:10 }}/>
              <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
                <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
                <Rows data={state.DataTable} textStyle={styles.TableText}/>
              </Table>
              <Text>This is a text shown in your app.</Text>
            </ScrollView>
          </SafeAreaView>
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
      marginTop: 20,
    },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
      flex: 1
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