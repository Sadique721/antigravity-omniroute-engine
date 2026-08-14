# Antigravity — Gmail Restriction Recovery & Root-Cause Investigation
## Graph + Loop Driven Master Command for `entitykart@gmail.com`

> **Purpose:** Give Antigravity a deterministic, iterative, graph-based recovery workflow for investigating and resolving the Gmail restriction shown in the provided screenshot.
>
> **Target account:** `entitykart@gmail.com`
>
> **Restriction shown:** Gmail access restricted because Google detected possible unwanted/spam content. The screenshot also states that a previous review was completed and access remained restricted after the decision on **August 3, 2026**.
>
> **Critical boundary:** This workflow must **not bypass Google's enforcement, evade detection, create replacement accounts to continue prohibited activity, spoof identity, defeat CAPTCHA/security controls, or submit deceptive appeals**. It must only perform legitimate diagnosis, security remediation, configuration cleanup, evidence collection, and truthful recovery/appeal preparation.

---

# 0. MASTER OBJECTIVE

You are **Antigravity**, operating as a senior incident-response + software-audit + account-recovery agent.

Your objective is:

```text
GMAIL_RESTRICTION_RECOVERY(entitykart@gmail.com)
        |
        +--> Identify the actual/root causes
        |
        +--> Separate confirmed facts from hypotheses
        |
        +--> Stop every legitimate source of unwanted sending
        |
        +--> Secure the Google account and connected applications
        |
        +--> Audit local projects, automation, scripts, browser extensions,
        |    OAuth integrations, SMTP/Gmail API usage, and job/email workflows
        |
        +--> Build a complete evidence graph
        |
        +--> Generate remediation actions
        |
        +--> Re-test after every remediation
        |
        +--> Determine whether the problem is:
        |       A. Account compromise
        |       B. OAuth compromise/misuse
        |       C. Legitimate but excessive/bulk sending
        |       D. Unsolicited/poorly targeted sending
        |       E. Automation/configuration problem
        |       F. Security/browser issue
        |       G. Google-side policy enforcement
        |       H. Multiple simultaneous causes
        |
        +--> Prepare a truthful appeal/recovery package
        |
        +--> Verify that the environment is safe before any future
             legitimate email automation is re-enabled.
```

---

# 1. NON-NEGOTIABLE OPERATING RULES

## 1.1 Never assume the root cause

Do **not** conclude:

```text
"Google made a mistake"
```

or:

```text
"The account was hacked"
```

or:

```text
"The automation caused it"
```

until evidence supports that conclusion.

Every finding must be classified as:

```text
CONFIRMED
PROBABLE
POSSIBLE
DISPROVED
UNKNOWN
```

---

## 1.2 Never fabricate evidence

Do not invent:

- sent-email counts
- IP addresses
- Google security events
- OAuth applications
- recipient complaints
- timestamps
- API calls
- policy violations
- compromised devices
- Google decisions
- appeal outcomes

If information cannot be accessed, record:

```text
UNKNOWN — DATA NOT AVAILABLE
```

---

## 1.3 Never expose secrets

Never print, commit, upload, or place into reports:

- passwords
- Gmail passwords
- OAuth client secrets
- OAuth refresh tokens
- access tokens
- API keys
- SMTP passwords
- cookies
- session tokens
- browser profile secrets
- private keys
- `.env` secret values

When inspecting configuration, replace values with:

```text
[REDACTED]
```

Only report:

```text
VARIABLE_EXISTS=true
VARIABLE_NAME=GMAIL_CLIENT_ID
VARIABLE_VALUE=[REDACTED]
```

---

## 1.4 Never bypass Google enforcement

Do NOT:

- bypass CAPTCHA
- bypass Google login challenges
- defeat account restrictions
- automate security verification
- manipulate Google's anti-spam systems
- create multiple accounts to evade a restriction
- rotate identities/domains/IPs to evade enforcement
- spoof sender identities
- impersonate Google
- submit false appeals
- claim compromise without evidence

If Google requires a manual action, stop and produce an exact manual-action instruction.

---

# 2. GRAPH EXECUTION MODEL

Do not execute this as a simple linear checklist.

Represent the investigation as a directed graph.

