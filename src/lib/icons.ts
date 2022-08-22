import I3DCubeScan from '$lib/I3DCubeScan.svelte';
import I3DRotate from '$lib/I3DRotate.svelte';
import I3DSquare from '$lib/I3DSquare.svelte';
import I3DCube from '$lib/I3DCube.svelte';
import I3Square from '$lib/I3Square.svelte';
import I24Support from '$lib/I24Support.svelte';

export const icons = [
	{
		icon: I3DCubeScan,
		name: 'I3DCubeScan',
		category: 'Delivery'
	},
	{
		icon: I3DRotate,
		name: 'I3DRotate',
		category: 'Delivery'
	},
	{
		icon: I3DSquare,
		name: 'I3DSquare',
		category: ''
	},
	{
		icon: I3DCube,
		name: 'I3DCube',
		category: ''
	},
	{
		icon: I3Square,
		name: 'I3Square',
		category: ''
	},
	{
		icon: I24Support,
		name: 'I24Support',
		category: ''
	}
];
