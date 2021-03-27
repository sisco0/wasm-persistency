# Wasm Persistency

This project tries to reach persistency at the filesystem used by Wasm under
NodeJS and WebAssembly compatible browsers. Internally, it uses Emscripten
to compile the library with C++, after that, a TypeScript bundle is used for
NodeJs and for browsers (Webpacked).
