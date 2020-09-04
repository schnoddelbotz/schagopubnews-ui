
PROJECT_NAME    := snui
APP_VERSION     := $(shell git rev-parse --short=8 HEAD)
IMAGE_REGISTRY  := eu.gcr.io/NEIN
IMAGE_TAG       := $(APP_VERSION)

# https://hub.docker.com/r/danlynn/ember-cli
EMBER_IMAGE     := danlynn/ember-cli:3.20.0

export EMBER_IMAGE

all: dist

yarn-install:
	docker-compose run --rm ember yarn install
	touch yarn-install

yarn-upgrade:
	docker-compose run --rm ember yarn upgrade

serve: yarn-install
	grep -v PROD-only app/index_dev+prod.html > app/index.html
	docker-compose up

test: yarn-install
	grep -v PROD-only app/index_dev+prod.html > app/index.html
	docker-compose run --rm ember ember test
	docker-compose run --rm ember yarn lint:hbs

bash:
	docker-compose run --rm ember bash

dist: yarn-install
	grep -v dev-only app/index_dev+prod.html > app/index.html
	docker-compose run -e --rm ember ember build --env production

image: dist
	docker build -t $(PROJECT_NAME):$(IMAGE_TAG) -f ./ops/build/smudo.Dockerfile .
	docker tag $(PROJECT_NAME):$(IMAGE_TAG) $(IMAGE_REGISTRY)/$(PROJECT_NAME):latest

push: image
	docker tag $(PROJECT_NAME):$(IMAGE_TAG) $(IMAGE_REGISTRY)/$(PROJECT_NAME):$(IMAGE_TAG)
	docker push $(IMAGE_REGISTRY)/$(PROJECT_NAME):$(IMAGE_TAG)
	docker tag $(PROJECT_NAME):$(IMAGE_TAG) $(IMAGE_REGISTRY)/$(PROJECT_NAME):latest
	docker push $(IMAGE_REGISTRY)/$(PROJECT_NAME):latest


clean:
	-docker-compose down --remove-orphans
	docker run --rm -v`pwd`:/mnt busybox /bin/sh -c \
		"cd /mnt && rm -rf dist yarn-error.log"

realclean: clean
	rm -f yarn-install
	-docker-compose down -v --rmi all
