import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const nextConfig = {
    sassOptions: {
        includePathse: [path.join(__dirname, 'styles')],
    },

};

export default nextConfig;