"use client";

import { useState } from "react";

type Step = "closed" | "name" | "phone" | "service" | "done";

export default function LiveChat() {
  const [step,     setStep]     = useState<Step>("closed");
  const [name,     setName]     = useState("");
  const [phone,    setPhone]    = useState("");
  const [service,  setService]  = useState("");
  const [nameErr,  setNameErr]  = useState("");
  const [phoneErr, setPhoneErr] = useState("");

  const open  = () => setStep("name");
  const close = () => {
    setStep("closed");
    setName(""); setPhone(""); setService("");
    setNameErr(""); setPhoneErr("");
  };

  const submitName = () => {
    if (!name.trim()) { setNameErr("Please enter your name"); return; }
    setNameErr(""); setStep("phone");
  };
  const submitPhone = () => {
    if (!phone.trim() || !/^[\d\s()+\-]{7,}$/.test(phone)) {
      setPhoneErr("Please enter a valid phone number"); return;
    }
    setPhoneErr(""); setStep("service");
  };
  const submitService = () => setStep("done");

  const isOpen = step !== "closed";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Chat panel */}
      {isOpen && (
        <div className="w-[380px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
          style={{ maxHeight: "calc(100vh - 120px)" }}>

          {/* Header */}
          <div className="bg-brand-800 px-5 py-4 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold text-white">J</div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-brand-800 rounded-full" />
                </div>
                <div>
                  <p className="text-white font-bold text-base leading-tight">J Mack Electrical</p>
                  <p className="text-green-300 text-xs font-medium">● Online — We reply fast</p>
                </div>
              </div>
              <button onClick={close} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4 bg-gray-50">

            {/* Bot intro message */}
            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full bg-brand-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">J</div>
              <div className="bg-white rounded-2xl rounded-tl-sm shadow-sm px-4 py-3 max-w-[260px]">
                <p className="text-gray-800 text-sm leading-relaxed">
                  G&apos;day! 👋 Looking for a reliable electrician in Gympie?<br /><br />
                  Leave your details below and we&apos;ll call you back with a <strong>free quote</strong> — usually within the hour.
                </p>
              </div>
            </div>

            {/* Step messages */}
            {(step === "phone" || step === "service" || step === "done") && (
              <div className="flex justify-end">
                <div className="bg-brand-600 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[200px]">
                  <p className="text-sm">{name}</p>
                </div>
              </div>
            )}
            {(step === "phone" || step === "service" || step === "done") && (
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-brand-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">J</div>
                <div className="bg-white rounded-2xl rounded-tl-sm shadow-sm px-4 py-3 max-w-[260px]">
                  <p className="text-gray-800 text-sm">Thanks {name}! 😊 What&apos;s the best number to call you on?</p>
                </div>
              </div>
            )}
            {(step === "service" || step === "done") && (
              <div className="flex justify-end">
                <div className="bg-brand-600 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[200px]">
                  <p className="text-sm">{phone}</p>
                </div>
              </div>
            )}
            {(step === "service" || step === "done") && (
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-brand-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">J</div>
                <div className="bg-white rounded-2xl rounded-tl-sm shadow-sm px-4 py-3 max-w-[260px]">
                  <p className="text-gray-800 text-sm">Almost done! What electrical work do you need? (e.g. smoke alarms, fan install, switchboard, underground power…)</p>
                </div>
              </div>
            )}
            {step === "done" && (
              <>
                <div className="flex justify-end">
                  <div className="bg-brand-600 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[240px]">
                    <p className="text-sm">{service || "General enquiry"}</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-brand-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">J</div>
                  <div className="bg-white rounded-2xl rounded-tl-sm shadow-sm px-4 py-3 max-w-[260px]">
                    <p className="text-gray-800 text-sm leading-relaxed">
                      Perfect, we&apos;ve got your details! 🎉<br /><br />
                      Jim or the team will call <strong>{phone}</strong> shortly to discuss the job and arrange a free quote.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Input area */}
          <div className="flex-shrink-0 px-5 py-4 bg-white border-t border-gray-100">
            {step === "name" && (
              <div className="space-y-2">
                <input
                  autoFocus
                  type="text"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setNameErr(""); }}
                  onKeyDown={(e) => e.key === "Enter" && submitName()}
                  placeholder="Your first name..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition bg-gray-50"
                />
                {nameErr && <p className="text-red-500 text-xs pl-1">{nameErr}</p>}
                <button onClick={submitName} className="btn-primary w-full justify-center py-3 text-sm">
                  Continue
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            )}
            {step === "phone" && (
              <div className="space-y-2">
                <input
                  autoFocus
                  type="tel"
                  value={phone}
                  onChange={(e) => { setPhone(e.target.value); setPhoneErr(""); }}
                  onKeyDown={(e) => e.key === "Enter" && submitPhone()}
                  placeholder="0400 000 000"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition bg-gray-50"
                />
                {phoneErr && <p className="text-red-500 text-xs pl-1">{phoneErr}</p>}
                <button onClick={submitPhone} className="btn-primary w-full justify-center py-3 text-sm">
                  Continue
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            )}
            {step === "service" && (
              <div className="space-y-2">
                <textarea
                  autoFocus
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  placeholder="Describe your job..."
                  rows={3}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition resize-none bg-gray-50"
                />
                <button onClick={submitService} className="btn-primary w-full justify-center py-3 text-sm">
                  Send Request ✓
                </button>
              </div>
            )}
            {step === "done" && (
              <div className="space-y-3">
                <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-green-800 text-sm font-medium">Request received! We&apos;ll call you soon.</p>
                </div>
                <a href="tel:+61432057619" className="btn-primary w-full justify-center py-3 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call 0432 057 619
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Toggle button */}
      {!isOpen ? (
        <button
          onClick={open}
          className="flex items-center gap-3 bg-brand-700 hover:bg-brand-800 text-white px-5 py-3.5 rounded-full shadow-2xl transition-all duration-200 hover:scale-105 chat-bubble"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="font-semibold text-sm">Get a Free Quote</span>
          <span className="bg-green-400 text-brand-950 text-xs font-bold px-2 py-0.5 rounded-full">Fast</span>
        </button>
      ) : (
        <button
          onClick={close}
          className="w-12 h-12 bg-brand-700 hover:bg-brand-800 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}
