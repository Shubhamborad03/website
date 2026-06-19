# Roof Quote Agent · Typeform Content

Strictly what Dave laid out in the meeting transcript: name, email, company name, phone, package. ABN dropped (lookup via entity name). Nothing else added.

Five questions total, plus a welcome and a thank-you screen.

---

## Welcome screen

**Headline:** Let's get your AI quoting agent live.

**Subtext:** Five quick details, takes a minute. We'll handle the rest from here.

**Button:** Start →

---

## Question 1 · Name

**Type:** Short text
**Required:** Yes
**Variable:** `name`

**Question:** What's your name?

---

## Question 2 · Company name

**Type:** Short text
**Required:** Yes
**Variable:** `company_name`

**Question:** What's the business name?

**Help text:** The name on your trade licence or trading name. We'll look up the ABN ourselves.

---

## Question 3 · Email

**Type:** Email
**Required:** Yes
**Variable:** `email`

**Question:** Best email to send your invoice to?

---

## Question 4 · Phone

**Type:** Phone number (Australia)
**Required:** Yes
**Variable:** `phone`

**Question:** Mobile number Dave can call to take payment?

---

## Question 5 · Package

**Type:** Multiple choice (single select)
**Required:** Yes
**Variable:** `package`

**Question:** Which package?

**Options:**
- Starter · $499/mo + $1,999 setup
- Growth · $599/mo + $2,499 setup
- Scale · $899/mo + $2,999 setup

---

## Thank-you screen

**Headline:** You're in, {{name}}.

**Body:**

Two emails are on their way:

**From Dave at Wolf Partners** · your invoice. Pay by card on the phone or by bank transfer.

**From Dev at Wolf AI** · your onboarding kickoff.

Your agent goes live within 7 days of receiving everything.

Any questions in the meantime, hit Dave at **dave@wolfpartners.com.au**.

---

## Email triggers (Typeform → Webhooks or Zapier)

### Email 1 · to dave@wolfpartners.com.au

**Subject:** New signup · {{company_name}} · {{package}}

**Body:**

New roofer signup ready for invoicing.

Name: {{name}}
Company: {{company_name}}
Email: {{email}}
Phone: {{phone}}
Package: {{package}}

Next step: look up the ABN, pull this into Xero, send invoice, ring {{phone}} to take payment.

---

### Email 2 · to dev@wolf-ai.com.au

**Subject:** New onboarding · {{company_name}} · {{package}}

**Body:**

New roofer signup. Send onboarding kickoff once Dave confirms invoice paid.

Name: {{name}}
Company: {{company_name}}
Email: {{email}}
Phone: {{phone}}
Package: {{package}}

---

### Email 3 · to {{email}} (customer)

**Subject:** Welcome to Wolf AI, {{name}}

**Body:**

{{name}},

Thanks for signing up. Your AI quoting agent is on its way.

Two things will land in your inbox over the next day:

**From Dave** · your invoice for {{package}}. Pay by card when Dave calls, or by bank transfer if you'd rather. Setup fee splits 50% on signing, 50% on go-live.

**From Dev** · your onboarding kickoff. He'll walk you through what we need to tune your agent properly.

Once we have everything, your agent is live within 7 days.

Anything you need in the meantime, hit me directly.

Dave
dave@wolfpartners.com.au
Wolf AI

---

## Post-submit checklist (manual for now)

1. Typeform sends both emails (Dave + Dev) on submit
2. Dave looks up ABN from `{{company_name}}` on ABN Lookup
3. Dave generates the Xero invoice, sends to `{{email}}`
4. Dave rings `{{phone}}` to take card payment or confirm bank transfer
5. On payment received, Dave pings Dev: "Paid. Send onboarding."
6. Dev sends the onboarding kickoff email
7. Customer returns assets → Dev starts the build → 7-day target to live

---

## Setup notes for Typeform

- Wolf AI logo at the top of the form
- Background: cream (#F4F1EA) to match landing page
- Button accent: terracotta (#A8512A)
- Welcome and thank-you screens use the landing page voice · plain, professional, no exclamation marks
- Answer recall in the thank-you screen ("You're in, {{name}}")
- Webhook the submission to both dave@wolfpartners.com.au and dev@wolf-ai.com.au immediately on submit
