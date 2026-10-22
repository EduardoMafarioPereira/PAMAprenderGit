import * as React from "react";
import { createStaticNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./paginas/HomeScreen";
import ProfileScreen from "./paginas/ProfileScreen";
import Sobre from "./paginas/Sobre";
import Login from "./paginas/PagLogin";
import Estabelecimento from "./paginas/Estabelecimento";
const MyStack = createStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        headerShown: false,
      },
    },

    Profile: {
      screen: ProfileScreen,
      options: {
        headerShown: false,
      },
    },

    Sobre: {
      screen: Sobre,
      options: {
        headerShown: false,
      },
    },
    Login: {
      screen: Login,
      options: {
        headerShown: false,
      },
    },
    Estabelecimento:{
      screen: Estabelecimento,
      options:{
        headerShown:false,
      },
    },


  },

});
export function selecionarLoja(itemId){
  

};
const Navigation = createStaticNavigation(MyStack);

export default function App() {
  return <Navigation />;
}

