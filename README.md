# Donation Platform (Skeleton)

This project is a **skeleton for a future donation platform**, structured like a forum site. It includes:

- A frontend form for submitting donation requests.
- A backend built with **Cloudflare Workers** and **D1 (SQLite)** for data storage.
- A plan to dynamically render posts and donations.

> ⚠️ This is not a complete product yet. The code is functional but still under development. It's an early-stage backend/frontend scaffold for a donation management system.

## 🧩 Features (So Far)

- `form.html`: Donation request submission form
- `formSubmit.js`: Sends data to backend (Cloudflare Worker)
- `donation-api`: Cloudflare Worker backend for handling POST requests
- `D1 Database`: Used for storing donation entries (table setup provided)

## 🛠️ Technologies

- HTML, CSS, JavaScript
- Cloudflare Workers
- Cloudflare D1 (SQLite)

## 📦 How to Use (Dev Mode)

1. Clone the repo.
2. Install [Wrangler](https://developers.cloudflare.com/workers/wrangler/install/).
3. Set up a D1 database and bind it in `wrangler.toml`.
4. Use `npx wrangler dev` to run the API locally.
5. Submit the form at `form.html`.

## 📌 License

See [LICENSE](./LICENSE) — you are free to use, modify, or repurpose this project however you like.

---

## 🚧 Status

🛑 Project is currently **on hold**.  
We built the foundation, but more work is needed to make it production-ready. Contributions and forks are welcome.
