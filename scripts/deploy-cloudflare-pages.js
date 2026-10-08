#!/usr/bin/env node
/**
 * Deploy to Cloudflare Pages using the Deploy Button API
 * (No API token needed — uses the Deploy Button endpoint)
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const PROJECT_NAME = 'berkahkarya-site';
const BRANCH = 'main';
const BUILD_DIR = '.next';

// Try deploying via wrangler pages deploy
try {
  console.log('=== Deploying to Cloudflare Pages ===');
  const cmd = `cd /home/openclaw/projects/1ai-berkahkarya-website && npx wrangler pages deploy ${BUILD_DIR} --project-name ${PROJECT_NAME} --branch ${BRANCH} 2>&1`;
  const output = execSync(cmd, { timeout: 120000 });
  console.log(output.toString());
} catch (e) {
  console.log('Deploy output:', e.stdout?.toString());
  console.log('Deploy errors:', e.stderr?.toString());
}
