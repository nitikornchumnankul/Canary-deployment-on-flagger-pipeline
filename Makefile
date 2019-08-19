IMAGE=front-end

.PHONY: test coverage

up: compose test-image deps server

down: kill-server kill-compose

dev: clean test-image server

# Brings the backend services up using Docker Compose
compose:
	@docker-compose -f test/docker-compose.yml up -d

# Installs Node.js project dependencies
deps:
	@docker run               \
		-it                     \
		--rm                    \
		-v $$PWD:/usr/src/app   \
		$(IMAGE) /usr/local/bin/npm install

# Runs the Node.js application in a Docker container
server:
	@docker run               \
		-d                      \
		--name $(IMAGE)     \
		-v $$PWD:/usr/src/app   \
		-P                      \
		-e NODE_ENV=development \
		-e PORT=8080            \
		-p 8080:8080            \
		--network test_default  \
		$(IMAGE) /usr/local/bin/npm start


# Removes the development container & image
clean:
	@if [ $$(docker ps -a -q -f name=$(IMAGE) | wc -l) -ge 1 ]; then docker rm -f $(IMAGE); fi
	@if [ $$(docker images -q $(IMAGE) | wc -l) -ge 1 ]; then docker rmi $(IMAGE); fi

# Builds the Docker image used for running tests




# Runs integration tests in Docker






kill-compose:
	@docker-compose -f test/docker-compose.yml down

kill-server:
	@if [ $$(docker ps -a -q -f name=$(IMAGE) | wc -l) -ge 1 ]; then docker rm -f $(IMAGE); fi

