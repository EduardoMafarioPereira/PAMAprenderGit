import React from "react";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

import colors from "./colors";
import { styles } from "./styles";


export default function Estabelecimento() {

  const navigation = useNavigation();
  const route = useRoute();

  // Recebe o estabelecimento enviado pela Home
  const { estabelecimento } = route.params;


  return (
    <View style={styles.fundo}>

      {/* Navbar */}

      <View style={styles.navbar}>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >

          <FontAwesome
            name="arrow-left"
            size={30}
            color={colors.marrom}
          />

        </TouchableOpacity>


        <Image
          source={require("./assets/logo2.png")}
          style={styles.logoNavbar}
        />

      </View>


      {/* Conteúdo */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollEstabelecimento}
      >

        <View style={styles.cardEstabelecimentoPagina}>

          {/* Imagem do estabelecimento */}

          <Image
            source={estabelecimento.imagem}
            style={styles.imagemEstabelecimentoPagina}
          />


          {/* Informações */}

          <View style={styles.informacoesPagina}>

            <Text style={styles.nomeEstabelecimentoPagina}>
              {estabelecimento.nome}
            </Text>


            {/* Avaliação */}

            <View style={styles.avaliacaoPagina}>

              <Text style={styles.textoAvaliacaoPagina}>
                ⭐ {estabelecimento.avaliacao}
              </Text>

            </View>


            {/* Categorias */}

            <View style={styles.tiposPagina}>

              {estabelecimento.tipos.map((tipo, index) => (

                <View
                  key={index}
                  style={styles.categoriaPagina}
                >

                  <Text style={styles.textoCategoriaPagina}>
                    {tipo}
                  </Text>

                </View>

              ))}

            </View>


            {/* Endereço */}

            <Text style={styles.tituloInformacaoPagina}>
              📍 Endereço
            </Text>

            <Text style={styles.textoInformacaoPagina}>
              {estabelecimento.endereco}
            </Text>


            {/* Descrição */}

            <Text style={styles.tituloInformacaoPagina}>
              Sobre o estabelecimento
            </Text>

            <Text style={styles.textoInformacaoPagina}>
              {estabelecimento.descricao}
            </Text>


            {/* Botão voltar */}

            <TouchableOpacity
              style={styles.botaoVoltarEstabelecimento}
              onPress={() => navigation.goBack()}
            >

              <Text style={styles.textoBotaoVoltarEstabelecimento}>
                VOLTAR
              </Text>

            </TouchableOpacity>

          </View>

        </View>

      </ScrollView>

    </View>
  );
}