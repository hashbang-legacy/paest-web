FROM octohost/nodejs-nginx
MAINTAINER HashBang.sh

ADD . /src
WORKDIR /src

RUN \
  npm install -g bower grunt grunt-cli && \
  npm install && \
  bower install --allow-root && \
  grunt build && \
  mv dist /dist && \
  cd .. && \
  rm -r src && \
  rm /etc/nginx/sites-enabled/*

WORKDIR /dist

ADD nginx.conf /etc/nginx/sites-enabled/paest.conf

EXPOSE 80
CMD ["nginx"]
