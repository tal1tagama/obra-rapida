import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SolicitacoesScreen() {
  const [solicitacoes, setSolicitacoes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/solicitacoes")
      .then(res => res.json())
      .then(data => setSolicitacoes(data));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📌 Minhas Solicitações</Text>
      {solicitacoes.map(s => (
        <Text key={s.id} style={styles.item}>- {s.descricao}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  item: { fontSize: 18, marginBottom: 8 }
});
