#node 기반
FROM node

#작업디렉토리를 생성하고 현 소스파일들 전체를 붙여 넣는다.
WORKDIR /src
ADD . /src

#src 폴더로 이동한 후 패키지 install
RUN cd /src && npm install

# Expose port
EXPOSE 3000

# Run App
CMD ["node", "/src/app.js"]
