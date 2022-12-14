import json
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from cannibals_vs_monks.searchs.breadth_first_search import BreadthFirstSearch
from cannibals_vs_monks.searchs.depth_first_search import DepthFirstSearch
from cannibals_vs_monks.searchs.best_first_search import BestFirstSearch
from cannibals_vs_monks.searchs.uniform_cost_search import UniformCostSearch

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
        bfs_search.bfs(initial_state, request_body['time'])
        path = bfs_search.get_visited_states()
        return JsonResponse({
            'path': self._map_states(path ),
            'path_len': len(path),
            'generated_nodes': bfs_search.get_node_generated(),
            'win' : bfs_search.get_win()

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
        dfs_search.dfs(initial_state, request_body['time'])
        path = dfs_search.get_visited_states()
        return JsonResponse({
            'path': self._map_states(path),
            'path_len': len(path),
            'generated_nodes': dfs_search.get_node_generated(),
            'win': dfs_search.get_win()
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
        best_first.best_first(initial_state, request_body['time'])
        path = best_first.get_path()
        return JsonResponse({
            'path': self._map_states(path),
            'path_len' : len(path),
            'generated_nodes' : best_first.get_node_generated(),
            'win': best_first.get_win()
        })

    @csrf_exempt
    def uniform_cost_search(self, request):
        request_body = json.loads(request.body)
        is_correct = self._examinate_input_data(request_body)
        if len(is_correct) != 0:
            return JsonResponse({'error': is_correct})
        
        cannibals = request_body['cannibals']
        missionary = request_body['missionary']
        initial_state = (missionary, cannibals, request_body['side'], missionary + cannibals )
        uniform_cost = UniformCostSearch()
        uniform_cost.uniform_cost(initial_state, request_body['time'])
        path = uniform_cost.get_path()
        return JsonResponse({
            'path': self._map_states(path),
            'path_len' : len(path),
            'generated_nodes' : uniform_cost.get_nodes_generated(),
            'cost':  uniform_cost.get_cost(),
            'win': uniform_cost.get_win()
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

        if data['time'] < 0:
            return 'Invalid time'
        return ''