```text
                         ┌────────────────────────┐
                         │ G0: START              │
                         └───────────┬────────────┘
                                     ↓
                         ┌────────────────────────┐
                         │ G1: CAPTURE FACTS      │
                         └───────────┬────────────┘
                                     ↓
                         ┌────────────────────────┐
                         │ G2: SECURITY TRIAGE    │
                         └──────┬─────────┬───────┘
                                │         │
                    compromised │         │ not confirmed
                                ↓         ↓
                       ┌─────────────┐  ┌──────────────────┐
                       │ G3A         │  │ G3B              │
                       │ COMPROMISE  │  │ SENDING AUDIT    │
                       └──────┬──────┘  └────────┬─────────┘
                              │                  │
                              └────────┬─────────┘
                                       ↓
                            ┌──────────────────────┐
                            │ G4: AUTOMATION AUDIT │
                            └──────────┬───────────┘
                                       ↓
                            ┌──────────────────────┐
                            │ G5: PROJECT AUDIT    │
                            └──────────┬───────────┘
                                       ↓
                            ┌──────────────────────┐
                            │ G6: OAUTH/API AUDIT  │
                            └──────────┬───────────┘
                                       ↓
                            ┌──────────────────────┐
                            │ G7: CAUSE CORRELATION│
                            └──────────┬───────────┘
                                       ↓
                            ┌──────────────────────┐
                            │ G8: REMEDIATION      │
                            └──────────┬───────────┘
                                       ↓
                            ┌──────────────────────┐
                            │ G9: RE-VALIDATION    │
                            └───────┬───────┬──────┘
                                    │       │
                               failed      passed
                                    │       │
                                    ↓       ↓
                              G2/G4/G5   G10
                                 ↑        │
                                 └────────┤
                                          ↓
                              ┌─────────────────────┐
                              │ G10: APPEAL PACKAGE │
                              └──────────┬──────────┘
                                         ↓
                              ┌─────────────────────┐
                              │ G11: FINAL REPORT   │
                              └─────────────────────┘
```

---

# 3. LOOP ENGINE

Antigravity must use an iterative loop instead of assuming that one scan is sufficient.

## Core loop

```text
LOOP_ID = 0

WHILE unresolved_root_causes > 0
      AND safety_risk != "CRITICAL_UNCONTROLLED"
      AND loop_id < MAX_ITERATIONS:

    1. Collect evidence.
    2. Update evidence graph.
    3. Generate hypotheses.
    4. Score hypotheses.
    5. Select highest-value diagnostic action.
    6. Execute only safe/authorized action.
    7. Record result.
    8. Update confidence.
    9. Apply remediation if supported.
   10. Re-test.
   11. Compare before/after state.
   12. Detect regression.
   13. If new evidence appears:
           return to affected graph node.
   14. If remediation fails:
           generate alternative remediation branch.
   15. If all local branches are exhausted:
           classify as Google-side/manual-resolution dependency.

    LOOP_ID = LOOP_ID + 1

END WHILE
```

### Loop termination conditions

Stop when:

```text
A. Root cause is sufficiently confirmed and remediated
B. No additional authorized technical action is possible
C. Google-side enforcement requires manual review
D. Required evidence is unavailable
E. Continuing would risk account/security damage
```

---

# 4. GRAPH NODE G0 — START

Create an incident:

```text
Incident:
    Gmail restriction recovery

Account:
    entitykart@gmail.com

Evidence source:
    User-provided screenshot

Observed status:
    Gmail restricted

Observed reason:
    Possible unwanted content / spam

Previous review:
    Completed

Previous decision:
    Access remains restricted

Previous decision date:
    2026-08-03
```

Create:

```text
incident.json
evidence/
findings/
remediation/
appeal/
final-report/
```

Do not store secrets in these directories.

---

# 5. GRAPH NODE G1 — FACT CAPTURE

Create a fact table.

```text
FACT-001:
Gmail is restricted.

FACT-002:
Google says Gmail was used to send unwanted content.

FACT-003:
A previous review was completed.

FACT-004:
Access remained restricted after the decision dated 2026-08-03.

FACT-005:
The affected account is entitykart@gmail.com.
```

For every additional fact, record:

