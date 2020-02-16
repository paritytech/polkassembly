# Stage 1 - the build process
FROM node:10 as build-deps

ENV REACT_APP_ENV="dev"
ARG REACT_APP_HASURA_GRAPHQL_URL="$REACT_APP_HASURA_GRAPHQL_URL"
ARG REACT_APP_JWT_PUBLIC_KEY="$REACT_APP_JWT_PUBLIC_KEY"

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.12
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
