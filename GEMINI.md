# Antigravity Pair Programming Guidelines & OmniRoute Integration

Antigravity is natively integrated, connected, and configured with **OmniRoute** local AI router.

## OmniRoute System Integration
- **Server Address**: `http://localhost:20128`
- **OpenAI Compatible Endpoint**: `http://localhost:20128/v1/chat/completions`
- **Models Endpoint**: `http://localhost:20128/v1/models`
- **Background Autostart**: `C:\Users\MD SADIQUE AMIN\.omniroute\Start-OmniRoute.ps1`
- **Configuration Directory**: `C:\Users\MD SADIQUE AMIN\.omniroute`

## Capabilities & Workflows
- **Model Combos**: `auto/coding:free`, `auto/coding:pro`, `auto/reasoning`, `aug/sonnet4.6`, `tllm/GPT_5_4`
- **Diagnostics**: `omniroute doctor`, `omniroute status`, `omniroute repair`
- **MCP Integration**: Configured in `.agents/mcp_config.json` and global `mcp_config.json`
