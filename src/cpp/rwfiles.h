#include <iostream>
#include <fstream>
#include <string>
#include <sstream>
#include <emscripten.h>

using namespace std;

namespace ReadWriteFiles
{
  EMSCRIPTEN_KEEPALIVE
  void writeFile(string filename, string content);
  EMSCRIPTEN_KEEPALIVE
  string readFile(string filename);
}
