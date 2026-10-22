import { StyleSheet } from "react-native";
import colors from "./colors";

export const styles = StyleSheet.create({

    // estilo geral da pagina

    fundo: {
        height: "100vh",
        backgroundColor: colors.rosa,
    },


    // Cabeçalho

    navbar: {
        width: "100%",
        height: 75,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.amarelo,
        paddingHorizontal: 18,
        elevation: 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        zIndex: 10,
    },

    botaoMenu: {
        width: 48,
        height: 48,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 14,
    },

    botaoHome: {
        width: 48,
        height: 48,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 14,
    },

    logoNavbar: {
        position: "absolute",
        left: "50%",
        marginLeft: -65,
        width: 130,
        height: 65,
        resizeMode: "contain",
    },


    // Home, parte geral da pagina

    conteudoPrincipal: {
        flex: 1,
        backgroundColor: colors.rosa,
        minHeight: 0,
    },

    scrollView: {
        flex: 1,
        width: "100%",
    },

    scrollPrincipal: {
        width: "100%",
        paddingTop: 35,
        paddingBottom: 60,
        paddingHorizontal: 20,
        alignItems: "center",
    },


    // Home, CSS do picker

    areaPicker: {
        width: "100%",
        maxWidth: 430,
        backgroundColor: colors.amarelo,
        paddingHorizontal: 25,
        paddingVertical: 28,
        borderRadius: 22,
        marginBottom: 35,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.18,
        shadowRadius: 6,
    },

    tituloPicker: {
        fontSize: 28,
        fontWeight: "900",
        color: colors.escuro,
        textAlign: "center",
        marginBottom: 28,
    },

    labelPicker: {
        fontSize: 14,
        fontWeight: "800",
        color: colors.escuro,
        marginBottom: 7,
    },

    labelPickerLoja: {
        fontSize: 14,
        fontWeight: "800",
        color: colors.escuro,
        marginTop: 18,
        marginBottom: 7,
    },

    pickerContainer: {
        width: "100%",
        height: 52,
        backgroundColor: colors.branco,
        borderWidth: 2,
        borderColor: colors.marrom,
        borderRadius: 12,
        overflow: "hidden",
        justifyContent: "center",
    },

    picker: {
        width: "100%",
        height: 52,
        color: colors.escuro,
    },

    resultadoTexto: {
        fontSize: 13,
        fontWeight: "700",
        color: colors.marrom,
        textAlign: "center",
        marginTop: 14,
    },


    // =====================================================
    // CHECKBOXES DA HOME
    // =====================================================

    areaCheckbox: {
        width: "100%",
        maxWidth: 430,
        backgroundColor: colors.amarelo,
        paddingHorizontal: 25,
        paddingVertical: 22,
        borderRadius: 22,
        marginBottom: 35,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.18,
        shadowRadius: 6,
    },

    tituloCheckbox: {
        fontSize: 20,
        fontWeight: "900",
        color: colors.escuro,
        marginBottom: 18,
    },

    checkboxLinha: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
    },

    textoCheckbox: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: "600",
        color: colors.escuro,
    },

    botaoEscolhas: {
        width: "100%",
        height: 45,
        backgroundColor: colors.marrom,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 8,
    },

    textoBotaoEscolhas: {
        fontSize: 12,
        fontWeight: "900",
        color: colors.rosa,
        textAlign: "center",
    },


    // =====================================================
    // MODAL DAS ESCOLHAS
    // =====================================================

    modalFundo: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },

    modalView: {
        width: "80%",
        maxWidth: 400,
        backgroundColor: colors.amarelo,
        borderRadius: 20,
        padding: 30,
        alignItems: "center",
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
    },

    modalTitulo: {
        fontSize: 25,
        fontWeight: "900",
        color: colors.escuro,
        marginBottom: 15,
    },

    modalTexto: {
        fontSize: 16,
        color: colors.escuro,
        marginBottom: 12,
    },

    modalEscolha: {
        fontSize: 17,
        fontWeight: "700",
        color: colors.escuro,
        marginBottom: 8,
    },

    botaoFecharModal: {
        marginTop: 20,
        backgroundColor: colors.marrom,
        paddingVertical: 11,
        paddingHorizontal: 28,
        borderRadius: 10,
    },

    textoBotaoModal: {
        color: colors.rosa,
        fontSize: 13,
        fontWeight: "900",
    },


    // Pagina home, lista de restaurantes

    listaEstabelecimentos: {
        width: "100%",
        maxWidth: 1100,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        columnGap: 22,
        rowGap: 22,
        paddingBottom: 20,
    },

    cardEstabelecimento: {
        width: 330,
        minWidth: 280,
        maxWidth: 380,
        backgroundColor: colors.amarelo,
        borderRadius: 22,
        overflow: "hidden",
        marginBottom: 5,
        elevation: 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 7,
    },

    imagemEstabelecimento: {
        width: "100%",
        height: 210,
        resizeMode: "cover",
    },

    informacoesEstabelecimento: {
        paddingHorizontal: 20,
        paddingTop: 17,
        paddingBottom: 18,
    },

    nomeEstabelecimento: {
        fontSize: 21,
        fontWeight: "900",
        color: colors.escuro,
        marginBottom: 12,
    },

    linhaCard: {
        width: "100%",
        minHeight: 32,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 12,
    },

    tiposContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 5,
        marginRight: 8,
    },

    categoriaCard: {
        backgroundColor: colors.verde,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 15,
    },

    textoCategoriaCard: {
        fontSize: 11,
        fontWeight: "800",
        color: colors.escuro,
    },

    avaliacaoContainer: {
        backgroundColor: colors.rosa,
        paddingHorizontal: 11,
        paddingVertical: 6,
        borderRadius: 15,
        alignSelf: "flex-start",
    },

    avaliacao: {
        fontSize: 13,
        fontWeight: "900",
        color: colors.escuro,
    },

    enderecoEstabelecimento: {
        fontSize: 13,
        fontWeight: "600",
        color: colors.escuro,
        marginBottom: 9,
        lineHeight: 19,
    },

    descricaoEstabelecimento: {
        fontSize: 14,
        lineHeight: 20,
        color: colors.escuro,
        marginBottom: 16,
    },

    botaoCard: {
        width: "100%",
        height: 45,
        backgroundColor: colors.marrom,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },

    textoBotaoCard: {
        fontSize: 12,
        fontWeight: "900",
        color: colors.rosa,
        textAlign: "center",
    },


    // Rodapé

    rodape: {
        width: "100%",
        minHeight: 105,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.verde,
        paddingHorizontal: 18,
        paddingVertical: 10,
    },

    logoRodape: {
        width: 95,
        height: 85,
        resizeMode: "contain",
    },

    botaoRodape: {
        width: 65,
        height: 65,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.marrom,
        marginLeft: 12,
        borderRadius: 12,
    },

    textoBotao: {
        color: colors.rosa,
        fontSize: 14,
        fontWeight: "800",
        marginTop: 2,
        textShadowColor: colors.escuro,
        textShadowOffset: {
            width: 2,
            height: 2,
        },
        textShadowRadius: 3,
    },


    // Menu Lateral de todas as paginas

    menuLateral: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "75%",
        maxWidth: 350,
        height: "100%",
        backgroundColor: colors.amarelo,
        zIndex: 1000,
        paddingTop: 90,
        paddingHorizontal: 20,
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
    },

    tituloMenu: {
        fontSize: 25,
        fontWeight: "900",
        color: colors.escuro,
        marginBottom: 30,
    },

    itemMenu: {
        width: "100%",
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginBottom: 5,
    },

    textoItemMenu: {
        fontSize: 16,
        fontWeight: "700",
        color: colors.escuro,
    },


    // Pagina Sobre

    conteudoSobre: {
        flex: 1,
        backgroundColor: colors.rosa,
        minHeight: 0,
    },

    scrollSobre: {
        width: "100%",
        paddingVertical: 25,
        paddingHorizontal: 20,
        paddingBottom: 50,
        alignItems: "center",
    },

    cardSobre: {
        width: "100%",
        maxWidth: 700,
        backgroundColor: colors.amarelo,
        borderRadius: 20,
        paddingHorizontal: 25,
        paddingVertical: 25,
        shadowColor: colors.escuro,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 4,
    },

    tituloSobre: {
        textAlign: "center",
        fontSize: 32,
        fontWeight: "900",
        color: colors.escuro,
    },

    linhaSobre: {
        width: 100,
        height: 4,
        backgroundColor: colors.rosa,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 20,
    },

    subtituloSobre: {
        fontSize: 22,
        fontWeight: "800",
        color: colors.escuro,
        marginTop: 12,
        marginBottom: 8,
    },

    textoSobre: {
        fontSize: 16,
        lineHeight: 25,
        color: colors.escuro,
        textAlign: "justify",
        marginBottom: 10,
    },

    valoresSobre: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        gap: 10,
    },

    caixaValor: {
        flex: 1,
        backgroundColor: colors.verde,
        borderRadius: 12,
        padding: 12,
        alignItems: "center",
        minHeight: 120,
        justifyContent: "center",
    },

    tituloValor: {
        fontSize: 15,
        fontWeight: "bold",
        color: colors.escuro,
        marginTop: 5,
    },

    textoValor: {
        fontSize: 12,
        color: colors.escuro,
        textAlign: "center",
        marginTop: 3,
    },


    // Pagina Dev

    conteudoDevs: {
        flex: 1,
        backgroundColor: colors.rosa,
        minHeight: 0,
    },

    ScrollViewDev: {
        flex: 1,
        width: "100%",
    },

    scrollDevs: {
        width: "100%",
        paddingVertical: 25,
        paddingHorizontal: 20,
        paddingBottom: 40,
        alignItems: "center",
    },

    cardDevs: {
        width: "100%",
        maxWidth: 700,
        backgroundColor: colors.amarelo,
        borderRadius: 20,
        paddingHorizontal: 25,
        paddingVertical: 30,
        shadowColor: colors.escuro,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 4,
    },

    fotoDev: {
        width: 100,
        height: 100,
        borderRadius: 50,
        resizeMode: "cover",
    },

    tituloDevs: {
        textAlign: "center",
        fontSize: 32,
        fontWeight: "900",
        color: colors.escuro,
    },

    linhaDevs: {
        width: 100,
        height: 4,
        backgroundColor: colors.rosa,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 20,
    },

    textoIntroducaoDevs: {
        fontSize: 16,
        lineHeight: 25,
        color: colors.escuro,
        textAlign: "center",
        marginBottom: 20,
    },

    devBox: {
        width: "100%",
        minHeight: 120,
        backgroundColor: colors.verde,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        marginBottom: 12,
    },

    devInfo: {
        marginLeft: 18,
        flex: 1,
    },

    nomeDev: {
        fontSize: 18,
        fontWeight: "900",
        color: colors.escuro,
    },

    funcaoDev: {
        fontSize: 14,
        color: colors.escuro,
        marginTop: 3,
    },

    creditosDevs: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "900",
        color: colors.escuro,
        marginTop: 20,
    },

    creditosSub: {
        textAlign: "center",
        fontSize: 13,
        color: colors.escuro,
        marginTop: 5,
    },


    // =====================================================
    // LOGIN DO SAPO KING OF PLAYS
    // =====================================================

    conteudoLogin: {
        flex: 1,
        backgroundColor: colors.rosa,
        overflow: "hidden",
    },

    scrollLogin: {
        flexGrow: 1,
        justifyContent: "center",
        paddingVertical: 20,
        paddingHorizontal: 20,
        paddingBottom: 30,
    },

    FormView: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },

    FormBorda: {
        width: "100%",
        maxWidth: 450,
        backgroundColor: colors.verde,
        borderRadius: 20,
        padding: 3,

        shadowColor: colors.escuro,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,

        elevation: 5,
    },

    Formulario: {
        width: "100%",
        backgroundColor: colors.amarelo,
        borderRadius: 18,
        padding: 30,
        alignItems: "center",
    },

    tituloLogin: {
        fontSize: 36,
        fontWeight: "900",
        color: colors.escuro,
        textAlign: "center",
        marginBottom: 30,
    },

    divCaixas: {
        width: "100%",
        marginBottom: 20,
    },

    Label: {
        fontSize: 16,
        fontWeight: "700",
        color: colors.escuro,
        marginBottom: 8,
        marginLeft: 5,
    },

    input: {
        width: "100%",
        height: 50,
        backgroundColor: colors.rosa,
        borderRadius: 12,
        paddingHorizontal: 15,
        fontSize: 16,
        color: colors.escuro,

        borderWidth: 2,
        borderColor: colors.marrom,

        shadowColor: colors.escuro,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,

        elevation: 2,
    },

    divBotao: {
        width: "100%",
        marginTop: 10,
    },

    Botao: {
        width: "100%",
        height: 50,
        backgroundColor: colors.marrom,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",

        shadowColor: colors.escuro,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,

        elevation: 4,
    },

    textoBotaoLogin: {
        color: colors.rosa,
        fontSize: 18,
        fontWeight: "800",
        textShadowColor: colors.escuro,
        textShadowOffset: {
            width: 1,
            height: 1,
        },
        textShadowRadius: 2,
    },

    // CHECKBOX DO LOGIN

    checkboxLogin: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
        marginBottom: 10,
    },

    textoCheckboxLogin: {
        marginLeft: 10,
        fontSize: 14,
        color: colors.escuro,
        fontWeight: "600",
    },

    // Página do estabelecimento

