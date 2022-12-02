from django.db import models
from .node import Node


class Edge(models.Model):
    weight = models.IntegerField
    neighbor_nodes = models.ManyToManyField(Node)
