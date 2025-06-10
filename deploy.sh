#!/bin/bash
cd /home/electra/apps/elek
git pull origin main
npm install
npm run build
pm2 restart elek