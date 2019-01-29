cd test
npm i
rm -rf dist prd node_modules/dace-plugin-less
mkdir -p node_modules/dace-plugin-less
cp ../plugin.js node_modules/dace-plugin-less
cp ../package.json node_modules/dace-plugin-less
./node_modules/.bin/dace build

# 检查编译结果
line=`cat prd/css/index.css|grep '.a .b'|wc -l`

if [ $line -eq 0 ]; then
  exit 1;
fi
