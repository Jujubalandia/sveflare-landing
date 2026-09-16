// Content + copy for the sveflare landing page.
// Design language derived from `rh-harness-landing`; subject and content are
// new. Terminal output stays in English in every language, as terminals are.

export type Lang = "en" | "pt" | "es";
export type TabKey = "add" | "validate" | "dump";
export type LineKind = "cmd" | "ok" | "warn" | "fail" | "dim" | "";

export interface LangText {
  badge: string;
  navLifecycle: string;
  navFeatures: string;
  navDemo: string;
  navStart: string;
  navContribute: string;
  ctaGithub: string;
  copy: string;
  copied: string;
  heroKicker: string;
  heroTitleA: string;
  heroTitleB: string;
  heroLead: string;
  heroWink: string;
  heroCta1: string;
  heroCta2: string;
  figCaption: string;
  figNote: string;
  stats: [string, string, string, string];
  lifeKicker: string;
  lifeTitle: string;
  lifeLead: string;
  phases: [string, string][];
  gates: [string, string, string][];
  featKicker: string;
  featTitle: string;
  features: [string, string, string[]][];
  termKicker: string;
  termTitle: string;
  termLead: string;
  tabHints: [string, string, string];
  startKicker: string;
  startTitle: string;
  startLead: string;
  startNote: string;
  steps: [string, string][];
  contribKicker: string;
  contribTitle: string;
  contribLead: string;
  contribBug: string;
  contribFeat: string;
  contribute: [string, string][];
}

/** Terminal transcripts, shown identically in every language. */
export const SCRIPTS: Record<TabKey, [string, LineKind][]> = {
  add: [
    ["$ dsh plugin --profile web add \\", "cmd"],
    ["    @jujubalandia/dsh-sveltekit-cloudflare", "cmd"],
    ["", ""],
    ["→ resolving bundle …", "dim"],
    ["  ✓ appended to dsh.profile.bundles", "ok"],
    ["  ✓ 12 skills discovered in .agents/skills", "ok"],
    ["  ✓ 5 commands registered from lib/commands.mjs", "ok"],
    ["  ✓ hooks bridge mounted (PreToolUse, PostToolUse)", "ok"],
    ["", ""],
    ["Ready. Next: dsh web", "dim"],
  ],
  validate: [
    ["$ node scripts/validate-kit.mjs", "cmd"],
    ["", ""],
    ["  skills:  12", "dim"],
    ["  scripts: 8 .sh", "dim"],
    ["  patch:   ./cordis.patch.yml", "dim"],
    ["", ""],
    ["✅ bundle intact", "ok"],
    ["", ""],
    ["$ # now the same check on a bundle that only looks installed", "cmd"],
    ["", ""],
    ["  ❌ cordis.patch.yml: top-level entry 'skills' declares a name", "fail"],
    ["     without 'insert:' and adds no plugin at all", "dim"],
    ["  ❌ skills/cloudflare-d1/SKILL.md: no YAML frontmatter,", "fail"],
    ["     so the harness ignores the file", "dim"],
    ["", ""],
    ["2 problems found.", "fail"],
  ],
  dump: [
    ["$ dsh --profile web --dump-config | grep sveflare", "cmd"],
    ["", ""],
    ["- id: sveflare-commands", "ok"],
    ["  name: './lib/commands.mjs'", "ok"],
    ["  config:", "dim"],
    ["    commands:", "dim"],
    ["      - name: sveflare-spec", "dim"],
    ["      - name: sveflare-plan", "dim"],
    ["      - name: sveflare-goal", "dim"],
    ["      - name: sveflare-verify", "dim"],
    ["      - name: sveflare-ship", "dim"],
    ["", ""],
    ["- id: sveflare-hooks", "ok"],
    ["  name: '@deepseek-ai/dsh-hooks-claude-code'", "ok"],
    ["  config:", "dim"],
    ["    configPath: './.agents/hooks.json'", "dim"],
  ],
};

