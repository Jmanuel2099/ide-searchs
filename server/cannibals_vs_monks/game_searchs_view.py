import json
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from cannibals_vs_monks.searchs.breadth_first_search import BreadthFirstSearch
from cannibals_vs_monks.searchs.depth_first_search import DepthFirstSearch

class GameSearchsView:

    @csrf_exempt
    def bfs_search(self, request):
        request_body = json.loads(request.body)
        is_correct = self._examinate_input_data(request_body)
        if len(is_correct) != 0:
            return JsonResponse({'error': is_correct})
        
        initial_state = (request_body['cannibals'], request_body['monks'], request_body['side'])
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

        initial_state = (request_body['cannibals'], request_body['monks'], request_body['side'])
        dfs_search = DepthFirstSearch()
        dfs_search.dfs(initial_state)
        path = dfs_search.get_visited_states()
        return JsonResponse({
            'initial_state': initial_state,
            'path': self._map_states(path),
            'path_len': len(path),
            'generated_nodes': dfs_search.get_node_generated()
        })

    def _map_states(self, states):
        mapped_states = []
        for state in states:
            mapped_states.append({
                'cannibals' : state[0],
                'monks': state[1],
                'side': state[2]
            })
        return mapped_states

    def _examinate_input_data(self, data):
        if (data['cannibals'] > 3 or data['cannibals'] < 0 
            or data['monks'] > 3 or data['monks'] < 0):
            return'Monks and cannibals must be between 0 and 3'
        
        if data['side'] != 'right' and data['side'] != 'left':
            return 'The strings allowed for the side are right and left'
        return ''
