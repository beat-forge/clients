# BeatForge: Clients 📦
![GitHub](https://img.shields.io/github/license/beat-forge/clients) ![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/beat-forge/clients/staging-web.yml?label=web)
 ![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/beat-forge/clients/build-gui.yml?label=gui)

This repository contains our SvelteKit web client and Tauri GUI client. The web client is hosted at [beatforge.net](https://beatforge.net) and the GUI client is available for download on the front page of the website.

## Development 🛠️

> NOTE: Our project is constantly evolving and we are always trying to use the latest and greatest technologies. We recommend using [rustup](https://rustup.rs/) to install Rust and [nvm](https://nvm.sh/) to manage your Node.js installations.

### Prerequisites
- [Rust](https://www.rust-lang.org/) (Stable)
- [Node.js](https://nodejs.org/en/) (LTS)
- [pnpm](https://pnpm.io/) (LTS)


### Setup
```bash
# Clone the repository
git clone https://github.com/beat-forge/clients.git

# Change directory
cd clients
```

### Web Client
```bash
# Install dependencies for the web client
pnpm install --filter=web

# Start the web client in development mode
pnpm run dev --filter=web
```

### GUI Client
```bash
# Install dependencies for the GUI client
pnpm install --filter=gui

# Start the GUI client in development mode
pnpm run dev --filter=gui
```

## License 📝
This project is licensed under the [GNU Affero General Public License v3.0](LICENSE).