```text
FACT_ID
SOURCE
TIMESTAMP
CONFIDENCE
DESCRIPTION
```

---

# 6. GRAPH NODE G2 — SECURITY TRIAGE

Investigate all legitimate evidence available to the user.

## Security branches

```text
G2
 |
 +--> G2A: Known devices
 |
 +--> G2B: Recent security events
 |
 +--> G2C: Password/security state
 |
 +--> G2D: 2-Step Verification
 |
 +--> G2E: Third-party applications
 |
 +--> G2F: OAuth grants
 |
 +--> G2G: Browser extensions
 |
 +--> G2H: Forwarding/delegation
 |
 +--> G2I: Suspicious account activity
```

For each branch:

```text
IF suspicious activity confirmed
    → mark COMPROMISE_CANDIDATE
    → revoke unauthorized access where safely possible
    → secure account
    → re-test

ELSE IF no suspicious activity found
    → mark NOT_CONFIRMED
    → continue to sending/automation audit

ELSE
    → mark UNKNOWN
    → request manual evidence
```

---

# 7. GRAPH NODE G3A — COMPROMISE INVESTIGATION

If compromise is suspected:

```text
COMPROMISE
   |
   +--> Unknown device?
   |
   +--> Unknown OAuth app?
   |
   +--> Unknown browser extension?
   |
   +--> Unknown forwarding rule?
   |
   +--> Unknown sent mail?
   |
   +--> Unknown password/security event?
```

### Remediation sequence

```text
1. Secure Google account.
2. Remove unauthorized third-party access.
3. Sign out unknown sessions.
4. Change password.
5. Verify 2-Step Verification.
6. Review recovery methods.
7. Review Gmail forwarding/delegation.
8. Review filters.
9. Review connected applications.
10. Re-check security events.
```

Then:

```text
RETURN → G9 RE-VALIDATION
```

---

# 8. GRAPH NODE G3B — OUTGOING EMAIL AUDIT

Determine whether the account was used for:

```text
single-user correspondence
transactional email
job applications
bulk email
marketing
notifications
automation
testing
development
unknown sending
```

Create an evidence graph:

```text
Sender
  ↓
Application / Tool
  ↓
Credential / OAuth Grant
  ↓
Email API / SMTP
  ↓
Sending Workflow
  ↓
Recipients
  ↓
Message Pattern
  ↓
Google Abuse Signal
```

Do not claim the final node unless evidence exists.

---

# 9. GRAPH NODE G4 — AUTOMATION AUDIT

Search authorized local project directories for email functionality.

Potential technologies:

```text
n8n
Gmail API
Google OAuth
SMTP
JavaMail / Jakarta Mail
Spring Mail
Node.js mail libraries
Python smtplib
Python Google API
Nodemailer
Resend
SendGrid
Mailgun
browser automation
Playwright
Puppeteer
Selenium
cron
Task Scheduler
PowerShell
Bash
scheduled jobs
Docker services
```

Search for references such as:

```text
gmail
smtp
oauth
googleapis
nodemailer
smtplib
jakarta.mail
spring.mail
mail.smtp
sendEmail
sendMail
messages.send
users.messages.send
```

Also inspect:

```text
.env
.env.*
application.properties
application.yml
config files
docker-compose files
workflow JSON
n8n workflows
scripts
package.json
pom.xml
requirements.txt
Dockerfiles
CI/CD configuration
Windows Task Scheduler
startup scripts
```

### Important

Do not print secret values.

---

# 10. GRAPH NODE G5 — PROJECT/REPOSITORY AUDIT

Inspect relevant projects for accidental or intentional email automation.

Priority:

```text
1. Job application automation
2. n8n workflows
3. AI agents
4. Gmail integrations
5. SMTP integrations
6. Backend notification systems
7. Test scripts
8. Browser automation
9. Cron/scheduled jobs
10. Development utilities
```

For each project produce:

```text
PROJECT
EMAIL_CAPABILITY
AUTOMATION_PRESENT
AUTH_METHOD
RECIPIENT_SOURCE
SCHEDULE
MESSAGE_PATTERN
RATE_LIMIT
CONSENT_MODEL
FAILURE_HANDLING
CURRENT_STATUS
RISK
```

---

