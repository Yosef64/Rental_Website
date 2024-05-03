import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    // babel: {
    //     // Add your babel configuration here
    //     plugins: [
    //         [
    //             '@babel/plugin-transform-react-jsx',
    //             {
    //                 runtime: 'automatic',
    //                 throwIfNamespace: false, // This line allows JSX Namespace
    //             },
    //         ],
    //     ],
    // },

};

export default nextConfig;