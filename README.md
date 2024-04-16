# JiraGPT

This is an application which uses the power of GPT to enhance the Jira

## Setup

### Install Yarn

1. Install NodeJs via NVM (Node Version Manager).

```bash
# installs NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# download and install Node.js
nvm install 18

# verifies the right Node.js version is in the environment
node -v # should print `v18.20.2`

# verifies the right NPM version is in the environment
npm -v # should print `10.5.0`
```

2. Enable yarn through corepack

```bash
corepack enable
```

> Set yarn version to `4.1.1` (Optional)
>
> ```bash
> yarn set version 4.1.1
> ```

### Install ollama

Open a new terminal and run the following command.

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

For `mac` or `windows` follow instructions given [here](https://ollama.com/download).

After installing ollama you can use any model that you want from [ollama library](https://ollama.com/library), We will be using `gemma` for now.

Run the follwing command to install `gemma` on your local machine

```bash
ollama run gemma
```

### Cloning git repository

```bash
# Clone this repository
git clone https://github.com/side-projects-overkill/jiraGPT

# Goto to project directory
cd jiraGPT

# Install dependencies using yarn
yarn install
```

### Environment Variables

Next thing you need to do is to create `.env` in each folder. Just run the following command

```bash
# This will create .env in each folder
touch API/.env Model/.env SlackBot/.env
```

#### Add following variables in **API/.env**

| Variables       | Description                                   |
| --------------- | --------------------------------------------- |
| `JIRA_HOST`     | Enter the hostname of your jira Instance      |
| `JIRA_AUTH_KEY` | Obtain personal access token from jira        |
| `PROJECT_KEY`   | The project in which you want to crate issues |

#### Add the following variables in **Model/.env**

| Variables         | Description                                                                   |
| ----------------- | ----------------------------------------------------------------------------- |
| `LOCAL_HOST_PORT` | Port number to used to communicate with API layer of ai model, for eg: `3001` |
| `MODEL`           | Name of your ollama model, for eg: `gemma`                                    |
| `PINO_LEVEL`      | Defines log level, any one of `debug`, `info`, `warn` and `error`             |

#### Add the following variables in **SlackBot/.env**

| Variables                      | Description                                                            |
| ------------------------------ | ---------------------------------------------------------------------- |
| `SLACK_SIGNING_SECRET`         | You can find it under **Basic Information** in your Slack app settings |
| `APP_TOKEN`                    | You can find it under **Basic Information** in your Slack app settings |
| `SLACK_BOT_TOKEN`              | You can find it under **OAuth & Permissions** tab.                     |
| `SLACK_USER_TOKEN`             | You can find it under **OAuth & Permissions** tab.                     |
| `PINO_LEVEL`                   | Defines log level, any one of `debug`, `info`, `warn` and `error`      |
| `NODE_TLS_REJECT_UNAUTHORIZED` | optional, set it to `0` or `1`                                         |

### Run

Run all the packages at once using yarn (runs `turbo` under the hood).

```bash
yarn dev
```

To run individually

```bash
# Run api server application
yarn workspace api dev

# Run ai model server application
yarn workspace aimodel dev

# Run slack bot
yarn workspace slackbot dev
```

> ### Build (WIP)
