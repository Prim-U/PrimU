import React from "react";
import "./FAQ.css";
import Accordion from "../../common/Accordion";

export default function FAQ() {
  const items = [
    {
      title: "How much should I tip my Primlancer?",
      content: "It is up to you. All our Primlancers are professionals in their field and are passionate about what they love doing.",
    },
    {
      title: "How do I know I can trust Prim-U professionals in my home?",
      content: "Our team of professionals go through a strict vetting process. We also provide profiles on each professional, along with images from their portfolio, to give you a better sense of their professional experience and signature styles.",
    },
    {
      title: "Should I do anything to my skin before a make-up service?",
      content: "Simply cleanse and hydrate your skin prior to a make-up service, and the Primlancer will take care of the rest",
    },
  ];

  return (
    <div>
        <p className="p service-header">
        Frequently asked
        <span className="purple-header"> Questions </span>
      </p>
      <h3 className="faq-title">For Customers</h3>
      <Accordion items={items} />

    </div>
  );
}
