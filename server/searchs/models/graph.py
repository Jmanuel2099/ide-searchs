from django.db import models


class Graph(models.Model):
    graph_name = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.graph_name