# 11. GRAPH NODE G6 — OAUTH/API AUDIT

Build:

```text
Google Account
      ↓
OAuth Application
      ↓
Client ID
      ↓
Scopes
      ↓
Access Token
      ↓
Refresh Token
      ↓
Application
      ↓
Email Sending
```

Identify whether any integration has permissions related to:

```text
Gmail read
Gmail compose
Gmail send
Gmail modify
Full mailbox access
```

If an unknown/unneeded integration is discovered:

```text
FLAG
  ↓
USER CONFIRMATION IF REQUIRED
  ↓
REVOKE
  ↓
RE-TEST
```

Never delete an important integration blindly.

---

# 12. GRAPH NODE G7 — ROOT-CAUSE CORRELATION ENGINE

Create hypotheses:

```text
H1 = Account compromise
H2 = OAuth compromise
H3 = Malicious/unsafe browser extension
H4 = Bulk sending
H5 = Unsolicited email
H6 = Job-application automation
H7 = Automation misconfiguration
H8 = Excessive sending frequency
H9 = Repeated message pattern
H10 = Recipient complaints/spam reports
H11 = Unknown third-party integration
H12 = Google-side enforcement despite no local cause
H13 = Combination of multiple causes
```

Score each:

```text
CONFIDENCE =
    Evidence Strength
    +
    Temporal Correlation
    +
    Technical Correlation
    +
    Reproducibility
    -
    Contradictory Evidence
```

Use qualitative scores:

```text
0 = unsupported
1 = weak
2 = possible
3 = probable
4 = strongly supported
5 = confirmed
```

Do not claim mathematical certainty from heuristic scoring.

---

# 13. COMBINATION/PERMUTATION ENGINE

Evaluate combinations instead of only individual causes.

Examples:

```text
H1 + H4
H1 + H6
H2 + H4
H2 + H6
H3 + H2
H4 + H5
H4 + H8
H4 + H9
H5 + H10
H6 + H7
H6 + H8
H6 + H9
H7 + H8
H7 + H9
H1 + H2 + H4
H2 + H4 + H6
H4 + H5 + H8
H4 + H6 + H8 + H9
H1 + H2 + H6 + H7
```

Do not generate meaningless combinations indefinitely.

Use an evidence-pruning rule:

```text
IF combination has no supporting evidence
    → prune

IF combination contradicts confirmed evidence
    → prune

IF combination requires unavailable data
    → mark UNKNOWN

IF combination explains multiple independent observations
    → increase priority
```

---

# 14. ROOT-CAUSE DECISION GRAPH

```text
                         ┌─────────────────┐
                         │ Restriction     │
                         └────────┬────────┘
                                  ↓
                     ┌─────────────────────────┐
                     │ Was account compromised?│
                     └───────┬─────────┬───────┘
                             │YES      │NO/UNKNOWN
                             ↓         ↓
                    Secure account   Sending audit
                             │         │
                             └────┬────┘
                                  ↓
                    ┌─────────────────────────┐
                    │ Was automation involved?│
                    └───────┬─────────┬───────┘
                            │YES      │NO
                            ↓         ↓
                   Audit workflow   Manual sending audit
                            │         │
                            └────┬────┘
                                 ↓
                    ┌─────────────────────────┐
                    │ Bulk/unwanted pattern?  │
                    └───────┬─────────┬───────┘
                            │YES      │NO
                            ↓         ↓
                    Remediate      Investigate
                            │         │
                            └────┬────┘
                                 ↓
                    ┌─────────────────────────┐
                    │ Root cause confirmed?   │
                    └───────┬─────────┬───────┘
                            │YES      │NO
                            ↓         ↓
                      Remediate     More evidence
                            │         │
                            └────┬────┘
                                 ↓
                          Re-validation
                                 ↓
                    ┌─────────────────────────┐
                    │ Still restricted?       │
                    └───────┬─────────┬───────┘
                            │YES      │NO
                            ↓         ↓
                     Google appeal   Verify
```

---

# 15. GRAPH NODE G8 — REMEDIATION ENGINE

Use remediation branches based on confirmed cause.

## Branch A — Compromised account

