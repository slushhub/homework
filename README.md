# Homework

## The objective

Create a lovable <3 one page app with Angular, Material and GraphQL.

### Requirements

- Use only 1 page, no routers or custom routing. Keep it simple! ;)
- Create component(s) to create your view, not only the app component. Use the angular cli.
- Use angular material as base of your components. Overwrite styles in the styles.scss file if you want to.
- Use Apollo GraphQL to fetch information from the reddit / twitter API.

### Resources

- Ask questions, you would be doing that in your work too.
- [Angular usage docs at: https://angular.io/docs](https://angular.io/docs)
- [Angular cli usage docs at: https://angular.io/cli](https://angular.io/cli)
- [Material usage docs at: https://material.angular.io/components/categories](https://material.angular.io/components/categories)
- [Graphql usage docs at: https://www.apollographql.com/docs/angular/basics/queries.html](https://www.apollographql.com/docs/angular/basics/queries.html)
- [Play around with the reddit & twitter graphql api](<https://www.graphqlhub.com/playground?query=%23%20Hit%20the%20Play%20button%20above!%0A%23%20Hit%20%22Docs%22%20on%20the%20right%20to%20explore%20the%20API%0A%0A%7B%0A%20%20graphQLHub%0A%20%09reddit%20%7B%0A%20%20%20%20user(username%3A%20%22kn0thing%22)%20%7B%0A%20%20%20%20%20%20username%0A%20%20%20%20%20%20commentKarma%0A%20%20%20%20%20%20createdISO%0A%20%20%20%20%7D%0A%20%20%20%20subreddit(name%3A%20%22movies%22)%7B%0A%20%20%20%20%20%20newListings(limit%3A%202)%20%7B%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20comments%20%7B%0A%20%20%20%20%20%20%20%20%20%20body%0A%20%20%20%20%20%20%20%20%20%20author%20%7B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20username%0A%20%20%20%20%20%20%20%20%20%20%09commentKarma%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>) You can click on "docs" on the right to open what you can query.

Additionally a whole course on Angular: [https://www.udemy.com/the-complete-guide-to-angular-2/](https://www.udemy.com/the-complete-guide-to-angular-2/)

### Remember these goals

- We want to see your learning skills.
- We want to see your creative skills.

### Getting started

- Install vscode code editor.
- Install node. (preferably with nvm)
- Run `npm i` in the directory.
- Run `ng serve` in the directory to run the app in localhost:4200

#### Final

Show your project to one of us on your local machine.
