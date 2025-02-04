#Djikstra's Algorithm
def djikstra(adjacency_list, start, end):
    # Initialize the distance and previous arrays
    distance = [float('inf') for i in range(len(adjacency_list))]
    previous = [None for i in range(len(adjacency_list))]
    distance[start] = 0
    # Initialize the queue
    queue = [i for i in range(len(adjacency_list))]
    while queue:
        # Find the vertex with the smallest distance
        min_distance = float('inf')
        for vertex in queue:
            if distance[vertex] < min_distance:
                min_distance = distance[vertex]
                current_vertex = vertex
        # Remove the vertex from the queue
        queue.remove(current_vertex)
        # Check the neighbors of the current vertex
        for neighbor in adjacency_list[current_vertex]:
            new_distance = distance[current_vertex] + 1
            if new_distance < distance[neighbor]:
                distance[neighbor] = new_distance
                previous[neighbor] = current_vertex
    # Reconstruct the path
    path = []
    current_vertex = end
    while current_vertex is not None:
        path.insert(0, current_vertex)
        current_vertex = previous[current_vertex]
    return path

# A-LINE
A = [[1],[0,2,3],[1,3,4],[1,2,4],[2,3,5],[4]]

# B-LINE
adjacency_list = [[1,2],[0,2,3,4],[0,1,3,4],[1,2,4,5],[1,2,3,5],[3,4,6,7],[5,7,8,9],[5,6,8,9],[6,7,9,10],[6,7,8,10],[8,9]]

#call
print(djikstra(adjacency_list, 0, 7))