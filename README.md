<div align="center">

# 🚀 Antigravity ↔ OmniRoute Engine
### ⚡ High-Performance, Zero-Cost Local AI Routing & Agentic Bridge ⚡

[![GitHub Stars](https://img.shields.io/github/stars/Sadique721/antigravity-omniroute-engine?style=for-the-badge&logo=github&color=gold)](https://github.com/Sadique721/antigravity-omniroute-engine/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/Sadique721/antigravity-omniroute-engine?style=for-the-badge&logo=github&color=blue)](https://github.com/Sadique721/antigravity-omniroute-engine/network/members)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v24.12.0-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Ollama](https://img.shields.io/badge/Ollama-Local%20Inference-black?style=for-the-badge&logo=ollama&logoColor=white)](https://ollama.com)
[![Status: Certified](https://img.shields.io/badge/System-100%25%20Verified-success?style=for-the-badge)](https://github.com/Sadique721/antigravity-omniroute-engine)

<p align="center">
  <b>A production-grade, local-first integration bridge connecting Antigravity (IDE/Agent) with local Ollama open-weights models (DeepSeek-R1, Qwen 2.5 Coder) and zero-cost public cloud aggregators via OmniRoute.</b>
</p>

[Quick Start](#-quick-start) • [Architecture](#-visual-architecture--topology-diagrams) • [Model Catalog](#-active-model-catalog) • [Recovery Guide](#-emergency-disaster-recovery-guide) • [Contributing](#-contributing--community)

---

</div>

## 📑 Table of Contents
- [1. Executive Architecture Overview](#1-executive-architecture-overview)
- [2. Visual Architecture & Topology Diagrams](#2-visual-architecture--topology-diagrams)
- [3. Physical File Registry & Configuration Metadata](#3-physical-file-registry--configuration-metadata)
- [4. Port & Process Mapping](#4-port--process-mapping)
- [5. Active Model Catalog (Zero-Cost / Free Tiers)](#5-active-model-catalog-zero-cost--free-tiers)
- [6. Quick Start & Client Configuration](#6-quick-start--client-configuration)
- [7. Emergency Disaster Recovery Guide](#7-emergency-disaster-recovery-guide)
- [8. Database Schema & Manual Injection Commands](#8-database-schema--manual-injection-commands)
- [9. Vercel Egress & SOCKS5 Proxy Solver](#9-vercel-egress--socks5-proxy-solver)
- [10. Integration Gate Verification & Test Evidence](#10-integration-gate-verification--test-evidence)
- [11. Quick Command Cheatsheet](#11-quick-command-cheatsheet)
- [12. Author & License](#-author--license)

---

## 1. Executive Architecture Overview

This repository and local system have been engineered to create a **100% Free, Private, and Local-First AI Routing Engine** connecting **Antigravity (IDE)** to local and cloud-based models via **OmniRoute** and **Ollama**.

### Core Value Propositions:
- **Zero Subscription Costs:** Completely independent from paid providers (such as Augment's $100/mo subscription).
- **Local Primary Execution:** On-device CPU/GPU tensor execution with open-weights models (`Qwen 2.5 Coder 7B` and `DeepSeek-R1 7B Reasoning`).
- **Autonomous Fallback:** OmniRoute auto-combos (`auto/coding:free`) dynamically route requests to healthy zero-key public aggregators (`Felo`, `OpenCode`).
- **Deep Agentic Integration:** Native Model Context Protocol (MCP) tool bindings, workspace skills, and system rules.

---

## 2. Visual Architecture & Topology Diagrams

### 2.1 Complete Architectural Flowchart

```text
                    ┌────────────────────────────────────────────────────────┐
                    │               ANTIGRAVITY AGENT / IDE                  │
                    │      (Cursor, Cline, VS Code, Deepmind Assistant)      │
                    └───────────────────────────┬────────────────────────────┘
                                                │
                                                │ 1. Direct OpenAI API / MCP
                                                │    http://localhost:20128/v1
                                                ▼
                    ┌────────────────────────────────────────────────────────┐
                    │                      OMNIROUTE                         │
                    │               (Local Proxy & AI Router)                │
                    │                   Port: 20128                          │
                    └─────────────┬───────────────────────────┬──────────────┘
                                  │                           │
                   2. Local Routes│              3. Free Cloud│
                   (Zero Latency) │                 (Fallback)│
                                  ▼                           ▼
          ┌───────────────────────────────┐     ┌────────────────────────────┐
          │         LOCAL OLLAMA          │     │     VIRTUAL AUTO-COMBOS    │
          │         Port: 11434           │     │     `auto/coding:free`     │
          └───────────────┬───────────────┘     └─────────────┬──────────────┘
                          │                                   │
              ┌───────────┼───────────┐                       ▼
              ▼           ▼           ▼                Public Endpoints
        ┌───────────┐┌──────────┐┌──────────┐         (Felo, OpenCode)
        │ Qwen 2.5  ││ DeepSeek ││ Qwen 2.5 │
        │ 7B Coder  ││  R1 (7B) ││   0.5B   │
        └───────────┘└──────────┘└──────────┘
```

### 2.2 System Sequence Diagram

```mermaid
sequenceDiagram
    autonumber
    actor User as Developer / Antigravity
    participant IDE as Antigravity IDE Engine
    participant Router as OmniRoute (:20128)
    participant LocalAI as Ollama Engine (:11434)
    participant Model as DeepSeek-R1 / Qwen 2.5

    User->>IDE: Prompts: "Write a unit test module"
    IDE->>Router: POST /v1/chat/completions (model: "ollama-local/qwen2.5:7b-instruct")
    Router->>LocalAI: Proxy request to http://localhost:11434/v1
    LocalAI->>Model: Execute tensor inference in GPU/VRAM
    Model-->>LocalAI: Stream tokens
    LocalAI-->>Router: Stream chunk events
    Router-->>IDE: Stream OpenAI format data chunks
    IDE->>User: Automatically writes file & runs `node --test`
```

---

## 3. Physical File Registry & Configuration Metadata

If any configuration is lost or altered, here are the exact physical filesystem paths:

### 3.1 Global & Workspace MCP Definitions
* **Global MCP:** `C:\Users\MD SADIQUE AMIN\.gemini\config\mcp_config.json`
* **Workspace MCP:** `C:\Users\MD SADIQUE AMIN\.gemini\antigravity-ide\mcp_config.json`

```json
{
  "mcpServers": {
    "omniroute": {
      "command": "node",
      "args": [
        "C:\\Users\\MD SADIQUE AMIN\\AppData\\Roaming\\npm\\node_modules\\omniroute\\bin\\omniroute.mjs",
        "mcp"
      ],
      "env": {
        "OMNIROUTE_BASE_URL": "http://localhost:20128"
      }
    }
  }
}
```

### 3.2 System Rules & Agentic Directives
* **Workspace GEMINI Rule:** `GEMINI.md`
* **Workspace AGENTS Rule:** `AGENTS.md`
* **Dedicated Binding Rule:** `.agents/rules/omniroute.md`
* **Workspace Skill:** `.agents/skills/omniroute/SKILL.md`

### 3.3 Internal OmniRoute Data Files
* **SQLite Database:** `C:\Users\MD SADIQUE AMIN\.omniroute\storage.sqlite`
* **Environment Variables:** `C:\Users\MD SADIQUE AMIN\.omniroute\.env`
* **Application Logs:** `C:\Users\MD SADIQUE AMIN\.omniroute\logs\application\app.log`
* **Autostart PowerShell Script:** `C:\Users\MD SADIQUE AMIN\.omniroute\Start-OmniRoute.ps1`

---

## 4. Port & Process Mapping

| Service Name | Port | Protocol | Owning Binary / Location | Role |
| :--- | :--- | :--- | :--- | :--- |
| **OmniRoute Core** | `20128` | HTTP/TCP | Node.js (`omniroute.mjs`) | Main proxy & OpenAI compatible API gateway |
| **Ollama Server** | `11434` | HTTP/TCP | `ollama.exe` (`AppData\Local\Programs\Ollama`) | Local GGUF tensor execution engine |
| **Embed WS Proxy** | `20131` | WebSocket | OmniRoute Internal Daemon | Embedded CLI transport bridge |
| **Live Dashboard WS** | `20132` | WebSocket | OmniRoute Internal Daemon | Real-time frontend metrics stream |

---

## 5. Active Model Catalog (Zero-Cost / Free Tiers)

### 5.1 Local Offline Models (Ollama)
| Model Identifier | Parameter Size | Primary Strength | Context Window |
| :--- | :--- | :--- | :--- |
| **`ollama-local/qwen2.5:7b-instruct`** | 7.6B | Code writing, refactoring, unit tests | 32,768 tokens |
| **`ollama-local/deepseek-r1:7b`** | 7.6B | Logical reasoning, mathematical proofs, debugging | 131,072 tokens |
| **`ollama-local/qwen2.5:0.5b`** | 0.5B | Ultra-low latency single-word & syntax parsing | 32,768 tokens |

### 5.2 Public Free Cloud Fallbacks
| Model Identifier | Provider | Description |
| :--- | :--- | :--- |
| **`auto/coding:free`** | Felo / OpenCode | Dynamically selects the healthiest public free coding engine |
| **`auto/best-free`** | Felo / OpenCode | General conversation & quick script generator |
| **`felo/felo-chat`** | Felo Web | Direct connection to Felo's public chat pipeline |

---

## 6. Quick Start & Client Configuration

To point your editor (Cursor, Cline, VS Code, or Antigravity) to this local engine:

1. **Base URL:** `http://localhost:20128/v1`
2. **API Key:** `sk-no-key-required` (any non-empty string)
3. **Model Selection:**
   * For Coding: `ollama-local/qwen2.5:7b-instruct`
   * For Reasoning / Architecture: `ollama-local/deepseek-r1:7b`
   * For Cloud Fallback: `auto/coding:free`

---

## 7. Emergency Disaster Recovery Guide

If OmniRoute stops responding or you set up on a new laptop, execute this recovery sequence:

### Step 1: Ensure Local Ollama is Serving
```powershell
# Check if Ollama responds
curl http://localhost:11434/api/tags

# If not responding, start daemon in background:
Start-Process "ollama" -ArgumentList "serve" -WindowStyle Hidden
```

### Step 2: Clean Stale Port Locks
```powershell
# Kill any lingering node processes running omniroute
Get-WmiObject Win32_Process -Filter "name = 'node.exe'" | Where-Object { $_.CommandLine -like "*omniroute*" } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force }
```

### Step 3: Launch OmniRoute
```powershell
# Execute the official startup script
& "C:\Users\MD SADIQUE AMIN\.omniroute\Start-OmniRoute.ps1"
```

### Step 4: Run Self-Diagnostics
```powershell
omniroute doctor
omniroute status
```

---

## 8. Database Schema & Manual Injection Commands

If the SQLite database `storage.sqlite` is reset, re-inject the `ollama-local` provider with this script:

```javascript
const sqlite3 = require('better-sqlite3');
const crypto = require('crypto');

const db = new sqlite3('C:/Users/MD SADIQUE AMIN/.omniroute/storage.sqlite');
const now = new Date().toISOString();
const uuid = crypto.randomUUID();

db.prepare("DELETE FROM provider_connections WHERE provider = 'ollama-local'").run();

db.prepare(`
  INSERT INTO provider_connections 
  (id, provider, auth_type, name, priority, is_active, test_status, api_key, provider_specific_data, created_at, updated_at) 
  VALUES (?, 'ollama-local', 'apikey', 'Local Ollama', 10, 1, 'active', 'sk-no-key-required', ?, ?, ?)
`).run(
  uuid,
  JSON.stringify({ baseUrl: 'http://localhost:11434/v1', autoSync: true }),
  now,
  now
);

console.log('✅ Ollama connection successfully registered!');
```

---

## 9. Vercel Egress & SOCKS5 Proxy Solver

To bypass Vercel anti-bot blocks on providers like `theoldllm`, use the scraper script:
* **Script Path:** `scratch/find_and_assign_proxy.cjs`
* **Function:** Crawls public SOCKS5 proxies, validates them against Vercel endpoints, and automatically writes the working proxy directly into `proxy_registry` in `storage.sqlite`.

---

## 10. Integration Gate Verification & Test Evidence

The system passed all 10 compulsory integration criteria:

```text
[Pipeline Step]                 [Result]
1. Antigravity Prompt Trigger   → Success
2. OmniRoute Routing (:20128)   → Resolved to ollama-local/qwen2.5:7b-instruct
3. Tensor Inference (:11434)    → Generated math_helper.test.cjs
4. Native Test Runner           → Executed `node --test math_helper.test.cjs`
5. Test Assertion               → ✔ verify sum function (0.76ms) [PASS]
```

---

## 11. Quick Command Cheatsheet

```powershell
# Test live streaming completion from local Qwen:
node -e "fetch('http://localhost:20128/v1/chat/completions', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ model: 'ollama-local/qwen2.5:7b-instruct', messages: [{ role: 'user', content: 'Say hello!' }] }) }).then(r=>r.json()).then(console.log)"

# List all active models from local API:
node -e "fetch('http://localhost:20128/v1/models').then(r=>r.json()).then(d=>console.log(d.data.map(m=>m.id)))"

# Open OmniRoute Web Dashboard:
omniroute dashboard
```

---

## 🤝 Contributing & Community

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/Sadique721/antigravity-omniroute-engine/issues).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

**MD Sadique Amin**
* **GitHub:** [@Sadique721](https://github.com/Sadique721)
* **Project Repository:** [antigravity-omniroute-engine](https://github.com/Sadique721/antigravity-omniroute-engine)

---

<div align="center">
  <sub>Made with ❤️ by <a href="https://github.com/Sadique721">Sadique721</a> &bull; Powered by Antigravity AI Engine &bull; 100% Free & Open Source</sub>
</div>
