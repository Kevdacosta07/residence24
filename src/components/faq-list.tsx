"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/content";

export function FaqList() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {faqs.map((item, index) => {
        const expanded = active === index;
        return (
          <div className="faq-item" key={item.question}>
            <h3>
              <button type="button" onClick={() => setActive(expanded ? null : index)} aria-expanded={expanded} aria-controls={`faq-${index}`}>
                <span>{item.question}</span><Plus className={expanded ? "faq-icon faq-icon--open" : "faq-icon"} aria-hidden="true" />
              </button>
            </h3>
            <div id={`faq-${index}`} className={expanded ? "faq-answer faq-answer--open" : "faq-answer"} aria-hidden={!expanded}>
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
