VERSION := $$(cat package.json | grep version | sed 's/"/ /g' | awk {'print $$3'})

PROD := env-prod.json
DEV := env-dev.json
ENV := $(PROD)

URL := $$(cat $(ENV) | grep URL | sed 's/"/ /g' | awk {'print $$3'})

SVC=frontend-test-master

version v:
	@echo $(VERSION)

init i:
	@echo "[Dependencies] Installing dependencies"
	@npm install

run r:
	@echo "[frontend-test-master] Start frontend with $(ENV)... \n"
	@REACT_APP_URL="$(URL)" npm start

deploy d:
	@echo "[frontend-test-master] Deploy on GCP... \n"
	@npm run deploy


	
