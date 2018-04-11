FROM nginx:1.11.10-alpine

RUN apk update && apk add build-base git build-base openssl-dev pcre-dev zlib-dev curl \
    && curl -sLO https://github.com/github/git-lfs/releases/download/v2.0.1/git-lfs-linux-amd64-2.0.1.tar.gz \
    && tar zxvf git-lfs-linux-amd64-2.0.1.tar.gz \
    && mv git-lfs-2.0.1/git-lfs /usr/bin/ \
    && rm -rf git-lfs-2.0.1 \
    && rm -rf git-lfs-linux-amd64-2.0.1.tar.gz

RUN git lfs install
RUN git clone https://github.com/51Degrees/Device-Detection.git device-detection
RUN cd /device-detection/nginx && make module pattern VERSION=1.11.10

COPY nginx.conf /etc/nginx/nginx.conf
COPY builds /var/www
