from django.views import View
from searchs.models_operations.edge_operations import EdgeOperations


class EdgeView(View):
    def __init__(self) -> None:
        self.edge_operations = EdgeOperations()