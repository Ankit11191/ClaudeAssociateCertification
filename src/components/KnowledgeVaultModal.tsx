import React, { useState } from 'react';
import { KNOWLEDGE_ARTICLES } from '../data/mentorKnowledge';

interface KnowledgeVaultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KnowledgeVaultModal: React.FC<KnowledgeVaultModalProps> = ({
  isOpen,
  onClose
}) => {
  const [selectedArticleId, setSelectedArticleId] = useState(KNOWLEDGE_ARTICLES[0].id);

  if (!isOpen) return null;

  const currentArticle = KNOWLEDGE_ARTICLES.find(a => a.id === selectedArticleId) || KNOWLEDGE_ARTICLES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-900/80 px-6 py-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Mentor Knowledge Vault
            </span>
            <h2 className="text-base sm:text-lg font-bold text-neutral-100">
              CCAO-F Study Guides, Matrices & Cheat Sheets
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200 transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* 2-Column Split: Article List & Reader */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          {/* Left Sidebar Articles List */}
          <div className="w-full md:w-80 border-r border-neutral-800 bg-neutral-950/60 p-4 overflow-y-auto space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 block mb-2 px-1">
              Core Reference Guides
            </span>
            {KNOWLEDGE_ARTICLES.map(article => {
              const isSelected = article.id === selectedArticleId;
              return (
                <button
                  key={article.id}
                  onClick={() => setSelectedArticleId(article.id)}
                  className={`w-full text-left rounded-xl p-3 transition-all cursor-pointer border ${
                    isSelected
                      ? 'border-amber-500/50 bg-amber-950/20 text-neutral-100'
                      : 'border-transparent text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200'
                  }`}
                >
                  <span className="text-[10px] font-medium text-amber-400 uppercase tracking-wider block">
                    {article.category}
                  </span>
                  <h4 className="text-xs font-bold mt-0.5 text-neutral-200 line-clamp-1">
                    {article.title}
                  </h4>
                  <span className="text-[10px] text-neutral-500 mt-1 block">
                    {article.readTime}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Reader Area */}
          <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-neutral-900/30">
            <div>
              <div className="flex items-center gap-2 text-xs text-amber-400 font-medium mb-1">
                <span>{currentArticle.category}</span>
                <span className="text-neutral-600">·</span>
                <span className="text-neutral-400">{currentArticle.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-100">
                {currentArticle.title}
              </h3>
              <p className="mt-2 text-xs text-neutral-300 leading-relaxed bg-neutral-900/80 p-3 rounded-lg border border-neutral-800">
                {currentArticle.summary}
              </p>
            </div>

            <div className="space-y-6">
              {currentArticle.sections.map((section, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-sm font-semibold text-neutral-200">
                    {section.heading}
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                  {section.codeSnippet && (
                    <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-4 font-mono text-xs text-neutral-200 overflow-x-auto">
                      <pre className="whitespace-pre-wrap">{section.codeSnippet}</pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-end border-t border-neutral-800 bg-neutral-900/90 px-6 py-3">
          <button
            onClick={onClose}
            className="rounded-lg bg-neutral-800 px-4 py-1.5 text-xs font-medium text-neutral-200 hover:bg-neutral-700 cursor-pointer"
          >
            Close Vault
          </button>
        </div>

      </div>
    </div>
  );
};
