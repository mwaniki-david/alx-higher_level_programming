#!/bin/bash

url="$1"
response=$(curl -s -w '%{http_code}' -H "X-School-User-Id: 98" "$url")

if [ ${response: -3} -eq 200 ]; then
	  body=$(curl -s -H "X-School-User-Id: 98" "$url")
	    echo "$body"
    else
	      echo "Error: Request failed with status code ${response: -3}"
	        exit 1
fi

