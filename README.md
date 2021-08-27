# NGinx Only

https://www.nginx.com/blog/using-free-ssltls-certificates-from-lets-encrypt-with-nginx/

Ssh into the server:

```
ssh root@137.184.66.70
```

Configure the firewall:

```
sudo ufw enable
ufw allow 80,443,3000,996,7946,4789,2377/tcp; ufw allow 7946,4789,2377/udp
```

Update/download dependencies:

```
apt-get update
sudo apt-get install certbot
apt-get install python3-certbot-nginx
```

Setting up nginx:

```
sudo apt update
sudo apt install nginx

// to start
sudo systemctl start nginx
```

Assuming you’re starting with a fresh NGINX install, use a text editor to create a file in the /etc/nginx/conf.d directory named domain‑name.conf (so in our example, www.example.com.conf).

```
// in /etc/nginx/conf.d/www.josephchen.work.conf

server {
    listen 80 default_server;
    listen [::]:80 default_server;
    root /var/www/html;
    server_name josephchen.work www.josephchen.work;
}
```

Validate with:

```
nginx -t && nginx -s reload
```

To obtain the SSL cert:

```
sudo certbot --nginx --staging -d josephchen.work -d www.josephchen.work

sudo certbot --nginx -d josephchen.work -d www.josephchen.work
```

To automatically renew the SSL cert:

```
crontab -e

// add this in crontab file; renews if cert will expire in the next 30 days
0 12 * * * /usr/bin/certbot renew --quiet
```

# Node Setup

```
git clone https://github.com/jchen42703/jchen42703.github.io.git
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
nvm install --lts
// npm install -g yarn
// yarn add -g react-scripts react
cd jchen42703.github.io/frontend/
// yarn build
npm install .
npm run build

rm -rf /var/www/html/*

cp -r build/* /var/www/html/

sudo systemctl nginx start
<!-- nginx -g daemon off -->
```

# Caprover Setup

```
sudo ufw enable
// disable firewall
ufw allow 80,443,3000,996,7946,4789,2377/tcp; ufw allow 7946,4789,2377/udp;

git clone https://github.com/jchen42703/jchen42703.github.io.git
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
nvm install --lts
npm install -g yarn
yarn add -g react-scripts react
yarn build
tar -cvf ../deploy.tar --exclude='*.map' ../captain-definition ./build/*
caprover deploy -t ./deploy.tar
```
