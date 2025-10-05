const { execSync } = require("child_process");

function run(cmd) {
  console.log(`\n🚀 Executando: ${cmd}`);
  execSync(cmd, { stdio: "inherit" });
}

console.log("🛠️ Instalando todas as dependências do projeto...");

try {
  run("cd backend && npm install express cors");

  run("cd mobile && npm install expo @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context");
  run("cd mobile && npx expo install react-native-web react-dom @expo/metro-runtime");

  run("npm install concurrently");

  console.log("\n✅ Instalação concluída!");
  console.log("Para rodar o projeto:");
  console.log("   npm run dev           → backend + mobile juntos");
  console.log("   npm run start:backend → apenas backend");
  console.log("   npm run start:mobile  → apenas mobile (Chrome)");
} catch (error) {
  console.error("\n❌ Erro durante a instalação:", error.message);
}
