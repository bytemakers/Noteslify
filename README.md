# Noteslify

## Your Privacy Friendly, Open Source. Alternative to EverNote.

![NoteslifyLogo](images/noteslifylogo.png)

**Made with ❤ By ByteMakers**

> [!WARNING]
> This repository **Noteslify** is no longer maintained. As the original creator, Devarshi Shimpi, check out my site at [devarshi.dev](https://devarshi.dev) to see what I'm currently building!

Please give this repo a ⭐ it really helps us!

## Contributing

Contributions are always welcome!

See [`contributing.md`](./CONTRIBUTING.md) for ways to get started.

Please adhere to this project's [`Code of Conduct`](./CODE_OF_CONDUCT.md).

## Monorepo structure

| Name                       | Path                                               | Description                                                       |
| -------------------------- | -------------------------------------------------- | ----------------------------------------------------------------- |
| `@noteslify/web`           | [/apps/web](/apps/web)                             | Web/Desktop/Docker clients                                        |
| `@noteslify/mobile`        | [/apps/mobile](/apps/mobile)                       | Android/iOS clients                                               |

## Deployment

Make Sure You Have MongoDB and NodeJS Installed.

### Deploying Backend

To deploy this project navigate to the backend folder and run

```bash
  cd apps/web/backend
```

```bash
  npm install
```

```bash
  node index.js
```

or

```bash
  nodemon
```

Create a `.env` file in the backend folder and add the following

```bash
JWT_SECRET = "RANDOMSTRINGMUSTNOTCHANGE"
clientId = "GITHUBAUTHCLIENTID"
clientSecret = "GITHUBAUTHCLIENTSECRET"
GoogleClientId = "GOOGLEAUTHCLIENTID"
GoogleClientSecret = "GOOGLEAUTHCLIENTSECRET"
SECRET = "RANDOMSTRINGMUSTNOTCHANGE"
DefaultGitHubPassword = "RANDOMSTRINGMUSTNOTCHANGE"
outlookEmail = "OUTLOOKEMAIL"
outlookPassword = "OUTLOOKPASSWORD"
```

> [!NOTE]
> Outlook Email and Password are used for sending Forgot Password emails to users. Github And Google Auth is currently being added to the project therefore they are required as well.

### Deploying Frontend

To deploy this project navigate to the frontend folder and run

```bash
  cd apps/web/frontend
```

```bash
  npm install
```

```bash
  npm start
```

Navigate to `http://localhost:3000/`

## Feedback

If you have any feedback, please reach out to us at devarshishimpi@gmail.com