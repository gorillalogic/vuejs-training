# Vue.js Bootcamp

<style>
    #container-img{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 30px;
    }
</style>
<div id="container-img">
    <img :src="$withBase('/vue.png')" style="width: 150px"/>
    <img :src="$withBase('/plus.png')" style="width: 50px"/>
    <img :src="$withBase('/logoBlack.png')" alt="foo" />
</div>

Welcome to our own Gorilla Logic Vue.js Bootcamp. As many of you, the team who created this Bootcamp found interesting learning Vue and/or got involved in this path due to a project need. This is great, but the amount of information and learning paths are not that great.

Thousands of gigabytes of information are not enough to define the amount of information we can find on the internet, but many of these places (not even the offical documentation) tells you the right or recommended path to learn Vue.js.

Bootcamp's main target is to provide you with a proper path to learn Vue.js, but also, with a methdology that allows you to feel confortable with the framework after passing through all the different challenges you will find right away.

## Methodology

### Definition

With the idea of creating a disruptive process, this Bootcamp was designed to walk you through the main framework features using a different hands on approach that is simple and understandable. While using this guide you will be learning Vue.js key concepts through some valuable resources and code examples. At the same time, you'll dive in the code details by completing a fully working Vuejs application using concepts you learned in each section.

### Project Scope

The application you are going to build is a Podcast Player, below is a mockup that showcases the scope of it:

<div id="container-img">
    <img :src="$withBase('/wireframe.png')"/>
</div>

The main functionalities or requirements for this application are:

- **Track List:** it's required to have a place where users can view all the available tracks that they can reproduce. This list should also include a search box where you can search whether by track name or artist.
- **Player:** it's required to allow users to reproduce all the available tracks, they can also go forward and backward 10 seconds if available.
- **Global Search:** it's required to have a global search tool that allow users to search across all the available tracks whether favorites or not.
- **Details View:** it's required to have a detailed view for each track. This view is going to include the complete information of the track plus actions to add comments, add/remove to favorites and share.
- **Favorites List** it's required to allow users to have a place where they can save their favorite tracks. They can add to favorites every track they want, and also they will have a place to see all the tracks already added to this list. This list should also include a search utility where they can filter by track name or artist.
- **Dashboard:** it's required to have a dashboard or home page that includes a recommended track (randomly selected), a shortcut to favorites and also to the list of all the tracks. This last two lists should limited to 5 elements.

As initial assets, you will get:

1. **Itunes public API** as main data source to query and reproduce tracks. To read more about this resource you can [click here](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/)
2. **A pre-built API proxy library** that provides you with the main base methods to consume the previous resource. This will allow you to stay focused on learning Vue.js rather than loosing focus with other technologies/approaches. You can check this resource using [this link](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/).

### Development Process

The main process will be a progressive construction. Each section wil contain the following structure:

1. **Definitions and main concepts** that basically provides you with the right information related to the topics in the section. This could include text, code examples and even multimedia.
2. **Additional resources** and more in depth links for you to deep dive into the concepts.
3. **Project Tasks** which are basically the challenges you need to solve using the concepts you already learnt.
4. **Resolution** where you will find our suggested solution path based on our knowledge, our experience and good practices/approaches.

Taking into consideration the guidance structure of building an application while learning Vue.js, there's also a proposed workflow for the application building process:

1. **Generate App Initial Structure:** on this stage, you are going to prepare the skeleton of your application.
2. **Build Base Components:** here you are going to create the base and core components that you will use along the process of building the rest of the application.
3. **Build Layout Components:** now it's time to define the main layout where eventually base components will asemble.
4. **Build Specialized Components:** probably the most challenging part of this Bootcamp. This is where we're going to build more complex components and also use advanced concepts and patterns. Finally, we're going to see a real use case to introduce state management with Vuex.
5. **Build Vuex Store:** Having faced issues around complex UI state managment, let's implement the rest of our application using a central store pattern.

## Before Starting

It's important to be as prepared as possible before you start taking this Bootcamp. That's why you should read this section and get ready for this learning experience.

### Technical Skills

- Familiarity with HTML, CSS and JavaScript programming.
- Knowledge about ES5+ standard. \*

\***_Ideal to have it, but not mandatory_**

### Development Tools

- Visual Studio Code or your prefered IDE.
- Git CLI.
- Github Gorilla Logic account (to store your code progress).

## Contributors

This Bootcamp would not have been possible without Gorilla's support in general, specially from Arturo Campos, John Howard and Mariana Santamaria, they supported our idea and helped us connecting with the right people and provided us the right resources.

Also, special thanks to the team that was involved on any of the stages of this Bootcamp: Alejandro Benjumea (alejandro.benjumea), Jose Penagos (jose.penagos), Juan Giraldo (juan.giraldo), Julián Figueroa (julian.figueroa), Oscar Granada (oscar.granada) y Oscar Polanco (oscar.polanco).

Last but not least, thanks to all the Vue.js team and online trainers that provided us as a team with this valuable knowledge.
