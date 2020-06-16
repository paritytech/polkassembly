# Stage 1 - the build process
FROM node:12 as build-deps

ARG REACT_APP_HASURA_GRAPHQL_URL
ARG REACT_APP_JWT_PUBLIC_KEY
ARG REACT_APP_NETWORK
ARG REACT_APP_WS_PROVIDER

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.12
COPY nginx/*.conf /etc/nginx/conf.d/
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
