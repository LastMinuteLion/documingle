# Documingle

Documingle is a collaborative documentation platform designed to facilitate seamless collaboration and documentation. It leverages modern web technologies and services to provide a rich, real-time editing experience. The application is deployed on Vercel and can be accessed at [https://documingle.vercel.app/](https://documingle.vercel.app/).

## Features

- **Real-time Collaboration**: Multiple users can edit documents simultaneously with real-time updates.
- **User Authentication**: Secure user authentication and management using Clerk.
- **Document Management**: Create, update, and delete documents with ease.
- **User Roles**: Different user roles (creator, editor, viewer) with specific permissions.
- **Notifications**: Real-time notifications for document access and updates.
- **Comments and Threads**: Add comments and manage threads within documents.
- **Dark Theme**: A visually appealing dark theme for better user experience.

## Components

### Core Components

- **Provider**: Sets up the context for Liveblocks and Clerk.
- **CollaborativeRoom**: Main component for collaborative document editing.
- **Editor**: Rich text editor with plugins for toolbar, comments, and more.
- **Comments**: Component to display and manage comments.
- **Header**: Header component with navigation and user actions.
- **Loader**: Loading spinner component.
- **AddDocumentBtn**: Button to create a new document.
- **ActiveCollaborators**: Displays active collaborators in a document.

### Plugins

- **FloatingToolbarPlugin**: Floating toolbar for text formatting.
- **ToolbarPlugin**: Main toolbar for the editor.

### Utility Components

- **Input**: Custom input component.
- **DeleteModal**: Modal for deleting documents.

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **Next.js**: React framework for server-side rendering and static site generation.
- **Clerk**: User management and authentication.
- **Liveblocks**: Real-time collaboration infrastructure.
- **Tailwind CSS**: Utility-first CSS framework.
- **Lexical**: Rich text editor framework.
- **Sentry**: Error tracking and performance monitoring.

## Usage

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/documingle.git
   cd documingle
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following variables:
   ```env
   NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
   CLERK_API_KEY=<your-clerk-api-key>
   LIVEBLOCKS_SECRET_KEY=<your-liveblocks-secret-key>
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

### Authentication

- Sign up or sign in using Clerk's authentication forms.
- Once authenticated, you can create, edit, and manage documents.

### Document Management

- **Create Document**: Click on the "Start a blank document" button to create a new document.
- **Edit Document**: Click on a document from the list to open and edit it.
- **Delete Document**: Use the delete button in the document list or within the document view to delete a document.


## Contribution

I welcome contributions to improve Documingle. To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your commit message"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request on GitHub.


## Acknowledgements

- [Clerk](https://clerk.dev) for user authentication and management.
- [Liveblocks](https://liveblocks.io) for real-time collaboration infrastructure.
- [Next.js](https://nextjs.org) for the React framework.
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework.
- [Lexical](https://lexical.dev) for the rich text editor framework.
- [Sentry](https://sentry.io) for error tracking and performance monitoring.

## Contact

For any questions or feedback, please open an issue on GitHub
---

Thank you for using Documingle! We hope it enhances your collaborative documentation experience.
