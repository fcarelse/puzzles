const testList = [
	{id: 1, parent: false},
	{id: 2, parent: 1},
	{id: 3, parent: 2},
	{id: 4, parent: 3},
	{id: 5, parent: 1}
];

const testTree = [
	{id: 1, parent: false, children: [
		{id: 2, parent: 1, children: [
			{id: 3, parent: 2, children: [
				{id: 4, parent: 3, children: []}
			]}
		]},
		{id: 5, parent: 1, children: []},
	]}
];

Object.assign(module.exports, {testList, testTree})