'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // First one open

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 text-[#222222] py-16">
      <h2 className="text-2xl font-bold mb-6">FREQUENTLY ASKED QUESTIONS (FAQS)</h2>
      <div className="space-y-4 divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-4 text-left cursor-pointer"
            >
              <span className="font-semibold text-sm sm:text-base">{faq.question}</span>
              {openIndex === index ? (
                <Minus className="w-4 h-4" />
              ) : (
                <Plus className="w-4 h-4" />
              )}
            </button>
            {openIndex === index && faq.answer && (
              <div className="pb-4 text-sm text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
