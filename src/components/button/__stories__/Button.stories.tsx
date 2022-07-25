import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../index';
import MDXContent from './docs.mdx';

export default {
	title: 'Components/Button',
	component: Button,
	parameters: {
		docs: {
			page: MDXContent,
		},
	},
} as Meta;

export const Primary: Story<ButtonProps> = (args) => {
	return <Button {...args}>Primary Action</Button>;
};

Primary.args = {
	theme: 'primary',
	onClick: action('clicked'),
	disabled: false,
};
