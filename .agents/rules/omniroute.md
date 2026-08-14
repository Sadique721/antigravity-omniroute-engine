---
trigger: always_on
description: Mandatory rule binding Antigravity to OmniRoute proxy router.
---

# Antigravity <-> OmniRoute Native Binding Rule

Antigravity is natively configured and connected with **OmniRoute** local AI router on `http://localhost:20128`.

## Core Configuration
- **Server Address**: `http://localhost:20128`
- **OpenAI Compatible Chat API**: `http://localhost:20128/v1/chat/completions`
- **Models Catalog API**: `http://localhost:20128/v1/models`
- **Data Location**: `C:\Users\MD SADIQUE AMIN\.omniroute`
- **MCP Config**: Registered in `mcp_config.json`

## Direct Integration Capabilities
- Routing LLM completion calls through OmniRoute model combos (`auto/coding:free`, `aug/sonnet4.6`, `tllm/GPT_5_4`).
- Health and status management using `omniroute doctor` and `omniroute status`.
