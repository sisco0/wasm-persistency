cmake_minimum_required(VERSION 3.10)
project(READWRITEFILES)

set(CMAKE_CXX_STANDARD 11)

file(GLOB SRC *.cpp)

add_executable(rwfiles ${SRC})
