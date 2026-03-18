import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What types of AI projects do you work on?",
    a: "I specialize in end-to-end ML engineering, generative AI applications (RAG systems, LLM fine-tuning), multi-agent agentic workflows, and blockchain/Web3 development. From PoC to production — I handle the full lifecycle.",
  },
  {
    q: "Do you work remotely?",
    a: "Yes, exclusively. I work with clients globally across different timezones and have built async-first collaboration habits. I use structured communication practices to ensure projects stay on track regardless of geography.",
  },
  {
    q: "What's your tech stack?",
    a: "Python-first: PyTorch, LangChain, AutoGen, FastAPI, HuggingFace Transformers. For blockchain: Solidity, Hardhat, Ethereum, Polkadot. Infrastructure: Docker, Kubernetes, AWS/GCP, MLflow. I pick the right tool for the job.",
  },
  {
    q: "How do I get started?",
    a: "Simple — drop me a message via the contact form below with a brief description of your project. I'll respond within 24 hours with an initial assessment and schedule a discovery call to dive deeper into your requirements.",
  },
  {
    q: "Do you take on long-term engagements?",
    a: "Absolutely. I work on both project-based and retainer arrangements. Long-term engagements are my preference for complex AI/ML systems that require ongoing model monitoring, retraining, and optimization.",
  },
];

const FAQ = () => {
  return (
    <section className="section-dark py-24 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">FAQ</p>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
            Got questions<span className="text-white/30">?</span>
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-0">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-white/10 border-t-0 first:border-t"
            >
              <AccordionTrigger className="text-left text-white font-semibold text-base md:text-lg py-6 hover:no-underline hover:text-white/80 transition-colors [&[data-state=open]]:text-white">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-white/50 text-sm leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
