#!/usr/bin/python3
"""
This script takes in a URL, sends a request to that URL using requests, and
displays the size of the body of the response in bytes.
"""

import sys
import requests

if len(sys.argv) != 2:
       	print("Usage: {} <URL>".format(sys.argv[0]))
       	sys.exit(1)

response = requests.get(sys.argv[1])
if response.status_code == 200:
        print(len(response.content))
else:
       	print("Error: HTTP status code {}".format(response.status_code))
sys.exit(1)

