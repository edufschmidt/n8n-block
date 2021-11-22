# n8n-block
A block that brings n8n to balena devices.

## Usage

To deploy this block to your fleet, use the button below:

[![template block deploy with balena](https://balena.io/deploy.svg)](https://dashboard.balena-cloud.com/deploy?repoUrl=https://github.com/edufschmidt/n8n-block)

Alternatively, you can add the following to your `docker-compose.yml`:

```
services:
  n8n:
    build: ./n8n
    restart: always
    privileged: true
    ports:
      - 80:5678
```

In case you need to load any existing n8n workflows, just add them to the `./n8n/workflows` directory.

As soon as n8n starts, the dashboard will become available at port `:80`, meaning you can also access it remotely using balena public URLs.
## Getting Help

If you're having any problem, please [raise an issue](https://github.com/edufschmidt/n8n-block) on GitHub and we will be happy to help.