import React, { useEffect, useRef } from 'react';
import { Network } from 'vis-network';
import Navbar from '../components/navbar';

const Graph = () => {
	const container = useRef(null);

	// Get friends for current user (jai)
	// const friends = ['varun', 'sameer', 'declan', 'joe'];
	const friends = [	
		'Alice',    'Bob',      'Charlie',   'David',
		'Emily',    'Frank',    'Grace',     'Hannah',
		'Ivan',     'Jack',     'Karen',     'Liam',
		'Olivia',   'Mia',      'Noah',      'Sophia',
		'Thomas',   'Victoria', 'Zoey',      'Aaron',
		'Bella',    'Chloe',    'Daniel',    'Ella',
		'Gavin',    'Harper',   'Isabella',  'Jackson',
		'Kate',     'Lily',     'Mason',     'Natalie',
		'Oliver',   'Penelope', 'Quinn',     'Ryan',
		'Samuel',   'Taylor',   'Ulysses',   'Violet',
		'William',  'Xavier',   'Yasmine',   'Zachary',
		'Abigail',  'Benjamin', 'Carmen',    'Daniel',
		'Elena',    'Finn',     'Gabriella', 'Henry',
		'Isla',     'James',    'Kayla',     'Lucy',
		'Michael',  'Nora',     'Owen',      'Olivia',
		'Parker',   'Quinn',    'Riley',     'Sophia',
		'Theodore', 'Isabella', 'Ulysses',   'Vivian',
		'Wyatt',    'Xander',   'Yara',      'Zane',
		'Ava',      'Bria',     'Caleb',     'Delilah',
		'Emma',     'Finnegan', 'Grace',     'Harper',
		'Isaac',    'Julia',    'Kaden',     'Lily',
		'Mason',    'Natalie',  'Oliver',    'Penelope',
		'Quinn',    'Ruby',     'Stella',    'Theodore',
		'Ulysses',  'Victoria', 'William',   'Xavier',
		'Yasmine',  'Zachary',  'Audrey',    'Benjamin'
	].slice(0,45);
	const people = ['Jai'].concat(friends);
	// indexes will be the same as people since we are looping through and finding all of the friends first
	// this is only since we dont have the database data (implementation will be clean for the actual thing)
	const friendsGraph = [
		[...friends],
	];

	const n = people.length;
	for (let i = 1; i < n; i++) {
		const random = Math.floor(80 * Math.random());
		const range = Math.floor(5 * Math.random());
		friendsGraph.push(friends.slice(random, random+range+1).filter(elm => elm !== people[i]));
	}

	const nodes = people.map((friend, index) => {
		return { id: index, label: friend }
	});

	const edges = [];
	const drawn = new Set();

	people.forEach((elm, index) => {
		friendsGraph[index].forEach(friend => {
			const start = people.indexOf(elm);
			const end = people.indexOf(friend);
			if (index !== end) {
				const curr = start > end ? `${end},${start}` : `${start},${end}`;
				if (!drawn.has(curr)) {
					edges.push({ from: start, to: people.indexOf(friend) });
					drawn.add(curr);
				}
			}
		});
	});

	const options = {
		edges: {
			shadow: true,
			smooth: true,
		},
		nodes: {
			shape: 'oval',
			size: 135
		}
	};

	useEffect(() => {
		const network = container.current && new Network(container.current, { nodes, edges }, options);
		network.selectNodes([0], true);
		network.focus(0);
		// use the selectnode event
		network.on('selectNode', () => {
			const arr = network.getSelection();
			console.log(arr);
		});
	}, [container, nodes, edges]);

	return (
		<div id="network">
			<Navbar></Navbar>
			<div ref={container} style={{ height: '500px', width: '800px' }} />
		</div>
	);
};

export default Graph;