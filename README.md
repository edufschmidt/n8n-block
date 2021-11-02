# balenablock-template
**Template block enabling you to get started building balenablocks for your projects and fleets**

## Highlights

- **Example balenablock**: An example for you to start building your own balenablocks!
- **Multi-arch Auto-publishing**: Pre-build images for your users' custom architectures using GitHub actions
- **Self-documenting**: For nodejs express-based blocks, automatically generate [swagger.io](https://swagger.io/) documentation

## Setup and configuration

Use this as standalone with the button below:

[![template block deploy with balena](https://balena.io/deploy.svg)](https://dashboard.balena-cloud.com/deploy?repoUrl=https://github.com/balenablocks/template)

Or add the following service to your `docker-compose.yml`:

```yaml
version: "2.1"
services:
  template:
    restart: always
    image: ghcr.io/balena-io-playground/balenablock-template:latest
    ports:
      - "80:3000"
```

> If you want to use a webserver exposing a public facing page, you will need to remove the exposed port 80

## Documentation

Head over to our [docs](https://balenablocks.io/template/docs/) for detailed installation and usage instructions, customization options and more!

## Motivation

BalenaBlocks are drop-in chunks of functionality built to handle the basics and speed up how developers prototype their next big project.
For example, you might use a block to quickly provide a [web browser](https://github.com/balenablocks/browser) to your project or maybe set up your device's [WiFi credentials](https://github.com/balenablocks/wifi-connect).
Blocks are neither join-able like fleets nor fork-able like projects; they’re a resource for everyone to use when creating their own fleets, projects, proof of concepts and prototypes.
This is a template repo to get you started working on your own balenaBlocks.
Blocks should ideally be lightweight, simple to use and well documented docker images, pre-built for use alongside other services.
From this template you should be ready to go with:

- GitHub actions for publishing multi-arch docker images for your blocks
- Simple node.js REST server as a demonstration block
- Self-documenting
- `balena.yml` configuration file, required for publishing on the [balenaHub](hub.balena.io)
- [landr](https://github.com/product-os/landr) compliant documentation

## Getting Help

If you're having any problem, please [raise an issue](https://github.com/balenablocks/template/issues/new) on GitHub and we will be happy to help.

## Contributing

Do you want to help make balenablock-template better? Take a look at our [Contributing Guide](https://balenablocks.io/template/contributing). Hope to see you around!

## License

balenablock-template is free software, and may be redistributed under the terms specified in the [license](https://github.com/balenablockstemplate/blob/master/LICENSE).
