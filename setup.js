const { execSync } = require("child_process");
const fs = require("fs");

console.log("📦 Iniciando instalação de dependências via requirements.txt...");

const requirements = fs.readFileSync("requirements.txt", "utf8").split("\n");

function run(cmd) {
  console.log(`\n🚀 Executando: ${cmd}`);
  execSync(cmd, { stdio: "inherit" });
}

try {
  for (const line of requirements) {
    if (line.startsWith("#") || !line.trim()) continue; 

    const [folder, deps] = line.split(":").map((s) => s.trim());

    if (folder && deps) {
      if (folder === "backend") {
        run(`cd backend && npm install ${deps}`);
      } else if (folder === "mobile") {
        run(`cd mobile && npx expo install ${deps}`);
      } else if (folder === "root") {
        run(`npm install ${deps}`);
      }
    }
  }

  console.log("\n✅ Instalação concluída com sucesso!");
  console.log("👉 Agora você pode rodar:");
  console.log("   npm run dev           → backend + mobile juntos");
  console.log("   npm run start:backend → apenas backend");
  console.log("   npm run start:mobile  → apenas frontend");
} catch (error) {
  console.error("❌ Erro durante a instalação:", error.message);
}
