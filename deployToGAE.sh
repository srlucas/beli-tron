gsutil -m rsync -R . gs://belitron.sumadrive.io
gsutil -m acl ch -R -u AllUsers:R gs://belitron.sumadrive.io

gsutil -m setmeta -r -h "Cache-Control:public, max-age=3600" gs://belitron.sumadrive.io/*
gsutil setmeta -h "Cache-Control:no-cache" gs://belitron.sumadrive.io/index.html
gsutil setmeta -h "Cache-Control:no-cache" gs://belitron.sumadrive.io/service-worker.js
cd ..
