import Box from "./Box";
function App() {
  return (
    <main>
      <h1>🏛️ Caesar cipher 🏛️</h1>
      <Box
        title="Szyfrowanie"
        firstLabel="Tekst"
        secondLabel="Szyfr"
        btnText="Szyfruj"
        encrypt
      />
      <Box
        title="Deszyfrowanie"
        firstLabel="Tekst"
        secondLabel="Tekst jawny"
        btnText="Deszyfruj"
        encrypt={false}
      />
    </main>
  );
}

export default App;
