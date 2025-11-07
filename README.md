# @shinguakira/raw-style-ui

A modern React component library built with TypeScript and Vite, using only raw inline styles (no CSS frameworks, no styled-components, no external CSS).

## Features

- 🎨 **Raw Inline Styles**: All components use `style={{}}` for styling
- 📦 **TypeScript**: Full type safety with TypeScript
- ⚡ **Vite**: Fast build tool and development experience
- 📚 **Storybook**: Interactive component documentation
- 🌲 **ESM Only**: Modern ES modules output
- ✅ **ESLint**: Code quality and linting

## Installation

```bash
npm install @shinguakira/raw-style-ui
```

**Peer Dependencies:**

This library requires React 18 as a peer dependency:

```bash
npm install react react-dom
```

## Usage

Import components from the package:

```tsx
import { Button, Input, Modal } from '@shinguakira/raw-style-ui';

function App() {
  return (
    <div>
      <Button variant="primary" onClick={() => console.log('Clicked!')}>
        Click Me
      </Button>
      <Input 
        label="Username" 
        placeholder="Enter your username"
      />
    </div>
  );
}
```

## Available Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
<Button 
  variant="primary" // 'primary' | 'secondary' | 'danger'
  size="medium"     // 'small' | 'medium' | 'large'
  disabled={false}
  onClick={() => {}}
>
  Click Me
</Button>
```

### Input

A flexible input component with label, helper text, error states, and multiple variants.

```tsx
<Input
  type="text"       // 'text' | 'email' | 'password' | 'number'
  variant="default" // 'default' | 'outlined' | 'filled'
  label="Email"
  placeholder="Enter your email"
  helperText="We'll never share your email"
  error={false}
  disabled={false}
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

### Modal

A modal dialog component with different sizes and keyboard support.

```tsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  size="medium"     // 'small' | 'medium' | 'large'
>
  <p>Modal content goes here</p>
</Modal>
```

## Development

### Prerequisites

- Node.js 18+ and npm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/shinguakira/raw-style-ui.git
cd raw-style-ui
```

2. Install dependencies:
```bash
npm install
```

### Available Scripts

- **`npm run dev`** - Start Vite development server
- **`npm run build`** - Build the library for production
- **`npm run lint`** - Run ESLint to check code quality
- **`npm run preview`** - Preview the production build
- **`npm run storybook`** - Start Storybook on port 6006
- **`npm run build-storybook`** - Build Storybook for deployment

### Development Workflow

1. **Start Storybook** to see components in action:
```bash
npm run storybook
```

2. **Make changes** to components in `src/components/`

3. **Lint your code**:
```bash
npm run lint
```

4. **Build the library**:
```bash
npm run build
```

## Project Structure

```
raw-style-ui/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── index.ts
│   │   ├── Input/
│   │   │   ├── Input.tsx
│   │   │   └── index.ts
│   │   └── Modal/
│   │       ├── Modal.tsx
│   │       └── index.ts
│   └── index.ts              # Main entry point
├── stories/
│   ├── Button.stories.tsx
│   ├── Input.stories.tsx
│   └── Modal.stories.tsx
├── .storybook/
│   ├── main.ts
│   └── preview.ts
├── dist/                     # Build output (generated)
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .eslintrc.cjs
├── .gitignore
└── README.md
```

## Design Philosophy

This library follows a "raw styles" philosophy:

- ✅ All styling is done using inline `style={{}}` objects
- ✅ No external CSS files or CSS-in-JS libraries
- ✅ Type-safe with `React.CSSProperties`
- ✅ Fully encapsulated components
- ✅ No global styles or CSS conflicts

## Contributing

Contributions are welcome! Please ensure:

1. All components use only inline styles
2. Code passes ESLint checks (`npm run lint`)
3. TypeScript types are properly defined
4. Storybook stories are added for new components

## License

ISC