# XiaoERP Auth v1

This is the **first version of XiaoERP**, built using the **T3 Stack**:
- **Next.js**
- **TypeScript**
- **TailwindCSS**
- **Prisma**
- **tRPC**
- **NextAuth (JWT strategy)**

Auth is manually set up with **NextAuth**, supporting both **Google OAuth** and **credentials-based login** using the JWT session strategy.

> Originally, both the app and auth system were built on Next.js. Now, the core ERP functionality and auth are being migrated to **Remix** for improved control over server-side behavior and form handling. The **landing page remains in Next.js**, leveraging **SSG and ISR** features.
