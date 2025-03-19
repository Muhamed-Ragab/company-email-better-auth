# Company Email Better Auth

[![npm version](https://img.shields.io/npm/v/company-email-better-auth.svg)](https://www.npmjs.com/package/company-email-better-auth)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A robust TypeScript library for handling company email verification processes with flexible configuration options.

## Features

- 🕒 Configurable token expiration
- � Automatic token cleanup
- 📧 Email allowlist support
- 🔒 Custom token generation
- 🍪 Cookie storage options
- 📤 Flexible email sending implementation

## Installation

```bash
npm install company-email-verification
yarn add company-email-verification
bun add company-email-verification
pnpm add company-email-verification
```

### Quick Start

```typescript
import { betterAuth } from "better-auth";
import { companyEmail } from "company-email-better-auth";

// Application-specific imports
import { sendEmail } from "../email/email.service";

export const auth = betterAuth({
  plugins: [
    // Company Email Verification Plugin
    companyEmail({
      expiresIn: 60 * 60, // 1 hour expiration
      allowedEmails: ["technozone019@gmail.com", "voka5050@gmail.com"],
      async sendEmailVerification({ email, url, token }) {
        await sendEmail("companyEmailVerification", {
          to: email,
          url,
          token,
        });
      },
    }),
  ],
});
```

### Client Plugin Usage

```typescript
import { createAuthClient } from "better-auth/client";
import { companyEmailClient } from "company-email-better-auth";

export const client = createAuthClient({
  plugins: [companyEmailClient()],
});
```

### Configuration Options

#### CompanyEmailOptions

```ts
interface CompanyEmailOptions {
  /** Token expiration time in seconds (default: 86400 [1 day]) */
  expiresIn?: number;

  /** Disable automatic token cleanup (default: false) */
  disableCleanup?: boolean;

  /** Array of allowed email domains/addresses (default: []) */
  allowedEmails?: string[];

  /** Custom token generator function (default: 32-character random string) */
  generateToken?: () => Promise<string> | string;

  /** Cookie storage configuration */
  storeCookieAfterVerification?: {
    enabled: boolean;
    cookieName?: string;
    expires?: number;
  };

  /** Required email sending implementation */
  sendEmailVerification: (options: {
    email: string;
    url: string;
    token: string;
  }) => Promise<void>;
}
```

### Advanced Usage

#### Email Allowlist

```ts
allowedEmails: ["@ourcompany.com", "specific.user@partner.com"];
```

#### Custom Token Generation

```ts
generateToken: async () => {
  return crypto.randomBytes(16).toString("hex");
};
```

#### Cookie Storage

```ts
storeCookieAfterVerification: {
  enabled: true,
  cookieName: 'company-verify',
  expires: 3600 // 1 hour
}
```

### Verification Workflow

1. User provides email address
2. System checks against allowedEmails list
3. Verification token is generated
4. Verification email is sent with URL
5. User clicks link to validate token
6. Optional cookie storage upon success
7. Automatic token cleanup (unless disabled)

### Security Considerations

- Always use HTTPS in production
- Store tokens securely
- Set appropriate cookie security flags
- Regularly rotate secrets
- Implement rate limiting
