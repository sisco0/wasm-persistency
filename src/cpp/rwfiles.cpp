#include "rwfiles.h"

exception CouldNotOpen;

void ReadWriteFiles::writeFile(string filename, string content)
{
  ofstream file(filename);

  if (file.is_open())
  {
    file << content;
    file.close();
  }
  else
  {
    throw CouldNotOpen;
  }
}

string ReadWriteFiles::readFile(string filename)
{
  ifstream file(filename);
  stringstream ss;
  string line;

  if (file.is_open())
  {
    while (!file.eof())
    {
      getline(file, line);
      ss << line << "\n";
    }

    return ss.str();
  }
  else
  {
    throw CouldNotOpen;
  }
}
