#  Tinytales - Frontend Task (Next.js)

A professional React/Next.js application featuring a complete Authentication Flow and a pixel-perfect, responsive Product Details page.

##  Live Demo
**[View Live Demo on Vercel](https://tinytales-nnnies8yr-olaalams-projects.vercel.app/)**

##  Project Overview
This project was developed as a technical assessment, focusing on two main aspects:
1.  **Authentication System:** Seamless integration with provided APIs for User Registration, Login, and Account Verification.
2.  **Pixel-Perfect UI:** A high-fidelity, fully responsive implementation of the provided UI mockup for the Product Details section.

## ✨ Features
-   **Authentication Flow:**
    -   **Register:** Full Name, Email, Password, Phone, and Country Code.
    -   **Login:** Secure login with token management.
    -   **OTP Verification:** Account activation using code `123456`.
-   **User Experience:**
    -   Dynamic Welcome Dashboard after login.
    -   Protected Routes using Middleware/Auth checks.
    -   Real-time notifications using `Sonner` (Toast).
-   **UI/UX Implementation:**
    -   Pixel-perfect implementation of the Product Section.
    -   Responsive Design (Mobile, Tablet, Desktop).
    -   Dynamic Quantity selector and Price calculation.

## Tech Stack
-   **Framework:** Next.js 15+ (App Router)
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS
-   **API Handling:** Axios & Custom Hooks
-   **Icons:** Lucide React
-   **State Management:** React Hooks (useState, useEffect)
-   **Authentication Storage:** LocalStorage & JS-Cookies

##  Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/olaalam/tinytales.git](https://github.com/olaalam/tinytales.git)
    cd tinytales
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env.local` file in the root directory and add:
    ```env
    NEXT_PUBLIC_BASE_URL=https://tinytales.trendline.marketing/api
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure
```text
src/
├── app/               # Next.js App Router (Pages & Layouts)
├── components/        # Reusable UI Components
│   ├── layout/        # Navbar, Footer, PageHeader
│   ├── product/       # Product details, Reviews, Similar items
│   └── ui/            # Shadcn/UI base components
├── hooks/             # Custom hooks (useAuth, useApi)
├── lib/               # Utility functions & Axios instance
└── middleware.ts      # Route protection & Redirection