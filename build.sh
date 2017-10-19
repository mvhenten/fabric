cd fabric
npm run build
rm -rf ../docs
mv build ../docs
cd ..
sed -i "s/\/bundle/.\/bundle/g" docs/index.html
sed -i "s/href=\"\//href=\".\//g" docs/index.html