#!/usr/bin/python3
"""
Sends a DELETE request to the URL passed as the first argument and displays the body of the response
"""
import requests
import sys

if __name__ == "__main__":
	if len(sys.argv) != 2:
		print("Usage: {} URL".format(sys.argv[0]))
		sys.exit(1)
		url = sys.argv[1]
		response = requests.delete(url)
		print(response.text)

