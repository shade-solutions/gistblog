# GistBlog

A **lightweight social blogging platform powered by GitHub Gists**, built with **Next.js**, **Auth.js**, and **Novel Markdown Editor**.  
Users can **write, edit, and manage posts directly on GitHub Gists** while enjoying social features like comments, likes, shares, and follower feeds — all **without a database**.

---

## 🌟 Features

### Core
- **GitHub Authentication** via Auth.js
- **Full CRUD** on GitHub Gists
- **Markdown & Code Support** using [Novel Editor](https://www.npmjs.com/package/novel)
- **Live Preview** while writing posts
- **Drafts & Autosave** using private Gists
- **Versioning** supported by GitHub Gists

### Social & Engagement
- **Comments** via [Giscus](https://giscus.app/) (GitHub Discussions)
- **Likes / Reactions** via ShareThis or GitHub reactions
- **Followers / Friends system** using a `following.json` Gist
- **Post Views** using [VisitorBadge.io](https://visitorbadge.io/)
- **Shareable posts** with Open Graph & Twitter card support

### SEO & Discoverability
- Public posts are **SEO-friendly**
- Custom slugs generated from Gist description
- Rich media embeds (YouTube, Twitter, Spotify, etc.)

### Optional / Future
- AI-powered post summaries & tag suggestions
- User profiles with bio, avatar, social links
- Explore / trending feeds
- Multi-language support for code blocks
- Custom domains per user

---

## 🛠 Tech Stack

- **Frontend:** Next.js 15 (App Router)
- **Authentication:** Auth.js (GitHub OAuth)
- **Editor:** Novel (Markdown editor)
- **Comments:** Giscus / Utterances
- **Views Counter:** VisitorBadge.io
- **Reactions / Shares:** ShareThis
- **Data Storage:** GitHub Gists (no DB required)

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- GitHub account

### Installation
```bash
git clone https://github.com/yourusername/gistblog.git
cd gistblog
npm install
````

### Environment Variables

Create a `.env.local` file in the root:

```env
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
NEXTAUTH_URL=http://localhost:3000
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚡ Usage

1. **Login with GitHub**
2. **Create a new post**

   * Write in Markdown using the Novel editor
   * Add code blocks or embeds
   * Preview live
   * Save → creates a Gist
3. **Edit / Delete posts**

   * All operations directly update your Gists
4. **Engage socially**

   * Comment with Giscus
   * Like / react with ShareThis or Gist reactions
   * Follow users with `following.json` gist

---

## 🔗 Integrations

| Feature           | Tool / Service               |
| ----------------- | ---------------------------- |
| Views             | VisitorBadge.io              |
| Comments          | Giscus / Utterances          |
| Likes / Reactions | ShareThis / GitHub Reactions |
| Markdown Editor   | Novel                        |
| Authentication    | Auth.js (GitHub OAuth)       |
| Sharing           | ShareThis                    |

---

## 💡 Architecture Overview

1. **Frontend:** Next.js + Novel Editor
2. **Auth:** GitHub OAuth → token for Gist access
3. **Posts:** Each Gist = one post
4. **Comments:** Giscus pulls from GitHub Discussions
5. **Likes & Followers:** Stored in dedicated Gists (`likes.json`, `following.json`)
6. **Views:** Tracked via VisitorBadge.io
7. **Reactions / Shares:** ShareThis embeds

No database is used — **all data lives on GitHub**.

---

## 📝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "Add my feature"`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📄 License

MIT License
See [LICENSE](LICENSE) for details.

---

## 🔮 Roadmap / Future Enhancements

* AI-powered summaries and tagging
* Analytics for posts
* Explore / Trending feed
* Profile customization with avatar & bio
* Offline draft support
* Custom domains for users

---

**Built with ❤️ for devs who love lightweight blogging and GitHub integration.**