```text
Secure account
→ revoke unknown access
→ remove unknown sessions
→ change password
→ verify 2FA
→ inspect recovery methods
→ inspect forwarding/delegation
→ inspect filters
→ inspect connected apps
→ re-test
```

## Branch B — OAuth misuse

```text
Identify application
→ identify scopes
→ identify purpose
→ revoke unauthorized grant
→ remove obsolete credentials
→ stop sender
→ re-test
```

## Branch C — Unsafe automation

```text
Disable sending workflow
→ preserve evidence
→ inspect recipient source
→ inspect message generation
→ inspect scheduling
→ inspect rate limiting
→ inspect consent/recipient legitimacy
→ redesign workflow
→ keep disabled until verified safe
```

## Branch D — Bulk/unsolicited sending

```text
STOP sending
→ identify recipient source
→ identify why recipients were contacted
→ remove unsolicited targets
→ remove scraped/unknown recipient lists
→ remove misleading content
→ remove deceptive headers
→ preserve evidence
→ prepare truthful appeal
```

## Branch E — Browser compromise

```text
Disable suspicious extensions
→ review installed extensions
→ remove unknown extensions
→ review browser sessions
→ secure Google account
→ scan device
→ re-test
```

## Branch F — No local cause discovered

```text
Do not fabricate a technical fix.

Document:
    "No local root cause confirmed."

Collect:
    screenshot
    restriction status
    security audit results
    automation audit results
    OAuth audit results
    remediation evidence

Then:
    prepare Google appeal/manual recovery path.
```

---

# 16. SAFE AUTOMATION DESIGN GATE

Before any email automation is ever re-enabled, verify:

```text
[ ] Recipient source is legitimate.
[ ] Recipients reasonably expect the communication.
[ ] No scraped/unknown recipient list is used.
[ ] No deceptive identity is used.
[ ] No misleading subject/content is used.
[ ] No spam-like repeated messages.
[ ] Sending volume is appropriate to the legitimate use case.
[ ] Errors are handled safely.
[ ] Duplicate sends are prevented.
[ ] Retry loops cannot create uncontrolled email bursts.
[ ] Dead-letter/failure handling exists.
[ ] Rate limiting exists where appropriate.
[ ] Stop switch exists.
[ ] Logs exist without storing secrets.
[ ] OAuth scopes are minimal.
[ ] Credentials are securely stored.
[ ] Test mode does not contact real recipients accidentally.
```

If any critical gate fails:

```text
DO NOT ENABLE SENDING.
```

---

# 17. EMAIL LOOP SAFETY ANALYSIS

Specifically search for dangerous loops such as:

```text
while(true)
forEach(recipient)
retry forever
recursive workflow
cron + retry
queue reprocessing
failed job requeue
duplicate webhook
event → email → event
email failure → retry → email
```

Model the flow:

```text
TRIGGER
  ↓
JOB CREATED
  ↓
EMAIL GENERATED
  ↓
SEND
  ↓
SUCCESS ───────────────→ END
  ↓
FAILURE
  ↓
RETRY
  ↓
MAX RETRIES?
  ├── NO → controlled retry
  └── YES → DEAD LETTER / STOP
```

Reject any implementation equivalent to:

```text
FAILURE → INFINITE RETRY → SEND → FAILURE → ...
```

---

# 18. DUPLICATE-SENDING ANALYSIS

Search for:

```text
same recipient
same subject
same body
same job ID
same application ID
same notification ID
same event ID
```

Require idempotency where applicable:

```text
EVENT_ID
    ↓
CHECK_ALREADY_SENT
    ↓
YES → STOP
NO  → SEND
```

Never create uncontrolled duplicate sends.

---

# 19. RATE/QUEUE SAFETY GRAPH

For any legitimate future automation:

```text
INPUT
  ↓
VALIDATE
  ↓
DEDUPLICATE
  ↓
QUEUE
  ↓
RATE CONTROL
  ↓
SEND
  ↓
RESULT
  ├── SUCCESS → RECORD
  ├── TRANSIENT FAILURE → bounded retry
  └── PERMANENT FAILURE → stop/dead-letter
```

There must be a global emergency stop:

```text
EMAIL_AUTOMATION_ENABLED=false
```

or equivalent.

---

# 20. RE-VALIDATION LOOP

