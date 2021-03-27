cmake_minimum_required(VERSION 3.10)
project(READWRITEFILESWASM)

set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

set(CMAKE_CXX_STANDARD 11)

set(CMAKE_CXX_FLAGS "-std=c++11 --bind -s WASM=1 -O3 -s MODULARIZE=1")

add_subdirectory(cpp)
