export type Component = string | NestedComponents;

export interface NestedComponents {
	[key: string]: Component;
}

const components: NestedComponents = {
	task: 'task'
	/* for nested components
	users: {
		roles: 'roles',
		auth: 'auth'
	}*/
};

export default components;
