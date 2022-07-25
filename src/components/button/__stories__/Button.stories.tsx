import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../index';
import MDXDocs from './docs.mdx';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Button',
	component: Button,
	parameters: {
		docs: {
			page: MDXDocs,
		},
	},
} as ComponentMeta<typeof Button>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Button> = (args) => {
	return (
		<>
			<Button {...args} />
			&nbsp;&nbsp;
			<Button {...args} disabled />
		</>
	);
};

export const Primary = Template.bind({});
Primary.args = {
	onClick: action('clicked'),
	children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
	color: 'secondary',
	onClick: action('clicked'),
	children: 'Secondary Button',
};

export const Success = Template.bind({});
Success.args = {
	color: 'success',
	onClick: action('clicked'),
	children: 'Success Button',
};

export const Error = Template.bind({});
Error.args = {
	color: 'error',
	onClick: action('clicked'),
	children: 'Error Button',
};

export const Warn = Template.bind({});
Warn.args = {
	color: 'warn',
	onClick: action('clicked'),
	children: 'Warn Button',
};
