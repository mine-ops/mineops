#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { MinecraftCdkStack } = require('../lib/minecraft-cdk-stack');

const app = new cdk.App();
new MinecraftCdkStack(app, 'MinecraftCdkStack');
