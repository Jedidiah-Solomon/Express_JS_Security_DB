#!/bin/bash

# Generate a 32-byte random base64 encoded secret and store it in a file
openssl rand -base64 32 > secret_key.txt

echo "Secret key generated and stored in secret_key.txt"
