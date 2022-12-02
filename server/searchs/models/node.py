from django.db import models
from .graph import Graph


class Node(models.Model):
    label = models.CharField(max_length=50)
    graph = models.ForeignKey(Graph, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.label

