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
      "Tire qualquer tipo de dúvida, desde avaliações complexas, prescrições de exercícios, até condutas baseadas em evidência para qualquer quadro dentro da área de ortopedia.",
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
      {/* Navbar fixa */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <span className="font-display text-base font-bold tracking-tight">
            Cérebro Digital <span className="glow-text">Ortopedia</span>
          </span>
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
            <a href="#dor" className="transition-colors hover:text-accent">Sobre</a>
            <a href="#como-funciona" className="transition-colors hover:text-accent">Como funciona</a>
            <a href="#bonus" className="transition-colors hover:text-accent">Bônus</a>
            <a href="#oferta" className="transition-colors hover:text-accent">Preço</a>
          </nav>
          <Button variant="cta" size="sm" asChild>
            <a href="https://pay.kiwify.com.br/Luvd6Lr" target="_blank" rel="noopener noreferrer">
              Quero acessar
            </a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="surface-glow relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Para fisioterapeutas
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-[1.1] md:text-5xl">
              Pare de perder horas pesquisando artigos.{" "}
              <span className="glow-text">O seu novo Cérebro Digital em Ortopedia</span>{" "}
              chegou.
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
              Um ambiente interativo com as melhores evidências científicas. Com a IA, você
              "conversa" com os artigos e resolve casos clínicos reais em segundos.
            </p>
            <div className="mt-6">
              <Button variant="cta" size="xl" asChild>
                <a href="https://pay.kiwify.com.br/Luvd6Lr" target="_blank" rel="noopener noreferrer">
                  Quero acessar o Cérebro Digital
                </a>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2rem] bg-accent/10 blur-3xl" />
            <img
              src={heroBrain}
              alt="Cérebro digital de IA conectado a exames de imagem ortopédicos"
              width={1200}
              height={1200}
              className="relative aspect-square w-full rounded-2xl border border-border object-cover shadow-[var(--shadow-card)]"
            />
          </div>
        </div>
      </section>

      {/* Dor */}
      <section id="dor" className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h2 className="text-2xl font-bold md:text-4xl">
          A rotina clínica não te dá tempo para ler dezenas de artigos por semana.
        </h2>
        <div className="mt-7 max-w-3xl space-y-5 text-justify text-base text-muted-foreground md:text-lg">
          <p>
            Entre atendimentos, evoluções e retornos, sobra pouco tempo. E aí vem a{" "}
            <span className="font-semibold text-accent">insegurança</span> na hora de montar
            o plano de tratamento: será que essa é mesmo a melhor conduta?
          </p>
          <p>
            O paciente percebe essa hesitação. Quando falta convicção na sua explicação, ele
            não fecha o pacote de sessões — e você{" "}
            <span className="font-semibold text-accent">perde faturamento</span> por algo que
            não é falta de competência, é falta de tempo.
          </p>
        </div>
        <div className="mt-6 rounded-2xl border border-accent/40 bg-accent/[0.06] p-6 shadow-[var(--shadow-card)]">
          <p className="text-justify text-base font-semibold text-foreground md:text-lg">
            A solução não é acumular mais PDFs estáticos. É ter a resposta certa, na hora
            certa.
          </p>
        </div>
      </section>

      {/* Solução */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-3xl px-6 py-14 md:py-16">
          <h2 className="text-2xl font-bold md:text-4xl">
            Conheça o <span className="glow-text">Cérebro Digital Ortopedia</span>
          </h2>
          <p className="mt-5 max-w-3xl text-justify text-base text-muted-foreground md:text-lg">
            Este não é um e-book estático, mas um ambiente interativo hospedado na
            inteligência artificial do Google. Reuni a nata das evidências científicas das
            principais patologias ortopédicas para você basear suas condutas na melhor
            literatura em poucos cliques.
          </p>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="text-2xl font-bold md:text-4xl">
          Como você vai usar o Cérebro Digital na prática:
        </h2>
        <ol className="mt-9 grid gap-5 md:grid-cols-2">
          {passos.map((p) => (
            <li
              key={p.n}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-7"
            >
              <span className="font-display text-2xl font-bold text-accent">{p.n}</span>
              <h3 className="mt-2.5 text-lg font-semibold md:text-xl">{p.titulo}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                {p.texto}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Bônus */}
      <section id="bonus" className="mx-auto max-w-5xl px-6 pb-16 md:pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-accent/60 bg-gradient-to-br from-accent/[0.14] via-card to-accent/[0.05] p-8 shadow-[0_0_60px_-15px_theme(colors.accent/0.5)] md:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent">
            🎁 Bônus exclusivo
          </span>
          <h2 className="mt-4 text-2xl font-bold md:text-4xl">
            Bônus Especial: O <span className="glow-text">Prompt de Ouro</span> da Avaliação
          </h2>
          <p className="mt-4 max-w-2xl text-justify text-base text-muted-foreground md:text-lg">
            Ao garantir seu acesso hoje, você recebe o meu prompt validado para usar no
            Gemini. Ele transforma as suas anotações bagunçadas de avaliação em um resumo
            clínico estruturado em segundos.
          </p>
        </div>
      </section>

      {/* Oferta */}
      <section id="oferta" className="surface-glow border-y border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <h2 className="text-2xl font-bold md:text-5xl">
            Tudo isso pelo valor de uma única sessão sua.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-justify text-base text-muted-foreground md:text-lg">
            Fechando um só plano de tratamento com a segurança da nossa ferramenta, ela já se
            paga no primeiro paciente!
          </p>

          <div className="mx-auto mt-8 max-w-md rounded-3xl border border-accent/40 bg-card p-8 shadow-[0_0_50px_-18px_theme(colors.accent/0.6)] md:p-10">
            <div className="flex items-center justify-center gap-3">
              <p className="text-base text-muted-foreground line-through">De R$ 497,00</p>
              <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-accent">
                por apenas
              </span>
            </div>
            <p className="font-display mt-2 text-5xl font-bold md:text-6xl">R$ 197,00</p>
            <p className="mt-2 text-sm text-muted-foreground">à vista ou em 12x no cartão</p>
            <Button variant="cta" size="xl" className="mt-6 w-full" asChild>
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
