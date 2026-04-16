"use client";

import { useState, useCallback } from "react";

type Step = "closed" | "name" | "phone" | "service" | "sent";

const serviceOptions = [
  "General Pest Treatment",
  "Cockroach / Ant Control",
  "Spider Control",
  "Rodent Control",
  "Flea Treatment",
  "Termite Inspection",
  "Termite Barrier Quote",
  "Other / Not Sure",
];

export default function LiveChat() {
  const [step, setStep] = useState<Step>("closed");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  const open = step !== "closed";

  const handleSubmit = useCallback(() => {
    // In production, this would POST to an API
    setStep("sent");
  }, []);

  const reset = useCallback(() => {
    setStep("closed");
    setName("");
    setPhone("");
    setService("");
  }, []);

  return (
    <>
      {/* Chat bubble */}
      {!open && (
        <button
          onClick={() => setStep("name")}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-brand-600 text-white shadow-xl flex items-center justify-center chat-bubble hover:bg-brand-700 transition-colors"
          aria-label="Open chat"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-up">
          {/* Header */}
          <div className="bg-brand-600 px-5 py-4 flex items-center justify-between">
            <div>
              <p className="text-white font-semibold text-sm">Quick Enquiry</p>
              <p className="text-white/70 text-xs">We&apos;ll get back to you ASAP</p>
            </div>
            <button onClick={reset} className="text-white/70 hover:text-white p-1" aria-label="Close chat">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-5">
            {step === "name" && (
              <div>
                <p className="text-sm text-gray-600 mb-3">Hi there! What&apos;s your name?</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  autoFocus
                />
                <button
                  onClick={() => name.trim() && setStep("phone")}
                  disabled={!name.trim()}
                  className="btn-primary w-full justify-center mt-3 text-sm py-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}

            {step === "phone" && (
              <div>
                <p className="text-sm text-gray-600 mb-3">Thanks {name}! Best number to reach you?</p>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="04XX XXX XXX"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  autoFocus
                />
                <button
                  onClick={() => phone.trim() && setStep("service")}
                  disabled={!phone.trim()}
                  className="btn-primary w-full justify-center mt-3 text-sm py-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}

            {step === "service" && (
              <div>
                <p className="text-sm text-gray-600 mb-3">What do you need help with?</p>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {serviceOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => { setService(opt); handleSubmit(); }}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-sm border transition-colors ${
                        service === opt
                          ? "border-brand-600 bg-brand-50 text-brand-700"
                          : "border-gray-200 hover:border-brand-300 hover:bg-brand-50 text-gray-700"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === "sent" && (
              <div className="text-center py-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent-500/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-semibold text-brand-900 text-sm">Thanks {name}!</p>
                <p className="text-xs text-gray-500 mt-1">
                  We&apos;ve received your enquiry for {service.toLowerCase()} and will be in touch shortly.
                </p>
                <button onClick={reset} className="btn-secondary w-full justify-center mt-4 text-sm py-2.5">
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
