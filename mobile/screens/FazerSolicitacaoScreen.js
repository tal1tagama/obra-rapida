import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from "react-native";

const topicos = [

    {
        id: 1,
        titulo: "Materiais de Estrutura e Alvenaria",
        itens: [
            "Cimento CP I (comum)",
            "Cimento CP II (comum e pozolânico)",
            "Cimento CP III (alto-força)",
            "Cimento rápido (desmoldante)",
            "Areia fina (para argamassa de acabamento)",
            "Areia média (para concreto)",
            "Areia grossa (para fundações)",
            "Pedra brita 0 (concreto leve)",
            "Pedra brita 1, 2, 3 (concreto e base de piso)",
            "Blocos de concreto (30x20x15, 40x20x15, etc.)",
            "Blocos cerâmicos maciços",
            "Blocos cerâmicos de vedação",
            "Tijolos maciços",
            "Tijolos furados",
            "Argamassa pronta (assentamento e reboco)",
            "Cal hidratada",
            "Ferro / Vergalhão (4mm, 6mm, 8mm, 10mm, 12mm, 16mm)",
            "Tela de aço / malha soldada (para lajes e pisos)",
            "Chumbadores / buchas de ancoragem",
            "Escoras metálicas e madeira para concretagem",
            "Concreto pronto (se necessário)"
        ]
    },
    {
        id: 2,
        titulo: "Materiais para Lajes e Estruturas Metálicas",
        itens: [
            "Lajes pré-moldadas",
            "Lajes maciças",
            "Chapas metálicas",
            "Perfis metálicos (IPE, H, U)",
            "Arame galvanizado",
            "Pregos e parafusos estruturais",
            "Madeiramento para caixaria (caibros, vigas, ripas)",
            "Manta térmica para lajes",
            "Isolamento acústico"
        ]
    },
    {
        id: 3,
        titulo: "Materiais para Revestimentos e Acabamentos",
        itens: [
            "Revestimentos cerâmicos (pisos, paredes)",
            "Pastilhas cerâmicas",
            "Piso laminado, vinílico ou madeira",
            "Rodapés (cerâmica, MDF, PVC)",
            "Massa corrida",
            "Gesso acartonado (drywall)",
            "Tinta acrílica (paredes internas e externas)",
            "Tinta esmalte (portas, janelas, metais)",
            "Verniz / selador",
            "Impermeabilizante (manta líquida, cimento + aditivo)",
            "Argamassa colante",
            "Rejunte",
            "Textura ou grafiato",
            "Adesivos decorativos"
        ]
    },
    {
        id: 4,
        titulo: "Materiais Hidráulicos",
        itens: [
            "Tubos PVC (água fria e esgoto)",
            "Tubos PPR (água quente)",
            "Tubos de cobre (água quente)",
            "Conexões PVC e PPR (joelhos, T, luvas)",
            "Válvulas de retenção e registros",
            "Torneiras, misturadores, chuveiros",
            "Caixas d’água (plástico, fibra, concreto)",
            "Bombas de água",
            "Filtros e purificadores",
            "Abraçadeiras e suportes de tubos",
            "Ralos, grelhas e sifões",
            "Fitas veda rosca",
            "Tubulações flexíveis para pressurização"
        ]
    },
    {
        id: 5,
        titulo: "Materiais Elétricos",
        itens: [
            "Cabos elétricos (cobre, alumínio, 1,5mm², 2,5mm², 4mm², 6mm²)",
            "Eletrodutos (PVC, metálico)",
            "Caixa de passagem e quadros de distribuição",
            "Disjuntores (Diferencial e termomagnético)",
            "Interruptores, tomadas e plugues",
            "Luminárias e lâmpadas (LED, fluorescente, incandescente)",
            "Conectores, bornes e fitas isolantes",
            "Cabos de aterramento",
            "Tomadas especiais (bancada, cozinha, banheiro)",
            "Sensores de presença (opcional)"
        ]
    },
    {
        id: 6,
        titulo: "Ferramentas e Equipamentos",
        itens: [
            "Pá, enxada, picareta",
            "Colher de pedreiro",
            "Carrinho de mão",
            "Baldes de 20L",
            "Vassouras",
            "Nível de bolha, prumo e esquadro",
            "Trena 5m, 10m",
            "Talhadeira, marreta e martelo",
            "Betoneira",
            "Serra manual e elétrica",
            "Espátulas e desempenadeiras",
            "Pulverizador para tinta",
            "Brocas e furadeiras",
            "Andaimes e escadas",
            "Niveladora de piso"
        ]
    },
    {
        id: 7,
        titulo: "Materiais para Telhados e Coberturas",
        itens: [
            "Telhas cerâmicas, fibrocimento ou metálicas",
            "Caibros, ripas, vigas de madeira",
            "Pregos, parafusos, abraçadeiras",
            "Isolantes térmicos",
            "Calhas e rufos",
            "Tela mosquiteira ou manta anti-inseto"
        ]
    },
    {
        id: 8,
        titulo: "Materiais de Proteção e Segurança",
        itens: [
            "Capacete",
            "Luvas de proteção",
            "Óculos de proteção",
            "Bota de segurança",
            "Cinto de segurança / talabarte",
            "Máscaras respiratórias",
            "Coletes refletivos",
            "Fitas de sinalização",
            "Protetor auricular"
        ]
    },
    {
        id: 9,
        titulo: "Materiais Diversos e Consumíveis",
        itens: [
            "Sacos plásticos",
            "Fita crepe, fita isolante",
            "Lonas de cobertura",
            "Pregos, parafusos, grampos",
            "Adesivos e selantes (silicone, PU)",
            "Espuma expansiva",
            "Cordas, cabos, arames",
            "Limpeza: panos, escovas, detergentes",
            "Lixas, esponjas, ferramentas de acabamento"
        ]
    }
];
export default function FazerSolicitacaoScreen() {
    const [expanded, setExpanded] = useState(null);
    const [selecionados, setSelecionados] = useState({});

    const toggleTopico = (id) => setExpanded(expanded === id ? null : id);

    const toggleItem = (item) => {
        setSelecionados(prev => ({
            ...prev,
            [item]: !prev[item]
        }));
    };

    const itensSelecionados = Object.keys(selecionados).filter(key => selecionados[key]);

    const enviarSolicitacao = async () => {
        if (itensSelecionados.length === 0) {
            Alert.alert("Erro", "Selecione pelo menos um item para enviar!");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/fazer-solicitacao", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ descricao: itensSelecionados })
            });

            const data = await res.json();
            Alert.alert("Sucesso", data.message);

            setSelecionados({});
        } catch (err) {
            Alert.alert("Erro", "Não foi possível enviar a solicitação.");
        }
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}> Fazer Solicitação</Text>

            {topicos.map((topico) => (
                <View key={topico.id} style={styles.topicoContainer}>
                    <TouchableOpacity
                        style={styles.topicoButton}
                        onPress={() => toggleTopico(topico.id)}
                    >
                        <Text style={styles.topicoText}>{topico.titulo}</Text>
                    </TouchableOpacity>

                    {expanded === topico.id && (
                        <View style={styles.itensContainer}>
                            {topico.itens.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={[
                                        styles.itemButton,
                                        selecionados[item] && styles.itemSelecionado
                                    ]}
                                    onPress={() => toggleItem(item)}
                                >
                                    <Text style={styles.itemText}>{item}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}
                </View>
            ))}

            <View style={styles.resumoContainer}>
                <Text style={styles.resumoTitle}> Resumo da Solicitação</Text>
                {itensSelecionados.length === 0 ? (
                    <Text style={styles.resumoEmpty}>Nenhum item selecionado</Text>
                ) : (
                    itensSelecionados.map((item, index) => (
                        <Text key={index} style={styles.resumoItem}>- {item}</Text>
                    ))
                )}
            </View>

            <TouchableOpacity style={styles.enviarButton} onPress={enviarSolicitacao}>
                <Text style={styles.enviarButtonText}>Enviar Solicitação</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#fff" },
    title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
    topicoContainer: { marginBottom: 10, borderRadius: 8, overflow: "hidden", borderWidth: 1, borderColor: "#ccc" },
    topicoButton: { backgroundColor: "#007bff", padding: 15 },
    topicoText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
    itensContainer: { backgroundColor: "#f2f2f2", padding: 10 },
    itemButton: { paddingVertical: 8, paddingHorizontal: 5, borderRadius: 5, marginVertical: 2 },
    itemSelecionado: { backgroundColor: "#d0e8ff" },
    itemText: { fontSize: 14 },
    resumoContainer: { marginTop: 20, padding: 15, backgroundColor: "#f9f9f9", borderRadius: 8, borderWidth: 1, borderColor: "#ccc" },
    resumoTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
    resumoItem: { fontSize: 14, paddingVertical: 2 },
    resumoEmpty: { fontSize: 14, fontStyle: "italic", color: "#666" },
    enviarButton: { backgroundColor: "#28a745", padding: 15, borderRadius: 8, marginTop: 15, alignItems: "center" },
    enviarButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" }
});