const localtunnel = require('C:/Users/ryuuko/localtunnel-dir/node_modules/localtunnel');

const SUBDOMAIN = 'shitjournal2026';
const PORT = 8080;

async function startTunnel() {
  try {
    const tunnel = await localtunnel({ port: PORT, subdomain: SUBDOMAIN });
    console.log('TUNNEL_URL:' + tunnel.url);
    console.log('隧道已建立，子域名固定为: ' + SUBDOMAIN);

    tunnel.on('close', () => {
      console.log('隧道已关闭，5秒后自动重连...');
      setTimeout(startTunnel, 5000);
    });

    tunnel.on('error', (err) => {
      console.error('隧道错误: ' + err.message + '，5秒后重连...');
      setTimeout(startTunnel, 5000);
    });

  } catch (e) {
    console.error('TUNNEL_ERROR:' + e.message);
    console.log('5秒后重试...');
    setTimeout(startTunnel, 5000);
  }
}

startTunnel();
