import { CurriculumDay } from '../types/curriculum';

export const MONTH_1_DAYS: CurriculumDay[] = [
  {
    day: 1,
    month: 1,
    week: 1,
    domainId: 'models',
    title: 'Exam Blueprint, 7 Domains & Study System Setup',
    shortSummary: 'Understand the CCAO-F exam format, scoring rubric (720/1000 passing), 7 syllabus domains, and establish your 90-day study habit.',
    timeAllocation: { conceptMinutes: 25, handsOnMinutes: 25, reviewMinutes: 10 },
    learningObjectives: [
      'Analyze the 7 domains and their weightings (Output Evaluation 21% is highest)',
      'Understand the 60-question, 120-minute exam format',
      'Set up a dedicated Claude test environment and study folder'
    ],
    conceptGuide: 'The Claude Certified Associate (Foundations) (CCAO-F) validates practical judgment in applying Claude to business and knowledge workflows. Unlike developer certifications focused on APIs, CCAO-F tests model selection, prompting discipline, output verification, project knowledge management, and AI governance.',
    handsOnExercise: {
      taskName: 'Baseline Environment Setup',
      instructions: 'Open your Claude interface (claude.ai or Claude Desktop). Create a dedicated workspace or project folder titled "CCAO-F Preparation". Test a simple multi-step prompt.',
      promptTemplate: 'You are an expert AI certification advisor. Summarize the key competencies tested in practical business AI workflows.',
      expectedOutcome: 'Familiarity with Claude response structure, token rendering, and artifact triggers.'
    },
    tasks: [
      { id: 'd1-t1', text: 'Read the official CCAO-F exam blueprint and note the 7 weighted domains', durationMinutes: 15 },
      { id: 'd1-t2', text: 'Configure personal study schedule (1 hour daily focus block)', durationMinutes: 10 },
      { id: 'd1-t3', text: 'Run baseline prompts in Claude and observe markdown/artifact generation', durationMinutes: 25 },
      { id: 'd1-t4', text: 'Record initial confidence rating across the 7 domains', durationMinutes: 10 }
    ],
    mentorTip: 'Output Evaluation accounts for 21% of the total score. Memorize the 7 domain weights early so you allocate proportionate focus.',
    examTrapWarning: 'Do not assume this is a pure developer API exam. It heavily emphasizes business judgment, error detection, and ethical constraints.'
  },
  {
    day: 2,
    month: 1,
    week: 1,
    domainId: 'models',
    title: 'The Claude Model Family: Haiku, Sonnet & Opus Matrix',
    shortSummary: 'Deconstruct latency, cost, and intelligence trade-offs across Claude 3.5 Haiku, Claude 3.5/3.7 Sonnet, and Claude 3 Opus.',
    timeAllocation: { conceptMinutes: 25, handsOnMinutes: 25, reviewMinutes: 10 },
    learningObjectives: [
      'Compare Haiku, Sonnet, and Opus for latency vs capability',
      'Identify ideal enterprise use cases for each model tier',
      'Understand pricing ratios and throughput constraints'
    ],
    conceptGuide: 'Anthropic structures its model family across three distinct tiers: Haiku (lightning-fast, lightweight tasks, triage, high-volume), Sonnet (the balanced workhorse for coding, advanced reasoning, and enterprise analysis), and Opus (maximum reasoning depth for intricate multi-domain synthesis).',
    handsOnExercise: {
      taskName: 'Model Comparison Stress Test',
      instructions: 'Submit the same analytical prompt to Haiku and Sonnet. Measure generation speed, structural nuance, and depth of reasoning.',
      promptTemplate: 'Analyze the trade-offs of centralized vs decentralized data governance in a multinational bank with 40,000 employees.',
      expectedOutcome: 'Observe Haiku concise bullet summaries vs Sonnet deep systemic risk evaluation.'
    },
    tasks: [
      { id: 'd2-t1', text: 'Study the comparative matrix of Haiku vs Sonnet vs Opus', durationMinutes: 20 },
      { id: 'd2-t2', text: 'Execute identical prompts on Haiku vs Sonnet to observe response fidelity', durationMinutes: 25 },
      { id: 'd2-t3', text: 'Create a one-page cheat sheet on model selection rules for exam questions', durationMinutes: 15 }
    ],
    mentorTip: 'In CCAO-F exam questions, if high speed and low cost for repetitive classification are mentioned, Haiku is almost always the answer.',
    examTrapWarning: 'Avoid defaulting to the biggest model for every task. Exam questions test efficiency and cost-awareness.'
  },
  {
    day: 3,
    month: 1,
    week: 1,
    domainId: 'models',
    title: 'Context Windows (200k Tokens) & Attention Economics',
    shortSummary: 'Master 200,000 token context window capabilities, tokenization mathematics, and attention distribution (Needle in a Haystack).',
    timeAllocation: { conceptMinutes: 20, handsOnMinutes: 30, reviewMinutes: 10 },
    learningObjectives: [
      'Calculate approximate word-to-token conversions (1 token ≈ 0.75 words)',
      'Understand Anthropic needle-in-a-haystack retrieval performance',
      'Recognize how context degradation and attention dilution occur'
    ],
    conceptGuide: 'Claude features an industry-leading 200k token context window (~150,000 words or 500 pages of text). However, placing critical instructions at the top vs bottom of a large context impacts prompt adherence.',
    handsOnExercise: {
      taskName: 'Long-Context Ingestion Drill',
      instructions: 'Upload a 30-page PDF or financial quarterly report to Claude. Query for obscure data points embedded deep in footnote tables.',
      promptTemplate: 'Based strictly on the uploaded report, what was the specific capital expenditure variance noted in Footnote 14?',
      expectedOutcome: 'Evaluate Claude exact citation retrieval without external hallucination.'
    },
    tasks: [
      { id: 'd3-t1', text: 'Review token mechanics and Anthropic 200K window benchmarks', durationMinutes: 20 },
      { id: 'd3-t2', text: 'Test document retrieval with embedded specific details', durationMinutes: 30 },
      { id: 'd3-t3', text: 'Document attention distribution findings in your notes', durationMinutes: 10 }
    ],
    mentorTip: 'Place reference documents inside <documents> or <context> tags, and put the specific user query at the very end of the prompt for optimal recall.',
    examTrapWarning: 'Just because Claude has a 200k window does not mean you should flood it with irrelevant data. Context noise reduces precision.'
  },
  {
    day: 4,
    month: 1,
    week: 1,
    domainId: 'models',
    title: 'Claude Interfaces: Web Chat, Projects, Workbench & Desktop',
    shortSummary: 'Understand the distinct surfaces of the Claude ecosystem and when each is appropriate for business vs developer tasks.',
    timeAllocation: { conceptMinutes: 25, handsOnMinutes: 25, reviewMinutes: 10 },
    learningObjectives: [
      'Differentiate standard Chat from Claude Projects and Workbench',
      'Understand Claude Desktop capabilities and local app integration',
      'Map team collaboration features in Claude Team/Enterprise plans'
    ],
    conceptGuide: 'Claude is accessible via web chat (claude.ai), Claude Projects (team knowledge bases), Claude Desktop (local integration), and Console/Workbench (developer prototyping). Foundations exam focuses on the web and project interfaces.',
    handsOnExercise: {
      taskName: 'Interface Navigation & Feature Audit',
      instructions: 'Explore Claude Projects tab, Project Knowledge repository, and Project Custom Instructions.',
      promptTemplate: 'Draft a project charter for standardizing weekly executive summaries.',
      expectedOutcome: 'Understand where persistent system instructions reside in Claude Projects.'
    },
    tasks: [
      { id: 'd4-t1', text: 'Map feature differences between Free, Pro, Team, and Enterprise Claude', durationMinutes: 25 },
      { id: 'd4-t2', text: 'Inspect Project interface settings and knowledge upload caps', durationMinutes: 25 },
      { id: 'd4-t3', text: 'Write down key interface boundaries tested in CCAO-F', durationMinutes: 10 }
    ],
    mentorTip: 'Questions about persistent company tone and shared departmental knowledge point directly to Claude Projects.',
    examTrapWarning: 'Do not confuse developer system prompts in the API with Project Custom Instructions in Claude Pro/Team.'
  },
  {
    day: 5,
    month: 1,
    week: 1,
    domainId: 'models',
    title: 'Artifacts Masterclass: Triggers, Formats & Separation',
    shortSummary: 'Learn when Claude triggers Artifacts (React, SVG, code snippets, markdown, HTML) versus standard conversational inline responses.',
    timeAllocation: { conceptMinutes: 25, handsOnMinutes: 25, reviewMinutes: 10 },
    learningObjectives: [
      'Memorize the criteria Claude uses to generate Artifacts',
      'Differentiate stand-alone substantial content (>15 lines) from inline chat',
      'Interact with live visual components, SVGs, and code renderers'
    ],
    conceptGuide: 'Artifacts appear in a dedicated side-by-side window when the response is substantial (>15 lines of code or complex content), self-contained, and meant to be modified or reused. Short responses or conversational replies remain inline.',
    handsOnExercise: {
      taskName: 'Artifact Trigger Testing',
      instructions: 'Prompt Claude to create an interactive KPI dashboard component and observe the Artifact panel generation.',
      promptTemplate: 'Create an interactive React component showing sales conversion by channel with filter tabs.',
      expectedOutcome: 'Dedicated Artifact preview window opens with functional interactivity.'
    },
    tasks: [
      { id: 'd5-t1', text: 'Study Anthropic official Artifact guidelines and trigger heuristics', durationMinutes: 20 },
      { id: 'd5-t2', text: 'Prompt Claude for 3 distinct Artifact types (SVG, React component, Markdown doc)', durationMinutes: 30 },
      { id: 'd5-t3', text: 'Test updating an existing artifact vs generating a new one', durationMinutes: 10 }
    ],
    mentorTip: 'Exam questions often ask: "Which user request will trigger an Artifact?" Look for substantial standalone code, SVGs, or modular diagrams.',
    examTrapWarning: 'Short 3-line code explanations or casual chat do NOT trigger an artifact.'
  },
  {
    day: 6,
    month: 1,
    week: 1,
    domainId: 'models',
    title: 'Artifacts Iteration, Versioning & Exporting',
    shortSummary: 'Iterate on existing Artifacts, inspect version history, toggle code view, and export assets for production use.',
    timeAllocation: { conceptMinutes: 20, handsOnMinutes: 30, reviewMinutes: 10 },
    learningObjectives: [
      'Iterate on an existing Artifact without rewriting from scratch',
      'Navigate version history in the Artifact panel',
      'Download and publish Artifacts for external stakeholders'
    ],
    conceptGuide: 'Artifacts maintain a version timeline. Users can toggle between versions, inspect raw source code, preview live execution, and copy or download outputs directly.',
    handsOnExercise: {
      taskName: 'Iterative Artifact Refinement',
      instructions: 'Take the artifact generated on Day 5 and give specific modification instructions.',
      promptTemplate: 'Update the KPI dashboard to add an export to CSV button and dark mode styling.',
      expectedOutcome: 'Observe version 2 created with targeted differential changes.'
    },
    tasks: [
      { id: 'd6-t1', text: 'Review artifact version navigation controls', durationMinutes: 15 },
      { id: 'd6-t2', text: 'Perform 3 successive iterations on a single artifact', durationMinutes: 30 },
      { id: 'd6-t3', text: 'Export artifact source code and examine clean modularity', durationMinutes: 15 }
    ],
    mentorTip: 'Notice how Claude updates the whole artifact cleanly rather than giving diff patches.',
    examTrapWarning: 'Remember that Artifacts are sandboxed client-side; they cannot make external network calls or persist to external databases.'
  },
  {
    day: 7,
    month: 1,
    week: 1,
    domainId: 'models',
    title: 'Week 1 Milestone: Architecture & Model Selection Mastery',
    shortSummary: 'Synthesize Week 1 knowledge, pass the Model Selection & Interfaces mini-quiz, and unlock the first milestone badge.',
    timeAllocation: { conceptMinutes: 15, handsOnMinutes: 30, reviewMinutes: 15 },
    learningObjectives: [
      'Review all Week 1 concepts (Haiku/Sonnet/Opus, Context, Artifacts)',
      'Complete 10 timed practice questions on Domain 5',
      'Reflect on key exam traps identified in Week 1'
    ],
    conceptGuide: 'End of Week 1 review consolidates model selection guidelines. At this point, you should be able to instantly identify whether Haiku, Sonnet, or Opus is required for any business scenario.',
    handsOnExercise: {
      taskName: 'Week 1 Timed Knowledge Drill',
      instructions: 'Review 5 enterprise scenarios and select the optimal model tier and interface.',
      expectedOutcome: 'Achieve 90%+ accuracy on model selection scenarios.'
    },
    tasks: [
      { id: 'd7-t1', text: 'Synthesize Week 1 flashcard concepts', durationMinutes: 15 },
      { id: 'd7-t2', text: 'Complete Week 1 milestone quiz drill', durationMinutes: 30 },
      { id: 'd7-t3', text: 'Audit errors and update personal study notes', durationMinutes: 15 }
    ],
    mentorTip: 'Celebrate completing Week 1! You have mastered the foundational building blocks of the Claude ecosystem.',
    examTrapWarning: 'Do not rush past model selection—it represents 12% of the exam and provides quick, high-confidence points.',
    isMilestone: true,
    milestoneTitle: 'Model Strategist (Week 1 Cleared)',
    milestoneReward: 'Badge: Model Strategist Unlocked'
  },
  {
    day: 8,
    month: 1,
    week: 2,
    domainId: 'prompting',
    title: 'Anatomy of an Enterprise Claude Prompt',
    shortSummary: 'Dissect the 5 essential components: Role Framing, Context, Concrete Task, Constraints, and Output Specification.',
    timeAllocation: { conceptMinutes: 25, handsOnMinutes: 25, reviewMinutes: 10 },
    learningObjectives: [
      'Deconstruct the 5 structural layers of high-performance Claude prompts',
      'Avoid vague instructions like "be detailed" or "make it good"',
      'Establish explicit constraints and boundaries'
    ],
    conceptGuide: 'Claude performs best when provided with clear role framing, contextual background, unambiguous task definitions, rigid constraints, and exact output format targets.',
    handsOnExercise: {
      taskName: 'Prompt Refactoring Lab',
      instructions: 'Transform a naive 1-sentence business request into a structured enterprise prompt.',
      promptTemplate: 'Original: "Summarize this contract." -> Refactored: Role + Context + Task + Negative constraints + Output schema.',
      expectedOutcome: 'Compare naive output with structured output clarity and precision.'
    },
    tasks: [
      { id: 'd8-t1', text: 'Study Anthropic Prompt Engineering Interactive Tutorial principles', durationMinutes: 25 },
      { id: 'd8-t2', text: 'Refactor 3 common business prompts into the 5-part structure', durationMinutes: 25 },
      { id: 'd8-t3', text: 'Document prompt formatting rules in your notes', durationMinutes: 10 }
    ],
    mentorTip: 'Always be clear and direct with Claude. Claude does not need flattery or emotional cajoling—it needs clear instructions.',
    examTrapWarning: 'Vague prompts lead to hallucinated assumptions. The exam tests your ability to spot under-specified prompts.'
  },
  {
    day: 9,
    month: 1,
    week: 2,
    domainId: 'prompting',
    title: 'XML Tags Deep-Dive: <context>, <instructions>, <input>',
    shortSummary: 'Master Anthropic standard XML tag discipline to prevent prompt injection and separate data from instructions.',
    timeAllocation: { conceptMinutes: 25, handsOnMinutes: 25, reviewMinutes: 10 },
    learningObjectives: [
      'Master the standard XML tags: <instructions>, <context>, <examples>, <input_data>',
      'Understand why Claude pays high semantic attention to XML tags',
      'Prevent prompt injection by wrapping untrusted user input in tags'
    ],
    conceptGuide: 'Anthropic models are explicitly fine-tuned to recognize XML tags. Using XML tags prevents Claude from confusing user instructions with document content, reducing errors by up to 40%.',
    handsOnExercise: {
      taskName: 'XML Structured Prompt Construction',
      instructions: 'Create a prompt wrapping instructions in <instructions> and messy raw email text in <email_thread>.',
      promptTemplate: '<instructions>Extract action items with owner and due date.</instructions>\n<email_thread>\n[Paste messy email thread]\n</email_thread>',
      expectedOutcome: 'Clean extraction without Claude executing any rogue commands found inside the email.'
    },
    tasks: [
      { id: 'd9-t1', text: 'Read Anthropic XML Tag documentation and examples', durationMinutes: 20 },
      { id: 'd9-t2', text: 'Construct 3 prompts utilizing nested XML structures', durationMinutes: 30 },
      { id: 'd9-t3', text: 'Self-evaluate: Did Claude respect the tag boundaries cleanly?', durationMinutes: 10 }
    ],
    mentorTip: 'Whenever you have external documents or user input, ALWAYS enclose them in descriptive XML tags.',
    examTrapWarning: 'Exam questions often ask how to safely pass untrusted customer messages to Claude: XML encapsulation is the correct answer.'
  },
  {
    day: 10,
    month: 1,
    week: 2,
    domainId: 'prompting',
    title: 'System Prompts vs User Prompts: Operational Boundaries',
    shortSummary: 'Understand the distinct roles, permissions, and behavioral persistence of System Prompts versus User Prompts.',
    timeAllocation: { conceptMinutes: 25, handsOnMinutes: 25, reviewMinutes: 10 },
    learningObjectives: [
      'Define the exact role of the System Prompt in Claude',
      'Explain how system prompts maintain persona across long chats',
      'Understand how system prompts enforce safety and formatting policies'
    ],
    conceptGuide: 'System prompts establish the meta-rules, persona, domain expertise, and non-negotiable boundaries before the user interaction begins. In Claude, system prompts hold greater behavioral authority.',
    handsOnExercise: {
      taskName: 'System Persona Calibration',
      instructions: 'Set a system prompt for a skeptical financial auditor. Observe how Claude challenges assumptions in subsequent user turns.',
      promptTemplate: 'System: You are a forensic accounting specialist. Question all unverified revenue claims.\nUser: Our startup grew 500% MoM without paid marketing.',
      expectedOutcome: 'Claude responds with skeptical, probing audit questions rather than naive agreement.'
    },
    tasks: [
      { id: 'd10-t1', text: 'Review system prompt architecture in Claude documentation', durationMinutes: 20 },
      { id: 'd10-t2', text: 'Test system prompt persistence over 5 consecutive conversation turns', durationMinutes: 30 },
      { id: 'd10-t3', text: 'Note differences between system prompts and conversation prefixes', durationMinutes: 10 }
    ],
    mentorTip: 'Use system prompts for rules that must never change throughout the conversation.',
    examTrapWarning: 'Do not put dynamic per-request documents in the system prompt; keep reference documents in the user turn within XML tags.'
  },
  {
    day: 11,
    month: 1,
    week: 2,
    domainId: 'prompting',
    title: 'Multi-Turn Conversational State & Instruction Drift',
    shortSummary: 'Manage conversation state, understand how context builds up, and mitigate instruction drift in prolonged chat sessions.',
    timeAllocation: { conceptMinutes: 25, handsOnMinutes: 25, reviewMinutes: 10 },
    learningObjectives: [
      'Explain why Claude may drift from initial constraints after 10+ turns',
      'Apply conversational reset techniques',
      'Balance stateful dialogue against fresh context windows'
    ],
    conceptGuide: 'As a conversation extends, the token count grows and earlier instructions get diluted. This is called "instruction drift". Knowing when to continue vs when to branch a new thread is a core CCAO-F skill.',
    handsOnExercise: {
      taskName: 'Instruction Drift Simulation',
      instructions: 'Start a chat with a strict rule: "Never use exclamation marks and always end with a question". Chat for 10 turns and monitor adherence.',
      expectedOutcome: 'Observe if Claude maintains the constraint and identify when drift begins.'
    },
    tasks: [
      { id: 'd11-t1', text: 'Analyze root causes of instruction drift in multi-turn dialogues', durationMinutes: 25 },
      { id: 'd11-t2', text: 'Practice re-anchoring prompts midway through a session', durationMinutes: 25 },
      { id: 'd11-t3', text: 'Formulate best practices for when to start a fresh chat', durationMinutes: 10 }
    ],
    mentorTip: 'If Claude begins ignoring a format constraint after multiple turns, start a new chat or re-state the rule explicitly.',
    examTrapWarning: 'Continuing an overloaded 50-turn chat is usually the wrong answer on the exam when errors start multiplying.'
  },
  {
    day: 12,
    month: 1,
    week: 2,
    domainId: 'prompting',
    title: 'Few-Shot Prompting & <example> Tag Structuring',
    shortSummary: 'Use high-quality examples to teach Claude complex stylistic nuances, custom classifications, and rigid output schemas.',
    timeAllocation: { conceptMinutes: 20, handsOnMinutes: 30, reviewMinutes: 10 },
    learningObjectives: [
      'Compare Zero-Shot vs Few-Shot prompting efficacy',
      'Format few-shot examples using <examples> and <example> XML tags',
      'Curate balanced, non-biased training examples for classification'
    ],
    conceptGuide: 'Few-shot prompting provides Claude with 2-5 input/output demonstrations. Anthropic explicitly recommends enclosing examples inside <examples> tags to eliminate ambiguity.',
    handsOnExercise: {
      taskName: 'Few-Shot Classification Lab',
      instructions: 'Build a prompt that classifies customer feedback into 4 specific corporate categories using 3 curated examples.',
      promptTemplate: '<examples>\n<example>\n<input>App crashed on checkout</input>\n<output>CRITICAL_BUG</output>\n</example>\n</examples>',
      expectedOutcome: 'Claude classifies novel inputs with 100% adherence to defined labels.'
    },
    tasks: [
      { id: 'd12-t1', text: 'Study Anthropic guidelines on effective example curation', durationMinutes: 20 },
      { id: 'd12-t2', text: 'Build and test a 3-shot prompt with edge cases', durationMinutes: 30 },
      { id: 'd12-t3', text: 'Document when zero-shot is sufficient vs when few-shot is mandatory', durationMinutes: 10 }
    ],
    mentorTip: 'Examples are the single most effective way to eliminate formatting errors without writing paragraphs of negative rules.',
    examTrapWarning: 'Ensure examples are diverse. If all your examples belong to one category, Claude may exhibit category bias.'
  },
  {
    day: 13,
    month: 1,
    week: 2,
    domainId: 'prompting',
    title: 'Chain-of-Thought (CoT) & Explicit <thinking> Tags',
    shortSummary: 'Guide Claude to reason step-by-step before answering, drastically reducing mathematical and logical synthesis errors.',
    timeAllocation: { conceptMinutes: 25, handsOnMinutes: 25, reviewMinutes: 10 },
    learningObjectives: [
      'Explain the computational mechanism behind Chain-of-Thought reasoning',
      'Instruct Claude to think inside <thinking> tags before producing <answer>',
      'Apply CoT to business valuation and multi-step logic problems'
    ],
    conceptGuide: 'LLMs generate text autoregressively token by token. Forcing Claude to show its work in a scratchpad or <thinking> block gives it computational tokens to formulate correct logical deductions before writing the final output.',
    handsOnExercise: {
      taskName: 'Scratchpad Reasoning Test',
      instructions: 'Give Claude a complex scheduling or resource allocation puzzle with and without a <thinking> requirement. Compare accuracy.',
      promptTemplate: 'First think through all constraints inside <thinking> tags. Then output the final schedule in <schedule>.',
      expectedOutcome: 'Substantial improvement in logical consistency when using thinking scratchpads.'
    },
    tasks: [
      { id: 'd13-t1', text: 'Review Anthropic research on scratchpads and thinking prompts', durationMinutes: 25 },
      { id: 'd13-t2', text: 'Test 3 multi-constraint business puzzles with explicit CoT', durationMinutes: 25 },
      { id: 'd13-t3', text: 'Summarize exam rules for when CoT is mandatory', durationMinutes: 10 }
    ],
    mentorTip: 'Whenever an exam question involves multi-step calculation, logic puzzles, or policy compliance, look for options that include thinking steps.',
    examTrapWarning: 'Never ask Claude to answer in 1 word immediately on complex reasoning tasks; this starves the model of generation capacity.'
  },
  {
    day: 14,
    month: 1,
    week: 2,
    domainId: 'prompting',
    title: 'Week 2 Milestone: Prompt Architecture Capstone',
    shortSummary: 'Integrate XML tags, few-shot examples, system prompts, and CoT reasoning into a complete prompt engineering portfolio.',
    timeAllocation: { conceptMinutes: 15, handsOnMinutes: 30, reviewMinutes: 15 },
    learningObjectives: [
      'Consolidate all Week 2 prompt engineering concepts',
      'Build a robust production-grade enterprise prompt',
      'Pass the Week 2 Prompting & Task Execution challenge'
    ],
    conceptGuide: 'Week 2 completes the prompt engineering foundation (14% of the exam). You now understand how to structure prompts so they produce deterministic, high-fidelity business outputs.',
    handsOnExercise: {
      taskName: 'Enterprise Prompt Review & Scorecard',
      instructions: 'Assemble an end-to-end prompt incorporating System Prompt, XML data wrapping, 2 few-shot examples, and thinking scratchpad.',
      expectedOutcome: 'Flawless execution on a complex data extraction task.'
    },
    tasks: [
      { id: 'd14-t1', text: 'Review Week 2 prompt engineering rules and syntax', durationMinutes: 15 },
      { id: 'd14-t2', text: 'Build full enterprise prompt template in Claude', durationMinutes: 30 },
      { id: 'd14-t3', text: 'Complete Week 2 checkpoint quiz', durationMinutes: 15 }
    ],
    mentorTip: 'You have mastered prompt architecture! These skills will directly safeguard against hallucinations in Month 3.',
    examTrapWarning: 'On the exam, overly complex poetic prompts are scored poorly compared to structured, XML-separated prompts.',
    isMilestone: true,
    milestoneTitle: 'Prompt Architect (Week 2 Cleared)',
    milestoneReward: 'Badge: Prompt Architect Unlocked'
  },
  {
    day: 15,
    month: 1,
    week: 3,
    domainId: 'prompting',
    title: 'Output Constraints: JSON, YAML & Strict Schema Adherence',
    shortSummary: 'Eliminate markdown code block clutter and enforce 100% parseable JSON/YAML outputs for automated downstream pipelines.',
    timeAllocation: { conceptMinutes: 25, handsOnMinutes: 25, reviewMinutes: 10 },
    learningObjectives: [
      'Constrain Claude to valid, parseable JSON without preambles or conversational text',
      'Use prompt prefill techniques (e.g. starting response with "{") in Claude API/Workbench',
      'Define strict JSON schemas in prompts'
    ],
    conceptGuide: 'Business systems require machine-readable data. Learn how to instruct Claude to output pure JSON without conversational intro text ("Sure, here is your JSON:") or closing commentary.',
    handsOnExercise: {
      taskName: 'Zero-Preamble JSON Generation',
      instructions: 'Prompt Claude to extract invoice details into strict JSON. Verify that no conversational wrapper is produced.',
      promptTemplate: 'Return ONLY valid JSON with keys: invoice_id, vendor, total_amount, items. Do not include markdown ticks or conversational text.',
      expectedOutcome: 'Clean parseable JSON payload.'
    },
    tasks: [
      { id: 'd15-t1', text: 'Study JSON formatting prompts and schema specification techniques', durationMinutes: 25 },
      { id: 'd15-t2', text: 'Test extraction across 3 invoice samples with varying formatting', durationMinutes: 25 },
      { id: 'd15-t3', text: 'Write down prompt patterns that eliminate conversational noise', durationMinutes: 10 }
    ],
    mentorTip: 'Prefilling the assistant response with "{" is the gold-standard method in Claude API to guarantee zero preamble.',
    examTrapWarning: 'Telling Claude "Do not write any introductory text" works well, but specifying the exact opening character is even more robust.'
  },
  {
    day: 16,
    month: 1,
    week: 3,
    domainId: 'prompting',
    title: 'Preamble Elimination & Tone Calibration',
    shortSummary: 'Strip polite conversational filler, adjust conciseness levels, and calibrate tone for executive-level communication.',
    timeAllocation: { conceptMinutes: 20, handsOnMinutes: 30, reviewMinutes: 10 },
    learningObjectives: [
      'Eliminate AI pleasantries ("Certainly! I would be happy to help with that...")',
      'Calibrate direct, dense executive briefing style',
      'Adjust temperature/style dials through prompt wording'
    ],
    conceptGuide: 'In business environments, unnecessary conversational filler wastes tokens, reader attention, and processing time. Effective Claude users prompt for immediate answers.',
    handsOnExercise: {
      taskName: 'Executive Brevity Calibration',
      instructions: 'Prompt Claude for a market risk assessment with explicit tone constraints: direct, dense, zero filler.',
      promptTemplate: 'Provide a 3-bullet risk summary for senior leadership. Begin directly with bullet 1 without greeting or introduction.',
      expectedOutcome: 'Direct, crisp executive bullet points without pleasantries.'
    },
    tasks: [
      { id: 'd16-t1', text: 'Identify typical LLM preamble patterns and token waste metrics', durationMinutes: 20 },
      { id: 'd16-t2', text: 'Craft 5 prompt variants testing negative tone constraints', durationMinutes: 30 },
      { id: 'd16-t3', text: 'Save successful brevity templates in personal cheat sheet', durationMinutes: 10 }
    ],
    mentorTip: 'Direct phrasing: "Answer directly without preamble or pleasantries" is recognized by Claude immediately.',
    examTrapWarning: 'Don\'t be afraid to be assertive in prompts. Claude does not have feelings and will not be offended by direct commands.'
  },
  {
    day: 17,
    month: 1,
    week: 3,
    domainId: 'workflow',
    title: 'Prompt Decomposition & Chaining Patterns',
    shortSummary: 'Break down complex, multifaceted requests into sequential prompt chains where each stage validates intermediate outputs.',
    timeAllocation: { conceptMinutes: 25, handsOnMinutes: 25, reviewMinutes: 10 },
    learningObjectives: [
      'Recognize when a task is too complex for a single prompt',
      'Design a 3-stage prompt chain (Extract -> Analyze -> Format)',
      'Inspect intermediate outputs to catch errors before final synthesis'
    ],
    conceptGuide: 'Single prompts that ask Claude to read, analyze, calculate, critique, and format all at once often result in degraded quality. Decomposing into modular chains improves accuracy and debuggability.',
    handsOnExercise: {
      taskName: '3-Step Chain Exercise',
      instructions: 'Take a messy 5-page case study. Chain: Step 1 (Extract Key Metrics) -> Step 2 (Perform SWOT Analysis) -> Step 3 (Format Executive Memo).',
      expectedOutcome: 'Significantly higher strategic depth compared to a single monolithic prompt.'
    },
    tasks: [
      { id: 'd17-t1', text: 'Study Anthropic Prompt Chaining architectural patterns', durationMinutes: 25 },
      { id: 'd17-t2', text: 'Execute the 3-step prompt chain manually in Claude', durationMinutes: 25 },
      { id: 'd17-t3', text: 'Analyze error isolation benefits of chaining', durationMinutes: 10 }
    ],
    mentorTip: 'If an exam scenario describes a high-complexity task failing inconsistently, the recommended solution is prompt chaining.',
    examTrapWarning: 'Chaining increases total token usage and latency. Only chain when accuracy on complex sub-tasks justifies the latency.'
  },
  {
    day: 18,
    month: 1,
    week: 3,
    domainId: 'prompting',
    title: 'Prompting for Long-Form Document Synthesis',
    shortSummary: 'Synthesize 50+ page documents, extract comparative themes, and demand explicit source section citations.',
    timeAllocation: { conceptMinutes: 20, handsOnMinutes: 30, reviewMinutes: 10 },
    learningObjectives: [
      'Prompt Claude to cite specific sections, page numbers, or tables from input documents',
      'Synthesize multiple conflicting documents without hallucinated reconciliation',
      'Enforce groundedness using verbatim quote requirements'
    ],
    conceptGuide: 'When analyzing long documents, instructing Claude to "include verbatim quotes from the text to justify each key finding" drastically reduces hallucinations and makes outputs verifiable.',
    handsOnExercise: {
      taskName: 'Grounded Citation Prompting',
      instructions: 'Upload two competing research abstracts. Prompt Claude to compare methodologies and cite direct quotes for every claim.',
      promptTemplate: 'Compare Paper A and Paper B. For each divergence, cite the exact sentence from <paper_a> or <paper_b> that proves the difference.',
      expectedOutcome: 'Direct, traceable citations for every analytical conclusion.'
    },
    tasks: [
      { id: 'd18-t1', text: 'Review citation and groundedness prompt design', durationMinutes: 20 },
      { id: 'd18-t2', text: 'Run multi-document synthesis with mandatory quotation rules', durationMinutes: 30 },
      { id: 'd18-t3', text: 'Audit accuracy of quotes against raw source text', durationMinutes: 10 }
    ],
    mentorTip: 'Demanding quotes forces Claude to ground its generation in the source text rather than general training memory.',
    examTrapWarning: 'Verify that quotes are actually in the source! Even models can occasionally generate plausible-sounding fake quotes.'
  },
  {
    day: 19,
    month: 1,
    week: 3,
    domainId: 'prompting',
    title: 'Negative Constraints & Prompt Anti-Patterns',
    shortSummary: 'Understand the limitations of negative constraints ("DO NOT do X") and learn how to replace them with positive specifications.',
    timeAllocation: { conceptMinutes: 25, handsOnMinutes: 25, reviewMinutes: 10 },
    learningObjectives: [
      'Explain the "pink elephant" paradox in LLM attention when using negative constraints',
      'Convert negative rules into clear positive alternative instructions',
      'Identify contradictory and self-defeating prompt constraints'
    ],
    conceptGuide: 'Telling an LLM "Do NOT mention pricing" increases the attention weight on the token "pricing". Better: "Focus exclusively on technical architecture and system integration capabilities."',
    handsOnExercise: {
      taskName: 'Negative-to-Positive Refactoring Lab',
      instructions: 'Take 5 negative constraints and rewrite each into an unambiguous positive specification.',
      promptTemplate: 'Negative: "Do not write long paragraphs." -> Positive: "Write concise 2-sentence bullet points."',
      expectedOutcome: 'Higher compliance and less erratic behavior.'
    },
    tasks: [
      { id: 'd19-t1', text: 'Study negative constraint failure patterns in prompt engineering', durationMinutes: 25 },
      { id: 'd19-t2', text: 'Refactor corporate prompt guidelines from negative to positive phrasing', durationMinutes: 25 },
      { id: 'd19-t3', text: 'Test boundary conditions on Claude with subtle phrasing shifts', durationMinutes: 10 }
    ],
    mentorTip: 'When you must use negative constraints, pair them with the exact positive behavior Claude should exhibit instead.',
    examTrapWarning: 'Prompts filled with 10 "DO NOT" statements are a common red flag in exam questions analyzing why a prompt is failing.'
  },
  {
    day: 20,
    month: 1,
    week: 3,
    domainId: 'troubleshooting',
    title: 'Troubleshooting Failed Prompts: Diagnostic Method',
    shortSummary: 'Apply a 4-step diagnostic protocol to determine why a prompt generated incomplete, inaccurate, or malformed responses.',
    timeAllocation: { conceptMinutes: 25, handsOnMinutes: 25, reviewMinutes: 10 },
    learningObjectives: [
      'Diagnose ambiguous instructions, context dilution, conflicting rules, and insufficient guidance',
      'Systematically isolate prompt failure modes',
      'Apply incremental prompt refinement'
    ],
    conceptGuide: 'When Claude outputs poor results, don\'t randomly rewrite the whole prompt. Use the diagnostic checklist: 1. Was the task ambiguous? 2. Were there conflicting constraints? 3. Did it lack examples? 4. Was context too noisy?',
    handsOnExercise: {
      taskName: 'Prompt Post-Mortem Drill',
      instructions: 'Analyze an intentionally flawed business prompt that generates erratic table columns. Fix the single root cause.',
      expectedOutcome: 'Identify the missing column delimiter constraint in <output_format>.'
    },
    tasks: [
      { id: 'd20-t1', text: 'Study the 4-step prompt troubleshooting framework', durationMinutes: 20 },
      { id: 'd20-t2', text: 'Diagnose and fix 3 broken prompt scenarios', durationMinutes: 30 },
      { id: 'd20-t3', text: 'Document common troubleshooting heuristics in study log', durationMinutes: 10 }
    ],
    mentorTip: 'Change ONE prompt variable at a time when troubleshooting. If you change 5 things at once, you won\'t know what fixed it.',
    examTrapWarning: 'Don\'t jump to changing models when a prompt fails. Usually, fixing the instruction structure solves the issue for 1/10th the cost.'
  },
  {
    day: 21,
    month: 1,
    week: 3,
    domainId: 'prompting',
    title: 'Week 3 Milestone: Prompt Optimization & Troubleshooting',
    shortSummary: 'Test your prompt optimization and diagnostic mastery with a 15-question scenario quiz and earn the Optimization Specialist badge.',
    timeAllocation: { conceptMinutes: 15, handsOnMinutes: 30, reviewMinutes: 15 },
    learningObjectives: [
      'Consolidate Week 3 concepts (Schema constraints, Preamble removal, Chaining, Diagnostics)',
      'Achieve 85%+ on Domain 4 and Domain 7 scenario questions',
      'Review mistakes and solidify prompt best practices'
    ],
    conceptGuide: 'Week 3 solidifies your prompt execution and troubleshooting mastery. You can now build deterministic business prompts and diagnose subtle failures with precision.',
    handsOnExercise: {
      taskName: 'Prompt Optimization Diagnostic Drill',
      instructions: 'Complete the Week 3 scenario drill covering JSON output enforcement, preamble removal, and prompt debugging.',
      expectedOutcome: 'High confidence on Domains 4 & 7 exam questions.'
    },
    tasks: [
      { id: 'd21-t1', text: 'Review Week 3 core takeaways and cheat sheet', durationMinutes: 15 },
      { id: 'd21-t2', text: 'Complete Week 3 diagnostic challenge quiz', durationMinutes: 30 },
      { id: 'd21-t3', text: 'Analyze question rationale and clarify edge cases', durationMinutes: 15 }
    ],
    mentorTip: 'Week 3 complete! You have conquered Prompting and Task Execution (14% of the exam).',
    examTrapWarning: 'Pay close attention to subtle wording in exam question options. Subtle differences distinguish acceptable from optimal prompts.',
    isMilestone: true,
    milestoneTitle: 'Prompt Optimization Specialist (Week 3 Cleared)',
    milestoneReward: 'Badge: Optimization Specialist Unlocked'
  },
  {
    day: 22,
    month: 1,
    week: 4,
    domainId: 'models',
    title: 'Model Selection Matrix: Cost, Speed & Capability Economics',
    shortSummary: 'Build an enterprise ROI and model selection decision tree balancing throughput, budget, and cognitive complexity.',
    timeAllocation: { conceptMinutes: 25, handsOnMinutes: 25, reviewMinutes: 10 },
    learningObjectives: [
      'Calculate token cost comparisons across Haiku, Sonnet, and Opus for 1 million input/output tokens',
      'Construct a flowchart for team model selection',
      'Understand API rate limits and tiering considerations'
    ],
    conceptGuide: 'Claude 3.5 Haiku is up to 3x cheaper and 2x faster than Sonnet, while Sonnet matches or beats Opus on many coding and reasoning benchmarks at 1/5th the price. Understanding these cost curves is crucial for business decisions.',
    handsOnExercise: {
      taskName: 'Cost-Benefit Calculation Lab',
      instructions: 'Calculate the monthly cost of processing 50,000 customer support tickets (avg 500 input tokens, 150 output tokens) on Haiku vs Sonnet.',
      expectedOutcome: 'Understand how model choice impacts enterprise operational budgets.'
    },
    tasks: [
      { id: 'd22-t1', text: 'Analyze Anthropic official pricing tables for all active models', durationMinutes: 25 },
      { id: 'd22-t2', text: 'Model the ticket processing cost simulation in a spreadsheet', durationMinutes: 25 },
      { id: 'd22-t3', text: 'Formulate 3 enterprise model selection rules of thumb', durationMinutes: 10 }
    ],
    mentorTip: 'When an exam question emphasizes processing hundreds of thousands of documents quickly on a budget, Haiku is the intended answer.',
    examTrapWarning: 'Never recommend Opus for high-volume, low-complexity sentiment classification. It is a costly anti-pattern.'
  },
  {
    day: 23,
    month: 1,
    week: 4,
    domainId: 'models',
    title: 'Deep-Dive: When to Choose Claude 3.5 Haiku',
    shortSummary: 'Analyze real-world scenarios where Haiku excels: real-time routing, rapid summarization, data extraction, and high-frequency classification.',
    timeAllocation: { conceptMinutes: 25, handsOnMinutes: 25, reviewMinutes: 10 },
    learningObjectives: [
      'Identify workload profiles uniquely suited for Haiku',
      'Test Haiku speed in multi-item classification pipelines',
      'Recognize where Haiku reaches its reasoning limits'
    ],
    conceptGuide: 'Claude 3.5 Haiku is designed for speed and cost-efficiency. It handles categorization, entity extraction, quick drafts, and content moderation in milliseconds with remarkable accuracy.',
    handsOnExercise: {
      taskName: 'Haiku Triage Pipeline Benchmark',
      instructions: 'Feed 10 mock customer tickets to Haiku. Verify accuracy in labeling priority (P1/P2/P3) and department (Billing/Tech/Sales).',
      promptTemplate: 'Classify incoming ticket into PRIORITY and DEPARTMENT in JSON: <ticket>[Insert Ticket]</ticket>',
      expectedOutcome: 'Near-instantaneous classification with high categorical accuracy.'
    },
    tasks: [
      { id: 'd23-t1', text: 'Study Haiku performance benchmarks and capability boundaries', durationMinutes: 20 },
      { id: 'd23-t2', text: 'Run customer triage simulation with Haiku', durationMinutes: 30 },
      { id: 'd23-t3', text: 'Document scenarios where Haiku fails and Sonnet is required', durationMinutes: 10 }
    ],
    mentorTip: 'Haiku is excellent for first-stage filtering in a two-stage pipeline, handing off edge cases to Sonnet.',
    examTrapWarning: 'Do not use Haiku for deep multi-page legal synthesis or complex mathematical proofs.'
  },
  {
    day: 24,
    month: 1,
    week: 4,
    domainId: 'models',
    title: 'Deep-Dive: When to Choose Claude 3.5 / 3.7 Sonnet',
    shortSummary: 'Analyze the flagship workhorse: complex coding, intricate reasoning, visual document processing, and nuanced analysis.',
    timeAllocation: { conceptMinutes: 25, handsOnMinutes: 25, reviewMinutes: 10 },
    learningObjectives: [
      'Master the broad capabilities that make Sonnet the enterprise default',
      'Evaluate Sonnet on complex coding, SQL queries, and multi-step reasoning',
      'Understand multimodal vision processing in Sonnet'
    ],
    conceptGuide: 'Sonnet represents the pinnacle of balanced intelligence. It excels at writing production code, interpreting ambiguous business briefs, and synthesizing complex multi-source documents.',
    handsOnExercise: {
      taskName: 'Sonnet Complex Reasoning Challenge',
      instructions: 'Present Sonnet with a messy database schema and request an optimized SQL query with window functions and error handling.',
      promptTemplate: 'Write an optimized PostgreSQL query calculating rolling 30-day customer retention cohort metrics.',
      expectedOutcome: 'Syntactically valid, optimal SQL query with clear reasoning annotations.'
    },
    tasks: [
      { id: 'd24-t1', text: 'Review Sonnet benchmark performance across coding and reasoning', durationMinutes: 25 },
      { id: 'd24-t2', text: 'Execute complex analysis prompt in Sonnet', durationMinutes: 25 },
      { id: 'd24-t3', text: 'Note key differentiators between Sonnet and other models', durationMinutes: 10 }
    ],
    mentorTip: 'In CCAO-F exam questions, Sonnet is the default answer for standard enterprise tasks requiring high reasoning and coding.',
    examTrapWarning: 'Remember that Sonnet is capable of multimodal vision analysis (PDFs, screenshots, charts), not just text.'
  },
  {
    day: 25,
    month: 1,
    week: 4,
    domainId: 'models',
    title: 'Deep-Dive: When to Choose Claude 3 Opus',
    shortSummary: 'Understand the specific use cases for Opus: deep philosophical synthesis, novel research formulation, and high-stakes strategy.',
    timeAllocation: { conceptMinutes: 25, handsOnMinutes: 25, reviewMinutes: 10 },
    learningObjectives: [
      'Identify the unique reasoning depth and literary nuance of Opus',
      'Distinguish high-stakes strategic formulation from everyday business tasks',
      'Evaluate cost and latency trade-offs of Opus deployment'
    ],
    conceptGuide: 'Claude 3 Opus offers unmatched depth in navigating ambiguous, multifaceted topics, complex ethical dilemmas, and high-level strategy formulation where maximum deliberation is essential.',
    handsOnExercise: {
      taskName: 'Opus Strategic Synthesis Test',
      instructions: 'Ask Opus to synthesize competing geopolitical analyses and formulate a comprehensive organizational risk posture.',
      expectedOutcome: 'Rich, multi-layered prose with deep conceptual interconnections.'
    },
    tasks: [
      { id: 'd25-t1', text: 'Study Opus use case criteria in Anthropic enterprise documentation', durationMinutes: 25 },
      { id: 'd25-t2', text: 'Compare Opus outputs against Sonnet on an ambiguous strategic brief', durationMinutes: 25 },
      { id: 'd25-t3', text: 'Summarize exam heuristics for selecting Opus', durationMinutes: 10 }
    ],
    mentorTip: 'Choose Opus on the exam only when the prompt emphasizes maximum intellectual nuance, deep research synthesis, or high-stakes strategic planning.',
    examTrapWarning: 'Because Sonnet is newer and faster, exam questions specifically test whether you know when Opus is genuinely justified.'
  },
  {
    day: 26,
    month: 1,
    week: 4,
    domainId: 'models',
    title: 'Multimodal Vision: Charts, Screenshots & Document OCR',
    shortSummary: 'Leverage Claude vision capabilities to interpret financial charts, architectural diagrams, screenshots, and scanned PDFs.',
    timeAllocation: { conceptMinutes: 20, handsOnMinutes: 30, reviewMinutes: 10 },
    learningObjectives: [
      'Upload images and multimodal documents to Claude',
      'Extract data from line charts, bar graphs, and heatmaps',
      'Recognize vision limitations (spatial measurement, tiny illegible text)'
    ],
    conceptGuide: 'Claude accepts JPEG, PNG, GIF, and WebP images. It can transcribe whiteboard diagrams into text, interpret complex trend charts, and analyze UI screenshots for usability bugs.',
    handsOnExercise: {
      taskName: 'Financial Chart Interpretation Drill',
      instructions: 'Upload a screenshot of a complex multi-line stock trend chart. Ask Claude to identify inflection points and explain trends.',
      promptTemplate: 'Analyze the attached chart. What are the key trend reversals, and what is the percentage spread between Line A and Line B at Q3?',
      expectedOutcome: 'Accurate numerical extraction and trend explanation.'
    },
    tasks: [
      { id: 'd26-t1', text: 'Review Anthropic multimodal vision guidelines and supported formats', durationMinutes: 20 },
      { id: 'd26-t2', text: 'Test 2 chart image extractions and 1 UI screenshot audit in Claude', durationMinutes: 30 },
      { id: 'd26-t3', text: 'Document vision failure modes (blurry text, dense microscopic tables)', durationMinutes: 10 }
    ],
    mentorTip: 'Claude does not possess pixel-level ruler measurement tools; it interprets visual semantics and relative spatial patterns.',
    examTrapWarning: 'Always verify numerical chart readouts manually; complex charts with multiple overlapping lines can cause misreadings.'
  },
  {
    day: 27,
    month: 1,
    week: 4,
    domainId: 'models',
    title: 'Document Analysis at Scale: Ingesting 50+ Page PDFs',
    shortSummary: 'Best practices for uploading, querying, and synthesizing large multi-page reports without hallucination or context loss.',
    timeAllocation: { conceptMinutes: 20, handsOnMinutes: 30, reviewMinutes: 10 },
    learningObjectives: [
      'Ingest multi-chapter PDFs and complex corporate manuals',
      'Direct Claude to cross-reference multiple chapters',
      'Validate that Claude did not ignore middle sections of long documents'
    ],
    conceptGuide: 'With 200k tokens, Claude easily ingests full 100-page SEC 10-K filings. Structuring your questions with chapter anchors and demanding section references ensures comprehensive analysis.',
    handsOnExercise: {
      taskName: 'SEC 10-K Deep Ingestion',
      instructions: 'Upload a public company 10-K report. Query for risk factors that were introduced or modified in the current fiscal year.',
      expectedOutcome: 'Targeted extraction of specific risk disclosures.'
    },
    tasks: [
      { id: 'd27-t1', text: 'Study long document ingestion and citation prompting strategies', durationMinutes: 20 },
      { id: 'd27-t2', text: 'Run analytical queries against a 50+ page corporate document', durationMinutes: 30 },
      { id: 'd27-t3', text: 'Audit Claude response for accuracy against document pages', durationMinutes: 10 }
    ],
    mentorTip: 'Tell Claude: "Read through the entire document before answering. Cite the page or section number for every finding."',
    examTrapWarning: 'Never assume Claude read the entire PDF without checking that its citations correlate to the actual page numbers.'
  },
  {
    day: 28,
    month: 1,
    week: 4,
    domainId: 'models',
    title: 'Month 1 Timed Practice Exam (30 Questions Mock)',
    shortSummary: 'Sit for a realistic 30-question timed practice exam simulating Domains 4 (Prompting) & 5 (Model Selection) under test conditions.',
    timeAllocation: { conceptMinutes: 10, handsOnMinutes: 40, reviewMinutes: 10 },
    learningObjectives: [
      'Experience timed exam pressure (60 minutes for 30 questions)',
      'Apply process of elimination on tricky question stems',
      'Baseline your score against the 720/1000 passing threshold'
    ],
    conceptGuide: 'Testing under time pressure reveals cognitive biases and pacing issues. Aim for 2 minutes per question. Flag difficult questions and return to them.',
    handsOnExercise: {
      taskName: 'Month 1 Mock Exam Session',
      instructions: 'Complete the Month 1 Mock Exam simulator without consulting notes. Record raw score and time taken.',
      expectedOutcome: 'Identify specific areas of weakness in Prompting or Model Selection.'
    },
    tasks: [
      { id: 'd28-t1', text: 'Review exam strategy and time management rules', durationMinutes: 10 },
      { id: 'd28-t2', text: 'Complete 30-question timed practice exam in the simulator', durationMinutes: 40 },
      { id: 'd28-t3', text: 'Review initial score and identify missed questions', durationMinutes: 10 }
    ],
    mentorTip: 'Mark questions where you were guessing vs questions where you were 100% certain.',
    examTrapWarning: 'Don\'t change answers on second thought unless you found clear factual evidence in the question stem you missed initially.'
  },
  {
    day: 29,
    month: 1,
    week: 4,
    domainId: 'troubleshooting',
    title: 'Month 1 Gap Analysis & Remediation',
    shortSummary: 'Deconstruct every question missed in the Mock Exam. Re-read foundational documentation on identified weak spots.',
    timeAllocation: { conceptMinutes: 25, handsOnMinutes: 25, reviewMinutes: 10 },
    learningObjectives: [
      'Conduct a thorough post-mortem on all missed practice questions',
      'Categorize errors: misreading the question, lack of knowledge, or tricky phrasing',
      'Update personal flashcards with remediated concepts'
    ],
    conceptGuide: 'True mastery comes from understanding why the correct answer is right AND why each distractor is wrong. Write an explicit justification for every mistake.',
    handsOnExercise: {
      taskName: 'Error Log Compilation',
      instructions: 'Build a table with 3 columns: Question Missed, What I Chose & Why, The Correct Concept & Exam Rule.',
      expectedOutcome: 'Clear remediation of misunderstandings from Month 1.'
    },
    tasks: [
      { id: 'd29-t1', text: 'Log every missed question into the Error Journal', durationMinutes: 25 },
      { id: 'd29-t2', text: 'Re-test failed question concepts with custom Claude prompts', durationMinutes: 25 },
      { id: 'd29-t3', text: 'Confirm understanding with study partner or mentor notes', durationMinutes: 10 }
    ],
    mentorTip: 'Your Error Log will be your most valuable review asset during the final week before the real exam.',
    examTrapWarning: 'Never simply look at the right answer and say "Oh, of course". Explain WHY your initial assumption was flawed.'
  },
  {
    day: 30,
    month: 1,
    week: 4,
    domainId: 'models',
    title: 'Month 1 Capstone Milestone: Foundations Mastery Certified',
    shortSummary: 'Celebrate finishing 30 days of daily 1-hour study! Review progress, unlock the Month 1 Capstone Badge, and preview Month 2.',
    timeAllocation: { conceptMinutes: 15, handsOnMinutes: 30, reviewMinutes: 15 },
    learningObjectives: [
      'Celebrate completing 30 consecutive hours of rigorous certification prep',
      'Review cumulative progress metrics (33% of 90-day plan complete)',
      'Preview Month 2: Projects, Workflows & AI Governance'
    ],
    conceptGuide: 'You have completed the first third of your journey! You have conquered the core models, prompt engineering, XML tags, token economics, and troubleshooting mechanics.',
    handsOnExercise: {
      taskName: 'Foundations Capstone Assessment',
      instructions: 'Deliver a 5-minute synthesized explanation of Claude model selection and prompt design to a colleague or recorded voice memo.',
      expectedOutcome: 'Confident verbal articulation of core CCAO-F competencies.'
    },
    tasks: [
      { id: 'd30-t1', text: 'Review Month 1 study statistics and completed checklists', durationMinutes: 15 },
      { id: 'd30-t2', text: 'Perform capstone synthesis drill', durationMinutes: 30 },
      { id: 'd30-t3', text: 'Unlock Month 1 Certificate Badge and set Month 2 goals', durationMinutes: 15 }
    ],
    mentorTip: 'Consistency is what separates passers from non-passers. 30 hours logged! Take pride in this real accomplishment.',
    examTrapWarning: 'Month 2 introduces Governance, Risk, and Projects—areas where many technical candidates lose unexpected points.',
    isMilestone: true,
    milestoneTitle: 'Month 1 Foundations Certified (30 Days Cleared)',
    milestoneReward: 'Badge: Foundations Master Medal Unlocked'
  }
];
