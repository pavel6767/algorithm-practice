const lowestCostNode = (costs, processed) => {
  return Object.keys(costs).reduce((lowest, node) => {
    if (lowest === null || costs[node] < costs[lowest]) {
      if (!processed.includes(node)) {
        lowest = node;
      }
    }
    return lowest;
  }, null);
};

const dijkstra = (graph) => {
  const costs = Object.assign({ finish: Infinity }, graph.start);
  const parents = { finish: null };
  for (let child in graph.start) {
    // add children of start node
    parents[child] = 'start';
  }
  const processed = [];
};

let node = lowestCostNode(costs, processed);
while (node) {
  let cost = costs[node];
  let children = graph[node];
  for (let n in children) {
    let newCost = cost + children[n];
    if (!costs[n]) {
      costs[n] = newCost;
      parents[n] = node;
    }
    if (costs[n] > newCost) {
      costs[n] = newCost;
      parents[n] = node;
    }
  }
  processed.push(node);
  node = lowestCostNode(costs, processed);
}
