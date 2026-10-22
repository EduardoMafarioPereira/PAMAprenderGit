import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import {
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from "react-native";

import Checkbox from "expo-checkbox";
import { FontAwesome } from "@expo/vector-icons";

import colors from "./colors";
import { styles } from "./styles";

export default function Login() {
  const navigation = useNavigation();

  // Checkbox lembrar senha
  const [lembrarSenha, setLembrarSenha] = React.useState(false);

  return (
    <View style={styles.fundo}>

      {/* Navbar */}

      <View style={styles.navbar}>

        <TouchableOpacity>
          <FontAwesome
            name="bars"
            size={35}
            color={colors.marrom}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
        >
          <FontAwesome
            name="home"
            size={40}
            color={colors.marrom}
          />
        </TouchableOpacity>

        <Image
          source={require("./assets/logo2.png")}
          style={styles.logoNavbar}
        />

        <StatusBar style="auto" />

      </View>


      {/* Conteúdo com ScrollView */}

      <View style={styles.conteudoLogin}>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollLogin}
        >

          <View style={styles.FormView}>

            <View style={styles.FormBorda}>

              <View style={styles.Formulario}>

                {/* Título */}

                <Text style={styles.tituloLogin}>
                  Login
                </Text>


                {/* Nome */}

                <View style={styles.divCaixas}>

                  <Text style={styles.Label}>
                    Nome
                  </Text>

                  <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome"
                    placeholderTextColor={colors.escuro}
                  />

                </View>


                {/* Senha */}

                <View style={styles.divCaixas}>

                  <Text style={styles.Label}>
                    Senha
                  </Text>

                  <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    placeholderTextColor={colors.escuro}
                    secureTextEntry={true}
                  />

                </View>


                {/* Checkbox */}

                <View style={styles.checkboxLogin}>

                  <Checkbox
                    value={lembrarSenha}
                    onValueChange={setLembrarSenha}
                    color={
                      lembrarSenha
                        ? colors.marrom
                        : undefined
                    }
                  />

                  <Text style={styles.textoCheckboxLogin}>
                    Lembrar senha
                  </Text>

                </View>


                {/* Botão */}

                <View style={styles.divBotao}>

                  <TouchableOpacity
                    style={styles.Botao}
                    activeOpacity={0.8}
                  >

                    <Text style={styles.textoBotaoLogin}>
                      Entrar
                    </Text>

                  </TouchableOpacity>

                </View>

              </View>

            </View>

          </View>

        </ScrollView>

      </View>


      {/* Rodapé */}

      <View style={styles.rodape}>

        <Image
          source={require("./assets/logo.png")}
          style={styles.logoRodape}
        />


        {/* Home */}

        <TouchableOpacity
          style={styles.botaoRodape}
          onPress={() => navigation.navigate("Home")}
          activeOpacity={0.7}
        >

          <FontAwesome
            name="home"
            size={30}
            color={colors.escuro}
          />

          <Text style={styles.textoBotao}>
            Home
          </Text>

        </TouchableOpacity>


        {/* Devs */}

        <TouchableOpacity
          style={styles.botaoRodape}
          onPress={() => navigation.navigate("Profile")}
          activeOpacity={0.7}
        >

          <FontAwesome
            name="user"
            size={25}
            color={colors.escuro}
          />

          <Text style={styles.textoBotao}>
            Devs
          </Text>

        </TouchableOpacity>


        {/* Sobre */}

        <TouchableOpacity
          style={styles.botaoRodape}
          onPress={() => navigation.navigate("Sobre")}
          activeOpacity={0.7}
        >

          <FontAwesome
            name="search"
            size={30}
            color={colors.escuro}
          />

          <Text style={styles.textoBotao}>
            Sobre
          </Text>

        </TouchableOpacity>


        {/* Login */}

        <TouchableOpacity
          style={styles.botaoRodape}
          onPress={() => navigation.navigate("Login")}
          activeOpacity={0.7}
        >

          <FontAwesome
            name="unlock-alt"
            size={30}
            color={colors.escuro}
          />

          <Text style={styles.textoBotao}>
            Login
          </Text>

        </TouchableOpacity>

      </View>

    </View>
  );
}