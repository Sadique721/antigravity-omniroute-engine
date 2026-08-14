# Antigravity Agent Configuration & OmniRoute Native Binding

Antigravity operates in tandem with **OmniRoute** local AI router and proxy server.

## Direct OmniRoute System Bindings
- **Host**: `localhost`
- **Port**: `20128`
- **OpenAI Compatible Endpoint**: `http://localhost:20128/v1/chat/completions`
- **Models API**: `http://localhost:20128/v1/models`
- **Autostart Service**: `C:\Users\MD SADIQUE AMIN\.omniroute\Start-OmniRoute.ps1`

## Operational Guidelines
1. Antigravity can leverage OmniRoute model combos (`auto/coding:free`, `auto/coding:pro`, `auto/reasoning`, `aug/sonnet4.6`, `tllm/GPT_5_4`) for AI tasks and model routing.
2. For system diagnostics, Antigravity uses `omniroute doctor` and `omniroute status`.
3. Native MCP server bindings are registered in `mcp_config.json`.
