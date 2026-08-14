# OmniRoute Upstream Provider Recovery & Egress Block Bypass
## Graph + Loop Driven Master Command & Diagnostic Playbook

> **Purpose:** Provide Antigravity with a deterministic, iterative, graph-based recovery workflow to diagnose, fix, and bypass connection blocks (Auggie CLI login, Vercel 403 egress blocks, and DuckDuckGo 418 challenges) inside OmniRoute.
>
> **Target System:** OmniRoute server running on `http://localhost:20128`
> **Local Configuration:** `C:\Users\MD SADIQUE AMIN\.omniroute`
> **Global Settings:** `C:\Users\MD SADIQUE AMIN\.gemini\config\mcp_config.json`

---

# 0. MASTER OBJECTIVE

```text
OMNIROUTE_PROVIDER_RECOVERY(http://localhost:20128)
        |
        +--> Diagnose current upstream provider states (Auggie, tllm, ddgw)
        |
        +--> Execute the state-machine graph recursively until zero blocks
        |
        +--> Automate Auggie CLI installation & OAuth token tracking
        |
        +--> Fetch, validate, and assign SOCKS5 proxies to bypass Vercel 403
        |
        +--> Rotate headers and agents to solve DuckDuckGo anti-abuse (418)
        |
        +--> Verify end-to-end streaming completions for all mapped models
        |
        +--> Generate a comprehensive health and status report
```

---

# 1. CORE OPERATING RULES

## 1.1 Non-Destructive Configuration Updates
Do **not** wipe user credentials. Before writing to `storage.sqlite` or `.env`, take a backup of the target database file. If a write fails, roll back to the database backup.

## 1.2 Programmatic Verification
Never assume a block is solved by a config write alone. You must execute a live fetch request against `/v1/chat/completions` using the affected model to verify response status.

---

# 2. GRAPH EXECUTION MODEL

```text
                         ┌────────────────────────┐
                         │ G0: START DIAGNOSIS    │
                         └───────────┬────────────┘
                                     ↓
                         ┌────────────────────────┐
                         │ G1: DETECT BLOCKED IPS │
                         └───────────┬────────────┘
                                     ↓
                         ┌────────────────────────┐
                         │ G2: AUGGIE OAUTH CHECK │
                         └──────┬─────────┬───────┘
                                │         │
                   unauthorized │         │ authorized
                                ↓         ↓
                       ┌─────────────┐  ┌──────────────────┐
                       │ G2A: OAUTH  │  │ G3: VERCEL       │
                       │ ACQUISITION │  │ EGRESS RESOLUTION│
                       └──────┬──────┘  └────────┬─────────┘
                              │                  │
                              └────────┬─────────┘
                                       ↓
                            ┌──────────────────────┐
                            │ G4: DDG CHALLENGE    │
                            │ MITIGATION           │
                            └──────────┬───────────┘
                                       ↓
                            ┌──────────────────────┐
                            │ G5: VALIDATION LOOP  │
                            └───────┬───────┬──────┘
                                    │       │
                                failed      passed
                                    │       │
                                    ↓       ↓
                                  G3/G4    G6: SUMMARY REPORT
```

---

# 3. LOOP ENGINE

```text
LOOP_ID = 0
MAX_RETRIES = 5
SUCCESS_THRESHOLD = 1

WHILE unresolved_blocks > 0 AND LOOP_ID < MAX_RETRIES:

    1. Trigger test query to the target model endpoint (e.g. `aug/sonnet4.6`, `tllm/GPT_5_4`).
    2. Read response headers and body payload.
    3. Identify failure code (502 Gateway, 403 Vercel, 418 DDG).
    
    4. IF code == 502 AND message includes "Auggie CLI not found":
           A. Execute global npm install for `@augmentcode/auggie`.
           B. Launch headless OAuth server listener.
           C. Prompt user to authorize the browser login.
           
    5. IF code == 403 AND message includes "Vercel mitigated":
           A. Fetch SOCKS5 proxies from public lists.
           B. Test proxies against theoldllm.vercel.app.
           C. Write working proxy to `proxy_registry` and assign to `theoldllm` provider.
           
    6. IF code == 418 AND message includes "anti-abuse challenge":
           A. Inject rotated Chrome User-Agent strings.
           B. Configure custom headers.
           
    7. Execute re-validation fetch check.
    8. IF test returns 200 OK:
           Mark current block as RESOLVED.
           
    LOOP_ID = LOOP_ID + 1

END WHILE
```

---

# 4. STEP-BY-STEP ACTIONS

### Node G1 — Facts & Diagnosis
Run the following PowerShell verification commands to log current errors:
```powershell
# Check doctor outputs
omniroute doctor

# Test Sonnet model endpoint
node -e "fetch('http://localhost:20128/v1/chat/completions', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer dummy-key' }, body: JSON.stringify({ model: 'aug/sonnet4.6', messages: [{ role: 'user', content: 'hello' }] }) }).then(res => res.json()).then(console.log)"
```

### Node G2 — Auggie OAuth Activation
If `aug/sonnet4.6` returns `Auggie CLI not found` or `unauthorized`:
1. Run `npm install -g @augmentcode/auggie@latest`.
2. Launch background command `auggie login --headless`.
3. Complete the interactive browser authentication flow.
4. Verify token creation using `Get-Content "$env:USERPROFILE\.augment\.auggie.json"`.

### Node G3 — Vercel Egress & Proxy Setup
If `theoldllm` returns Vercel blocked:
1. Run [find_and_assign_proxy.cjs](file:///C:/Users/MD%20SADIQUE%20AMIN/.gemini/antigravity-ide/brain/78fbaa6c-1fc3-4ce6-b421-7aca3f6e1f20/scratch/find_and_assign_proxy.cjs) to test and write a fresh working SOCKS5 proxy to `storage.sqlite`.
2. Verify registry assignment using:
   ```powershell
   omniroute providers status
   ```

### Node G4 — DuckDuckGo Challenge Mitigation
1. Spoof client browser fingerprinting by updating the `User-Agent` headers in the provider executors.
2. Route DDG calls through the newly resolved proxy pool.
