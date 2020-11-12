// UNDIRECTED GRAPH
class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList.vertex) this.adjacencyList[vertex] = []
    }

    removeVertex(removedVertex){
        // We go through each edges of the vertex we want to delete
        while(this.adjacencyList[removedVertex].length){
            const vertex = this.adjacencyList[removedVertex].pop()
            this.removeEdge(vertex, removedVertex)
        }
        delete this.adjacencyList[removedVertex]
    }

    // Since it's an undirected graph, we add the edges to both vertex
    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
    }

    // DFS RECURSIVE
    DFS_recursion(vertex){
        const result = []
        const visited = {}
        const helper = vertex => {
            if(!vertex) return null
            visited[vertex] = true
            result.push(vertex)
            for(let adjacentVertex of this.adjacencyList[vertex]){
                if(!visited[adjacentVertex]) helper(adjacentVertex)
            }
            return
        }
        helper(vertex)
        return result
    }


    DFS_iterative(vertex){
        const stack = [vertex]
        const result = []
        const visited = {}
        while(stack.length > 0){
            const next = stack.pop()
            if(!visited[next]){
                visited[next] = true
                result.push(next)
                stack.push(...this.adjacencyList[next])
            }
        }   
        return result
    } 

    // Same as DFS iterative but we use a queue instead of a stack
    BFS(vertex){
        const queue = [vertex]
        const result = []
        const visited = {}
        while(queue.length > 0){
            const next = queue.shift()
            if(!visited[next]){
                visited[next] = true
                result.push(next)
                queue.push(...this.adjacencyList[next])
            }
        }   
        return result
    } 

}

let graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("D", "E")
graph.addEdge("D", "F")
graph.addEdge("E", "F")
console.log(graph.DFS_recursion("A"))
console.log(graph.DFS_iterative("A"))
console.log(graph.BFS("A"))