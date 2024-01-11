FROM nginx
LABEL name="blog"
LABEL version="1.0"
COPY ./.next/ /usr/share/nginx/html
COPY ./blog.conf /etc/nginx/conf.d/
EXPOSE 80
