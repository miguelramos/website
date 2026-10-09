import './theme/index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { HomePage } from '@/scenes';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<StrictMode><HomePage /></StrictMode>);
