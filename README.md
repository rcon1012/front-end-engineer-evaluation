# TreatWeather - Front-end Engineer Evaluation

This project is designed to be a simple Front-end Engineer evaluation to allow us to get a first hand look at how job candidates think and approach a problem. As a company, we share the same beliefs as given in this talk by local Code & Supply member Zack Zlotnik: https://www.youtube.com/watch?v=aIrKC41NwC0

Our goal during our interview process is to have a conversation with you to see how you think and approach problems, learn your interests, and identify your strong suits. We don't think interviews should be an interrogation or a test, therefore, we don't use automated coding tests or whiteboard sessions during our process. 

Instead, we put together this simple evaluation process that will have you do a few small things that do happen on a very regular basis here at Treatspace and in most front-end engineering jobs. Below you will find the simple installation process as well as details as to what we would like you to do. 

## Installing / Getting Started

A quick introduction of the minimial setup you need to get this application up and running. 

```shell
git clone https://gitlab.com/treatspace/developer/front-end-engineer-evaluation.git
cd front-end-engineer-evaluation
npm install
```

Once you have all of the packages installed, remain in the root directory of the project and run `gulp`
This will start the processes in the gulpfile to compile, minify, and compress our SCSS/JS files. From there all you need to do is open index.html and you are free to begin coding!

## Developing
The idea behind this project is to demonstrate 2 very basic skills that you would encounter on a daily basis here at Treatspace:

1. Being able to create a page with a certain style based off of screenshots

2. Being able to pull data from a GET request and update the frontend based on the data you receive.

For this project, I would like you to use the DarkSky weather API (https://darksky.net/dev) and pull in 5 days of weather forecast for a given IP. 

In the index.html file, there is some boilerplate code available for you to use, but don't feel obligated to use that existing code. You will also see hardcoded values just to let you know where some of the data should go. 

### DarkSky API
You will need to register for a free api key from the DarkSky site to be used in your local testing, but when submitting your code, feel free to remove that as I will use our own test key when running your code. Another thing to note about this API is that in order to pull forecast data, it is looking for lat/long values. In a real world environment, we wouldn't expect users to pass a lat/long string to get their forecast, but to keep this evaluation short, you don't have to worry about setting anything up to convert an address to lat/long. 

In the documentation for DarkSky, there are also links to helper libraries to interact with the API. If you would like, you are more than welcome to use one of those wrappers, or just use the API itself, the choice is yours. 


### Things we'll be looking at
Once you submit you merge request, these are some of the things we will be taking a look at to see how you approached the problem:

* Does the UI match the screenshots
* Does the UI scale well across multiple screen sizes?
* How did you approach the API & update the UI with the data?

We understand that many people already have full time jobs as well as a home life, so we only want you to spend 2-3 hours MAX working on this problem. If you can finish it quicker than that, that is perfectly fine, but don't worry about spending long hours working on this. This evaluation is simply to see how you approach a problem and allow us to have a conversation around your approach.



## When you are finished
Once you've completed your code, create a merge request for your branch and we will review your code. If you have any other questions, feel free to reach out to Chad: chad.moyer@treatspace.com

We look forward to talking with you!





