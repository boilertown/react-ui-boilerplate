/**
 * In order to import .mdx file without errors while compiling stories files.
 * This file will be excluded from the production build output.
 */
declare module '*.mdx' {
	import { ComponentType } from 'react';
	const MDXComponent: ComponentType;
	export default MDXComponent;
}
