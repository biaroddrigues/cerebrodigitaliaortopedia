import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade - Cérebro Digital Ortopedia" },
      {
        name: "description",
        content: "Política de Privacidade do Cérebro Digital Ortopedia, da BR Recovery.",
      },
    ],
  }),
  component: Privacidade,
});

function Privacidade() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link to="/" className="text-sm text-accent transition-colors hover:underline">
          ← Voltar para o início
        </Link>

        <h1 className="mt-6 text-3xl font-bold md:text-4xl">Política de Privacidade</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Última atualização: agosto de 2026
        </p>

        <div className="mt-10 space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground">1. Quais dados coletamos</h2>
            <p className="mt-3">
              Para liberar o acesso ao Cérebro Digital Ortopedia, coletamos o endereço de
              Gmail informado pelo comprador, além dos dados de pagamento processados
              diretamente pelo nosso parceiro de pagamentos (não armazenamos dados de cartão
              em nossos próprios sistemas).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">2. Como usamos os dados</h2>
            <p className="mt-3">
              Utilizamos o e-mail informado exclusivamente para enviar o convite oficial de
              acesso ao ambiente do Google NotebookLM e para comunicações relacionadas ao
              suporte da compra. Não vendemos nem compartilhamos seus dados com terceiros para
              fins de marketing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">3. Privacidade do ambiente de IA</h2>
            <p className="mt-3">
              O ambiente do Cérebro Digital Ortopedia é individual e privado: cada compradora
              ou comprador recebe seu próprio espaço no Google NotebookLM, e as pesquisas,
              perguntas e casos clínicos inseridos por um usuário não são visíveis a outros
              usuários da ferramenta.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">4. Compartilhamento com terceiros</h2>
            <p className="mt-3">
              Compartilhamos dados apenas com os prestadores de serviço necessários para a
              operação do produto, como o processador de pagamentos (Kiwify) e o Google, para
              a criação do convite de acesso ao NotebookLM.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">5. Seus direitos (LGPD)</h2>
            <p className="mt-3">
              Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode
              solicitar a qualquer momento a confirmação, o acesso, a correção ou a exclusão
              dos seus dados pessoais, entrando em contato pelos canais informados na página
              de venda.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">6. Alterações desta política</h2>
            <p className="mt-3">
              Esta Política de Privacidade pode ser atualizada periodicamente. A versão
              vigente é sempre a publicada nesta página.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">7. Contato</h2>
            <p className="mt-3">
              Dúvidas sobre esta política podem ser enviadas para o suporte informado na
              página de venda do Cérebro Digital Ortopedia.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
