import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

export default function FaqSection({ t }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { questionKey: 'faqQ1', answerKey: 'faqA1' },
    { questionKey: 'faqQ2', answerKey: 'faqA2' },
    { questionKey: 'faqQ3', answerKey: 'faqA3' }
  ];

  return (
    <section style={{
      margin: '3rem 0 2rem 0',
      background: 'var(--bg-card)',
      borderRadius: '24px',
      border: '1px solid var(--border-color)',
      padding: '2rem 1.5rem',
      boxShadow: 'var(--shadow-md)'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '1.75rem'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          background: 'rgba(255, 43, 74, 0.1)',
          color: 'var(--primary-red)',
          padding: '0.35rem 0.85rem',
          borderRadius: '50px',
          fontWeight: '800',
          fontSize: '0.8rem',
          marginBottom: '0.5rem'
        }}>
          <HelpCircle size={15} />
          <span>{t('faqTitle')}</span>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '600px', margin: '0 auto' }}>
          {t('faqSubtitle')}
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '800px', margin: '0 auto' }}>
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              style={{
                borderRadius: '16px',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-main)',
                overflow: 'hidden',
                transition: 'all 0.2s ease'
              }}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                style={{
                  width: '100%',
                  padding: '1rem 1.25rem',
                  background: 'none',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  color: 'var(--text-main)',
                  fontWeight: '800',
                  fontSize: '0.92rem',
                  textAlign: 'inherit'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={18} color="var(--primary-red)" />
                  <span>{t(faq.questionKey)}</span>
                </div>
                {isOpen ? <ChevronUp size={18} color="var(--primary-red)" /> : <ChevronDown size={18} color="var(--text-muted)" />}
              </button>

              {isOpen && (
                <div style={{
                  padding: '0 1.25rem 1.1rem 1.25rem',
                  color: 'var(--text-muted)',
                  fontSize: '0.88rem',
                  lineHeight: '1.6',
                  borderTop: '1px solid var(--border-color)',
                  paddingTop: '0.85rem'
                }}>
                  {t(faq.answerKey)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
