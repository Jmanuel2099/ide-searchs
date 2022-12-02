from django.views import View
from django.http.response import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import json
from searchs.models_operations.graph_operations import GraphOperations

class GraphView(View):

    def __init__(self):
        self.graph_operations = GraphOperations()

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, id=0):
        if id == 0:
            response = self.graph_operations.get_all_graphs()
        else:
            response = self.graph_operations.get_graph_by_id(id)
        return JsonResponse(response)

    def post(self, request):
        graph = json.loads(request.body)
        response = self.graph_operations.create_graph(graph)
        return JsonResponse(response)
        # return JsonResponse({'message': 'Success', 'data': graph})

    def put(self, request, id):
        graph = json.loads(request.body)
        response = self.graph_operations.update_graph(graph, id)
        return JsonResponse(response)

    def delete(self, request, id):
        response = self.graph_operations.delete_graph(id)
        return JsonResponse(response)