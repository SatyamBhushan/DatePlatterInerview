import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity, Image } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OptionB from "../screen/OptionB";
import images from "../res/images";
import ConfirmPopUP from '../component/ConfirmPopUp'
import MenuList from '../component/menu';
import globalColors from '../res/colors';



const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();


function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 50, fontWeight: 900, color: globalColors.globalThemes, padding: 20 }}>{"WelCome"}</Text>
            <Text style={{ fontSize: 30, fontWeight: 500, paddingLeft: 20, top: -25 }}>{"to interview"}</Text>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 50, fontWeight: 900, color: globalColors.globalThemes, padding: 12, top: -65 }}>{"All The Best :)"}</Text>
            </View>
        </View>
    );
}

function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings screen</Text>
            <Button
                title="Go to setting Details"
                onPress={() => navigation.navigate('settingDetails')}
            />
        </View>
    );
}


export function OptionAStackScreen({ navigation }) {
    return (
        <HomeStack.Navigator screenOptions={{}}>
            <HomeStack.Screen name="Home" component={HomeScreen} />

        </HomeStack.Navigator>
    );
}



export function OptionBStackScreen() {
    const [openMenu,setOpneMenu] =useState(false);
    return (
        <SettingsStack.Navigator
            screenOptions={{
                headerLeft: () => {
                    return (
                        <>
                            <TouchableOpacity
                                onPress={() => {setOpneMenu(true) }}
                            >
                                <Image
                                    source={images.homeIcon}
                                    style={{ height: 30, width: 30, marginLeft: 10, marginRight: 10 }}
                                />
                            </TouchableOpacity>
                            {openMenu == true ? <MenuList visible={true}/>:null}
                        </>
                    );
                },
                headerRight: () => {
                    return (
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Image
                                    source={images.homeIcon}
                                    style={{ height: 30, width: 30, marginRight: 10 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    source={images.homeIcon}
                                    style={{ height: 30, width: 30, marginRight: 10 }}
                                />
                            </TouchableOpacity>
                        </View>
                    );
                },
                // headerTitle:'',

            }}
        >
            <SettingsStack.Screen name="OptionB" component={OptionB} />
            <HomeStack.Screen name="Home" component={HomeScreen} />
        </SettingsStack.Navigator>
    );
}



export function OptionCStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{

            headerRight: () => {
                return (
                    <Button title={"login"} />
                )
            },
            title: "option C"
        }}>
            <HomeStack.Screen name="Home" component={HomeScreen} />


        </HomeStack.Navigator>
    );
}



export function OptionDStackScreen() {
    return (
        <SettingsStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
        </SettingsStack.Navigator>
    );
}


// function drawerNavigation(){
//     const [modalVisible, setModalVisible] = useState(false);
//     return (
//       <View style={styles.centeredView}>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => {
//             Alert.alert('Modal has been closed.');
//             setModalVisible(!modalVisible);
//           }}>
//           <View style={styles.centeredView}>
//             <View style={styles.modalView}>
//               <Text style={styles.modalText}>Hello World!</Text>
//               <Pressable
//                 style={[styles.button, styles.buttonClose]}
//                 onPress={() => setModalVisible(!modalVisible)}>
//                 <Text style={styles.textStyle}>Hide Modal</Text>
//               </Pressable>
//             </View>
//           </View>
//         </Modal>
//         <Pressable
//           style={[styles.button, styles.buttonOpen]}
//           onPress={() => setModalVisible(true)}>
//           <Text style={styles.textStyle}>Show Modal</Text>
//         </Pressable>
//       </View>
//     );
// }

// const styles = StyleSheet.create({
//     centeredView: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginTop: 22,
//     },
//     modalView: {
//       margin: 20,
//       backgroundColor: 'white',
//       borderRadius: 20,
//       padding: 35,
//       alignItems: 'center',
//       shadowColor: globalColors.globalBlack,
//       shadowOffset: {
//         width: 0,
//         height: 2,
//       },
//       shadowOpacity: 0.25,
//       shadowRadius: 4,
//       elevation: 5,
//     },
//     button: {
//       borderRadius: 20,
//       padding: 10,
//       elevation: 2,
//     },
//     buttonOpen: {
//       backgroundColor: '#F194FF',
//     },
//     buttonClose: {
//       backgroundColor: '#2196F3',
//     },
//     textStyle: {
//       color: 'white',
//       fontWeight: 'bold',
//       textAlign: 'center',
//     },
//     modalText: {
//       marginBottom: 15,
//       textAlign: 'center',
//     },
//   });

