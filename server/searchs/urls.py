from django.urls import path
from searchs.views.graph_view import GraphView

urlpatterns= [
    path('graph', GraphView.as_view(), name='Processing graphs whitout ID'),
    path('graph/<int:id>',GraphView.as_view(), name='Processing graphs whit ID')
]