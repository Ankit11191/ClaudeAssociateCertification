import React, { useState } from 'react';
import { PRACTICE_QUESTIONS } from '../data/quizQuestions';
import { DOMAINS } from '../data/domains';

interface PracticeExamModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRecordScore: (score: number, total: number, passed: boolean) => void;
}

export const PracticeExamModal: React.FC<PracticeExamModalProps> = ({
  isOpen,
  onClose,
  onRecordScore
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);

  if (!isOpen) return null;

  const currentQ = PRACTICE_QUESTIONS[currentQuestionIdx];
  const totalQuestions = PRACTICE_QUESTIONS.length;
  const answeredCount = Object.keys(selectedAnswers).length;

  const handleSelectOption = (optionId: string) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQ.id]: optionId
    }));
  };

  const calculateScore = () => {
    let correctCount = 0;
    PRACTICE_QUESTIONS.forEach(q => {
      if (selectedAnswers[q.id] === q.correctOptionId) {
        correctCount++;
      }
    });

    const scaledScore = Math.round((correctCount / totalQuestions) * 1000);
    const passed = scaledScore >= 720;
    return { correctCount, scaledScore, passed };
  };

  const handleSubmitExam = () => {
    const { scaledScore, passed } = calculateScore();
    setIsSubmitted(true);
    onRecordScore(scaledScore, 1000, passed);
  };

  const handleResetExam = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setCurrentQuestionIdx(0);
  };

  const { correctCount, scaledScore, passed } = isSubmitted ? calculateScore() : { correctCount: 0, scaledScore: 0, passed: false };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl overflow-hidden">
        
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-900/80 px-6 py-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              CCAO-F Exam Simulator
            </span>
            <h2 className="text-base sm:text-lg font-bold text-neutral-100">
              Official Practice Exam & Scenario Assessment
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-400 font-mono">
              Question {currentQuestionIdx + 1} of {totalQuestions}
            </span>
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200 transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Results Banner if Submitted */}
        {isSubmitted && (
          <div className={`p-6 border-b ${passed ? 'bg-emerald-950/40 border-emerald-500/30' : 'bg-rose-950/40 border-rose-500/30'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className={`text-xs font-bold uppercase tracking-wider ${passed ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {passed ? 'PASSED · Exam Ready' : 'NEEDS REVIEW · Passing Threshold: 720'}
                </span>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="font-mono text-3xl font-extrabold text-neutral-100 tabular-nums">
                    {scaledScore} / 1000
                  </span>
                  <span className="text-sm text-neutral-300">
                    ({correctCount} of {totalQuestions} correct)
                  </span>
                </div>
                <p className="text-xs text-neutral-300 mt-1">
                  {passed
                    ? 'Congratulations! You cleared the official 720-point passing score for Claude Certified Associate (Foundations).'
                    : 'Keep reviewing the rationales below. Focus especially on Output Evaluation (21%) and Governance (15%).'}
                </p>
              </div>

              <button
                onClick={handleResetExam}
                className="rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2 text-xs font-medium text-neutral-200 hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Retake Exam
              </button>
            </div>
          </div>
        )}

        {/* Question View Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Question Meta & Domain */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`rounded px-2 py-0.5 text-xs font-semibold ${DOMAINS[currentQ.domainId].bgLight} ${DOMAINS[currentQ.domainId].textColor}`}>
                Domain: {DOMAINS[currentQ.domainId].name} ({DOMAINS[currentQ.domainId].weight}%)
              </span>
              <span className="text-xs text-neutral-500">
                Difficulty: {currentQ.difficulty}
              </span>
            </div>

            <div className="flex gap-1">
              {PRACTICE_QUESTIONS.map((q, idx) => {
                const isAnswered = selectedAnswers[q.id] !== undefined;
                const isCurrent = idx === currentQuestionIdx;
                const isCorrect = isSubmitted && selectedAnswers[q.id] === q.correctOptionId;
                const isWrong = isSubmitted && isAnswered && !isCorrect;

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestionIdx(idx)}
                    className={`h-6 w-6 rounded font-mono text-xs font-bold transition-all cursor-pointer ${
                      isCurrent
                        ? 'ring-2 ring-amber-400'
                        : ''
                    } ${
                      isSubmitted
                        ? isCorrect
                          ? 'bg-emerald-600 text-white'
                          : isWrong
                          ? 'bg-rose-600 text-white'
                          : 'bg-neutral-800 text-neutral-400'
                        : isAnswered
                        ? 'bg-amber-500/30 text-amber-300 border border-amber-500/50'
                        : 'bg-neutral-900 text-neutral-500'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Business Scenario Stem */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
              Business Scenario
            </span>
            <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-sans">
              {currentQ.scenario}
            </p>
          </div>

          {/* Question Text */}
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-neutral-100">
              {currentQ.question}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options.map(option => {
              const isSelected = selectedAnswers[currentQ.id] === option.id;
              const isCorrectOption = option.id === currentQ.correctOptionId;
              
              let optionStyle = 'border-neutral-800 bg-neutral-900/40 text-neutral-200 hover:border-neutral-700';

              if (isSubmitted) {
                if (isCorrectOption) {
                  optionStyle = 'border-emerald-500/80 bg-emerald-950/40 text-emerald-100 font-medium';
                } else if (isSelected) {
                  optionStyle = 'border-rose-500/80 bg-rose-950/40 text-rose-200 line-through';
                } else {
                  optionStyle = 'border-neutral-800/60 bg-neutral-950/20 text-neutral-500';
                }
              } else if (isSelected) {
                optionStyle = 'border-amber-500 bg-amber-950/30 text-amber-200 ring-1 ring-amber-500/40';
              }

              return (
                <div
                  key={option.id}
                  onClick={() => handleSelectOption(option.id)}
                  className={`flex items-start gap-3 rounded-xl border p-4 transition-all cursor-pointer ${optionStyle}`}
                >
                  <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold uppercase ${
                    isSelected ? 'bg-amber-500 text-neutral-950' : 'bg-neutral-800 text-neutral-300'
                  }`}>
                    {option.id}
                  </span>
                  <span className="text-xs sm:text-sm leading-relaxed">
                    {option.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Detailed Rationale & Distractor Breakdown (Visible after submission) */}
          {isSubmitted && (
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/90 p-5 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                  Correct Answer & Mentor Explanation
                </span>
                <p className="text-xs text-neutral-200 leading-relaxed">
                  {currentQ.explanation}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-800">
                <span className="text-xs font-semibold text-neutral-400 block mb-2">
                  Why Other Options are Incorrect (Distractor Analysis):
                </span>
                <div className="space-y-1.5 text-xs text-neutral-400">
                  {Object.entries(currentQ.whyOthersAreIncorrect).map(([optId, rationale]) => (
                    <div key={optId} className="flex items-start gap-2">
                      <span className="font-mono text-rose-400 font-bold uppercase">Option {optId}:</span>
                      <span>{rationale}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Navigation & Submit */}
        <div className="flex items-center justify-between border-t border-neutral-800 bg-neutral-900/90 px-6 py-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentQuestionIdx(prev => Math.max(0, prev - 1))}
              disabled={currentQuestionIdx === 0}
              className="rounded-lg border border-neutral-800 px-3 py-1.5 text-xs text-neutral-300 hover:bg-neutral-800 disabled:opacity-40 cursor-pointer"
            >
              ← Previous
            </button>
            <button
              onClick={() => setCurrentQuestionIdx(prev => Math.min(totalQuestions - 1, prev + 1))}
              disabled={currentQuestionIdx === totalQuestions - 1}
              className="rounded-lg border border-neutral-800 px-3 py-1.5 text-xs text-neutral-300 hover:bg-neutral-800 disabled:opacity-40 cursor-pointer"
            >
              Next →
            </button>
          </div>

          <div>
            {!isSubmitted ? (
              <button
                onClick={handleSubmitExam}
                disabled={answeredCount === 0}
                className="rounded-lg bg-amber-500 px-5 py-2 text-xs font-bold text-neutral-950 hover:bg-amber-400 disabled:opacity-50 transition-colors cursor-pointer"
              >
                Grade & Submit Exam ({answeredCount}/{totalQuestions} answered)
              </button>
            ) : (
              <button
                onClick={onClose}
                className="rounded-lg bg-neutral-800 px-4 py-2 text-xs font-medium text-neutral-200 hover:bg-neutral-700 cursor-pointer"
              >
                Done Reviewing
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
