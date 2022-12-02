from django.views import View
from searchs.models_operations.node_operations import NodeOperations


class NodeView(View):
    
    def __init__(self) -> None:
        self.node_operations = NodeOperations()