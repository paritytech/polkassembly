# nginx config

nginx will be used to proxy pass traffic to the auth server, hasura, polkassembly front-end and any other services if needed.

## Local Setup Instructions

Install nginx
```bash
sudo apt install nginx
```

copy polkassembly.io file to /etc/nginx/sites-available/polkassembly.io

```bash
cp polkassembly.io /etc/nginx/sites-available/polkassembly.io
```

create symlink from sites-enabled/polkassembly.io to sites-available/polkassembly.io

```bash
ln -s /etc/nginx/sites-available/auth.polkassembly.io /etc/nginx/sites-enabled/
```

Add this entry to /etc/hosts

```
127.0.0.1  polkassembly.io
```

Reload nginx

```bash
sudo nginx -t
sudo ngix -s reload
```
