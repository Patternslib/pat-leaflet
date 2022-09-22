# vim: set noexpandtab:
# Makefile needs to set tabs instead of spaces
BOWER       ?= node_modules/.bin/bower
HTTPSERVE   ?= node_modules/.bin/http-server

all:: install serve
	printf "\n\n All done!\n\n Go to http://localhost:4001/ to see a demo.\n\n\n\n"

designerhappy:: all

install:: stamp-npm

serve::
	$(HTTPSERVE) -p 4001

clean::
	rm -f stamp-npm
	rm -rf node_modules

stamp-npm: package.json
	yarn install
	touch stamp-npm


.PHONY: all clean designerhappy install serve stamp-bower stamp-npm
