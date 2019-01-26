const octokit = require('@octokit/rest')();
const fs = require('fs');
const Json2csvParser = require('json2csv').Parser;
const moment = require('moment');

const { repo, token } = require('./config.json');

const fields = ['title', 'user', 'date'];
const opts = { fields };
const parser = new Json2csvParser(opts);

let pullTitles = []

octokit.authenticate({ // Auth in order to get more calls
    type: 'token',
    token: token
})

octokit.paginate('GET /repos/:owner/:repo/pulls?state=closed', { owner: 'LucasStettner', repo: 'LucasTip' })
    .then(pulls => { // returns an array

        pulls.forEach(pull => {

            if (pull.head.ref == 'master' && pull.base.ref == 'prod' && pull.merged_at != null) { // checks if coming from master and going to prod and not closed
                let date = moment(pull.merged_at).format("MM/DD/YYYY");

                pullTitles.push({ title: pull.title, user: pull.user.login, date: pull.merged_at.slice(0, -10) })
            }
        });

        // parse pullTitles as csv
        const csv = parser.parse(pullTitles);

        fs.writeFile('closedPull.csv', csv, 'utf8', function (err) { // write csv to file
            if (err) {
                console.log(err);
            } else {
                console.log("saved!")
            }
        });

    });