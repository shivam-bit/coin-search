Steps to setup the development server:

```bash
Clone this repo  and CD into it
npm i
npm run dev
```

Few highlights :

- Used **Container-view** model architecture: Each component is divided into two sub-components; one is responsible for rendering UI, and the other for component business logic. It provides us with a separation of concerns.

- **SCSS** - support CSS variables and mixins + BEM methodology

- **Custom hooks**: Created a CopyToClipboard custom hook to extend copy functionality to any component.

- **Constants**: Created a constants file to support a single source of truth across files.

- **Context**: Created an app context to store various app states like pagination and coins.

- **Services**: So each entity has its SDK kind of classes. Like coin-related tasks are enclosed into a single category to improve code readability and extensibility.
