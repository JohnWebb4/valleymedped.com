# /usr/env bash

. ./bin/loadenv.sh

deploy() {
  echo "Deploying to server: $host as $user"

  ftp -ivn <<EOF
  open $host
  user "$user" "$password"

  passive
  binary
  
  mput *.html
  mput *.css

  cd ./static
  lcd static

  mput *

  put nurse-group.jpg

  close
  exit
EOF

  echo "Done uploading!"
}

deploy