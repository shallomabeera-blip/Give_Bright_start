"use client";
import { useState } from "react";

export default function Create() {
  const [step, setStep] = useState(1);
  const [published, setPublished] = useState(false);
  const [form, setForm] = useState({
    title: "",
    category: "Medical",
    story: "",
    goal: "",
  });

  const set = (k, v) => setForm({ ...form, [k]: v });

  return (
    <main className="container">
      <div className="card" style={{ maxWidth: 720, margin: "auto" }}>
        <small>START A FUNDRAISER</small>
        <h1>Step {step} of 5</h1>
        <div className="bar">
          <i style={{ width: `${step * 20}%` }} />
        </div>

        {step === 1 && (
          <>
            <h2>What are you raising money for?</h2>
            <div className="field">
              <label>Title</label>
              <input
                placeholder="e.g, Help Mara fight cancer"
                value={form.title}
                onChange={(e) => set("title", e.target.value)}
              />
            </div>
            <div className="field">
              <label>Category</label>
              <select
                value={form.category}
                onChange={(e) => set("category", e.target.value)}
              >
                <option>Medical</option>
                <option>Emergency</option>
                <option>Education</option>
                <option>Community</option>
                <option>Family</option>
              </select>
            </div>
            <button
              type="button"
              className="btn primary"
              onClick={() => form.title && setStep(2)}
            >
              Continue
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2>Tell your story</h2>
            <div className="field">
              <label>Upload image</label>
              <input type="file" accept="image/*" />
            </div>
            <div className="field">
              <textarea
                rows="10"
                placeholder="e.g, Hello, my name is..."
                value={form.story}
                onChange={(e) => set("story", e.target.value)}
              />
            </div>
            <button type="button" className="btn" onClick={() => setStep(1)}>
              Back
            </button>{" "}
            <button
              type="button"
              className="btn primary"
              onClick={() => form.story && setStep(3)}
            >
              Continue
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h2>Set your goal</h2>
            <div className="field">
              <input
                type="number"
                placeholder="5000"
                value={form.goal}
                onChange={(e) => set("goal", e.target.value)}
              />
            </div>
            <button type="button" className="btn" onClick={() => setStep(2)}>
              Back
            </button>{" "}
            <button
              type="button"
              className="btn primary"
              onClick={() => form.goal && setStep(4)}
            >
              Continue
            </button>
          </>
        )}

        {step === 4 && (
          <>
            <h2>Verify your identity</h2>
            <p>
              By clicking continue, you agree with the terms of service and
              fundraising guidelines.
            </p>
            <button type="button" className="btn" onClick={() => setStep(3)}>
              Back
            </button>{" "}
            <button type="button" className="btn primary" onClick={() => setStep(5)}>
              Continue
            </button>
          </>
        )}

        {step === 5 && (
          <>
            <h2>Review fundraiser</h2>
            <p>
              <b>{form.title}</b>
            </p>
            <p>
              {form.category} · Goal ${Number(form.goal || 0).toLocaleString()}
            </p>
            <p>{form.story}</p>
            <div className="card" style={{ background: "#e8f8f1" }}>
              <b>Next:</b> connect your Stripe account and complete required
              verification before accepting live donations.
            </div>
            <button type="button" className="btn" onClick={() => setStep(4)}>
              Back
            </button>
            <button
              type="button"
              className="btn primary"
              onClick={() => setPublished(true)}
              disabled={published}
            >
              {published ? "Fundraiser saved" : "Create fundraiser"}
            </button>
            {published && <p role="status" style={{ color: "#60789a" }}>Your fundraiser details are ready. Connect Stripe from your dashboard to receive donations.</p>}
          </>
        )}
      </div>
    </main>
  );
}
