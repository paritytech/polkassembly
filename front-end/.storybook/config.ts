import 'semantic-ui-css/semantic.min.css';
import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';

const req = requireContext('../src/ui-components/stories', true, /.stories.tsx$/);

function loadStories () {
	req.keys().forEach(req);
}

configure(loadStories, module);