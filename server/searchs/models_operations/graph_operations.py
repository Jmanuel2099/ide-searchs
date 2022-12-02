from searchs.models.graph import Graph


class GraphOperations:
    def __init__(self) -> None:
        pass
    
    def get_all_graphs(self):
        graphs = list(Graph.objects.values())
        if len(graphs) > 0:
            return {'message': 'Success', 'data': graphs}
        
        return {'message' : 'No graphs in the database' , 'data': []}

    def get_graph_by_id(self, id):
        graph = list(Graph.objects.filter(id = id).values())
        if len(graph) == 0:
            return {'message' : 'Graph with id %s not found!' %id, 'data': None}

        return {'message' : 'Graph with id %s' %id, 'data': graph[0]}

    def create_graph(self, graph):
        new_graph = Graph(graph_name= graph['graph_name'])
        new_graph.save()
        if list(Graph.objects.filter(id = new_graph.id).values()):
            return {'message' : 'Succes'}
        return {'message': 'Failed'}

    
    def update_graph(self, new_data, id):
        if self.get_graph_by_id(id)['data']:
            graph = Graph.objects.get(id=id)
            graph.graph_name = new_data['graph_name']
            graph.save()
            return {'message' : 'Graph with id %s' %id, 'data': {'graph_name': graph.graph_name}}

        return {'message' : 'Graph with id %s not found!' %id, 'data': None}
        

    def delete_graph(self, id):
        if self.get_graph_by_id(id)['data']:
            Graph.objects.filter(id=id).delete()
            return {'message' : 'Graph with id %s deleted!' %id}

        return {'message' : 'Graph with id %s not found!' %id}
        