After every remediation:

```text
BEFORE
  ↓
ACTION
  ↓
AFTER
  ↓
COMPARE
  ↓
REGRESSION?
  ├── YES → rollback / investigate
  └── NO  → continue
```

Re-check:

```text
Security state
OAuth state
Automation state
Email configuration
Scheduled tasks
Browser extensions
Project configuration
Application processes
Queues
Workers
Logs
```

---

# 21. FINAL ROOT-CAUSE CLASSIFICATION

Return exactly one primary classification:

```text
RCA-1  CONFIRMED COMPROMISE
RCA-2  CONFIRMED OAUTH MISUSE
RCA-3  CONFIRMED AUTOMATION MISCONFIGURATION
RCA-4  CONFIRMED BULK/UNSOLICITED SENDING
RCA-5  CONFIRMED BROWSER/LOCAL SECURITY ISSUE
RCA-6  MULTIPLE CONFIRMED CAUSES
RCA-7  PROBABLE CAUSE, NOT FULLY CONFIRMED
RCA-8  NO LOCAL ROOT CAUSE CONFIRMED
RCA-9  GOOGLE-SIDE ENFORCEMENT REQUIRING MANUAL REVIEW
RCA-10 INSUFFICIENT EVIDENCE
```

---

# 22. APPEAL PREPARATION ENGINE

Only prepare a truthful appeal.

The appeal package must contain:

```text
1. Account:
   entitykart@gmail.com

2. Restriction:
   Gmail service restricted.

3. Observed Google reason:
   unwanted/spam content detection.

4. Previous review:
   completed.

5. Previous decision:
   access remains restricted.

6. Investigation performed:
   security audit
   OAuth audit
   automation audit
   project audit
   browser audit
   configuration audit

7. Confirmed root cause:
   <ONLY IF SUPPORTED>

8. Remediation:
   <ACTUAL ACTIONS>

9. Remaining uncertainty:
   <IF ANY>

10. Request:
   manual re-review/restoration if appropriate.
```

Never claim:

```text
"I never sent any automated emails"
```

unless the investigation actually establishes that.

Never claim:

```text
"My account was hacked"
```

unless evidence supports it.

---

# 23. APPEAL DECISION TREE

```text
Previous appeal denied
        ↓
Was new evidence discovered?
        ├── YES
        │     ↓
        │  Document new evidence
        │     ↓
        │  Document remediation
        │     ↓
        │  Prepare truthful new appeal
        │
        └── NO
              ↓
        Do not manufacture evidence
              ↓
        Provide current status
              ↓
        Follow Google's available recovery process
```

---

# 24. ANTIGRAVITY EXECUTION PRIORITY

Use this priority order:

```text
P0 = Security / account compromise
P1 = Active email sending
P2 = OAuth/API access
P3 = Automation loops
P4 = Recipient/source problems
P5 = Browser/device security
P6 = Configuration
P7 = Evidence correlation
P8 = Appeal preparation
P9 = Future-safe architecture
```

Never work on P8/P9 while P0/P1 remains actively dangerous.

---

# 25. STOP CONDITIONS

Immediately stop automation-related work if:

```text
- An active uncontrolled sender is found.
- Unknown credentials are actively being used.
- An unknown application has Gmail send access.
- An infinite retry loop exists.
- A sending queue is continuously growing.
- A malicious process is suspected.
- Credentials are exposed.
- Account compromise appears active.
```

Then report:

```text
CRITICAL ACTION REQUIRED
```

and provide only safe containment instructions.

---

# 26. EVIDENCE GRAPH FORMAT

Maintain:

```text
NODE:
    ID
    TYPE
    SOURCE
    CONFIDENCE
    STATUS

EDGE:
    FROM
    RELATION
    TO
    CONFIDENCE
```

Example:

```text
ACCOUNT
  |
  | authorized_by
  ↓
OAUTH_APP
  |
  | used_by
  ↓
APPLICATION
  |
  | triggers
  ↓
WORKFLOW
  |
  | sends
  ↓
EMAIL
  |
  | addressed_to
  ↓
RECIPIENT
```

---

# 27. HYPOTHESIS GRAPH

Maintain:

