const { execSync, exec } = require("child_process");

exec('cd dropship2020-api/ && nvm install 10.18.0 && git pull && npm run start-gitpod');

exec('cd dropship2020-web/ && && git pull && npm run serve');
