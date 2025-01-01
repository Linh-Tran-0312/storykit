## 🚀 Overview
Storykit is an ongoing React library project built with Storybook, featuring custom components and hooks

## 🌟 Features
- Reusable custom hooks for state management and side effects
- Custom React components
- Live demo and documentation with Storybook
- CI/CD integration with Github Actions

## 📥 Installation 
```bash
npm install storykit@github:Linh-Tran-0312/storykit
```
## 💻 Usage
```javascript

import { Button } from 'storykit';

const App = () => (
  <Button onClick={() => alert('Clicked!')}>Click Me</Button>
);

```
## 🔧 Development
### Setup
Run on local
```bash
git clone https://github.com/Linh-Tran-0312/storykit.git
cd storykit
npm install
npm run story
```
Run on docker
```bash
git clone https://github.com/Linh-Tran-0312/storykit.git
cd storykit
docker compose build
docker compose up
```
### Commands
Build story
```bash
npm run build-story
```
Build library
```bash
npm run build
```
Run eslint
```bash
npm run lint
npm run lint:fix
```
Run unit test
```bash
npm run test
```


## 🙏 Acknowledgements
 <img src="https://raw.githubusercontent.com/github/explore/main/topics/react/react.png" alt="React Logo" width="20" height="20" />  **React**: the foundation for building components and hooks.
<img src="https://avatars.githubusercontent.com/u/22632046?v=4" alt="Storybook Logo" width="20" height="20" />  **Storybook**: providing a seamless environment to showcase and test components.
<img src="https://raw.githubusercontent.com/github/explore/main/topics/typescript/typescript.png" alt="Typescript Logo" width="20" height="20" />  **Typescript**: enabling type safety and maintainability of the code base.
<img src="https://vitejs.dev/logo.svg" alt="Vite Logo" width="20" height="20" />  **Vite**: for its fast and efficient development and build tool.
<img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/ESLint_logo.svg" alt="ESlint Logo" width="20" height="20" />  **ESlint** and **Prettier**: ensuring code quality and consistent format across the project.
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIY6EsR0nkKYt0FLUJ3cmPOrzetrgP_1EGxQ&s" alt="Rollup Logo" width="20" height="20" />  **Rollup**: for bundling the library.
<img src="https://raw.githubusercontent.com/facebook/jest/main/website/static/img/jest.png" alt="Jest Logo" width="20" height="20" />   **Jest** and **Testing library**: providing a robust tool to write and run unit tests.
<img src="https://raw.githubusercontent.com/github/explore/main/topics/docker/docker.png" alt="Docker Logo" width="20" height="20" />  **Docker**:  A containerization tool for easy setup.

