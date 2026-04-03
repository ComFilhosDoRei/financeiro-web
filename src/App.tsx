function App() {
  return (
    <main className="app-shell">
      <section className="hero">
        <span className="eyebrow">Comunidade Filhos do Rei</span>
        <h1>Financeiro Web</h1>
        <p>
          Base inicial em React + TypeScript para a plataforma de gerenciamento
          financeiro.
        </p>
      </section>

      <section className="card-grid">
        <article className="card">
          <h2>Receitas</h2>
          <p>Organize entradas e acompanhe a movimentacao financeira.</p>
        </article>

        <article className="card">
          <h2>Despesas</h2>
          <p>Registre gastos e crie uma visao clara dos compromissos.</p>
        </article>

        <article className="card">
          <h2>Relatorios</h2>
          <p>Visualize indicadores e acompanhe a saude financeira.</p>
        </article>
      </section>
    </main>
  );
}

export default App;

