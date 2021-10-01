cp ./src/assets ./release/ -Ruv
cp ./src/styles ./release/ -Ruv
cp ./src/index.html ./release/index.html -nv
cp ./src/main.js ./release/main.js -nv
cp ./src/libs/require.js ./release/require.js -nv
# optional: remove all *.js files under the src/views directory which are generated
# by the `yarn transf` command
rm ./src/views/*.js -vr
