# Lecrel

Lecrel is a platform for novel lovers to read, write, and collaborate on creative stories. Designed for an interactive and community-driven experience, Lecrel allows users to explore a variety of novels, create their own stories, and connect with freelance illustrators, translators, and voice-over artists.

---

## Features

- **Read & Write Novels**: Create and share your own stories or enjoy reading others' works.
- **Donations**: Support authors through secure Stripe-based donations.
- **Interactive Reviews & Ratings**: Leave reviews and ratings on a per-episode basis.
- **Comments**: Engage with the community by commenting on reviews, chapters, or specific paragraphs.
- **Collaboration**: Work with illustrators, translators, and voice-over artists to bring stories to life.
- **Audio Narration**: Listen to novels with built-in text-to-speech functionality.

---

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) with App Router
- **Styling**: CSS Modules
- **Design System**: [Material Design 3](https://m3.material.io/)
- **Text Editor**: [Tiptap](https://tiptap.dev/)
- **Backend Database and Storage**: [Appwrite](https://appwrite.io/)
- **Authentication**: [Auth.js](https://authjs.dev/)
- **Payments**: [Stripe](https://stripe.com/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Type Safety**: TypeScript
- **Schema Validation**: [Zod](https://zod.dev/)

---

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/lecrel.git
   cd lecrel
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Set up environment variables**:
   - Create a `.env.local` file in the root directory.
   - Add your keys for Appwrite, Stripe, and other integrations:
     ```env
     NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_appwrite_project_id
     NEXT_PUBLIC_APPWRITE_API_ENDPOINT=https://appwrite.io/v1
     STRIPE_PUBLIC_KEY=your_stripe_public_key
     ```

4. **Run the development server**:
   ```bash
   pnpm dev
   ```
   Access the app at `http://localhost:3000`.

5. **Build for production**:
   ```bash
   pnpm build
   pnpm start
   ```

---

## TypeScript and Zod

- **TypeScript** is used for type safety across the project, ensuring a robust development experience.
- **Zod** is utilized for schema validation in both frontend and backend environments to enforce consistency and data integrity.

---

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions, bug fixes, or feature requests.

---

## License

Lecrel is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

---

## Acknowledgments

- [Material Design 3](https://m3.material.io/)
- [Tiptap Editor](https://tiptap.dev/)
- [Appwrite BaaS](https://appwrite.io/)
- [Stripe Payment Gateway](https://stripe.com/)
- [Zod Schema Validation](https://zod.dev/)

---

## Contact

For questions or feedback, feel free to reach out at **tienhoangvo.dev@gmail.com**.
