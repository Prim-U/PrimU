import React from "react";
import "./FAQ.css";
import Accordion from "../../common/Accordion";


export default function FAQ() {
  const customerFAQ = [
    {
      title: "How much should I tip my Primlancer?",
      content:
        "It is up to you. All our Primlancers are professionals in their field and are passionate about what they love doing.",
    },
    {
      title: "How do I know I can trust Prim-U professionals in my home?",
      content:
        "Our team of professionals go through a strict vetting process. We also provide profiles on each professional, along with images from their portfolio, to give you a better sense of their professional experience and signature styles.",
    },
    {
      title: "Should I do anything to my skin before a make-up service?",
      content:
        "Simply cleanse and hydrate your skin prior to a make-up service, and the Primlancer will take care of the rest",
    },
    {
      title: "Who are the Prim-U professionals?",
      content:
        "We have hand-picked each one of our professionally trained stylists and make-up artists. Their experience varies from working at top salons in your city to doing editorial, commercial, fashion, film and event work. The common thread is that they are incredibly talented and passionate about what they do.",
    },
    {
      title:
        "Is it OK if I want the stylist or makeup artist to use some of my personal products?",
      content:
        "You can speak with your stylist about the products you would like to use.",
    },
    {
      title:
        "Is there anything I'll need to have for my appointment or does the professional Primlancer provide her or his own equipment and products?",
      content:
        "Every Primlancer carries her or his own set of tools and products. Kindly specify on the app whether you will require any additional services so that the Primlancer  may arrive ready with all the necessary equipment. ",
    },
    {
      title: "How should I get ready for a hair-cut appointment?",
      content:
        "Wash and condition your hair prior to your appointment and leave damp.",
    },
    {
      title: "How do I get ready for my Prim-U appointment?",
      content:
        "For blow-outs, wash your hair prior to the appointment and have a place to sit that is near an electrical outlet so that we can plug in our hairdryers. Our professionals will have products and tools with them, but please let them know if you have products that you would prefer they use, or if you have any allergies or special concerns for example, dry scalp, extensions or highlights. ",
    },
    {
      title:
        "For up-dos, braids, twist, knots, and locks should I do anything to my hair before the services?",
      content:
        "All you need to do is wash your hair at least 24 hours prior to the styling. Your stylist will dampen your hair as needed.",
    },
    {
      title: "How should I prepare for strip and band eyelashes?",
      content:
        "Have your eye area cleansed of makeup, mascara, and free of any creams, lotions, or oils.",
    },
  ];

  return (
    <div>
      <p className="p service-header">
        Frequently asked
        <span className="purple-header"> Questions </span>
      </p>
      <h3 className="faq-title">For Customers</h3>
      <div className="mb-4">
        <Accordion items={customerFAQ} />
      </div>
    </div>
  );
}
