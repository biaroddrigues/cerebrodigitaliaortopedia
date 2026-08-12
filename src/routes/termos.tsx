import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso - Cérebro Digital Ortopedia" },
      {
        name: "description",
        content: "Termos de Uso do Cérebro Digital Ortopedia, da BR Recovery.",
      },
    ],
  }),
  component: Termos,
});

function Termos() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link to="/" className="text-sm text-accent transition-colors hover:underline">
          ← Voltar para o início
        </Link>

        <h1 className="mt-6 text-3xl font-bold md:text-4xl">Termos de Uso</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Última atualização: agosto de 2026
        </p>

        <div className="mt-10 space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground">1. Sobre o serviço</h2>
            <p className="mt-3">
              O Cérebro Digital Ortopedia é um produto digital da BR Recovery que concede
              acesso individual a um ambiente de inteligência artificial (Google NotebookLM)
              contendo uma curadoria de evidências científicas em ortopedia, organizada para
              apoiar fisioterapeutas na tomada de decisão clínica.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">2. Contratação e acesso</h2>
            <p className="mt-3">
              A compra é processada por um parceiro de pagamentos externo. Após a confirmação
              do pagamento, o acesso é liberado manualmente pela nossa equipe: o comprador
              envia o e-mail do Gmail que deseja utilizar e recebe, em seguida, um convite
              oficial do Google para o ambiente do NotebookLM. O prazo de liberação pode levar
              até 24 horas úteis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">3. Uso pessoal e intransferível</h2>
            <p className="mt-3">
              O acesso concedido é individual, pessoal e intransferível. Não é permitido
              compartilhar login, convite ou conteúdo do ambiente com terceiros, revender o
              acesso ou reproduzir o material disponibilizado para fins comerciais.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">4. Natureza do conteúdo</h2>
            <p className="mt-3">
              O conteúdo disponibilizado tem finalidade educacional e de apoio à decisão
              clínica, com base em evidências científicas selecionadas. Ele não substitui o
              julgamento clínico do profissional, a avaliação individual de cada paciente nem
              a responsabilidade técnica do fisioterapeuta pela conduta adotada.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">5. Reembolso</h2>
            <p className="mt-3">
              Nos termos do Código de Defesa do Consumidor, o comprador pode solicitar o
              cancelamento e reembolso integral em até 7 dias corridos após a compra, desde
              que o pedido seja feito pelos canais oficiais informados na página de venda.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">6. Alterações destes termos</h2>
            <p className="mt-3">
              Estes Termos de Uso podem ser atualizados periodicamente. A versão vigente é
              sempre a publicada nesta página.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">7. Contato</h2>
            <p className="mt-3">
              Dúvidas sobre estes termos podem ser enviadas para o suporte informado na página
              de venda do Cérebro Digital Ortopedia.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
