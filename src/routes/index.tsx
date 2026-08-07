import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import heroBrain from "@/assets/hero-brain.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cérebro Digital - IA Ortopedia para Fisioterapeutas" },
      {
        name: "description",
        content:
          "Ambiente interativo com IA e as melhores evidências científicas em ortopedia. Converse com os artigos e resolva casos clínicos em segundos.",
      },
      { property: "og:title", content: "Cérebro Digital - IA Ortopedia" },
      {
        property: "og:description",
        content:
          "Pare de perder horas pesquisando artigos. Conduta baseada em evidência na hora certa, com inteligência artificial.",
      },
    ],
  }),
  component: Index,
});

const passos = [
  {
    n: "01",
    titulo: "Rascunhe sua avaliação",
    texto: "Anote a avaliação bruta do paciente no consultório, do jeito que sair.",
  },
  {
    n: "02",
    titulo: "Use o Prompt de Ouro",
    texto: "Aplique o nosso prompt exclusivo para organizar tudo em segundos.",
  },
  {
    n: "03",
    titulo: "Pergunte ao Cérebro Digital",
    texto:
      "Cole o resumo e pergunte qual a melhor conduta baseada em evidência para aquele caso.",
  },
  {
    n: "04",
    titulo: "Entregue alto nível",
    texto: "Apresente um tratamento de autoridade e feche mais planos de sessões.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="surface-glow relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Para fisioterapeutas
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] md:text-6xl">
              Pare de perder horas pesquisando artigos.{" "}
              <span className="glow-text">O seu novo Cérebro Digital em Ortopedia</span>{" "}
              chegou.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Um ambiente interativo com as melhores evidências científicas. Com a IA, você
              "conversa" com os artigos e resolve casos clínicos reais em segundos.
            </p>
            <div className="mt-9">
              <Button variant="cta" size="xl" asChild>
                <a href="https://pay.kiwify.com.br/Luvd6Lr" target="_blank" rel="noopener noreferrer">
                  Quero acessar o Cérebro Digital
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-accent/10 blur-3xl" />
            <img
              src={heroBrain}
              alt="Cérebro digital de IA conectado a exames de imagem ortopédicos"
              width={1200}
              height={1200}
              className="relative rounded-2xl border border-border shadow-[var(--shadow-card)]"
            />
          </div>
        </div>
      </section>

      {/* Dor */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-24">
        <h2 className="text-3xl font-bold md:text-4xl">
          A rotina clínica não te dá tempo para ler dezenas de artigos por semana.
        </h2>
        <div className="mt-8 space-y-5 text-lg text-muted-foreground">
          <p>
            Entre atendimentos, evoluções e retornos, sobra pouco tempo. E aí vem a
            insegurança na hora de montar o plano de tratamento: será que essa é mesmo a
            melhor conduta?
          </p>
          <p>
            O paciente percebe essa hesitação. Quando falta convicção na sua explicação, ele
            não fecha o pacote de sessões — e você perde faturamento por algo que não é falta
            de competência, é falta de tempo.
          </p>
          <p className="font-semibold text-foreground">
            A solução não é acumular mais PDFs estáticos. É ter a resposta certa, na hora
            certa.
          </p>
        </div>
      </section>

      {/* Solução */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
          <h2 className="text-3xl font-bold md:text-4xl">
            Conheça o <span className="glow-text">Cérebro Digital Ortopedia</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Este não é um e-book estático, mas um ambiente interativo hospedado na
            inteligência artificial do Google. Reuni a nata das evidências científicas das
            principais patologias ortopédicas para você basear suas condutas na melhor
            literatura em poucos cliques.
          </p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <h2 className="text-3xl font-bold md:text-4xl">
          Como você vai usar o Cérebro Digital na prática:
        </h2>
        <ol className="mt-12 grid gap-6 md:grid-cols-2">
          {passos.map((p) => (
            <li
              key={p.n}
              className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]"
            >
              <span className="font-display text-3xl font-bold text-accent">{p.n}</span>
              <h3 className="mt-3 text-xl font-semibold">{p.titulo}</h3>
              <p className="mt-2 text-muted-foreground">{p.texto}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Bônus */}
      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-24">
        <div className="rounded-3xl border border-accent/40 bg-accent/[0.07] p-8 md:p-12">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Bônus exclusivo
          </span>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Bônus Especial: O Prompt de Ouro da Avaliação
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Ao garantir seu acesso hoje, você recebe o meu prompt validado para usar no
            Gemini. Ele transforma as suas anotações bagunçadas de avaliação em um resumo
            clínico estruturado em segundos.
          </p>
        </div>
      </section>

      {/* Oferta */}
      <section id="oferta" className="surface-glow border-y border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
          <h2 className="text-3xl font-bold md:text-5xl">
            Tudo isso pelo valor de uma única sessão sua.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Fechando um só plano de tratamento com a segurança da nossa ferramenta, ela já se
            paga no primeiro paciente!
          </p>

          <div className="mx-auto mt-12 max-w-md rounded-3xl border border-border bg-card p-10 shadow-[var(--shadow-card)]">
            <p className="text-muted-foreground line-through">De R$ 497,00</p>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-accent">
              por apenas
            </p>
            <p className="font-display text-5xl font-bold md:text-6xl">R$ 197,00</p>
            <p className="mt-3 text-muted-foreground">à vista ou em 12x no cartão</p>
            <Button variant="cta" size="xl" className="mt-8 w-full" asChild>
              <a href="https://pay.kiwify.com.br/Luvd6Lr" target="_blank" rel="noopener noreferrer">
                Garantir meu acesso agora
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-24">
        <h2 className="text-3xl font-bold md:text-4xl">Perguntas frequentes</h2>
        <Accordion type="single" collapsible className="mt-8">
          <AccordionItem value="q1">
            <AccordionTrigger className="text-base md:text-lg">
              Como vou receber o acesso?
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              A liberação é feita manualmente pela nossa equipe para garantir a sua
              privacidade. Após a compra, você enviará seu Gmail para nosso suporte e
              receberá o convite oficial do Google NotebookLM.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger className="text-base md:text-lg">
              Outros alunos podem ver minhas pesquisas?
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              Não! A ferramenta cria um ambiente 100% individual e privado. Ninguém terá
              acesso aos seus casos clínicos.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/40">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row">
          <p>Método BR Recovery - Todos os direitos reservados.</p>
          <nav className="flex gap-6">
            <a href="/termos" className="transition-colors hover:text-accent">
              Termos de Uso
            </a>
            <a href="/privacidade" className="transition-colors hover:text-accent">
              Políticas de Privacidade
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
