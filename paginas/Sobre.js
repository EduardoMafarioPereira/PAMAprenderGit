import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import colors from "./colors";
import { styles } from "./styles";

export default function AboutScreen() {

  const navigation = useNavigation();

  return (
    <View style={styles.fundo}>

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

      <View style={styles.conteudoSobre}>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollSobre}
        >

          <View style={styles.cardSobre}>

            <Text style={styles.tituloSobre}>
              Sobre Nós
            </Text>

            <View style={styles.linhaSobre} />

            <Text style={styles.subtituloSobre}>
              Quem Somos
            </Text>

            <Text style={styles.textoSobre}>
              O SABOR é um aplicativo desenvolvido para
              pessoas que gostam de comer
              novas receitas e compartilhar experiências
              através da culinária.
            </Text>

            <Text style={styles.textoSobre}>
              Nossa plataforma foi criada para tornar a
              busca por Gulosidades mais simples, prática e
              divertida, reunindo diferentes saBORes em
              um só lugar.
            </Text>

            <Text style={styles.subtituloSobre}>
              Nossa Missão
            </Text>

            <Text style={styles.textoSobre}>
              A missão do saBOR é trazer comidas que irão lhe remeter
              uma vaga lembrança do que costumava ser a sua comida favorita, mas sem ser a sua comida favorita
            </Text>

            <Text style={styles.subtituloSobre}>
              Nossa Visão
            </Text>

            <Text style={styles.textoSobre}>
              Nós da saBOR temos a visão de que toda comida conta uma historia
              queremos transmitir a emoção.. ou melhor dizendo o saBOOOR que você não sabe qual é
            </Text>

            <Text style={styles.subtituloSobre}>
              Nossos Valores
            </Text>

            <View style={styles.valoresSobre}>

              <View style={styles.caixaValor}>

                <FontAwesome
                  name="heart"
                  size={40}
                  color={colors.rosa}
                />

                <Text style={styles.tituloValor}>
                  Paixão
                </Text>

                <Text style={styles.textoValor}>
                  Amor pela culinária.
                </Text>

              </View>

              <View style={styles.caixaValor}>

                <FontAwesome
                  name="users"
                  size={40}
                  color={colors.rosa}
                />

                <Text style={styles.tituloValor}>
                  Comunidade
                </Text>

                <Text style={styles.textoValor}>
                  Compartilhar experiências.
                </Text>

              </View>

              <View style={styles.caixaValor}>

                <FontAwesome
                  name="cutlery"
                  size={40}
                  color={colors.rosa}
                />

                <Text style={styles.tituloValor}>
                  Sabor
                </Text>

                <Text style={styles.textoValor}>
                  Descobrir novos sabores.
                </Text>

              </View>

            </View>

          </View>

        </ScrollView>

      </View>

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