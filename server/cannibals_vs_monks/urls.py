from django.urls import path
from cannibals_vs_monks.game_searchs_view import GameSearchsView

game_searchs = GameSearchsView()

urlpatterns = [
    path('bfs', game_searchs.bfs_search),
    path('dfs', game_searchs.dfs_search),
    path('best_first', game_searchs.best_first_search)
]