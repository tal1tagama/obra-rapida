import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function EnviarRelatorioScreen() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  async function enviarRelatorio() {
    if (!titulo || !descricao) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/enviar-relatorio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titulo, descricao })
      });
      const data = await res.json();
      Alert.alert("Sucesso", data.message);
      setTitulo("");
      setDescricao("");
    } catch (err) {
      Alert.alert("Erro", "Não foi possível enviar o relatório.");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 Enviar Relatório</Text>
      <TextInput
        placeholder="Título"
        style={styles.input}
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        placeholder="Descrição"
        style={[styles.input, { height: 100 }]}
        value={descricao}
        onChangeText={setDescricao}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={enviarRelatorio}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center"
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" }
});
