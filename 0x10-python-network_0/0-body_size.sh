#!/bin/bash

url="$1"
response=$(curl -s -w '\n%{size_download}' "$url")
size=$(echo "$response" | tail -n 1)

if [[ $size =~ ^[0-9]+$ ]]; then
	  echo "Size of $url: $size bytes"
  else
	    echo "Error: Failed to retrieve the size of $url"
	      exit 1
fi

