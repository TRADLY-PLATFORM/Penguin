 [![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
  



<!-- PROJECT LOGO -->
<br />
<p align="center">
    <a href="https://github.com/TRADLY-PLATFORM/Wolverine">
    <img src="https://avatars.githubusercontent.com/u/64465296?s=200&v=4" alt="Logo" width="80" height="80">
  </a>
 
  <h3 align="center">Tradly Platform</h3>
 
 <p align="center">
     An open source React Native Template. Built on top of Tradly Headless API
    <br />
    <a href="https://portal.tradly.app/docs/introduction"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://portal.tradly.app/react-native">View Demo</a>
    ·
    <a href="https://github.com/TRADLY-PLATFORM/Wolverine/issues">Report Bug</a>
    ·
    <a href="https://github.com/TRADLY-PLATFORM/Wolverine/issues">Request Feature</a>
  </p>
</p>

 [![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
  
  <!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <!-- <li><a href="#acknowledgements">Acknowledgements</a></li> -->
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
This React Native template provides a basic to intermediate mobility based project. With a few smaller customisation on strings used in the app, it can be personalised for other marketplace types as well. Progressively we will be adding the mobile app configs that will help you to customise things from [Tradly SuperAdmin](https://auth.sandbox.tradly.app/register)

Current Use cases we have in mind
- Recycle Management App 
- Geo directory based Apps 

The short video could explain the feature sets we have. Just ping us in community forum if you would like to have the Figma file

[App Features youtube link](https://www.youtube.com/watch?v=G6efOFbjV9E)



<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->
 
 ## Features
 PENDING TO BE ADDED HERE THE LIST

### Built With

* [React-Native](https://reactnative.dev)
 

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

We recommend installing Node and Watchman using [Homebrew](https://brew.sh). Run the following commands in a Terminal after installing Homebrew:
* Node
  ```sh
  brew install node
  brew install watchman
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/TRADLY-PLATFORM/Penguin.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
#### iOS
    In the `ios` directory
    * Install Pods: `gem install cocoapods`
    * Install Pods: `pod install`
 
#### Android

* You might need to do this to run it in Android Studio or on real device: `adb reverse tcp:8081 tcp:8081`
* And for the sample server: `adb reverse tcp:3000 tcp:3000`
* To run from command line try: `react-native run-android`



<!-- USAGE EXAMPLES -->
## Usage
Here is some client/app specific things you might need to change. 3rd party integrations with Stripe, Firebase, Sentry need your own account Keys for it to work. 
- TenantID of Tradly can be found from [Tradly Superadmin Dashboard](https://superadmin.sandbox.tradly.app)(Sandbox or Production tenantID/APIkey based on your purchase)
- You might be change these values which are given below

```tsx
// AppConstant.js

    appSharePath: 'abc://',
    stripePublishKey: 'abc',
    dsnSentry: 'https://abc.ingest.sentry.io/5896058',
    firebaseChatPath: '/abc_dev/',
    tenantID:'abc',
```


<!-- ROADMAP -->
## Roadmap
See the [open issues](https://github.com/TRADLY-PLATFORM/Penguin/issues) for a list of proposed features (and known issues).



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
- [create an issue](https://github.com/TRADLY-PLATFORM/Wolverine/issues)
- join our [community forum] for further discussion (https://community.tradly.app)
- Tradly Platform   -  hitradly@gmail.com
- Project Link: [https://github.com/github_username/repo_name](https://github.com/TRADLY-PLATFORM/Wolverine)



<!-- ACKNOWLEDGEMENTS -->
<!-- ## Acknowledgements

* []()
* []()
* []()
 -->




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/TRADLY-PLATFORM/Penguin 
[contributors-url]: https://github.com/TRADLY-PLATFORM/Penguin/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/TRADLY-PLATFORM/Penguin
[forks-url]: https://github.com/TRADLY-PLATFORM/Penguin/network/members
[stars-shield]: https://img.shields.io/github/stars/TRADLY-PLATFORM/Penguin
[stars-url]: https://github.com/TRADLY-PLATFORM/Penguin/stargazers
[issues-shield]: https://img.shields.io/github/issues/TRADLY-PLATFORM/Penguin
[issues-url]: https://github.com/TRADLY-PLATFORM/Penguin/issues
[license-shield]: https://img.shields.io/github/license/TRADLY-PLATFORM/repo.svg?style=for-the-badge
[license-url]: https://github.com/TRADLY-PLATFORM/Penguin/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/github_username
