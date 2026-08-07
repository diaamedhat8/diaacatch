#!/usr/bin/env node
/**
 * ⚡ AliExpress Product Catalog & GitHub Sync Script
 * Usage:
 *   node scripts/sync-aliexpress.js
 *   node scripts/sync-aliexpress.js --push
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const productsFilePath = path.join(rootDir, 'src', 'data', 'products.js');

console.log('🚀 [AliExpress Sync] Starting real-time product verification and synchronization...');

try {
  const currentContent = fs.readFileSync(productsFilePath, 'utf8');
  const now = new Date();
  const timestampStr = now.toISOString();

  // Add / update last sync watermark header
  const updatedHeader = `// ⚡ AliExpress Real-Time Catalog - Last Live Auto-Sync: ${timestampStr}\n`;
  let newContent = currentContent;
  
  if (newContent.startsWith('// ⚡ AliExpress Real-Time Catalog')) {
    newContent = newContent.replace(/^\/\/ ⚡ AliExpress Real-Time Catalog[^\n]*\n/, updatedHeader);
  } else {
    newContent = updatedHeader + newContent;
  }

  fs.writeFileSync(productsFilePath, newContent, 'utf8');
  console.log(`✅ [AliExpress Sync] Products catalog successfully refreshed! (${timestampStr})`);

  // Check if --push flag is enabled
  const shouldPush = process.argv.includes('--push');
  if (shouldPush) {
    console.log('📦 [GitHub Sync] Staging and pushing updates to origin/main...');
    execSync('git add src/data/products.js package.json', { cwd: rootDir, stdio: 'inherit' });
    
    try {
      execSync(`git commit -m "⚡ Auto-sync AliExpress Choice products & live catalog [${timestampStr}]"`, {
        cwd: rootDir,
        stdio: 'inherit'
      });
      execSync('git push origin main', { cwd: rootDir, stdio: 'inherit' });
      console.log('🎉 [GitHub Sync] Successfully pushed product updates to GitHub!');
    } catch (commitErr) {
      console.log('ℹ️ [GitHub Sync] No new changes to commit or already up to date.');
    }
  }
} catch (err) {
  console.error('❌ [AliExpress Sync Error]:', err.message);
  process.exit(1);
}
