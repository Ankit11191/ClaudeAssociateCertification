import { DomainId, DomainInfo } from '../types/curriculum';

export const DOMAINS: Record<DomainId, DomainInfo> = {
  evaluation: {
    id: 'evaluation',
    name: 'Output Evaluation & Validation',
    weight: 21,
    description: 'Evaluating Claude responses, identifying hallucinations, factual errors, biases, and executing human-in-the-loop verification rubrics.',
    color: '#0284C7', // sky-600
    textColor: 'text-sky-400',
    borderColor: 'border-sky-500/30',
    bgLight: 'bg-sky-950/30'
  },
  workflow: {
    id: 'workflow',
    name: 'Workflow Integration & Solution Design',
    weight: 16,
    description: 'Incorporating Claude into business processes, selecting workflow patterns (sequential, parallel, HITL), and repeatable operations.',
    color: '#8B5CF6', // purple-500
    textColor: 'text-purple-400',
    borderColor: 'border-purple-500/30',
    bgLight: 'bg-purple-950/30'
  },
  governance: {
    id: 'governance',
    name: 'Governance, Risk & Responsible Use',
    weight: 15,
    description: 'Anthropic Constitutional AI principles, data privacy boundaries, PII redlining, enterprise copyright, and compliance guardrails.',
    color: '#10B981', // emerald-500
    textColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    bgLight: 'bg-emerald-950/30'
  },
  prompting: {
    id: 'prompting',
    name: 'Prompting & Task Execution',
    weight: 14,
    description: 'Crafting effective system/user prompts, XML tags (<context>, <example>), role framing, few-shot prompting, and schema outputs.',
    color: '#F59E0B', // amber-500
    textColor: 'text-amber-400',
    borderColor: 'border-amber-500/30',
    bgLight: 'bg-amber-950/30'
  },
  models: {
    id: 'models',
    name: 'Product & Model Selection',
    weight: 12,
    description: 'Choosing between Haiku, Sonnet, and Opus tiers, evaluating latency vs cost vs reasoning trade-offs, and Artifacts vs Chat.',
    color: '#EC4899', // pink-500
    textColor: 'text-pink-400',
    borderColor: 'border-pink-500/30',
    bgLight: 'bg-pink-950/30'
  },
  knowledge: {
    id: 'knowledge',
    name: 'Configuration & Knowledge Management',
    weight: 12,
    description: 'Setting up Claude Projects, curating Project Knowledge files, custom instructions, and managing context window saturation.',
    color: '#06B6D4', // cyan-500
    textColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
    bgLight: 'bg-cyan-950/30'
  },
  troubleshooting: {
    id: 'troubleshooting',
    name: 'Troubleshooting & Optimization',
    weight: 10,
    description: 'Diagnosing root causes of output failures, false-positive refusals, instruction drift, lazy responses, and prompt debugging.',
    color: '#F97316', // orange-500
    textColor: 'text-orange-400',
    borderColor: 'border-orange-500/30',
    bgLight: 'bg-orange-950/30'
  }
};
