# Closed Git Pull Requests
[![Build Status](https://travis-ci.com/username/projectname.svg?branch=master)](https://travis-ci.com/username/projectname)

Gets all of the closed pull requests and outputs the time, user and name of the pull request to a csv 🎉🎉

## Install

1. `npm install` to Install the Packages

2. Configure the config.example.json by adding your details

    a. Get your token by visiting [Github Tokens](https://github.com/settings/tokens/new). *Be sure to activate **repo** and **user***

    b. Replace the `owner` and `name` with the details for your given repository. You will also find `master_branch` and `production_branch`. The *master* branch being the base branch that will be send sender to the *prod* branch

    ```json
    
    ...

	"repo": {
		"owner": "REPO_OWNER",
		"name": "REPO_NAME",
		"master-branch": "master",
		"production-branch": "prod"
	}

    ```

    c. Rename `config.example.json` with `config.json`

2. Run `npm run start` 

3. Enjoy your list of pull names 🎉🎉

