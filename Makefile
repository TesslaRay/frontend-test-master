VERSION := $$(cat package.json | grep version | sed 's/"/ /g' | awk {'print $$3'})

SVC=frontend-test-master

version v:
	@echo $(VERSION)

init i:
	@echo "[Dependencies] Installing dependencies"
	@npm install

run r:
	@echo "[frontend-test-master] Start frontend... \n"
	@npm start
	
