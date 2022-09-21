#!/bin/bash
for file in "$@"
do
	echo Adding $file
	git add $file
	echo Committing...
	git commit -m "Added $file"
	echo pushing....
	git push 
done
