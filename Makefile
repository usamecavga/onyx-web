.PHONY: build
build: ## Build the docker image.
	docker compose -f ./docker/docker-compose.yml build

.PHONY: pull
pull: ## Start the docker container.
	docker compose -f ./docker/docker-compose.yml pull
	
.PHONY: start
start: ## Start the docker container.
	docker compose -f ./docker/docker-compose.yml up -d --force-recreate --build

.PHONY: stop
stop: ## Stop the docker container.
	docker compose -f ./docker/docker-compose.yml down

.PHONY: clean
clean: ## Remove the docker container.
	docker system prune -f