import './theme/index.css';

import React from 'react';

import { HomePage } from '@/scenes';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<React.StrictMode><HomePage /></React.StrictMode>);