```text
OBSERVATION
     ↓
HYPOTHESIS
     ↓
SUPPORTING EVIDENCE
     ↓
CONTRADICTING EVIDENCE
     ↓
DIAGNOSTIC TEST
     ↓
RESULT
     ↓
CONFIDENCE UPDATE
```

Every hypothesis must have at least one proposed verification path.

---

# 28. LOOP FAILURE RECOVERY

If a diagnostic action fails:

```text
FAIL
 ↓
Classify failure:
    AUTH
    NETWORK
    PERMISSION
    TOOL
    MISSING DATA
    GOOGLE-SIDE LIMITATION
    LOCAL CONFIGURATION
 ↓
Generate alternative path
 ↓
Do NOT blindly repeat destructive operation
 ↓
Retry only if safe
```

Maximum retry rule:

```text
Do not repeatedly execute the same failed destructive action.
```

---

# 29. ALTERNATIVE-SOLUTION MATRIX

For each problem, generate alternatives.

Example:

```text
Problem: Unknown OAuth app

Solution A:
    Revoke access through Google Account UI.

Solution B:
    If UI unavailable, document the app and require manual revocation.

Solution C:
    Disable the local integration that uses the credential.

Solution D:
    Remove the credential from the application environment after evidence capture.

Solution E:
    Rotate/reissue legitimate credentials after recovery.
```

Do not execute all alternatives blindly.

Use:

```text
Evidence → Risk → Least destructive option → Verification
```

---

# 30. NO-DATA BRANCH

If Antigravity cannot access Gmail security/activity information:

```text
DO NOT GUESS.

Create:

MISSING-DATA-001
    Data: Google security activity
    Reason: account UI unavailable
    Required action: user/manual access

MISSING-DATA-002
    Data: Gmail sending history
    Reason: service restricted
    Required action: user/manual access if available

MISSING-DATA-003
    Data: OAuth grants
    Reason: unavailable to agent
    Required action: Google Account security page
```

Continue local investigation without pretending missing information is known.

---

# 31. PROJECT-SIDE SEARCH COMMAND STRATEGY

When operating inside a local project, use the available project-search tools rather than randomly editing files.

Search concepts:

```text
gmail
smtp
mail
email
oauth
google
sendMail
sendEmail
messages.send
users.messages.send
nodemailer
jakarta.mail
spring.mail
smtplib
googleapis
gmail.users
n8n
workflow
cron
schedule
queue
retry
recipient
unsubscribe
bulk
newsletter
job application
```

Then construct:

```text
FILE → FUNCTION → CALLER → TRIGGER → RECIPIENT SOURCE
```

Do not edit a file merely because it contains the word `gmail`.

---

# 32. CODE-CHANGE SAFETY

If a real software defect is found:

```text
1. Explain defect.
2. Show affected component.
3. Identify impact.
4. Create minimal fix.
5. Preserve behavior unrelated to the issue.
6. Run tests.
7. Run static analysis.
8. Search for duplicate implementation.
9. Search for regression.
10. Re-test.
```

Do not rewrite the entire project unnecessarily.

---

# 33. DO NOT MODIFY GOOGLE'S SIDE

Antigravity may:

```text
inspect
diagnose
secure
disable local automation
remove local secrets
prepare evidence
prepare truthful appeal
```

Antigravity must not:

```text
bypass
circumvent
spoof
evade
defeat
impersonate
automate Google security challenges
```

Google's enforcement decision itself can only be changed through Google's legitimate recovery/review process.

---

# 34. FINAL REPORT FORMAT

Generate:

```text
GMAIL RESTRICTION INCIDENT REPORT

Account:
entitykart@gmail.com

Incident:
Gmail service restriction

Google-stated reason:
<exact observed reason, paraphrased>

Previous review:
<status>

Investigation duration:
<duration>

ROOT CAUSE
------------
Primary:
<classification>

Confidence:
<0-5>

Supporting evidence:
<list>

Contradicting evidence:
<list>

SECURITY
--------
Account compromise:
<confirmed/probable/not confirmed/unknown>

OAuth risk:
<status>

Browser/device risk:
<status>

AUTOMATION
----------
Email automation found:
<yes/no/unknown>

Active sender:
<yes/no/unknown>

Uncontrolled retry:
<yes/no>

Bulk/unsolicited behavior:
<confirmed/probable/not confirmed/unknown>

REMEDIATION
-----------
<actions>

VALIDATION
----------
<tests>

REMAINING RISKS
---------------
<risks>

GOOGLE-SIDE ACTION
------------------
<manual action required>

APPEAL READINESS
----------------
READY / NOT READY

REASON:
<reason>
```

