import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    ScrollView,
    Modal,
    Pressable,
    Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Checkbox from "expo-checkbox";
import { FontAwesome } from "@expo/vector-icons";

import colors from "./colors";
import { styles } from "./styles";
import DATA from "./DATA";

export default function HomeScreen() {

    const navigation = useNavigation();

    const [tipoSelecionado, setTipoSelecionado] = React.useState("");
    const [lojaSelecionada, setLojaSelecionada] = React.useState("");

    // CHECKBOXES
    const [almoco, setAlmoco] = React.useState(false);
    const [cafeTarde, setCafeTarde] = React.useState(false);
    const [filme, setFilme] = React.useState(false);
    const [comemoracao, setComemoracao] = React.useState(false);
    const [vontadeDoce, setVontadeDoce] = React.useState(false);

    // MODAL
    const [modalVisible, setModalVisible] = React.useState(false);

    // TIPOS DE SOBREMESA
    const tipos = [
        ...new Set(
            DATA.flatMap((loja) => loja.tipos)
        ),
    ];

    // FILTRO DE LOJAS
    const lojasFiltradas = tipoSelecionado
        ? DATA.filter((loja) =>
            loja.tipos.includes(tipoSelecionado)
        )
        : DATA;

    // LOJA ESCOLHIDA
    const lojaEscolhida = lojasFiltradas.find(
        (loja) => loja.id === lojaSelecionada
    );

    // SELECIONAR TIPO
    const selecionarTipo = (tipo) => {
        setTipoSelecionado(tipo);
        setLojaSelecionada("");
    };


    // MOSTRAR ESCOLHAS DOS CHECKBOXES

    const mostrarEscolhas = () => {

        if (
            !almoco &&
            !cafeTarde &&
            !filme &&
            !comemoracao &&
            !vontadeDoce
        ) {

            Alert.alert(
                "Nenhuma escolha",
                "Marque pelo menos um momento para pedir uma sobremesa."
            );

            return;
        }

        setModalVisible(true);
    };


    // CARD DOS ESTABELECIMENTOS

    const renderCard = (item) => {

        return (

            <View
                key={item.id}
                style={styles.cardEstabelecimento}
            >

                {/* Imagem */}

                <Image
                    source={item.imagem}
                    style={styles.imagemEstabelecimento}
                />


                {/* Informações */}

                <View style={styles.informacoesEstabelecimento}>

                    <Text style={styles.nomeEstabelecimento}>
                        {item.nome}
                    </Text>


                    {/* Categorias + Avaliação */}

                    <View style={styles.linhaCard}>

                        <View style={styles.tiposContainer}>

                            {item.tipos.slice(0, 3).map((tipo) => (

                                <View
                                    key={tipo}
                                    style={styles.categoriaCard}
                                >

                                    <Text
                                        style={styles.textoCategoriaCard}
                                    >
                                        {tipo}
                                    </Text>

                                </View>

                            ))}

                        </View>


                        <View style={styles.avaliacaoContainer}>

                            <Text style={styles.avaliacao}>
                                ⭐ {item.avaliacao}
                            </Text>

                        </View>

                    </View>


                    {/* Endereço */}

                    <Text style={styles.enderecoEstabelecimento}>
                        📍 {item.endereco}
                    </Text>


                    {/* Descrição */}

                    <Text style={styles.descricaoEstabelecimento}>
                        {item.descricao}
                    </Text>


                    {/* Botão */}

                    <TouchableOpacity
                        style={styles.botaoCard}
                        activeOpacity={0.7}
                        onPress={() =>
                            navigation.navigate("Estabelecimento", {
                                estabelecimento: item,
                            })
                        }
                    >

                        <Text style={styles.textoBotaoCard}>
                            VER ESTABELECIMENTO
                        </Text>

                    </TouchableOpacity>

                </View>

            </View>
        );
    };


    return (

        <View style={styles.fundo}>

            <StatusBar style="dark" />

            {/* CABEÇALHO */}

            <View style={styles.navbar}>

                {/* Menu */}

                <TouchableOpacity
                    style={styles.botaoMenu}
                >

                    <FontAwesome
                        name="bars"
                        size={30}
                        color={colors.marrom}
                    />

                </TouchableOpacity>


                {/* Home */}

                <TouchableOpacity
                    style={styles.botaoHome}
                    onPress={() => navigation.navigate("Home")}
                >

                    <FontAwesome
                        name="home"
                        size={35}
                        color={colors.marrom}
                    />

                </TouchableOpacity>


                {/* Logo */}

                <Image
                    source={require("./assets/logo2.png")}
                    style={styles.logoNavbar}
                />

            </View>

            {/* CONTEÚDO */}

            <View style={styles.conteudoPrincipal}>

                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollPrincipal}
                    showsVerticalScrollIndicator={true}
                    nestedScrollEnabled={true}
                    keyboardShouldPersistTaps="handled"
                >
                    {/* FILTROS */}

                    <View style={styles.areaPicker}>

                        <Text style={styles.tituloPicker}>
                            Encontre seu doce favorito 🍰
                        </Text>


                        {/* Tipo */}

                        <Text style={styles.labelPicker}>
                            Escolha o tipo de sobremesa
                        </Text>

                        <View style={styles.pickerContainer}>

                            <Picker
                                selectedValue={tipoSelecionado}
                                onValueChange={selecionarTipo}
                                style={styles.picker}
                            >

                                <Picker.Item
                                    label="Todas as sobremesas"
                                    value=""
                                />

                                {tipos.map((tipo) => (

                                    <Picker.Item
                                        key={tipo}
                                        label={tipo}
                                        value={tipo}
                                    />

                                ))}

                            </Picker>

                        </View>


                        {/* Loja */}

                        <Text style={styles.labelPickerLoja}>
                            Escolha uma loja
                        </Text>

                        <View style={styles.pickerContainer}>

                            <Picker
                                selectedValue={lojaSelecionada}
                                onValueChange={(valor) =>
                                    setLojaSelecionada(valor)
                                }
                                style={styles.picker}
                                enabled={lojasFiltradas.length > 0}
                            >

                                <Picker.Item
                                    label={
                                        tipoSelecionado
                                            ? "Selecione uma loja"
                                            : "Todas as lojas"
                                    }
                                    value=""
                                />


                                {lojasFiltradas.map((loja) => (

                                    <Picker.Item
                                        key={loja.id}
                                        label={loja.nome}
                                        value={loja.id}
                                    />

                                ))}

                            </Picker>

                        </View>


                        {/* Resultado */}

                        {tipoSelecionado && (

                            <Text style={styles.resultadoTexto}>
                                {lojasFiltradas.length} loja(s) encontrada(s)
                            </Text>

                        )}

                    </View>

                    {/* MOMENTOS PARA PEDIR */}

                    <View style={styles.areaCheckbox}>

                        <Text style={styles.tituloCheckbox}>
                            Melhores momentos para pedir uma sobremesa nossa?
                        </Text>


                        {/* Depois do almoço */}

                        <View style={styles.checkboxLinha}>

                            <Checkbox
                                value={almoco}
                                onValueChange={setAlmoco}
                                color={
                                    almoco
                                        ? colors.marrom
                                        : undefined
                                }
                            />

                            <Text style={styles.textoCheckbox}>
                                Depois do almoço 
                            </Text>

                        </View>


                        {/* Café da tarde */}

                        <View style={styles.checkboxLinha}>

                            <Checkbox
                                value={cafeTarde}
                                onValueChange={setCafeTarde}
                                color={
                                    cafeTarde
                                        ? colors.marrom
                                        : undefined
                                }
                            />

                            <Text style={styles.textoCheckbox}>
                                No café da tarde 
                            </Text>

                        </View>


                        {/* Filme ou série */}

                        <View style={styles.checkboxLinha}>

                            <Checkbox
                                value={filme}
                                onValueChange={setFilme}
                                color={
                                    filme
                                        ? colors.marrom
                                        : undefined
                                }
                            />

                            <Text style={styles.textoCheckbox}>
                                Assistindo filme ou série 
                            </Text>

                        </View>


                        {/* Comemoração */}

                        <View style={styles.checkboxLinha}>

                            <Checkbox
                                value={comemoracao}
                                onValueChange={setComemoracao}
                                color={
                                    comemoracao
                                        ? colors.marrom
                                        : undefined
                                }
                            />

                            <Text style={styles.textoCheckbox}>
                                Em uma comemoração 
                            </Text>

                        </View>


                        {/* Vontade de doce */}

                        <View style={styles.checkboxLinha}>

                            <Checkbox
                                value={vontadeDoce}
                                onValueChange={setVontadeDoce}
                                color={
                                    vontadeDoce
                                        ? colors.marrom
                                        : undefined
                                }
                            />

                            <Text style={styles.textoCheckbox}>
                                Quando bate aquela vontade de doce 
                            </Text>

                        </View>


                        {/* Botão */}

                        <TouchableOpacity
                            style={styles.botaoEscolhas}
                            onPress={mostrarEscolhas}
                            activeOpacity={0.7}
                        >

                            <Text style={styles.textoBotaoEscolhas}>
                                VER MEUS MOMENTOS
                            </Text>

                        </TouchableOpacity>

                    </View>

                    {/* LISTA DE ESTABELECIMENTOS */}

                    <View style={styles.listaEstabelecimentos}>

                        {lojaEscolhida
                            ? renderCard(lojaEscolhida)
                            : lojasFiltradas.map((item) =>
                                renderCard(item)
                            )
                        }

                    </View>

                </ScrollView>

            </View>

            {/* MODAL */}

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >

                <View style={styles.modalFundo}>

                    <View style={styles.modalView}>

                        <Text style={styles.modalTitulo}>
                            Seus melhores momentos 
                        </Text>


                        <Text style={styles.modalTexto}>
                            Você escolheu pedir uma sobremesa:
                        </Text>


                        {/* Almoço */}

                        {almoco && (

                            <Text style={styles.modalEscolha}>
                                ✓ Depois do almoço 
                            </Text>

                        )}


                        {/* Café da tarde */}

                        {cafeTarde && (

                            <Text style={styles.modalEscolha}>
                                ✓ No café da tarde 
                            </Text>

                        )}


                        {/* Filme */}

                        {filme && (

                            <Text style={styles.modalEscolha}>
                                ✓ Assistindo filme ou série 
                            </Text>

                        )}


                        {/* Comemoração */}

                        {comemoracao && (

                            <Text style={styles.modalEscolha}>
                                ✓ Em uma comemoração 
                            </Text>

                        )}


                        {/* Vontade de doce */}

                        {vontadeDoce && (

                            <Text style={styles.modalEscolha}>
                                ✓ Quando bate aquela vontade de doce 
                            </Text>

                        )}


                        {/* Fechar */}

                        <Pressable
                            style={styles.botaoFecharModal}
                            onPress={() => setModalVisible(false)}
                        >

                            <Text style={styles.textoBotaoModal}>
                                FECHAR
                            </Text>

                        </Pressable>

                    </View>

                </View>

            </Modal>

            {/* RODAPÉ */}

            <View style={styles.rodape}>

                {/* Logo */}

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