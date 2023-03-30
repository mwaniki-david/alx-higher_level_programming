#!/usr/bin/python3
"""
Displays all HTTP methods the server will accept for a given URL
"""
import subprocess
import sys

if __name__ == "__main__":
	if len(sys.argv) != 2:
		print("Usage: {} URL".format(sys.argv[0]))
		sys.exit(1)
		url = sys.argv[1]
		curl_cmd = ["curl", "-s", "-I", url]
		output = subprocess.check_output(curl_cmd).decode("utf-8")
		methods = [x.split(":")[0] for x in output.split("\r\n") if x.startswith("Allow:")]
		if methods:
			print("HTTP methods allowed for {}: {}".format(url, ", ".join(methods)))
		else:
			print("No HTTP methods allowed for {}".format(url))

