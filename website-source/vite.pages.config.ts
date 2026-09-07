import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from '@tailwindcss/postcss';
import path from 'node:path';
export default defineConfig({base:'./',plugins:[react()],css:{postcss:{plugins:[tailwind()]}},resolve:{alias:{'@':path.resolve(import.meta.dirname,'.')}},build:{outDir:'pages-dist'}});
