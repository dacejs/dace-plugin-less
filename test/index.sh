cd test
npm i --registry https://registry.npm.taobao.org --no-package-lock
rm -rf dist prd node_modules/dace-plugin-less
mkdir -p node_modules/dace-plugin-less
cp ../plugin.js node_modules/dace-plugin-less
cp ../package.json node_modules/dace-plugin-less
./node_modules/.bin/dace build

# 检查编译结果
lineCount=`cat prd/css/index.css|grep '.a .b'|wc -l`
if [ $lineCount -eq 0 ]; then
  exit 1;
fi
