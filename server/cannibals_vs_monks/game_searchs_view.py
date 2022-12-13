import json
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from cannibals_vs_monks.searchs.breadth_first_search import BreadthFirstSearch
from cannibals_vs_monks.searchs.depth_first_search import DepthFirstSearch
from cannibals_vs_monks.searchs.best_first_search import BestFirstSearch

class GameSearchsView:

    @csrf_exempt
    def bfs_search(self, request):
        request_body = json.loads(request.body)
        is_correct = self._examinate_input_data(request_body)
        if len(is_correct) != 0:
            return JsonResponse({'error': is_correct})

        cannibals = request_body['cannibals']
        missionary = request_body['missionary']
        initial_state = (missionary, cannibals, request_body['side'], missionary + cannibals )
        bfs_search = BreadthFirstSearch()
        bfs_search.bfs(initial_state)
        path = bfs_search.get_visited_states()
        return JsonResponse({
            'path': self._map_states(path ),
            'path_len': len(path),
            'generated_nodes': bfs_search.get_node_generated()
        })
    
    @csrf_exempt
    def dfs_search(self, request):
        request_body = json.loads(request.body)
        is_correct = self._examinate_input_data(request_body)
        if len(is_correct) != 0:
            return JsonResponse({'error': is_correct})
        
        cannibals = request_body['cannibals']
        missionary = request_body['missionary']
        initial_state = (missionary, cannibals, request_body['side'], missionary + cannibals )
        dfs_search = DepthFirstSearch()
        dfs_search.dfs(initial_state)
        path = dfs_search.get_visited_states()
        return JsonResponse({
            'path': self._map_states(path),
            'path_len': len(path),
            'generated_nodes': dfs_search.get_node_generated()
        })
    
    @csrf_exempt
    def best_first_search(self, request):
        request_body = json.loads(request.body)
        is_correct = self._examinate_input_data(request_body)
        if len(is_correct) != 0:
            return JsonResponse({'error': is_correct})
        
        cannibals = request_body['cannibals']
        missionary = request_body['missionary']
        initial_state = (missionary, cannibals, request_body['side'], missionary + cannibals )
        best_first = BestFirstSearch()
        best_first.best_first(initial_state)
        path = best_first.get_path()
        return JsonResponse({
            'path': self._map_states(path),
            'path_len' : len(path),
            'generated_nodes' : best_first.get_node_generated()
        })

    def _map_states(self, states):
        mapped_states = []
        for state in states:
            mapped_states.append({
                'missionary' : state[0],
                'cannibals': state[1],
                'side': state[2]
            })
        return mapped_states

    def _examinate_input_data(self, data):
        if (data['cannibals'] > 3 or data['cannibals'] < 0 
            or data['missionary'] > 3 or data['missionary'] < 0):
            return'Missionary and cannibals must be between 0 and 3'
        
        if data['side'] != 'right' and data['side'] != 'left':
            return 'The strings allowed for the side are right and left'

        if data['cannibals'] > data['missionary']:
            return 'You lost, there are more cannibals than missionaries.'
        return ''