/** Line colors for the dark terminal surface. One accent family, no second hue. */
export const LINE_COLOR: Record<LineKind, string> = {
  cmd: "#f7e9dc",
  ok: "#e8bb92",
  warn: "#e0cf9a",
  fail: "#e39a7d",
  dim: "rgba(247,233,220,.52)",
  "": "transparent",
};

export const INSTALL =
  "dsh plugin --profile web add @jujubalandia/dsh-sveltekit-cloudflare";

export const CODE: Record<string, string> = {
  s1: "node -v     # 22.12 or newer\npnpm -v     # 9 or newer\ndsh --version",
  s2:
    "dsh plugin --profile web add \\\n  @jujubalandia/dsh-sveltekit-cloudflare\n\n# or install straight from git\n# and pin a commit\ndsh plugin --profile web add \\\n  github:Jujubalandia/dsh-sveltekit-cloudflare",
  s3: "node scripts/validate-kit.mjs\ndsh --profile web --dump-config | grep sveflare",
  s4: "dsh web\n> /sveflare-spec add avatar uploads to R2",
  s5: "> /sveflare-verify\n\n# or drive it from the shell\n./scripts/verify.sh && ./scripts/security-scan.sh",
};

/** The twelve skills, mapped to the concern each one covers. */
export const DIMS: Record<Lang, string[]> = {
  en: ["Database", "Cache", "Objects", "LLM calls", "Auth", "Reactivity", "Hardening", "Leaks", "OWASP", "Complexity", "Git", "Review"],
  pt: ["Banco", "Cache", "Objetos", "Chamadas a LLM", "Auth", "Reatividade", "Hardening", "Vazamentos", "OWASP", "Complexidade", "Git", "Revisão"],
  es: ["Base de datos", "Caché", "Objetos", "Llamadas a LLM", "Auth", "Reactividad", "Hardening", "Fugas", "OWASP", "Complejidad", "Git", "Revisión"],
};

export const DIM_VALS = [
  "cloudflare-d1", "cloudflare-kv", "cloudflare-r2", "cloudflare-ai-gateway",
  "sveltekit-auth", "sveltekit-runes", "cloudflare-security", "security-leaks",
  "owasp-top10", "code-complexity", "git-flow", "agentic-code-review",
];

/** Six pipeline stages: four commands, one hook pair, one deploy gate. */
export const PHASE_META = [
  { idx: "01", days: "/sveflare-spec", doc: "docs/SPEC.md", weight: "100%" },
  { idx: "02", days: "/sveflare-plan", doc: "docs/PLAN.md", weight: "100%" },
  { idx: "03", days: "/sveflare-goal", doc: ".agents/goals/current.md", weight: "100%" },
  { idx: "04", days: "PreToolUse hook", doc: ".agents/hooks.json", weight: "100%" },
  { idx: "05", days: "/sveflare-verify", doc: "verification report", weight: "100%" },
  { idx: "06", days: "/sveflare-ship", doc: "staging, then production", weight: "100%" },
];

export const STAT_N = ["12", "5", "8", "2"];

export const LANGS: [Lang, string, string][] = [
  ["en", "EN", "English"],
  ["pt", "PT", "Português (BR)"],
  ["es", "ES", "Español"],
];

