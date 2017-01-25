// Entry point for static files: just move them all to the destination folder, Webpack
//
// index.html
import 'file?name=[name].[ext]!../index.html';

// Images with subfolders
require.context('file?name=[path][name].[ext]&context=./app/static/images/!./', true, /\.(?!js$).{2,5}$/);
