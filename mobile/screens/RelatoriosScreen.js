import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function RelatoriosScreen() {
  const [relatorios, setRelatorios] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/relatorios")
      .then(res => res.json())
      .then(data => setRelatorios(data));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📄 Meus Relatórios</Text>
      {relatorios.map(r => (
        <Text key={r.id} style={styles.item}>- {r.titulo}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  item: { fontSize: 18, marginBottom: 8 }
});