export const L: Record<Lang, LangText> = {
  en: {
    badge: "v1 · open source",
    navLifecycle: "Pipeline", navFeatures: "What ships", navDemo: "Terminal", navStart: "Install", navContribute: "Contribute",
    ctaGithub: "View on GitHub", copy: "Copy", copied: "Copied",
    heroKicker: "Built for the DeepSeek Harness",
    heroTitleA: "SvelteKit on Cloudflare, with the eight gates", heroTitleB: "already wired in.",
    heroLead: "Twelve skills, five commands, two hook bridges. Everything your agent needs for D1, KV, R2 and AI Gateway.",
    heroWink: "The validator is the point: a bundle that mounts nothing looks exactly like one that works.",
    heroCta1: "Install in three steps", heroCta2: "See the pipeline",
    figCaption: "Fig. 01 · What the bundle mounts",
    figNote: "Twelve skills, discovered from .agents/skills. No provider row to configure, no list to keep in sync.",
    stats: ["Skills that load themselves, per binding", "Commands from a sentence to production", "Security gates wired into the pipeline", "Hook bridges running on every edit"],
    lifeKicker: "The pipeline",
    lifeTitle: "Five commands carry a sentence to production.",
    lifeLead: "Each stage writes a real artifact, and the next stage refuses to start without it. Nothing stays the vague part you deal with later.",
    phases: [
      ["Spec", "One command turns a sentence into docs/SPEC.md: acceptance criteria, explicit non-goals, and the security gates this change touches."],
      ["Plan", "The spec becomes a technical plan. D1 schema, endpoints, folder layout, atomic tasks, reviewed before anyone writes code."],
      ["Goal", "Scope is frozen in .agents/goals/current.md. The agent cannot declare the task done without evidence measured against it."],
      ["Build", "Every edit fires a PreToolUse check naming the skill for that file, then a PostToolUse check that lints and runs the focused test."],
      ["Verify", "One command runs check, lint, tests, build, OWASP and complexity, then consolidates the output into a single report."],
      ["Ship", "Staging, smoke test, then production behind an approval gate. D1 migrations run in order, never by hand."],
    ],
    gates: [
      ["Load", "Skills that arrive on their own", "Twelve skills ship in the bundle. Open a D1 query and the D1 rules are already in context. No prompt engineering, no copy-paste, no remembering to load the skill first."],
      ["Guard", "Two hooks on every edit", "PreToolUse names the relevant skill and the security gates for the file you are about to touch. PostToolUse lints it and runs the focused test. Neither one can block your edit, because they are guides and not gates."],
      ["Prove", "A validator for the silent failure", "The failure mode of a harness bundle is that it installs, appears in --dump-config, and registers nothing at all. validate-kit.mjs checks the patch dialect, the skill frontmatter and the hook events, and fails loudly."],
    ],
    featKicker: "What ships",
    featTitle: "Six pieces that stop you re-deciding the same things.",
    features: [
      ["Twelve skills", "D1, KV, R2, AI Gateway, SvelteKit auth and runes, Cloudflare hardening, OWASP Top 10, secret leaks, complexity, git flow and code review. Each one a loaded body, not a stub.", ["cloudflare-*", "sveltekit-*"]],
      ["Five commands", "/sveflare-spec, /sveflare-plan, /sveflare-goal, /sveflare-verify and /sveflare-ship, registered by lib/commands.mjs from the prompts in .agents/commands/.", ["lib/commands.mjs", "ctx.commands.register"]],
      ["Hook bridges", "PreToolUse and PostToolUse mount through @deepseek-ai/dsh-hooks-claude-code. hook-dispatch.mjs turns the stdin payload into context your model actually reads.", ["hooks.json", "additionalContext"]],
      ["Eight gates", "Secrets, input validation, prepared statements, private R2 with signed URLs, AI Gateway guardrails, OWASP Top 10, prompt injection and the production approval gate.", ["pre-commit", "pre-push"]],
      ["The validator", "One script checks the manifest contract, the patch dialect, all twelve SKILL.md frontmatters, the hook events and the relative plugin paths. It is the difference between a bundle that works and one that only looks installed.", ["scripts/validate-kit.mjs"]],
      ["A project too", "There is also a wrangler config, two D1 migrations, Playwright and Stryker configs, husky hooks and a green CI. Use it as a GitHub template and the whole repository is yours.", ["Use this template", "wrangler.toml"]],
    ],
    termKicker: "Live from the terminal", termTitle: "It tells you what it mounted.",
    termLead: "Three commands matter. One installs the bundle, one proves the bundle is intact, and one shows the exact rows it inserted into your profile.",
    tabHints: ["bundle install, one command", "checks the contract, not the vibes", "what the profile actually mounts"],
    startKicker: "Get started", startTitle: "Three steps. Under two minutes.",
    startLead: "Prereqs: Node 22.12 or newer, pnpm 9, git, and a DSH install whose dsh is on your PATH.",
    startNote: "Public repo. Install it, fork it, open a PR.",
    steps: [
      ["Check the prereqs", "Node 22.12 or newer, pnpm 9, git and a DSH install with dsh on your PATH. The bundle itself has no build step, so there is nothing to compile."],
      ["Install the bundle", "One command into your profile. Or install straight from git if you would rather pin an exact commit."],
      ["Verify what was mounted", "validate-kit.mjs checks the contract locally, and --dump-config shows the two rows the bundle inserts into the composed profile."],
      ["Run a command", "Open a session and type /sveflare-spec followed by one sentence. It writes docs/SPEC.md and the pipeline starts from there."],
      ["Wire it to your project", "The repository is a GitHub template as well. Create yours from it and the wrangler config, the migrations and the husky hooks come along."],
    ],
    contribKicker: "Open source", contribTitle: "It is public now. Come break it.",
    contribLead: "Clone it, run the validator, and send the rule or the check you wish had been there. Every skill is a markdown file, so a fix is a paragraph rather than a rewrite.",
    contribBug: "Report a bug", contribFeat: "Request a skill",
    contribute: [
      ["Clone it", "HTTPS, no key. git clone https://github.com/Jujubalandia/dsh-sveltekit-cloudflare"],
      ["Prove it still works", "node scripts/validate-kit.mjs and ./test-install.sh. A PR lands with both green or it does not land."],
      ["Try it for real", "Install it into a throwaway profile and run /sveflare-goal on a small task before you open the PR."],
    ],
  },

  pt: {
    badge: "v1 · código aberto",
    navLifecycle: "Pipeline", navFeatures: "O que vem", navDemo: "Terminal", navStart: "Instalar", navContribute: "Contribuir",
    ctaGithub: "Ver no GitHub", copy: "Copiar", copied: "Copiado",
    heroKicker: "Feito para o DeepSeek Harness",
    heroTitleA: "SvelteKit na Cloudflare, com os oito portões", heroTitleB: "já ligados.",
    heroLead: "Doze skills, cinco comandos, duas pontes de hook. Tudo que seu agente precisa para D1, KV, R2 e AI Gateway.",
    heroWink: "O validador é o ponto: um bundle que não monta nada fica idêntico a um que funciona.",
    heroCta1: "Instalar em três passos", heroCta2: "Ver o pipeline",
    figCaption: "Fig. 01 · O que o bundle monta",
    figNote: "Doze skills descobertas em .agents/skills. Nenhuma linha de provider para configurar, nenhuma lista para manter em sincronia.",
    stats: ["Skills que se carregam sozinhas, por binding", "Comandos de uma frase até produção", "Portões de segurança no pipeline", "Pontes de hook em cada edição"],
    lifeKicker: "O pipeline",
    lifeTitle: "Cinco comandos levam uma frase até produção.",
    lifeLead: "Cada etapa escreve um artefato real, e a próxima se recusa a começar sem ele. Nada fica sendo a parte vaga que você resolve depois.",
    phases: [
      ["Spec", "Um comando transforma uma frase em docs/SPEC.md: critérios de aceitação, não-objetivos explícitos e os portões de segurança que esta mudança toca."],
      ["Plan", "A spec vira plano técnico. Schema D1, endpoints, estrutura de pastas, tarefas atômicas, revisados antes de alguém escrever código."],
      ["Goal", "O escopo é travado em .agents/goals/current.md. O agente não declara a tarefa concluída sem evidência medida contra ele."],
      ["Build", "Cada edição dispara um check de PreToolUse que nomeia a skill daquele arquivo, e um de PostToolUse que roda lint e o teste focado."],
      ["Verify", "Um comando roda check, lint, testes, build, OWASP e complexidade, e consolida a saída num único relatório."],
      ["Ship", "Staging, smoke test e depois produção atrás de um portão de aprovação. Migrations D1 rodam em ordem, nunca na mão."],
    ],
    gates: [
      ["Load", "Skills que chegam sozinhas", "Doze skills viajam no bundle. Abra uma query D1 e as regras de D1 já estão no contexto. Sem engenharia de prompt, sem copiar e colar, sem lembrar de carregar a skill antes."],
      ["Guard", "Dois hooks em cada edição", "O PreToolUse nomeia a skill relevante e os portões de segurança do arquivo que você está prestes a tocar. O PostToolUse roda lint e o teste focado. Nenhum dos dois bloqueia sua edição, porque são guias e não portões."],
      ["Prove", "Um validador para a falha silenciosa", "O modo de falha de um bundle de harness é instalar, aparecer no --dump-config e não registrar nada. O validate-kit.mjs checa o dialeto do patch, o frontmatter das skills e os eventos de hook, e falha alto."],
    ],
    featKicker: "O que vem junto",
    featTitle: "Seis peças que evitam você decidir as mesmas coisas de novo.",
    features: [
      ["Doze skills", "D1, KV, R2, AI Gateway, auth e runes do SvelteKit, hardening Cloudflare, OWASP Top 10, vazamento de secrets, complexidade, git flow e revisão de código. Cada uma com corpo carregado, não um stub.", ["cloudflare-*", "sveltekit-*"]],
      ["Cinco comandos", "/sveflare-spec, /sveflare-plan, /sveflare-goal, /sveflare-verify e /sveflare-ship, registrados pelo lib/commands.mjs a partir dos prompts em .agents/commands/.", ["lib/commands.mjs", "ctx.commands.register"]],
      ["Pontes de hook", "PreToolUse e PostToolUse montam via @deepseek-ai/dsh-hooks-claude-code. O hook-dispatch.mjs transforma o payload do stdin em contexto que o seu modelo realmente lê.", ["hooks.json", "additionalContext"]],
      ["Oito portões", "Secrets, validação de input, prepared statements, R2 privado com URLs assinadas, guardrails do AI Gateway, OWASP Top 10, prompt injection e o portão de aprovação de produção.", ["pre-commit", "pre-push"]],
      ["O validador", "Um script checa o contrato do manifest, o dialeto do patch, o frontmatter das doze SKILL.md, os eventos de hook e os caminhos relativos de plugin. É a diferença entre um bundle que funciona e um que só parece instalado.", ["scripts/validate-kit.mjs"]],
      ["Um projeto também", "Também vem um wrangler config, duas migrations D1, configs do Playwright e do Stryker, hooks do husky e um CI verde. Use como template do GitHub e o repositório inteiro é seu.", ["Use this template", "wrangler.toml"]],
    ],
    termKicker: "Ao vivo do terminal", termTitle: "Ele diz o que montou.",
    termLead: "Três comandos importam. Um instala o bundle, outro prova que ele está íntegro, e o terceiro mostra exatamente as linhas que ele inseriu no seu profile.",
    tabHints: ["instala o bundle num comando", "checa o contrato, não a vibe", "o que o profile realmente monta"],
    startKicker: "Começar", startTitle: "Três passos. Menos de dois minutos.",
    startLead: "Pré-requisitos: Node 22.12 ou mais novo, pnpm 9, git e um DSH com o dsh no PATH.",
    startNote: "Repositório público. Instale, faça fork, abra um PR.",
    steps: [
      ["Confira os pré-requisitos", "Node 22.12 ou mais novo, pnpm 9, git e um DSH com o dsh no PATH. O bundle não tem etapa de build, então não há nada para compilar."],
      ["Instale o bundle", "Um comando no seu profile. Ou instale direto do git, se preferir fixar um commit exato."],
      ["Verifique o que foi montado", "O validate-kit.mjs checa o contrato localmente, e o --dump-config mostra as duas linhas que o bundle insere no profile composto."],
      ["Rode um comando", "Abra uma sessão e digite /sveflare-spec seguido de uma frase. Ele escreve docs/SPEC.md e o pipeline começa dali."],
      ["Ligue no seu projeto", "O repositório também é um template do GitHub. Crie o seu a partir dele e o wrangler config, as migrations e os hooks do husky vêm junto."],
    ],
    contribKicker: "Código aberto", contribTitle: "Agora é público. Venha quebrar.",
    contribLead: "Clone, rode o validador e mande a regra ou o check que você gostaria que existisse. Cada skill é um arquivo markdown, então uma correção é um parágrafo e não uma refatoração.",
    contribBug: "Reportar um bug", contribFeat: "Pedir uma skill",
    contribute: [
      ["Clone", "HTTPS, sem chave. git clone https://github.com/Jujubalandia/dsh-sveltekit-cloudflare"],
      ["Prove que ainda funciona", "node scripts/validate-kit.mjs e ./test-install.sh. Um PR entra com os dois verdes ou não entra."],
      ["Teste de verdade", "Instale num profile descartável e rode /sveflare-goal numa tarefa pequena antes de abrir o PR."],
    ],
  },

  es: {
    badge: "v1 · código abierto",
    navLifecycle: "Pipeline", navFeatures: "Qué incluye", navDemo: "Terminal", navStart: "Instalar", navContribute: "Contribuir",
    ctaGithub: "Ver en GitHub", copy: "Copiar", copied: "Copiado",
    heroKicker: "Hecho para el DeepSeek Harness",
    heroTitleA: "SvelteKit en Cloudflare, con las ocho puertas", heroTitleB: "ya conectadas.",
    heroLead: "Doce skills, cinco comandos, dos puentes de hook. Todo lo que tu agente necesita para D1, KV, R2, AI Gateway.",
    heroWink: "El validador es el punto: un bundle que no monta nada se ve idéntico a uno que funciona.",
    heroCta1: "Instalar en tres pasos", heroCta2: "Ver el pipeline",
    figCaption: "Fig. 01 · Lo que monta el bundle",
    figNote: "Doce skills descubiertas en .agents/skills. Ninguna fila de provider que configurar, ninguna lista que mantener sincronizada.",
    stats: ["Skills que se cargan solas, por binding", "Comandos de una frase a producción", "Puertas de seguridad en el pipeline", "Puentes de hook en cada edición"],
    lifeKicker: "El pipeline",
    lifeTitle: "Cinco comandos llevan una frase hasta producción.",
    lifeLead: "Cada etapa escribe un artefacto real, y la siguiente se niega a empezar sin él. Nada queda como la parte vaga que resuelves después.",
    phases: [
      ["Spec", "Un comando convierte una frase en docs/SPEC.md: criterios de aceptación, no-objetivos explícitos y las puertas de seguridad que toca este cambio."],
      ["Plan", "La spec se vuelve plan técnico. Esquema D1, endpoints, estructura de carpetas, tareas atómicas, revisados antes de que alguien escriba código."],
      ["Goal", "El alcance se congela en .agents/goals/current.md. El agente no declara la tarea terminada sin evidencia medida contra él."],
      ["Build", "Cada edición dispara un check de PreToolUse que nombra la skill de ese archivo, y uno de PostToolUse que corre lint y el test enfocado."],
      ["Verify", "Un comando corre check, lint, tests, build, OWASP y complejidad, y consolida la salida en un solo informe."],
      ["Ship", "Staging, smoke test y después producción detrás de una puerta de aprobación. Las migrations de D1 corren en orden, nunca a mano."],
    ],
    gates: [
      ["Load", "Skills que llegan solas", "Doce skills viajan en el bundle. Abre una query de D1 y las reglas de D1 ya están en contexto. Sin ingeniería de prompt, sin copiar y pegar, sin acordarte de cargar la skill antes."],
      ["Guard", "Dos hooks en cada edición", "PreToolUse nombra la skill relevante y las puertas de seguridad del archivo que estás por tocar. PostToolUse corre lint y el test enfocado. Ninguno bloquea tu edición, porque son guías y no puertas."],
      ["Prove", "Un validador para el fallo silencioso", "El modo de fallo de un bundle de harness es instalarse, aparecer en --dump-config y no registrar nada. validate-kit.mjs revisa el dialecto del patch, el frontmatter de las skills y los eventos de hook, y falla fuerte."],
    ],
    featKicker: "Qué incluye",
    featTitle: "Seis piezas que evitan que decidas lo mismo otra vez.",
    features: [
      ["Doce skills", "D1, KV, R2, AI Gateway, auth y runes de SvelteKit, hardening de Cloudflare, OWASP Top 10, fuga de secrets, complejidad, git flow y revisión de código. Cada una con cuerpo cargado, no un stub.", ["cloudflare-*", "sveltekit-*"]],
      ["Cinco comandos", "/sveflare-spec, /sveflare-plan, /sveflare-goal, /sveflare-verify y /sveflare-ship, registrados por lib/commands.mjs desde los prompts en .agents/commands/.", ["lib/commands.mjs", "ctx.commands.register"]],
      ["Puentes de hook", "PreToolUse y PostToolUse se montan vía @deepseek-ai/dsh-hooks-claude-code. hook-dispatch.mjs convierte el payload de stdin en contexto que tu modelo sí lee.", ["hooks.json", "additionalContext"]],
      ["Ocho puertas", "Secrets, validación de input, prepared statements, R2 privado con URLs firmadas, guardrails de AI Gateway, OWASP Top 10, prompt injection y la puerta de aprobación de producción.", ["pre-commit", "pre-push"]],
      ["El validador", "Un script revisa el contrato del manifest, el dialecto del patch, el frontmatter de las doce SKILL.md, los eventos de hook y las rutas relativas de plugin. Es la diferencia entre un bundle que funciona y uno que solo parece instalado.", ["scripts/validate-kit.mjs"]],
      ["Un proyecto también", "También trae un wrangler config, dos migrations de D1, configs de Playwright y Stryker, hooks de husky y un CI en verde. Úsalo como template de GitHub y el repositorio entero es tuyo.", ["Use this template", "wrangler.toml"]],
    ],
    termKicker: "En vivo desde la terminal", termTitle: "Te dice qué montó.",
    termLead: "Tres comandos importan. Uno instala el bundle, otro prueba que está íntegro, y el tercero muestra exactamente las filas que insertó en tu profile.",
    tabHints: ["instala el bundle en un comando", "revisa el contrato, no la vibra", "lo que el profile realmente monta"],
    startKicker: "Empezar", startTitle: "Tres pasos. Menos de dos minutos.",
    startLead: "Requisitos: Node 22.12 o superior, pnpm 9, git y un DSH con dsh en tu PATH.",
    startNote: "Repositorio público. Instálalo, haz fork, abre un PR.",
    steps: [
      ["Revisa los requisitos", "Node 22.12 o superior, pnpm 9, git y un DSH con dsh en tu PATH. El bundle no tiene paso de build, así que no hay nada que compilar."],
      ["Instala el bundle", "Un comando en tu profile. O instálalo directo desde git si prefieres fijar un commit exacto."],
      ["Verifica qué se montó", "validate-kit.mjs revisa el contrato en local, y --dump-config muestra las dos filas que el bundle inserta en el profile compuesto."],
      ["Corre un comando", "Abre una sesión y escribe /sveflare-spec seguido de una frase. Escribe docs/SPEC.md y el pipeline arranca desde ahí."],
      ["Conéctalo a tu proyecto", "El repositorio también es un template de GitHub. Crea el tuyo a partir de él y el wrangler config, las migrations y los hooks de husky vienen incluidos."],
    ],
    contribKicker: "Código abierto", contribTitle: "Ya es público. Ven a romperlo.",
    contribLead: "Clónalo, corre el validador y manda la regla o el check que te habría gustado tener. Cada skill es un archivo markdown, así que un arreglo es un párrafo y no una refactorización.",
    contribBug: "Reportar un bug", contribFeat: "Pedir una skill",
    contribute: [
      ["Clónalo", "HTTPS, sin llave. git clone https://github.com/Jujubalandia/dsh-sveltekit-cloudflare"],
      ["Prueba que sigue funcionando", "node scripts/validate-kit.mjs y ./test-install.sh. Un PR entra con los dos en verde o no entra."],
      ["Pruébalo de verdad", "Instálalo en un profile desechable y corre /sveflare-goal en una tarea pequeña antes de abrir el PR."],
    ],
  },
};