scrollEstabelecimento: {
    width: "100%",
    paddingVertical: 30,
    paddingHorizontal: 20,
    paddingBottom: 50,
    alignItems: "center",
},

cardEstabelecimentoPagina: {
    width: "100%",
    maxWidth: 800,
    backgroundColor: colors.amarelo,
    borderRadius: 22,
    overflow: "hidden",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7,
},

imagemEstabelecimentoPagina: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
},

informacoesPagina: {
    padding: 25,
},

nomeEstabelecimentoPagina: {
    fontSize: 32,
    fontWeight: "900",
    color: colors.escuro,
    marginBottom: 15,
},

avaliacaoPagina: {
    alignSelf: "flex-start",
    backgroundColor: colors.rosa,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
    marginBottom: 18,
},

textoAvaliacaoPagina: {
    fontSize: 15,
    fontWeight: "900",
    color: colors.escuro,
},

tiposPagina: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 25,
},

categoriaPagina: {
    backgroundColor: colors.verde,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 15,
},

textoCategoriaPagina: {
    fontSize: 12,
    fontWeight: "800",
    color: colors.escuro,
},

tituloInformacaoPagina: {
    fontSize: 20,
    fontWeight: "900",
    color: colors.escuro,
    marginTop: 10,
    marginBottom: 8,
},

textoInformacaoPagina: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.escuro,
    marginBottom: 18,
},

botaoVoltarEstabelecimento: {
    width: "100%",
    height: 48,
    backgroundColor: colors.marrom,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
},

textoBotaoVoltarEstabelecimento: {
    color: colors.rosa,
    fontSize: 14,
    fontWeight: "900",
},

});
