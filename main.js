const octokit = require('@octokit/rest')();
const { repo, token } = require('./config.json');

// Define repoNames which will store all the names
let repoNames = []

// TO DO:
// FROM MASTER ONLY
// ONLY MERGED
// USER
// DATE
// PAGINATION


octokit.authenticate({
    type: 'token',
    token: token
  })

octokit.activity.listRepoEvents({ // Init activity list for a public repo
    owner: repo.owner,
    repo: repo.name

}).then(({ data, headers, status }) => { // response

    // Loop through each element of data activity
    data.forEach(element => {

        // if the action is closed and request is to prod branch => continue
        if(element.payload.action == 'closed' && element.payload.pull_request.base.ref == 'prod'){

            // push the title to the array
            repoNames.push(element.payload.pull_request.title);
        
        }
    });

    console.log(repoNames)

});