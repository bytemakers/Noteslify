# Noteslify

## Your Privacy Friendly, Open Source. Alternative to EverNote.

![Border](images/noteslifylogo.png)

**Made with ❤ By ByteMakers**

A Notes Taking Web App Built With Simplicity.

Please give this repo a ⭐ it really helps us!

Visit At <a href="https://noteslify.stonecss.com" target="_blank">noteslify.stonecss.com</a> Using v1.3.8-beta ( Latest v1.3.8-beta, Latest Stable v1.4.0 )

Our System Statuspage is Available At <a href="https://dvstechlabs.statuspage.io" target="_blank">dvstechlabs.statuspage.io</a>

![Border](images/border.png)

## Team

The Developer Team behind Noteslify. This project wouldn't have been possible without them and our awesome contributors.

- [@devarshishimpi](https://www.github.com/devarshishimpi) [ Owner, Developer Team, Support Team ]
- [@abhinandanwadwa](https://github.com/abhinandanwadwa) [ Developer Team ]
- [@Ravina-Deogadkar](https://github.com/Ravina-Deogadkar) [ Developer Team ]
- [@Gaurav bhojwani](https://github.com/Gauravdarkslayer) [ Developer Team ]
- [@MrKrishnaAgarwal](https://github.com/MrKrishnaAgarwal) [ Support Team ]

## Contributing

![Border](images/border.png)

Contributions are always welcome!

See [`contributing.md`](./CONTRIBUTING.md) for ways to get started.

Please adhere to this project's [`Code of Conduct`](./CODE_OF_CONDUCT.md).

## Monorepo structure

![Border](images/border.png)

| Name                       | Path                                               | Description                                                       |
| -------------------------- | -------------------------------------------------- | ----------------------------------------------------------------- |
| `@noteslify/web`           | [/apps/web](/apps/web)                             | Web/Desktop/Docker clients                                        |
| `@noteslify/mobile`        | [/apps/mobile](/apps/mobile)                       | Android/iOS clients                                               |

## Deployment

![Border](images/border.png)

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

#### Note : Outlook Email and Password are used for sending Forgot Password emails to users. Github And Google Auth is currently being added to the project therefore they are required as well.

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

![Border](images/border.png)

If you have any feedback, please reach out to us at devarshishimpi@gmail.com

## Stargazers

![Border](images/border.png)

Our awesome stargazers! Thank you for your support!

[![Stargazers repo roster for @dvstechlabs/Noteslify](https://reporoster.com/stars/dvstechlabs/Noteslify)](https://github.com/dvstechlabs/Noteslify/stargazers)

## Support

If you would like to support us, you can support on any of the below platforms.

![Border](images/border.png)
<a href="https://www.vultr.com/?ref=9043736" target="_blank"><img src="images/vultr-try.png"/></a>
<a href="https://dvsdonatebtc.netlify.app/" target="_blank"><img src="images/btc-try.png"/></a>
<a href="https://www.patreon.com/dvstech" target="_blank"><img src="images/patreon-try.png"/></a>
<a href="https://www.buymeacoffee.com/dvstech" target="_blank"><img src="images/buymeacoffee-try.png"/></a>
<a href="https://presearch.com/signup?rid=4339531" target="_blank"><img src="images/presearch-try.png"/></a>
<a href="https://railway.app?referralCode=tXRquz" target="_blank"><img src="images/railway-try.png"/></a>
<a href="https://cloudinary.com/invites/lpov9zyyucivvxsnalc5/wlfqn2dwmbvrdld8z2gk?t=default" target="_blank"><img src="images/cloudinary-try.png"/></a>
<a href="https://m.do.co/c/645d44d1a7a1" target="_blank"><img src="images/digitalocean-try.png"/></a>
