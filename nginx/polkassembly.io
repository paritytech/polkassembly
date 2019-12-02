server {
    listen 80;
    server_name polkassembly.io;

    # authentication server
    location /auth {
      proxy_pass http://localhost:8010;
    }

    # hasura server
    location /v1/graphql {
      proxy_pass http://localhost:8080;
    }

    # frontend server
    location / {
      # development server
      proxy_pass http://localhost:5000;
      # production server
      # root /mnt/q/app/client/public;
      # try_files $uri $uri/ /index.html;
    }
}