---

# 35. SUCCESS CRITERIA

Do not define success as:

```text
"Gmail restriction disappeared"
```

because Google controls that state.

Technical success means:

```text
✓ No unauthorized Gmail access identified or remaining
✓ No unknown OAuth sender identified or remaining
✓ No active uncontrolled sender
✓ No infinite email retry
✓ No dangerous email queue
✓ No suspicious browser integration
✓ No exposed credentials
✓ Legitimate automation disabled until safe
✓ Root cause classified
✓ Evidence preserved
✓ Remediation validated
✓ Truthful appeal package ready
✓ Future automation has safety gates
```

Google-side success means:

```text
Gmail access restored by Google.
```

That must be treated as an external/manual outcome.

---

# 36. MASTER ANTIGRAVITY COMMAND

Execute the entire system as an iterative graph investigation:

```text
BEGIN GMAIL_RESTRICTION_RECOVERY

TARGET = entitykart@gmail.com

CREATE incident graph

LOAD known facts from supplied screenshot

CLASSIFY every fact as CONFIRMED

WHILE unresolved causes exist:

    RUN security graph

    IF active compromise is confirmed:
        CONTAIN safely
        SECURE account
        REVOKE unauthorized access
        RETURN to validation

    RUN OAuth graph

    IF unauthorized OAuth access is found:
        CONTAIN
        REVOKE where authorized
        RETURN to validation

    RUN local project graph

    SEARCH all authorized project/configuration/workflow sources

    BUILD:
        FILE
        → FUNCTION
        → CALLER
        → TRIGGER
        → RECIPIENT SOURCE

    RUN automation graph

    DETECT:
        bulk sending
        repeated messages
        duplicate sends
        infinite retries
        uncontrolled queues
        scheduled sends
        browser automation
        API automation
        SMTP automation

    RUN combination/permutation hypothesis engine

    SCORE hypotheses

    PRUNE unsupported hypotheses

    SELECT highest-confidence/highest-risk root cause

    APPLY least-destructive legitimate remediation

    RUN validation

    IF validation fails:
        rollback where safe
        generate alternative branch
        continue loop

    IF no additional local evidence exists:
        classify Google-side/manual dependency
        exit technical loop

END WHILE

GENERATE:
    root-cause report
    evidence graph
    remediation report
    remaining-risk report
    truthful appeal package
    future-safe email automation requirements

END GMAIL_RESTRICTION_RECOVERY
```

---

# 37. FINAL INSTRUCTION TO ANTIGRAVITY

**Do not simply tell me that Gmail is restricted.**

Perform a structured investigation.

Do not create a fake solution.

Do not assume compromise.

Do not assume innocence.

Do not assume automation is the cause.

Do not assume Google is wrong.

Use evidence.

Use graph traversal.

Use iterative loops.

Use hypothesis scoring.

Use alternative remediation branches.

Use combination/permutation analysis where evidence justifies it.

Continuously re-validate.

Do not expose secrets.

Do not bypass Google's security or enforcement.

If the problem is caused by a local project, identify the exact:

```text
project
file
module
function
configuration
workflow
credential path
trigger
recipient source
retry path
```

and fix only the legitimate software/configuration defect.

If the problem is account security, contain and secure it.

If the problem is OAuth, revoke unauthorized access.

If the problem is automation, disable and redesign the unsafe path.

If the problem is bulk/unsolicited sending, stop the behavior and document remediation.

If no local root cause can be proven, explicitly say:

```text
NO LOCAL ROOT CAUSE CONFIRMED.
GOOGLE-SIDE REVIEW IS REQUIRED.
```

Finally, produce a truthful, evidence-backed recovery/appeal package for:

```text
entitykart@gmail.com
```

**The goal is legitimate recovery and permanent prevention of recurrence — never enforcement bypass.**
