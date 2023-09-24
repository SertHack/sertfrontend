import React, { useEffect, useRef } from 'react';
import { Network } from 'vis-network';
import Navbar from '../components/navbar';

const Graph = () => {
  const container = useRef(null);

    // Get friends for current user (jai)
    const friends = ['varun', 'sameer', 'declan', 'joe'];
    const people = ['jai'].concat(friends);
    // indexes will be the same as people since we are looping through and finding all of the friends first
    // this is only since we dont have the database data (implementation will be clean for the actual thing)
    const friendsGraph = [
      [...friends],
      ['sameer'],
      ['varun', 'declan', 'joe'],
      ['joe', 'sameer'],
      ['sameer', 'declan']
    ];

    const nodes = people.map((friend, index) => {
      return { id: index, label: friend }
    });

    const edges = [];
    const drawn = new Set();

    people.forEach((elm,index) => {
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

  const options = {};

  useEffect(() => {
    const network = container.current && new Network(container.current, { nodes, edges }, options);
	  network.selectNodes([0], true);
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