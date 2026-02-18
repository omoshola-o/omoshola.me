---
title: "What the Risk Professionals Are Saying About AI"
description: "Notes from the GARP Charlotte Chapter Meeting on Artificial Intelligence: Risk, Governance, and Emerging Challenges — November 5, 2025."
pubDatetime: 2025-11-07
tags: ["AI Governance", "Risk Intelligence", "Innovation"]
featured: false
draft: false
---

The registration confirmation came in a few weeks before the event. Charlotte, North Carolina Chapter Meeting, Global Association of Risk Professionals. Topic: Artificial Intelligence: Risk, Governance, and Emerging Challenges. Wednesday evening, 5:30 PM. I cleared the calendar.

I want to explain why I cleared the calendar, because it is not immediately obvious. I spend most of my professional time thinking about AI risk from the engineering side: how you build models that are fair, how you make them explainable, how you design systems that regulators can audit and practitioners can trust. That is the view from inside the work. GARP is the view from inside the institutions that have to live with the work. Those are different views, and you need both.

## What GARP is, for context

GARP, the Global Association of Risk Professionals, is the professional home of the Financial Risk Manager credential, the FRM. Over 200,000 members across 190 countries. If you work in risk at a bank, an asset manager, a hedge fund, or an insurance company, there is a strong chance GARP is your professional community.

Charlotte matters in this context. Charlotte is the second-largest US banking city by assets. Bank of America is headquartered here. Truist is here. The people in GARP's Charlotte chapter are not academics theorizing about financial risk. They are the people signing off on model validation reports, sitting in front of regulators during examinations, and deciding which AI systems get deployed in production and which ones go back to the engineering team with a list of concerns.

That is the room I walked into on Wednesday evening.

## The room

The venue was a conference space in uptown Charlotte. Round overhead lights, long rectangular table, water pitchers already set out. Name badges at the check-in desk. Mine said Omoshola Owolabi, IBM Corporation. The attendees filtering in were a mix of titles I recognize from every conversation about where AI governance actually gets decided: model risk officers, compliance directors, quantitative analysts, a few academics, people from the regulatory side.

The GARP slide was already up on the projector when I found my seat.

![GARP Charlotte Chapter — Artificial Intelligence: Risk, Governance, and Emerging Challenges](/assets/garp-charlotte/IMG_4710.jpg)

Three speakers were listed on the opening slide: Dr. Rajneesh Vij, Nathan Gill, and James L. King, CFA and FRM. The format was a panel discussion. Not a polished keynote where someone reads slides, but an actual conversation among practitioners who disagree with each other in productive ways. That format matters. The interesting ideas in this space do not come from prepared remarks. They come from people who have spent the week arguing with a regulator or a board and are still processing what happened.

## The governance gap

The number that stuck with me from the evening: 32%.

Thirty-two percent of financial firms have established a formal AI committee as of 2025. That means more than two-thirds of institutions that are actively deploying AI in risk and compliance processes do not have a defined governance structure for those decisions. The AI is going in. The oversight is not keeping up.

This is not a new problem. It is a pattern. Technology adoption in financial services tends to run ahead of governance by a cycle or two. Risk management frameworks get built after the losses, not before. The difference with AI is the speed and the opacity. A bad loan book takes years to become visible. A biased credit model can produce discriminatory outcomes at scale in weeks, without anyone in the chain having a clear line of sight to what went wrong.

The panel made this concrete. One speaker described sitting in a board-level meeting where the directors were being asked to approve an AI deployment for customer-facing credit decisions. The board wanted assurance that the model was fair. The team presenting could demonstrate that the model was accurate. Those are not the same thing, and the board did not have the technical vocabulary to ask the right follow-up questions. The approval went through. The governance infrastructure to monitor the deployed model was still being designed.

That gap, between deployment and meaningful oversight, is what GARP members are living in right now.

## In the room where it is being decided

I took this from my seat at the table.

![At the GARP Charlotte chapter meeting — the slide visible over my shoulder](/assets/garp-charlotte/IMG_4712.jpg)

What I find most useful about being physically present at something like this, as opposed to reading the recap or watching the recording, is what you pick up in the margins of the formal discussion. The side conversations during the break. The specific word choices that practitioners use that reveal where they are actually uncertain versus where they have decided. The questions that do not get asked because the person asking them does not want to expose how much their institution is still figuring out.

The dominant sentiment in that room was not panic about AI. It was a very specific kind of alert pragmatism. These are people who have managed through financial crises, through regulatory shifts, through the introduction of machine learning into credit underwriting in the first wave. They know how to process a new risk environment. What they are calibrating right now is: how different is AI governance from model risk management as they already know it, and how much of the existing MRM framework can be extended versus how much needs to be rebuilt?

The answer they were landing on: more of the latter than they had originally hoped.

## Model risk and the explainability question

The technical discussion got specific around model risk management. The OCC and Federal Reserve guidance on MRM, SR 11-7 and its successors, was written for a world of well-defined statistical models with interpretable parameters. A logistic regression for credit scoring was understood at the individual coefficient level. A gradient-boosted ensemble with five hundred features and interaction terms is a different object entirely.

The question of how you write an adverse action notice for a denied credit application when your model is a neural network is not academic. The Equal Credit Opportunity Act requires specific, substantive reasons. Regulators are asking for them. The institutions in that room are trying to produce them at scale without either lying to their customers or misrepresenting their models.

SHAP values came up in the panel discussion. I had a small moment of recognition: this is exactly the problem I am working on. Local interpretability for high-stakes financial decisions, automated at inference time, compliant with regulatory requirements. The engineers are building it. The risk officers are trying to figure out whether to trust it. The regulators are trying to figure out whether it satisfies existing obligations or whether new guidance is needed. All three groups need to be in the same room more often.

## A GARP member in the work

![With GARP — Charlotte Chapter, November 2025](/assets/garp-charlotte/IMG_4713.jpg)

The name badge in that photo says IBM Corporation. The badge behind me says GARP. I want both of those things to be true at the same time, because I think the work only matters if both are true.

Building AI systems that are explainable and fair is an engineering problem. Getting those systems deployed in institutions that are actually regulated, actually accountable, and actually affecting people's financial lives is a governance and trust problem. GARP is where the governance and trust problem lives. If I am only solving the engineering problem, I am solving half of it.

The panel closed with something that has stayed with me. One of the speakers said that the institutions that will lead on AI governance are not necessarily the ones that move fastest. They are the ones that build the infrastructure to slow down at the right moments, ask the right questions, and demonstrate to regulators and customers that they know what their systems are doing and why.

That is a harder thing to build than the model itself. It is also the more important thing.

GARP runs these chapter meetings across dozens of cities. If you are working in AI and you have not spent an evening with the practitioners who have to govern what you build, I would encourage you to find your local chapter. The conversation is worth it.

---

*The GARP Charlotte chapter holds events throughout the year. Information on upcoming meetings is available through the GARP member portal.*
