#! /usr/bin/env bash

if [ -f ./.env ]; then
  # Load Environment Variables
  export $(cat .env | grep -v '#' | sed 's/\r$//' | awk '/=/ {print $1}' )
fi